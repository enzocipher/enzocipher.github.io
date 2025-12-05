document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.nav-links');

  if (!toggle || !nav) return;

  const closeMenu = () => {
    nav.classList.remove('active');
    document.body.classList.remove('no-scroll');
  };

  toggle.addEventListener('click', () => {
    nav.classList.toggle('active');
    document.body.classList.toggle('no-scroll', nav.classList.contains('active'));
  });

  // Cierra al tocar un enlace
  nav.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', closeMenu);
  });

  // Cierra si se vuelve a desktop
  window.addEventListener('resize', () => {
    if (window.innerWidth > 900) closeMenu();
  });
});


