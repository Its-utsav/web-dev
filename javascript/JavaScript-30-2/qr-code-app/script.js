const button = document.querySelector(".btn");

const userInput = document.querySelector("#input-txt");
const userInputColor = document.querySelector("#input-color");
const qrCode = document.querySelector(".qr-code");

// function for random color
function randomColor() {
  let hexValues = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += hexValues[Math.floor(Math.random() * 16)];
  }
  return color;
}

// check that is user select white color or not .

function checkSameColor() {
  if (userInputColor.value === "#ffffff") {
    userInputColor.value = randomColor();
  }

  return userInputColor.value;
}

// this will genrate qr
function genQrCode() {
  console.log("clicked");

  const currentqr = document.createElement("div");
  currentqr.classList.add("c");
  new QRCode(currentqr, {
    text: userInput.value,
    width: 128,
    height: 128,
    colorDark: checkSameColor(),
    colorLight: "#ffffff",
    correctLevel: QRCode.CorrectLevel.H,
  });

  qrCode.append(currentqr);
  //   console.log(qrCode);
  console.log(qrCode.lastChild);

  //   console.log(qrCode);
  console.log(qrCode.firstElementChild);

  if (qrCode.childElementCount > 1) {
    qrCode.firstElementChild.remove();
  }
}

button.addEventListener("click", () => {
  if (userInput.value !== "") {
    genQrCode();
  } else {
    alert(`entre some data`);
  }
});
