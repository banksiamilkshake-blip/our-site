// Initialize visit counter
function initializeVisitCounter() {
    let visits = localStorage.getItem('visits');
    
    if (visits === null) {
        visits = 1;
    } else {
        visits = parseInt(visits) + 1;
    }
    
    localStorage.setItem('visits', visits);
    document.getElementById('visit-counter').textContent = visits;
}

// Confetti easter egg - type "myspace"
let konami = [];
let konamiCode = ['m', 'y', 's', 'p', 'a', 'c', 'e'];

document.addEventListener('keypress', function(e) {
    konami.push(e.key.toLowerCase());
    konami = konami.slice(-7);
    
    if (konami.join('') === konamiCode.join('')) {
        triggerConfetti();
        konami = [];
    }
});

// Confetti effect
function triggerConfetti() {
    const confettiCount = 50;
    
    for (let i = 0; i < confettiCount; i++) {
        createConfetti();
    }
}

function createConfetti() {
    const confetti = document.createElement('div');
    confetti.style.position = 'fixed';
    confetti.style.width = '10px';
    confetti.style.height = '10px';
    confetti.style.backgroundColor = randomColor();
    confetti.style.left = Math.random() * window.innerWidth + 'px';
    confetti.style.top = '-10px';
    confetti.style.pointerEvents = 'none';
    confetti.style.zIndex = '9999';
    confetti.style.borderRadius = '50%';
    
    document.body.appendChild(confetti);
    
    const duration = Math.random() * 2000 + 2000;
    const xOffset = (Math.random() - 0.5) * 200;
    const startTime = Date.now();
    
    function animate() {
        const elapsed = Date.now() - startTime;
        const progress = elapsed / duration;
        
        if (progress >= 1) {
            confetti.remove();
            return;
        }
        
        confetti.style.top = (progress * window.innerHeight) + 'px';
        confetti.style.left = (parseFloat(confetti.style.left) + xOffset * 0.01) + 'px';
        confetti.style.opacity = 1 - progress;
        
        requestAnimationFrame(animate);
    }
    
    animate();
}

function randomColor() {
    const colors = ['#ff00ff', '#00ffff', '#ffff00', '#ff69b4', '#00ff00', '#ff6347', '#1e90ff'];
    return colors[Math.floor(Math.random() * colors.length)];
}

// Interest tag click handlers
document.addEventListener('DOMContentLoaded', function() {
    initializeVisitCounter();
    
    const tags = document.querySelectorAll('.interest-tag');
    tags.forEach(tag => {
        tag.addEventListener('click', function(e) {
            e.preventDefault();
            this.style.backgroundColor = randomColor();
            this.style.transform = 'scale(1.15) rotate(' + (Math.random() * 20 - 10) + 'deg)';
            
            setTimeout(() => {
                this.style.transform = 'scale(1) rotate(0deg)';
            }, 200);
        });
    });
});

// Random tilt on page load
window.addEventListener('load', function() {
    const posts = document.querySelectorAll('.post');
    const boxes = document.querySelectorAll('.profile-box, .box');
    
    posts.forEach(post => {
        const randomRotation = (Math.random() - 0.5) * 3;
        post.style.transform = 'rotate(' + randomRotation + 'deg)';
    });
});

// Console easter egg
console.log('%c🎵 Welcome to MySpace 2026! 🎵', 'font-size: 20px; color: #ff00ff; font-weight: bold;');
console.log('%cType "myspace" anywhere on the page for a surprise! 🎉', 'font-size: 14px; color: #00ffff;');