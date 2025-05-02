/**
 * Craftsmanship Page
 * - Process step tabs
 * - Material gallery
 */

document.addEventListener('DOMContentLoaded', () => {
    // Process tabs
    const tabs = document.querySelectorAll('.process-tab');
    const tabContents = document.querySelectorAll('.step-content');
  
    tabs.forEach(tab => {
      tab.addEventListener('click', () => {
        // Remove active states
        tabs.forEach(t => t.classList.remove('active'));
        tabContents.forEach(c => c.classList.remove('active'));
        
        // Set new active
        tab.classList.add('active');
        const target = tab.dataset.target;
        document.getElementById(target).classList.add('active');
      });
    });
  
    // Material gallery carousel
    const gallery = document.querySelector('.material-gallery');
    if (gallery) {
      let currentIndex = 0;
      const items = gallery.querySelectorAll('.gallery-item');
      const totalItems = items.length;
  
      function showItem(index) {
        items.forEach((item, i) => {
          item.style.opacity = i === index ? 1 : 0;
          item.style.pointerEvents = i === index ? 'all' : 'none';
        });
      }
  
      document.querySelector('.gallery-next').addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % totalItems;
        showItem(currentIndex);
      });
  
      document.querySelector('.gallery-prev').addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + totalItems) % totalItems;
        showItem(currentIndex);
      });
  
      showItem(0); // Initialize
    }
  });