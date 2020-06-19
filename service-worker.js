const cacheName = "fitdexCache";
const filesToCache = [
  "/index.html",
  "/styles.css",
  "/js/app.js",
  "/js/ui.js",
  "/js/cards.js",
  "/js/background.js",
  "/img/cardBack.svg",
  "/img/allCards.svg"
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(cacheName).then((cache) => {
      console.log("[ServiceWorker] Caching");
      return cache.addAll(filesToCache);
    })
  );
});

self.addEventListener("fetch", (event) => {
  console.log(event.request.url);
});

  /* // Other way by google tutorial
  event.respondWith(
    caches.match(event.request)
    .then((response) => {
      return response || fetch(event.request);
    })
  );
  */

