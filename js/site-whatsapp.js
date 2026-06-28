// JELISA — Floating Button WhatsApp
// Dipakai bersama di semua halaman (lewat <script src="site-whatsapp.js">).
// Tombol DIBUAT lewat JS, bukan ditulis manual di tiap file HTML —
// supaya nomor & pesan cukup diedit SEKALI di sini, otomatis berlaku
// di seluruh situs.

(function () {
  // ====== EDIT DI SINI SAJA ======
  const WA_NUMBER = "62881026130704"; // dari 0881026130704 → format internasional, tanpa "+", tanpa spasi/strip
  const WA_MESSAGE = "Halo JELISA, saya tertarik dengan produk Anda. Boleh saya tanya-tanya?";
  const SHOW_AFTER_SCROLL_PX = 200;
  // ================================

  document.addEventListener("DOMContentLoaded", () => {
    const link = document.createElement("a");
    link.id = "waFloat";
    link.className = "wa-float";
    link.href = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(WA_MESSAGE)}`;
    link.target = "_blank";
    link.rel = "noopener";
    link.setAttribute("aria-label", "Chat WhatsApp dengan JELISA");

    link.innerHTML = `
      <span class="wa-float__pulse" aria-hidden="true"></span>
      <svg class="wa-float__icon" viewBox="0 0 32 32" fill="currentColor" aria-hidden="true">
        <path d="M16 3C9 3 3.3 8.7 3.3 15.7c0 2.5.7 4.9 2 7L3 29l6.5-2.2c2 1.1 4.2 1.7 6.5 1.7 7 0 12.7-5.7 12.7-12.7S23 3 16 3zm0 23.1c-2 0-4-.5-5.7-1.6l-.4-.2-4.3 1.4 1.4-4.2-.3-.4c-1.2-1.8-1.8-4-1.8-6.2C4.9 9.6 9.8 4.7 16 4.7s11.1 4.9 11.1 11S22.2 26.1 16 26.1z"/>
        <path d="M21.6 18.5c-.3-.2-1.9-.9-2.2-1-.3-.1-.5-.2-.7.1-.2.3-.8 1-1 1.2-.2.2-.4.2-.7.1-1.8-.9-3-1.6-4.2-3.5-.3-.5.3-.5.8-1.6.1-.2 0-.4-.1-.5-.1-.1-.6-1.6-.9-2.2-.2-.5-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.3-.3.3-1 1-1 2.4 0 1.5 1.1 2.9 1.2 3.1.1.2 2.1 3.3 5.2 4.5 2.6 1 3.1.9 3.6.8.6-.1 1.8-.7 2-1.5.3-.7.3-1.3.2-1.5-.1-.1-.3-.2-.5-.4z"/>
      </svg>
    `;
    document.body.appendChild(link);

    window.addEventListener(
      "scroll",
      () => {
        link.classList.toggle("is-visible", window.scrollY > SHOW_AFTER_SCROLL_PX);
      },
      { passive: true }
    );
  });
})();
