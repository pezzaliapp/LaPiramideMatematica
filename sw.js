/* LaPiramideMatematica SW — cache first, MIT © 2025 PezzaliAPP */
const CACHE = 'piramide-v3'; // bump per evitare cache vecchie
const ASSETS = [
  './',
  './index.html',
  './manifest.json',
  './sw.js',
  './icon-192.png',
  './icon-512.png'
];

self.addEventListener('install', e=>{
  e.waitUntil(caches.open(CACHE).then(c=>c.addAll(ASSETS)));
  self.skipWaiting();
});

self.addEventListener('activate', e=>{
  e.waitUntil(
    caches.keys().then(keys=>Promise.all(
      keys.filter(k=>k!==CACHE).map(k=>caches.delete(k))
    ))
  );
  self.clients.claim();
});

self.addEventListener('fetch', e=>{
  const { request } = e;
  if(request.method!=='GET'){ return; }
  e.respondWith(
    caches.match(request).then(cached => {
      if(cached) return cached;
      return fetch(request).then(resp=>{
        const copy = resp.clone();
        caches.open(CACHE).then(c=>c.put(request, copy)).catch(()=>{});
        return resp;
      }).catch(()=> cached || new Response('Offline', {status:503}));
    })
  );
});
