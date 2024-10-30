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

let typedInp ;// trimming starting and end spaces 
let GlobalTimerTime = 10;
let timer ;
let wordCount = 1;
let typingSpeed = 0;

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
        
        // wordCount = 1;
        // typingSpeed = 0;
        clearTimeout(timer);
        CalculateTypingSpeed();
    }
    
}, 1000);}

function retakeTest(){
    GlobalTimerTime = 10;
    resultElement.setAttribute("style","display:none");
    typingAreaElement.setAttribute("style","display:inline-block");
    textInputElement.disabled = true;
    textInputElement.value = "";
    startButton.disabled = false;
    
}

function CalculateWords(){
    typedInp = textInputElement.value.trim();
    console.log(typedInp);
    if(typedInp == " "){
        wordCount = 0;
        return;
    }
    for(let i=0;i<typedInp.length;i++){
        if(typedInp[i] == " "){
            wordCount++;
        }
    }
    
}

function CalculateTypingSpeed(){
    CalculateWords();
    typingSpeed = (wordCount/10)*60;
}
