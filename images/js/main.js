/**
 * Elite Motors - Luxury Car Dealership Website
 * Main JavaScript File
 */

document.addEventListener('DOMContentLoaded', function() {
    // Initialize all components
    initMobileMenu();
    initSmoothScrolling();
    initFormValidation();
    initInventoryFilters();
    initTestimonialSlider();
    initImageGallery();
});

/**
 * Mobile Menu Toggle
 */
function initMobileMenu() {
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const nav = document.querySelector('nav');
    
    if (mobileMenuBtn && nav) {
        mobileMenuBtn.addEventListener('click', function() {
            nav.classList.toggle('active');
        });

        // Close menu when clicking outside
        document.addEventListener('click', function(event) {
            if (!nav.contains(event.target) && !mobileMenuBtn.contains(event.target) && nav.classList.contains('active')) {
                nav.classList.remove('active');
            }
        });
    }
}

/**
 * Smooth Scrolling for Anchor Links
 */
function initSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');
            
            // Skip if it's just "#" or empty
            if (targetId === '#' || !targetId) return;
            
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                e.preventDefault();
                
                window.scrollTo({
                    top: targetElement.offsetTop - 100,
                    behavior: 'smooth'
                });
            }
        });
    });
}

/**
 * Form Validation
 */
function initFormValidation() {
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form values
            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const subject = document.getElementById('subject').value;
            const message = document.getElementById('message').value.trim();
            
            // Validation
            let isValid = true;
            let errorMessage = '';
            
            if (!name) {
                isValid = false;
                errorMessage += 'Please enter your name.\n';
                highlightField('name');
            }
            
            if (!email) {
                isValid = false;
                errorMessage += 'Please enter your email address.\n';
                highlightField('email');
            } else if (!isValidEmail(email)) {
                isValid = false;
                errorMessage += 'Please enter a valid email address.\n';
                highlightField('email');
            }
            
            if (!subject) {
                isValid = false;
                errorMessage += 'Please select a subject.\n';
                highlightField('subject');
            }
            
            if (!message) {
                isValid = false;
                errorMessage += 'Please enter your message.\n';
                highlightField('message');
            }
            
            if (isValid) {
                // In a real implementation, this would send data to a server
                // For now, we'll just show a success message
                showFormSuccess();
                contactForm.reset();
            } else {
                alert('Please correct the following errors:\n\n' + errorMessage);
            }
        });
    }
}

/**
 * Validate Email Format
 */
function isValidEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

/**
 * Highlight Invalid Form Field
 */
function highlightField(fieldId) {
    const field = document.getElementById(fieldId);
    if (field) {
        field.classList.add('error');
        field.addEventListener('input', function() {
            this.classList.remove('error');
        }, { once: true });
    }
}

/**
 * Show Form Success Message
 */
function showFormSuccess() {
    const formContainer = document.querySelector('.contact-form');
    if (formContainer) {
        const successMessage = document.createElement('div');
        successMessage.className = 'success-message';
        successMessage.innerHTML = `
            <div style="text-align: center; padding: 30px 0;">
                <i class="fas fa-check-circle" style="font-size: 4rem; color: var(--success); margin-bottom: 20px;"></i>
                <h3>Thank You!</h3>
                <p>Your message has been sent successfully. Our team will contact you shortly.</p>
            </div>
        `;
        
        // Replace form with success message
        const form = formContainer.querySelector('form');
        if (form) {
            form.style.display = 'none';
            formContainer.appendChild(successMessage);
            
            // Restore form after 5 seconds
            setTimeout(() => {
                successMessage.remove();
                form.style.display = 'block';
            }, 5000);
        }
    }
}

/**
 * Inventory Filters
 */
function initInventoryFilters() {
    const filterForm = document.querySelector('.inventory-filter form');
    
    if (filterForm) {
        filterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // In a real implementation, this would filter the inventory
            // For now, we'll just show a message
            alert('Filtering functionality would be implemented with a backend system.');
        });
    }
}

/**
 * Testimonial Slider
 */
function initTestimonialSlider() {
    // This would be implemented with a slider library in a real project
    // For now, we'll just add a placeholder for future implementation
    console.log('Testimonial slider ready for implementation');
}

/**
 * Image Gallery for Vehicle Details
 */
function initImageGallery() {
    const galleryThumbs = document.querySelectorAll('.gallery-thumb');
    const mainImage = document.querySelector('.gallery-main-image img');
    
    if (galleryThumbs.length && mainImage) {
        galleryThumbs.forEach(thumb => {
            thumb.addEventListener('click', function() {
                // Update main image
                const newSrc = this.getAttribute('data-full-img');
                mainImage.src = newSrc;
                
                // Update active state
                galleryThumbs.forEach(t => t.classList.remove('active'));
                this.classList.add('active');
            });
        });
    }
}

/**
 * Sticky Header on Scroll
 */
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    if (header) {
        if (window.scrollY > 100) {
            header.classList.add('sticky');
        } else {
            header.classList.remove('sticky');
        }
    }
});

/**
 * Vehicle Inquiry Modal
 */
function openInquiryModal(vehicleId, vehicleName) {
    // This would open a modal with a form pre-filled with the vehicle info
    alert(`Inquiry for ${vehicleName} (ID: ${vehicleId})\n\nIn a complete implementation, this would open a modal with a contact form.`);
}

/**
 * Schedule Test Drive
 */
function scheduleTestDrive(vehicleId, vehicleName) {
    // This would open a modal with a form to schedule a test drive
    alert(`Schedule test drive for ${vehicleName} (ID: ${vehicleId})\n\nIn a complete implementation, this would open a scheduling form.`);
}

/**
 * Currency Formatter
 */
function formatCurrency(amount) {
    return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 0
    }).format(amount);
}

/**
 * Add to Favorites
 */
function addToFavorites(vehicleId) {
    // In a real implementation, this would add the vehicle to the user's favorites
    // For now, we'll just show a message
    alert(`Vehicle added to favorites!\n\nIn a complete implementation, this would save to user preferences.`);
}

/**
 * Back to Top Button
 */
window.addEventListener('scroll', function() {
    const backToTopBtn = document.querySelector('.back-to-top');
    
    if (backToTopBtn) {
        if (window.scrollY > 300) {
            backToTopBtn.classList.add('show');
        } else {
            backToTopBtn.classList.remove('show');
        }
    }
});

// Add CSS for form validation
document.head.insertAdjacentHTML('beforeend', `
<style>
    .form-control.error {
        border-color: var(--error);
        box-shadow: 0 0 0 2px rgba(220, 53, 69, 0.25);
    }
    
    .success-message {
        animation: fadeIn 0.5s;
    }
    
    @keyframes fadeIn {
        from { opacity: 0; }
        to { opacity: 1; }
    }
    
    .back-to-top {
        position: fixed;
        bottom: 30px;
        right: 30px;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        background-color: var(--primary);
        color: var(--light);
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 1.5rem;
        cursor: pointer;
        opacity: 0;
        visibility: hidden;
        transition: all 0.3s ease;
        z-index: 999;
    }
    
    .back-to-top.show {
        opacity: 1;
        visibility: visible;
    }
    
    header.sticky {
        padding: 10px 0;
        box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
    }
</style>
`);