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

// ---------------------------------------------------------------------------
// Versione 3: un'unica "raccolta" per ogni tipo di dato (cicli, varietà, talee,
// giornate, impostazioni, spedizioni). Tutti i dispositivi leggono e scrivono qui.
// ---------------------------------------------------------------------------
export const COLS = ['campagne', 'varieta', 'registrazioni', 'giornate', 'impostazioni', 'spedizioni'];
export const keyOf = col => col === 'registrazioni' ? KEYS.reg : col === 'giornate' ? KEYS.gio : P + 'h:' + col;

// Talee dal 20 al 23 novembre 2026 prese dall'Excel: vengono aggiunte solo se
// nell'app non c'è già nessuna riga per quel giorno e quella varietà (niente doppioni).
const AGG_NOV = [{"id": "r-2026-11-20-thymus-serpyllum-elfin", "campagna": "nov-dic-2026", "varieta": "thymus-serpyllum-elfin", "data": "2026-11-20", "qta": 37}, {"id": "r-2026-11-20-verbena-hybrida", "campagna": "nov-dic-2026", "varieta": "verbena-hybrida", "data": "2026-11-20", "qta": 91}, {"id": "r-2026-11-20-verbena-peruviana", "campagna": "nov-dic-2026", "varieta": "verbena-peruviana", "data": "2026-11-20", "qta": 70}, {"id": "r-2026-11-21-lippia-nodiflora-var-canescens-al84", "campagna": "nov-dic-2026", "varieta": "lippia-nodiflora-var-canescens-al84", "data": "2026-11-21", "qta": 117}, {"id": "r-2026-11-21-thymus-serpyllum-elfin", "campagna": "nov-dic-2026", "varieta": "thymus-serpyllum-elfin", "data": "2026-11-21", "qta": 33}, {"id": "r-2026-11-21-verbena-hybrida", "campagna": "nov-dic-2026", "varieta": "verbena-hybrida", "data": "2026-11-21", "qta": 19}, {"id": "r-2026-11-23-frankenia-laevis", "campagna": "nov-dic-2026", "varieta": "frankenia-laevis", "data": "2026-11-23", "qta": 26}];

async function migrateV3() {
  const [c, v, h] = await pipeline([['GET', KEYS.campagne], ['GET', KEYS.varieta], ['HGETALL', KEYS.reg]]);
  const cmds = [];
  const camp = JSON.parse(c || '[]');
  for (const x of camp) { const { id, ...rest } = x; if (!rest.sezione) rest.sezione = 'prati'; cmds.push(['HSETNX', keyOf('campagne'), id, JSON.stringify(rest)]); }
  const vars = JSON.parse(v || '[]');
  for (const x of vars) { const { id, ...rest } = x; cmds.push(['HSETNX', keyOf('varieta'), id, JSON.stringify(rest)]); }
  const have = new Set();
  for (let i = 0; i < (h || []).length; i += 2) { try { const r = JSON.parse(h[i + 1]); if (+r.qta > 0) have.add(r.data + '|' + r.varieta); } catch (e) {} }
  const add = ['HSET', KEYS.reg];
  for (const r of AGG_NOV) if (!have.has(r.data + '|' + r.varieta)) add.push(r.id, JSON.stringify({ ...r, nota: '', autore: 'import', creato: new Date().toISOString() }));
  if (add.length > 2) cmds.push(add);
  cmds.push(['SET', P + 'seedv', '3']);
  await pipeline(cmds);
}

export async function ensureV3() {
  for (let t = 0; t < 20; t++) {
    const v = await cmd('GET', P + 'seedv');
    if (v === '3') return;
    if (v !== '2') { await ensureSeed(); continue; }
    const lock = await cmd('SET', P + 'migr3', '1', 'NX', 'EX', '60');
    if (lock === 'OK') { await migrateV3(); return; }
    await new Promise(r => setTimeout(r, 400));
  }
  throw new Error('Aggiornamento dei dati in corso, riprova tra qualche secondo.');
}

export async function readCols() {
  await ensureV3();
  const out = await pipeline(COLS.map(col => ['HGETALL', keyOf(col)]));
  const res = {};
  COLS.forEach((col, k) => {
    const h = out[k] || [];
    const arr = [];
    for (let i = 0; i < h.length; i += 2) { try { arr.push({ ...JSON.parse(h[i + 1]), id: h[i] }); } catch (e) {} }
    res[col] = arr;
  });
  return res;
}
