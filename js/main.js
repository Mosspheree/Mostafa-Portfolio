/* ── main.js — init, scroll reveal, typing effect, clock, nav, back-to-top ── */

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

  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

  // Nav shrink on scroll
  const navbar = document.getElementById('navbar');
  const backToTop = document.getElementById('back-to-top');

  window.addEventListener('scroll', () => {
    const scrolled = window.scrollY > 60;
    navbar.classList.toggle('scrolled', scrolled);

    // Back to top visibility
    if (backToTop) {
      backToTop.classList.toggle('visible', window.scrollY > 400);
    }
  });

  // Back to top click
  if (backToTop) {
    backToTop.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // Hamburger menu
  const hamburger = document.getElementById('nav-hamburger');
  const navLinks = document.getElementById('nav-links');

  if (hamburger && navLinks) {
    hamburger.addEventListener('click', () => {
      const isOpen = hamburger.classList.toggle('open');
      navLinks.classList.toggle('open');
      hamburger.setAttribute('aria-expanded', isOpen);
      document.body.style.overflow = isOpen ? 'hidden' : '';
    });

    // Close menu when a link is clicked
    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        hamburger.classList.remove('open');
        navLinks.classList.remove('open');
        hamburger.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
      });
    });
  }

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

  // Keyboard support for project cards
  document.querySelectorAll('.project-card[tabindex="0"]').forEach(card => {
    card.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        card.click();
      }
    });
  });

});
