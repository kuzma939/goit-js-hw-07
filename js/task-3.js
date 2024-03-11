
let input = document.querySelector('#name-input');
let output = document.querySelector('#name-output');
input.addEventListener('input', welcome);

function welcome(event) {
  console.log(event.currentTarget);
  console.log(event.targer);
  const value = event.currentTarget.value;
  const name = value.trim();
  if (name === '') {
    output.textContent = 'Anonymous';
    return;
  }
  output.textContent = name;
} 