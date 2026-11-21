# Talee Prati BDG — app su Vercel

App separata e indipendente (non tocca altri progetti). Dati salvati in un database Upstash Redis dedicato.

## Messa online (una volta sola)

1. **GitHub** → New repository → nome `talee-prati-bdg` (privato va bene) → "uploading an existing file" → trascina tutto il contenuto di questa cartella (index.html, cartella api, package.json, vercel.json) → Commit.
2. **Vercel** → Add New… → Project → importa `talee-prati-bdg` → Framework: *Other* → Deploy.
3. Nel progetto Vercel → tab **Storage** → Create Database → **Upstash for Redis** (piano Free) → Connect al progetto `talee-prati-bdg`.
4. **Settings → Environment Variables** → aggiungi `APP_PIN` con la password che vuoi: l'app la chiederà una volta su ogni dispositivo.
5. Tab **Deployments** → sui tre puntini dell'ultimo → **Redeploy**.

Al primo accesso l'app carica da sola le talee da giugno a novembre 2026 importate dall'Excel (scheda produzione luglio26-2027). Se l'app era già in uso con i soli dati di novembre, al primo accesso dopo l'aggiornamento aggiunge i mesi precedenti senza toccare le talee inserite dall'app.

## Struttura

- `index.html` — l'app (telefono e PC)
- `api/data.js` — legge tutti i dati
- `api/reg.js` — aggiunge, corregge, elimina registrazioni
- `api/target.js` — cambia la quantità da produrre
- `api/giornate.js` — salva per ogni giorno: ore, chi ha fatto le talee, chi ha riempito i plateau, note
- `api/_store.js` — collegamento al database (chiavi con prefisso `talee:`)
- `api/_seed.js` — dati iniziali giugno-novembre 2026 (cicli Lug-Ago, Set-Ott, Nov-Dic)
