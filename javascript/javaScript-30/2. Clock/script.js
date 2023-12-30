const sec = document.querySelector(".sec");
const min = document.querySelector(".min");
const hou = document.querySelector(".hour");

function setTime() {
  const nowTime = new Date();
  const second = nowTime.getSeconds();
  const secondDeg = (second / 60) * 360 + 90;
  sec.style.transform = `rotate(${secondDeg}deg)`;

  const minutes = nowTime.getMinutes();
  const minutesDeg = (minutes / 60) * 360 + 90;
  min.style.transform = `rotate(${minutesDeg}deg)`;

  const hour = nowTime.getHours();
  const hourDeg = (hour / 60) * 360 + 90;
  hou.style.transform = `rotate(${hourDeg}deg)`;
}

setInterval(setTime, 1000);

// from digital clock

const digiClockSel = document.querySelector('.digit-clock');

setInterval(() => {
    const time = new Date();
    digiClockSel.innerHTML = time.toLocaleTimeString();
}, 1000);