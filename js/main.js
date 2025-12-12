// DevTools Dashboard JavaScript
console.log('🛠️ DevTools Hub loaded successfully!');

// Add smooth scroll behavior
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Add animation on scroll for tool cards
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            setTimeout(() => {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }, index * 100);
        }
    });
}, observerOptions);

document.querySelectorAll('.tool-card').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(30px)';
    card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(card);
});

// Add click tracking (optional - for analytics)
document.querySelectorAll('.tool-card a').forEach(link => {
    link.addEventListener('click', function () {
        const toolName = this.closest('.tool-card').querySelector('h3').textContent;
        console.log(`Tool accessed: ${toolName}`);
        // You can add analytics tracking here (e.g., Google Analytics)
    });
});

// Display welcome message in console
console.log(`
╔═══════════════════════════════════════╗
║                                       ║
║     Welcome to DevTools Hub! 🚀       ║
║                                       ║
║  Add more tools to this dashboard     ║
║  by creating folders in tools/        ║
║                                       ║
╚═══════════════════════════════════════╝
`);
