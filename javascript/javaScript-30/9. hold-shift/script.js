const checkBox = document.querySelectorAll('input[type="checkbox"]');

let lastCheck;

function handleCheck(e) {
  let bt = false;
  if (e.shiftKey && this.checked) {
    checkBox.forEach((checkbox) => {
      if (checkbox === this || checkbox === lastCheck) {
        bt = !bt;
      }
      if (bt) {
        checkbox.checked = true;
      }
    });
  }
  lastCheck = this;
}

checkBox.forEach((check) => {
  check.addEventListener("click", handleCheck);
});
