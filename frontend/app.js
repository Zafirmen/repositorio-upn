/* ═══════════════════════════════════════════
   APP.JS — Departamento de Tecnología UPN
   Lógica de UI: navbar, filtros, animaciones
   ═══════════════════════════════════════════ */

// ─── Navbar scroll effect ───
function initNavbarScrollEffect() {
  const navbar = document.getElementById('navbar');
  if (!navbar) return;

  const handleScroll = () => {
    navbar.classList.toggle('scrolled', window.scrollY > 50);
  };

  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll();
}

// ─── Mobile nav toggle ───
function initMobileNavToggle() {
  const navToggle = document.getElementById('navToggle');
  const navLinks = document.getElementById('navLinks');
  if (!navToggle || !navLinks) return;

  navToggle.addEventListener('click', () => {
    navLinks.classList.toggle('open');
  });

  navLinks.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('open');
    });
  });
}

// ─── Animated counters ───
function initCounterAnimations() {
  const counters = document.querySelectorAll('.hero-stat-number');

  const animateCounter = (element) => {
    const target = parseInt(element.dataset.target, 10);
    if (target === 0) {
      element.textContent = '0';
      return;
    }

    const duration = 1500;
    const startTime = performance.now();

    const updateCounter = (currentTime) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);

      element.textContent = Math.round(target * eased);

      if (progress < 1) {
        requestAnimationFrame(updateCounter);
      }
    };

    requestAnimationFrame(updateCounter);
  };

  const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateCounter(entry.target);
        counterObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });

  counters.forEach(counter => counterObserver.observe(counter));
}

// ─── Project filter buttons ───
function initProjectFilters() {
  const filterContainer = document.getElementById('projectFilters');
  if (!filterContainer) return;

  filterContainer.addEventListener('click', (event) => {
    const clickedButton = event.target.closest('.filter-btn');
    if (!clickedButton) return;

    filterContainer.querySelectorAll('.filter-btn').forEach(btn => {
      btn.classList.remove('filter-btn--active');
    });
    clickedButton.classList.add('filter-btn--active');

    // Future: filter projects by data-filter attribute
    // const filterValue = clickedButton.dataset.filter;
    // filterProjectsByCategory(filterValue);
  });
}

// ─── Scroll-triggered reveal animations ───
function initScrollReveal() {
  const revealElements = document.querySelectorAll(
    '.card, .doc-card, .step, .contact-channel'
  );

  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

  revealElements.forEach((element, index) => {
    element.style.opacity = '0';
    element.style.transform = 'translateY(24px)';
    element.style.transition = `opacity 0.5s ease ${index * 0.08}s, transform 0.5s ease ${index * 0.08}s`;
    revealObserver.observe(element);
  });
}

// ─── Smooth scroll for anchor links ───
function initSmoothScrollLinks() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (event) => {
      const targetId = anchor.getAttribute('href');
      if (targetId === '#') return;

      const targetElement = document.querySelector(targetId);
      if (!targetElement) return;

      event.preventDefault();
      const navbarHeight = document.getElementById('navbar')?.offsetHeight || 0;
      const targetPosition = targetElement.offsetTop - navbarHeight - 20;

      window.scrollTo({ top: targetPosition, behavior: 'smooth' });
    });
  });
}

// ─── Initialize everything on DOM ready ───
document.addEventListener('DOMContentLoaded', () => {
  initNavbarScrollEffect();
  initMobileNavToggle();
  initCounterAnimations();
  initProjectFilters();
  initScrollReveal();
  initSmoothScrollLinks();
});
