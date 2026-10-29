/**
 * Brücken Landing Page
 * Main JavaScript file for interactions
 */

// Fade-in elements as they come into view (content stays visible without JS)
if ('IntersectionObserver' in window) {
    const revealElements = document.querySelectorAll('.benefit-card, .step, .engagement-card, .sector-card');
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target);
            }
        });
    }, { rootMargin: '0px 0px -60px 0px' });

    revealElements.forEach(function(element) {
        element.classList.add('reveal');
        observer.observe(element);
    });
}

// Send events to Google Analytics (gtag is loaded in <head>)
function trackEvent(eventName, eventData) {
    if (typeof gtag !== 'undefined') {
        gtag('event', eventName, eventData);
    }
}

// Track CTA clicks (buttons and floating WhatsApp)
document.querySelectorAll('.cta-button, .whatsapp-float').forEach(function(button) {
    button.addEventListener('click', function() {
        trackEvent('cta_click', {
            button_text: this.textContent.trim(),
            button_location: this.closest('section')?.id || 'floating'
        });
    });
});
