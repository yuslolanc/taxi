self.addEventListener('install', function(e) {
  e.waitUntil(
    caches.open('taxi-fare-cache').then(function(cache) {
      return cache.addAll([
        './index.html',
        './manifest.json',
        './service-worker.js',
        './icons/icon-192.png',
        './icons/icon-512.png'
      ]);
    })
  );
});
self.addEventListener('fetch', function(e) {
  e.respondWith(
    caches.match(e.request).then(function(response) {
      return response || fetch(e.request);
    })
  );
});
