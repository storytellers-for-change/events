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

// Adjust Section Visibility on Scroll
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    const scrollPosition = window.pageYOffset || document.documentElement.scrollTop;

    sections.forEach((section) => {
        if (
            section.offsetTop <= scrollPosition + window.innerHeight / 2 &&
            section.offsetTop + section.offsetHeight > scrollPosition + window.innerHeight / 2
        ) {
            // Section is in viewport
            section.style.opacity = '1';
        } else {
            // Section is out of viewport
            section.style.opacity = '0';
        }
    });
});
