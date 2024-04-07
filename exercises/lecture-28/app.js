const form = document.getElementById('registrationForm');
const usernameInput = document.getElementById('username');
const passwordErr = document.getElementById('passwordError');
const errorMessages = document.getElementById('errorMessages');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const usernameErr = document.getElementById('usernameError');
const emailErr = document.getElementById('emailError');


form.addEventListener('submit', function (event) {
    event.preventDefault();

    // очистка повідомлень про помилки
    usernameErr.textContent = '';
    emailErr.textContent = '';
    passwordErr.textContent = '';
    errorMessages.textContent = '';

    // input
    const usernameValue = usernameInput.value.trim();
    const emailValue = emailInput.value.trim();
    const passwordValue = passwordInput.value;

    // Перевірка ніку
    if (usernameValue === '') {
        usernameErr.textContent = 'Ім\'я користувача обов\'язкове';
    }

    // Перевірка пошти
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(emailValue)) {
        emailErr.textContent = 'Невірний формат електронної пошти';
    }

    // Перевірка пароля
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (!passwordRegex.test(passwordValue)) {
        passwordErr.textContent = 'Пароль повинен містити принаймні 8 символів, одну велику літеру, одну малу літеру, одну цифру та один спеціальний символ';
    }

    // Перевірка на помилки
    const errors = [];
    if (usernameErr.textContent !== '') {
        errors.push(usernameErr.textContent);
    }
    if (emailErr.textContent !== '') {
        errors.push(emailErr.textContent);
    }
    if (passwordErr.textContent !== '') {
        errors.push(passwordErr.textContent);
    }

    // Відображення помилок
    if (errors.length > 0) {
        errorMessages.textContent = 'Виправте наступні помилки:';
        errors.forEach(error => {
            errorMessages.innerHTML += `<div>${error}</div>`;
        });
    } else {
        // скидання полів
        form.reset();
        alert('Успішна реєстрація!');
    }
});