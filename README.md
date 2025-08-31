# LaPiramideMatematica — Regola Unica 1..15 (PWA)

> **Semplice non vuol dire facile.** (Bill Bernbach avrebbe approvato.)

Questa PWA mette alla prova un’idea limpida: **usa tutti i numeri da 1 a 15 una sola volta** per riempire una **piramide ruotata** (base in alto, punta in basso). Ogni numero sotto nasce da `|a − b|` dei due sopra. **Niente zeri. Nessun numero ripetuto.**

### Come si gioca
- Inserisci i **5 numeri della base** (in alto), scegliendoli tra **1..15** senza ripeterli.
- La piramide si completa da sola verso il basso con le **differenze assolute**.
- Se compare uno **zero**, un **doppione** o un **valore fuori 1..15**, la cella si evidenzia e il messaggio ti spiega il problema.
- Usa la **palette 1..15** per vedere in tempo reale cosa è già stato utilizzato.
- Con **Genera base valida** il sistema cerca una configurazione che produca **15 numeri unici** tra 1..15 senza zeri.

### Perché è interessante
Perché non bara. Ti chiede coerenza, non fortuna. Allenati a **prevedere** le conseguenze di ogni scelta in alto: ogni cifra messa in base si propaga, si combina, **ridefinisce tutto**.

### Installazione rapida
1. Crea una repo `LaPiramideMatematica` e carica questi file.
2. (Opzionale) GitHub Pages → *Deploy from branch*.
3. Apri dal telefono e **Aggiungi alla schermata Home**: funziona **offline**.

### Licenza
MIT © 2025 PezzaliAPP
