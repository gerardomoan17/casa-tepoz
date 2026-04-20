const CACHE = "casas-v1";
const ASSETS = [
  "/casa-tepoz/",
  "/casa-tepoz/index.html",
  "/casa-tepoz/manifest.json",
  "/casa-tepoz/icon.png"
];

self.addEventListener("install", e => {
  e.waitUntil(
    caches.open(CACHE).then(c => c.addAll(ASSETS))
  );
});

self.addEventListener("fetch", e => {
  e.respondWith(
    caches.match(e.request).then(r => r || fetch(e.request))
  );
});
