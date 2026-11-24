// Unico punto di accesso ai dati dell'app: GET legge tutto, POST salva le modifiche.
import { cmd, pipeline, checkPin, body, ensureV3, readCols, COLS, keyOf } from './_store.js';

const okId = id => typeof id === 'string' && /^[A-Za-z0-9._:\-]{1,120}$/.test(id);

export default async function handler(req, res) {
  res.setHeader('Cache-Control', 'no-store');
  if (!checkPin(req, res)) return;
  try {
    if (req.method === 'GET') return res.status(200).json(await readCols());
    if (req.method !== 'POST') return res.status(405).json({ error: 'Metodo non permesso' });
    await ensureV3();
    const ops = Array.isArray(body(req).ops) ? body(req).ops : [];
    if (!ops.length || ops.length > 200) return res.status(400).json({ error: 'Nessuna modifica valida' });
    for (const o of ops) {
      if (!COLS.includes(o.col) || !okId(o.id) || !['set', 'update', 'delete'].includes(o.op)) return res.status(400).json({ error: 'Modifica non valida' });
      if (o.op !== 'delete' && (typeof o.data !== 'object' || o.data === null || Array.isArray(o.data) || JSON.stringify(o.data).length > 50000)) return res.status(400).json({ error: 'Dati non validi' });
    }
    const now = new Date().toISOString();
    const cmds = [];
    for (const o of ops) {
      const k = keyOf(o.col);
      if (o.op === 'delete') { cmds.push(['HDEL', k, o.id]); continue; }
      let d = { ...o.data };
      delete d.id;
      if (o.op === 'update') {
        const cur = await cmd('HGET', k, o.id);
        d = { ...(cur ? JSON.parse(cur) : {}), ...d };
      }
      if (o.col === 'registrazioni') d = { ...d, id: o.id };
      d.aggiornato = now;
      cmds.push(['HSET', k, o.id, JSON.stringify(d)]);
    }
    await pipeline(cmds);
    res.status(200).json({ ok: true });
  } catch (e) { res.status(500).json({ error: e.message }); }
}
