(function() {
  const toggle = document.querySelector('.nav-toggle');
  const nav = document.querySelector('.site-nav');
  const year = document.getElementById('year');
  if (year) year.textContent = new Date().getFullYear();

  if (toggle && nav) {
    toggle.addEventListener('click', function() {
      const opened = nav.classList.toggle('open');
      toggle.setAttribute('aria-expanded', opened ? 'true' : 'false');
    });
  }

  // Active nav highlighting
  const links = document.querySelectorAll('.site-nav a');
  const path = location.pathname.split('/').pop() || 'index.html';
  links.forEach(function(a) {
    const href = a.getAttribute('href');
    if (href === path) {
      a.classList.add('active');
    }
  });
})();


