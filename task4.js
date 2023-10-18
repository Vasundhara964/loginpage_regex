document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;

    if (!emailRegex.test(email)) {
        document.getElementById('errorMessages').textContent = 'Invalid email address';
        return;
    }

    if (!passwordRegex.test(password)) {
        document.getElementById('errorMessages').textContent = 'Password must contain at least one uppercase letter, one special character and be at least of 6 characters.';
        return;
    }

    document.getElementById('errorMessages').textContent = '';
    alert('Logged in successfully!');
});
