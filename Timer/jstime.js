const startbtn = document.querySelector(".start");
const stopbtn = document.querySelector(".stop");

const timertxt = document.getElementById("timerText");
timertxt.textContent = "0";
let mytimer;
let time = 0;
function startTimer(){
    mytimer = setInterval(()=>{
        time++;
        timertxt.innerHTML = `Time Passed : ${time}`;
    },1000
);
}

startbtn.addEventListener("click",()=>{
    startTimer();
});

stopbtn.addEventListener("click",()=>{
clearInterval(mytimer);
time = 0;
timertxt.innerHTML = `Time Passed : 0`;
});