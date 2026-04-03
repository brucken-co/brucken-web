/**
 * BRÜCKEN Landing Page
 * Main JavaScript file for interactions
 */

// Smooth scroll to contact section
function scrollToContact() {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
}

document.addEventListener('DOMContentLoaded', function() {
    let lastScrollTop = 0;
    window.addEventListener('scroll', function() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

        // Add fade-in animation for elements as they come into view
        const elements = document.querySelectorAll('.benefit-card, .step, .sector-card');
        elements.forEach(function(element) {
            const elementTop = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;

            if (elementTop < windowHeight - 100) {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }
        });

        lastScrollTop = scrollTop;
    }, false);

    // Initialize fade-in elements with initial state
    const fadeElements = document.querySelectorAll('.benefit-card, .step, .sector-card');
    fadeElements.forEach(function(element) {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    });

    // Trigger initial check for visible elements
    window.dispatchEvent(new Event('scroll'));
});

// Add keyboard accessibility for CTA buttons
document.addEventListener('keydown', function(e) {
    if (e.key === 'Enter' && e.target.classList.contains('cta-button')) {
        e.target.click();
    }
});

// Performance: Lazy load images if any are added later
if ('loading' in HTMLImageElement.prototype) {
    const images = document.querySelectorAll('img[loading="lazy"]');
    images.forEach(img => {
        img.src = img.dataset.src;
    });
} else {
    // Fallback for browsers that don't support lazy loading
    const script = document.createElement('script');
    script.src = 'https://cdnjs.cloudflare.com/ajax/libs/lazysizes/5.3.2/lazysizes.min.js';
    document.body.appendChild(script);
}

// Analytics placeholder (add your tracking code here)
function trackEvent(eventName, eventData) {
    console.log('Event tracked:', eventName, eventData);
    // Example: Google Analytics
    // if (typeof gtag !== 'undefined') {
    //     gtag('event', eventName, eventData);
    // }
}

// Track CTA clicks
document.querySelectorAll('.cta-button').forEach(function(button) {
    button.addEventListener('click', function() {
        trackEvent('cta_click', {
            button_text: this.textContent,
            button_location: this.closest('section')?.id || 'unknown'
        });
    });
});
