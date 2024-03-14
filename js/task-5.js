function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const changeColorButton = document.querySelector(".change-color");
const textContentSpan = document.querySelector(".color")
const bodyColor = document.querySelector("body");

changeColorButton.addEventListener("click", handleClick);
function handleClick() {
  bodyColor.style.backgroundColor = getRandomHexColor();
  textContentSpan.textContent = getRandomHexColor();

};