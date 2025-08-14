// DOM Elements
const navbar = document.getElementById('navbar');
const navToggle = document.getElementById('nav-toggle');
const navMenu = document.getElementById('nav-menu');
const themeToggle = document.getElementById('theme-toggle');
const contactForm = document.getElementById('contact-form');
const navLinks = document.querySelectorAll('.nav-link');

// Advanced DOM Elements
const heroStats = document.querySelectorAll('.stat-number');
const testimonialCards = document.querySelectorAll('.testimonial-card');
const testimonialDots = document.querySelectorAll('.dot');
const testimonialBtns = document.querySelectorAll('.testimonial-btn');
const newsletterForm = document.querySelector('.newsletter-form');

// Theme Management
function initTheme() {
    const savedTheme = localStorage.getItem('theme') || 'light';
    document.documentElement.setAttribute('data-theme', savedTheme);
    updateThemeIcon(savedTheme);
}

function toggleTheme() {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    updateThemeIcon(newTheme);
}

function updateThemeIcon(theme) {
    const icon = themeToggle.querySelector('i');
    icon.className = theme === 'dark' ? 'fas fa-sun' : 'fas fa-moon';
}

// Mobile Navigation
function toggleMobileNav() {
    navMenu.classList.toggle('active');
    navToggle.classList.toggle('active');
}

