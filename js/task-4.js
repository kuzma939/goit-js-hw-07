const form = document.querySelector(".login-form");
form.addEventListener("submit", handleSubmit);
function handleSubmit(event) {
event.preventDefault()
const email = form.elements.email.value;
const password = form.elements.password.value;
if(email === "" || password === "") {
    return console.log('All form fields must be filled in');
}
else {
const fieldsObject = {
    email: elements.email.value,
password: elements.password.value
}
console.log(fieldsObject);
}
event.target.reset();
};