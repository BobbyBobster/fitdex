{
  const canvas = stage.querySelector("#background-layer");
  const ctx = canvas.getContext("2d");

  // Timer boundary
  //ctx.strokeRect(Math.floor(0.2 * canvas.width), 0, Math.floor(0.6 * canvas.width), 100);
 
  // XXX Card placeholders
  //ctx.strokeRect(app.currentX, app.currentY, app.cardWidth, app.cardHeight);
  //ctx.strokeRect(app.drawX, app.drawY, app.cardWidth, app.cardHeight);
  //ctx.strokeRect(app.discardX, app.discardY, app.cardWidth, app.cardHeight);

  // Drawpile back of cards
  const cardBack = new Image();
  cardBack.src = "img/cardBack.svg";
  cardBack.crossOrigin = "anonymous";
  /*
  cardBack.onload = () => {
    ctx.drawImage(cardBack, 
        0, 0, 360, 540, 
        app.drawX, app.drawY, app.cardWidth, app.cardHeight);
  };
  */
}

