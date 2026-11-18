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

// Videos que se reproducen solos solo cuando están en pantalla
(function () {
  var vids = document.querySelectorAll('video.autoplay-when-visible');
  if (!vids.length || !('IntersectionObserver' in window)) return;
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    vids.forEach(function (v) { v.setAttribute('controls', ''); });
    return;
  }
  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      var v = e.target;
      if (e.isIntersecting) { var p = v.play(); if (p && p.catch) p.catch(function () { v.setAttribute('controls', ''); }); }
      else v.pause();
    });
  }, { threshold: 0.35 });
  vids.forEach(function (v) { io.observe(v); });
})();

// Subtítulos en español para el video del caso de la distribuidora.
// Se muestran cuando el sitio está en español y se ocultan en inglés
// (los textos del video ya están en inglés).
(function () {
  var SUBS = {
    distribuidora: [
      [0, 3.4, 'Proyecto real · Distribuidora de bebidas\n¿Tu negocio todavía funciona con Excel? Este es el sistema que construí.'],
      [3.4, 7.4, '01 · Dashboard\nUna vista de toda la operación'],
      [7.4, 11.1, '02 · Compras\nCarga de facturas: de 10 a 2 minutos'],
      [11.1, 15.1, '03 · Ventas\nCarga de ventas: de 20 a 5 minutos'],
      [15.1, 18.4, '04 · Stock\nStock por lote, en tiempo real'],
      [18.4, 21.6, '05 · Vencimientos\nAlertas antes de perder mercadería'],
      [21.6, 24.6, '06 · Finanzas\nCuentas corrientes de clientes y caja'],
      [24.6, 27.9, '07 · Auditoría\nQuién modificó cada registro'],
      [27.9, 29.4, '08 · Por dentro\nConstruido en Microsoft Fabric'],
      [29.4, 32.1, '09 · Modelo de datos\nUn solo modelo semántico detrás de cada reporte'],
      [32.1, 35.6, '10 · Power BI\nCosto, venta y margen por empresa'],
      [35.6, 38.5, '11 · Power BI\nMovimientos de stock por lote'],
      [38.5, 41, 'De Excel manual a Microsoft Fabric\nEscríbeme con tu caso y te cuento cómo lo construiría.']
    ]
  };
  var Cue = window.VTTCue || window.TextTrackCue;
  var tracks = [];
  document.querySelectorAll('video[data-subs]').forEach(function (v) {
    var list = SUBS[v.getAttribute('data-subs')];
    if (!list || !Cue || !v.addTextTrack) return;
    var t = v.addTextTrack('subtitles', 'Español', 'es');
    list.forEach(function (c) {
      var cue = new Cue(c[0], c[1], c[2]);
      cue.line = -2;
      t.addCue(cue);
    });
    tracks.push(t);
  });
  if (!tracks.length) return;
  function sync() {
    var mode = /^es/i.test(document.documentElement.lang || 'es') ? 'showing' : 'hidden';
    tracks.forEach(function (t) { t.mode = mode; });
  }
  sync();
  new MutationObserver(sync).observe(document.documentElement, { attributes: true, attributeFilter: ['lang'] });
})();

// Logos oficiales en el stack: si el archivo existe en assets/logos se muestra;
// si no, queda el ícono dibujado.
(function () {
  document.querySelectorAll('.g-logo').forEach(function (img) {
    function ok() { if (img.naturalWidth > 0) img.parentNode.classList.add('has-logo'); }
    if (img.complete) ok(); else img.addEventListener('load', ok);
    img.addEventListener('error', function () { img.remove(); });
  });
})();
