!function(){var t=document.querySelector("body"),e=document.querySelector("button[data-start]"),n=document.querySelector("button[data-stop]");function r(){var e="#".concat(Math.floor(16777215*Math.random()).toString(16));return console.log(e),t.style.backgroundColor=e}var o=null;e.addEventListener("click",(function(){return o=setInterval(r,1e3)})),n.addEventListener("click",(function(){return clearInterval(o)}))}();
//# sourceMappingURL=01-color-switcher.671ff9a0.js.map
