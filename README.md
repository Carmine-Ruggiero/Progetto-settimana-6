# Progetto-settimana-6
Progetto-settimana-6

## Tecnologie usate
* HTML5 
* CSS3
* BOOTSTRAP 5.3.9
* JAVASCRIPT

# Atelier — Studio di Architettura

Landing page responsiva e minimalista per **Atelier**, studio di progettazione per case, uffici e spazi commerciali.

## Funzionalità principali
* **Navbar fissa (`sticky-top`):** Navigazione responsive con menu hamburger su mobile e accesso rapido alle sezioni (*Studio, Servizi, Contatti*).

* **Sezione Hero (`#studio`):** Presentazione dello studio con Call-to-Action principale *"Inizia un progetto"*.

                                        ---EXTRA---
* **Modale di contatto (`#modaleInizia`):** Finestra popup in stile minimal (`rounded-0`) per richiedere una consulenza scegliendo il tipo di spazio, senza ricaricare o cambiare pagina.
* **Gestione Form (JS):** Conferma visiva immediata all'invio dei dati e chiusura automatica del modale.


## 🧩 Gestione Dinamica dei Servizi (JavaScript)

In seguito a un **refactoring dell'ultimo minuto**, ho deciso di abbandonare le card statiche in HTML per generarle interamente tramite **JavaScript**. Questa scelta si è rivelata **nettamente superiore**, rendendo il progetto molto più pulito, scalabile e professionale.

### ✨ Perché è una scelta migliore
* **Codice HTML più snello**: Eliminare i blocchi di markup ripetuti ha alleggerito la struttura della pagina, migliorandone la leggibilità.
* **Manutenzione immediata**: Per aggiungere un nuovo servizio o modificare un testo basta intervenire su un singolo array di dati, senza il rischio di rompere il layout HTML.
* **Scalabilità (Principio DRY)**: Il codice evita inutili duplicazioni ed è già pronto per eventuali future espansioni (come filtri o caricamento da database/API).

### ⚙️ Come funziona
* **Struttura dati (`servizi`)**: Icone, titoli e descrizioni sono raccolti in un unico array di oggetti.
* **Rendering dinamico**: Il metodo `.map()` trasforma i dati nel template delle card e li inietta automaticamente nel contenitore `#servizi-container`.
* **Griglia responsiva**: Grazie a **Bootstrap 5** (`col-12 col-md-4`), le schede si adattano in automatico da 1 colonna su smartphone a 3 colonne su desktop.


                                        ---EXTRA---
### 🆕 Aggiunta di una nuova sezione (con Badge dinamico)
Grazie a questa nuova architettura, ho potuto integrare rapidamente una **nuova sezione dedicata a un servizio aggiuntivo** inserendo un nuovo oggetto nell'array e sfruttando una proprietà opzionale `badge` per evidenziare la novità all'utente:



### Footer (`footer-atelier`)

Componente footer responsive realizzato con **Bootstrap 5** per lo studio di architettura *Atelier*.

* **Layout:** Griglia a 3 colonne (`col-md-4`) su desktop, impilata verticalmente su mobile (`col-12`).
* **Contenuti:**
  1. **Brand & Info:** Nome dello studio e indirizzo fisico.
  2. **Navigazione rapida:** Link interni alle sezioni principali (`#studio`, `#servizi`, `#contatti`).
  3. **Contatti diretti:** Email (`mailto:`) e numero di telefono (`tel:`) cliccabili.
* **Stile:** Sfondo scuro (gestito dalla classe custom `.footer-atelier`), testo chiaro con gerarchia visiva (`text-white` / `text-white-50`) e barra del copyright separata da un divisore `<hr>`.