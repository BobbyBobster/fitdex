{
  const canvas = stage.querySelector("#background-layer");
  const ctx = canvas.getContext("2d");

  // Timer boundary
  ctx.strokeRect(80, 0, 240, 100);
 
  // XXX Card placeholders
  ctx.strokeRect(app.currentX, app.currentY, app.cardWidth, app.cardHeight);
  ctx.strokeRect(app.discardX, app.discardY, app.cardWidth, app.cardHeight);

  // Drawpile back of cards
  const cardBack = new Image();
  cardBack.src = "img/cardBack.svg";
  cardBack.crossOrigin = "anonymous";
  cardBack.onload = function () {
    ctx.drawImage(cardBack, app.drawX, app.drawY);
  };

}

