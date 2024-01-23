const btnInput = document.querySelectorAll(".input-option");
const resetBtn = document.querySelector(".reset-btn");
const win = document.querySelector(".winner");

const winPattern = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [6, 4, 2],
];

let Xturn = true;

const displayWinnner = (winner) => {
    win.style.display = "block" ;
  btnInput.forEach((ele) => {
    ele.disabled = true;
  });
  win.innerHTML = `${winner} is winner`;
  win.style.transition = "all ease 4s"
};

const checkWin = () => {
  for (let i of winPattern) {
    let [ele1, ele2, ele3] = [
      btnInput[i[0]].innerText,
      btnInput[i[1]].innerText,
      btnInput[i[2]].innerText,
    ];
    if (ele1 != "" && ele2 != "" && ele3 != "") {
      if (ele1 == ele2 && ele2 == ele3) {
        console.log("same");
        displayWinnner(ele1);
      }
    }
  }
};

btnInput.forEach((element) => {
  element.addEventListener("click", () => {
    if (Xturn) {
      element.innerText = "X";
      Xturn = false;
      element.disabled = true;
    } else {
      element.innerText = "0";
      Xturn = true;
      element.disabled = true;
    }
    checkWin();
  });
});

resetBtn.addEventListener("click", () => {
  btnInput.forEach((ele) => {
    ele.innerText = null;
    ele.disabled = false;
  });
  win.style.display = "none" ;
});
