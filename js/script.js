/**
 * PHILOPATEER WAHEED — PORTFOLIO MAIN INTERACTIVE SCRIPT
 * Features:
 *  1. Top Cyber Scroll Progress Bar
 *  2. Ambient Aurora Background & Canvas Particles Network
 *  3. Dynamic Role Typewriter in Hero
 *  4. Interactive 3D Card Tilt & Cursor Spotlight Reflection
 *  5. Magnetic Button Hover Interaction
 *  6. Hero Visual Mouse Parallax
 *  7. Smooth Lerp Cursor Tracking & Click Ripple Wave
 *  8. Intersection Observer Scroll Reveal Framework
 *  9. Dynamic Timeline Progress Tracking & Pulse
 * 10. Stat Counter Animation
 * 11. Navbar Scroll Spy & Mobile Menu Drawer
 * 12. Project Modals & Contact Form Actions
 */

document.addEventListener('DOMContentLoaded', () => {
  initScrollProgressBar();
  initNavbar();
  initCustomCursor();
  initHeroParticles();
  initHeroTypewriter();
  initHeroParallax();
  init3DCardTilt();
  initMagneticButtons();
  initScrollReveal();
  initTimelineScroll();
  initCounterStats();
  initProjectModals();
  initContactForm();
  initBackToTop();
});

/* ==========================================================================
   1. TOP CYBER SCROLL PROGRESS BAR
   ========================================================================== */
function initScrollProgressBar() {
  const progressBar = document.getElementById('scrollProgressBar');
  if (!progressBar) return;

  window.addEventListener('scroll', () => {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercent = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
    progressBar.style.width = `${scrollPercent}%`;
  }, { passive: true });
}

/* ==========================================================================
   2. NAVBAR & MOBILE MENU WITH ACTIVE SPY
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
  const navBackdrop = document.getElementById('navBackdrop');

  function closeMobileMenu() {
    if (!navToggle || !navMenu) return;
    navToggle.classList.remove('active');
    navMenu.classList.remove('active');
    if (navBackdrop) navBackdrop.classList.remove('active');
    navToggle.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  }

  function openMobileMenu() {
    if (!navToggle || !navMenu) return;
    navToggle.classList.add('active');
    navMenu.classList.add('active');
    if (navBackdrop) navBackdrop.classList.add('active');
    navToggle.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
  }

  if (navToggle && navMenu) {
    navToggle.addEventListener('click', () => {
      const isCurrentlyActive = navMenu.classList.contains('active');
      if (isCurrentlyActive) {
        closeMobileMenu();
      } else {
        openMobileMenu();
      }
    });

    if (navBackdrop) {
      navBackdrop.addEventListener('click', closeMobileMenu);
    }

    // Close menu when any nav link is clicked
    navLinks.forEach(link => {
      link.addEventListener('click', closeMobileMenu);
    });

    // Close menu on Escape key
    window.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && navMenu.classList.contains('active')) {
        closeMobileMenu();
      }
    });

    // Reset on desktop resize
    window.addEventListener('resize', () => {
      if (window.innerWidth > 991 && navMenu.classList.contains('active')) {
        closeMobileMenu();
      }
    });
  }

  // Active link scroll spy
  const sections = document.querySelectorAll('section[id]');
  const observerOptions = {
    root: null,
    rootMargin: '-20% 0px -65% 0px',
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
   3. HIGH-PERFORMANCE HERO PARTICLE CONSTELLATION CANVAS
   ========================================================================== */
