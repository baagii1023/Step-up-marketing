// // Initialize EmailJS
// (function() {
//   emailjs.init("baagii1993@yahoo.com");  // Replace with your actual EmailJS user ID
// })();

// document.getElementById('contactForm').addEventListener('submit', function(event) {
//   event.preventDefault(); // Prevent form from reloading the page

//   // Get the form data
//   const formData = {
//     firstName: document.getElementById('formFirstName').value,
//     lastName: document.getElementById('formLastName').value,
//     email: document.getElementById('formEmail').value,
//     phone: document.getElementById('formPhone').value,
//     message: document.getElementById('formMessages').value,
//   };

//   // Send the email using EmailJS
//   emailjs.send('service_fj96yrh', 'template_ik84d1i', formData)
//     .then(function(response) {
//       console.log('SUCCESS!', response.status, response.text);
//       alert('Message sent successfully!');
//     }, function(error) {
//       console.log('FAILED...', error);
//       alert('Failed to send message.');
//     });
// });
