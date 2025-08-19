// Portfolio Website JavaScript

document.addEventListener('DOMContentLoaded', function() {
    // Initialize all functionality
    initSmoothScrolling();
    initAnimations();
    initFormHandling();
    initMobileNavigation();
    initServiceCarousel();
    initParallaxEffect();
    initTypingEffect();
    initScrollProgress();
    initThemeToggle();
});

// Smooth Scrolling for Navigation Links
function initSmoothScrolling() {
    const navLinks = document.querySelectorAll('nav a[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// Intersection Observer for Animations
function initAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in-up');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe all sections and cards
    const animatedElements = document.querySelectorAll('section, .card-hover, .project-card');
    animatedElements.forEach(el => observer.observe(el));
}

// Form Handling
function initFormHandling() {
    const contactForm = document.querySelector('#contact form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(this);
            const name = this.querySelector('input[type="text"]').value;
            const email = this.querySelector('input[type="email"]').value;
            const message = this.querySelector('textarea').value;
            
            // Simple validation
            if (!name || !email || !message) {
                showNotification('Please fill in all fields', 'error');
                return;
            }
            
            if (!isValidEmail(email)) {
                showNotification('Please enter a valid email address', 'error');
                return;
            }
            
            // Simulate form submission
            showNotification('Message sent successfully!', 'success');
            this.reset();
        });
    }
}

