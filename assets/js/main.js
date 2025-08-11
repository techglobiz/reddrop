// main.js
// Add any interactivity or animations here

document.addEventListener('DOMContentLoaded', function () {
  // Example: Glassmorphism header scroll effect
  const header = document.querySelector('header');
  window.addEventListener('scroll', function () {
    if (window.scrollY > 10) {
      header.classList.add('backdrop-blur-md', 'bg-opacity-80');
    } else {
      header.classList.remove('backdrop-blur-md', 'bg-opacity-80');
    }
  });

  // Mobile menu toggle
  const menuBtn = document.getElementById('menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  if (menuBtn && mobileMenu) {
    menuBtn.addEventListener('click', function () {
      mobileMenu.classList.toggle('hidden');
    });
    // Optional: close menu when a link is clicked
    mobileMenu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', function () {
        mobileMenu.classList.add('hidden');
      });
    });
  }
});
