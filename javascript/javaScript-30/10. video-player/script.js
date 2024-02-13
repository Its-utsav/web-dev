// get elements

const player = document.querySelector(".player");
const video = document.querySelector(".vid");

const progress = document.querySelector(".progerss");
const progressBar = document.querySelector(".progerss_filed");

const toggel = document.querySelector(".toggel-play");

const Btn = document.querySelectorAll("[data-skip]");

const ranges = document.querySelectorAll(".player_slider");
const playBackRanges = document.querySelector(".playerBackRate");

//

playBackRanges.max = +video.duration;

console.log(+video.duration);

// document.createAttribute('max')

function playPause() {
  if (video.paused) {
    video.play();
    playBackRanges.max = +video.duration;
    playBackRanges.value = video.currentTime; 
    console.log(+video.duration);
  } else {
    video.pause();
  }
}

video.addEventListener("click", playPause);
video.addEventListener("play", changePlay);
video.addEventListener("pause", changePause);

function changePlay() {
  if (toggel.classList.contains("fa-play")) {
    toggel.classList.replace("fa-play", "fa-pause");
    console.log("chage");
    playBackRanges.value = video.currentTime; 
    // console.log(video.currentTime);
    // console.log(playBackRanges.value);
  }
}

function changePause() {
  if (toggel.classList.contains("fa-pause")) {
    console.log("chag e 2");

    toggel.classList.replace("fa-pause", "fa-play");
  }
}

Btn.forEach((btn) => {
  btn.addEventListener("click", function () {
    video.currentTime += +this.dataset.skip;
    // playBackRanges.value = +this.dataset.skip;
  });
});
