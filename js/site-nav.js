// JELISA — Site Navigation
// Dipakai bersama di semua halaman (beranda, produk, tentang, sertifikasi, kontak).
// Logika: (1) bayangan navbar saat scroll, (2) toggle menu mobile (hamburger).

document.addEventListener('DOMContentLoaded', () => {
  const nav = document.getElementById('mainNav');
  if (nav) {
    window.addEventListener('scroll', () => {
      nav.classList.toggle('is-scrolled', window.scrollY > 24);
    }, { passive: true });
  }

  const toggle = document.getElementById('navToggle');
  const mobileMenu = document.getElementById('mobileMenu');

  if (toggle && mobileMenu) {
    toggle.addEventListener('click', () => {
      const expanded = toggle.getAttribute('aria-expanded') === 'true';
      toggle.setAttribute('aria-expanded', String(!expanded));
      mobileMenu.classList.toggle('is-open', !expanded);
    });

    mobileMenu.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', () => {
        toggle.setAttribute('aria-expanded', 'false');
        mobileMenu.classList.remove('is-open');
      });
    });
  }
});
