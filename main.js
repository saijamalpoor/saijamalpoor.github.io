// main.js

document.addEventListener('DOMContentLoaded', (event) => {
    // Highlight current page in navigation
    highlightCurrentPage();

    // Smooth scrolling for anchor links
    setupSmoothScrolling();

    // Setup mobile menu toggle
    setupMobileMenu();
});

function highlightCurrentPage() {
    const currentPage = window.location.pathname.split('/').pop();
    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(link => {
        if (link.getAttribute('href') === currentPage) {
            link.classList.add('active');
        }
    });
}

function setupSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
}

function setupMobileMenu() {
    const menuToggle = document.querySelector('.menu-toggle');
    const nav = document.querySelector('nav');
    
    if (menuToggle && nav) {
        menuToggle.addEventListener('click', () => {
            nav.classList.toggle('active');
        });
    }
}

// Add a simple fade-in animation for page content
window.addEventListener('load', () => {
    document.body.classList.add('fade-in');
});
