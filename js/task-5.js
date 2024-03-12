function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const backgroundColor = document.querySelector(".change-color");
const bodyColor = document.querySelector("body");

backgroundColor.addEventListener("click", handleClick);
function handleClick() {
  bodyColor.style.backgroundColor = getRandomHexColor();
};