// Email validation
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Notification system
function showNotification(message, type = 'info') {
    // Remove existing notifications
    const existingNotification = document.querySelector('.notification');
    if (existingNotification) {
        existingNotification.remove();
    }
    
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification fixed top-20 right-4 z-50 px-6 py-3 rounded-lg text-white transform translate-x-full transition-transform duration-300 ${
        type === 'success' ? 'bg-green-500' : 
        type === 'error' ? 'bg-red-500' : 'bg-blue-500'
    }`;
    notification.textContent = message;
    
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
        notification.classList.remove('translate-x-full');
    }, 100);
    
    // Remove after 3 seconds
    setTimeout(() => {
        notification.classList.add('translate-x-full');
        setTimeout(() => {
            notification.remove();
        }, 300);
    }, 3000);
}

// Mobile Navigation
function initMobileNavigation() {
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    
    if (mobileMenuBtn && mobileMenu) {
        mobileMenuBtn.addEventListener('click', function() {
            // Toggle mobile menu visibility
            mobileMenu.classList.toggle('hidden');
            mobileMenu.classList.toggle('show');
            
            // Change icon based on menu state
            const icon = this.querySelector('i');
            if (mobileMenu.classList.contains('hidden')) {
                icon.className = 'fas fa-bars text-xl';
            } else {
                icon.className = 'fas fa-times text-xl';
            }
        });
        
        // Close mobile menu when clicking on a link
        const mobileLinks = mobileMenu.querySelectorAll('a');
        mobileLinks.forEach(link => {
            link.addEventListener('click', function() {
                mobileMenu.classList.add('hidden');
                mobileMenu.classList.remove('show');
                const icon = mobileMenuBtn.querySelector('i');
                icon.className = 'fas fa-bars text-xl';
            });
        });
        
        // Close mobile menu when clicking outside
        document.addEventListener('click', function(event) {
            if (!mobileMenuBtn.contains(event.target) && !mobileMenu.contains(event.target)) {
                mobileMenu.classList.add('hidden');
                mobileMenu.classList.remove('show');
                const icon = mobileMenuBtn.querySelector('i');
                icon.className = 'fas fa-bars text-xl';
            }
        });
    }
}

// Service Carousel
function initServiceCarousel() {
    const serviceCards = document.querySelectorAll('#services .grid > div');
    const paginationDots = document.querySelectorAll('#services .flex.justify-center > div');
    const nextButton = document.querySelector('#services button');
    
    let currentIndex = 0;
    
    function showService(index) {
        // Remove highlight from all cards
        serviceCards.forEach(card => {
            card.classList.remove('service-highlight');
            card.classList.add('bg-gradient-to-br', 'from-purple-900', 'to-purple-800');
        });
        
        // Add highlight to current card
        if (serviceCards[index]) {
            serviceCards[index].classList.add('service-highlight');
            serviceCards[index].classList.remove('bg-gradient-to-br', 'from-purple-900', 'to-purple-800');
        }
        
        // Update pagination dots
        paginationDots.forEach((dot, i) => {
            dot.classList.toggle('active', i === index);
        });
    }
    
    // Next button functionality
    if (nextButton) {
        nextButton.addEventListener('click', () => {
            currentIndex = (currentIndex + 1) % serviceCards.length;
            showService(currentIndex);
        });
    }
    
    // Pagination dots functionality
    paginationDots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            currentIndex = index;
            showService(currentIndex);
        });
    });
    
    // Auto-rotate services
    setInterval(() => {
        currentIndex = (currentIndex + 1) % serviceCards.length;
        showService(currentIndex);
    }, 5000);
}

// Parallax Effect
function initParallaxEffect() {
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const parallaxElements = document.querySelectorAll('.parallax');
        
        parallaxElements.forEach(element => {
            const speed = element.dataset.speed || 0.5;
            element.style.transform = `translateY(${scrolled * speed}px)`;
        });
    });
}

// Typing Effect
function initTypingEffect() {
    const typingElement = document.querySelector('.typing-text');
    if (!typingElement) return;
    
    const texts = ['UI/UX Designer', 'Web Designer', 'Creative Developer'];
    let textIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    
    function type() {
        const currentText = texts[textIndex];
        
        if (isDeleting) {
            typingElement.textContent = currentText.substring(0, charIndex - 1);
            charIndex--;
        } else {
            typingElement.textContent = currentText.substring(0, charIndex + 1);
            charIndex++;
        }
        
        let typeSpeed = isDeleting ? 100 : 200;
        
        if (!isDeleting && charIndex === currentText.length) {
            typeSpeed = 2000; // Pause at end
            isDeleting = true;
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            textIndex = (textIndex + 1) % texts.length;
            typeSpeed = 500; // Pause before next word
        }
        
        setTimeout(type, typeSpeed);
    }
    
    type();
}

// Scroll Progress Indicator
function initScrollProgress() {
    const progressBar = document.createElement('div');
    progressBar.className = 'fixed top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-600 to-pink-600 transform scale-x-0 origin-left z-50 transition-transform duration-300';
    document.body.appendChild(progressBar);
    
    window.addEventListener('scroll', () => {
        const scrollTop = window.pageYOffset;
        const docHeight = document.body.offsetHeight - window.innerHeight;
        const scrollPercent = scrollTop / docHeight;
        
        progressBar.style.transform = `scaleX(${scrollPercent})`;
    });
}

// Theme Toggle (if needed)
function initThemeToggle() {
    const themeToggle = document.querySelector('.theme-toggle');
    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            document.body.classList.toggle('dark-mode');
            localStorage.setItem('theme', document.body.classList.contains('dark-mode') ? 'dark' : 'light');
        });
    }
}

// Download CV functionality
document.addEventListener('click', function(e) {
    if (e.target.textContent === 'Download CV') {
        e.preventDefault();
        showNotification('CV download started...', 'success');
        // Here you would typically trigger a file download
        // For demo purposes, we'll just show a notification
    }
});

// Social Media Links
document.addEventListener('click', function(e) {
    if (e.target.closest('.social-icon')) {
        const icon = e.target.closest('.social-icon');
        const platform = icon.querySelector('i').className;
        
        let url = '#';
        if (platform.includes('linkedin')) {
            url = 'https://linkedin.com/in/sarahowari';
        } else if (platform.includes('behance')) {
            url = 'https://behance.net/sarahowari';
        } else if (platform.includes('dribbble')) {
            url = 'https://dribbble.com/sarahowari';
        } else if (platform.includes('github')) {
            url = 'https://github.com/sarahowari';
        }
        
        window.open(url, '_blank');
    }
});

// Project Card Interactions
document.addEventListener('click', function(e) {
    if (e.target.closest('.project-card')) {
        const card = e.target.closest('.project-card');
        const projectTitle = card.querySelector('h3').textContent;
        showNotification(`Opening ${projectTitle}...`, 'info');
        // Here you would typically open a project modal or navigate to project page
    }
});

// Add loading animation to buttons
document.addEventListener('click', function(e) {
    if (e.target.tagName === 'BUTTON' && !e.target.classList.contains('social-icon')) {
        const button = e.target;
        const originalText = button.textContent;
        
        button.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Loading...';
        button.disabled = true;
        
        setTimeout(() => {
            button.textContent = originalText;
            button.disabled = false;
        }, 2000);
    }
});

// Keyboard Navigation
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        // Close any open modals or mobile nav
        document.querySelector('nav')?.classList.remove('mobile-open');
    }
});

// Performance optimization: Debounce scroll events
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Apply debouncing to scroll events
window.addEventListener('scroll', debounce(() => {
    // Any scroll-based functionality can be added here
}, 10));

// Add CSS classes for animations
document.addEventListener('DOMContentLoaded', function() {
    // Add animation classes to elements
    const elementsToAnimate = document.querySelectorAll('section, .card-hover, .project-card');
    elementsToAnimate.forEach((el, index) => {
        el.style.animationDelay = `${index * 0.1}s`;
    });
});

// Service Worker Registration (for PWA features)
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js')
            .then(registration => {
                console.log('SW registered: ', registration);
            })
            .catch(registrationError => {
                console.log('SW registration failed: ', registrationError);
            });
    });
}
