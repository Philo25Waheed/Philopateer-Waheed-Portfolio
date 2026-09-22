/**
 * PHILOPATEER WAHEED — PORTFOLIO CORE INTERACTION & BILINGUAL ENGINE
 * Manages language switching (EN/AR with full RTL mirroring), theme modes,
 * dynamic project modals, interactive architecture blueprint, and validated EmailJS contact.
 */

// Global State
window.currentLang = 'en';

document.addEventListener('DOMContentLoaded', () => {
  initLanguage();
  initThemeToggle();
  initNavbar();
  initCounterStats();
  initScrollAnimations();
  initProjectModals();
  initContactForm();
  initBackToTop();
  initBlueprintInteraction();
});

/* ==========================================================================
   1. BILINGUAL TRANSLATION & RTL CONTROLLER
   ========================================================================== */
function initLanguage() {
  const urlParams = new URLSearchParams(window.location.search);
  const queryLang = urlParams.get('lang');
  const savedLang = (queryLang === 'ar' || queryLang === 'en') ? queryLang : localStorage.getItem('portfolio_lang');
  const initialLang = (savedLang === 'ar' || savedLang === 'en') ? savedLang : 'en';
  
  const langBtnEn = document.getElementById('langBtnEn');
  const langBtnAr = document.getElementById('langBtnAr');

  if (langBtnEn) {
    langBtnEn.addEventListener('click', () => setLanguage('en'));
  }
  if (langBtnAr) {
    langBtnAr.addEventListener('click', () => setLanguage('ar'));
  }

  setLanguage(initialLang);
}

function setLanguage(lang) {
  if (typeof translations === 'undefined' || !translations[lang]) {
    console.warn(`Translation dictionary for "${lang}" not found.`);
    return;
  }

  window.currentLang = lang;
  localStorage.setItem('portfolio_lang', lang);

  // Set HTML attributes
  document.documentElement.lang = lang;
  document.documentElement.dir = (lang === 'ar') ? 'rtl' : 'ltr';

  // Toggle active buttons
  const langBtnEn = document.getElementById('langBtnEn');
  const langBtnAr = document.getElementById('langBtnAr');
  if (langBtnEn) langBtnEn.classList.toggle('active', lang === 'en');
  if (langBtnAr) langBtnAr.classList.toggle('active', lang === 'ar');

  // Update text nodes with [data-i18n]
  const i18nElements = document.querySelectorAll('[data-i18n]');
  i18nElements.forEach(el => {
    const key = el.getAttribute('data-i18n');
    const translation = getNestedTranslation(translations[lang], key);
    if (translation !== undefined) {
      el.innerHTML = translation;
    }
  });

  // Update placeholders with [data-i18n-placeholder]
  const placeholderElements = document.querySelectorAll('[data-i18n-placeholder]');
  placeholderElements.forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    const translation = getNestedTranslation(translations[lang], key);
    if (translation !== undefined) {
      el.setAttribute('placeholder', translation);
    }
  });

  // Update ARIA labels with [data-i18n-aria]
  const ariaElements = document.querySelectorAll('[data-i18n-aria]');
  ariaElements.forEach(el => {
    const key = el.getAttribute('data-i18n-aria');
    const translation = getNestedTranslation(translations[lang], key);
    if (translation !== undefined) {
      el.setAttribute('aria-label', translation);
    }
  });

  // Update Project Cards Content (Titles, Descriptions, Categories)
  if (typeof projectsData !== 'undefined') {
    document.querySelectorAll('[data-project-title]').forEach(el => {
      const pid = el.getAttribute('data-project-title');
      const p = projectsData.find(item => item.id === pid);
      if (p) el.textContent = p.title[lang] || p.title.en;
    });

    document.querySelectorAll('[data-project-desc]').forEach(el => {
      const pid = el.getAttribute('data-project-desc');
      const p = projectsData.find(item => item.id === pid);
      if (p) el.textContent = p.shortDescription[lang] || p.shortDescription.en;
    });

    document.querySelectorAll('[data-project-cat]').forEach(el => {
      const pid = el.getAttribute('data-project-cat');
      const p = projectsData.find(item => item.id === pid);
      if (p) el.textContent = p.category[lang] || p.category.en;
    });
  }

  // Update Project Modal if currently open
  const modalOverlay = document.getElementById('projectModal');
  if (modalOverlay && modalOverlay.classList.contains('active')) {
    const currentProjectId = modalOverlay.getAttribute('data-active-project');
    if (currentProjectId && typeof renderModalContent === 'function') {
      const project = projectsData.find(p => p.id === currentProjectId);
      if (project) renderModalContent(project);
    }
  }
}

