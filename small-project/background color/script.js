const start = document.getElementById("start");
const end = document.getElementById("stop");

const randomColor = () => {
  const hexValue = "0123456789ABCDEF"; // values of hex color;
  let color = "#";

  for (let i = 0; i < 6; i++) {
    color += hexValue[Math.floor(Math.random() * 16)];
  }
  return color;
};

// code is ok but if i click on start 2 time than background color change so fast without ant resone . sollution line and wiyh // ;)
let intervalID;
const change = () => {
  //
  document.body.style.backgroundColor = randomColor(); //
  console.log(randomColor()); //
}; //

const startChange = () => {
  if (!intervalID) {
    //
    intervalID = setInterval(change, 1000); //
  } //
};

const stopChange = () => {
  clearInterval(intervalID); //
  intervalID = null; //
};
start.addEventListener("click", startChange);
end.addEventListener("click", stopChange);
