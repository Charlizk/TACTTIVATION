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

// Validation améliorée
document.getElementById('couponForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    
    // Ajouter une animation de chargement
    const submitBtn = document.querySelector('.btn-primary');
    submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Traitement...';
    
    // Simulation de traitement
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    // Afficher la confirmation
    showConfirmation();
});

function showConfirmation() {
    const confirmation = document.createElement('div');
    confirmation.className = 'confirmation-banner';
    confirmation.innerHTML = `
        <i class="fas fa-check-circle"></i>
        <span>Coupon activé avec succès !</span>
    `;
    document.body.prepend(confirmation);
    
    setTimeout(() => confirmation.remove(), 3000);
}