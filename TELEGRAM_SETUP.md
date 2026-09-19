# Ennakkotilaukset Telegramiin — käyttöönotto

Kun asiakas tekee ennakkotilauksen sivustolla, tilaus lähetetään
automaattisesti Telegram-viestinä kahvilan omaan ryhmään. Tämä ei
vaadi asiakkaalta eikä henkilökunnalta erillistä sovellusta — pelkkä
tavallinen Telegram-sovellus puhelimessa riittää.

## 1. Luo botti (5 min, ilmainen)

1. Avaa Telegram ja etsi käyttäjä **@BotFather**.
2. Lähetä komento `/newbot`.
3. Anna botille nimi (esim. `Cafe Maria Tilaukset`) ja käyttäjätunnus
   (esim. `cafemaria_tilaukset_bot` — täytyy päättyä sanaan "bot").
4. BotFather antaa sinulle **botin tokenin**, joka näyttää tältä:
   `123456789:AAExampleTokenStringHere`. Kopioi se talteen.

## 2. Luo ryhmä henkilökunnalle ja lisää botti siihen

1. Luo Telegramissa uusi ryhmä, esim. "Café Maria — Tilaukset", ja
   lisää siihen kaikki, joiden pitää nähdä tulevat tilaukset.
2. Lisää juuri luomasi botti ryhmän jäseneksi (Lisää jäsen -> etsi
   botin käyttäjätunnus).

## 3. Selvitä ryhmän chat ID

Helpoin tapa:
1. Lähetä ryhmään mikä tahansa viesti (esim. "moi").
2. Avaa selaimessa (korvaa `<TOKEN>` botin tokenilla):
   `https://api.telegram.org/bot<TOKEN>/getUpdates`
3. Vastauksesta löydät `"chat":{"id": -1001234567890, ...}` — tuo
   negatiivinen numero on ryhmän **chat ID**.

## 4. Täytä ympäristömuuttujat

1. Kopioi `.env.local.example` uudeksi tiedostoksi nimeltä
   `.env.local` (projektin juureen, samaan kansioon kuin
   `package.json`).
2. Täytä:
   ```
   TELEGRAM_BOT_TOKEN=123456789:AAExampleTokenStringHere
   TELEGRAM_CHAT_ID=-1001234567890
   ```
3. Käynnistä `npm run dev` uudelleen (ympäristömuuttujat luetaan vain
   käynnistyksessä).

## 5. Testaa

Tee sivustolla testitilaus ja tarkista, että viesti ilmestyy
Telegram-ryhmään muutamassa sekunnissa. Jos ei ilmesty, tarkista
palvelimen lokit (`npm run dev` -komennon terminaali) — sieltä
näkyy jos token/chat ID on väärin.

## Julkaisussa (esim. Vercel)

Kun sivusto viedään tuotantoon (esim. Vercel), lisää samat kaksi
muuttujaa (`TELEGRAM_BOT_TOKEN`, `TELEGRAM_CHAT_ID`) palvelun omista
"Environment Variables" -asetuksista — `.env.local` toimii vain
paikallisessa kehityksessä.

## Ilman asetuksia

Jos `.env.local` puuttuu tai on tyhjä, sivusto toimii silti — tilaus
"onnistuu" asiakkaan silmissä ja saa tilausnumeron, mutta viestiä ei
lähetetä minnekään (näet tästä varoituksen palvelimen lokissa). Näin
demo ei hajoa ennen kuin ehdit tehdä yllä olevan käyttöönoton.
