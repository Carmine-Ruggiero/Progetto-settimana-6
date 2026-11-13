# Progetto-settimana-6
Progetto-settimana-6


# Atelier — Studio di Architettura

Landing page responsiva e minimalista per **Atelier**, studio di progettazione per case, uffici e spazi commerciali.

## Funzionalità principali
* **Navbar fissa (`sticky-top`):** Navigazione responsive con menu hamburger su mobile e accesso rapido alle sezioni (*Studio, Servizi, Contatti*).

* **Sezione Hero (`#studio`):** Presentazione dello studio con Call-to-Action principale *"Inizia un progetto"*.

                                        ---EXTRA---
* **Modale di contatto (`#modaleInizia`):** Finestra popup in stile minimal (`rounded-0`) per richiedere una consulenza scegliendo il tipo di spazio, senza ricaricare o cambiare pagina.
* **Gestione Form (JS):** Conferma visiva immediata all'invio dei dati e chiusura automatica del modale.



## 🧩 Gestione Dinamica dei Servizi (JavaScript)

In seguito a un **refactoring dell'ultimo minuto**, si è deciso di abbandonare le card statiche in HTML per generarle interamente tramite **JavaScript**. Questa scelta si è rivelata **nettamente superiore**, rendendo il progetto molto più pulito, scalabile e professionale.

### Perché è una scelta molto migliore
* **Codice HTML più snello**: Eliminare sei blocchi di markup ripetuti ha alleggerito la struttura della pagina, migliorandone la leggibilità.
* **Manutenzione immediata**: Per aggiungere un nuovo servizio o modificare un testo basta intervenire su un singolo array di dati, senza il rischio di rompere il layout HTML.
* **Scalabilità (Principio DRY)**: Il codice evita inutili duplicazioni ed è già pronto per eventuali future espansioni (come filtri o caricamento da database/API).

### Come funziona
* **Struttura dati (`servizi`)**: Icone, titoli e descrizioni sono raccolti in un unico array di oggetti.
* **Rendering dinamico**: Il metodo `.map()` trasforma i dati nel template delle card e li inietta automaticamente nel contenitore `#servizi-container`.
* **Griglia responsiva**: Grazie a **Bootstrap 5** (`col-12 col-md-4`), le schede si adattano in automatico da 1 colonna su smartphone a 3 colonne su desktop.




## Tecnologie
* HTML5 & CSS3
* Bootstrap 5.3.9
* JavaScript 