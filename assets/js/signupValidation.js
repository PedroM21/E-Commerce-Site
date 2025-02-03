const firstName = document.getElementById("fName");
const lastName = document.getElementById("lName");
const password = document.getElementById("password");
const email = document.getElementById("email");

function checkFirstName () {
    const fNameDivId = document.getElementById("fNameDiv");
    const feedback = document.getElementById("fNameFeedback");
    const fNameValue = firstName.value.trim();

    if (fNameValue === '') {
        feedback.innerHTML = 'Invalid first name';
        fNameDivId.classList.remove("has-success");
        fNameDivId.classList.add("has-error");
    } else if (fNameValue.length < 3) {
        feedback.innerHTML = 'Must be more than 3 characters';
        fNameDivId.classList.remove("has-success");
        fNameDivId.classList.add("has-error");
    } else {
        feedback.innerHTML = '';
        fNameDivId.classList.remove("has-error");
        fNameDivId.classList.add("has-success");
    }
}

function checkLastName () {
    const lNameDivId = document.getElementById("lNameDiv");
    const feedback = document.getElementById("lNameFeedback");
    const lNameValue = lastName.value.trim();

    if (lNameValue === '') {
        feedback.innerHTML = 'Invalid last name';
        lNameDivId.classList.remove("has-success");
        lNameDivId.classList.add("has-error");
    }else if (lNameValue.length < 3) {
        feedback.innerHTML = 'Must be more than 3 characters';
        lNameDivId.classList.remove("has-success");
        lNameDivId.classList.add("has-error");
    } else {
        feedback.innerHTML = '';
        lNameDivId.classList.remove("has-error");
        lNameDivId.classList.add("has-success");
    }
}

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

    if (pwdValue.length < minLength || pwdValue === '') {
        feedback.innerHTML = 'Must be more than 8 characters';
        pwdDivId.classList.remove("has-success");
        pwdDivId.classList.add("has-error");
    } else {
        feedback.innerHTML = '';
        pwdDivId.classList.remove("has-error");
        pwdDivId.classList.add("has-success");
    }
}

firstName.addEventListener('blur', () => {
    checkFirstName();
});

lastName.addEventListener('blur', () => {
    checkLastName();
});

email.addEventListener('blur', () => {
    checkEmail();
});

password.addEventListener('blur', () => {
    checkPassword(8);
});