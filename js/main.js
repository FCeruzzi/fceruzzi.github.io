/**
 * Main JavaScript for Portfolio Website
 * Handles navigation, scroll animations, particles, typing, and interactivity
 */

document.addEventListener('DOMContentLoaded', () => {
    initNavbar();
    initMobileMenu();
    initScrollAnimations();
    initSmoothScroll();
    initTypedEffect();
    initActiveNavLink();
    initParticles();
    initTiltCards();
    initI18n();
});

/**
 * Navbar scroll behavior
 */
function initNavbar() {
    const navbar = document.getElementById('navbar');
    let ticking = false;

    function updateNavbar() {
        const scrollY = window.scrollY;

        if (scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }

        ticking = false;
    }

    window.addEventListener('scroll', () => {
        if (!ticking) {
            window.requestAnimationFrame(updateNavbar);
            ticking = true;
        }
    });
}

/**
 * Mobile hamburger menu
 */
function initMobileMenu() {
    const toggle = document.getElementById('navToggle');
    const links = document.getElementById('navLinks');

    if (!toggle || !links) return;

    toggle.addEventListener('click', () => {
        toggle.classList.toggle('active');
        links.classList.toggle('active');
        document.body.style.overflow = links.classList.contains('active') ? 'hidden' : '';
    });

    // Close menu on link click
    links.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            toggle.classList.remove('active');
            links.classList.remove('active');
            document.body.style.overflow = '';
        });
    });

    // Close on outside click
    document.addEventListener('click', (e) => {
        if (links.classList.contains('active') &&
            !links.contains(e.target) &&
            !toggle.contains(e.target)) {
            toggle.classList.remove('active');
            links.classList.remove('active');
            document.body.style.overflow = '';
        }
    });
}

/**
 * Scroll-triggered fade-in animations using Intersection Observer
 */
function initScrollAnimations() {
    const fadeElements = document.querySelectorAll('.fade-in');

    if ('IntersectionObserver' in window) {
        const observer = new IntersectionObserver((entries) => {
            let visibleCount = 0;
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setTimeout(() => {
                        entry.target.classList.add('visible');
                    }, visibleCount * 100);
                    visibleCount++;
                    observer.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        });

        fadeElements.forEach(el => observer.observe(el));
    } else {
        fadeElements.forEach(el => el.classList.add('visible'));
    }
}

/**
 * Smooth scroll for anchor links
 */
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const target = document.querySelector(targetId);

            if (target) {
                const navHeight = document.getElementById('navbar').offsetHeight;
                const targetPosition = target.getBoundingClientRect().top + window.scrollY - navHeight;

                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

/**
 * Typed text effect for hero subtitle — cycles through roles
 */
function initTypedEffect() {
    const typedEl = document.getElementById('typed-text');
    if (!typedEl) return;

    let phrases = [
        t('typed.0'),
        t('typed.1'),
        t('typed.2'),
        t('typed.3'),
        t('typed.4')
    ];

    let phraseIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    const typeSpeed = 80;
    const deleteSpeed = 40;
    const pauseTime = 2000;

    function type() {
        const currentPhrase = phrases[phraseIndex];

        if (isDeleting) {
            typedEl.textContent = currentPhrase.substring(0, charIndex - 1);
            charIndex--;
        } else {
            typedEl.textContent = currentPhrase.substring(0, charIndex + 1);
            charIndex++;
        }

        let delay = isDeleting ? deleteSpeed : typeSpeed;

        if (!isDeleting && charIndex === currentPhrase.length) {
            delay = pauseTime;
            isDeleting = true;
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            phraseIndex = (phraseIndex + 1) % phrases.length;
            delay = 400;
        }

        setTimeout(type, delay);
    }

    // Start after a short delay
    setTimeout(type, 1000);
}

/**
 * Active navigation link highlighting based on scroll position
 */
function initActiveNavLink() {
    const sections = document.querySelectorAll('.section, .hero');
    const navLinks = document.querySelectorAll('.nav-link:not(.nav-resume)');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const id = entry.target.getAttribute('id');
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${id}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }, {
        threshold: 0.3,
        rootMargin: '-70px 0px 0px 0px'
    });

    sections.forEach(section => observer.observe(section));
}

