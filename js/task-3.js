const inputEl = document.querySelector("#name-input");
const emptyInput = document.querySelector("#name-output");
inputEl.addEventListener(`input`, inputGreeting);
function inputGreeting(event) {
  const nameInput = event.target.value;
  const names = nameInput.trim();
  if (names === ``) {
    emptyInput.textContent = `Anonymous`;
  } else {
    emptyInput.textContent = names;
  }
}
