{
  const canvas = stage.querySelector("#card-layer");
  const ctx = canvas.getContext("2d");

  canvas.offscreen = document.createElement("canvas");
  canvas.offscreen.width = 250;
  canvas.offscreen.height = 340;
  const ctxOffscreen = canvas.offscreen.getContext("2d");


  const settings = document.querySelector("#settings");
  settings.addEventListener("click", (event) => {
  });


  let deck = createDeck();
  const exerciseInfo = document.querySelector("#exercise p");
  const visualInfo = document.querySelector("#visual");
  let preloaded = new Image();
  preloaded.crossOrigin = "anonymous";
  const nextCard = () => {
    if (deck.length === 0)
      return;

    const card = deck.pop();
    if (preloaded.src !== "") {
      ctx.drawImage(preloaded, app.currentX, app.currentY, app.cardWidth, app.cardHeight);
    } else {
      const img = new Image();
      img.src = card.imagePath;
      img.crossOrigin = "anonymous";
      img.onload = () => {
        ctx.drawImage(img, app.currentX, app.currentY, app.cardWidth, app.cardHeight);
      };
    }
    if (deck.length !== 0)
      preloaded.src = deck[deck.length - 1].imagePath;
    
    visualInfo.innerText = card.visual;
    //exerciseInfo.innerText = card.name;
    exerciseInfo.innerText = `Do ${card.number} ${card.exercise}!`;
    //loadCard(deck[deck.length - 1]);
  };

  const endOfDeck = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    document.querySelectorAll("#explanation p").forEach((element) => {
      element.style = "visibility: visible;";
    });
    play.style = "display:;";
    document.querySelector("#next").style = "visibility: hidden;";
  };

  const play = document.querySelector("#play");
  play.addEventListener("click", (event) => {
    document.querySelectorAll("#explanation p").forEach((element) => {
      element.style = "visibility: hidden;";
    });
    play.style = "display: none;";
    document.querySelector("#next").style = "visibility: visible;";
    
    deck = createDeck();
    preloaded = new Image();
    nextCard();
  });

  const next = document.querySelector("#next");
  next.addEventListener("click", (event) => {
    if (deck.length === 0) {
      endOfDeck();
      return;
    }

    nextCard();
  });

}

  /*
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
  */

