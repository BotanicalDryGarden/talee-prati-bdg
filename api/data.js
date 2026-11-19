import { readAll, checkPin } from './_store.js';
export default async function handler(req, res) {
  res.setHeader('Cache-Control', 'no-store');
  if (!checkPin(req, res)) return;
  try { res.status(200).json(await readAll()); }
  catch (e) { res.status(500).json({ error: e.message }); }
}
