/**
 * BRÜCKEN Landing Page
 * Main JavaScript file for interactions and form handling
 */

// Smooth scroll to contact section
function scrollToContact() {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
}

// Form handling
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
    const formSuccess = document.getElementById('formSuccess');

    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();

            // Basic validation
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;

            if (!name || !email || !message) {
                alert('Please fill in all required fields.');
                return;
            }

            // Email validation
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                alert('Please enter a valid email address.');
                return;
            }

            // Prepare form data for Formspree
            const formData = new FormData(contactForm);

            // Submit to Formspree
            fetch(contactForm.action, {
                method: 'POST',
                body: formData,
                headers: {
                    'Accept': 'application/json'
                }
            })
            .then(response => {
                if (response.ok) {
                    // Show success message
                    contactForm.style.display = 'none';
                    formSuccess.style.display = 'block';

                    // Reset form
                    contactForm.reset();

                    // Hide success message and show form again after 8 seconds
                    setTimeout(function() {
                        contactForm.style.display = 'block';
                        formSuccess.style.display = 'none';
                    }, 8000);
                } else {
                    response.json().then(data => {
                        if (Object.hasOwn(data, 'errors')) {
                            alert('Error: ' + data.errors.map(error => error.message).join(', '));
                        } else {
                            alert('There was an error submitting your form. Please try again.');
                        }
                    });
                }
            })
            .catch(error => {
                console.error('Error:', error);
                alert('There was an error submitting your form. Please try again or email us directly at g.benito@brucken.com.br');
            });
        });
    }

    // Add active state to navigation on scroll (if you add a sticky nav later)
    let lastScrollTop = 0;
    window.addEventListener('scroll', function() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

        // Add fade-in animation for elements as they come into view
        const elements = document.querySelectorAll('.benefit-card, .step, .testimonial');
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
    const fadeElements = document.querySelectorAll('.benefit-card, .step, .testimonial');
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
