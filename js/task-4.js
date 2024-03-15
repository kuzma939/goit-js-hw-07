const form = document.querySelector(".login-form");
form.addEventListener("submit", event => {
    event.preventDefault();
    const formEmail = new FormData(form);
    const formPassword = {};
    formEmail.forEach((value, key) => {
        formPassword[key] = value.trim();
      });
      if (!formPassword.email || !formPassword.password) {
        alert('All form fields must be filled in');
        return;
      }
    
      console.log(formPassword);
      form.reset();
});