// Smooth Scrolling and Active Navigation
function updateActiveNavLink() {
    const sections = document.querySelectorAll('section');
    const scrollPos = window.scrollY + 100;

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');

        if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${sectionId}`) {
                    link.classList.add('active');
                }
            });
        }
    });
}

// Enhanced Navbar Background on Scroll
function handleNavbarScroll() {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
        navbar.style.background = document.documentElement.getAttribute('data-theme') === 'dark'
            ? 'rgba(15, 20, 25, 0.98)'
            : 'rgba(255, 255, 255, 0.98)';
    } else {
        navbar.classList.remove('scrolled');
        navbar.style.background = document.documentElement.getAttribute('data-theme') === 'dark'
            ? 'rgba(15, 20, 25, 0.8)'
            : 'rgba(255, 255, 255, 0.8)';
    }
}

// Enhanced Scroll Animations
function animateOnScroll() {
    const fadeElements = document.querySelectorAll('.fade-in');
    const slideLeftElements = document.querySelectorAll('.slide-in-left');
    const slideRightElements = document.querySelectorAll('.slide-in-right');
    const scaleElements = document.querySelectorAll('.scale-in');

    const animateElements = (elements) => {
        elements.forEach((element, index) => {
            const elementTop = element.getBoundingClientRect().top;
            const elementVisible = 100;

            if (elementTop < window.innerHeight - elementVisible) {
                setTimeout(() => {
                    element.classList.add('visible');
                }, index * 100); // Stagger animation
            }
        });
    };

    animateElements(fadeElements);
    animateElements(slideLeftElements);
    animateElements(slideRightElements);
    animateElements(scaleElements);
}

// Enhanced Skills Animation
function animateSkills() {
    const skillBars = document.querySelectorAll('.skill-progress');

    skillBars.forEach((bar, index) => {
        const rect = bar.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0 && !bar.classList.contains('animated')) {
            const width = bar.getAttribute('data-width');

            setTimeout(() => {
                bar.style.width = width + '%';
                bar.classList.add('animated');

                // Add counter animation
                const skillItem = bar.closest('.skill-item');
                const percentage = skillItem.querySelector('.skill-percentage');
                animateCounter(percentage, 0, parseInt(width), 1500);
            }, index * 200);
        }
    });
}

// Counter Animation
function animateCounter(element, start, end, duration) {
    const startTime = performance.now();

    function updateCounter(currentTime) {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const current = Math.floor(start + (end - start) * progress);

        element.textContent = current + '%';

        if (progress < 1) {
            requestAnimationFrame(updateCounter);
        }
    }

    requestAnimationFrame(updateCounter);
}

// Form Validation
function validateForm(formData) {
    const errors = {};
    
    // Name validation
    if (!formData.name.trim()) {
        errors.name = 'Name is required';
    } else if (formData.name.trim().length < 2) {
        errors.name = 'Name must be at least 2 characters';
    }
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
        errors.email = 'Email is required';
    } else if (!emailRegex.test(formData.email)) {
        errors.email = 'Please enter a valid email address';
    }
    
    // Message validation
    if (!formData.message.trim()) {
        errors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
        errors.message = 'Message must be at least 10 characters';
    }
    
    return errors;
}

function displayFormErrors(errors) {
    // Clear previous errors
    document.querySelectorAll('.error-message').forEach(error => {
        error.textContent = '';
    });
    
    // Display new errors
    Object.keys(errors).forEach(field => {
        const errorElement = document.getElementById(`${field}-error`);
        if (errorElement) {
            errorElement.textContent = errors[field];
        }
    });
}

function handleFormSubmit(e) {
    e.preventDefault();
    
    const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        message: document.getElementById('message').value
    };
    
    const errors = validateForm(formData);
    
    if (Object.keys(errors).length > 0) {
        displayFormErrors(errors);
        return;
    }
    
    // Clear errors
    displayFormErrors({});
    
    // Show loading state
    const submitBtn = contactForm.querySelector('button[type="submit"]');
    submitBtn.classList.add('loading');
    
    // Simulate form submission (replace with actual form submission logic)
    setTimeout(() => {
        submitBtn.classList.remove('loading');
        alert('Thank you for your message! I\'ll get back to you soon.');
        contactForm.reset();
    }, 2000);
}





// Typing Animation for Hero Section
function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.innerHTML = '';
    
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

// Initialize Typing Animation
function initTypingAnimation() {
    const heroSubtitle = document.querySelector('.hero-subtitle');
    const originalText = heroSubtitle.textContent;
    
    // Start typing animation after a delay
    setTimeout(() => {
        typeWriter(heroSubtitle, originalText, 100);
    }, 1000);
}

// Parallax Effect for Hero Section
function handleParallax() {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero');
    const rate = scrolled * -0.5;
    
    if (hero) {
        hero.style.transform = `translateY(${rate}px)`;
    }
}

// Advanced Cursor Effect
function initCursorEffect() {
    const cursor = document.createElement('div');
    cursor.className = 'custom-cursor';
    cursor.innerHTML = '<div class="cursor-dot"></div><div class="cursor-outline"></div>';
    document.body.appendChild(cursor);

    const cursorDot = cursor.querySelector('.cursor-dot');
    const cursorOutline = cursor.querySelector('.cursor-outline');

    let mouseX = 0, mouseY = 0;
    let outlineX = 0, outlineY = 0;

    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;

        cursorDot.style.left = mouseX + 'px';
        cursorDot.style.top = mouseY + 'px';
    });

    function animateOutline() {
        outlineX += (mouseX - outlineX) * 0.1;
        outlineY += (mouseY - outlineY) * 0.1;

        cursorOutline.style.left = outlineX + 'px';
        cursorOutline.style.top = outlineY + 'px';

        requestAnimationFrame(animateOutline);
    }

    animateOutline();

    // Add hover effects
    const hoverElements = document.querySelectorAll('a, button, .project-card, .skill-category');
    hoverElements.forEach(el => {
        el.addEventListener('mouseenter', () => cursor.classList.add('hover'));
        el.addEventListener('mouseleave', () => cursor.classList.remove('hover'));
    });
}

// Particle System
function initParticles() {
    const canvas = document.createElement('canvas');
    canvas.className = 'particles-canvas';
    document.body.appendChild(canvas);

    const ctx = canvas.getContext('2d');
    let particles = [];

    function resizeCanvas() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }

    function createParticle() {
        return {
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            vx: (Math.random() - 0.5) * 0.5,
            vy: (Math.random() - 0.5) * 0.5,
            size: Math.random() * 2 + 1,
            opacity: Math.random() * 0.5 + 0.2
        };
    }

    function initParticleSystem() {
        for (let i = 0; i < 50; i++) {
            particles.push(createParticle());
        }
    }

    function updateParticles() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        particles.forEach((particle) => {
            particle.x += particle.vx;
            particle.y += particle.vy;

            if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1;
            if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1;

            ctx.beginPath();
            ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(102, 126, 234, ${particle.opacity})`;
            ctx.fill();
        });

        requestAnimationFrame(updateParticles);
    }

    resizeCanvas();
    initParticleSystem();
    updateParticles();

    window.addEventListener('resize', resizeCanvas);
}

