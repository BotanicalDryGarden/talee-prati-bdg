import { cmd, KEYS, checkPin, body, ensureSeed } from './_store.js';
export default async function handler(req, res) {
  res.setHeader('Cache-Control', 'no-store');
  if (!checkPin(req, res)) return;
  if (req.method !== 'POST') return res.status(405).json({ error: 'Metodo non permesso' });
  try {
    await ensureSeed();
    const { campagna, varieta, qta } = body(req);
    if (!(typeof qta === 'number' && qta >= 0)) return res.status(400).json({ error: 'Quantità non valida' });
    const list = JSON.parse((await cmd('GET', KEYS.campagne)) || '[]');
    const c = list.find(x => x.id === campagna);
    if (!c) return res.status(404).json({ error: 'Ciclo non trovato' });
    c.target = c.target || {}; c.target[varieta] = qta;
    await cmd('SET', KEYS.campagne, JSON.stringify(list));
    res.status(200).json({ ok: true });
  } catch (e) { res.status(500).json({ error: e.message }); }
}
