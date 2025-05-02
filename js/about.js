/**
 * About Page Interactions
 * - Timeline animations
 * - Team member hover effects
 */

import { debounce } from './main.js';

document.addEventListener('DOMContentLoaded', () => {
  // Animate timeline items on scroll
  const timelineItems = document.querySelectorAll('.timeline-item');
  
  const animateTimeline = debounce(() => {
    const triggerBottom = window.innerHeight * 0.8;
    
    timelineItems.forEach(item => {
      const itemTop = item.getBoundingClientRect().top;
      if (itemTop < triggerBottom) {
        item.classList.add('animate');
      }
    });
  });

  // Initial check + scroll event
  animateTimeline();
  window.addEventListener('scroll', animateTimeline);

  // Team member hover cards
  const teamMembers = document.querySelectorAll('.team-member');
  teamMembers.forEach(member => {
    member.addEventListener('mouseenter', () => {
      member.querySelector('img').style.transform = 'scale(1.05)';
    });
    member.addEventListener('mouseleave', () => {
      member.querySelector('img').style.transform = 'scale(1)';
    });
  });
});