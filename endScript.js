var p = document.querySelector(".answer");
var submit = document.querySelector("#submit");
var score = localStorage.getItem("newScore");
var initials = document.querySelector("#initials");
p.textContent = "You received a score of " + score + " points";

submit.addEventListener("click", function (event) {
  event.preventDefault();

  var scoreBoard = localStorage.getItem("scoreBoard");
  if (scoreBoard !== null) {
    scoreBoard = JSON.parse(scoreBoard);
    scoreBoard.push({ name: initials.value, score: score });
  } else {
    scoreBoard = [{ name: initials.value, score: score }];
  }
  localStorage.setItem("scoreBoard", JSON.stringify(scoreBoard));

  window.location.href = "scoreBoard.html";
});

document.querySelector(".score").addEventListener("click", function () {
  document.location.href = "scoreBoard.html";
});
