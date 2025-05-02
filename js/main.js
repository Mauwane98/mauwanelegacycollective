/**
 * Core functionality for Mauwane Legacy Collective website
 * - Mobile navigation
 * - Global event listeners
 * - Helper functions
 */

/// Mobile Navigation
document.addEventListener('DOMContentLoaded', () => {
    const mobileNavToggle = document.querySelector('.mobile-nav-toggle');
    const navMenu = document.querySelector('.nav-menu');
    const dropdownToggles = document.querySelectorAll('.dropdown-toggle');
  
    // Mobile menu toggle
    mobileNavToggle?.addEventListener('click', () => {
      const isVisible = navMenu.getAttribute('data-visible') === 'true';
      navMenu.setAttribute('data-visible', !isVisible);
      mobileNavToggle.setAttribute('aria-expanded', !isVisible);
    });
  
    // Mobile dropdown toggle
    dropdownToggles.forEach(toggle => {
      toggle.addEventListener('click', (e) => {
        if (window.innerWidth <= 768) {
          e.preventDefault();
          const dropdown = toggle.nextElementSibling;
          const isExpanded = toggle.getAttribute('aria-expanded') === 'true';
          
          toggle.setAttribute('aria-expanded', !isExpanded);
          dropdown.setAttribute('aria-hidden', isExpanded);
        }
      });
    });
  
    // Close mobile menu when clicking a link
    document.querySelectorAll('.nav-menu a').forEach(link => {
      link.addEventListener('click', () => {
        if (window.innerWidth <= 768) {
          navMenu.setAttribute('data-visible', 'false');
          mobileNavToggle.setAttribute('aria-expanded', 'false');
        }
      });
    });
  });

document.addEventListener('DOMContentLoaded', () => {
    // Mobile Navigation Toggle
    const mobileNavToggle = document.querySelector('.mobile-nav-toggle');
    const primaryNav = document.querySelector('.primary-navigation');
  
    mobileNavToggle?.addEventListener('click', () => {
      const isVisible = primaryNav.getAttribute('data-visible') === 'true';
      primaryNav.setAttribute('data-visible', !isVisible);
      mobileNavToggle.setAttribute('aria-expanded', !isVisible);
      document.body.classList.toggle('nav-open', !isVisible);
    });
  
    // Dropdown Menus
    document.querySelectorAll('.dropdown-toggle').forEach(toggle => {
      toggle.addEventListener('click', (e) => {
        e.preventDefault();
        const dropdown = toggle.nextElementSibling;
        const isExpanded = toggle.getAttribute('aria-expanded') === 'true';
        
        toggle.setAttribute('aria-expanded', !isExpanded);
        dropdown.setAttribute('aria-hidden', isExpanded);
      });
    });
  
    // Close dropdowns when clicking outside
    document.addEventListener('click', (e) => {
      if (!e.target.closest('.dropdown')) {
        document.querySelectorAll('.dropdown-menu').forEach(menu => {
          menu.setAttribute('aria-hidden', 'true');
        });
        document.querySelectorAll('.dropdown-toggle').forEach(toggle => {
          toggle.setAttribute('aria-expanded', 'false');
        });
      }
    });
  
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
          target.scrollIntoView({ behavior: 'smooth' });
        }
      });
    });
  });
  
  // Helper: Debounce function for scroll/resize events
  function debounce(func, wait = 100) {
    let timeout;
    return function(...args) {
      clearTimeout(timeout);
      timeout = setTimeout(() => func.apply(this, args), wait);
    };
  }