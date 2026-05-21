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
    navToggle.classList.toggle('open');
  });

  navLinks.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('open');
      navToggle.classList.remove('open');
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
  const projectsGrid = document.getElementById('projectsGrid');
  if (!filterContainer || !projectsGrid) return;

  filterContainer.addEventListener('click', (event) => {
    const clickedButton = event.target.closest('.filter-btn');
    if (!clickedButton) return;

    filterContainer.querySelectorAll('.filter-btn').forEach(btn => {
      btn.classList.remove('filter-btn--active');
    });
    clickedButton.classList.add('filter-btn--active');

    const filterValue = clickedButton.getAttribute('data-filter');
    const projects = projectsGrid.querySelectorAll('.project-card');
    
    projects.forEach(project => {
      if (filterValue === 'all' || project.getAttribute('data-category') === filterValue) {
        project.style.display = 'flex';
      } else {
        project.style.display = 'none';
      }
    });
  });
}

// ─── Scroll-triggered reveal animations ───
function initScrollReveal() {
  const revealElements = document.querySelectorAll(
    '.card, .doc-row, .step, .contact-channel'
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
    element.style.transition = `opacity 0.6s cubic-bezier(0.16, 1, 0.3, 1) ${index * 0.08}s, transform 0.6s cubic-bezier(0.16, 1, 0.3, 1) ${index * 0.08}s`;
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

// ─── Interactive Ripple Effect ───
function initRippleEffect() {
  document.body.addEventListener('click', (e) => {
    const ripple = document.createElement('div');
    ripple.style.cssText = `
        position: fixed;
        width: 20px;
        height: 20px;
        border-radius: 50%;
        transform: translate(-50%, -50%);
        pointer-events: none;
        z-index: 9999;
        left: ${e.clientX}px;
        top: ${e.clientY}px;
        opacity: 1;
        transition: all 0.6s cubic-bezier(0.16, 1, 0.3, 1);
        background: var(--primary);
        box-shadow: 0 0 40px 10px var(--primary);
    `;

    document.body.appendChild(ripple);

    requestAnimationFrame(() => {
        ripple.style.transform = 'translate(-50%, -50%) scale(15)';
        ripple.style.opacity = '0';
    });

    setTimeout(() => ripple.remove(), 600);
  });
}

// ─── Theme Manager (Dark Mode) ───
function initThemeManager() {
  const navContainer = document.querySelector('.nav-container');
  if (!navContainer) return;

  const themeBtn = document.createElement('button');
  themeBtn.className = 'theme-toggle';
  themeBtn.setAttribute('aria-label', 'Activar Modo Oscuro');
  
  const moonIcon = `<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>`;
  const sunIcon = `<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>`;

  themeBtn.innerHTML = moonIcon;

  const logo = navContainer.querySelector('.nav-logo');
  const leftWrapper = document.createElement('div');
  leftWrapper.style.display = 'flex';
  leftWrapper.style.alignItems = 'center';
  
  navContainer.insertBefore(leftWrapper, logo);
  leftWrapper.appendChild(themeBtn);
  leftWrapper.appendChild(logo);

  const savedTheme = localStorage.getItem('theme');
  const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  
  if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
    document.documentElement.setAttribute('data-theme', 'dark');
    themeBtn.innerHTML = sunIcon;
  }

  themeBtn.addEventListener('click', () => {
    const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
    if (isDark) {
      document.documentElement.removeAttribute('data-theme');
      localStorage.setItem('theme', 'light');
      themeBtn.innerHTML = moonIcon;
    } else {
      document.documentElement.setAttribute('data-theme', 'dark');
      localStorage.setItem('theme', 'dark');
      themeBtn.innerHTML = sunIcon;
    }
  });
}

// ─── Initialize everything on DOM ready ───
document.addEventListener('DOMContentLoaded', () => {
  initThemeManager();
  initNavbarScrollEffect();
  initMobileNavToggle();
  initCounterAnimations();
  initProjectFilters();
  initScrollReveal();
  initSmoothScrollLinks();
  initRippleEffect();
});