/**
 * Interactive particle background on canvas
 */
function initParticles() {
    const canvas = document.getElementById('particleCanvas');
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let particles = [];
    let mouseX = -1000;
    let mouseY = -1000;
    let animationId;

    function resize() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }

    resize();
    window.addEventListener('resize', resize);

    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
    });

    const PARTICLE_COUNT = Math.min(80, Math.floor(window.innerWidth / 20));
    const CONNECTION_DIST = 150;
    const MOUSE_DIST = 200;

    class Particle {
        constructor() {
            this.x = Math.random() * canvas.width;
            this.y = Math.random() * canvas.height;
            this.vx = (Math.random() - 0.5) * 0.5;
            this.vy = (Math.random() - 0.5) * 0.5;
            this.radius = Math.random() * 2 + 1;
        }

        update() {
            this.x += this.vx;
            this.y += this.vy;

            if (this.x < 0 || this.x > canvas.width) this.vx *= -1;
            if (this.y < 0 || this.y > canvas.height) this.vy *= -1;

            // Subtle attraction to mouse
            const dx = mouseX - this.x;
            const dy = mouseY - this.y;
            const dist = Math.sqrt(dx * dx + dy * dy);
            if (dist < MOUSE_DIST && dist > 0) {
                this.vx += (dx / dist) * 0.02;
                this.vy += (dy / dist) * 0.02;
            }

            // Clamp velocity
            const speed = Math.sqrt(this.vx * this.vx + this.vy * this.vy);
            if (speed > 1.5) {
                this.vx = (this.vx / speed) * 1.5;
                this.vy = (this.vy / speed) * 1.5;
            }
        }

        draw() {
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
            ctx.fillStyle = 'rgba(78, 201, 176, 0.4)';
            ctx.fill();
        }
    }

    // Initialize particles
    for (let i = 0; i < PARTICLE_COUNT; i++) {
        particles.push(new Particle());
    }

    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        particles.forEach(p => {
            p.update();
            p.draw();
        });

        // Draw connections
        for (let i = 0; i < particles.length; i++) {
            for (let j = i + 1; j < particles.length; j++) {
                const dx = particles[i].x - particles[j].x;
                const dy = particles[i].y - particles[j].y;
                const dist = Math.sqrt(dx * dx + dy * dy);

                if (dist < CONNECTION_DIST) {
                    ctx.beginPath();
                    ctx.moveTo(particles[i].x, particles[i].y);
                    ctx.lineTo(particles[j].x, particles[j].y);
                    ctx.strokeStyle = `rgba(78, 201, 176, ${0.15 * (1 - dist / CONNECTION_DIST)})`;
                    ctx.lineWidth = 0.5;
                    ctx.stroke();
                }
            }
        }

        // Draw mouse connections
        particles.forEach(p => {
            const dx = mouseX - p.x;
            const dy = mouseY - p.y;
            const dist = Math.sqrt(dx * dx + dy * dy);

            if (dist < MOUSE_DIST) {
                ctx.beginPath();
                ctx.moveTo(p.x, p.y);
                ctx.lineTo(mouseX, mouseY);
                ctx.strokeStyle = `rgba(86, 156, 214, ${0.3 * (1 - dist / MOUSE_DIST)})`;
                ctx.lineWidth = 0.8;
                ctx.stroke();
            }
        });

        animationId = requestAnimationFrame(animate);
    }

    animate();

    // Cleanup on page hide to save CPU
    document.addEventListener('visibilitychange', () => {
        if (document.hidden) {
            cancelAnimationFrame(animationId);
        } else {
            animate();
        }
    });
}

/**
 * 3D tilt effect on project cards
 */
function initTiltCards() {
    const cards = document.querySelectorAll('.project-card, .skills-category, .education-card, .tool-card');

    cards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            const rotateX = ((y - centerY) / centerY) * -5;
            const rotateY = ((x - centerX) / centerX) * 5;

            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-6px)`;
        });

        card.addEventListener('mouseleave', () => {
            card.style.transform = '';
        });
    });
}
