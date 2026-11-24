// Vecchio indirizzo della prima versione dell'app: ora i dati passano da /api/db.
export default function handler(req, res) {
  res.setHeader('Cache-Control', 'no-store');
  res.status(410).json({ error: "L'app è stata aggiornata: ricarica la pagina." });
}
