const navToggle = document.querySelector('.nav-toggle');
const mainNav = document.querySelector('.main-nav');

if (navToggle && mainNav) {
  navToggle.addEventListener('click', () => {
    mainNav.classList.toggle('active');
    navToggle.textContent = mainNav.classList.contains('active') ? '✕' : '☰';
  });
}

// Smooth scroll for Explore buttons
const exploreButtons = document.querySelectorAll('.btn-explore');
if (exploreButtons.length) {
  exploreButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      // allow normal behaviour if user holds modifier keys
      if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
      e.preventDefault();
      const href = btn.getAttribute('href') || '#top';
      if (href === '#' || href === '#top') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        const target = document.querySelector(href);
        if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        else window.scrollTo({ top: 0, behavior: 'smooth' });
      }
      // close mobile nav if open
      if (mainNav && mainNav.classList.contains('active')) {
        mainNav.classList.remove('active');
        if (navToggle) navToggle.textContent = '☰';
      }
    });
  });
}

const dropdownToggle = document.querySelector('.dropdown-toggle');
const navDropdown = document.querySelector('.nav-dropdown');
if (dropdownToggle && navDropdown) {
  dropdownToggle.addEventListener('click', (e) => {
    e.preventDefault();
    e.stopPropagation();
    const isOpen = navDropdown.classList.toggle('open');
    dropdownToggle.setAttribute('aria-expanded', String(isOpen));
  });

  document.addEventListener('click', (e) => {
    if (!navDropdown.contains(e.target)) {
      navDropdown.classList.remove('open');
      dropdownToggle.setAttribute('aria-expanded', 'false');
    }
  });
}
