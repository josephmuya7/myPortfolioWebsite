document.addEventListener('DOMContentLoaded', () => {
    console.log("DOM fully loaded and parsed");

    // Mobile navigation toggle
    const mobileNavToggle = document.getElementById('mobile-nav-toggle');
    const sidePanel = document.querySelector('.side-panel');

    if (mobileNavToggle && sidePanel) {
        console.log("Mobile nav elements found");
        mobileNavToggle.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            console.log("Mobile nav toggle clicked");
            sidePanel.classList.toggle('open');
        });

        // Close side panel when clicking outside
        document.addEventListener('click', (event) => {
            if (!sidePanel.contains(event.target) && !mobileNavToggle.contains(event.target)) {
                sidePanel.classList.remove('open');
            }
        });

        // Close side panel when a link is clicked (for mobile)
        document.querySelectorAll('.side-panel a').forEach(link => {
            link.addEventListener('click', () => {
                if (window.innerWidth <= 768) {
                    sidePanel.classList.remove('open');
                }
            });
        });
    } else {
        console.error("Mobile nav elements not found");
    }

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Animate skill bars
    function animateSkillBars() {
        const skillBars = document.querySelectorAll('.skill-progress');
        skillBars.forEach(bar => {
            const width = bar.getAttribute('data-width');
            bar.style.width = width;
        });
    }

    // Run animation when skills section is in view
    const skillsSection = document.getElementById('skills');
    if (skillsSection) {
        const observer = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting) {
                animateSkillBars();
            }
        });
    
        observer.observe(skillsSection);
    }
});

document.addEventListener('DOMContentLoaded', setUpEvents);

// Ensure all functionality works even if the DOM is already loaded
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', setUpEvents);
} else {
    setUpEvents();
}

function setUpEvents() {
    console.log("Setting up events");

    // Mobile navigation toggle
    const mobileNavToggle = document.getElementById('mobile-nav-toggle');
    const sidePanel = document.querySelector('.side-panel');

    if (mobileNavToggle && sidePanel) {
        console.log("Mobile nav elements found");
        mobileNavToggle.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            console.log("Mobile nav toggle clicked");
            sidePanel.classList.toggle('open');
        });

        // Close side panel when clicking outside
        document.addEventListener('click', (event) => {
            if (!sidePanel.contains(event.target) && !mobileNavToggle.contains(event.target)) {
                sidePanel.classList.remove('open');
            }
        });

        // Close side panel when a link is clicked (for mobile)
        document.querySelectorAll('.side-panel a').forEach(link => {
            link.addEventListener('click', () => {
                if (window.innerWidth <= 768) {
                    sidePanel.classList.remove('open');
                }
            });
        });
    } else {
        console.error("Mobile nav elements not found");
    }

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Animate skill bars
    function animateSkillBars() {
        const skillBars = document.querySelectorAll('.skill-progress');
        skillBars.forEach(bar => {
            const width = bar.getAttribute('data-width');
            bar.style.width = width;
        });
    }

    // Run animation when skills section is in view
    const skillsSection = document.getElementById('skills');
    if (skillsSection) {
        const observer = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting) {
                animateSkillBars();
            }
        });
    
        observer.observe(skillsSection);
    }

    // Add any additional event listeners or functionality here
}