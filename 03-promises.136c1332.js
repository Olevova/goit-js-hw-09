!function(){function e(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},o={},r=n.parcelRequired7c6;null==r&&((r=function(e){if(e in t)return t[e].exports;if(e in o){var n=o[e];delete o[e];var r={id:e,exports:{}};return t[e]=r,n.call(r.exports,r,r.exports),r.exports}var u=new Error("Cannot find module '"+e+"'");throw u.code="MODULE_NOT_FOUND",u}).register=function(e,n){o[e]=n},n.parcelRequired7c6=r);var u=r("iU1Pc"),l={delayEl:document.querySelector("input[name='delay']"),stepDelayEl:document.querySelector("input[name='step']"),amountEl:document.querySelector("input[name='amount']"),btnEl:document.querySelector("button")};function i(n,t){var o=Math.random()>.3;return promise=new Promise((function(r,l){setTimeout((function(){o?r(e(u).Notify.success("✅ Fulfilled promise ".concat(n+1," in ").concat(t,"ms"))):l(e(u).Notify.failure("❌ Rejected promise ".concat(n+1," in ").concat(t,"ms")))}),t)}))}l.btnEl.addEventListener("click",(function(e){e.preventDefault();for(var n=Number(l.amountEl.value),t=Number(l.delayEl.value),o=0;o<n;o+=1)i(o,t).then((function(e){return console.log(e)})).catch((function(e){return console.log(e)})),t+=Number(l.stepDelayEl.value)}))}();
//# sourceMappingURL=03-promises.136c1332.js.map