function initHeroParticles() {
  const canvas = document.getElementById('hero-particles');
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  let animationFrameId;
  let isVisible = true;
  let width, height;
  let particles = [];
  const mouse = { x: null, y: null, radius: 120 };

  function resizeCanvas() {
    if (!canvas.parentElement) return;
    width = canvas.width = canvas.parentElement.offsetWidth;
    height = canvas.height = canvas.parentElement.offsetHeight;
    initParticles();
  }

  function initParticles() {
    particles = [];
    const count = width > 768 ? Math.min(Math.floor(width / 26), 48) : 18;
    for (let i = 0; i < count; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.6,
        vy: (Math.random() - 0.5) * 0.6,
        radius: Math.random() * 2 + 1,
        color: Math.random() > 0.4 ? 'rgba(6, 182, 212,' : 'rgba(59, 130, 246,',
        alpha: Math.random() * 0.5 + 0.2
      });
    }
  }

  function draw() {
    if (!isVisible) return;

    ctx.clearRect(0, 0, width, height);

    // Update and draw particles
    for (let i = 0; i < particles.length; i++) {
      const p = particles[i];

      p.x += p.vx;
      p.y += p.vy;

      if (p.x < 0 || p.x > width) p.vx *= -1;
      if (p.y < 0 || p.y > height) p.vy *= -1;

      // Mouse gentle repulsion
      if (mouse.x !== null && mouse.y !== null) {
        const dx = mouse.x - p.x;
        const dy = mouse.y - p.y;
        const dist = Math.hypot(dx, dy);
        if (dist < mouse.radius) {
          const force = (mouse.radius - dist) / mouse.radius;
          p.x -= (dx / dist) * force * 1.6;
          p.y -= (dy / dist) * force * 1.6;
        }
      }

      ctx.beginPath();
      ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
      ctx.fillStyle = `${p.color}${p.alpha})`;
      ctx.fill();

      // Connect nearby particles with subtle glowing lines
      for (let j = i + 1; j < particles.length; j++) {
        const p2 = particles[j];
        const dist = Math.hypot(p.x - p2.x, p.y - p2.y);
        const maxDist = 115;
        if (dist < maxDist) {
          const lineAlpha = (1 - dist / maxDist) * 0.18;
          ctx.beginPath();
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(p2.x, p2.y);
          ctx.strokeStyle = `rgba(6, 182, 212, ${lineAlpha})`;
          ctx.lineWidth = 0.8;
          ctx.stroke();
        }
      }
    }

    animationFrameId = requestAnimationFrame(draw);
  }

  // Mouse interaction inside hero
  canvas.parentElement.addEventListener('mousemove', (e) => {
    const rect = canvas.getBoundingClientRect();
    mouse.x = e.clientX - rect.left;
    mouse.y = e.clientY - rect.top;
  });

  canvas.parentElement.addEventListener('mouseleave', () => {
    mouse.x = null;
    mouse.y = null;
  });

  window.addEventListener('resize', resizeCanvas);
  resizeCanvas();

  // Smart Visibility: Pause animation when hero is scrolled out of view to save battery & GPU
  const heroObserver = new IntersectionObserver((entries) => {
    isVisible = entries[0].isIntersecting;
    if (isVisible) {
      cancelAnimationFrame(animationFrameId);
      draw();
    }
  }, { threshold: 0.05 });

  heroObserver.observe(canvas.parentElement);
}

/* ==========================================================================
   4. DYNAMIC HERO TYPEWRITER EFFECT
   ========================================================================== */
function initHeroTypewriter() {
  const textElement = document.getElementById('typewriterText');
  if (!textElement) return;

  const phrases = [
    'modern web experiences.',
    'scalable backend systems.',
    'robust Laravel & PHP applications.',
    'clean database architectures.',
    'high-performance web solutions.'
  ];

  // Disable dynamic typing if reduced motion is requested
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    textElement.textContent = phrases[0];
    return;
  }

  let phraseIndex = 0;
  let charIndex = phrases[0].length; // start with first phrase already typed
  let isDeleting = true;
  let typingSpeed = 2200; // brief pause before first delete

  function step() {
    const currentPhrase = phrases[phraseIndex];

    if (isDeleting) {
      charIndex--;
      textElement.textContent = currentPhrase.substring(0, charIndex);
      typingSpeed = 38;
    } else {
      charIndex++;
      textElement.textContent = currentPhrase.substring(0, charIndex);
      typingSpeed = 75;
    }

    if (!isDeleting && charIndex === currentPhrase.length) {
      isDeleting = true;
      typingSpeed = 2200; // Pause at complete sentence
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      phraseIndex = (phraseIndex + 1) % phrases.length;
      typingSpeed = 450; // Pause before typing next word
    }

    setTimeout(step, typingSpeed);
  }

  setTimeout(step, typingSpeed);
}

/* ==========================================================================
   5. INTERACTIVE 3D CARD TILT & CURSOR SPOTLIGHT
   ========================================================================== */
function init3DCardTilt() {
  if (window.matchMedia('(hover: none), (prefers-reduced-motion: reduce)').matches) return;

  const tiltCards = document.querySelectorAll('[data-tilt="true"]');

  tiltCards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      // Update custom spotlight position
      card.style.setProperty('--mouse-x', `${x}px`);
      card.style.setProperty('--mouse-y', `${y}px`);

      // 3D Tilt calculation (max 6.5deg)
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const rotateX = ((y - centerY) / centerY) * -6.5;
      const rotateY = ((x - centerX) / centerX) * 6.5;

      card.style.transform = `perspective(1000px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) translateY(-4px)`;
    });

    card.addEventListener('mouseleave', () => {
      card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0px)';
      card.style.setProperty('--mouse-x', '-500px');
      card.style.setProperty('--mouse-y', '-500px');
    });
  });
}

/* ==========================================================================
   6. MAGNETIC BUTTON HOVER EFFECT
   ========================================================================== */
function initMagneticButtons() {
  if (window.matchMedia('(hover: none), (prefers-reduced-motion: reduce)').matches) return;

  const magneticBtns = document.querySelectorAll('[data-magnetic="true"]');

  magneticBtns.forEach(btn => {
    btn.addEventListener('mousemove', (e) => {
      const rect = btn.getBoundingClientRect();
      const x = e.clientX - (rect.left + rect.width / 2);
      const y = e.clientY - (rect.top + rect.height / 2);

      btn.style.transform = `translate(${x * 0.22}px, ${y * 0.22}px)`;
    });

    btn.addEventListener('mouseleave', () => {
      btn.style.transform = 'translate(0px, 0px)';
    });
  });
}

