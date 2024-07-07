// Mobile Navigation Toggle
const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');

    burger.addEventListener('click', () => {
        // Toggle Nav
        nav.classList.toggle('nav-active');

        // Animate Links
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
            }
        });

        // Burger Animation
        burger.classList.toggle('toggle');
    });
}

navSlide();

// Scroll Reveal Animation
const scrollReveal = () => {
    const reveals = document.querySelectorAll('.reveal');

    reveals.forEach(element => {
        let elementTop = element.getBoundingClientRect().top;
        let windowHeight = window.innerHeight;

        if (elementTop < windowHeight - 100) {
            element.classList.add('active');
        } else {
            element.classList.remove('active');
        }
    });
}

window.addEventListener('scroll', scrollReveal);

// Initial call to reveal elements on page load
scrollReveal();

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Skill bar animation
const animateSkillBars = () => {
    const skillBars = document.querySelectorAll('.skill-progress');
    skillBars.forEach(bar => {
        const width = bar.dataset.width;
        bar.style.width = '0%';
        setTimeout(() => {
            bar.style.width = width;
        }, 500);
    });
}

// Call skill bar animation when skills section is in view
const skillsSection = document.querySelector('#skills');
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.5
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            animateSkillBars();
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

observer.observe(skillsSection);

// Gallery tab switching
const galleryTabs = document.querySelectorAll('.tab-btn');
const galleryContents = document.querySelectorAll('.gallery-content');

galleryTabs.forEach(tab => {
    tab.addEventListener('click', () => {
        const target = tab.dataset.tab;

        galleryTabs.forEach(t => t.classList.remove('active'));
        tab.classList.add('active');

        galleryContents.forEach(content => {
            content.classList.add('hidden');
            if (content.id === `${target}-content`) {
                content.classList.remove('hidden');
            }
        });
    });
});

// Form submission handling
const form = document.querySelector('#contact-form');
const formMessage = document.querySelector('#form-message');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    // Here you would typically send the form data to a server
    // For this example, we'll just show a success message
    formMessage.textContent = 'Message sent successfully!';
    formMessage.style.color = '#4a9ff5';

    // Clear the form
    form.reset();

    // Clear the message after 5 seconds
    setTimeout(() => {
        formMessage.textContent = '';
    }, 5000);
});

// Typing effect for hero section
const heroTitle = document.querySelector('.hero h1');
const heroText = heroTitle.textContent;
heroTitle.textContent = '';

const typeWriter = (text, i = 0) => {
    if (i < text.length) {
        heroTitle.textContent += text.charAt(i);
        setTimeout(() => typeWriter(text, i + 1), 100);
    }
}

// Start the typing effect when the page loads
window.addEventListener('load', () => {
    typeWriter(heroText);
});