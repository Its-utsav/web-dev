const input = document.querySelectorAll("input");

// console.log(input);

function changeValue() {
  const values = this.dataset.size || "";
  
    // console.log(values);
  document.documentElement.style.setProperty(`--${this.name}`,this.value + values);
//   console.log(this.value);
}
input.forEach((inp) => {
  inp.addEventListener("change", changeValue);
});

input.forEach((inp) => {
  inp.addEventListener("input", changeValue);
});
