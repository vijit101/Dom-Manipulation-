const bgclr = prompt("Enter BG color");
console.log(bgclr);
const bodyelem = document.querySelector("body");

bodyelem.setAttribute("style", `background-color:${bgclr};`);
