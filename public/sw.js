// 캐시 이름 설정
const CACHE_NAME = 'starlight-dari-pwa-cache-v1';

// 서비스 워커 설치 이벤트
self.addEventListener('install', (event) => {
    console.log('Service Worker: Installing...');
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then((cache) => {
                console.log('Service Worker: Caching files');
                // 오프라인에서 제공할 기본 파일들을 캐싱합니다.
                // 이 파일 목록은 빌드 후 확인하여 업데이트하는 것이 좋습니다.
                return cache.addAll(['/']);
            })
            .catch((err) => {
                console.error('Service Worker: Cache failed', err);
            })
    );
});

// 서비스 워커 활성화 이벤트 (이전 캐시 삭제)
self.addEventListener('activate', (event) => {
    console.log('Service Worker: Activating...');
    event.waitUntil(
        caches.keys().then((cacheNames) => {
            return Promise.all(
                cacheNames.map((cacheName) => {
                    if (cacheName !== CACHE_NAME) {
                        console.log('Service Worker: Deleting old cache', cacheName);
                        return caches.delete(cacheName);
                    }
                })
            );
        })
    );
});

// fetch 이벤트: 네트워크 요청을 가로채서 캐시 또는 네트워크 응답 반환
self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request)
            .then((response) => {
                if (response) {
                    return response;
                }

                return fetch(event.request).then((fetchResponse) => {
                    if (!fetchResponse || fetchResponse.status !== 200 || fetchResponse.type !== 'basic') {
                        return fetchResponse;
                    }
                    const responseToCache = fetchResponse.clone();
                    caches.open(CACHE_NAME).then((cache) => {
                        cache.put(event.request, responseToCache);
                    });
                    return fetchResponse;
                });
            })
    );
});