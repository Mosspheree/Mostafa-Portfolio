/* ── main.js — init, scroll reveal, typing effect, clock ── */

document.addEventListener('DOMContentLoaded', () => {

  // Render all sections from data
  renderAll();

  // Scroll reveal observer
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        setTimeout(() => entry.target.classList.add('visible'), i * 80);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  // Observe all .reveal elements (including dynamically rendered ones)
  const observeAll = () => {
    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
  };
  observeAll();

  // Re-observe after a short delay to catch dynamically rendered items
  setTimeout(observeAll, 100);

  // Nav shrink on scroll
  const navbar = document.getElementById('navbar');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 60) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });

  // Typing effect for hero tag
  const tag = document.querySelector('.hero-tag');
  if (tag) {
    const text = tag.textContent.trim();
    tag.textContent = '';
    let i = 0;
    const type = () => {
      if (i < text.length) {
        tag.textContent = text.slice(0, ++i);
        setTimeout(type, 40);
      }
    };
    setTimeout(type, 800);
  }

  // Live clock in hero coords
  const coords = document.getElementById('hero-coords');
  const updateClock = () => {
    if (!coords) return;
    const now = new Date();
    const time = now.toLocaleTimeString('en-US', {
      hour12: false,
      timeZone: 'America/New_York',
    });
    coords.innerHTML = `38.9072° N, 77.0369° W<br>WASHINGTON, DC<br>${time} EST`;
  };
  updateClock();
  setInterval(updateClock, 1000);

  // Smooth scroll for nav links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
      const target = document.querySelector(anchor.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

});
