// Año dinámico en el footer
document.getElementById('year').textContent = new Date().getFullYear();

// Barra de progreso de scroll
const scrollProgress = document.getElementById('scrollProgress');

if (scrollProgress) {
  const updateProgress = () => {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const percent = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
    scrollProgress.style.width = `${percent}%`;
  };

  updateProgress();
  window.addEventListener('scroll', updateProgress, { passive: true });
  window.addEventListener('resize', updateProgress);
}

// Highlight del link activo en el nav según la sección visible
const navLinks = document.querySelectorAll('.nav__links a');

if ('IntersectionObserver' in window && navLinks.length) {
  const linkByHash = new Map();
  navLinks.forEach((link) => linkByHash.set(link.getAttribute('href'), link));

  const navSections = [...linkByHash.keys()]
    .map((hash) => document.querySelector(hash))
    .filter(Boolean);

  const navObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        const link = linkByHash.get(`#${entry.target.id}`);
        if (!link) return;
        if (entry.isIntersecting) {
          navLinks.forEach((l) => l.classList.remove('is-active'));
          link.classList.add('is-active');
        }
      });
    },
    { threshold: 0, rootMargin: '-45% 0px -50% 0px' }
  );

  navSections.forEach((section) => navObserver.observe(section));
}

// Reveal de secciones al hacer scroll
const revealTargets = document.querySelectorAll('main .section');

if ('IntersectionObserver' in window && revealTargets.length) {
  revealTargets.forEach((el) => el.classList.add('reveal'));

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('reveal--visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15, rootMargin: '0px 0px -60px 0px' }
  );

  revealTargets.forEach((el) => observer.observe(el));
}
