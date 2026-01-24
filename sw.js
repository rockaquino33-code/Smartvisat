const CACHE_VERSION = 'elisa-v1';
const ASSETS = [
  '/',
  '/index.html',
  '/offline.html',
  '/styles.css',
  '/manifest.json',
  '/assets/icons/icon-192.png',
  '/assets/icons/icon-512.png'
];

self.addEventListener('install', e => {
  self.skipWaiting();
  e.waitUntil(caches.open(CACHE_VERSION).then(cache => cache.addAll(ASSETS)));
});

self.addEventListener('activate', e => {
  clients.claim();
  e.waitUntil(caches.keys().then(keys => 
    Promise.all(keys.filter(k => k !== CACHE_VERSION).map(k => caches.delete(k)))
  ));
});

self.addEventListener('fetch', e => {
  if (e.request.method !== 'GET') return;

  if (e.request.mode === 'navigate') {
    e.respondWith(
      fetch(e.request)
        .then(res => { const copy = res.clone(); caches.open(CACHE_VERSION).then(c => c.put(e.request, copy)); return res; })
        .catch(() => caches.match('/offline.html'))
    );
    return;
  }

  e.respondWith(
    caches.match(e.request).then(cached => {
      if (cached) return cached;
      return fetch(e.request).then(networkRes => {
        return caches.open(CACHE_VERSION).then(cache => { cache.put(e.request, networkRes.clone()); return networkRes; });
      }).catch(() => { if (e.request.destination === 'image') return caches.match('/assets/icons/icon-192.png'); });
    })
  );
});
