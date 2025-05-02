/**
 * Reusable Animation Helpers
 * - Scroll-triggered animations
 * - Micro-interactions
 */

import { debounce } from './main.js';

// Scroll-triggered fade/scale animations
function initScrollAnimations() {
  const animatedElements = document.querySelectorAll('[data-animate]');

  const checkAnimation = debounce(() => {
    const triggerPoint = window.innerHeight * 0.75;

    animatedElements.forEach(el => {
      const elTop = el.getBoundingClientRect().top;
      if (elTop < triggerPoint) {
        el.classList.add('animated');
      }
    });
  });

  // Initial check + scroll listener
  checkAnimation();
  window.addEventListener('scroll', checkAnimation);
}

// Hover animations for buttons/cards
function initHoverEffects() {
  document.querySelectorAll('.btn, .card').forEach(el => {
    el.addEventListener('mouseenter', () => {
      el.style.transform = 'translateY(-3px)';
      el.style.boxShadow = '0 10px 20px rgba(0,0,0,0.1)';
    });
    el.addEventListener('mouseleave', () => {
      el.style.transform = '';
      el.style.boxShadow = '';
    });
  });
}

// Initialize all animations
document.addEventListener('DOMContentLoaded', () => {
  initScrollAnimations();
  initHoverEffects();
});