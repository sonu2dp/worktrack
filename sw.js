var CACHE="wt-pro-v1";
self.addEventListener("install",function(e){self.skipWaiting();e.waitUntil(caches.open(CACHE).then(function(c){return c.addAll(["index.html","manifest.json","icon-192.png","icon-512.png"]);}));});
self.addEventListener("activate",function(e){self.clients.claim();e.waitUntil(caches.keys().then(function(k){return Promise.all(k.filter(function(x){return x!==CACHE;}).map(function(x){return caches.delete(x);}));}));});
self.addEventListener("fetch",function(e){e.respondWith(caches.match(e.request).then(function(r){return r||fetch(e.request);}));});
