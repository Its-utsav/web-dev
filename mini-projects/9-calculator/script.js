const btns = document.querySelectorAll(".btn");
const cInput = "";
const display = document.querySelector(".display-area");

btns.forEach(function (btn) {
  btn.addEventListener("click", abc(btn));function abc(lol) {
    display.innerHTML = lol.innerHTML;
   
  }
});


