(function () {
  "use strict";

  if (typeof $ === 'undefined') { return; }

  $(function () {

    if (typeof gsap !== 'undefined') {
      gsap.registerPlugin(ScrollTrigger);
    }

    // Loader & Loading Animation
    const loader = document.getElementById("loader");
    const loaderContent = document.getElementById("loaderContent");

    if (!loader || !loaderContent) { return; }

    function hideLoader() {
      if (loaderContent) {
        loaderContent.classList.add("fade-out");
      }
      setTimeout(() => {
        if (loader) {
          loader.classList.add("loaded");
        }
      }, 300);
    }

    if (document.readyState === 'complete') {
      hideLoader();
    } else {
      window.addEventListener('load', hideLoader, { once: true });
    }

    // GSAP animations
    if (typeof gsap !== 'undefined') {
      try {
        if (document.querySelectorAll('.animate-headline').length > 0) {
          gsap.set(".animate-headline", { y: 50, opacity: 0 });
          ScrollTrigger.batch(".animate-headline", {
            interval: 0.1,
            batchMax: 4,
            duration: 6,
            onEnter: batch => gsap.to(batch, {
              opacity: 1,
              y: 0,
              ease: 'sine',
              stagger: { each: 0.15, grid: [1, 4] },
              overwrite: true
            }),
            onLeave: batch => gsap.set(batch, { opacity: 1, y: 0, overwrite: true }),
            onEnterBack: batch => gsap.to(batch, { opacity: 1, y: 0, stagger: 0.15, overwrite: true }),
            onLeaveBack: batch => gsap.set(batch, { opacity: 0, y: 50, overwrite: true })
          });
        }
      } catch (e) {}
    }

    // Vanilla ScrollSpy (replaces Bootstrap ScrollSpy)
    (function() {
      const sections = document.querySelectorAll('section[id]');
      const navLinks = document.querySelectorAll('.menu__link');
      if (sections.length && navLinks.length) {
        const observer = new IntersectionObserver((entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              navLinks.forEach(link => {
                link.classList.remove('active');
                const href = link.getAttribute('href');
                if (href === '#' + entry.target.id) {
                  link.classList.add('active');
                }
              });
            }
          });
        }, { rootMargin: '0px 0px -40%' });
        sections.forEach(section => observer.observe(section));
      }
    })();

    // Parallax
    if (typeof gsap !== 'undefined') {
      try {
        const parallaxElements = document.querySelectorAll("[data-speed]");
        if (parallaxElements.length > 0) {
          gsap.to("[data-speed]", {
            y: (i, el) => (1 - parseFloat(el.getAttribute("data-speed"))) * ScrollTrigger.maxScroll(window),
            ease: "none",
            scrollTrigger: {
              start: 0,
              end: "max",
              invalidateOnRefresh: true,
              scrub: 0
            }
          });
        }
      } catch (e) {}
    }

    // Scroll Animations
    if (typeof gsap !== 'undefined') {
      try {
        const animateInUp = document.querySelectorAll(".animate-in-up");
        animateInUp.forEach((element) => {
          gsap.fromTo(element, {
            opacity: 0,
            y: 50,
            ease: 'sine',
          }, {
            y: 0,
            opacity: 1,
            scrollTrigger: {
              trigger: element,
              toggleActions: 'play none none reverse',
            }
          });
        });
      } catch (e) {}
    }

    // Animation Rotation
    if (typeof gsap !== 'undefined') {
      try {
        const animateRotation = document.querySelectorAll(".animate-rotation");
        animateRotation.forEach((section) => {
          var value = $(section).data("value");
          gsap.fromTo(section, {
            ease: 'sine',
            rotate: 0,
          }, {
            rotate: value,
            scrollTrigger: {
              trigger: section,
              scrub: true,
              toggleActions: 'play none none reverse',
            }
          });
        });
      } catch (e) {}
    }

    // Animation Cards Stack - Grid 2x
    if (typeof gsap !== 'undefined') {
      try {
        if (document.querySelectorAll('.animate-card-2').length > 0) {
          gsap.set(".animate-card-2", { y: 100, opacity: 0 });
          ScrollTrigger.batch(".animate-card-2", {
            interval: 0.1,
            batchMax: 2,
            duration: 6,
            onEnter: batch => gsap.to(batch, {
              opacity: 1,
              y: 0,
              ease: 'sine',
              stagger: { each: 0.15, grid: [1, 2] },
              overwrite: true
            }),
            onLeave: batch => gsap.set(batch, { opacity: 1, y: 0, overwrite: true }),
            onEnterBack: batch => gsap.to(batch, { opacity: 1, y: 0, stagger: 0.15, overwrite: true }),
            onLeaveBack: batch => gsap.set(batch, { opacity: 0, y: 100, overwrite: true })
          });
        }
      } catch (e) {}
    }

    // Grid 3x
    if (typeof gsap !== 'undefined') {
      try {
        if (document.querySelectorAll('.animate-card-3').length > 0) {
          gsap.set(".animate-card-3", { y: 50, opacity: 0 });
          ScrollTrigger.batch(".animate-card-3", {
            interval: 0.1,
            batchMax: 3,
            duration: 3,
            onEnter: batch => gsap.to(batch, {
              opacity: 1,
              y: 0,
              ease: 'sine',
              stagger: { each: 0.15, grid: [1, 3] },
              overwrite: true
            }),
            onLeave: batch => gsap.set(batch, { opacity: 1, y: 0, overwrite: true }),
            onEnterBack: batch => gsap.to(batch, { opacity: 1, y: 0, stagger: 0.15, overwrite: true }),
            onLeaveBack: batch => gsap.set(batch, { opacity: 0, y: 50, overwrite: true })
          });
        }
      } catch (e) {}
    }

    // Grid 5x
    if (typeof gsap !== 'undefined') {
      try {
        if (document.querySelectorAll('.animate-card-5').length > 0) {
          gsap.set(".animate-card-5", { y: 50, opacity: 0 });
          ScrollTrigger.batch(".animate-card-5", {
            interval: 0.1,
            batchMax: 5,
            delay: 1000,
            onEnter: batch => gsap.to(batch, {
              opacity: 1,
              y: 0,
              ease: 'sine',
              stagger: { each: 0.15, grid: [1, 5] },
              overwrite: true
            }),
            onLeave: batch => gsap.set(batch, { opacity: 1, y: 0, overwrite: true }),
            onEnterBack: batch => gsap.to(batch, { opacity: 1, y: 0, stagger: 0.15, overwrite: true }),
            onLeaveBack: batch => gsap.set(batch, { opacity: 0, y: 50, overwrite: true })
          });
        }
      } catch (e) {}
    }

    if (typeof gsap !== 'undefined') {
      try {
        if (document.querySelectorAll('.animate-card-2').length > 0) {
          ScrollTrigger.addEventListener("refreshInit", () => gsap.set(".animate-card-2", { y: 0, opacity: 1 }));
        }
        if (document.querySelectorAll('.animate-card-3').length > 0) {
          ScrollTrigger.addEventListener("refreshInit", () => gsap.set(".animate-card-3", { y: 0, opacity: 1 }));
        }
        if (document.querySelectorAll('.animate-card-5').length > 0) {
          ScrollTrigger.addEventListener("refreshInit", () => gsap.set(".animate-card-5", { y: 0, opacity: 1 }));
        }
      } catch (e) {}
    }

    // Smooth Scrolling
    $('a[href*="#"]').not('[href="#"]').not('[href="#0"]').click(function (event) {
      if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        if (target.length) {
          event.preventDefault();
          $('html, body').animate({
            scrollTop: target.offset().top
          }, 1000, function () {
            var $target = $(target);
            $target.focus();
            if ($target.is(":focus")) {
              return false;
            } else {
              $target.attr('tabindex', '-1');
              $target.focus();
            }
          });
        }
      }
    });

    // Images Moving Ban
    $("img, a").on("dragstart", function (event) { event.preventDefault(); });

    // Detecting Mobile/Desktop
    var isMobile = false;
    if (/Android|webOS|iPhone|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
      $('html').addClass('touch');
      isMobile = true;
    }
    else {
      $('html').addClass('no-touch');
      isMobile = false;
    }
    var isIE = /MSIE 9/i.test(navigator.userAgent) || /rv:11.0/i.test(navigator.userAgent) || /MSIE 10/i.test(navigator.userAgent) || /Edge\/\d+/.test(navigator.userAgent);

    // PhotoSwipe Gallery Images Replace
    $('.gallery__link').each(function () {
      $(this)
        .append('<div class="picture"></div>')
        .children('.picture').css({ 'background-image': 'url(' + $(this).attr('data-image') + ')' });
    });

  });

  // Color Switch
  const themeBtn = document.querySelector('.color-switcher');

  function getCurrentTheme() {
    let theme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    localStorage.getItem('template.theme') ? theme = localStorage.getItem('template.theme') : null;
    return theme;
  }

  function loadTheme(theme) {
    const root = document.querySelector(':root');
    if (theme === "light") {
      if (themeBtn) themeBtn.innerHTML = `<em></em><i class="ph-bold ph-moon-stars"></i>`;
    } else {
      if (themeBtn) themeBtn.innerHTML = `<em></em><i class="ph-bold ph-sun"></i>`;
    }
    if (root) root.setAttribute('color-scheme', `${theme}`);
  };

  if (themeBtn) {
    themeBtn.addEventListener('click', () => {
      let theme = getCurrentTheme();
      if (theme === 'dark') {
        theme = 'light';
      } else {
        theme = 'dark';
      }
      localStorage.setItem('template.theme', `${theme}`);
      loadTheme(theme);
    });
  }

  window.addEventListener('DOMContentLoaded', () => {
    loadTheme(getCurrentTheme());
  });

  // Share Modal
  const shareModal = document.getElementById('share-modal');
  const shareTrigger = document.getElementById('share-trigger');
  const shareModalClose = document.getElementById('share-modal-close');
  const copyLinkBtn = document.getElementById('copy-link-btn');

  function showShareModal() {
    if (shareModal) {
      shareModal.classList.add('show');
      document.body.style.overflow = 'hidden';
    }
  }

  function hideShareModal() {
    if (shareModal) {
      shareModal.classList.remove('show');
      document.body.style.overflow = '';
    }
  }

  function copyToClipboard(text) {
    if (navigator.clipboard && window.isSecureContext) {
      return navigator.clipboard.writeText(text).then(() => {
        return true;
      }).catch(() => {
        return fallbackCopyTextToClipboard(text);
      });
    } else {
      return fallbackCopyTextToClipboard(text);
    }
  }

  function fallbackCopyTextToClipboard(text) {
    const textArea = document.createElement("textarea");
    textArea.value = text;
    textArea.style.top = "0";
    textArea.style.left = "0";
    textArea.style.position = "fixed";
    textArea.style.opacity = "0";
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();
    try {
      const successful = document.execCommand('copy');
      document.body.removeChild(textArea);
      return successful;
    } catch (err) {
      document.body.removeChild(textArea);
      return false;
    }
  }

  if (shareTrigger) {
    shareTrigger.addEventListener('click', showShareModal);
  }

  if (shareModalClose) {
    shareModalClose.addEventListener('click', hideShareModal);
  }

  if (shareModal) {
    const overlay = shareModal.querySelector('.share-modal__overlay');
    if (overlay) {
      overlay.addEventListener('click', hideShareModal);
    }
  }

  if (copyLinkBtn) {
    copyLinkBtn.addEventListener('click', async () => {
      const url = 'https://nekwasar.com';
      const success = await copyToClipboard(url);
      if (success) {
        const originalText = copyLinkBtn.innerHTML;
        copyLinkBtn.innerHTML = '<span class="btn-caption">Copied!</span><i class="ph-bold ph-check"></i>';
        copyLinkBtn.style.background = 'linear-gradient(135deg, #28a745, #20c997)';
        setTimeout(() => {
          copyLinkBtn.innerHTML = originalText;
          copyLinkBtn.style.background = '';
        }, 2000);
      } else {
        const originalText = copyLinkBtn.innerHTML;
        copyLinkBtn.innerHTML = '<span class="btn-caption">Failed to copy</span><i class="ph-bold ph-x"></i>';
        copyLinkBtn.style.background = 'linear-gradient(135deg, #dc3545, #fd7e14)';
        setTimeout(() => {
          copyLinkBtn.innerHTML = originalText;
          copyLinkBtn.style.background = '';
        }, 2000);
      }
    });
  }

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && shareModal && shareModal.classList.contains('show')) {
      hideShareModal();
    }
  });

})();

// Service Worker Registration
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js')
      .then(registration => {})
      .catch(() => {});
  });
}
