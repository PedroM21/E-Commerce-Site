const password = document.getElementById("password");
const email = document.getElementById("email");

function checkEmail () {
    const emailDivId = document.getElementById("emailDiv")
    const feedback = document.getElementById("emailFeedback")
    const emailValue = email.value.trim();
    const validRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if(emailValue.match(validRegex)) {
        console.log("Valid email inputted.");
        feedback.innerHTML = '';
		emailDivId.classList.remove("has-error");
		emailDivId.classList.add("has-success");
    } else {
        console.log("Invalid email inputted");
        feedback.innerHTML = 'Invalid email address';
		emailDivId.classList.remove("has-success");
		emailDivId.classList.add("has-error");
    }
}

function checkPassword (minLength) {
    const pwdDivId = document.getElementById("pwdDiv");
    const feedback = document.getElementById("pwdFeedback");
    const pwdValue = password.value.trim();

    if (pwdValue === '') {
        feedback.innerHTML = 'Invalid password';
        pwdDivId.classList.remove("has-success");
        pwdDivId.classList.add("has-error");
    } else {
        feedback.innerHTML = '';
        pwdDivId.classList.remove("has-error");
        pwdDivId.classList.add("has-success");
    }
}

email.addEventListener('blur', () => {
    checkEmail();
});

password.addEventListener('blur', () => {
    checkPassword(8);
});