const bodyEl = document.querySelector('body');
const startBtnEl = document.querySelector('button[data-start]');
const stopBtnEl = document.querySelector('button[data-stop]');
bodyEl.style.backgroundColor = 'teal';

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function getNewColor() {
    const color = getRandomHexColor();
    console.log(color);
    return  bodyEl.style.backgroundColor = color;
    
}

startBtnEl.addEventListener('click', () => {console.log(15); return changeColorId = setInterval(getNewColor, 1000 )})
stopBtnEl.addEventListener('click', () => {clearInterval(changeColorId)})
