"use client";

import React from 'react';
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import NightSky from "../components/nightsky";
import { AlbumProvider } from "../context/AlbumContext";

const queryClient = new QueryClient();

export default function Providers({ children }: { children: React.ReactNode }) {
    return (
        <QueryClientProvider client={queryClient}>
            <AlbumProvider>
                <NightSky />
                {children}
            </AlbumProvider>
        </QueryClientProvider>
    );
}