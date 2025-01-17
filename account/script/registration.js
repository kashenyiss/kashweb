// Select necessary DOM elements
const usernameField = document.getElementById('username');
const emailField = document.getElementById('email');
const dobField = document.getElementById('dob');
const categoryField = document.getElementById('category');
const passwordField = document.getElementById('password');
const confirmField = document.getElementById('confirm');
const alertBox = document.getElementById('alert');
const saveCheckbox = document.getElementById('save');
const registerButton = document.querySelector('button');
const passwordVisibilityIcons = document.querySelectorAll('.visible');

// Function to handle real-time validation
const validatePasswordMatch = () => {
    if (passwordField.value !== confirmField.value) {
        alertBox.textContent = "Passwords do not match!";
        alertBox.style.color = 'red';
    } else {
        alertBox.textContent = "Passwords match.";
        alertBox.style.color = 'green';
    }
};

// Function to check if username starts with a capital letter
const validateUsername = () => {
    const firstLetter = usernameField.value.charAt(0);
    if (firstLetter !== firstLetter.toUpperCase()) {
        usernameField.setCustomValidity("Username must begin with a capital letter");
    } else {
        usernameField.setCustomValidity("");
    }
};

// Function to handle the registration
function register() {
    if (passwordField.value === confirmField.value && saveCheckbox.checked) {
        const userData = {
            username: usernameField.value,
            email: emailField.value,
            dob: dobField.value,
            category: categoryField.value,
            password: passwordField.value
        };

        // Save to local storage
        localStorage.setItem('userData', JSON.stringify(userData));
localStorage.setItem('email',userData.email);
localStorage.setItem('password',userData.password);

        // Alert user and reset form
        alert("Registration successful!");
        document.querySelector('form').reset();
    } else {
        if (!saveCheckbox.checked) {
            alert("Please agree to the terms and conditions.");
        } else {
            alert("Passwords do not match!");
        }
    }
};

// Add event listeners
passwordField.addEventListener('input', validatePasswordMatch);
confirmField.addEventListener('input', validatePasswordMatch);
usernameField.addEventListener('input', validateUsername);
registerButton.addEventListener('click', register);

// Password visibility toggle
passwordVisibilityIcons.forEach(icon => {
    icon.addEventListener('click', () => {
        const inputField = icon.previousElementSibling;
        const type = inputField.type === 'password' ? 'text' : 'password';
        inputField.type = type;
    });
});
