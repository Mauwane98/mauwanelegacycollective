/**
 * Mossé Luxe Product Interactions
 * - Product customization previews
 * - Leather type selector
 * - Gallery with zoom
 */

document.addEventListener('DOMContentLoaded', () => {
    // 1. PRODUCT CUSTOMIZATION
    const colorSwatches = document.querySelectorAll('.color-swatch');
    const engravingInput = document.getElementById('engraving-text');
    const engravingPreview = document.getElementById('engraving-preview');
    
    // Color selection
    colorSwatches.forEach(swatch => {
      swatch.addEventListener('click', () => {
        colorSwatches.forEach(s => s.classList.remove('active'));
        swatch.classList.add('active');
        document.querySelector('.product-main-image').dataset.color = swatch.dataset.color;
      });
    });
  
    // Live engraving preview
    engravingInput?.addEventListener('input', (e) => {
      engravingPreview.textContent = e.target.value || 'Your Text Here';
    });
  
    // 2. IMAGE ZOOM
    const productImage = document.querySelector('.product-zoom-image');
    if (productImage) {
      productImage.addEventListener('mousemove', (e) => {
        const { left, top, width, height } = e.target.getBoundingClientRect();
        const x = (e.pageX - left) / width * 100;
        const y = (e.pageY - top) / height * 100;
        e.target.style.transformOrigin = `${x}% ${y}%`;
        e.target.style.transform = 'scale(2)';
      });
  
      productImage.addEventListener('mouseleave', () => {
        productImage.style.transform = 'scale(1)';
      });
    }
  
    // 3. BESPOKE FORM TOGGLE
    const bespokeToggle = document.getElementById('bespoke-toggle');
    const bespokeForm = document.getElementById('bespoke-form');
    
    bespokeToggle?.addEventListener('change', () => {
      bespokeForm.classList.toggle('hidden', !bespokeToggle.checked);
    });
  });