// Smooth Scrolling for Internal Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        document.querySelector(targetId).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
});

// Mobile Menu Toggle
const menuIcon = document.querySelector('.menu-icon');
const navLinks = document.querySelector('.nav-links');

menuIcon.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    menuIcon.classList.toggle('active');
});

// Optional: Close the mobile menu when clicking a link (for one-page site behavior)
navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        menuIcon.classList.remove('active');
    });
});

// Fade-In Animation on Scroll
function revealOnScroll() {
    const fadeIns = document.querySelectorAll('.fade-in');
    const windowHeight = window.innerHeight;

    fadeIns.forEach(element => {
        const sectionTop = element.getBoundingClientRect().top;
        if (sectionTop < windowHeight - 50) {
            element.classList.add('visible');
        }
    });
}

// Attach scroll event listener for fade-in animation
window.addEventListener('scroll', revealOnScroll);

// Initial call to ensure fade-in effects on load
revealOnScroll();
