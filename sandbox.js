function setUpEvents() {
    document.addEventListener('DOMContentLoaded', (event) => {
        // Typing effect
        const words = ['developer', 'designer', 'problem solver'];
        let wordIndex = 0;
        const typingElement = document.querySelector('.typing');

        function typeWord() {
            const currentWord = words[wordIndex];
            typingElement.textContent = currentWord;
            typingElement.classList.add('fade-effect');

            setTimeout(() => {
                typingElement.classList.remove('fade-effect');
                wordIndex = (wordIndex + 1) % words.length;
                setTimeout(typeWord, 500); // Delay before typing next word
            }, 2000); // Duration of fade effect
        }

        typeWord();

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
        const observer = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting) {
                animateSkillBars();
            }
        });
    
        observer.observe(skillsSection);

        // Mobile navigation toggle
        const mobileNavToggle = document.getElementById('mobile-nav-toggle');
        const sidePanel = document.querySelector('.side-panel');

        mobileNavToggle.addEventListener('click', () => {
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
    });
}

window.onload = function() {
    setUpEvents();
};