function getNestedTranslation(obj, path) {
  return path.split('.').reduce((prev, curr) => (prev ? prev[curr] : undefined), obj);
}

/* ==========================================================================
   2. NAVBAR & MOBILE DRAWER
   ========================================================================== */
function initNavbar() {
  const navbar = document.querySelector('.navbar');
  const navToggle = document.getElementById('navToggle');
  const navMenu = document.getElementById('navMenu');
  const navLinks = document.querySelectorAll('.nav-link');

  // Scroll effect
  window.addEventListener('scroll', () => {
    if (window.scrollY > 30) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  }, { passive: true });

  // Mobile menu toggle
  if (navToggle && navMenu) {
    navToggle.addEventListener('click', () => {
      const isActive = navToggle.classList.toggle('active');
      navMenu.classList.toggle('active');
      navToggle.setAttribute('aria-expanded', isActive);
      document.body.style.overflow = isActive ? 'hidden' : '';
    });

    // Close on link click
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        navToggle.classList.remove('active');
        navMenu.classList.remove('active');
        navToggle.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
      });
    });

    // Close on outside click
    document.addEventListener('click', (e) => {
      if (navMenu.classList.contains('active') && !navMenu.contains(e.target) && !navToggle.contains(e.target)) {
        navToggle.classList.remove('active');
        navMenu.classList.remove('active');
        navToggle.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
      }
    });
  }

  // Scroll spy
  const sections = document.querySelectorAll('section[id]');
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
  }, { rootMargin: '-25% 0px -65% 0px', threshold: 0 });

  sections.forEach(section => observer.observe(section));
}

/* ==========================================================================
   3. THEME TOGGLE (DARK / LIGHT MODE)
   ========================================================================== */
function initThemeToggle() {
  const themeToggleBtn = document.getElementById('themeToggleBtn');
  if (!themeToggleBtn) return;

  function getCurrentTheme() {
    return document.documentElement.getAttribute('data-theme') || 'dark';
  }

  function applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
    const isDark = theme === 'dark';
    const label = isDark ? 'Switch to light mode' : 'Switch to dark mode';
    themeToggleBtn.setAttribute('aria-label', label);
    themeToggleBtn.setAttribute('title', label);
  }

  const initialTheme = localStorage.getItem('theme') || 
    (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
  applyTheme(initialTheme);

  themeToggleBtn.addEventListener('click', () => {
    const nextTheme = getCurrentTheme() === 'dark' ? 'light' : 'dark';
    applyTheme(nextTheme);
  });

  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
    if (!localStorage.getItem('theme')) {
      applyTheme(e.matches ? 'dark' : 'light');
    }
  });
}

/* ==========================================================================
   4. COUNTER STATS ANIMATION
   ========================================================================== */
function initCounterStats() {
  const statNumbers = document.querySelectorAll('.metric-number[data-count]');
  if (!statNumbers.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const target = entry.target;
        const finalCount = parseInt(target.getAttribute('data-count'), 10);
        const prefix = target.getAttribute('data-prefix') || '';
        const suffix = target.getAttribute('data-suffix') || '';
        let current = 0;
        const duration = 1200;
        const stepTime = Math.max(Math.floor(duration / finalCount), 20);

        const timer = setInterval(() => {
          current += 1;
          const formatted = (current < 10 ? `0${current}` : current);
          target.innerHTML = `${prefix}${formatted}<span>${suffix}</span>`;
          if (current >= finalCount) {
            clearInterval(timer);
          }
        }, stepTime);

        observer.unobserve(target);
      }
    });
  }, { threshold: 0.4 });

  statNumbers.forEach(num => observer.observe(num));
}

/* ==========================================================================
   5. SCROLL REVEAL ANIMATIONS
   ========================================================================== */
