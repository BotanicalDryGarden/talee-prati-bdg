# Talee Prati BDG — app su Vercel

App separata e indipendente (non tocca altri progetti). Dati salvati in un database Upstash Redis dedicato (chiavi con prefisso `talee:`).

## Più persone, più dispositivi
Tutti i dispositivi leggono e scrivono gli stessi dati. Quello che inserisce una persona compare sugli altri telefoni/computer entro circa 10 secondi (subito se si riapre l'app o si torna sulla scheda). La password (`APP_PIN`) si scrive una volta sola su ogni dispositivo.

## Aggiornamento (versione 3)
Al primo accesso dopo l'aggiornamento l'app sistema da sola i dati:
- tiene tutto quello che è già stato inserito o corretto dall'app;
- aggiunge le talee del 20, 21 e 23 novembre 2026 prese dall'Excel, solo se per quel giorno e quella varietà non c'è già nessuna riga (niente doppioni).

## Struttura
- `index.html` — l'app (telefono e PC)
- `api/db.js` — unico punto di accesso ai dati: legge tutto e salva le modifiche
- `api/_store.js` — collegamento al database e aggiornamento automatico dei dati
- `api/_seed.js` — dati iniziali giugno–novembre 2026 (usati solo su un database vuoto)
- `api/data.js`, `api/reg.js`, `api/target.js`, `api/giornate.js` — indirizzi della prima versione, ora non più usati (rispondono "ricarica la pagina")

## Variabili su Vercel (già impostate)
- Database Upstash Redis collegato dal tab Storage
- `APP_PIN` = password dell'app
