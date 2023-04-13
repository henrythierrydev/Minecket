// ========================
//   REGISTRATION SYSTEM
// ========================
// If you don't want to, remove this system by deleting the file.

const form = document.querySelector("#register-form");
const passwordInput = document.querySelector("#password");
const users = JSON.parse(localStorage.getItem("users")) || [];

form.addEventListener("submit", function(event) {
    event.preventDefault();
    const emailInput = document.querySelector("#email");
    const nicknameInput = document.querySelector("#nick");
    const email = emailInput.value.trim();
    const nickname = nicknameInput.value.trim();
    const password = passwordInput.value.trim();

    const existingUser = users.find((u) => u.email.toLowerCase() === email.toLowerCase() || u.nickname.toLowerCase() === nickname.toLowerCase());

    if(existingUser) {
        form.reset();
        const alreadyRegistered = document.getElementById("already-registered");
        alreadyRegistered.classList.add('active');

        setTimeout(() => {
            alreadyRegistered.classList.remove('active');
        }, 3000);
        return;
    }

    if(nickname.length < 3 || nickname.length > 16) {
        form.reset();
        nicknameInput.classList.add("input-invalid");
        nicknameInput.setCustomValidity("Add a nickname between 3 to 16 characters");
        nicknameInput.reportValidity();

        setTimeout(() => {
            nicknameInput.classList.remove("input-invalid");
            nicknameInput.setCustomValidity("");
        }, 2000);
        return;
    }

    if(password.length < 8 || password.length > 64) {
        form.reset();
        passwordInput.classList.add("input-invalid");
        passwordInput.setCustomValidity("Add a password between 8 to 64 characters");
        passwordInput.reportValidity();

        setTimeout(() => {
            passwordInput.classList.remove("input-invalid");
            passwordInput.setCustomValidity("");
        }, 2000);
        return;
    }

    const registered = document.cookie.split(';').some((item) => item.trim().startsWith('registered='));
    if(registered) {
        form.reset();
        const successRegistered = document.getElementById("success-registered");
        successRegistered.classList.add('active');

        setTimeout(() => {
            successRegistered.classList.remove('active');
        }, 3000);
        return;
    }

    const newUser = {
        email: email,
        nickname: nickname,
        password: password
    };

    users.push(newUser);
    localStorage.setItem("users", JSON.stringify(users));
    const date = new Date();

    date.setTime(date.getTime() + (365 * 24 * 60 * 60 * 1000));
    const expires = "expires=" + date.toUTCString();
    document.cookie = "registered=true;" + expires + ";path=/";
    form.reset();

    const successRegistered = document.getElementById('success-registered');
    successRegistered.classList.add('active');

    setTimeout(() => {
        successRegistered.classList.remove('active');
        location.replace("../HTML/Login.html");
    }, 3000);
});

passwordInput.addEventListener("keydown", function(event) {
    if(event.key === "Enter") {
        event.preventDefault();
        form.dispatchEvent(new Event("submit"));
    }
});