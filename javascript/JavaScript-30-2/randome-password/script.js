const button = document.querySelector(".btn");
const display = document.querySelector(".display-pass");
const cpy = document.querySelector(".copy");

function genPass() {
  let pass = "";
  let str =
    "abcdefghijklmopqrstuvwxyz" +
    "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!@#$%&()_";
  let length = str.length;
  for (let i = 1; i <= 8; i++) {
    let char = Math.floor(Math.random() * length + 1);
    pass += str.charAt(char);
  }
  return pass;
}

function displayPass() {
  const password = genPass();
  display.textContent = password;
}

function cooypass() {
  const pass = display.textContent;
  navigator.clipboard
    .writeText(pass)
    .then(() => {
      alert(`${pass} copy to clipboard`);
    })
    .catch((error) => {
      alert(`some thing wrong ${error}`);
    });
}

button.addEventListener("click", displayPass);
cpy.addEventListener("click", cooypass);
