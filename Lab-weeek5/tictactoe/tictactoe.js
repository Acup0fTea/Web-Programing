// get the table and its cells
const table = document.querySelector("table");
const cells = table.querySelectorAll("td");
const heading = document.querySelector("h1");
const resetBtn = document.getElementById("reset");

// set up game state
let currentPlayer = "X";
let gameState = ["", "", "", "", "", "", "", "", ""];

// winning combinations
const wins = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8], // horizontal wins
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8], // vertical wins
  [0, 4, 8],
  [2, 4, 6], // diagonal wins
];

// utility function to check if a player has won
function checkWin(player) {
  for (let i = 0, len = wins.length; i < len; i++) {
    const win = wins[i];
    if (
      gameState[win[0]] === player &&
      gameState[win[1]] === player &&
      gameState[win[2]] === player
    ) {
      return true;
    }
  }
  return false;
}

// utility function to check if the board is full
function checkTie() {
  return gameState.every((cell) => cell !== "");
}

// utility function to reset the game
function resetGame() {
  currentPlayer = "X";
  gameState = ["", "", "", "", "", "", "", "", ""];
  cells.forEach((cell) => (cell.innerText = ""));
  heading.innerHTML = "Tic Tac Toe";
}

// utility function for bot to make a random move
function botMove() {
  if (currentPlayer !== "O") {
    return;
  }
  const availableMoves = gameState.reduce(
    (acc, cell, index) => (cell === "" ? [...acc, index] : acc),
    []
  );
  const randomIndex = Math.floor(Math.random() * availableMoves.length);
  const move = availableMoves[randomIndex];
  gameState[move] = "O";
  cells[move].innerHTML = "O";
  currentPlayer = "X";
  if (checkWin("O")) {
    heading.innerHTML = "Bot wins!";
    return;
  }
  if (checkTie()) {
    heading.innerHTML = "It's a tie!";
    return;
  }
}

// add event listeners to the cells
cells.forEach((cell, index) => {
  cell.addEventListener("click", () => {
    if (gameState[index] !== "" || currentPlayer !== "X") {
      return;
    }
    gameState[index] = "X";
    cell.innerHTML = "X";
    if (checkWin("X")) {
      heading.innerHTML = "You win!";
      return;
    }
    if (checkTie()) {
      heading.innerHTML = "It's a tie!";
      return;
    }
    currentPlayer = "O";
    setTimeout(botMove, 50); // bot makes a move after a delay
  });
});

// add event listener to the reset button
resetBtn.addEventListener("click", resetGame);
