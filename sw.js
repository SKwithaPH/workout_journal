const CACHE_NAME = 'workout-journal-v2';
const PRECACHE_ASSETS = [
  './',
  './index.html',
  'https://cdn.tailwindcss.com',
  'https://unpkg.com/dexie@latest/dist/dexie.js',
  'https://i.giphy.com/CpgNjk2E54p7W.gif'
];

// 1. Pre-cache critical application resources on install
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(PRECACHE_ASSETS);
    })
  );
  self.skipWaiting();
});

// 2. Clear old caches when updating service worker versions
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames
          .filter((name) => name !== CACHE_NAME)
          .map((name) => caches.delete(name))
      );
    }).then(() => self.clients.claim())
  );
});

// 3. Stale-While-Revalidate / Cache-First strategy
self.addEventListener('fetch', (event) => {
  // Skip non-GET requests or browser extensions
  if (event.request.method !== 'GET') return;

  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      // Return cached version if found, while fetching fresh copy in background
      const fetchPromise = fetch(event.request)
        .then((networkResponse) => {
          if (networkResponse && networkResponse.status === 200) {
            const responseToCache = networkResponse.clone();
            caches.open(CACHE_NAME).then((cache) => {
              cache.put(event.request, responseToCache);
            });
          }
          return networkResponse;
        })
        .catch(() => {
          // Silent catch when offline
        });

      return cachedResponse || fetchPromise;
    })
  );
});
