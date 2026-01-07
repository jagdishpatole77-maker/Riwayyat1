document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.getElementById('contactForm');

    if (contactForm) {
        contactForm.addEventListener('submit', function (event) {
            event.preventDefault();

            // Get the submit button to show loading state
            const submitBtn = contactForm.querySelector('button[type="submit"]');
            const originalText = submitBtn.innerText;
            submitBtn.innerText = 'Sending...';
            submitBtn.disabled = true;

            // Prepare template parameters
            // Ensure these match your EmailJS template variables
            const templateParams = {
                to_name: "Riwayyat Team",
                from_name: document.getElementById('name').value,
                from_email: document.getElementById('email').value,
                phone: document.getElementById('phone').value,
                message: document.getElementById('message').value
            };

            // Replace 'YOUR_SERVICE_ID' and 'YOUR_TEMPLATE_ID' with actual values
            emailjs.send('service_nitze7u', 'template_lcft4dh', templateParams)
                .then(function () {
                    alert('Message Sent Successfully!');
                    contactForm.reset();
                    submitBtn.innerText = originalText;
                    submitBtn.disabled = false;
                }, function (error) {
                    console.error('EmailJS Error:', error);
                    alert('Failed to send message: ' + JSON.stringify(error));
                    submitBtn.innerText = originalText;
                    submitBtn.disabled = false;
                });
        });
    }
});