function initScrollAnimations() {
  const animatedElements = document.querySelectorAll('.animate-on-scroll');
  if (!animatedElements.length) return;

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
   6. INTERACTIVE ARCHITECTURE BLUEPRINT
   ========================================================================== */
function initBlueprintInteraction() {
  const nodes = document.querySelectorAll('.blueprint-node');
  if (!nodes.length) return;

  nodes.forEach(node => {
    node.addEventListener('mouseenter', () => {
      nodes.forEach(n => n.classList.remove('active'));
      node.classList.add('active');
    });
  });
}

/* ==========================================================================
   7. PROJECT DETAILS MODAL MANAGER (BILINGUAL)
   ========================================================================== */
let renderModalContent = null;

function initProjectModals() {
  const modalOverlay = document.getElementById('projectModal');
  const modalCloseBtn = document.getElementById('modalCloseBtn');
  const modalContent = document.getElementById('modalContent');
  const viewDetailsBtns = document.querySelectorAll('.view-details-btn');

  if (!modalOverlay || typeof projectsData === 'undefined') return;

  renderModalContent = function(project) {
    const lang = window.currentLang || 'en';
    const isAr = lang === 'ar';

    const title = project.title[lang] || project.title.en;
    const category = project.category[lang] || project.category.en;
    const fullDesc = project.fullDescription[lang] || project.fullDescription.en;
    const status = project.status[lang] || project.status.en;
    const features = project.features[lang] || project.features.en;

    const tModal = translations[lang].modal;

    const githubLinkHtml = project.github
      ? `<a href="${project.github}" target="_blank" rel="noopener noreferrer" class="btn btn-secondary btn-sm"><i class="fab fa-github"></i> <span>${tModal.viewGithub}</span></a>`
      : '';

    const demoLinkHtml = project.demo
      ? `<a href="${project.demo}" target="_blank" rel="noopener noreferrer" class="btn btn-primary btn-sm"><i class="fas fa-external-link-alt"></i> <span>${tModal.liveDemo}</span></a>`
      : '';

    const techBadgesHtml = project.technologies
      .map(t => `<span class="tech-tag">${t}</span>`)
      .join('');

    const featuresHtml = features
      .map(f => `<li><i class="fas fa-check-circle" style="color:var(--accent-signal);"></i> <span>${f}</span></li>`)
      .join('');

    modalContent.innerHTML = `
      <img src="${project.image}" alt="${title} Preview" class="modal-project-img">
      <div style="display:flex; align-items:center; justify-content:space-between; flex-wrap:wrap; gap:0.5rem; margin-bottom:0.75rem;">
        <span class="project-category-tag">${category}</span>
        <span style="font-family:var(--font-mono); font-size:0.8rem; color:var(--accent-signal); font-weight:600;"><i class="fas fa-check"></i> ${status}</span>
      </div>
      <h3 style="font-size:1.6rem; font-weight:700; color:var(--text-main); margin-bottom:1rem; line-height:1.3;">${title}</h3>
      <p style="color:var(--text-muted); font-size:1rem; margin-bottom:1.5rem; line-height:1.75;">${fullDesc}</p>

      <h4 style="font-family:var(--font-mono); font-size:0.92rem; color:var(--accent-signal); margin-bottom:0.75rem; text-transform:uppercase; letter-spacing:0.05em;">${tModal.keyArchitecture}</h4>
      <ul style="list-style:none; display:flex; flex-direction:column; gap:0.6rem; margin-bottom:1.75rem;">
        ${featuresHtml}
      </ul>

      <h4 style="font-family:var(--font-mono); font-size:0.92rem; color:var(--accent-signal); margin-bottom:0.75rem; text-transform:uppercase; letter-spacing:0.05em;">${tModal.techUsed}</h4>
      <div class="project-tech-tags" style="margin-bottom:2rem;">
        ${techBadgesHtml}
      </div>

      <div style="display:flex; gap:1rem; flex-wrap:wrap; padding-top:1.25rem; border-top:1px solid var(--border);">
        ${githubLinkHtml}
        ${demoLinkHtml}
      </div>
    `;
  };

  viewDetailsBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const projectId = btn.getAttribute('data-project-id');
      const project = projectsData.find(p => p.id === projectId);

      if (project) {
        modalOverlay.setAttribute('data-active-project', projectId);
        renderModalContent(project);
        modalOverlay.classList.add('active');
        document.body.style.overflow = 'hidden';
        if (modalCloseBtn) modalCloseBtn.focus();
      }
    });
  });

  function closeModal() {
    modalOverlay.classList.remove('active');
    modalOverlay.removeAttribute('data-active-project');
    document.body.style.overflow = '';
  }

  if (modalCloseBtn) {
    modalCloseBtn.addEventListener('click', closeModal);
  }

  modalOverlay.addEventListener('click', (e) => {
    if (e.target === modalOverlay) closeModal();
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modalOverlay.classList.contains('active')) {
      closeModal();
    }
  });
}

/* ==========================================================================
   8. FRONTEND CONTACT FORM WITH EMAILJS INTEGRATION
   ========================================================================== */
