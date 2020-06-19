const stage = document.querySelector("#stage");
const width = window.innerWidth;
const height = window.innerHeight;
stage.querySelectorAll("canvas").forEach((canvas) => {
  canvas.width = width;
  canvas.height = height;
});

const app = {
  cardWidth: Math.floor(0.5 * width),
  cardHeight: Math.floor(1.5 * 0.5 * width),
  currentX: Math.floor(0.25 * width),
  currentY: Math.floor(0.25 * height),
  discardX: -Math.floor(0.25 * width) + 20,
  discardY: Math.floor(0.85 * height),
  drawX: Math.floor(0.75 * width) - 20,
  drawY: Math.floor(0.85 * height)
}

const opt = {
  time: 60
}


