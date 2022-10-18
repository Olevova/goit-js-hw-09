import flatpickr from "flatpickr";
import 'flatpickr/dist/flatpickr.min.css';


const inputEl = document.querySelector("#datetime-picker");
const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    console.log(selectedDates[0]);
  },
};
flatpickr(inputEl, options);

// час від якого потрібно вести відлік
console.log(Date.now(inputEl.value));
// const timerEl = document.querySelectorAll('.value');

// console.log(timerEl);
// const L = [];
// timerEl.forEach((i) => L.push(i.dataset))

// L.map((i) => console.log(i))    