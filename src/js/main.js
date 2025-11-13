// Panamerican Taekwondo Academy - Main JavaScript
// Handles mobile navigation, form validation, and interactivity

document.addEventListener('DOMContentLoaded', () => {
    console.log('Panamerican Taekwondo Academy website loaded successfully! 🥋');

    // ==========================================
    // Mobile Navigation Toggle
    // ==========================================
    const mobileMenuToggle = document.getElementById('mobileMenuToggle');
    const navMenu = document.getElementById('navMenu');
    
    if (mobileMenuToggle && navMenu) {
        mobileMenuToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            mobileMenuToggle.classList.toggle('active');
            
            // Update aria-expanded for accessibility
            const isExpanded = navMenu.classList.contains('active');
            mobileMenuToggle.setAttribute('aria-expanded', isExpanded);
        });
        
        // Close mobile menu when clicking on a nav link
        const navLinks = document.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('active');
                mobileMenuToggle.classList.remove('active');
                mobileMenuToggle.setAttribute('aria-expanded', 'false');
            });
        });
        
        // Close mobile menu when clicking outside
        document.addEventListener('click', (e) => {
            if (!mobileMenuToggle.contains(e.target) && !navMenu.contains(e.target)) {
                navMenu.classList.remove('active');
                mobileMenuToggle.classList.remove('active');
                mobileMenuToggle.setAttribute('aria-expanded', 'false');
            }
        });
    }

    // ==========================================
    // Smooth Scrolling with Offset for Fixed Navbar
    // ==========================================
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            
            // Skip if it's just a hash
            if (href === '#') {
                e.preventDefault();
                return;
            }
            
            const targetElement = document.querySelector(href);
            
            if (targetElement) {
                e.preventDefault();
                
                const navbar = document.getElementById('navbar');
                const navbarHeight = navbar ? navbar.offsetHeight : 0;
                const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - navbarHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // ==========================================
    // Form Validation and Submission
    // ==========================================
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        const nameInput = document.getElementById('name');
        const emailInput = document.getElementById('email');
        const phoneInput = document.getElementById('phone');
        const messageInput = document.getElementById('message');
        const formStatus = document.getElementById('formStatus');
        
        // Validation functions
        const validateName = () => {
            const nameError = document.getElementById('nameError');
            const nameValue = nameInput.value.trim();
            
            if (nameValue === '') {
                nameError.textContent = 'Name is required';
                nameInput.setAttribute('aria-invalid', 'true');
                return false;
            } else if (nameValue.length < 2) {
                nameError.textContent = 'Name must be at least 2 characters';
                nameInput.setAttribute('aria-invalid', 'true');
                return false;
            } else {
                nameError.textContent = '';
                nameInput.setAttribute('aria-invalid', 'false');
                return true;
            }
        };
        
        const validateEmail = () => {
            const emailError = document.getElementById('emailError');
            const emailValue = emailInput.value.trim();
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            
            if (emailValue === '') {
                emailError.textContent = 'Email is required';
                emailInput.setAttribute('aria-invalid', 'true');
                return false;
            } else if (!emailRegex.test(emailValue)) {
                emailError.textContent = 'Please enter a valid email address';
                emailInput.setAttribute('aria-invalid', 'true');
                return false;
            } else {
                emailError.textContent = '';
                emailInput.setAttribute('aria-invalid', 'false');
                return true;
            }
        };
        
        const validateMessage = () => {
            const messageError = document.getElementById('messageError');
            const messageValue = messageInput.value.trim();
            
            if (messageValue === '') {
                messageError.textContent = 'Message is required';
                messageInput.setAttribute('aria-invalid', 'true');
                return false;
            } else if (messageValue.length < 10) {
                messageError.textContent = 'Message must be at least 10 characters';
                messageInput.setAttribute('aria-invalid', 'true');
                return false;
            } else {
                messageError.textContent = '';
                messageInput.setAttribute('aria-invalid', 'false');
                return true;
            }
        };
        
        // Real-time validation
        nameInput.addEventListener('blur', validateName);
        emailInput.addEventListener('blur', validateEmail);
        messageInput.addEventListener('blur', validateMessage);
        
        // Form submission
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // Validate all fields
            const isNameValid = validateName();
            const isEmailValid = validateEmail();
            const isMessageValid = validateMessage();
            
            if (isNameValid && isEmailValid && isMessageValid) {
                // Form is valid - in a real application, this would send data to a server
                // For now, we'll simulate a successful submission
                
                const formData = {
                    name: nameInput.value.trim(),
                    email: emailInput.value.trim(),
                    phone: phoneInput.value.trim(),
                    message: messageInput.value.trim()
                };
                
                console.log('Form submitted with data:', formData);
                
                // Show success message
                formStatus.textContent = 'Thank you for your message! We will get back to you soon.';
                formStatus.className = 'form-status success';
                formStatus.style.display = 'block';
                
                // Reset form
                contactForm.reset();
                
                // Clear error messages
                document.querySelectorAll('.error-message').forEach(error => {
                    error.textContent = '';
                });
                
                // Hide success message after 5 seconds
                setTimeout(() => {
                    formStatus.style.display = 'none';
                }, 5000);
                
                // In a real application, you would send the data to your backend:
                /*
                fetch('/api/contact', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(formData)
                })
                .then(response => response.json())
                .then(data => {
                    formStatus.textContent = 'Thank you for your message! We will get back to you soon.';
                    formStatus.className = 'form-status success';
                    contactForm.reset();
                })
                .catch(error => {
                    formStatus.textContent = 'An error occurred. Please try again or call us directly.';
                    formStatus.className = 'form-status error';
                });
                */
            } else {
                // Show error message
                formStatus.textContent = 'Please correct the errors above.';
                formStatus.className = 'form-status error';
                formStatus.style.display = 'block';
                
                // Hide error message after 5 seconds
                setTimeout(() => {
                    formStatus.style.display = 'none';
                }, 5000);
            }
        });
    }

    // ==========================================
    // Scroll-based Animations
    // ==========================================
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
    
    // Observe elements for animation
    document.querySelectorAll('.service-card, .feature, .info-item').forEach(el => {
        observer.observe(el);
    });

    // ==========================================
    // Dynamic Year in Footer
    // ==========================================
    const currentYear = new Date().getFullYear();
    const footerYear = document.querySelector('.footer-bottom p');
    if (footerYear && footerYear.textContent.includes('2024')) {
        footerYear.textContent = footerYear.textContent.replace('2024', currentYear);
    }

    // ==========================================
    // Active Nav Link on Scroll
    // ==========================================
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    
    const highlightNavLink = () => {
        const scrollPosition = window.scrollY + 100;
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');
            
            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    };
    
    // Throttle scroll event for better performance
    let scrollTimeout;
    window.addEventListener('scroll', () => {
        if (scrollTimeout) {
            window.cancelAnimationFrame(scrollTimeout);
        }
        scrollTimeout = window.requestAnimationFrame(() => {
            highlightNavLink();
        });
    });

    // ==========================================
    // Phone Number Formatting (Optional Enhancement)
    // ==========================================
    const phoneInput = document.getElementById('phone');
    if (phoneInput) {
        phoneInput.addEventListener('input', (e) => {
            let value = e.target.value.replace(/\D/g, '');
            
            if (value.length > 10) {
                value = value.slice(0, 10);
            }
            
            if (value.length >= 6) {
                value = `(${value.slice(0, 3)}) ${value.slice(3, 6)}-${value.slice(6)}`;
            } else if (value.length >= 3) {
                value = `(${value.slice(0, 3)}) ${value.slice(3)}`;
            }
            
            e.target.value = value;
        });
    }

    // ==========================================
    // Accessibility: Skip to Main Content
    // ==========================================
    const skipLink = document.createElement('a');
    skipLink.href = '#home';
    skipLink.className = 'sr-only';
    skipLink.textContent = 'Skip to main content';
    skipLink.style.cssText = `
        position: absolute;
        top: -40px;
        left: 0;
        background: var(--tkd-red);
        color: white;
        padding: 8px;
        text-decoration: none;
        z-index: 100;
    `;
    
    skipLink.addEventListener('focus', () => {
        skipLink.style.top = '0';
    });
    
    skipLink.addEventListener('blur', () => {
        skipLink.style.top = '-40px';
    });
    
    document.body.insertBefore(skipLink, document.body.firstChild);

    console.log('All interactive features initialized successfully! 🥋');
});