/* ==========================================================================
   7. HERO VISUAL MOUSE PARALLAX
   ========================================================================== */
function initHeroParallax() {
  if (window.matchMedia('(hover: none), (prefers-reduced-motion: reduce)').matches) return;

  const parallaxContainer = document.querySelector('[data-parallax="true"]');
  const heroSection = document.getElementById('home');

  if (!parallaxContainer || !heroSection) return;

  heroSection.addEventListener('mousemove', (e) => {
    const { clientX, clientY } = e;
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;
    const moveX = (clientX - centerX) / 45;
    const moveY = (clientY - centerY) / 45;

    parallaxContainer.style.transform = `translate(${moveX}px, ${moveY}px)`;
  });

  heroSection.addEventListener('mouseleave', () => {
    parallaxContainer.style.transform = 'translate(0px, 0px)';
  });
}

/* ==========================================================================
   8. MODERN NEON CURSOR WITH LERP INTERPOLATION & CLICK RIPPLE
   ========================================================================== */
function initCustomCursor() {
  const cursorDot = document.querySelector('.custom-cursor-dot');
  const cursorOutline = document.querySelector('.custom-cursor-outline');

  if (!cursorDot || !cursorOutline) return;
  if (window.matchMedia('(max-width: 1024px), (hover: none)').matches) return;

  let mouseX = window.innerWidth / 2;
  let mouseY = window.innerHeight / 2;
  let outlineX = mouseX;
  let outlineY = mouseY;

  window.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    cursorDot.style.transform = `translate(${mouseX}px, ${mouseY}px)`;
  });

  // Smooth Lerp loop for silky outline motion
  function renderCursor() {
    outlineX += (mouseX - outlineX) * 0.18;
    outlineY += (mouseY - outlineY) * 0.18;
    cursorOutline.style.transform = `translate(${outlineX}px, ${outlineY}px)`;
    requestAnimationFrame(renderCursor);
  }
  requestAnimationFrame(renderCursor);

  // Click shockwave ripple
  window.addEventListener('click', (e) => {
    const ripple = document.createElement('div');
    ripple.className = 'cursor-click-ripple';
    ripple.style.left = `${e.clientX}px`;
    ripple.style.top = `${e.clientY}px`;
    document.body.appendChild(ripple);
    setTimeout(() => ripple.remove(), 600);
  });

  // Interactive hover scaling for buttons and links
  const interactiveButtons = document.querySelectorAll('a, button, input, textarea, .btn-icon');
  interactiveButtons.forEach(el => {
    el.addEventListener('mouseenter', () => cursorOutline.classList.add('cursor-hover'));
    el.addEventListener('mouseleave', () => cursorOutline.classList.remove('cursor-hover'));
  });

  // Expanded card hover state
  const interactiveCards = document.querySelectorAll('.project-card, .skill-category-card, .cert-card, .github-card');
  interactiveCards.forEach(el => {
    el.addEventListener('mouseenter', () => cursorOutline.classList.add('cursor-card'));
    el.addEventListener('mouseleave', () => cursorOutline.classList.remove('cursor-card'));
  });
}

/* ==========================================================================
   9. SCROLL REVEAL ANIMATIONS (INTERSECTION OBSERVER)
   ========================================================================== */
function initScrollReveal() {
  const revealElements = document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-stagger');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
      }
    });
  }, {
    threshold: 0.12,
    rootMargin: '0px 0px -40px 0px'
  });

  revealElements.forEach(el => observer.observe(el));
}

/* ==========================================================================
   10. DYNAMIC TIMELINE PROGRESS TRACKING
   ========================================================================== */
function initTimelineScroll() {
  const timeline = document.querySelector('.timeline');
  if (!timeline) return;

  window.addEventListener('scroll', () => {
    const rect = timeline.getBoundingClientRect();
    const windowHeight = window.innerHeight;

    if (rect.top < windowHeight && rect.bottom > 0) {
      const totalHeight = rect.height;
      const scrolled = windowHeight - rect.top;
      const progress = Math.min(Math.max((scrolled / (totalHeight + windowHeight * 0.35)) * 100, 0), 100);
      timeline.style.setProperty('--timeline-progress', `${progress}%`);
    }
  }, { passive: true });
}

/* ==========================================================================
   11. COUNTER STATS ANIMATION
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
        const duration = 1400;
        const stepTime = Math.max(Math.floor(duration / finalCount), 40);

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
   12. PROJECT DETAILS MODAL MANAGER
   ========================================================================== */
function initProjectModals() {
  const modalOverlay = document.getElementById('projectModal');
  const modalCloseBtn = document.getElementById('modalCloseBtn');
  const modalContent = document.getElementById('modalContent');
  const viewDetailsBtns = document.querySelectorAll('.view-details-btn');

  if (!modalOverlay || typeof projectsData === 'undefined') return;

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
   13. FRONTEND CONTACT FORM WITH MAILTO ACTION
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
   14. BACK TO TOP BUTTON
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
