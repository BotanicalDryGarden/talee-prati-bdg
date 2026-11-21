// Dati della giornata: ore impiegate per le talee, chi ha fatto le talee, chi ha riempito i plateau, note.
import { cmd, KEYS, checkPin, body, ensureSeed } from './_store.js';

const day = v => typeof v === 'string' && /^\d{4}-\d{2}-\d{2}$/.test(v);
const names = a => (Array.isArray(a) ? a : []).filter(x => typeof x === 'string').map(x => x.trim().slice(0, 40)).filter(Boolean).slice(0, 30);

export default async function handler(req, res) {
  res.setHeader('Cache-Control', 'no-store');
  if (!checkPin(req, res)) return;
  if (req.method !== 'POST') return res.status(405).json({ error: 'Metodo non permesso' });
  try {
    await ensureSeed();
    const b = body(req);
    if (!day(b.data)) return res.status(400).json({ error: 'Giorno non valido' });
    const ore = typeof b.ore === 'number' && isFinite(b.ore) && b.ore > 0 && b.ore <= 24 ? b.ore : null;
    const g = { ore, taleatori: names(b.taleatori), riempitori: names(b.riempitori), nota: typeof b.nota === 'string' ? b.nota.trim().slice(0, 500) : '', aggiornato: new Date().toISOString() };
    if (!g.ore && !g.taleatori.length && !g.riempitori.length && !g.nota) await cmd('HDEL', KEYS.gio, b.data);
    else await cmd('HSET', KEYS.gio, b.data, JSON.stringify(g));
    res.status(200).json({ ok: true });
  } catch (e) { res.status(500).json({ error: e.message }); }
}
