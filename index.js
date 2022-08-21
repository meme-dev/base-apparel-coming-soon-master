const form = document.getElementById('form-inline');
const email = document.getElementById('email');
const image = new Image();
const url = 'images/icon-error.svg'
image.src = url;

function checkFields() {
    const emailValue = email.value.trim();
    if (emailValue === '') {
        text = "Email is empty"
        document.getElementById("error").innerHTML = text;
    } else if (!isEmail(emailValue)) {
        text = "Please provide a valid Email"
        const objInput = document.getElementById("email");
        objInput.setAttribute("style","border: 1px solid var(--Soft-Red)")
        document.getElementById("error").innerHTML = text;
        (image);
    }
}


function isEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}