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

            // Get form data
            const formData = {
                name: document.getElementById('name').value,
                email: document.getElementById('email').value,
                company: document.getElementById('company').value,
                message: document.getElementById('message').value
            };

            // Basic validation
            if (!formData.name || !formData.email || !formData.message) {
                alert('Please fill in all required fields.');
                return;
            }

            // Email validation
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(formData.email)) {
                alert('Please enter a valid email address.');
                return;
            }

            // Simulate form submission (replace with actual backend call)
            console.log('Form submitted:', formData);

            // Show success message
            contactForm.style.display = 'none';
            formSuccess.style.display = 'block';

            // Optional: Send to backend
            // fetch('/api/contact', {
            //     method: 'POST',
            //     headers: {
            //         'Content-Type': 'application/json',
            //     },
            //     body: JSON.stringify(formData)
            // })
            // .then(response => response.json())
            // .then(data => {
            //     contactForm.style.display = 'none';
            //     formSuccess.style.display = 'block';
            // })
            // .catch(error => {
            //     console.error('Error:', error);
            //     alert('There was an error submitting your form. Please try again.');
            // });

            // For demonstration: reset after 5 seconds
            setTimeout(function() {
                contactForm.reset();
                contactForm.style.display = 'block';
                formSuccess.style.display = 'none';
            }, 5000);
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