const EMAILJS_CONFIG = {
  PUBLIC_KEY: 'YOUR_PUBLIC_KEY',
  SERVICE_ID: 'YOUR_SERVICE_ID',
  TEMPLATE_ID: 'YOUR_TEMPLATE_ID',
};

function initContactForm() {
  const form = document.getElementById('contactForm');
  const formStatus = document.getElementById('formStatus');
  const submitBtn = document.getElementById('contactSubmitBtn') || form?.querySelector('button[type="submit"]');

  if (!form) return;

  if (window.emailjs && EMAILJS_CONFIG.PUBLIC_KEY && EMAILJS_CONFIG.PUBLIC_KEY !== 'YOUR_PUBLIC_KEY') {
    try {
      emailjs.init({ publicKey: EMAILJS_CONFIG.PUBLIC_KEY });
    } catch (err) {
      console.warn('EmailJS initialization note:', err);
    }
  }

  let isSubmitting = false;

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    if (isSubmitting) return;

    const lang = window.currentLang || 'en';
    const tContact = translations[lang].contact;

    const nameInput = document.getElementById('contactName');
    const emailInput = document.getElementById('contactEmail');
    const subjectInput = document.getElementById('contactSubject');
    const messageInput = document.getElementById('contactMessage');

    const name = nameInput ? nameInput.value.trim() : '';
    const email = emailInput ? emailInput.value.trim() : '';
    const subject = subjectInput ? subjectInput.value.trim() : '';
    const message = messageInput ? messageInput.value.trim() : '';

    // 1. Validate required fields
    if (!name || !email || !subject || !message) {
      showStatus(`<i class="fas fa-circle-exclamation"></i> <span>${tContact.errRequired}</span>`, 'error');
      return;
    }

    // 2. Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      showStatus(`<i class="fas fa-circle-exclamation"></i> <span>${tContact.errEmail}</span>`, 'error');
      return;
    }

    // 3. Check EmailJS SDK
    if (typeof emailjs === 'undefined') {
      showStatus(`<i class="fas fa-triangle-exclamation"></i> <span>${tContact.errUnavailable}</span>`, 'error');
      return;
    }

    // 4. Verify Credentials
    if (
      EMAILJS_CONFIG.PUBLIC_KEY === 'YOUR_PUBLIC_KEY' ||
      EMAILJS_CONFIG.SERVICE_ID === 'YOUR_SERVICE_ID' ||
      EMAILJS_CONFIG.TEMPLATE_ID === 'YOUR_TEMPLATE_ID'
    ) {
      showStatus(`<i class="fas fa-triangle-exclamation"></i> <span>${tContact.errConfig}</span>`, 'error');
      console.warn('EmailJS credentials missing. Update EMAILJS_CONFIG in js/script.js.');
      return;
    }

    const templateParams = {
      name: name,
      email: email,
      reply_to: email,
      subject: subject,
      message: message,
    };

    isSubmitting = true;
    setLoadingState(true, tContact.btnSending);
    hideStatus();

    try {
      await emailjs.send(
        EMAILJS_CONFIG.SERVICE_ID,
        EMAILJS_CONFIG.TEMPLATE_ID,
        templateParams,
        EMAILJS_CONFIG.PUBLIC_KEY
      );

      showStatus(`<i class="fas fa-check-circle"></i> <span>${tContact.successMsg}</span>`, 'success');
      form.reset();
    } catch (error) {
      console.error('EmailJS Error:', error);
      const detail = (error && (error.text || error.message)) ? (error.text || error.message) : tContact.errUnavailable;
      showStatus(`<i class="fas fa-triangle-exclamation"></i> <span>${detail}</span>`, 'error');
    } finally {
      isSubmitting = false;
      setLoadingState(false, tContact.btnSubmit);
    }
  });

  function setLoadingState(isLoading, text) {
    if (!submitBtn) return;
    submitBtn.disabled = isLoading;
    const span = submitBtn.querySelector('span');
    const icon = submitBtn.querySelector('i');

    if (span && text) span.textContent = text;
    if (icon) icon.className = isLoading ? 'fas fa-spinner fa-spin' : 'fas fa-paper-plane dir-arrow';
  }

  function showStatus(htmlMessage, type) {
    if (!formStatus) return;
    formStatus.innerHTML = htmlMessage;
    formStatus.className = `form-status ${type}`;
    formStatus.style.display = 'flex';
  }

  function hideStatus() {
    if (!formStatus) return;
    formStatus.innerHTML = '';
    formStatus.className = 'form-status';
    formStatus.style.display = 'none';
  }
}

/* ==========================================================================
   9. BACK TO TOP BUTTON
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
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}
