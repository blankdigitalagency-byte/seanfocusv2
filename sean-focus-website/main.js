document.addEventListener('DOMContentLoaded', () => {

  // --- Mobile Nav Hamburger ---
  const hamburger = document.querySelector('.hamburger');
  const navLinks = document.querySelector('.nav-links');
  
  if (hamburger) {
    hamburger.addEventListener('click', () => {
      navLinks.classList.toggle('nav-active');
      hamburger.classList.toggle('toggle');
    });
  }

  // --- Nav Scroll Effect ---
  const nav = document.querySelector('nav');
  if (nav) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 50) {
        nav.classList.add('scrolled');
      } else {
        nav.classList.remove('scrolled');
      }
    });
  }

  // --- Intersection Observer for Fade-Ups ---
  const fadeElements = document.querySelectorAll('.fade-up');
  
  const fadeOptions = {
    root: null,
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px"
  };

  const fadeObserver = new IntersectionObserver(function(entries, observer) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, fadeOptions);

  fadeElements.forEach(el => fadeObserver.observe(el));

  // --- Starfield Generation ---
  const starfield = document.querySelector('.starfield');
  if (starfield) {
    for (let i = 0; i < 50; i++) {
      const star = document.createElement('div');
      star.classList.add('star');
      star.style.left = `${Math.random() * 100}%`;
      star.style.top = `${Math.random() * 100}%`;
      const size = Math.random() * 3 + 1;
      star.style.width = `${size}px`;
      star.style.height = `${size}px`;
      star.style.setProperty('--duration', `${Math.random() * 3 + 1}s`);
      starfield.appendChild(star);
    }
  }

  // --- Flight Animation Sequence (Home Page) ---
  const pathLine = document.querySelector('.path-line');
  const pulseDots = document.querySelectorAll('.pulse-dot');
  const planeIcon = document.querySelector('.plane-icon');
  const flightMessage = document.querySelector('.flight-message');

  if (pathLine) {
    // Small timeout to allow render
    setTimeout(() => {
      pathLine.classList.add('animate');
      pulseDots.forEach(dot => dot.classList.add('animate'));
      if(planeIcon) planeIcon.classList.add('animate');
      
      // Message fades in after animation completes
      setTimeout(() => {
        if(flightMessage) flightMessage.classList.add('visible');
      }, 3000);
    }, 500);
  }
});
