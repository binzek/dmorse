const CACHE_NAME = "dmorse-app-v1";
const urlsToCache = [
  "/",
  "/index.html",
  "/404.html",
  "/css/globals.css",
  "/css/classes.css",
  "/js/app.js",
  "/js/switchTheme.js",
  "/js/changeApp.js",
  "/js/encodeText.js",
  "/js/decodeMorse.js",
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      cache.addAll(urlsToCache);
    })
  );
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((res) => {
      return res || fetch(event.request);
    })
  );
});
