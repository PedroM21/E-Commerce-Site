const fullName = document.getElementById("fullName");
const email = document.getElementById("email");
const message = document.getElementById("message");

function checkName () {
    const nameDivId = document.getElementById("nameDiv");
    const feedback = document.getElementById("nameFeedback");
    nameValue = fullName.value.trim();

    if(nameValue === '' || nameValue.length < 3) {
        console.log("Invalid name inputted");
        feedback.innerHTML = 'Please enter a name longer than 3 characters';
        nameDivId.classList.remove("has-success");
        nameDivId.classList.add("has-error");
    } else {
        console.log("Valid name inputted")
        feedback.innerHTML = '';
        nameDivId.classList.remove("has-error");
        nameDivId.classList.add("has-success");
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

function checkMessage () {
    const msgDivId = document.getElementById("msgDiv");
    const feedback = document.getElementById("msgFeedback");
    const messageValue = message.value.trim();

    if (messageValue === '') {
        console.log("Invalid message inputted");
        feedback.innerHTML = 'Please enter a message';
        msgDivId.classList.remove("has-success");
        msgDivId.classList.add("has-error");
    } else {
        console.log("Valid message inputted");
        feedback.innerHTML = '';
        msgDivId.classList.remove("has-error");
        msgDivId.classList.add("has-success");
    }
}

fullName.addEventListener('blur', () => {
    checkName();
});

email.addEventListener('blur', () => {
    checkEmail();
});

message.addEventListener('blur', () => {
    checkMessage();
});