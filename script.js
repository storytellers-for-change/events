/* General Styles */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html {
    scroll-behavior: smooth;
    scroll-padding-top: 70px; /* Adjusted based on the navbar height */
}

body {
    font-family: 'Open Sans', sans-serif;
    line-height: 1.6;
    color: #333;
    background-color: #f4f4f4;
    scroll-snap-type: y mandatory; /* Added for scroll snapping */
}

h1, h2 {
    font-family: 'Bebas Neue', sans-serif;
    letter-spacing: 2px;
    text-transform: uppercase;
    color: #1a1a1a;
}

/* Navbar */
.navbar {
    position: fixed;
    top: 0;
    width: 100%;
    background: rgba(255, 255, 255, 0.9);
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px 30px;
    z-index: 1000;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    height: 70px; /* Set a fixed height for consistency */
}

.logo a {
    font-family: 'Bebas Neue', sans-serif;
    font-size: 24px;
    text-decoration: none;
    color: #1a1a1a;
}

.nav-links {
    display: flex;
    gap: 20px;
}

.nav-links a {
    text-decoration: none;
    color: #333;
    font-size: 16px;
    text-transform: uppercase;
}

.menu-icon {
    display: none; /* For mobile, style it for hamburger later */
}

.navbar a:hover {
    color: #0066cc;
}

/* Sections */
section {
    min-height: 100vh; /* Each section takes up full viewport height */
    scroll-snap-align: start; /* Added for scroll snapping */
    padding-top: 70px; /* Offset for fixed navbar */
}

.hero {
    background: url('assets/hero-background.jpg') no-repeat center center/cover;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    text-align: center;
    position: relative;
}

.hero::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5); /* Overlay effect */
    z-index: 1;
}

.hero-content {
    z-index: 2;
}

.hero-title {
    font-size: 4rem;
    letter-spacing: 3px;
}

.hero-text {
    font-size: 1.5rem;
    margin-top: 20px;
    font-weight: 300;
}

.hero-buttons {
    margin-top: 30px;
}

.btn {
    background: #0066cc;
    color: white;
    padding: 10px 20px;
    text-transform: uppercase;
    border: none;
    text-decoration: none;
    font-size: 1rem;
    margin: 0 10px;
    transition: 0.3s ease;
}

.btn:hover {
    background: #004c99;
    transform: scale(1.05);
}

/* Mission Section */
.mission {
    background: white;
    text-align: center;
}

.mission h2 {
    font-size: 2.5rem;
    margin-bottom: 20px;
}

.mission p {
    font-size: 1.1rem;
    max-width: 800px;
    margin: 0 auto;
    color: #666;
}

/* Researchers Section */
.researchers {
    background: #f9f9f9;
    text-align: center;
}

.researchers h2 {
    font-size: 2rem;
    margin-bottom: 20px;
}

.researchers p {
    font-size: 1rem;
    color: #555;
}

/* Events Section */
.events {
    background: white;
    text-align: center;
}

.events h2 {
    font-size: 2rem;
    margin-bottom: 20px;
}

.events p {
    font-size: 1rem;
    color: #555;
}

/* Footer */
footer {
    background-color: #333;
    color: white;
    padding: 20px 0;
    text-align: center;
}

footer p {
    font-size: 0.9rem;
}

footer nav a {
    color: white;
    text-decoration: none;
    margin: 0 10px;
}

footer nav a:hover {
    color: #0066cc;
}

/* Responsive Design */
@media (max-width: 768px) {
    .hero-title {
        font-size: 2.5rem;
    }
    .hero-text {
        font-size: 1.2rem;
    }
    .nav-links {
        display: none; /* Hide on mobile */
    }
    .menu-icon {
        display: block;
        cursor: pointer;
    }
    .menu-icon span {
        display: block;
        width: 25px;
        height: 3px;
        background: #333;
        margin: 5px 0;
    }
}

/* Animations */
.hero-title, .hero-text, .btn {
    animation: fadeInUp 1.5s ease;
}

@keyframes fadeInUp {
    from {
        opacity: 0;
        transform: translateY(20px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}
