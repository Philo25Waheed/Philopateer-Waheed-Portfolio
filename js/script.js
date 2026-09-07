/**
 * PHILOPATEER WAHEED — PORTFOLIO MAIN INTERACTIVE SCRIPT
 */

document.addEventListener('DOMContentLoaded', () => {
  initThemeToggle();
  initNavbar();
  initCustomCursor();
  initScrollAnimations();
  initCounterStats();
  initProjectModals();
  initContactForm();
  initBackToTop();
});

/* ==========================================================================
   1. NAVBAR & MOBILE MENU
   ========================================================================== */
function initNavbar() {
  const navbar = document.querySelector('.navbar');
  const navToggle = document.querySelector('.nav-toggle');
  const navMenu = document.querySelector('.nav-menu');
  const navLinks = document.querySelectorAll('.nav-link');

  // Scroll effect for Navbar
  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  }, { passive: true });

  // Mobile Menu Toggle
  if (navToggle && navMenu) {
    navToggle.addEventListener('click', () => {
      const isActive = navToggle.classList.toggle('active');
      navMenu.classList.toggle('active');
      navToggle.setAttribute('aria-expanded', isActive);
      document.body.style.overflow = isActive ? 'hidden' : '';
    });

    // Close menu when link is clicked
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        navToggle.classList.remove('active');
        navMenu.classList.remove('active');
        navToggle.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
      });
    });
  }

  // Active link scroll spy
  const sections = document.querySelectorAll('section[id]');
  const observerOptions = {
    root: null,
    rootMargin: '-20% 0px -70% 0px',
    threshold: 0
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');
        navLinks.forEach(link => {
          if (link.getAttribute('href') === `#${id}`) {
            link.classList.add('active');
          } else {
            link.classList.remove('active');
          }
        });
      }
    });
  }, observerOptions);

  sections.forEach(section => observer.observe(section));
}

/* ==========================================================================
   2. SUBTLE CUSTOM CURSOR
   ========================================================================== */
function initCustomCursor() {
  const cursorDot = document.querySelector('.custom-cursor-dot');
  const cursorOutline = document.querySelector('.custom-cursor-outline');

  if (!cursorDot || !cursorOutline) return;

  // Track position
  window.addEventListener('mousemove', (e) => {
    const { clientX: x, clientY: y } = e;
    
    cursorDot.style.transform = `translate(${x}px, ${y}px)`;
    
    cursorOutline.animate({
      transform: `translate(${x}px, ${y}px)`
    }, { duration: 300, fill: 'forwards' });
  });

  // Interactive hover scaling
  const interactiveElements = document.querySelectorAll('a, button, input, textarea, .project-card, .skill-category-card');
  interactiveElements.forEach(el => {
    el.addEventListener('mouseenter', () => {
      cursorOutline.style.transform += ' scale(1.5)';
      cursorOutline.style.borderColor = 'var(--accent-cyan)';
    });
    el.addEventListener('mouseleave', () => {
      cursorOutline.style.borderColor = 'rgba(6, 182, 212, 0.5)';
    });
  });
}

/* ==========================================================================
   3. SCROLL REVEAL ANIMATIONS
   ========================================================================== */
function initScrollAnimations() {
  const animatedElements = document.querySelectorAll('.animate-on-scroll');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animated');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  animatedElements.forEach(el => observer.observe(el));
}

/* ==========================================================================
   4. COUNTER STATS ANIMATION
   ========================================================================== */
function initCounterStats() {
  const statNumbers = document.querySelectorAll('.stat-number[data-count]');
  if (!statNumbers.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const target = entry.target;
        const finalCount = parseInt(target.getAttribute('data-count'), 10);
        const suffix = target.getAttribute('data-suffix') || '';
        let currentCount = 0;
        const duration = 1500;
        const stepTime = Math.abs(Math.floor(duration / finalCount));

        const timer = setInterval(() => {
          currentCount += 1;
          target.textContent = (currentCount < 10 ? `0${currentCount}` : currentCount) + suffix;
          if (currentCount >= finalCount) {
            clearInterval(timer);
          }
        }, stepTime);

        observer.unobserve(target);
      }
    });
  }, { threshold: 0.5 });

  statNumbers.forEach(num => observer.observe(num));
}

/* ==========================================================================
   5. PROJECT DETAILS MODAL MANAGER
   ========================================================================== */
