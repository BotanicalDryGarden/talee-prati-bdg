// Archivio dati su Upstash Redis (REST), collegato dal Marketplace di Vercel.
import { SEED } from './_seed.js';

const URL_ = process.env.KV_REST_API_URL || process.env.UPSTASH_REDIS_REST_URL;
const TOKEN = process.env.KV_REST_API_TOKEN || process.env.UPSTASH_REDIS_REST_TOKEN;
const P = 'talee:'; // prefisso delle chiavi, per non mischiarsi con altro

async function pipeline(cmds) {
  if (!URL_ || !TOKEN) throw new Error('Database non collegato: aggiungi Upstash Redis dal tab Storage del progetto su Vercel.');
  const r = await fetch(URL_.replace(/\/$/, '') + '/pipeline', {
    method: 'POST',
    headers: { Authorization: 'Bearer ' + TOKEN, 'Content-Type': 'application/json' },
    body: JSON.stringify(cmds),
  });
  if (!r.ok) throw new Error('Errore database ' + r.status);
  const out = await r.json();
  for (const o of out) if (o.error) throw new Error(o.error);
  return out.map(o => o.result);
}
export const cmd = async (...c) => (await pipeline([c]))[0];
export { pipeline };

export const KEYS = { reg: P + 'reg', campagne: P + 'campagne', varieta: P + 'varieta', gio: P + 'gio' };

const stamp = r => JSON.stringify({ ...r, creato: new Date().toISOString() });

// Primo avvio: carica tutti i dati iniziali (giugno-novembre 2026).
async function firstSeed() {
  const cmds = [
    ['SET', KEYS.campagne, JSON.stringify(SEED.campagne)],
    ['SET', KEYS.varieta, JSON.stringify(SEED.varieta)],
  ];
  const h = ['HSET', KEYS.reg];
  for (const r of SEED.registrazioni) h.push(r.id, stamp(r));
  cmds.push(h);
  for (const [d, g] of Object.entries(SEED.giornate || {})) cmds.push(['HSETNX', KEYS.gio, d, JSON.stringify(g)]);
  cmds.push(['SET', P + 'seedv', '2']);
  await pipeline(cmds);
}

// Aggiornamento dalla versione 1 (solo novembre) alla versione 2 (giugno-novembre).
// Tiene tutto quello che è stato inserito o corretto dall'app; toglie solo le 12 righe
// "extra ottobre" messe al 1° novembre, che ora stanno nel ciclo Nov-Dic come riporto.
async function migrateV2() {
  const [c] = await pipeline([['GET', KEYS.campagne]]);
  const cur = JSON.parse(c || '[]');
  const campagne = SEED.campagne.map(s => {
    const old = cur.find(x => x.id === s.id);
    return old ? { ...s, target: { ...s.target, ...(old.target || {}) } } : s;
  });
  for (const o of cur) if (!campagne.find(x => x.id === o.id)) campagne.push(o);
  campagne.sort((a, b) => (a.ordine ?? 0) - (b.ordine ?? 0));
  const cmds = [
    ['SET', KEYS.campagne, JSON.stringify(campagne)],
    ['SET', KEYS.varieta, JSON.stringify(SEED.varieta)],
    ['HDEL', KEYS.reg, ...Array.from({ length: 12 }, (_, i) => 'imp-' + String(i).padStart(3, '0'))],
  ];
  // le righe di novembre della versione 1 (imp-012 ... imp-060) restano come sono
  const h = ['HSET', KEYS.reg];
  for (const r of SEED.registrazioni) if (!r.id.startsWith('r-2026-11-')) h.push(r.id, stamp(r));
  cmds.push(h);
  for (const [d, g] of Object.entries(SEED.giornate || {})) cmds.push(['HSETNX', KEYS.gio, d, JSON.stringify(g)]);
  cmds.push(['SET', P + 'seedv', '2']);
  await pipeline(cmds);
}

export async function ensureSeed() {
  const [v] = await pipeline([['GET', P + 'seedv']]);
  if (v === '2') return;
  const lock = await cmd('SET', P + 'migr2', '1', 'NX', 'EX', '60');
  if (lock !== 'OK') return;
  const first = await cmd('SET', P + 'seeded', '1', 'NX');
  if (first === 'OK') await firstSeed();
  else await migrateV2();
}

export async function readAll() {
  await ensureSeed();
  const [c, v, h, g] = await pipeline([['GET', KEYS.campagne], ['GET', KEYS.varieta], ['HGETALL', KEYS.reg], ['HGETALL', KEYS.gio]]);
  const reg = [];
  for (let i = 0; i < (h || []).length; i += 2) { try { reg.push(JSON.parse(h[i + 1])); } catch (e) {} }
  const giornate = {};
  for (let i = 0; i < (g || []).length; i += 2) { try { giornate[g[i]] = JSON.parse(g[i + 1]); } catch (e) {} }
  return { campagne: JSON.parse(c || '[]'), varieta: JSON.parse(v || '[]'), registrazioni: reg, giornate };
}

export function checkPin(req, res) {
  const pin = process.env.APP_PIN;
  if (!pin) return true;
  if ((req.headers['x-pin'] || '') === pin) return true;
  res.status(401).json({ error: 'PIN errato' });
  return false;
}

export function body(req) {
  if (req.body && typeof req.body === 'object') return req.body;
  try { return JSON.parse(req.body || '{}'); } catch (e) { return {}; }
}
