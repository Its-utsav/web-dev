let randomNumber = parseInt(Math.random() * 100 + 1);
const userNumInput = document.querySelector("#numinput");
const submit = document.querySelector(".btn");
const guessNum = document.querySelector(".guess");
const ans = document.querySelector(".ans");
const restart = document.querySelector(".resultSection");
const remain = document.querySelector(".remain");

const p = document.createElement("p");
//   console.log(userNumInput);
console.log(randomNumber);
let perGuess = [];
let numGuess = 1;

let playGame = true;

if (playGame) {
  console.log(randomNumber);
  submit.addEventListener("click", (e) => {
    e.preventDefault(); // this will not send to the server
    const guess = parseInt(userNumInput.value);
    console.log(typeof guess);
    validateGuess(guess);
  });
}

const validateGuess = (guess) => {
  if (guess < 0 && isNaN(guess)) {
    console.log(`${guess} is less than zero`);
  } else if (guess >= 100) {
    console.log(`${guess} is more than 100`);
  } else {
    perGuess.push();
    if (numGuess === 11) {
      displayGuess(guess);
      displayMsg(`Game Over. Random number was ${randomNumber}.`);
      endGame();
    } else {
      displayGuess(guess);
      checkGuess(guess);
    }
  }
};

const checkGuess = (guess) => {
  if (guess === randomNumber) {
    displayMsg(`you guess right ${guess} is random number.`);
    endGame();
    console.log(`${guess} number is equal to random number.`);
  } else if (guess < randomNumber) {
    displayMsg(`your guess   is TOOO low`);
    //   displayMsg(`your guess  ${guess} is TOOO low`);
    console.log(`${guess} number is less than to random number.`);
  } else if (guess > randomNumber) {
    displayMsg(`your guess  is TOOO high`);
    //   displayMsg(`your guess  ${guess} is TOOO high`);
    console.log(`${guess} number is grater than to random number.`);
  }
};
const displayGuess = (guess) => {
  userNumInput.value = "";
  guessNum.innerHTML += ` ${guess}`;
  numGuess++;
  remain.innerHTML = `${11 - numGuess}`;
};
const displayMsg = (msg) => {
  ans.innerHTML = ` ${msg}`;
};
const endGame = () => {
  userNumInput.setAttribute("disabled", "");
  p.classList.add("button");
  p.innerHTML = `<button id="newgame" class="btn">start agian </button>`;
  restart.appendChild(p);
  playGame = false;
  newGame();
};
const newGame = () => {
  const newGameBtn = document.getElementById("newgame");
  newGameBtn.addEventListener("click", (e) => {
    randomNumber = parseInt(Math.random() * 100 + 1);
    let perGuess = [];
    let numGuess = 1;
    guessNum.innerHTML = "";
    remain.innerHTML = `${11 - numGuess}`;
    userNumInput.removeAttribute("disabled");
    restart.removeChild(p);
    playGame = true;
  });
};
