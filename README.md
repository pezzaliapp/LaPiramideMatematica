# La Piramide Matematica — PWA

![Icon-192](icon-192.png) ![Icon-512](icon-512.png)

> **Semplice. Onesta. Implacabile.**  
> Se un’idea è chiara, non ha bisogno di luci di scena. (Bill Bernbach)

---

## 🎯 L’idea
Una piramide **ruotata**: **base in alto** (da sinistra a destra), **punta in basso**.  
Ogni numero nasce dalla **differenza assoluta** dei due adiacenti sopra: `|a − b|`.

---

## 🧩 La regola (quella vera)
- Usa **tutti i numeri da 1 a 15**.  
- **Una sola volta ciascuno.**  
- **Nessun zero. Nessun duplicato.**

Se sbagli, la piramide te lo dice: senza moralismi, con la logica.

---

## 🕹️ Come si gioca
1. Inserisci i **5 numeri** della **base** (in alto).  
2. La piramide si calcola verso il basso con le differenze assolute.  
3. **Controlla Unicità** → scopri subito se c’è un doppione, uno zero o un fuori scala.  
4. **Genera base valida** → vuoi un punto di partenza già corretto? Te lo trova lei.  
5. **Condividi** → un link ricrea la stessa base sul device di chi lo apre.

---

## 💡 Perché funziona
- Non promette magie. Ti dà **regole chiare**.  
- Ti allena a **prevedere**: ogni scelta in alto ridisegna tutto in basso.  
- È **offline** per scelta: niente account, niente dati in giro. Solo tu e il problema.

---

## ⚡ Installazione rapida
1. Crea una repo `LaPiramideMatematica` su GitHub.  
2. Carica questi file (`index.html`, `manifest.json`, `sw.js`, icone, `README.md`).  
3. (Opzionale) Attiva **GitHub Pages → Deploy from branch**.  
4. Apri dal telefono e **Aggiungi alla schermata Home** → è una vera **PWA offline**.

---

## 🔧 Dettagli tecnici
- Logica: differenza assoluta tra adiacenti.  
- Vincoli: **1..15**, tutti unici, nessun zero.  
- Palette numerica dinamica, con uso evidenziato.  
- Service Worker: cache-first → **funziona offline**.  
- Condivisione via hash URL → la base iniziale è riproducibile.

---

## 📜 Licenza
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)

MIT © 2025 [PezzaliAPP](https://www.alessandropezzali.it)
