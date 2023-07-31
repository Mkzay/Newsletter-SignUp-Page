// JavaScript
document.addEventListener('DOMContentLoaded', () => {
    const mail = document.querySelector('#mail');
    const form = document.querySelector('#form');
    const errorElement = document.querySelector('#error');
    const submit = document.querySelector('#submit');
    const dismiss = document.getElementById('dismiss');
  
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
    form.addEventListener('submit', (e) => {
      e.preventDefault();
  
      let messages = [];
  
      if (mail.value.trim() === '') {
        messages.push('');
      } else {

        if (!emailRegex.test(mail.value)) {
          messages.push('Valid email required');
        }
      }
 
      if (messages.length > 0) {
        mail.style.borderColor = 'hsl(354, 100%, 66%)';
        errorElement.textContent = messages.join(', ');
        errorElement.style.display = 'block';
      } else {

        location.href = 'success.html';

        //alert('Form submitted successfully!');

        form.submit();
      }
    });
  
    mail.addEventListener('input', () => {
      errorElement.style.display = 'none';
      errorElement.textContent = '';
    });
  });

dismiss.addEventListener('click', function(){
  location.href = 'index.html';
});