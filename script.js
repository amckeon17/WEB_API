var timeEl = document.querySelector(".time");
var mainEl = document.getElementById("main");
var startBtn = document.getElementById("start");
var startPage = document.getElementById("startpage");
var questionContainer = document.getElementById("questions");

var questions = [
    {
        questionText: "what is 2+2?", 
        questionAns: ["1", "2", "3", "4"],
        correctAns: "4"
    }
]
var questNum = 0;
var secondsLeft = 60;
console.log("connected")
function setTime() {

    var timerInterval = setInterval(function () {
        secondsLeft--;
        timeEl.textContent = secondsLeft + " seconds left";

        if (secondsLeft === 0) {
            clearInterval(timerInterval);
            sendMessage();
        }
    }, 1000);
}

function sendMessage() {
    timeEl.textContent = " ";
    var imgEl = document.createElement("img");
    imgEl.setAttribute("src", "images.game_over.jpeg");
    mainEl.appendChild(imgEl);

}

function startQuiz() {
    startPage.classList.add("hide")
    setTime();
    showQuestion();
}
startBtn.addEventListener("click", startQuiz);

function showQuestion() {
    var questEl = document.createElement("p");
    questEl.textContent = questions[questNum].questionText;
    questionContainer.appendChild(questEl);
    for(var i = 0; i<questions[questNum].questionAns.length; i++) {
        var ansEl = document.createElement("button");
        ansEl.textContent = questions[questNum].questionAns[i];
        questionContainer.appendChild(ansEl);
        ansEl.addEventListener("click", function(event){
            console.log(event.target.textContent)
        })
    }
}


