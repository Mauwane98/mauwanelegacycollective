/**
 * LSG Creations Interactions
 * - Classroom kit configurator
 * - Age-group filtering
 * - Teacher resource downloads
 */

document.addEventListener('DOMContentLoaded', () => {
    // 1. KIT CONFIGURATOR
    const kitItems = document.querySelectorAll('.kit-item');
    const kitPreview = document.getElementById('kit-preview');
    const totalDisplay = document.getElementById('kit-total');
    
    kitItems.forEach(item => {
      const checkbox = item.querySelector('input[type="checkbox"]');
      const price = parseFloat(item.dataset.price);
      
      checkbox.addEventListener('change', () => {
        item.classList.toggle('selected', checkbox.checked);
        updateKitTotal();
      });
  
      // Quantity adjuster
      const qtyInput = item.querySelector('.kit-qty');
      qtyInput?.addEventListener('change', () => {
        updateKitTotal();
      });
    });
  
    function updateKitTotal() {
      let total = 0;
      kitItems.forEach(item => {
        const checkbox = item.querySelector('input[type="checkbox"]');
        if (checkbox.checked) {
          const qty = parseIntitem.querySelector('.kit-qty')?.value || 1;
          total += parseFloat(item.dataset.price) * qty;
        }
      });
      totalDisplay.textContent = `R${total.toFixed(2)}`;
    }
  
    // 2. AGE FILTER
    const ageFilters = document.querySelectorAll('.age-filter');
    const productCards = document.querySelectorAll('.product-card');
    
    ageFilters.forEach(filter => {
      filter.addEventListener('click', () => {
        ageFilters.forEach(f => f.classList.remove('active'));
        filter.classList.add('active');
        
        const ageGroup = filter.dataset.age;
        productCards.forEach(card => {
          card.style.display = ageGroup === 'all' || card.dataset.age === ageGroup 
            ? 'block' 
            : 'none';
        });
      });
    });
  
    // 3. TEACHER RESOURCE PREVIEW
    document.querySelectorAll('.resource-thumbnail').forEach(thumb => {
      thumb.addEventListener('click', () => {
        const pdfUrl = thumb.dataset.pdf;
        window.open(pdfUrl, '_blank');
      });
    });
  });