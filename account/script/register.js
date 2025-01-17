setTimeout(() => {window.location.href="../login.html"},3000);

const userName = document.getElementById('username');
    const email = document.getElementById('email');
    const dob = document.getElementById('dob');
    const details = document.getElementById('category');
    const password = document.getElementById('password');
    const confirm = document.getElementById('confirm');
    const alertMessage = document.getElementById('alert');
    const terms = document.getElementById('save');
    const form=document.getElementById('form');
    const passwordInput = document.getElementById('password');
    const confirmInput = document.getElementById('confirm');

    // Password confirmation validation
    confirmInput.addEventListener('input', function () {
        const password = passwordInput.value;
        const confirmed = confirmInput.value;
        if (password && password === confirmed) {
            alertMessage.textContent = "Passwords match";
        } else {
            alertMessage.textContent = "Passwords do not match";
        }
    });


 