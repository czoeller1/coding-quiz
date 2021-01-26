/*
Start button that waits for click to start quiz

Have a timer with one second interval
update element with current time

Quiz questions and answers held as objects in array, obj also has correct answer

For the quiz questions, give the buttons a 'correct' data attribute
check target.correct to determine if choice is correct
If incorrect, deduct time from timer
display next question, update data attributes

At end of quiz, give option to add initials
display leaderboard
*/
var timer;
var won = false;
var timeCount = 60;
var currQ = 0;
var timerEl = document.querySelector(".timer");
var questionEl = document.querySelector(".question");
var answersEl = document.querySelector("#answers");
var responseEl = document.querySelector("#response");

var q1 = {
  ques: "Which language is responsible for webpage responsiveness?",
  a1: "CSS",
  a2: "JS",
  a3: "HTML",
  a4: "Java",
  corr: "ans2",
};

var q2 = {
  ques: "Which of the following IS NOT a primitive type in Javascript?",
  a1: "Number",
  a2: "Boolean",
  a3: "String",
  a4: "Function",
  corr: "ans4",
};

var q3 = {
  ques: "What does CSS stand for?",
  a1: "Cascading Style Sheet",
  a2: "Color Style Standard",
  a3: "Coded Semantic Style",
  a4: "Corporate Standard Sheet",
  corr: "ans1",
};

var q4 = {
  ques: "Which of the following is not a semantic HTML element?",
  a1: "header",
  a2: "div",
  a3: "main",
  a4: "aside",
  corr: "ans2",
};

var q5 = {
  ques: "What character is used to denote an array in Javascript?",
  a1: "{}",
  a2: "<>",
  a3: "[]",
  a4: "()",
  corr: "ans3",
};

var questions = [q1, q2, q3, q4, q5];

function setQuestion() {
  var q = questions[currQ];
  questionEl.textContent = q.ques;
  answersEl.children[0].textContent = q.a1;
  answersEl.children[1].textContent = q.a2;
  answersEl.children[2].textContent = q.a3;
  answersEl.children[3].textContent = q.a4;
}

function init() {
  setQuestion();
  startTimer();
}

function startTimer() {
  // Sets timer
  timer = setInterval(function () {
    timeCount--;
    timerEl.textContent = timeCount;
    if (timeCount >= 0) {
      // Tests if win condition is met
      if (won && timeCount > 0) {
        // Clears interval and stops timer
        clearInterval(timer);
        endGame(timeCount);
      }
    }
    // Tests if time has run out
    if (timeCount === 0) {
      // Clears interval
      clearInterval(timer);
      endGame(timeCount);
    }
  }, 1000);
}

function endGame(score) {
  localStorage.setItem("newScore", score);
  console.log(score);
}

init();

answersEl.addEventListener("click", function (event) {
  var element = event.target;

  if (element.matches(".answer")) {
    var response;

    if (element.id == questions[currQ].corr) {
      response = "Correct!";
    } else {
      response = "Wrong!";
      timeCount -= 10;
      timerEl.textContent = timeCount;
    }
    currQ++;
    responseEl.textContent = response;
    if (currQ >= questions.length) {
      won = true;
      console.log("Complete");
    } else {
      setQuestion();
    }
  }
});
