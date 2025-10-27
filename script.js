// Add this expertise functionality to your existing script.js

// Expertise functionality
function initExpertise() {
    const expertiseCards = document.querySelectorAll('.expertise-card');
    
    expertiseCards.forEach(card => {
        card.addEventListener('click', function() {
            const isActive = this.classList.contains('active');
            
            // Close all other expertise cards
            expertiseCards.forEach(otherCard => {
                otherCard.classList.remove('active');
            });
            
            // Toggle current card
            if (!isActive) {
                this.classList.add('active');
                
                // Scroll the active card into view with offset
                setTimeout(() => {
                    const cardTop = this.getBoundingClientRect().top + window.pageYOffset;
                    const offset = 100;
                    window.scrollTo({
                        top: cardTop - offset,
                        behavior: 'smooth'
                    });
                }, 300);
            }
        });
    });
    
    // Close expertise cards when clicking outside
    document.addEventListener('click', function(event) {
        const isExpertiseCard = event.target.closest('.expertise-card');
        const isExpertiseSection = event.target.closest('.expertise-section');
        
        if (!isExpertiseCard && isExpertiseSection) {
            expertiseCards.forEach(card => {
                card.classList.remove('active');
            });
        }
    });
}

// Update the navigation for expertise section
navExpertise.addEventListener('click', (e) => {
    e.preventDefault();
    expertiseSection.classList.add('active');
    calculatorSection.classList.remove('active');
    quoteSection.classList.remove('active');
    productsSection.classList.remove('active');
    deyeMarquee.classList.remove('active');
    
    // Initialize expertise functionality when section is opened
    setTimeout(initExpertise, 100);
});

// Initialize expertise when page loads if expertise section is active
document.addEventListener('DOMContentLoaded', function() {
    if (expertiseSection.classList.contains('active')) {
        initExpertise();
    }
});
