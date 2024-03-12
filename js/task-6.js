function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const numberElements = document.querySelector("input");
const addingCollection = document.querySelector("[data-create]");
const oldCollection = document.querySelector("[data-destroy]");
const cleaningCollection = document.querySelector("#boxes");
let width = 30;
let height = 30;


addingCollection.addEventListener("click", createElement);
function createElement() {
  cleaningCollection.innerHTML = ''; 
  const amount = numberElements.value;
  if (amount <= 0 || amount > 100) {
     width = 30;
     height = 30;
   // return;
  }

  else {
    for (let i = 0; i < amount; i++)
    {
     const cub = document.createElement("div");
cub.style.width = `${width}px`;
cub.style.height = `${height}px`;
cub.style.backgroundColor = getRandomHexColor();
cleaningCollection.append(cub);
width += 10;
height += 10;
numberElements.value = "";
}
};
};
oldCollection.addEventListener("click", destroyBoxes);
function destroyBoxes() {
cleaningCollection.innerHTML = ""; 
};
