document.addEventListener('DOMContentLoaded', function () {
    const contactForm = document.getElementById('contactForm');
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const messageInput = document.getElementById('message');
    
    const nameError = document.getElementById('nameError');
    const emailError = document.getElementById('emailError');
    const messageError = document.getElementById('messageError');
    const successMessage = document.getElementById('successMessage');
    
    contactForm.addEventListener('submit', function (event) {
        event.preventDefault();
        
        const name = nameInput.value.trim();
        const email = emailInput.value.trim();
        const message = messageInput.value.trim();
        
        let valid = true;

        if (name === '') {
            nameError.classList.remove('hidden');
            valid = false;
        } else {
            nameError.classList.add('hidden');
        }
        
        if (email === '') {
            emailError.textContent = 'Please enter your email.';
            emailError.classList.remove('hidden');
            valid = false;
        } else if (!validateEmail(email)) {
            emailError.textContent = 'Please enter a valid email address.';
            emailError.classList.remove('hidden');
            valid = false;
        } else {
            emailError.classList.add('hidden');
        }
        
        if (message === '') {
            messageError.classList.remove('hidden');
            valid = false;
        } else {
            messageError.classList.add('hidden');
        }
        
        if (valid) {
            successMessage.classList.remove('hidden');
            contactForm.reset();
            setTimeout(() => successMessage.classList.add('hidden'), 3000);
        }
    });

    function validateEmail(email) {
        const re = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
        return re.test(String(email).toLowerCase());
    }
});
