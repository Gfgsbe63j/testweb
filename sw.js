/* =====================================================
   VAMA9 Service Worker - Offline Support
   ===================================================== */

const CACHE_VERSION = '4';
const CACHE_NAME = `vama9-v${CACHE_VERSION}`;
const RUNTIME_CACHE = `vama9-runtime-v${CACHE_VERSION}`;
const CACHE_MAX_AGE = 7 * 24 * 60 * 60 * 1000; // 7 days in milliseconds

// Assets to cache immediately on install
const PRECACHE_ASSETS = [
    '/',
    '/index.html',
    '/menu.html',
    `/styles.css?v=${CACHE_VERSION}`,
    `/menu-page.css?v=${CACHE_VERSION}`,
    `/script.js?v=${CACHE_VERSION}`,
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
        Promise.all([
            // Remove old cache versions
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
            }),
            // Clean up stale entries from runtime cache
            cleanupOldCacheEntries()
        ]).then(() => {
            console.log('[ServiceWorker] Activated and cleaned up');
            return self.clients.claim();
        })
    );
});

// Fetch event - network-first for HTML, cache-first for assets
self.addEventListener('fetch', (event) => {
    // Skip cross-origin requests
    if (!event.request.url.startsWith(self.location.origin)) {
        return;
    }

    // Skip non-GET requests
    if (event.request.method !== 'GET') {
        return;
    }

    const url = new URL(event.request.url);
    const isHTMLRequest = event.request.headers.get('accept')?.includes('text/html') ||
                          url.pathname.endsWith('.html') ||
                          url.pathname === '/';

    if (isHTMLRequest) {
        // Network-first strategy for HTML files
        event.respondWith(
            fetch(event.request)
                .then((response) => {
                    // Clone and cache the response
                    const responseToCache = response.clone();
                    caches.open(RUNTIME_CACHE).then((cache) => {
                        cache.put(event.request, responseToCache);
                    });
                    return response;
                })
                .catch(() => {
                    // Fallback to cache if network fails
                    return caches.match(event.request).then((cachedResponse) => {
                        return cachedResponse || caches.match('/index.html');
                    });
                })
        );
    } else {
        // Cache-first strategy with freshness check for static assets (CSS, JS, images)
        event.respondWith(
            caches.open(RUNTIME_CACHE).then((cache) => {
                return cache.match(event.request).then((cachedResponse) => {
                    const fetchPromise = fetch(event.request)
                        .then((networkResponse) => {
                            // Only cache successful responses
                            if (networkResponse && networkResponse.status === 200 && networkResponse.type === 'basic') {
                                cache.put(event.request, networkResponse.clone());
                            }
                            return networkResponse;
                        })
                        .catch((error) => {
                            console.log('[ServiceWorker] Fetch failed, using cache:', error);
                            return cachedResponse || caches.match('/index.html');
                        });

                    // Check if cached response is still fresh
                    if (cachedResponse) {
                        const cachedDate = new Date(cachedResponse.headers.get('date') || 0);
                        const now = new Date();
                        const age = now - cachedDate;

                        // If cache is fresh (less than MAX_AGE), return it immediately
                        // Otherwise, return cache but update in background
                        if (age < CACHE_MAX_AGE) {
                            return cachedResponse;
                        }
                    }

                    // No cached response or stale cache, wait for network
                    return fetchPromise;
                });
            })
        );
    }
});

// Cleanup old runtime cache entries
async function cleanupOldCacheEntries() {
    const cache = await caches.open(RUNTIME_CACHE);
    const requests = await cache.keys();
    const now = new Date();

    for (const request of requests) {
        const response = await cache.match(request);
        if (response) {
            const cachedDate = new Date(response.headers.get('date') || 0);
            const age = now - cachedDate;

            // Remove entries older than MAX_AGE
            if (age > CACHE_MAX_AGE) {
                console.log('[ServiceWorker] Removing stale cache entry:', request.url);
                await cache.delete(request);
            }
        }
    }
}

// Listen for messages from clients
self.addEventListener('message', (event) => {
    if (event.data && event.data.type === 'SKIP_WAITING') {
        self.skipWaiting();
    }
});
