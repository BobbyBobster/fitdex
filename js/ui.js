{
  const canvas = stage.querySelector("#ui-layer");
  const ctx = canvas.getContext("2d");

  canvas.offscreen = document.createElement("canvas");
  canvas.offscreen.width = 250;
  canvas.offscreen.height = 340;
  const ctxOffscreen = canvas.offscreen.getContext("2d");

  const cardSprites = new Image();
  cardSprites.src = "img/cards/2C.svg";
  cardSprites.crossOrigin = "anonymous";
  cardSprites.onload = function () {
    ctxOffscreen.drawImage(cardSprites, 0, 0);
  };

  const settings = document.querySelector("#settings");
  settings.addEventListener("click", (event) => {
  });

  const next = document.querySelector("#next");
  const exerciseInfo = document.querySelector("#exercise p");
  next.addEventListener("click", (event) => {
    document.querySelectorAll("#explanation p").forEach((element) => {
      element.style = "display: none";
    });
    ctx.drawImage(canvas.offscreen, 
        0, 0, 241, 336, 
        app.currentX, app.currentY, app.cardWidth, app.cardHeight)
    exercise.innerHTML = "15 Pushups";
  });


  function parseTime(seconds) {
    let minutes = Math.floor(seconds / 60);
    seconds = seconds % 60;
    if (seconds < 10)
      return `${minutes}:0${seconds}`;
    return `${minutes}:${seconds}`;
  }

  const timerBox = {
    x: Math.floor(0.2 * canvas.width),
    y: 0,
    width: Math.floor(0.6 * canvas.width),
    height: 100
  };

  let timerRunning = false;
  let countDown = function (seconds) {
    let timer = setInterval(() => {
      if (seconds == 0) {
        timerRunning = false;
        clearInterval(timer);
      }

      ctx.clearRect(timerBox.x + 1, timerBox.y + 1, timerBox.width - 2, timerBox.height - 2);
      ctx.fillText(parseTime(seconds), timerBox.x + 0.5 * timerBox.width, 80, timerBox.width);
      
      --seconds;
    }, 1000);
  };

  // Draw timer first time
  (function () {
    ctx.fillStyle = "black";
    ctx.font = "5em sans-serif";
    ctx.textAlign = "center";
    //ctx.fillText(parseTime(opt.time), timerBox.x + 0.5 * timerBox.width, 80, timerBox.width);
    ctx.fillText("♠️♥️♣️♦️", timerBox.x + 0.5 * timerBox.width, 80, timerBox.width);
  }); // XXX to activate add ()

  // XXX Merge this with the exercise info eventlistener. The one of arrow button.
  /*
  const touchlayer = stage.querySelector("#touch-layer");
  touchlayer.addEventListener("click", (event) => {
    if (!timerRunning) {
      timerRunning = true;
      countDown(opt.time);
    }
  });
  */

}

