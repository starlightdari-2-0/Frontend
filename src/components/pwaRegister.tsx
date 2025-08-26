"use client";

import { useEffect } from 'react';

export default function PwaRegister() {
    useEffect(() => {
        if ('serviceWorker' in navigator) {
            navigator.serviceWorker.register('/sw.js')
                .then(registration => {
                    console.log('SW registered: ', registration);
                })
                .catch(registrationError => {
                    console.log('SW registration failed: ', registrationError);
                });
        }
    }, []);

    return null; // 이 컴포넌트는 UI를 렌더링하지 않습니다.
}