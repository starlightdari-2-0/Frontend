"use client";

import React from 'react';
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import NightSky from "../components/nightsky";
import { AlbumProvider } from "../context/AlbumContext";
import { ThemeProvider } from "styled-components";
import { theme } from "../styles/theme";

const queryClient = new QueryClient();

export default function Providers({ children }: { children: React.ReactNode }) {
    return (
        <QueryClientProvider client={queryClient}>
            <ThemeProvider theme={theme}>
                <AlbumProvider>
                    <NightSky />
                    {children}
                </AlbumProvider>
            </ThemeProvider>
        </QueryClientProvider>
    );
}