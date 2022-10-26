import Notiflix from 'notiflix';

// створюємо обєкт з елементами
const refs = {
  delayEl: document.querySelector("input[name='delay']"),
  stepDelayEl: document.querySelector("input[name='step']"),
  amountEl: document.querySelector("input[name='amount']"),
  btnEl: document.querySelector("button"),
}
// console.log(refs.delayEl.value);
// вішаємо слухача на кнопку для виклику промісів
refs.btnEl.addEventListener("click", (event) => {
  event.preventDefault();
  const amount = Number(refs.amountEl.value);
  const firstDelay = Number(refs.delayEl.value);
  let delay = firstDelay;
  for (let position = 0; position < amount; position += 1) {
    createPromise(position, delay).then(({ position, delay }) => { console.log(resolve) }).catch(({ position, delay }) => { console.log(reject) });
    delay += Number(refs.stepDelayEl.value);
  }
})



// створюємо функція , яка в собі створює проміс
  function createPromise(position, delay) {
    const shouldResolve = Math.random() > 0.3;
    const promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        if (shouldResolve) {
          resolve(Notiflix.Notify.success(`✅ Fulfilled promise ${position + 1} in ${delay}ms`));
        }
        else {
          reject(Notiflix.Notify.failure(`❌ Rejected promise ${position + 1} in ${delay}ms`));
        }
      }, delay);
      
    });
    return promise
  };