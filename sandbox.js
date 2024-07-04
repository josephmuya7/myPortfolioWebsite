document.addEventListener('DOMContentLoaded', () => {

    console.log("DOM fully loaded and parsed");

    // Mobile navigation toggle
    const mobileNavToggle = document.getElementById('mobile-nav-toggle');
    const sidePanel = document.querySelector('.side-panel');
    const body = document.body;

    if (mobileNavToggle && sidePanel) {
        console.log("Mobile nav elements found");
        mobileNavToggle.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            console.log("Mobile nav toggle clicked");
            sidePanel.classList.toggle('open');
            body.classList.toggle('nav-open');
            mobileNavToggle.classList.toggle('open');
        });

        // Close side panel when clicking outside
        document.addEventListener('click', (event) => {
            if (!sidePanel.contains(event.target) && !mobileNavToggle.contains(event.target)) {
                sidePanel.classList.remove('open');
                body.classList.remove('nav-open');
                mobileNavToggle.classList.remove('open');
            }
        });

        // Close side panel when a link is clicked (for mobile)
        document.querySelectorAll('.side-panel a').forEach(link => {
            link.addEventListener('click', () => {
                if (window.innerWidth <= 768) {
                    sidePanel.classList.remove('open');
                    body.classList.remove('nav-open');
                    mobileNavToggle.classList.remove('open');
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

    // Handle section visibility
    function handleSectionVisibility() {
        const sections = document.querySelectorAll('section');
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    if (entry.target.id === 'skills') {
                        animateSkillBars();
                    }
                }
            });
        }, { threshold: 0.1 });

        sections.forEach(section => {
            observer.observe(section);
        });
    }

    // Initialize section visibility handling
    handleSectionVisibility();
});

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
        mobileNavToggle.addEventListener('click', () => {
            console.log("Mobile nav toggle clicked");
            sidePanel.classList.toggle('open');
            document.body.classList.toggle('nav-open');
        });

        // Close side panel when clicking outside
        document.addEventListener('click', (event) => {
            if (!sidePanel.contains(event.target) && !mobileNavToggle.contains(event.target)) {
                sidePanel.classList.remove('open');
                document.body.classList.remove('nav-open');
            }
        });

        // Close side panel when a link is clicked (for mobile)
        document.querySelectorAll('.side-panel a').forEach(link => {
            link.addEventListener('click', () => {
                if (window.innerWidth <= 768) {
                    sidePanel.classList.remove('open');
                    document.body.classList.remove('nav-open');
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

    // Initialize section visibility handling
    handleSectionVisibility();
}

function handleSectionVisibility() {
    const sections = document.querySelectorAll('section');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                if (entry.target.id === 'skills') {
                    animateSkillBars();
                }
            }
        });
    }, { threshold: 0.1 });

    sections.forEach(section => {
        observer.observe(section);
    });
}

function animateSkillBars() {
    const skillBars = document.querySelectorAll('.skill-progress');
    skillBars.forEach(bar => {
        const width = bar.getAttribute('data-width');
        bar.style.width = width;
    });
}