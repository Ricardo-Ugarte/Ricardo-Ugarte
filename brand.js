// Efectos de la marca: barra de progreso, nav al hacer scroll,
// aparición escalonada, foco de luz e inclinación 3D en tarjetas.
(function () {
  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var fine = window.matchMedia('(hover: hover) and (pointer: fine)').matches;

  // Barra de progreso + estado del nav
  var bar = document.querySelector('.scroll-progress');
  var nav = document.querySelector('nav.site-nav');
  var ticking = false;
  function onScroll() {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(function () {
      var doc = document.documentElement;
      var max = doc.scrollHeight - window.innerHeight;
      if (bar) bar.style.transform = 'scaleX(' + (max > 0 ? window.scrollY / max : 0) + ')';
      if (nav) nav.classList.toggle('is-scrolled', window.scrollY > 24);
      ticking = false;
    });
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  // Escalonado: cada tarjeta de una grilla entra un poco después que la anterior
  document.querySelectorAll('[data-stagger]').forEach(function (grid) {
    Array.prototype.forEach.call(grid.children, function (el, i) {
      el.style.setProperty('--stagger', (i % 3) * 110 + 'ms');
    });
  });

  // Tarjetas de las páginas internas: mismo foco de luz, sin inclinación
  var spots = document.querySelectorAll('.project-card, .contact-card, .article-card, .cert-card');
  spots.forEach(function (el) { el.classList.add('g-spot'); });
  if (fine && !reduce) {
    spots.forEach(function (el) {
      el.addEventListener('pointermove', function (e) {
        var r = el.getBoundingClientRect();
        el.style.setProperty('--mx', (e.clientX - r.left) + 'px');
        el.style.setProperty('--my', (e.clientY - r.top) + 'px');
      });
    });
  }

  // Foco de luz que sigue al cursor + inclinación 3D
  if (fine && !reduce) {
    document.querySelectorAll('.g-card').forEach(function (card) {
      card.addEventListener('pointermove', function (e) {
        var r = card.getBoundingClientRect();
        var x = e.clientX - r.left, y = e.clientY - r.top;
        card.style.setProperty('--mx', x + 'px');
        card.style.setProperty('--my', y + 'px');
        var rx = ((y / r.height) - 0.5) * -5;
        var ry = ((x / r.width) - 0.5) * 5;
        card.style.transform = 'perspective(900px) rotateX(' + rx + 'deg) rotateY(' + ry + 'deg) translateY(-4px)';
      });
      card.addEventListener('pointerleave', function () { card.style.transform = ''; });
    });
  }
})();
