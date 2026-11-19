import { cmd, pipeline, KEYS, checkPin, body, ensureSeed } from './_store.js';
import { randomUUID } from 'node:crypto';

const num = v => (typeof v === 'number' && isFinite(v) && v >= 0 && v < 1e6);
const day = v => typeof v === 'string' && /^\d{4}-\d{2}-\d{2}$/.test(v);
const str = (v, n) => (typeof v === 'string' ? v.slice(0, n) : '');

export default async function handler(req, res) {
  res.setHeader('Cache-Control', 'no-store');
  if (!checkPin(req, res)) return;
  try {
    await ensureSeed();
    if (req.method === 'POST') {
      const items = Array.isArray(body(req).items) ? body(req).items : [];
      const ok = items.filter(i => num(i.qta) && i.qta > 0 && day(i.data) && i.varieta && i.campagna).slice(0, 100);
      if (!ok.length) return res.status(400).json({ error: 'Nessuna riga valida' });
      const h = ['HSET', KEYS.reg];
      const now = new Date().toISOString();
      for (const i of ok) {
        const id = randomUUID();
        h.push(id, JSON.stringify({ id, campagna: str(i.campagna, 80), varieta: str(i.varieta, 120), data: i.data, qta: i.qta, nota: str(i.nota, 200), autore: str(i.autore, 60), creato: now }));
      }
      await pipeline([h]);
      return res.status(200).json({ saved: ok.length });
    }
    if (req.method === 'PATCH') {
      const { id, qta, data } = body(req);
      const cur = await cmd('HGET', KEYS.reg, String(id || ''));
      if (!cur) return res.status(404).json({ error: 'Riga non trovata' });
      const r = JSON.parse(cur);
      if (num(qta)) r.qta = qta;
      if (day(data)) r.data = data;
      r.modificato = new Date().toISOString();
      await cmd('HSET', KEYS.reg, r.id, JSON.stringify(r));
      return res.status(200).json({ ok: true });
    }
    if (req.method === 'DELETE') {
      const id = String(req.query.id || '');
      await cmd('HDEL', KEYS.reg, id);
      return res.status(200).json({ ok: true });
    }
    res.status(405).json({ error: 'Metodo non permesso' });
  } catch (e) { res.status(500).json({ error: e.message }); }
}
