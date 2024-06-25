function setUpEvents() {
    document.addEventListener('DOMContentLoaded', (event) => {
        console.log("DOM fully loaded and parsed");

        // Smooth scrolling for navigation links
        document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
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

        // Mobile navigation toggle
        const mobileNavToggle = document.getElementById('mobile-nav-toggle');
        const sidePanel = document.querySelector('.side-panel');

        if (mobileNavToggle && sidePanel) {
            console.log("Mobile nav elements found");
            mobileNavToggle.addEventListener('click', () => {
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
    });
}


window.onload = function() {
    console.log("Window loaded");
    setUpEvents();
};