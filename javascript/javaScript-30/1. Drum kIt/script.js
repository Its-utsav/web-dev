// const allKey = document.querySelectorAll(".key");

function playSound(e) {
  //   console.log(e);
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);

  if (!audio) {
    return;
  }
  //   console.log(audio);
  audio.currentTime = 0; // for countinue playing
  audio.play();

  //   console.log(key);

  key.classList.add("playing");
}

const key = document.querySelectorAll(".key");
// console.log(key);

function removeTransion(e) {
  //   console.log(e);
  if (e.propertyName !== "transform") {
    return;
  }
  //   console.log(e.propertyName);
  //   console.log(this);
  this.classList.remove("playing");
}
key.forEach((key) => {
  key.addEventListener("transitionend", removeTransion);
});

window.addEventListener("keydown", playSound);
// allKey.addEventListener("click", (e)=>{
//   console.log(e);
// });
