// const questions = [
//   {
//     question: "Which is the larges animal in the world ?",
//     anser: [
//       { text: "Shark", correct: false },
//       { text: "Blue Whale", correct: true },
//       { text: "Elephant", orrect: false },
//       { text: "Giraffe", correct: false },
//     ],
//   },
//   {
//     question: "Which is the larges animal in the world ?",
//     anser: [
//       { text: "Shark", correct: false },
//       { text: "Blue Whale", correct: true },
//       { text: "Elephant", orrect: false },
//       { text: "Giraffe", correct: false },
//     ],
//   },
// ];

// const questionElem = document.querySelector(".que");
// const anserBtn = document.querySelector(".options");
// const nextBtn = document.querySelector(".next-btn");

// let currentQuestionIndex = 0;
// let score = 0;

// function startQuiz() {
//   currentQuestionIndex = 0;
//   score = 0;
//   nextBtn.innerHTML = "Next";
//   showQue();
// }

// function showQue() {
//   resetQue();
//   let currentQuestion = questions[currentQuestionIndex];
//   let questionNum = currentQuestionIndex + 1;
//   questionElem.innerHTML = questionNum + "." + currentQuestion.question;

//   currentQuestion.anser.forEach((ans) => {
//     const btn = document.createElement("button");
//     btn.innerHTML = ans.text;
//     btn.classList.add("btn");
//     anserBtn.appendChild(btn);
//     if (ans.correct) {
//       btn.dataset.correct = ans.correct;
//     }
//     btn.addEventListener("click", checkAns);
//   });
// }

// function checkAns(e) {
//   const selectBtn = e.target;
//   const isCorrect = selectBtn.dataset.correct === "true";
//   if (isCorrect) {
//     selectBtn.classList.add("correct");
//     score++;
//   } else {
//     selectBtn.classList.add("incorrect");
//   }

//   Array.from(anserBtn.children).forEach((btn) => {
//     if (btn.dataset.correct === "true") {
//       btn.classList.add("correct");
//     }
//     btn.disabled = "true";
//   });

//   nextBtn.style.display = "block";
// }

// function showScore() {
//   resetQue();
//   questionElem.innerHTML = ` you Scored ${score} out of ${questions.length}`;
//   nextBtn.innerHTML = "play again";
//   nextBtn.style.display = "block";
// }

// function nextQuestion() {
//   currentQuestionIndex++;
//   if (currentQuestionIndex < questions.length) {
//     showQue();
//   } else {
//     showScore();
//   }
// }

// nextBtn.addEventListener("click", () => {
//   if (currentQuestionIndex < questions.length) {
//     nextQuestion();
//   } else {
//     startQuiz();
//   }
// });

// function resetQue() {
//   nextBtn.style.display = "none";

//   while (anserBtn.firstChild) {
//     anserBtn.removeChild(anserBtn.firstChild);
//   }
// }

// startQuiz();

const questionElem = document.querySelector(".que");
const anserBtns = document.querySelector(".options");
const nextBtn = document.querySelector(".next-btn");
const answer1 = document.querySelector(".ans1");
const answer2 = document.querySelector(".ans2");
const answer3 = document.querySelector(".ans3");
const answer4 = document.querySelector(".ans4");

// // link - https://opentdb.com/

const apiUrl = "https://opentdb.com/api.php?amount=10&type=multiple";

let data = {};
let questionNum = 0;
let correctAns;

// calling the api url
// async function because data come from any server
async function callApi() {
  const respose = await fetch(apiUrl);
  if (respose.status >= 200 && respose.status <= 299) {
    data = await respose.json();
    console.log(data);

    // if data sucessfull recive than
    getQuestion(data);
  } else {
    console.error("some thing wrong");
  }
}

callApi();

function shuffleAns(array) {
  for (let i = array.length - 1; i > 0; i++) {
    let s = Math.floor(Math.random() * (1 + i));
    [array[i], array[s]] = [[array[s], array[i]]];
  }
}
function getQuestion(data) {
  // if data come then next btn must be hide
  nextBtn.style.display = "none";

  let result = data.results[questionNum];
  // result store current question
  console.log(result.correct_answer);
  if (questionNum <= 9) {
    questionElem.innerHTML = result.question;
    correctAns = result.correct_answer;
    // console.log(correctAns);
    const answer = [...result.incorrect_answers, correctAns];
    console.log(answer);
    shuffleAns(answer);
    answer1.innerHTML = `${answer[0]}`;
    answer2.innerHTML = `${answer[1]}`;
    answer3.innerHTML = `${answer[2]}`;
    answer4.innerHTML = `${answer[3]}`;
    questionNum++;
  }
  // console.log(result.question);
}
