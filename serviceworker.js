var CACHE_NAME = 'mdl-portfolio-cache-v1';
var urlsToCache = [
  '/',
  '/index.html',
  '/css/style.css',
  '/js/app.js',
  '/img/*',
  'https://fonts.googleapis.com/css?family=Roboto:400,700',
  'https://code.getmdl.io/1.3.0/material.blue_grey-blue.min.css',
  'https://code.getmdl.io/1.3.0/material.min.js'
];

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open('first-app')
      .then(function(cache) {
        cache.addAll([
          '/',
          '/index.html',
          '/src/css/style.css',
          '/src/js/app.js'
        ])
      })
  );
  return self.clients.claim();
});


self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request)
      .then(function(res) {
        if (response) {
        return res;
        } else {
          return fetch(event.request);
        }})
  );
});


