{
  const canvas = stage.querySelector("#ui-layer");
  const ctx = canvas.getContext("2d");

  canvas.offscreen = document.createElement("canvas");
  canvas.offscreen.width = 5100;
  canvas.offscreen.height = 2310;
  const ctxOffscreen = canvas.offscreen.getContext("2d");

  const cardSprites = new Image();
  //cardSprites.src = "img/allCards1024.png";
  cardSprites.src = "img/allCards.svg";
  cardSprites.crossOrigin = "anonymous";
  /*
  const home = stage.querySelector("#home");
  home.addEventListener("click", (event) => {
  });

  const settings = stage.querySelector("#settings");
  home.addEventListener("click", (event) => {
  });
  */

  function parseTime(seconds) {
    let minutes = Math.floor(seconds / 60);
    seconds = seconds % 60;
    if (seconds < 10)
      return `${minutes}:0${seconds}`;
    return `${minutes}:${seconds}`;
  }


  let timerRunning = false;
  let countDown = function (seconds) {
    let timer = setInterval(() => {
      if (seconds == 0) {
        timerRunning = false;
        clearInterval(timer);
      }

      ctx.clearRect(81, 1, 238, 98);
      ctx.fillText(parseTime(seconds), 200, 80, 200);
      
      --seconds;
    }, 1000);
  };

  // Draw timer first time
  (function () {
    ctx.fillStyle = "black";
    ctx.font = "6em sans-serif";
    ctx.textAlign = "center";
    ctx.fillText(parseTime(opt.time), 200, 80, 200);
  })();

  const touchlayer = stage.querySelector("#touch-layer");
  touchlayer.addEventListener("click", (event) => {
    if (!timerRunning) {
      timerRunning = true;
      countDown(opt.time);
    }
  });
/*
  cardSprites.onload = function () {
    ctxOffscreen.drawImage(cardSprites, 0, 0);
    ctx.drawImage(canvas.offscreen, 
        30, 30, 360, 540, 
        app.currentX, app.currentY, app.cardWidth, app.cardHeight)
  };
  */
}

