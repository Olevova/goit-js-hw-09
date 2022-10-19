const bodyEl = document.querySelector('body');
const startBtnEl = document.querySelector('button[data-start]');
const stopBtnEl = document.querySelector('button[data-stop]');

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function getNewColor() {
    startBtnEl.setAttribute("disabled", true);
    const color = getRandomHexColor();
    console.log(color);
    return  bodyEl.style.backgroundColor = color;
    
}
let changeColorId = null

startBtnEl.addEventListener('click', () => {return changeColorId = setInterval(getNewColor, 1000)})
stopBtnEl.addEventListener('click', () => { startBtnEl.removeAttribute("disabled"); return clearInterval(changeColorId)})
