// ===================================
// Theme Toggle Functionality
// ===================================

const themeToggle = document.getElementById('theme-toggle');
const body = document.body;
const themeIcon = themeToggle.querySelector('i');

function loadTheme() {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light') {
        body.classList.add('light-mode');
        themeIcon.classList.remove('fa-moon');
        themeIcon.classList.add('fa-sun');
    }
}

function toggleTheme() {
    body.classList.toggle('light-mode');

    if (body.classList.contains('light-mode')) {
        themeIcon.classList.remove('fa-moon');
        themeIcon.classList.add('fa-sun');
        localStorage.setItem('theme', 'light');
    } else {
        themeIcon.classList.remove('fa-sun');
        themeIcon.classList.add('fa-moon');
        localStorage.setItem('theme', 'dark');
    }
}

themeToggle.addEventListener('click', toggleTheme);

loadTheme();

// ===================================
// Navigation Menu Functionality
// ===================================

const navLinks = document.querySelectorAll('.nav-link');
const sections = document.querySelectorAll('.content-section');

function switchSection(targetId) {
    sections.forEach(section => {
        section.classList.remove('active');
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
    });

    const targetSection = document.getElementById(targetId);
    if (targetSection) {
        targetSection.classList.add('active');
    }

    const activeLink = document.querySelector(`a[href="#${targetId}"]`);
    if (activeLink) {
        activeLink.classList.add('active');
    }

    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });

    if (window.innerWidth <= 991) {
        const sidebar = document.getElementById('sidebar');
        if (sidebar) {
            sidebar.classList.remove('active');
        }
    }
}

navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        const href = link.getAttribute('href');

        if (href.startsWith('#')) {
            e.preventDefault();
            const targetId = href.substring(1);
            switchSection(targetId);
            window.history.pushState(null, '', href);
        } else if (href.includes('.html')) {
            if (window.innerWidth <= 991) {
                const sidebar = document.getElementById('sidebar');
                if (sidebar) {
                    sidebar.classList.remove('active');
                }
            }
        }
    });
});

window.addEventListener('popstate', () => {
    const hash = window.location.hash.substring(1);
    if (hash) {
        switchSection(hash);
    }
});

window.addEventListener('load', () => {
    const hash = window.location.hash.substring(1);
    if (hash) {
        switchSection(hash);
    } else {
        const firstSection = document.querySelector('.content-section');
        if (firstSection) {
            firstSection.classList.add('active');
        }
    }
});

// ===================================
// Mobile Sidebar Toggle
// ===================================

const mobileToggle = document.getElementById('mobile-toggle');
const sidebar = document.getElementById('sidebar');

if (mobileToggle && sidebar) {
    mobileToggle.addEventListener('click', () => {
        sidebar.classList.toggle('active');
    });

    document.addEventListener('click', (e) => {
        if (window.innerWidth <= 991) {
            if (!sidebar.contains(e.target) && !mobileToggle.contains(e.target)) {
                sidebar.classList.remove('active');
            }
        }
    });
}

// ===================================
// Smooth Scroll Animation
// ===================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#' && href.length > 1) {
            e.preventDefault();
        }
    });
});

// ===================================
// Intersection Observer for Animations
// ===================================

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

document.querySelectorAll('.neon-box').forEach(box => {
    box.style.opacity = '0';
    box.style.transform = 'translateY(20px)';
    box.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    observer.observe(box);
});

// ===================================
// Terminal Typing Effect (Optional Enhancement)
// ===================================

function typeWriter(element, text, speed = 50) {
    let i = 0;
    element.textContent = '';

    function type() {
        if (i < text.length) {
            element.textContent += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }

    type();
}

// ===================================
// Keyboard Navigation
// ===================================

document.addEventListener('keydown', (e) => {
    if (e.ctrlKey && e.key === 'k') {
        e.preventDefault();
        themeToggle.click();
    }
});

// ===================================
// Console Easter Egg
// ===================================

console.log('%c🔐 Welcome to the Matrix, hacker! ',
    'background: linear-gradient(135deg, #c850ff, #ff2d95); color: white; font-size: 20px; padding: 10px; border-radius: 5px;');
console.log('%cLooking for secrets? Keep digging...',
    'color: #c850ff; font-size: 14px;');
console.log('%cPress Ctrl+K to toggle theme quickly!',
    'color: #ff2d95; font-size: 12px;');
