import type { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
    return {
        name: '별빛다리',
        short_name: '별빛다리',
        description: '반려동물과의 소중한 순간을 기록하고 반짝이는 별로 간직하세요.',
        lang: 'ko-KR',
        start_url: '/',
        display: 'standalone',
        background_color: '#ffffff',
        theme_color: '#000000',
        icons: [
            {
                // src: '/icon-192x192.png',
                src: '/starlight-logo.png',
                sizes: '192x192',
                type: 'image/png',
            },
            {
                // src: '/icon-512x512.png',
                src: '/starlight-logo.png',
                sizes: '512x512',
                type: 'image/png',
            },
        ],
    }
}