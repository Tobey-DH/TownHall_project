// Mobile menu toggle
(function() {
  const menuButton = document.getElementById('mobile-menu-toggle');
  const menuNav = document.getElementById('main-navigation');
  
  if (!menuButton || !menuNav) return;
  
  const nav = menuNav.querySelector('.site-nav');
  
  menuButton.addEventListener('click', function() {
    const isExpanded = menuButton.getAttribute('aria-expanded') === 'true';
    
    menuButton.setAttribute('aria-expanded', !isExpanded);
    nav.classList.toggle('active');
  });
  
  // Close menu on escape key
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && menuButton.getAttribute('aria-expanded') === 'true') {
      menuButton.setAttribute('aria-expanded', 'false');
      nav.classList.remove('active');
      menuButton.focus();
    }
  });
  
  // Close menu when clicking outside
  document.addEventListener('click', function(e) {
    if (menuButton.getAttribute('aria-expanded') === 'true' && 
        !menuNav.contains(e.target) && 
        e.target !== menuButton) {
      menuButton.setAttribute('aria-expanded', 'false');
      nav.classList.remove('active');
    }
  });
})();
