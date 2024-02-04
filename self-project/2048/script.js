const playArea = document.querySelector(".play-area");
const scoreDisaply = document.querySelector(".score");

const box = [];
let score = 0;
//  squares

// function for creating play area
function createPlayArea() {
  for (let i = 0; i < 16; i++) {
    //usually in 2048 game 16 box are availiabel
    let squares = document.createElement("div");
    squares.classList = "play-box";
    squares.innerHTML = 0;
    // all boxes by default value is 0;

    playArea.appendChild(squares);
    box.push(squares);

    // console.log(box);
    // if (squares[i].innerHTML == 0) {
    //   squares.remove();
    // }
  }
  genTwo();
  // in 2048 game number start with 2
}
createPlayArea();

function genTwo() {
  // differntcitae 0 value box
  // if squar value is 0 than it goes in emptyBox array
  let emptyBox = box.filter((squar) => {
    return squar.innerHTML == 0;
  });

  // console.log(emptyBox);

  if (emptyBox.length === 0) {
    console.log("game over");
    chekLose();
    return;
  }

  let randomIndex = Math.floor(Math.random() * emptyBox.length);
  let randomBox = emptyBox[randomIndex];
  randomBox.innerHTML = 2;
  // console.log(randomIndex);
}

//  lose than this function
function chekLose() {
  console.log("nonon");
  alert("You LOSE 😓");
  document.removeEventListener("keydown", control);
}

// for when press on right arrow
function moveRight() {
  // changeColor();;
  for (let i = 0; i < 16; i++) {
    if (i % 4 == 0) {
      let one = parseInt(box[i].innerHTML);
      let two = parseInt(box[i + 1].innerHTML);
      let three = parseInt(box[i + 2].innerHTML);
      let four = parseInt(box[i + 3].innerHTML);

      let row = [one, two, three, four];

      // filletr non -zero boxes
      let filterRow = row.filter((rowvalue) => rowvalue != 0);
      // from non-zero boexes find how many boxes value  is zero
      let missing = 4 - filterRow.length;
      // console.log(missing);

      // fill array with all zero value box with
      let allZero = Array(missing).fill(0);
      // console.log(allZero);

      let newRow = allZero.concat(filterRow);

      // console.log(newRow);

      box[i].innerHTML = newRow[0];
      box[i + 1].innerHTML = newRow[1];
      box[i + 2].innerHTML = newRow[2];
      box[i + 3].innerHTML = newRow[3];
    }
  }
}

function moveleft() {
  for (let i = 0; i < 16; i++) {
    if (i % 4 == 0) {
      let one = parseInt(box[i].innerHTML);
      let two = parseInt(box[i + 1].innerHTML);
      let three = parseInt(box[i + 2].innerHTML);
      let four = parseInt(box[i + 3].innerHTML);

      let row = [one, two, three, four];

      // console.log(row);

      let filterRow = row.filter((rowvalue) => rowvalue != 0);
      let missing = 4 - filterRow.length;
      // console.log(missing);

      let allZero = Array(missing).fill(0);
      // console.log(allZero);

      let newRow = allZero.concat(filterRow);

      // console.log(newRow);

      box[i].innerHTML = newRow[0];
      box[i + 1].innerHTML = newRow[1];
      box[i + 2].innerHTML = newRow[2];
      box[i + 3].innerHTML = newRow[3];
      // console.log(filterRow, missing);
    }
  }
}

function rowSum() {
  for (let i = 0; i < 15; i++) {
    if (box[i].innerHTML == box[i + 1].innerHTML) {
      let comineSum =
        parseInt(box[i].innerHTML) + parseInt(box[i + 1].innerHTML);
      console.log(comineSum);
      box[i].innerHTML = comineSum;
      box[i + 1].innerHTML = 0;
      score += comineSum;
      scoreDisaply.innerHTML = score;
    }
  }
}

function moveUp() {
  for (let i = 0; i < 4; i++) {
    let one = parseInt(box[i].innerHTML);
    let two = parseInt(box[i + 4 * 1].innerHTML);
    let three = parseInt(box[i + 4 * 2].innerHTML);
    let four = parseInt(box[i + 4 * 3].innerHTML);

    let row = [one, two, three, four];

    // console.log(row);

    // console.log(row);

    let filterRow = row.filter((rowvalue) => rowvalue != 0);
    let missing = 4 - filterRow.length;
    // console.log(missing + "i am missing");

    let allZero = Array(missing).fill(0);
    // console.log(allZero + "i am zero");

    let newRow = allZero.concat(filterRow);

    // console.log(newRow + "i am new row");

    box[i].innerHTML = newRow[0];
    box[i + 4 * 1].innerHTML = newRow[1];
    box[i + 4 * 2].innerHTML = newRow[2];
    box[i + 4 * 3].innerHTML = newRow[3];
    // console.log(filterRow, missing);
  }
  changeColor();
}

