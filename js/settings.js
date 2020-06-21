{
  const explanation = document.querySelector("#explanation");
  const text = explanation.querySelector("#text");

  let settingsOpen = false;
  const settings = document.querySelector("#settings");
  settings.addEventListener("click", (event) => {
    if (!settingsOpen) {
    } else {
      text.style = "display:;";
    }
  });
}

