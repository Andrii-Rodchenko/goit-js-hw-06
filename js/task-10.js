function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const createButtonEl = document.querySelector("button[data-create]")
const destroyButtonEl = document.querySelector("button[data-destroy]")
const numberinputEl = document.querySelector("input")
const divBoxesEl = document.querySelector("#boxes")


function createBoxes(amount) {
  for (let i = 1; i <= amount; i += 1) {
    const divEl = document.createElement("div");
    divEl.style.width = (((i* 10) + 30) + "" ) + "px";
    divEl.style.height = (((i * 10) + 30) + "") + "px";
    divEl.style.backgroundColor = getRandomHexColor();
    divBoxesEl.append(divEl)
  }

}
function destroyBoxes() {
  divBoxesEl.innerHTML = '';
}

function amountItem() {
  const amount = numberinputEl.value 
  createBoxes(amount)
}

createButtonEl.addEventListener("click", amountItem)
destroyButtonEl.addEventListener("click", destroyBoxes)
