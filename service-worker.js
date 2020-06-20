const fileCache = "fitdexCache";
const filesToCache = [
  "/index.html",
  "/styles.css",
  "/js/app.js",
  "/js/ui.js",
  "/js/cards.js",
  "/js/background.js",
  "/img/cardBack.svg",
  "/img/cards/2S.svg",
  "/img/cards/2H.svg",
  "/img/cards/2C.svg",
  "/img/cards/2D.svg",
  "/img/cards/3S.svg",
  "/img/cards/3H.svg",
  "/img/cards/3C.svg",
  "/img/cards/3D.svg",
  "/img/cards/4S.svg",
  "/img/cards/4H.svg",
  "/img/cards/4C.svg",
  "/img/cards/4D.svg",
  "/img/cards/5S.svg",
  "/img/cards/5H.svg",
  "/img/cards/5C.svg",
  "/img/cards/5D.svg",
  "/img/cards/6S.svg",
  "/img/cards/6H.svg",
  "/img/cards/6C.svg",
  "/img/cards/6D.svg",
  "/img/cards/7S.svg",
  "/img/cards/7H.svg",
  "/img/cards/7C.svg",
  "/img/cards/7D.svg",
  "/img/cards/8S.svg",
  "/img/cards/8H.svg",
  "/img/cards/8C.svg",
  "/img/cards/8D.svg",
  "/img/cards/9S.svg",
  "/img/cards/9H.svg",
  "/img/cards/9C.svg",
  "/img/cards/9D.svg",
  "/img/cards/10S.svg",
  "/img/cards/10H.svg",
  "/img/cards/10C.svg",
  "/img/cards/10D.svg",
  "/img/cards/AS.svg",
  "/img/cards/AH.svg",
  "/img/cards/AC.svg",
  "/img/cards/AD.svg",
  "/img/cards/JS.svg",
  "/img/cards/JH.svg",
  "/img/cards/JC.svg",
  "/img/cards/JD.svg",
  "/img/cards/QS.svg",
  "/img/cards/QH.svg",
  "/img/cards/QC.svg",
  "/img/cards/QD.svg",
  "/img/cards/KS.svg",
  "/img/cards/KH.svg",
  "/img/cards/KC.svg",
  "/img/cards/KD.svg"
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(fileCache).then((cache) => {
//      console.log("[ServiceWorker] Caching");
      return cache.addAll(filesToCache);
    })
  );
});

self.addEventListener("fetch", (event) => {
  //console.log(event.request.url);
});

  /* // Other way by google tutorial
  event.respondWith(
    caches.match(event.request)
    .then((response) => {
      return response || fetch(event.request);
    })
  );
  */

