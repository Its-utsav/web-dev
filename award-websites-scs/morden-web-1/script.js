// for locomotive
const scroll = new LocomotiveScroll({
  el: document.querySelector(".main"),
  // here el that elemetns that we want to give smooth animation , so we select main
  smooth: true,
});

// for mouseFollow

let timeout;

function skewMouse() {
  // default value of mouse scale , mouse pre,
  let xScale = 1;
  let yScale = 1;

  let Xpre = 0;
  let Ypre = 0;

  window.addEventListener("mousemove", (e) => {
    clearTimeout(timeout);
    let xDiff = e.clientX - Xpre;
    let yDiff = e.clientY - Ypre;

    Xpre = e.clientX;
    Ypre = e.clientY;

    xScale = gsap.utils.clamp(0.6, 1.4, xDiff);
    yScale = gsap.utils.clamp(0.6, 1.4, yDiff);

    followMouse(xScale, yScale);

    timeout = setTimeout(() => {
      document.querySelector(
        ".mini-circle"
      ).style.transform = `translate(${e.clientX}px,${e.clientY}px) scale(1, 1)`;
    }, 100);
  });
}

function followMouse(x, y) {
  window.addEventListener("mousemove", function (e) {
    // console.log(e); // to see clinetx and clienty
    // console.log(e.clientX , e.clientY);
    document.querySelector(
      ".mini-circle"
    ).style.transform = `translate(${e.clientX}px,${e.clientY}px) scale(${x}, ${y})`;
  });
  // console.log(x, y);
}

skewMouse();
// followMouse();

function fPageAnime() {
  let t1 = gsap.timeline();

  t1.from(".main", {
    y: -10,
    opacity: 0,
    ease: Expo,
    duration: 1.7,
  })
    .to(".bunding-ele", {
      y: 0,
      stagger: 0.2,
      ease: 0,
      duration: 0.9,
    })
    .from(".heror-foot", {
      y: -10,
      ease: 0,
      opacity: 0,
      delay: -1,
      duration: 1.4,
    });

  // console.log(t1);
}

fPageAnime();

// hover effect

const elements = document.querySelectorAll(".elem");

elements.forEach((el) => {
  el.addEventListener("mousemove", (e) => {
    let topDiff = e.clientY - el.getBoundingClientRect().top;
    // console.log(topDiff);
    gsap.to(el.querySelector("img"), {
      opacity: 1,
      ease: Power1,
      top: topDiff,
      left: e.clientY,
    });
  });
});
