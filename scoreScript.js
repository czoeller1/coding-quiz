var board = document.querySelector(".board");

var clearBtn = document.querySelector(".clear");
var backBtn = document.querySelector(".return");

var scores = JSON.parse(localStorage.getItem("scoreBoard"));
if (scores == null) {
  scores = [];
}

function displayBoard() {
  for (var i = 0; i < scores.length; i++) {
    var temp = document.createElement("li");
    temp.textContent = "" + scores[i].name + " - " + scores[i].score;
    board.appendChild(temp);
  }
}

displayBoard();

clearBtn.addEventListener("click", function () {
  localStorage.removeItem("scoreBoard");
  scores = [];
  while (board.firstChild) {
    board.removeChild(board.firstChild);
  }

  displayBoard();
});

backBtn.addEventListener("click", function () {
  document.location.href = "index.html";
});
