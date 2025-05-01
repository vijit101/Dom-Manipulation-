let timerText = document.querySelector("h2");
let startBtn = document.querySelector(".start");
let resetBtn = document.querySelector(".reset");
let tym = 0; 
let timer;

function StartTimer(){
    timer = setInterval(() => {
        tym++;
        timerText.innerHTML = `Time Passed : ${tym}`;
    }, 1000);
}

startBtn.addEventListener("click",()=>{
   StartTimer();
});

resetBtn.addEventListener("click",()=>{
    tym = 0;
    clearInterval(timer);
});


