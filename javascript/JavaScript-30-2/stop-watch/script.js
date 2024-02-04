const time = document.querySelector(".time");
const stopBtn = document.querySelector(".stop-btn");
const start = document.querySelector(".start-btn");
const reset = document.querySelector(".reset-btn");

let [second, min, hour] = [0, 0, 0];
// intianll value for second, minute, hour

let stopTime;
// for clearing intervel
time.style.display = "none";

function stopWatch() {
  second++;

  if (second === 60) {
    second = 0;
    min++;
    if (min == 60) {
      min = 0;
      hour++;
    }
  }
  // for making  "00" : "00" : "00"
  // if any of value in less-than 10 so it shuold be
  // 01 .... to 09 after it will be 10 and .... 59
  let s = second < 10 ? "0" + second : second;
  let m = min < 10 ? "0" + min : min;
  let h = hour < 10 ? "0" + hour : hour;

  time.innerHTML = `${h}:${m}:${s}`;
}

start.addEventListener("click", () => {
  time.style.display = "block";
  stopTime = setInterval(stopWatch, 1000);
});

stopBtn.addEventListener("click", () => {
  clearInterval(stopTime);
});

reset.addEventListener("click", () => {
  [second, min, hour] = [0, 0, 0];
  time.innerHTML = `${hour}:${min}:${second}`;
  clearInterval(stopTime);
});
