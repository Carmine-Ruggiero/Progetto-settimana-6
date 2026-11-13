


document.getElementById('formProgetto').addEventListener('submit', function(e) {
		e.preventDefault(); 

		
		const modalBody = document.querySelector('#modaleInizia .modal-body');
		modalBody.innerHTML = `
			<div class="text-center py-4">
				<h5 class="fw-bold mb-2">Richiesta inviata</h5>
				<p class="text-muted small mb-0">Grazie per averci contattato. Ti risponderemo entro 24/48 ore.</p>
			</div>
		`;

	
		setTimeout(() => {
			const modaleElemento = document.getElementById('modaleInizia');
			const modaleBootstrap = bootstrap.Modal.getInstance(modaleElemento);
			modaleBootstrap.hide();
		}, 2500);
	});
	
	
	
	
	
	const servizi = [
    {
      icona: "🏠",
      titolo: "Progettazione residenziale",
      descrizione: "Case private, ville e ristrutturazioni domestiche, dal sopralluogo alla consegna delle chiavi."
    },
    {
      icona: "🏢",
      titolo: "Edilizia commerciale",
      descrizione: "Uffici, negozi e spazi direzionali progettati per ottimizzare funzionalità ed estetica."
    },
    {
      icona: "🛋️",
      titolo: "Interior design",
      descrizione: "Scelta di arredi, materiali, colori e illuminazione per creare ambienti unici e accoglienti."
    },
    {
      icona: "📐",
      titolo: "Pratiche edilizie e catasto",
      descrizione: "Gestione completa di permessi, CILA, SCIA, sanatorie e aggiornamenti catastali."
    },
    {
      icona: "⚡",
      titolo: "Riqualificazione energetica",
      descrizione: "Interventi per migliorare l'efficienza termica, ridurre i consumi e accedere ai bonus fiscali."
    },
    {
      icona: "👷",
      titolo: "Direzione lavori e sicurezza",
      descrizione: "Supervisione costante del cantiere per garantire tempi, costi e qualità di esecuzione."
    }
  ];

  const container = document.getElementById("servizi-container");

  container.innerHTML = servizi.map(servizio => `
    <div class="col-12 col-md-4">
      <div class="card h-100 border-0 shadow-sm text-center p-4">
        <div class="card-body">
          <div class="fs-1 mb-3">${servizio.icona}</div>
          <h3 class="h6 fw-bold mb-2" style="color: #2b241f;">${servizio.titolo}</h3>
          <p class="card-text small text-muted mb-0">
            ${servizio.descrizione}
          </p>
        </div>
      </div>
    </div>
  `).join("");
	
	