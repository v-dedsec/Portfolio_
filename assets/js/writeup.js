// ===================================
// Copy Code Functionality
// ===================================

function copyCode(button) {
    const codeBlock = button.closest('.code-block');
    const code = codeBlock.querySelector('code').textContent;

    navigator.clipboard.writeText(code).then(() => {
        const icon = button.querySelector('i');
        const originalClass = icon.className;

        icon.className = 'fas fa-check';
        button.classList.add('copied');
        button.innerHTML = '<i class="fas fa-check"></i> Copied!';

        setTimeout(() => {
            button.innerHTML = '<i class="fas fa-copy"></i>';
            button.classList.remove('copied');
        }, 2000);
    }).catch(err => {
        console.error('Failed to copy code:', err);
        button.innerHTML = '<i class="fas fa-times"></i> Error';

        setTimeout(() => {
            button.innerHTML = '<i class="fas fa-copy"></i>';
        }, 2000);
    });
}

// ===================================
// Smooth Reveal Animation
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

document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.content-block').forEach((block, index) => {
        block.style.opacity = '0';
        block.style.transform = 'translateY(30px)';
        block.style.transition = `opacity 0.6s ease ${index * 0.1}s, transform 0.6s ease ${index * 0.1}s`;
        observer.observe(block);
    });
});

// ===================================
// Reading Progress Bar
// ===================================

window.addEventListener('scroll', () => {
    const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (winScroll / height) * 100;

    let progressBar = document.getElementById('reading-progress');

    if (!progressBar) {
        progressBar = document.createElement('div');
        progressBar.id = 'reading-progress';
        progressBar.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: ${scrolled}%;
            height: 3px;
            background: linear-gradient(135deg, #c850ff, #ff2d95);
            z-index: 9999;
            transition: width 0.1s ease;
            box-shadow: 0 0 10px #c850ff;
        `;
        document.body.appendChild(progressBar);
    } else {
        progressBar.style.width = scrolled + '%';
    }
});

// ===================================
// Syntax Highlighting Enhancement
// ===================================

document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.code-block code').forEach(block => {
        let html = block.innerHTML;

        html = html.replace(/(\b(?:SELECT|FROM|WHERE|AND|OR|INSERT|UPDATE|DELETE|CREATE|DROP|ALTER|UNION|JOIN)\b)/gi, '<span style="color: #ff2d95; font-weight: bold;">$1</span>');

        html = html.replace(/(\b(?:def|class|import|from|if|else|elif|for|while|return|try|except|finally|with|as|async|await)\b)/g, '<span style="color: #c850ff; font-weight: bold;">$1</span>');

        html = html.replace(/(["'])(?:(?=(\\?))\2.)*?\1/g, '<span style="color: #00ff88;">$&</span>');

        html = html.replace(/#.*/g, '<span style="color: #888;">$&</span>');

        html = html.replace(/\/\/.*/g, '<span style="color: #888;">$&</span>');

        block.innerHTML = html;
    });
});

// ===================================
// Table of Contents (Auto-generate)
// ===================================

function generateTOC() {
    const content = document.querySelector('.writeup-content');
    const headings = content.querySelectorAll('h2');

    if (headings.length > 3) {
        const tocContainer = document.createElement('div');
        tocContainer.className = 'table-of-contents neon-box';
        tocContainer.innerHTML = '<h3><i class="fas fa-list"></i> Table of Contents</h3><ul class="toc-list"></ul>';

        const tocList = tocContainer.querySelector('.toc-list');

        headings.forEach((heading, index) => {
            const id = `section-${index}`;
            heading.id = id;

            const li = document.createElement('li');
            const a = document.createElement('a');
            a.href = `#${id}`;
            a.textContent = heading.textContent;
            a.addEventListener('click', (e) => {
                e.preventDefault();
                heading.scrollIntoView({ behavior: 'smooth' });
            });

            li.appendChild(a);
            tocList.appendChild(li);
        });

        content.insertBefore(tocContainer, content.firstChild);

        const style = document.createElement('style');
        style.textContent = `
            .table-of-contents {
                margin-bottom: 3rem;
            }
            .table-of-contents h3 {
                display: flex;
                align-items: center;
                gap: 0.5rem;
                margin-bottom: 1rem;
                color: var(--neon-purple);
            }
            .toc-list {
                list-style: none;
                padding-left: 0;
            }
            .toc-list li {
                margin-bottom: 0.5rem;
            }
            .toc-list a {
                color: var(--text-secondary);
                text-decoration: none;
                transition: color 0.3s;
                display: block;
                padding: 0.5rem;
                border-radius: 5px;
            }
            .toc-list a:hover {
                color: var(--neon-purple);
                background: var(--bg-tertiary);
            }
        `;
        document.head.appendChild(style);
    }
}

document.addEventListener('DOMContentLoaded', generateTOC);
