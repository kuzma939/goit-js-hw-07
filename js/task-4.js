const form = document.querySelector(".login-form");
form.addEventListener("submit", handleSubmit);
function handleSubmit(event) {
event.preventDefault()
const email = form.email.value;
const password = form.password.value;
if(email === "" || password === "") {
    alert('All form fields must be filled in');
}
else {
const fieldsObject = {
    form:email.value.trim(),
form:password.value.trim()
};
console.log(fieldsObject);
}
event.target.reset();
};
