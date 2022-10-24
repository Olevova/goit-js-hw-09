const refs = {
  delayEl: document.querySelector("input[name='delay']"),
  stepDelayEl: document.querySelector("input[name='step']"),
  amountEl: document.querySelector("input[name='amount']"),
  btnEl: document.querySelector("button"),
}
console.log(refs.delayEl.value);

refs.btnEl.addEventListener("click", (event) => {
  event.preventDefault();
  const amount = Number(refs.amountEl.value);
  const firstDelay = Number(refs.delayEl.value);
    let delay = firstDelay;
  for (let i = 0; i < amount; i += 1) {
    console.log(delay, amount, firstDelay);
    createPromise(i, delay).then(r => console.log(r)).catch(e => console.log(e));
    delay += Number(refs.stepDelayEl.value);
  }
})

// createPromise().then(r => console.log(r)).catch(e => console.log(e));


  function createPromise(position, delay) {
    const shouldResolve = Math.random() > 0.3;
    return promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        if (shouldResolve) {
          resolve(`✅ Fulfilled promise ${position} in ${delay}ms`);
        }
        else {
          reject(`❌ Rejected promise ${position} in ${delay}ms`);
        }
      }, delay);
    });
  };