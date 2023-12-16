const color = document.querySelectorAll(".box");
// console.log(color);
const body = document.querySelector("body");
//   console.log(body);

color.forEach((b) => {
  // console.log(b);
  b.addEventListener("click", (e) => {
    //   console.log(e);
    //   console.log(e.target.id);
    switch (e.target) {
      case e.target:
        body.style.backgroundColor = e.target.id;
        break;
    }
  });
});
