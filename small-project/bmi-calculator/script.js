const height = document.getElementById("height");
const weigth = document.getElementById("weigth");
// console.log(height);
// console.log(weigth);
height.addEventListener("input", (heinp) => {
  // console.log(typeof heinp.target.value);
  bmi(heinp.target.value, weigth.value);
});
weigth.addEventListener("input", (weinp) => {
  // console.log(typeof weinp.target.value);
  bmi(height.value, weinp.target.value);
});
const bmi = (heinp, weinp) => {
  heinp = parseInt(heinp);
  weinp = parseInt(weinp);
  // console.log(typeof heinp);
  // console.log(typeof weinp);

  if (!isNaN(heinp) && !isNaN(weinp)) {
    //   console.log(heinp * weinp);
    const bmi = weinp / (heinp / 100) ** 2;
    result.innerHTML = `<span>Your BMI is ${bmi}</span>`;
  }
};
