function handleSubmit() {
    let email = document.forms.FormValidation.Email.value;
    let password = document.forms["FormValidation"]["Password"].value;

    let message = document.getElementById('message');
    if (email.includes('@') && password.length >= 8) {
        message.style.color = "Green";
        message.textContent = "Form Validated";
        return true;
    }
    else {
        message.style.color = "Red";
        message.textContent = "Form Not Validated";
        return false;
    }
}