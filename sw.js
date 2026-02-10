const CACHE_NAME = 'v1-caqueta-edu';
const URLS_PARA_GUARDAR = [
  'index.html',
  'manifest.json',
  'https://tu-cuenta.blob.core.windows.net/clases/guia1.pdf',
  'https://tu-cuenta.blob.core.windows.net/clases/video1.mp4'
];

self.addEventListener('install', (e) => {
  e.waitUntil(caches.open(CACHE_NAME).then((c) => c.addAll(URLS_PARA_GUARDAR)));
});

self.addEventListener('fetch', (e) => {
  e.respondWith(caches.match(e.request).then((res) => res || fetch(e.request)));
});
