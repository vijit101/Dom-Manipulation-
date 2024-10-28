//Complete the given scaffold to implement all the functionalities mentioned in the problem Statement.
const sentences = 
  `The quick brown fox jumps over the lazy dog.
  Sphinx of black quartz, judge my vow.
  Pack my box with five dozen liquor jugs.
  How vexingly quick daft zebras jump!`
;

// main 
const textInputElement = document.getElementById("input");
const sentenceElement = document.getElementById("sentence");
const startButton = document.getElementById("start-btn");
const timerElement = document.getElementById("timer");
const resultElement = document.getElementById("result");
const typingAreaElement = document.getElementById("typing-area");
const retakeTestElement = document.getElementById("retry-btn");

const typedInp = textInputElement.value.trim();// trimming starting and end spaces 
let GlobalTimerTime = 10;
let timer ;

// all starts when start button is clicked

//main 

// event listners 
startButton.addEventListener("click",()=>{
    textInputElement.disabled = false;
    sentenceElement.innerHTML = sentences;
    startButton.disabled = true;
    StartTimer();
});


function StartTimer(){
    timer = setInterval(() => {
    GlobalTimerTime--;
    timerElement.innerHTML = GlobalTimerTime;
    if(GlobalTimerTime <=0){
        resultElement.setAttribute("style","display:block");
        typingAreaElement.setAttribute("style","display:none");
        retakeTestElement.addEventListener("click",retakeTest);
        clearTimeout(timer);
    }
    
}, 1000);}

function retakeTest(){
    GlobalTimerTime = 10;
    resultElement.setAttribute("style","display:none");
    typingAreaElement.setAttribute("style","display:inline-block");
    textInputElement.disabled = true;
    sentenceElement.innerHTML = "";
    startButton.disabled = false;
    typedInp = textInputElement.value.trim();
}


