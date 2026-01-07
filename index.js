// Main Website Logic

// Toggle Mobile Menu
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

if (hamburger) {
    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        hamburger.classList.toggle('active');
    });
}

// Close menu when clicking a link
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
    });
});

// Navbar background change on scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);

        if (targetSection) {
            targetSection.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Active Link Highlight
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-links a');

    let currentSection = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (scrollY >= (sectionTop - 200)) {
            currentSection = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        // Check if href matches current section
        if (link.getAttribute('href').includes(currentSection) && currentSection) {
            link.classList.add('active');
        }
    });
});

// Back To Top Button
const backToTopBtn = document.getElementById('backToTop');

if (backToTopBtn) {
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            backToTopBtn.style.display = 'block';
        } else {
            backToTopBtn.style.display = 'none';
        }
    });

    backToTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// Scroll Animations (Simple fade up)
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
        }
    });
});

const animatedElements = document.querySelectorAll('.feature-card, .category-card, .step, .hero-content');
animatedElements.forEach(el => observer.observe(el));


// Logout Logic
const logoutBtn = document.querySelector('.btn-logout');
if (logoutBtn) {
    logoutBtn.addEventListener('click', (e) => {
        e.preventDefault();
        // Redirect to login
        window.location.href = 'login.html';
    });
}

// Background Star Logic
document.addEventListener('DOMContentLoaded', () => {
    if (document.querySelector('.star-container')) return;
    if (!document.body.classList.contains('with-stars')) return;

    const starContainer = document.createElement('div');
    starContainer.classList.add('star-container');
    document.body.prepend(starContainer);

    for (let i = 0; i < 40; i++) {
        createStar(starContainer);
    }

    function createStar(container) {
        const star = document.createElement('div');
        star.classList.add('star');
        const x = Math.random() * 200 - 50;
        const y = Math.random() * 200 - 50;
        const delay = Math.random() * 3;
        const duration = Math.random() * 1 + 2;

        star.style.left = `${x}%`;
        star.style.top = `${y}%`;
        star.style.animationDelay = `${delay}s`;
        star.style.animationDuration = `${duration}s`;

        container.appendChild(star);
    }
});
