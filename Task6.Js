document.getElementById('contactForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent form submission
    
    let isValid = true;

    // Clear previous error messages
    document.getElementById('nameError').textContent = '';
    document.getElementById('emailError').textContent = '';
    document.getElementById('messageError').textContent = '';

    // Validate Name
    const name = document.getElementById('name').value.trim();
    if (name.length < 3) {
        document.getElementById('nameError').textContent = 'Name must be at least 3 characters long.';
        isValid = false;
    }

    // Validate Email
    const email = document.getElementById('email').value.trim();
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!emailPattern.test(email)) {
        document.getElementById('emailError').textContent = 'Please enter a valid email address.';
        isValid = false;
    }

    // Validate Message
    const message = document.getElementById('message').value.trim();
    if (message.length < 10) {
        document.getElementById('messageError').textContent = 'Message must be at least 10 characters long.';
        isValid = false;
    }

    // If the form is valid, you can submit it here (e.g., send to a server)
    if (isValid) {
        alert('Form submitted successfully!');
        // Normally, you would submit the form here
        // this.submit();
    }
});
