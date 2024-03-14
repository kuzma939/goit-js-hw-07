function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const numberElements = document.querySelector("input");
const addingCollection = document.querySelector("[data-create]");
const oldCollection = document.querySelector("[data-destroy]");
const cleaningCollection = document.querySelector("#boxes");

addingCollection.addEventListener("click", createBoxes);
function createBoxes() {
  let width = 30;
let height = 30;
  cleaningCollection.innerHTML = ''; 
  const amount = numberElements.value;
    for(let i = 0; i < amount; i++)
    {
     const cub = document.createElement("div");
cub.style.width = `${width + i * 10}px`;
cub.style.height = `${height + i * 10}px`;
cub.style.backgroundColor = getRandomHexColor();
cleaningCollection.append(cub);


}
numberElements.value = "";
};
oldCollection.addEventListener("click", destroyBoxes);
function destroyBoxes() {
cleaningCollection.innerHTML = ""; 
};