// Initialize Everything
function init() {
    // Initialize theme
    initTheme();

    // Initialize smooth scrolling
    initSmoothScrolling();

    // Initialize scroll to top button
    initScrollToTop();

    // Add animation classes to elements
    const fadeElements = document.querySelectorAll('.about-content, .contact-content');
    const slideLeftElements = document.querySelectorAll('.skill-category:nth-child(odd), .timeline-item:nth-child(odd)');
    const slideRightElements = document.querySelectorAll('.skill-category:nth-child(even), .timeline-item:nth-child(even)');
    const scaleElements = document.querySelectorAll('.project-card');

    fadeElements.forEach(el => el.classList.add('fade-in'));
    slideLeftElements.forEach(el => el.classList.add('slide-in-left'));
    slideRightElements.forEach(el => el.classList.add('slide-in-right'));
    scaleElements.forEach(el => el.classList.add('scale-in'));

    // Initialize advanced features
    initAdvancedTyping();
    initCursorEffect();
    initParticles();
    initTestimonialSlider();
    initServiceCards();
    initBlogCards();
    animateHeroStats();

    // Initial animations
    animateOnScroll();
    animateSkills();
    updateActiveNavLink();
}

// Event Listeners
document.addEventListener('DOMContentLoaded', init);

// Removed old scroll listener - now using optimized version below

themeToggle.addEventListener('click', toggleTheme);
navToggle.addEventListener('click', toggleMobileNav);
contactForm.addEventListener('submit', handleFormSubmit);

// Newsletter form event listener
if (newsletterForm) {
    newsletterForm.addEventListener('submit', handleNewsletterSubmit);
}

// Close mobile nav when clicking on links
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        navToggle.classList.remove('active');
    });
});

// Enhanced smooth scroll for anchor links
function initSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const target = document.querySelector(targetId);

            if (target) {
                // Close mobile menu if open
                navMenu.classList.remove('active');
                navToggle.classList.remove('active');

                // Calculate offset for fixed navbar
                const navbarHeight = navbar.offsetHeight;
                const targetPosition = target.offsetTop - navbarHeight - 20;

                // Use native smooth scrolling if supported, otherwise use custom implementation
                if ('scrollBehavior' in document.documentElement.style) {
                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                } else {
                    // Custom smooth scroll for older browsers
                    smoothScrollTo(targetPosition, 800);
                }
            }
        });
    });
}

// Custom smooth scroll implementation for better browser compatibility
function smoothScrollTo(targetPosition, duration = 800) {
    const startPosition = window.pageYOffset;
    const distance = targetPosition - startPosition;
    let startTime = null;

    // Cancel any ongoing scroll animation
    if (window.scrollAnimation) {
        cancelAnimationFrame(window.scrollAnimation);
    }

    function animation(currentTime) {
        if (startTime === null) startTime = currentTime;
        const timeElapsed = currentTime - startTime;
        const run = easeInOutQuad(timeElapsed, startPosition, distance, duration);
        window.scrollTo(0, run);

        if (timeElapsed < duration) {
            window.scrollAnimation = requestAnimationFrame(animation);
        } else {
            window.scrollAnimation = null;
        }
    }

    // Easing function for smooth animation
    function easeInOutQuad(t, b, c, d) {
        t /= d / 2;
        if (t < 1) return c / 2 * t * t + b;
        t--;
        return -c / 2 * (t * (t - 2) - 1) + b;
    }

    window.scrollAnimation = requestAnimationFrame(animation);
}

// Smooth scroll to top function
function scrollToTop() {
    smoothScrollTo(0, 600);
}

