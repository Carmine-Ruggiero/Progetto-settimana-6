document.getElementById('formProgetto').addEventListener('submit', function(e) {
		e.preventDefault(); // Evita che la pagina si ricarichi al click

		// 1. Mostra un messaggio di conferma dentro il modale
		const modalBody = document.querySelector('#modaleInizia .modal-body');
		modalBody.innerHTML = `
			<div class="text-center py-4">
				<h5 class="fw-bold mb-2">Richiesta inviata</h5>
				<p class="text-muted small mb-0">Grazie per averci contattato. Ti risponderemo entro 24/48 ore.</p>
			</div>
		`;

		// 2. Chiude automaticamente il modale dopo 2,5 secondi
		setTimeout(() => {
			const modaleElemento = document.getElementById('modaleInizia');
			const modaleBootstrap = bootstrap.Modal.getInstance(modaleElemento);
			modaleBootstrap.hide();
		}, 2500);
	});