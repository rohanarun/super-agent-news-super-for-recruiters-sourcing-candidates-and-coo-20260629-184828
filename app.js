(function () {
  // GSAP guarded animations
  function initAnimations() {
    if (!window.gsap) return;
    gsap.from('.hero h1', { opacity: 0, y: 40, duration: 1 });
    gsap.from('.tile', { opacity: 0, y: 20, stagger: 0.1, duration: 0.6, delay: 0.4 });
  }

  // Load GSAP safely
  var script = document.createElement('script');
  script.src = 'https://cdn.jsdelivr.net/npm/gsap@3.12.5/dist/gsap.min.js';
  script.onload = initAnimations;
  script.onerror = function () { /* animations optional */ };
  document.head.appendChild(script);
})();