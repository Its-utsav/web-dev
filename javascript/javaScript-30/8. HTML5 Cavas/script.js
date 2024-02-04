const canvas = document.querySelector("#draw");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
const ctx = canvas.getContext("2d");

ctx.strokeStyle = "red";
ctx.lineJoin = "round";
ctx.lineCap = "round";
ctx.lineWidth = 50;

let isDraw = false;
let dir = true;
let lastX = 0;
let lastY = 0;
let color = 0;

function draw(e) {
  if (!isDraw) return; // to stop drawing
  ctx.beginPath();
  ctx.strokeStyle = `hsl(${color},100%,50%)`;
  ctx.moveTo(lastX, lastY);
  ctx.lineTo(e.offsetX, e.offsetY);
  ctx.stroke();
  [lastX, lastY] = [e.offsetX, e.offsetY];

  // work but drawing start from 0th X and 0th Y
  
  //   console.log(e);
  color++;

  if (color >= 360) color = 0;

  if (ctx.lineWidth >= 100 || ctx.lineWidth <= 1) dir = !dir;

  if (dir) ctx.lineWidth++;
  else ctx.lineWidth--;
}

canvas.addEventListener("mousemove", draw);

canvas.addEventListener("mousedown", (e) => {
  isDraw = true;
  [lastX, lastY] = [e.offsetX, e.offsetY];
  // now drwaing dont start from 0
});

canvas.addEventListener("mouseup", () => (isDraw = false));
canvas.addEventListener("mouseout", () => (isDraw = false));
