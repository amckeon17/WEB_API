var timeEl = document.querySelector(".time");

var secondsLeft = 60;

function setTime() {
    var timerInterval = setInterval(function() {
        secondsLeft--;
        timerInterval.textContent = secondsLeft + " seconds left";

        if(secondsLeft === 0) {
            clearInterval(timerInterval);
            sendMessage();
        }
    }, 1000);
}

function sendMessage() {
    timeEl.textContent = " ";
    var imgEl = document.createElement("img");
    imgEl.setAttribute("src", "https://assets.reedpopcdn.com/five-of-the-best-game-over-screens-1590748640300.jpg/BROK/thumbnail/1600x900/quality/100/five-of-the-best-game-over-screens-1590748640300.jpg");
    mainEl.appendChild(imgEl);
  
  }
  setTime();