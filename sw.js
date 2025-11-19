/* =====================================================
   VAMA9 Service Worker - Offline Support
   ===================================================== */

const CACHE_NAME = 'vama9-v3';
const RUNTIME_CACHE = 'vama9-runtime-v3';

// Assets to cache immediately on install
const PRECACHE_ASSETS = [
    '/',
    '/index.html',
    '/menu.html',
    '/styles.css',
    '/menu-page.css',
    '/script.js',
    '/Media/Logo1.webp',
    '/Media/afara_vama9.webp',
    '/Media/Interior.webp'
];

// Install event - precache essential assets
self.addEventListener('install', (event) => {
    console.log('[ServiceWorker] Installing...');

    event.waitUntil(
        caches.open(CACHE_NAME)
            .then((cache) => {
                console.log('[ServiceWorker] Precaching app shell');
                return cache.addAll(PRECACHE_ASSETS);
            })
            .then(() => self.skipWaiting())
    );
});

// Activate event - clean up old caches
self.addEventListener('activate', (event) => {
    console.log('[ServiceWorker] Activating...');

    event.waitUntil(
        caches.keys().then((cacheNames) => {
            return Promise.all(
                cacheNames
                    .filter((cacheName) => {
                        return cacheName.startsWith('vama9-') &&
                               cacheName !== CACHE_NAME &&
                               cacheName !== RUNTIME_CACHE;
                    })
                    .map((cacheName) => {
                        console.log('[ServiceWorker] Deleting old cache:', cacheName);
                        return caches.delete(cacheName);
                    })
            );
        }).then(() => self.clients.claim())
    );
});

// Fetch event - serve from cache, fallback to network
self.addEventListener('fetch', (event) => {
    // Skip cross-origin requests
    if (!event.request.url.startsWith(self.location.origin)) {
        return;
    }

    // Skip non-GET requests
    if (event.request.method !== 'GET') {
        return;
    }

    event.respondWith(
        caches.match(event.request).then((cachedResponse) => {
            if (cachedResponse) {
                // Return cached version and update cache in background
                fetchAndCache(event.request);
                return cachedResponse;
            }

            // Not in cache, fetch from network
            return fetchAndCache(event.request);
        })
    );
});

// Helper function to fetch and cache
function fetchAndCache(request) {
    return fetch(request).then((response) => {
        // Don't cache if not a success response
        if (!response || response.status !== 200 || response.type !== 'basic') {
            return response;
        }

        // Clone the response
        const responseToCache = response.clone();

        caches.open(RUNTIME_CACHE).then((cache) => {
            cache.put(request, responseToCache);
        });

        return response;
    }).catch((error) => {
        console.log('[ServiceWorker] Fetch failed:', error);

        // Return offline page if available
        return caches.match('/index.html');
    });
}

// Listen for messages from clients
self.addEventListener('message', (event) => {
    if (event.data && event.data.type === 'SKIP_WAITING') {
        self.skipWaiting();
    }
});
