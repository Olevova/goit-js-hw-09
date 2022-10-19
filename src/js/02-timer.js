import flatpickr from "flatpickr";
import 'flatpickr/dist/flatpickr.min.css';
let dateEnd = null

const inputEl = document.querySelector("#datetime-picker");
const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    if(selectedDates[0] < Date.now()){
      alert("Please choose right date")
      return
    }
    dateEnd = selectedDates[0];
    console.log(Date.now(dateEnd));
  },
};
flatpickr(inputEl, options);

// час від якого потрібно вести відлік
const timeDays = document.querySelector('.value[data-days]');
const timeHours = document.querySelector('.value[data-hours]');
const timeMinutes = document.querySelector('.value[data-minutes]');
const timeSeconds = document.querySelector('.value[data-seconds]');
