{
  const canvas = stage.querySelector("#card-layer");
  const ctx = canvas.getContext("2d");

  canvas.offscreen = document.createElement("canvas");
  canvas.offscreen.width = 250;
  canvas.offscreen.height = 340;
  const ctxOffscreen = canvas.offscreen.getContext("2d");

  const cardSprites = new Image();
  cardSprites.src = "img/cards/2C.svg";
  cardSprites.crossOrigin = "anonymous";
  cardSprites.onload = () => {
    ctxOffscreen.drawImage(cardSprites, 0, 0);
  };

  const play = document.querySelector("#play");
  play.addEventListener("click", (event) => {
    document.querySelectorAll("#explanation p").forEach((element) => {
      element.style = "display: none";
    });
    //nextCard();
    play.remove();
  });

  const settings = document.querySelector("#settings");
  settings.addEventListener("click", (event) => {
  });

  const next = document.querySelector("#next");
  const exerciseInfo = document.querySelector("#exercise p");
  next.addEventListener("click", (event) => {
    //nextCard();
  });


  const drawTimer = () => {
    ctx.fillStyle = "black";
    ctx.font = "5em sans-serif";
    ctx.textAlign = "center";
    ctx.fillText(parseTime(opt.time), timerBox.x + 0.5 * timerBox.width, 80, timerBox.width);
  };
  const timerBox = {
    x: Math.floor(0.2 * canvas.width),
    y: 0,
    width: Math.floor(0.6 * canvas.width),
    height: 100
  };

  let timerRunning = false;
  const countDown = (seconds) => {
    const timer = setInterval(() => {
      if (seconds == 0) {
        timerRunning = false;
        clearInterval(timer);
      }

      ctx.clearRect(timerBox.x + 1, timerBox.y + 1, timerBox.width - 2, timerBox.height - 2);
      ctx.fillText(parseTime(seconds), timerBox.x + 0.5 * timerBox.width, 80, timerBox.width);
      
      --seconds;
    }, 1000);
  };
}

