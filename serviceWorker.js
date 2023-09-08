const CACHE_NAME = "dmorse-app-v1";
const urlsToCache = [
  "/",
  "/index.html",
  "/css/globals.css",
  "/css/classes.css",
  "/js/changeApp.js",
  "/js/decodeMorse.js",
  "/js/encodeText.js",
  "/js/switchTheme.js",
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
