document.querySelector('#year').textContent = new Date().getFullYear();
const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
if (!reducedMotion) {
  const observer = new IntersectionObserver((entries) => entries.forEach(({ isIntersecting, target }) => {
    if (isIntersecting) { target.classList.add('visible'); observer.unobserve(target); }
  }), { threshold: 0.12 });
  document.querySelectorAll('.reveal').forEach((item) => observer.observe(item));
} else document.querySelectorAll('.reveal').forEach((item) => item.classList.add('visible'));
