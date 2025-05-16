const form = document.querySelector('.conf-form');
const returnPage = document.querySelector('.return');

const avatarField = document.querySelector("#uploaded-avatar");
const fullNameField = document.querySelector('#full-name');
const emailField = document.querySelector('#email-address');
const ghUserField = document.querySelector('#gh-user');

const defaultImg = avatarField.src;

let avatar = '';
let fullName = '';
let email = '';
let ghUser = '';

form.addEventListener('submit', (e) => {
    e.preventDefault();

    formValidation();
    if (ghUser && ghUser[0] !== '@') {
        ghUser = '@' + ghUser;
    }

    if (fullName && email && ghUser && avatar) {
        renderReturn();
    }
});

/*
My understanding of web design, or perhaps software design
in general is as such: start simple and work upwards in
complexity ONLY as needed.

Thus, I'll be utilizing the native HTML5 validation here.
Validate on the frontend AND backend:

Frontend for UI feedback (and thus UX improvement) using HTML5

Backend for security using regexp validation
*/
function formValidation() {
    if (fullNameField.checkValidity()) {
        fullName = fullNameField.value.trim();
        toggleErrorDisplay('#full-name', fullName);
    } else {
        toggleErrorDisplay('#full-name', fullName);
    }

    if (emailField.checkValidity()) {
        email = emailField.value.trim();
        toggleErrorDisplay('#email-address', email);
    } else {
        toggleErrorDisplay('#email-address', email);
    }

    if (ghUserField.checkValidity()) {
        ghUser = ghUserField.value.trim();
        toggleErrorDisplay('#gh-user', ghUser);
    } else {
        toggleErrorDisplay('#gh-user', ghUser);
    }

    if (avatarField.src !== defaultImg) {
        avatar = avatarField.src;       
    }
}

function toggleErrorDisplay(idField, varName) {
    let errorDisplay = document.querySelector(`${idField} ~ .info-text`);

    if (errorDisplay.classList.contains('hide') && !varName) {
        errorDisplay.classList.remove('hide');
    } else if (varName) {
        errorDisplay.classList.add('hide');
    }
}

function renderReturn() {
    document.querySelector('[data-placeholder="name"]').textContent = fullName;
    document.querySelector('[data-placeholder="email"]').textContent = email;
    document.querySelector('[data-placeholder="github"]').textContent = ghUser;
    document.querySelector('[data-placeholder="avatar-img"]').src = avatar;

    form.classList.add('hide');
    returnPage.classList.remove('hide');
}