// Add scroll to top button functionality
function initScrollToTop() {
    // Create scroll to top button if it doesn't exist
    let scrollTopBtn = document.querySelector('.scroll-to-top');
    if (!scrollTopBtn) {
        scrollTopBtn = document.createElement('button');
        scrollTopBtn.className = 'scroll-to-top';
        scrollTopBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
        scrollTopBtn.setAttribute('aria-label', 'Scroll to top');
        document.body.appendChild(scrollTopBtn);
    }

    // Show/hide button based on scroll position
    function toggleScrollTopBtn() {
        if (window.pageYOffset > 300) {
            scrollTopBtn.classList.add('visible');
        } else {
            scrollTopBtn.classList.remove('visible');
        }
    }

    // Add click event
    scrollTopBtn.addEventListener('click', scrollToTop);

    // Add to scroll handler
    window.addEventListener('scroll', toggleScrollTopBtn, { passive: true });
}

// Add loading animation to external links
document.querySelectorAll('a[target="_blank"]').forEach(link => {
    link.addEventListener('click', function() {
        this.style.opacity = '0.7';
        setTimeout(() => {
            this.style.opacity = '1';
        }, 300);
    });
});

// Keyboard navigation support
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        navMenu.classList.remove('active');
        navToggle.classList.remove('active');
    }
});

// Scroll Progress Bar
function updateScrollProgress() {
    const scrollProgress = document.querySelector('.scroll-progress') || createScrollProgress();
    const scrollTop = window.pageYOffset;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercent = (scrollTop / docHeight) * 100;

    scrollProgress.style.width = scrollPercent + '%';
}

function createScrollProgress() {
    const progressBar = document.createElement('div');
    progressBar.className = 'scroll-progress';
    document.body.appendChild(progressBar);
    return progressBar;
}

// Enhanced Parallax with Multiple Layers
function handleAdvancedParallax() {
    const scrolled = window.pageYOffset;

    // Hero parallax
    const hero = document.querySelector('.hero');
    if (hero) {
        hero.style.transform = `translateY(${scrolled * 0.3}px)`;
    }

    // Floating elements
    const floatingElements = document.querySelectorAll('.hero-img-container');
    floatingElements.forEach((element, index) => {
        const speed = 0.1 + (index * 0.05);
        element.style.transform = `translateY(${scrolled * speed}px) rotate(${scrolled * 0.02}deg)`;
    });
}

