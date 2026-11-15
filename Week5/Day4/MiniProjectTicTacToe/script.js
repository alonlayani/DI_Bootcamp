const winCombos = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [6, 4, 2],
];

let board = Array(9).fill(null); // keeps track of what is in each box
let humanSymbol = null;
let computerSymbol = null;
let level = "easy";
let gameOver = true;

const cells = [...document.querySelectorAll(".cell")];
const message = document.getElementById("message");
const restartBtn = document.getElementById("restart");
const setup = document.getElementById("setup");

// ---------- helpers ----------
// reduce: indexes of the boxes played by a given symbol
const playedBy = (b, symbol) =>
  b.reduce((acc, value, index) => (value === symbol ? [...acc, index] : acc), []);

const emptyCells = (b) => b.reduce((acc, value, index) => (value === null ? [...acc, index] : acc), []);

const findWinner = (b, symbol) => {
  const plays = playedBy(b, symbol);
  return winCombos.find((combo) => combo.every((i) => plays.includes(i))) || null;
};

// ---------- setup ----------
document.querySelectorAll(".level-btn").forEach((btn) =>
  btn.addEventListener("click", () => {
    level = btn.dataset.level;
    document.querySelectorAll(".level-btn").forEach((b) => b.classList.toggle("selected", b === btn));
  })
);

document.querySelectorAll(".symbol-btn").forEach((btn) =>
  btn.addEventListener("click", () => {
    humanSymbol = btn.dataset.symbol;
    computerSymbol = humanSymbol === "X" ? "O" : "X";
    startGame();
  })
);

const startGame = () => {
  board = Array(9).fill(null);
  cells.forEach((cell) => {
    cell.textContent = "";
    cell.classList.remove("win");
  });
  gameOver = false;
  setup.hidden = true;
  restartBtn.hidden = true;
  message.textContent = `You are ${humanSymbol} (${level}). Your turn!`;
};

restartBtn.addEventListener("click", () => {
  setup.hidden = false;
  restartBtn.hidden = true;
  gameOver = true;
  message.textContent = "Pick X or O to start";
});

// ---------- turns ----------
const play = (index, symbol) => {
  board[index] = symbol;
  cells[index].textContent = symbol;
};

const checkOutcome = () => {
  const humanWin = findWinner(board, humanSymbol);
  const computerWin = findWinner(board, computerSymbol);
  const combo = humanWin || computerWin;

  if (combo) {
    combo.forEach((i) => cells[i].classList.add("win"));
    message.textContent = humanWin ? "You win! 🎉" : "The computer wins 🤖";
  } else if (emptyCells(board).length === 0) {
    message.textContent = "Tie game";
  } else {
    return false;
  }
  gameOver = true;
  restartBtn.hidden = false;
  return true;
};

cells.forEach((cell, index) =>
  cell.addEventListener("click", () => {
    if (gameOver || board[index] !== null) return;
    play(index, humanSymbol);
    if (checkOutcome()) return;

    message.textContent = "Computer is thinking...";
    setTimeout(() => {
      play(computerMove(), computerSymbol);
      if (!checkOutcome()) message.textContent = "Your turn!";
    }, 300);
  })
);

// ---------- computer ----------
const computerMove = () => (level === "easy" ? randomMove() : bestMove());

// Easy: random free box
const randomMove = () => {
  const free = emptyCells(board);
  return free[Math.floor(Math.random() * free.length)];
};

// Hard: minimax algorithm -> the computer never loses
const minimax = (b, isComputerTurn, depth = 0) => {
  if (findWinner(b, computerSymbol)) return 10 - depth;
  if (findWinner(b, humanSymbol)) return depth - 10;
  const free = emptyCells(b);
  if (free.length === 0) return 0;

  const scores = free.map((i) => {
    const next = [...b];
    next[i] = isComputerTurn ? computerSymbol : humanSymbol;
    return minimax(next, !isComputerTurn, depth + 1);
  });
  return isComputerTurn ? Math.max(...scores) : Math.min(...scores);
};

const bestMove = () => {
  const free = emptyCells(board);
  const { index } = free
    .map((i) => {
      const next = [...board];
      next[i] = computerSymbol;
      return { index: i, score: minimax(next, false, 1) };
    })
    .reduce((best, move) => (move.score > best.score ? move : best));
  return index;
};
