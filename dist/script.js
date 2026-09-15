const header = document.querySelector('[data-header]');
const menuToggle = document.querySelector('[data-menu-toggle]');
const nav = document.querySelector('[data-nav]');

const updateHeader = () => header.classList.toggle('scrolled', window.scrollY > 24);
updateHeader();
window.addEventListener('scroll', updateHeader, { passive: true });

menuToggle.addEventListener('click', () => {
  const open = document.body.classList.toggle('menu-open');
  menuToggle.setAttribute('aria-expanded', String(open));
});

nav.addEventListener('click', (event) => {
  if (event.target.matches('a')) {
    document.body.classList.remove('menu-open');
    menuToggle.setAttribute('aria-expanded', 'false');
  }
});

const reveals = document.querySelectorAll('.reveal');
if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  reveals.forEach((element) => observer.observe(element));
} else {
  reveals.forEach((element) => element.classList.add('visible'));
}

const carousel = document.querySelector('[data-carousel]');
const track = carousel.querySelector('[data-track]');
const slides = [...track.children];
const dots = carousel.querySelector('[data-dots]');
const photoDuration = 7000;
let current = 0;
let timer;

const goTo = (index) => {
  current = (index + slides.length) % slides.length;
  track.style.transform = `translateX(-${current * 100}%)`;
  slides.forEach((slide, i) => slide.setAttribute('aria-hidden', String(i !== current)));
  [...dots.children].forEach((dot, i) => {
    dot.classList.toggle('active', i === current);
    dot.setAttribute('aria-current', i === current ? 'true' : 'false');
  });
};

slides.forEach((_, index) => {
  const dot = document.createElement('button');
  dot.type = 'button';
  dot.setAttribute('aria-label', `Ir para foto ${index + 1}`);
  dot.addEventListener('click', () => { goTo(index); restart(); });
  dots.appendChild(dot);
});

const start = () => {
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const interacting = carousel.matches(':hover') || carousel.contains(document.activeElement);
  if (reducedMotion || interacting) return;
  timer = window.setInterval(() => goTo(current + 1), photoDuration);
};
const stop = () => window.clearInterval(timer);
const restart = () => { stop(); start(); };

carousel.querySelector('[data-prev]').addEventListener('click', () => { goTo(current - 1); restart(); });
carousel.querySelector('[data-next]').addEventListener('click', () => { goTo(current + 1); restart(); });
carousel.addEventListener('mouseenter', stop);
carousel.addEventListener('mouseleave', start);
carousel.addEventListener('focusin', stop);
carousel.addEventListener('focusout', start);
goTo(0);
start();

document.querySelector('[data-year]').textContent = new Date().getFullYear();
