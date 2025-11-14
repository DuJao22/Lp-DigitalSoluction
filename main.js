import './style.css'

// --- Countdown Timer ---
function startCountdown() {
  const countdownEl = document.getElementById('countdown');
  if (!countdownEl) return;

  const countdownDate = new Date().getTime() + (24 * 60 * 60 * 1000);

  const timer = setInterval(function() {
    const now = new Date().getTime();
    const distance = countdownDate - now;

    const hoursEl = document.getElementById('hours');
    const minutesEl = document.getElementById('minutes');
    const secondsEl = document.getElementById('seconds');

    if (distance < 0) {
      clearInterval(timer);
      countdownEl.innerHTML = '<div class="text-center"><p class="text-3xl font-bold">OFERTA EXPIRADA!</p></div>';
      return;
    }

    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
    if(hoursEl) hoursEl.textContent = String(hours).padStart(2, '0');
    if(minutesEl) minutesEl.textContent = String(minutes).padStart(2, '0');
    if(secondsEl) secondsEl.textContent = String(seconds).padStart(2, '0');

  }, 1000);
}

// --- Scroll Animations ---
function setupScrollAnimations() {
  const animatedElements = document.querySelectorAll('.animated');
  if (animatedElements.length === 0) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-slide-up');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1
  });

  animatedElements.forEach(el => {
    observer.observe(el);
  });
}

// --- Exit Intent Logic ---
function setupExitIntent() {
  let exitIntentShown = false;
  document.addEventListener('mouseleave', function(e) {
    if (e.clientY < 0 && !exitIntentShown) {
      exitIntentShown = true;
      if (confirm('⚠️ ESPERE! Antes de sair, que tal um desconto especial de 10%? Clique OK para falar comigo no WhatsApp!')) {
        window.open('https://wa.me/5531995281707?text=Vi%20que%20tem%20desconto%20especial!', '_blank');
      }
    }
  });
}

// --- Initialize all scripts ---
document.addEventListener('DOMContentLoaded', () => {
  startCountdown();
  setupScrollAnimations();
  setupExitIntent();
});
