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

// Placeholder for Future Animations (e.g., Fade-Ins on Scroll)
window.addEventListener('scroll', () => {
    const fadeIns = document.querySelectorAll('.fade-in');
    fadeIns.forEach(element => {
        const rect = element.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) {
            element.classList.add('visible');
        }
    });
});

// Detect scroll and add 'visible' class for fade-in sections
function revealOnScroll() {
    const sections = document.querySelectorAll('.fade-in');
    const windowHeight = window.innerHeight;
    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        if (sectionTop < windowHeight - 50) {
            section.classList.add('visible');
        }
    });
}

// Attach scroll event listener
window.addEventListener('scroll', revealOnScroll);

// Initial call to ensure fade-in effects on load
revealOnScroll();
