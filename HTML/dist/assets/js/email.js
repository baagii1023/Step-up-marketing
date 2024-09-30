document.getElementById('contactForm').addEventListener('submit', function (event) {
	event.preventDefault(); // Prevent form from reloading the page

	// Send the form data to Formspree
	fetch(this.action, {
			method: this.method,
			body: new FormData(this),
			headers: {
					'Accept': 'application/json'
			}
	}).then(response => {
			if (response.ok) {
					alert('Message sent successfully!');
					this.reset(); // Reset the form
			} else {
					alert('Failed to send message. Please try again.');
			}
	}).catch(error => {
			alert('Error: ' + error);
	});
});