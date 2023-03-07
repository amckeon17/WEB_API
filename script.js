var timeEl = document.querySelector(".time");
var mainEl = document.getElementById("main");
var startBtn = document.getElementById("start");
var startPage = document.getElementById("startpage");


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

function hideElement() {
    startPage.classList.add("hide")
    setTime();


}
startBtn.addEventListener("click", hideElement);

