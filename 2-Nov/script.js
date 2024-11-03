const form = document.getElementById("myForm");
const firstName = document.getElementById("firstName");
const lastName = document.getElementById("lastName");
const dateOfBirth = document.getElementById("dob");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");
const email = document.getElementById("email");
const submit = document.getElementById("submit");
const alertUser = document.getElementById("alert");
let eyeicon = document.getElementById("eye");
let eyeicon2 = document.getElementById("eye2");

eyeicon.onclick = () => {
  if (password.type == "password") {
    password.type = "text";
    password2.type = "text";
    eyeicon.src = "open.png";
    eyeicon2.src = "open.png";
  } else {
    password.type = "password";
    password2.type = "password";
    eyeicon.src = "closed-eyes-removebg-preview.png";
    eyeicon2.src = "closed-eyes-removebg-preview.png";
  }
};

function validateFirstName() {
  if (firstName.value.length === 0) {
    alertUser.style.opacity = 1;
    alertUser.innerHTML = "You have left the first name input empty";
    firstName.style = "border-bottom: 1px solid red; color: red";
    return false;
  } else return true;
}
function validateLastName() {
  if (lastName.value.length === 0) {
    alertUser.style.opacity = 1;
    alertUser.innerHTML = "You have left the last name input empty";
    lastName.style = "border-bottom: 1px solid red; color: red";
    return false;
  } else return true;
}
function validateEmail() {
  if (
    email.value.length < 8 ||
    !email.value.includes("@") ||
    !email.value.includes(".")
  ) {
    alertUser.style.opacity = 1;
    alertUser.innerHTML = "Email is in wrong format. Email Must contain @";
    email.style = "border-bottom: 1px solid red; color: red";
    return false;
  } else return true;
}
function matchPassword() {
  if (
    password.value.length !== password2.value.length ||
    password.value !== password2.value
  ) {
    alertUser.style.opacity = 1;
    alertUser.innerHTML = "Password did not match";
    password2.style = "border-bottom: 1px solid red; color: red";
    return false;
  } else return true;
}
function validatePassword() {
  if (
    password.value.length < 8 ||
    password.value.match(/[a-z]/g) === null ||
    password.value.match(/[0-9]/g) === null ||
    password.value.match(/[A-Z]/g) === null
  ) {
    alertUser.style.opacity = 1;
    alertUser.innerHTML =
      "password should be minimum length of 8, must contain an uppercase, a lowercass and a number";
    password.style = "border-bottom: 1px solid red; color: red";
    return false;
  } else return true;
}
function allValidate() {
  if (validateFirstName() && validateLastName() && validateEmail() && validatePassword() && matchPassword()) {
    alert('All input is valid.');
    return true;
  } else return false;
}