function moveDown() {
  for (let i = 0; i < 4; i++) {
    let one = parseInt(box[i].innerHTML);
    let two = parseInt(box[i + 4 * 1].innerHTML);
    let three = parseInt(box[i + 4 * 2].innerHTML);
    let four = parseInt(box[i + 4 * 3].innerHTML);

    let row = [one, two, three, four];

    // console.log(row);

    // console.log(row);

    let filterRow = row.filter((rowvalue) => rowvalue != 0);
    let missing = 4 - filterRow.length;
    // console.log(missing + "i am missing");

    let allZero = Array(missing).fill(0);
    // console.log(allZero + "i am zero");

    let newRow = allZero.concat(filterRow);

    // console.log(newRow + "i am new row");

    box[i].innerHTML = newRow[0];
    box[i + 4 * 1].innerHTML = newRow[1];
    box[i + 4 * 2].innerHTML = newRow[2];
    box[i + 4 * 3].innerHTML = newRow[3];
    // console.log(filterRow, missing);
  }
  changeColor();
}

function colSum() {
  for (let i = 0; i < 12; i++) {
    if (box[i].innerHTML == box[i + 4].innerHTML) {
      let comineSum =
        parseInt(box[i].innerHTML) + parseInt(box[i + 4].innerHTML);
      console.log(comineSum);
      box[i].innerHTML = comineSum;
      box[i + 4].innerHTML = 0;
      score += comineSum;
      scoreDisaply.innerHTML = score;
      changeColor();
    }
  }
}

function changeColor() {
  for (let i = 0; i < 16; i++) {
    if (box[i].innerHTML == 4) {
      box[i].style.backgroundColor = "#f72585";
    } else if (box[i].innerHTML == 8) {
      box[i].style.backgroundColor = "#b5179e";
    } else if (box[i].innerHTML == 16) {
      box[i].style.backgroundColor = "#7209b7";
    } else if (box[i].innerHTML == 32) {
      box[i].style.backgroundColor = "#560bad";
    } else if (box[i].innerHTML == 64) {
      box[i].style.backgroundColor = "#480ca8";
    } else if (box[i].innerHTML == 128) {
      box[i].style.backgroundColor = "#3a0ca3";
    } else if (box[i].innerHTML == 256) {
      box[i].style.backgroundColor = "#3f37c9";
    } else if (box[i].innerHTML == 512) {
      box[i].style.backgroundColor = "#4361ee";
    } else if (box[i].innerHTML == 1024) {
      box[i].style.backgroundColor = "green";
    } else if (box[i].innerHTML == 2048) {
      box[i].style.backgroundColor = "#4895ef";
    } else if (box[i].innerHTML == 2) {
      box[i].style.backgroundColor = "#eae2b7";
      console.log(`my posion is `+i);
    } else {
      box[i].style.backgroundColor = "initial";
    }
  }
}

function checkWin() {
  for (let i = 0; i < 16; i++) {
    if (box[i].innerHTML == 2048) {
      console.log("win");
      alert("congratchualtion || You Win ..... 😎🥳");
      document.removeEventListener("keydown", control);
    }
  }
  changeColor();
}

function control(e) {
  {
    if (e.key == "ArrowRight") {
      moveRight();
      genTwo();
      rowSum();
      checkWin();
      changeColor();
    } else if (e.key == "ArrowLeft") {
      moveleft();
      genTwo();
      rowSum();
      checkWin();
      changeColor();
    } else if (e.key == "ArrowUp") {
      moveUp();
      genTwo();
      colSum();
      checkWin();
      changeColor();
    } else if (e.key == "ArrowDown") {
      moveDown();
      genTwo();
      colSum();
      checkWin();
      changeColor();
    }
  }
}
document.addEventListener("keydown", control);

// console.log(box);

const author = document.querySelector(".author-name");

author.addEventListener("click", () => {
  window.open("https://github.com/Its-utsav", "_balnk").focus();
});
