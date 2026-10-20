/* CEMPA STUDIOS */

(function () {
  'use strict';

  // Menú móvil
  const menuToggle = document.getElementById('menu-toggle');
  const nav = document.getElementById('nav');

  if (menuToggle && nav) {
    menuToggle.addEventListener('click', () => {
      const open = nav.classList.toggle('open');
      menuToggle.classList.toggle('active', open);
      menuToggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
    nav.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', () => {
        nav.classList.remove('open');
        menuToggle.classList.remove('active');
        menuToggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // Navegación activa: se actualiza al desplazarse y al elegir una sección.
  const navLinks = nav ? Array.from(nav.querySelectorAll('a[href^="#"]')) : [];
  const trackedSections = navLinks.map(link => document.querySelector(link.getAttribute('href'))).filter(Boolean);
  function updateActiveNavigation() {
    if (!trackedSections.length) return;
    // Marcar la sección que ocupa el centro del área visible, no la que acaba de salir.
    // El encabezado fijo no participa del punto de referencia.
    const headerHeight = document.getElementById('header')?.offsetHeight || 72;
    const viewportPoint = headerHeight + Math.max(0, window.innerHeight - headerHeight) * 0.48;
    let activeSection = trackedSections[0];
    let closestDistance = Infinity;
    trackedSections.forEach(section => {
      const rect = section.getBoundingClientRect();
      if (rect.top <= viewportPoint && rect.bottom > viewportPoint) {
        activeSection = section;
        closestDistance = 0;
      } else if (closestDistance !== 0) {
        const distance = Math.min(Math.abs(rect.top - viewportPoint), Math.abs(rect.bottom - viewportPoint));
        if (distance < closestDistance) {
          closestDistance = distance;
          activeSection = section;
        }
      }
    });
    if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 8) {
      activeSection = trackedSections[trackedSections.length - 1];
    }
    navLinks.forEach(link => {
      const active = link.getAttribute('href') === '#' + activeSection.id;
      link.classList.toggle('is-active', active);
      if (active) link.setAttribute('aria-current', 'location');
      else link.removeAttribute('aria-current');
    });
  }
  let navFramePending = false;
  window.addEventListener('scroll', () => {
    if (navFramePending) return;
    navFramePending = true;
    requestAnimationFrame(() => {
      updateActiveNavigation();
      navFramePending = false;
    });
  }, { passive: true });
  window.addEventListener('resize', updateActiveNavigation, { passive: true });
  window.addEventListener('load', updateActiveNavigation);
  navLinks.forEach(link => link.addEventListener('click', () => {
    navLinks.forEach(item => {
      item.classList.remove('is-active');
      item.removeAttribute('aria-current');
    });
    link.classList.add('is-active');
    link.setAttribute('aria-current', 'location');
  }));
  updateActiveNavigation();

  // Cerrar el menú móvil con Escape o al hacer clic fuera.
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && nav?.classList.contains('open') && (projectView?.hidden ?? true)) {
      nav.classList.remove('open');
      menuToggle?.classList.remove('active');
      menuToggle?.setAttribute('aria-expanded', 'false');
      menuToggle?.focus();
    }
  });

  // Modo oscuro
  const themeToggle = document.getElementById('theme-toggle');
  let savedTheme = null;
  try { savedTheme = localStorage.getItem('theme'); } catch (_err) {}
  if (savedTheme === 'dark') {
    document.body.classList.add('dark-mode');
    if (themeToggle) themeToggle.textContent = '☀️';
  }
  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      document.body.classList.toggle('dark-mode');
      const isDark = document.body.classList.contains('dark-mode');
      try { localStorage.setItem('theme', isDark ? 'dark' : 'light'); } catch (_err) {}
      themeToggle.textContent = isDark ? '☀️' : '🌙';
    });
  }

  // Entrada discreta de secciones, sin ocultar contenido si JS no está disponible.
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  if ('IntersectionObserver' in window && !reducedMotion.matches) {
    const revealTargets = document.querySelectorAll(
      '.nosotros-content, .nosotros-visual, .servicios-header, .servicio-card, ' +
      '.portafolio-header, .proyecto-card, .cta-inner'
    );
    const revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.08, rootMargin: '0px 0px 35px 0px' });
    revealTargets.forEach((element) => {
      // Los elementos ya visibles se dejan visibles desde el principio.
      if (element.getBoundingClientRect().top < window.innerHeight) return;
      element.classList.add('reveal-item');
      revealObserver.observe(element);
    });
    document.documentElement.classList.add('enhanced-motion');
  }

  // Vista detalle de proyecto
  const cards = Array.from(document.querySelectorAll('.proyecto-card'));
  const projectView = document.getElementById('project-view');
  const pvBack = document.getElementById('pv-back');
  const pvPrev = document.getElementById('pv-prev');
  const pvNext = document.getElementById('pv-next');
  const pvCounter = document.getElementById('pv-counter');
  const pvImg = document.getElementById('pv-img');
  const pvThumbs = document.getElementById('pv-thumbs');
  const pvCat = document.getElementById('pv-cat');
  const pvTitle = document.getElementById('pv-title');
  const pvSubtitle = document.getElementById('pv-subtitle');
  const pvDesc = document.getElementById('pv-desc');
  const pvConcepto = document.getElementById('pv-concepto');
  const pvTools = document.getElementById('pv-tools');
  const pvDisciplinas = document.getElementById('pv-disciplinas');
  const pvDemo = document.getElementById('pv-demo');
  const pvDownload = document.getElementById('pv-download');
  const pvProjectNote = document.getElementById('pv-project-note');
  const pvDisclaimer = document.getElementById('pv-disclaimer');
  const pvGalleryNote = document.getElementById('pv-gallery-note');
  const pvGalleryNoteTitle = document.getElementById('pv-gallery-note-title');
  const pvGalleryNoteText = document.getElementById('pv-gallery-note-text');

  let currentIndex = 0;
  let previousFocus = null;

  function pad(n) {
    return String(n).padStart(2, '0');
  }

  function openProject(index) {
    if (projectView && projectView.hidden) previousFocus = document.activeElement;
    currentIndex = index;
    const card = cards[index];
    if (!card || !projectView) return;

    const total = cards.length;
    pvCounter.textContent = (window.CempaI18n?.getLanguage() === 'en' ? 'Project ' : 'Proyecto ') + pad(index + 1) + ' / ' + pad(total);

    pvCat.textContent = window.CempaI18n ? window.CempaI18n.translate(card.dataset.cat || '') : card.dataset.cat || '';
    pvTitle.textContent = window.CempaI18n ? window.CempaI18n.translate(card.dataset.title || '') : card.dataset.title || '';
    pvSubtitle.textContent = window.CempaI18n ? window.CempaI18n.translate(card.dataset.subtitle || '') : card.dataset.subtitle || '';
    pvDesc.textContent = window.CempaI18n ? window.CempaI18n.translate(card.dataset.desc || '') : card.dataset.desc || '';
    pvConcepto.textContent = window.CempaI18n ? window.CempaI18n.translate(card.dataset.concepto || '') : card.dataset.concepto || '';
    const featuresBlock = document.getElementById('pv-features-block');
    const featuresList = document.getElementById('pv-features');
    const featuresTitle = document.getElementById('pv-features-title');
    const featuresNote = document.getElementById('pv-features-note');
    const features = (card.dataset.features || '').split('|').map(item => item.trim()).filter(Boolean);
    if (featuresBlock && featuresList) {
      featuresBlock.hidden = !features.length;
      featuresList.replaceChildren();
      features.forEach(feature => {
        const item = document.createElement('li');
        item.textContent = window.CempaI18n ? window.CempaI18n.translate(feature) : feature;
        featuresList.appendChild(item);
      });
      const english = window.CempaI18n?.getLanguage() === 'en';
      if (featuresTitle) featuresTitle.textContent = english ? 'Original system features' : 'Funciones del sistema original';
      if (featuresNote) featuresNote.textContent = english
        ? 'The demo does not include admin access, publishing, or live-data indicators.'
        : 'La demostración no incluye acceso administrativo, publicación de noticias ni indicadores conectados a servicios en tiempo real.';
    }
    if (pvDemo) pvDemo.href = card.dataset.demo || '#portafolio';
    if (pvDownload) {
      const path = card.dataset.download || '';
      pvDownload.hidden = !path;
      if (path) pvDownload.href = path;
    }
    if (pvProjectNote) {
      const note = card.dataset.projectnote || '';
      pvProjectNote.hidden = !note;
      pvProjectNote.textContent = window.CempaI18n ? window.CempaI18n.translate(note) : note;
    }
    if (pvDisclaimer) pvDisclaimer.hidden = Boolean(card.dataset.projectnote);

    const galleryTitle = card.dataset.gallerytitle || '';
    const galleryNote = card.dataset.gallerynote || '';
    if (pvGalleryNote && pvGalleryNoteText && pvGalleryNoteTitle) {
      const hasNote = Boolean(galleryNote.trim());
      pvGalleryNote.hidden = !hasNote;
      if (hasNote) {
        pvGalleryNoteTitle.textContent = window.CempaI18n ? window.CempaI18n.translate(galleryTitle || 'Lo que muestra esta demostración') : (galleryTitle || 'Lo que muestra esta demostración');
        pvGalleryNoteText.textContent = window.CempaI18n ? window.CempaI18n.translate(galleryNote) : galleryNote;
      } else {
        pvGalleryNoteTitle.textContent = '';
        pvGalleryNoteText.textContent = '';
      }
    }

    // Imagen principal
    const mainImg = card.dataset.img || '';
    pvImg.src = mainImg;
    pvImg.alt = card.dataset.title || '';

    // Thumbs
    const thumbs = (card.dataset.thumbs || mainImg).split(',').map((s) => s.trim()).filter(Boolean);
    pvThumbs.innerHTML = '';
    thumbs.forEach((src, i) => {
      const btn = document.createElement('button');
      btn.type = 'button';
      if (i === 0) btn.classList.add('active');
      const thumbnail = document.createElement('img');
      thumbnail.src = src;
      const english = window.CempaI18n?.getLanguage() === 'en';
      thumbnail.alt = english ? 'Project image ' + (i + 1) : 'Imagen ' + (i + 1) + ' del proyecto';
      btn.setAttribute('aria-label', (english ? 'View image ' : 'Ver imagen ') + (i + 1));
      btn.appendChild(thumbnail);
      btn.addEventListener('click', () => {
        pvImg.src = src;
        pvThumbs.querySelectorAll('button').forEach((b) => b.classList.remove('active'));
        btn.classList.add('active');
      });
      pvThumbs.appendChild(btn);
    });

    // Herramientas
    pvTools.innerHTML = '';
    (card.dataset.tools || '').split(',').map((s) => s.trim()).filter(Boolean).forEach((tool) => {
      const el = document.createElement('span');
      el.className = 'pv-tool';
      el.textContent = tool;
      pvTools.appendChild(el);
    });

    // Disciplinas
    pvDisciplinas.innerHTML = '';
    (card.dataset.disciplinas || '').split(',').map((s) => s.trim()).filter(Boolean).forEach((d) => {
      const el = document.createElement('span');
      el.className = 'pv-tag';
      el.textContent = window.CempaI18n ? window.CempaI18n.translate(d) : d;
      pvDisciplinas.appendChild(el);
    });

    projectView.hidden = false;
    if (window.CempaI18n) window.CempaI18n.refresh();
    document.body.style.overflow = 'hidden';
    document.querySelector('main')?.setAttribute('inert', '');
    document.getElementById('header')?.setAttribute('inert', '');
    document.querySelector('footer')?.setAttribute('inert', '');
    pvBack.focus();
  }

  function closeProject() {
    projectView.hidden = true;
    document.body.style.overflow = '';
    document.querySelector('main')?.removeAttribute('inert');
    document.getElementById('header')?.removeAttribute('inert');
    document.querySelector('footer')?.removeAttribute('inert');
    if (previousFocus && previousFocus.isConnected) previousFocus.focus();
    previousFocus = null;
  }

  cards.forEach((card, i) => {
    card.addEventListener('click', () => openProject(i));
    card.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        openProject(i);
      }
    });
  });

  if (pvBack) pvBack.addEventListener('click', closeProject);

  if (pvPrev) {
    pvPrev.addEventListener('click', () => {
      const next = (currentIndex - 1 + cards.length) % cards.length;
      openProject(next);
    });
  }

  if (pvNext) {
    pvNext.addEventListener('click', () => {
      const next = (currentIndex + 1) % cards.length;
      openProject(next);
    });
  }

  document.addEventListener('keydown', (e) => {
    if (projectView && !projectView.hidden) {
      if (e.key === 'Escape') closeProject();
      if (e.key === 'ArrowLeft' && !e.altKey && !e.ctrlKey && !e.metaKey) pvPrev && pvPrev.click();
      if (e.key === 'ArrowRight' && !e.altKey && !e.ctrlKey && !e.metaKey) pvNext && pvNext.click();
      if (e.key === 'Tab') {
        const focusable = Array.from(projectView.querySelectorAll('button:not([disabled]), a[href], [tabindex]:not([tabindex="-1"])')).filter(el => el.getClientRects().length);
        if (focusable.length) {
          const first = focusable[0];
          const last = focusable[focusable.length - 1];
          if (!projectView.contains(document.activeElement)) { e.preventDefault(); first.focus(); }
          else if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
          else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
        }
      }
    }
  });
})();
