# Barber's Cave Pula — prijedlog web stranice

Vue 3 + Vite jednostranični sajt, napravljen kao prijedlog izgleda za Barber's Cave Pula. "Rezerviraj termin" otvara vlastiti demo booking flow (bez stvarnog slanja). Gore desno u headeru (uvijek vidljivo, iznad glavne navigacije) postoji sitan link "Pregled za vlasnicu →" — otvara demo nadzorne ploče (kalendar, dodavanje termina, dodavanje godišnjeg odmora) kakva bi postojala da se napravi prava aplikacija. Link je namjerno malen i vizualno odvojen od navigacije za kupce.

## Pokretanje lokalno

```bash
npm install
npm run dev
```

Otvara se na `http://localhost:5173`.

## Build za produkciju

```bash
npm run build
```

Rezultat ide u `dist/` mapu.

## Deploy na Netlify

- **Drag & drop:** pokreni `npm run build`, pa prevuci `dist` mapu na [app.netlify.com/drop](https://app.netlify.com/drop).
- **Git repo:** spoji repozitorij na Netlify — build command `npm run build`, publish directory `dist` (već je postavljeno u `netlify.toml`).

## Gdje mijenjati sadržaj

- `src/data/services.js` — cjenik i usluge (Kosa / Brada / Tretmani)
- `src/data/team.js` — majstori/frizerke
- `src/data/site.js` — radno vrijeme, telefon, Instagram
- `src/composables/useAdminDemo.js` — izmišljeni termini u "Pregled za vlasnicu" kalendaru
- `src/components/*.vue` — tekstovi po sekcijama (hero, o nama, zašto mi...)
