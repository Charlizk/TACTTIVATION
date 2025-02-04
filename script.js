// Animation au défilement
document.querySelectorAll('.service-card').forEach(card => {
    card.addEventListener('click', function() {
        const couponType = this.dataset.coupon;
        document.getElementById('couponType').value = couponType;
        document.querySelector('.premium-form').scrollIntoView({ 
            behavior: 'smooth',
            block: 'start'
        });
    });
});

// Gestion de la soumission du formulaire
document.getElementById('couponForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    
    // Ajouter une animation de chargement
    const submitBtn = document.querySelector('.btn-primary');
    submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Traitement...';
    submitBtn.disabled = true;

    try {
        // Simulation de traitement (à remplacer par un envoi réel)
        await new Promise(resolve => setTimeout(resolve, 1500));

        // Masquer les éléments inutiles
        document.querySelector('.card-grid').style.display = 'none';
        document.querySelector('.premium-form').style.display = 'none';

        // Afficher la page de confirmation
        document.querySelector('.confirmation-page').style.display = 'block';
    } catch (error) {
        alert("Une erreur s'est produite. Veuillez réessayer.");
    } finally {
        // Réinitialiser le formulaire
        e.target.reset();
        submitBtn.innerHTML = 'Valider';
        submitBtn.disabled = false;
    }
});

// Gestion du compteur de caractères
document.getElementById('couponCode').addEventListener('input', function() {
    const charCount = document.getElementById('charCount');
    const remaining = 12 - this.value.length;
    charCount.textContent = `${remaining} caractères restants`;
    charCount.style.color = remaining < 0 ? 'red' : 'inherit';
});

// Gestion du bouton "Nouvelle demande"
document.querySelector('.confirmation-page .btn-primary').addEventListener('click', function() {
    // Recharger la page pour revenir à l'état initial
    window.location.reload();
});