// Performance optimization: Throttle and debounce functions
function throttle(func, wait) {
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

// Optimized scroll handler with requestAnimationFrame
let ticking = false;

function optimizedScrollHandler() {
    if (!ticking) {
        requestAnimationFrame(() => {
            updateActiveNavLink();
            handleNavbarScroll();
            animateOnScroll();
            animateSkills();
            updateScrollProgress();
            handleAdvancedParallax();
            ticking = false;
        });
        ticking = true;
    }
}

// Apply optimized scroll handling
window.addEventListener('scroll', optimizedScrollHandler, { passive: true });

// Add magnetic effect to buttons
document.querySelectorAll('.btn, .project-card, .skill-category').forEach(element => {
    element.classList.add('magnetic');

    element.addEventListener('mousemove', (e) => {
        const rect = element.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;

        element.style.transform = `translate(${x * 0.1}px, ${y * 0.1}px) scale(1.05)`;
    });

    element.addEventListener('mouseleave', () => {
        element.style.transform = 'translate(0, 0) scale(1)';
    });
});

// Add tilt effect to project cards
document.querySelectorAll('.project-card').forEach(card => {
    card.classList.add('tilt');

    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX = (y - centerY) / 10;
        const rotateY = (centerX - x) / 10;

        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`;
    });

    card.addEventListener('mouseleave', () => {
        card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale(1)';
    });
});

// Initialize scroll progress
createScrollProgress();

// Hero Stats Counter Animation
function animateHeroStats() {
    heroStats.forEach((stat, index) => {
        const target = parseInt(stat.getAttribute('data-target'));
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting && !stat.classList.contains('animated')) {
                    stat.classList.add('animated');
                    setTimeout(() => {
                        animateCounter(stat, 0, target, 2000, '');
                    }, index * 200);
                }
            });
        }, { threshold: 0.5 });

        observer.observe(stat);
    });
}

// Enhanced Counter Animation
function animateCounter(element, start, end, duration, suffix = '%') {
    const startTime = performance.now();

    function updateCounter(currentTime) {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);

        // Handle decimal numbers for CGPA
        let current;
        if (suffix === '' && end < 10) {
            current = (start + (end - start) * progress).toFixed(2);
        } else {
            current = Math.floor(start + (end - start) * progress);
        }

        element.textContent = current + suffix;

        if (progress < 1) {
            requestAnimationFrame(updateCounter);
        }
    }

    requestAnimationFrame(updateCounter);
}

// Testimonials Slider
let currentTestimonial = 0;

function showTestimonial(index) {
    testimonialCards.forEach((card, i) => {
        card.classList.toggle('active', i === index);
    });

    testimonialDots.forEach((dot, i) => {
        dot.classList.toggle('active', i === index);
    });

    currentTestimonial = index;
}

function nextTestimonial() {
    const next = (currentTestimonial + 1) % testimonialCards.length;
    showTestimonial(next);
}

function prevTestimonial() {
    const prev = (currentTestimonial - 1 + testimonialCards.length) % testimonialCards.length;
    showTestimonial(prev);
}

// Auto-play testimonials
function initTestimonialSlider() {
    // Manual controls
    testimonialDots.forEach((dot, index) => {
        dot.addEventListener('click', () => showTestimonial(index));
    });

    testimonialBtns.forEach(btn => {
        if (btn.classList.contains('next-btn')) {
            btn.addEventListener('click', nextTestimonial);
        } else if (btn.classList.contains('prev-btn')) {
            btn.addEventListener('click', prevTestimonial);
        }
    });

    // Auto-play
    setInterval(nextTestimonial, 5000);
}

// Newsletter Form Handler
function handleNewsletterSubmit(e) {
    e.preventDefault();

    const email = e.target.querySelector('input[type="email"]').value;
    const submitBtn = e.target.querySelector('button[type="submit"]');

    if (!email) {
        alert('Please enter your email address');
        return;
    }

    // Show loading state
    submitBtn.classList.add('loading');
    submitBtn.innerHTML = '<span>Subscribing...</span><i class="fas fa-spinner fa-spin"></i>';

    // Simulate subscription (replace with actual API call)
    setTimeout(() => {
        submitBtn.classList.remove('loading');
        submitBtn.innerHTML = '<span>Subscribed!</span><i class="fas fa-check"></i>';
        e.target.reset();

        setTimeout(() => {
            submitBtn.innerHTML = '<span>Subscribe</span><i class="fas fa-paper-plane"></i>';
        }, 2000);
    }, 1500);
}

// Advanced Typing Animation
function initAdvancedTyping() {
    const typingElement = document.getElementById('typing-text');
    const texts = [
        'Full Stack Developer',
        'UI/UX Designer',
        'Problem Solver',
        'Tech Enthusiast'
    ];

    let textIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    function typeText() {
        const currentText = texts[textIndex];

        if (isDeleting) {
            typingElement.textContent = currentText.substring(0, charIndex - 1);
            charIndex--;
        } else {
            typingElement.textContent = currentText.substring(0, charIndex + 1);
            charIndex++;
        }

        let typeSpeed = isDeleting ? 50 : 100;

        if (!isDeleting && charIndex === currentText.length) {
            typeSpeed = 2000; // Pause at end
            isDeleting = true;
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            textIndex = (textIndex + 1) % texts.length;
            typeSpeed = 500; // Pause before next word
        }

        setTimeout(typeText, typeSpeed);
    }

    typeText();
}

// Service Cards Interaction
function initServiceCards() {
    const serviceCards = document.querySelectorAll('.service-card');

    serviceCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-15px) scale(1.02)';
            card.style.boxShadow = 'var(--shadow-heavy), var(--shadow-glow)';
        });

        card.addEventListener('mouseleave', () => {
            if (!card.classList.contains('featured')) {
                card.style.transform = 'translateY(0) scale(1)';
                card.style.boxShadow = 'var(--shadow-light)';
            }
        });
    });
}

// Blog Cards Interaction
function initBlogCards() {
    const blogCards = document.querySelectorAll('.blog-card');

    blogCards.forEach(card => {
        const image = card.querySelector('.blog-image img');

        card.addEventListener('mouseenter', () => {
            image.style.transform = 'scale(1.1) rotate(2deg)';
        });

        card.addEventListener('mouseleave', () => {
            image.style.transform = 'scale(1) rotate(0deg)';
        });
    });
}
