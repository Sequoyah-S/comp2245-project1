const form = document.querySelector('form');
const messageDiv = document.querySelector('.message');

form.addEventListener('submit', function (e) {
    e.preventDefault(); 

    const emailInput = document.querySelector('#email');
    const emailAddress = emailInput.value;

    if (!emailAddress || !isValidEmail(emailAddress)) {
        messageDiv.textContent = 'Please enter a valid email address.';
    } else {
        messageDiv.textContent = `Thank you! Your email address ${emailAddress} has been added to our mailing list!`;
    }

    emailInput.value = '';
});

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}