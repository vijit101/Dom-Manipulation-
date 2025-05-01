let inptElem = document.querySelector(".inptarea");
let btn = document.querySelector(".changeclr");
let bodyElem = document.querySelector("body");
prompt("enter color");
//let colorinp =  prompt("enter Color");
//console.log(colorinp);
function changeColor(){
    console.log(inptElem.value);
    if(inptElem.value != ""){

        bodyElem.setAttribute("style", `background-color: ${inptElem.value};`);
    }
}


btn.addEventListener("click",()=>{
    changeColor();
});