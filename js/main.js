/* ==========================================================================
   Strata Flooring by Premrest — Main JS
   ========================================================================== */

(function () {
  'use strict';

  // ---------- Mobile Navigation ----------
  const mobileToggle = document.getElementById('mobileToggle');
  const mainNav = document.getElementById('mainNav');
  let overlay = null;

  function createOverlay() {
    overlay = document.createElement('div');
    overlay.className = 'nav-overlay';
    document.body.appendChild(overlay);
    overlay.addEventListener('click', closeMenu);
  }

  function openMenu() {
    mobileToggle.classList.add('active');
    mobileToggle.setAttribute('aria-expanded', 'true');
    mainNav.classList.add('open');
    if (overlay) overlay.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeMenu() {
    mobileToggle.classList.remove('active');
    mobileToggle.setAttribute('aria-expanded', 'false');
    mainNav.classList.remove('open');
    if (overlay) overlay.classList.remove('active');
    document.body.style.overflow = '';
  }

  if (mobileToggle && mainNav) {
    createOverlay();
    mobileToggle.addEventListener('click', function () {
      if (mainNav.classList.contains('open')) {
        closeMenu();
      } else {
        openMenu();
      }
    });

    // Close menu when clicking nav links
    mainNav.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', closeMenu);
    });
  }


  // ---------- Header Scroll Effect ----------
  const header = document.getElementById('header');

  function handleScroll() {
    if (window.scrollY > 40) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  }

  if (header) {
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
  }


  // ---------- Scroll Animations (Intersection Observer) ----------
  const animatedElements = document.querySelectorAll('.animate-in');

  if (animatedElements.length > 0 && 'IntersectionObserver' in window) {
    const observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.15,
        rootMargin: '0px 0px -40px 0px',
      }
    );

    animatedElements.forEach(function (el) {
      observer.observe(el);
    });
  } else {
    // Fallback: show everything if IntersectionObserver isn't available
    animatedElements.forEach(function (el) {
      el.classList.add('visible');
    });
  }


  // ---------- Smooth Scroll for Anchor Links ----------
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
      var targetId = this.getAttribute('href');
      if (targetId === '#') return;

      var target = document.querySelector(targetId);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });

        // Update URL without jump
        if (history.pushState) {
          history.pushState(null, null, targetId);
        }
      }
    });
  });


  // ---------- Contact Form Handling ----------
  var contactForm = document.getElementById('contactForm');

  if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
      e.preventDefault();

      var form = this;
      var submitBtn = form.querySelector('button[type="submit"]');
      var originalText = submitBtn.textContent;

      // Disable button and show loading
      submitBtn.disabled = true;
      submitBtn.textContent = 'Sending...';

      var formData = new FormData(form);

      fetch(form.action, {
        method: 'POST',
        body: formData,
        headers: { Accept: 'application/json' },
      })
        .then(function (response) {
          if (response.ok) {
            // Show success message
            var wrapper = form.closest('.contact-form-wrap');
            wrapper.innerHTML =
              '<div class="form-success">' +
              '<div class="success-icon">' +
              '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6L9 17l-5-5"/></svg>' +
              '</div>' +
              '<h3>Got it. We\'ll be in touch.</h3>' +
              '<p>Thanks for reaching out. We\'ll get back to you within 1 business day.</p>' +
              '</div>';
          } else {
            throw new Error('Form submission failed');
          }
        })
        .catch(function () {
          submitBtn.disabled = false;
          submitBtn.textContent = originalText;
          alert(
            'Something went wrong sending your message. Please try calling us on 1300 207 915 or emailing office@premrest.com.au.'
          );
        });
    });
  }
})();