function initProjectModals() {
  const modalOverlay = document.getElementById('projectModal');
  const modalCloseBtn = document.getElementById('modalCloseBtn');
  const modalContent = document.getElementById('modalContent');
  const viewDetailsBtns = document.querySelectorAll('.view-details-btn');

  if (!modalOverlay || !typeof projectsData === 'undefined') return;

  // Open Modal
  viewDetailsBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const projectId = btn.getAttribute('data-project-id');
      const project = projectsData.find(p => p.id === projectId);

      if (project) {
        renderModalContent(project);
        modalOverlay.classList.add('active');
        document.body.style.overflow = 'hidden';
        modalCloseBtn.focus();
      }
    });
  });

  // Close Modal
  function closeModal() {
    modalOverlay.classList.remove('active');
    document.body.style.overflow = '';
  }

  if (modalCloseBtn) {
    modalCloseBtn.addEventListener('click', closeModal);
  }

  modalOverlay.addEventListener('click', (e) => {
    if (e.target === modalOverlay) {
      closeModal();
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modalOverlay.classList.contains('active')) {
      closeModal();
    }
  });

  // Render Modal Data HTML
  function renderModalContent(project) {
    const githubLinkHtml = project.github === '#'
      ? `<span class="btn btn-secondary btn-sm" title="${project.githubPlaceholderComment || 'GitHub link'}"><i class="fab fa-github"></i> Repository Configured in Admin</span>`
      : `<a href="${project.github}" target="_blank" rel="noopener noreferrer" class="btn btn-secondary btn-sm"><i class="fab fa-github"></i> View GitHub Repository</a>`;

    const demoLinkHtml = project.demo 
      ? `<a href="${project.demo}" target="_blank" rel="noopener noreferrer" class="btn btn-primary btn-sm"><i class="fas fa-external-link-alt"></i> Live Demo</a>`
      : '';

    const techBadgesHtml = project.technologies
      .map(t => `<span class="tech-tag">${t}</span>`)
      .join('');

    const featuresHtml = project.features
      .map(f => `<li>${f}</li>`)
      .join('');

    modalContent.innerHTML = `
      <img src="${project.image}" alt="${project.title} Preview" class="modal-project-img">
      <div style="display:flex; align-items:center; justify-content:space-between; flex-wrap:wrap; gap:0.5rem; margin-bottom:0.5rem;">
        <span class="tech-tag" style="font-size:0.85rem; padding:0.35rem 0.85rem;">${project.category}</span>
        <span style="font-size:0.85rem; color:var(--accent-cyan); font-weight:600;"><i class="fas fa-check-circle"></i> ${project.status}</span>
      </div>
      <h3 class="modal-project-title">${project.title}</h3>
      <p style="color:var(--text-muted); font-size:1.05rem; margin-bottom:1.5rem; line-height:1.7;">${project.fullDescription || project.shortDescription}</p>

      <h4 style="font-size:1.1rem; color:var(--text-main); margin-bottom:0.75rem;">Key Architecture &amp; System Features:</h4>
      <ul class="modal-features-list">
        ${featuresHtml}
      </ul>

      <h4 style="font-size:1.1rem; color:var(--text-main); margin-top:1.5rem; margin-bottom:0.75rem;">Technologies Used:</h4>
      <div class="project-tech-stack" style="margin-bottom:2rem;">
        ${techBadgesHtml}
      </div>

      <div style="display:flex; gap:1rem; flex-wrap:wrap; padding-top:1.25rem; border-top:1px solid var(--border-color);">
        ${githubLinkHtml}
        ${demoLinkHtml}
      </div>
    `;
  }
}

/* ==========================================================================
   6. FRONTEND CONTACT FORM WITH MAILTO ACTION
   ========================================================================== */
function initContactForm() {
  const form = document.getElementById('contactForm');
  const formStatus = document.getElementById('formStatus');

  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const nameInput = document.getElementById('contactName');
    const emailInput = document.getElementById('contactEmail');
    const subjectInput = document.getElementById('contactSubject');
    const messageInput = document.getElementById('contactMessage');

    const name = nameInput.value.trim();
    const email = emailInput.value.trim();
    const subject = subjectInput.value.trim();
    const message = messageInput.value.trim();

    if (!name || !email || !subject || !message) {
      showStatus('Please fill in all required fields.', 'error');
      return;
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      showStatus('Please provide a valid email address.', 'error');
      return;
    }

    // Trigger mailto link for direct client send
    const mailtoBody = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`);
    const mailtoUrl = `mailto:philowaheed25@gmail.com?subject=${encodeURIComponent(subject)}&body=${mailtoBody}`;

    showStatus('Preparing your message... Opening your email client.', 'success');
    
    setTimeout(() => {
      window.location.href = mailtoUrl;
      form.reset();
    }, 1000);
  });

  function showStatus(msg, type) {
    formStatus.textContent = msg;
    formStatus.className = `form-status ${type}`;
  }
}

/* ==========================================================================
   7. BACK TO TOP BUTTON
   ========================================================================== */
function initBackToTop() {
  const backToTopBtn = document.getElementById('backToTopBtn');
  if (!backToTopBtn) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 400) {
      backToTopBtn.classList.add('visible');
    } else {
      backToTopBtn.classList.remove('visible');
    }
  }, { passive: true });

  backToTopBtn.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
}

/* ==========================================================================
   8. THEME TOGGLE (LIGHT & DARK MODE)
   ========================================================================== */
function initThemeToggle() {
  const themeToggleBtn = document.getElementById('themeToggleBtn');
  if (!themeToggleBtn) return;

  function getCurrentTheme() {
    return document.documentElement.getAttribute('data-theme') || 'dark';
  }

  function applyTheme(theme, animate = false) {
    if (animate) {
      document.documentElement.classList.add('theme-transition');
      setTimeout(() => {
        document.documentElement.classList.remove('theme-transition');
      }, 350);
    }
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);

    // Update accessibility attributes & tooltip
    const isDark = theme === 'dark';
    const label = isDark ? 'Switch to light mode' : 'Switch to dark mode';
    themeToggleBtn.setAttribute('aria-label', label);
    themeToggleBtn.setAttribute('title', label);
  }

  // Update initial ARIA label on load
  const initialTheme = getCurrentTheme();
  applyTheme(initialTheme, false);

  // Toggle theme on button click
  themeToggleBtn.addEventListener('click', () => {
    const currentTheme = getCurrentTheme();
    const nextTheme = currentTheme === 'dark' ? 'light' : 'dark';
    applyTheme(nextTheme, true);
  });

  // Automatically respond to OS system theme changes if user hasn't explicitly set a preference
  const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
  mediaQuery.addEventListener('change', (e) => {
    if (!localStorage.getItem('theme')) {
      applyTheme(e.matches ? 'dark' : 'light', true);
    }
  });
}

