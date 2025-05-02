/**
 * Form Validation
 * - Contact form
 * - Wholesale inquiries
 */

document.addEventListener('DOMContentLoaded', () => {
    const forms = document.querySelectorAll('form[data-validate]');
  
    forms.forEach(form => {
      form.addEventListener('submit', (e) => {
        e.preventDefault();
        let isValid = true;
  
        // Validate required fields
        form.querySelectorAll('[required]').forEach(field => {
          if (!field.value.trim()) {
            isValid = false;
            field.classList.add('error');
            const errorMsg = field.nextElementSibling?.classList.contains('form-error') 
              ? field.nextElementSibling 
              : document.createElement('small');
            errorMsg.textContent = 'This field is required';
            errorMsg.classList.add('form-error');
            field.after(errorMsg);
          } else {
            field.classList.remove('error');
            if (field.nextElementSibling?.classList.contains('form-error')) {
              field.nextElementSibling.remove();
            }
          }
        });
  
        // Email validation
        const emailField = form.querySelector('[type="email"]');
        if (emailField && !/^\S+@\S+\.\S+$/.test(emailField.value)) {
          isValid = false;
          emailField.classList.add('error');
          const errorMsg = emailField.nextElementSibling?.classList.contains('form-error') 
            ? emailField.nextElementSibling 
            : document.createElement('small');
          errorMsg.textContent = 'Please enter a valid email';
          errorMsg.classList.add('form-error');
          emailField.after(errorMsg);
        }
  
        // Submit if valid
        if (isValid) {
          form.classList.add('submitting');
          // Here you'd typically send data via Fetch API
          console.log('Form submitted:', Object.fromEntries(new FormData(form)));
          setTimeout(() => {
            form.classList.remove('submitting');
            form.insertAdjacentHTML('beforebegin', `
              <div class="alert alert--success">
                Thank you! Your message has been sent. We'll respond within 48 hours.
              </div>
            `);
            form.reset();
          }, 1500);
        }
      });
    });
  });