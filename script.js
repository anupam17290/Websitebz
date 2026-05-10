// Log when page loads
console.log('Welcome to my website! 🚀');

// Button click handler
const btn = document.querySelector('.btn');
if (btn) {
    btn.addEventListener('click', function() {
        console.log('Button clicked!');
        alert('Welcome! Let\'s start learning web development! 🎉');
    });
}

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Add animation on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'fadeIn 0.6s ease-in forwards';
        }
    });
}, observerOptions);

// Observe all cards and sections
document.querySelectorAll('.feature-card, .project-card, section').forEach(el => {
    observer.observe(el);
});

// Log page visibility
document.addEventListener('visibilitychange', function() {
    if (document.hidden) {
        console.log('Tab is now hidden');
    } else {
        console.log('Tab is now visible');
    }
});

console.log('All scripts loaded successfully! ✨');
