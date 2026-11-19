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

export async function ensureSeed() {
  const first = await cmd('SET', P + 'seeded', '1', 'NX');
  if (first !== 'OK') return;
  const cmds = [
    ['SET', P + 'campagne', JSON.stringify(SEED.campagne)],
    ['SET', P + 'varieta', JSON.stringify(SEED.varieta)],
  ];
  const h = ['HSET', P + 'reg'];
  for (const r of SEED.registrazioni) h.push(r.id, JSON.stringify({ ...r, creato: new Date().toISOString() }));
  cmds.push(h);
  await pipeline(cmds);
}

export async function readAll() {
  await ensureSeed();
  const [c, v, h] = await pipeline([['GET', P + 'campagne'], ['GET', P + 'varieta'], ['HGETALL', P + 'reg']]);
  const reg = [];
  for (let i = 0; i < (h || []).length; i += 2) { try { reg.push(JSON.parse(h[i + 1])); } catch (e) {} }
  return { campagne: JSON.parse(c || '[]'), varieta: JSON.parse(v || '[]'), registrazioni: reg };
}

export const KEYS = { reg: P + 'reg', campagne: P + 'campagne', varieta: P + 'varieta' };

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
