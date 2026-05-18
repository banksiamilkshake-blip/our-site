// Initialize visit counter
function initializeVisitCounter() {
    let visits = localStorage.getItem('visits');
    
    if (visits === null) {
        visits = 1;
    } else {
        visits = parseInt(visits) + 1;
    }
    
    localStorage.setItem('visits', visits);
    if (document.getElementById('profile-views')) {
        document.getElementById('profile-views').textContent = visits.toLocaleString();
    }
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

// Confetti effect with punk colors
function triggerConfetti() {
    const confettiCount = 80;
    
    for (let i = 0; i < confettiCount; i++) {
        createConfetti();
    }
}

function createConfetti() {
    const confetti = document.createElement('div');
    confetti.style.position = 'fixed';
    confetti.style.width = '12px';
    confetti.style.height = '12px';
    confetti.style.backgroundColor = randomPunkColor();
    confetti.style.left = Math.random() * window.innerWidth + 'px';
    confetti.style.top = '-10px';
    confetti.style.pointerEvents = 'none';
    confetti.style.zIndex = '9999';
    confetti.style.borderRadius = '50%';
    confetti.style.boxShadow = `0 0 10px ${randomPunkColor()}`;
    
    document.body.appendChild(confetti);
    
    const duration = Math.random() * 2000 + 2500;
    const xOffset = (Math.random() - 0.5) * 300;
    const rotation = Math.random() * 360;
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
        confetti.style.transform = `rotate(${rotation * progress}deg)`;
        
        requestAnimationFrame(animate);
    }
    
    animate();
}

function randomPunkColor() {
    const colors = ['#ff1493', '#00ffff', '#ff00ff', '#ff69b4', '#00ff00', '#ffff00', '#ff0000'];
    return colors[Math.floor(Math.random() * colors.length)];
}

// Mood randomizer
const moods = [
    { emoji: '😔', text: 'MISUNDERSTOOD' },
    { emoji: '😤', text: 'ANGRY' },
    { emoji: '💔', text: 'HEARTBROKEN' },
    { emoji: '😭', text: 'CRYING' },
    { emoji: '🖤', text: 'DARK' },
    { emoji: '😍', text: 'IN LOVE' },
    { emoji: '🎸', text: 'ROCKING OUT' },
    { emoji: '😎', text: 'COOL' }
];

function changeMood() {
    const mood = moods[Math.floor(Math.random() * moods.length)];
    const moodEmoji = document.getElementById('mood-emoji');
    if (moodEmoji) {
        moodEmoji.textContent = mood.emoji;
        moodEmoji.parentElement.querySelector('div:nth-child(2)').textContent = mood.text;
    }
}

// Module interactions
document.addEventListener('DOMContentLoaded', function() {
    initializeVisitCounter();
    
    // Make friend pics clickable to change
    const friendPics = document.querySelectorAll('.friend-pic img');
    friendPics.forEach(pic => {
        pic.style.cursor = 'pointer';
        pic.addEventListener('click', function() {
            this.style.transform = 'scale(1.2) rotate(-5deg)';
            setTimeout(() => {
                this.style.transform = 'scale(1) rotate(0deg)';
            }, 300);
        });
    });
    
    // Make visitor pics clickable
    const visitors = document.querySelectorAll('.visitor img');
    visitors.forEach(visitor => {
        visitor.style.cursor = 'pointer';
        visitor.addEventListener('click', function() {
            this.style.filter = 'hue-rotate(' + Math.random() * 360 + 'deg)';
        });
    });

    // Mood emoji clickable
    const moodEmoji = document.getElementById('mood-emoji');
    if (moodEmoji) {
        moodEmoji.style.cursor = 'pointer';
        moodEmoji.addEventListener('click', changeMood);
    }
});

// Console easter eggs
console.log('%c★ WELCOME TO MY PROFILE ★', 'font-size: 18px; color: #ff1493; font-weight: bold; text-shadow: 0 0 10px #00ffff;');
console.log('%c🖤 im not emo im just into good music 🖤', 'font-size: 12px; color: #00ffff; font-weight: bold;');
console.log('%cType "myspace" anywhere on the page for a surprise!!!', 'font-size: 11px; color: #ff69b4; font-style: italic;');