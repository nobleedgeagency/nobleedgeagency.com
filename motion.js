/* ===================================
   MOTION JS - Noble Edge Agency
   Scroll reveals, stagger, count animation
 =================================== */

(function () {
  'use strict';

  document.addEventListener('DOMContentLoaded', function () {

    /* ---- 1. SCROLL REVEAL + STAGGER ---- */
    var scrollEls = document.querySelectorAll('.scroll-reveal, .scroll-fade-left, .scroll-fade-right, .scroll-scale-up, .testi-card.reveal-rotate, .hero-glow-fade, .fade-chart');
    var glows = document.querySelectorAll('.hero-glow-fade');
    var chart = document.querySelector('.fade-chart');

    if (!scrollEls.length) return;

    // Hero glows + chart fade in early (no observer needed)
    glows.forEach(function (el) { el.classList.add('is-visible'); });
    if (chart) { setTimeout(function () { chart.classList.add('is-visible'); }, 600); }

    if (!('IntersectionObserver' in window)) {
      scrollEls.forEach(function (el) { el.classList.add('is-visible'); });
      initStagger();
      initCounterAnimation();
      return;
    }

    var scrollObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          scrollObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.08, rootMargin: '0px 0px -5% 0px' });

    scrollEls.forEach(function (el) { scrollObserver.observe(el); });

    /* ---- 2. STAGGER DELAYS FOR CARDS / STEPS ---- */
    function initStagger() {
      var staggerContainers = document.querySelectorAll('.why-grid, .services-grid, .testi-grid, .case-studies, .method-steps, .kpi-row');
      staggerContainers.forEach(function (container) {
        var children = container.children;
        for (var i = 0; i < children.length; i++) {
          var c = children[i];
          if (i < 8) { c.classList.add('stagger-' + (i + 1)); }
          else { c.classList.add('stagger-8'); }
        }
      });
    }
    initStagger();

    /* ---- 3. CLICKED STAGGER RE-TRIGGER (for method steps) ---- */
    document.querySelectorAll('.why-card, .service-card, .testi-card, .case-card, .faq-item')
      .forEach(function (el) {
        el.classList.add('card-hover-lift');
      });
    document.querySelectorAll('.service-card').forEach(function (el) {
      el.classList.add('hover-glow');
    });
    document.querySelectorAll('.faq-item').forEach(function (el) {
      el.classList.add('hover-highlight');
    });
    document.querySelectorAll('.btn-primary').forEach(function (el) {
      el.classList.add('motion-glow');
    });
    document.querySelectorAll('.section-title').forEach(function (el) {
      el.classList.add('shimmer');
    });
    document.querySelectorAll('.section-label').forEach(function (el) {
      el.classList.add('motion-float');
    });

    /* ---- 4. COUNT ANIMATION FOR STATS / KPIs ---- */
    function initCounterAnimation() {
      var counters = document.querySelectorAll('.stat-num, .kpi-num, .stat-value, .count-animate');
      if (!counters.length) return;

      var counted = new WeakSet();

      var countObserver = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting && !counted.has(entry.target)) {
            counted.add(entry.target);
            animateSingleCounter(entry.target);
          }
        });
      }, { threshold: 0.4 });

      counters.forEach(function (c) { countObserver.observe(c); });
    }

    function animateSingleCounter(el) {
      var raw = el.textContent.trim();
      var startNum = 0;
      var suffix = '';

      // Extract prefix and suffix
      if (/^\+/.test(raw)) { startNum = 0; suffix = '+'; raw = raw.replace(/^\+/, ''); }
      if (/\+$/.test(raw)) { suffix = '+'; raw = raw.replace(/\+$/, ''); }
      if (/%$/.test(raw)) { suffix = '%'; raw = raw.replace(/%$/, ''); }
      if (/^\d+\+$/.test(raw)) { suffix = '+'; raw = raw.replace(/\+$/, ''); }

      var isPercent = suffix === '%';
      var endNum = parseInt(raw.replace(/[^0-9]/g, ''), 10);
      if (isNaN(endNum) || endNum === 0) return;

      var duration = 1800;
      var start = Date.now();

      var raf = function () {
        var elapsed = Date.now() - start;
        var progress = Math.min(elapsed / duration, 1);
        // easeOutQuart
        progress = 1 - Math.pow(1 - progress, 4);
        var current = Math.floor(progress * endNum);
        if (isPercent) { current = Math.min(current, endNum); }
        el.textContent = suffix + current + (isPercent ? '' : '');
        if (progress < 1) { requestAnimationFrame(raf); }
        else { el.textContent = suffix + endNum + (isPercent ? '' : (raw.includes('+') ? '+' : '')); }
      };
      requestAnimationFrame(raf);
    }

    /* ---- 5. HERO CARDS FLOAT ON SCROLL (parallax subtle) ---- */
    if (window.innerWidth >= 992) {
      var floatingCards = document.querySelectorAll('.hero-card-floating');
      var hero = document.getElementById('hero');
      if (floatingCards.length && hero) {
        window.addEventListener('scroll', function () {
          var scrolled = window.scrollY;
          floatingCards.forEach(function (card, i) {
            var offset = i % 2 === 0 ? -1 : 1;
            card.style.transform = 'translateY(' + (scrolled * 0.03 * offset) + 'px)';
          });
        });
      }
    }

    /* ---- 6. SECTION LABEL += badge floating ---- */
    var badges = document.querySelectorAll('.badge');
    badges.forEach(function (b) {
      b.classList.add('motion-float');
    });

  }); // DOMContentLoaded
})();
