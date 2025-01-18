"use client";

import * as React from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { WagmiProvider } from "wagmi";
import { RainbowKitProvider } from "@rainbow-me/rainbowkit";
import { config } from "./wagmi";
import "@rainbow-me/rainbowkit/styles.css";
import { customTheme } from "./customTheme";
import { Toaster } from "@/components/ui/sonner";
const queryClient = new QueryClient();

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <RainbowKitProvider
          appInfo={{
            appName: "web3-starter-kit",
            learnMoreUrl: process.env.NEXT_PUBLIC_LEARN_MORE,
          }}
          theme={customTheme}
        >
          {children}
          <Toaster
            closeButton
            toastOptions={{
              style: {
                backgroundColor: "#2A2C37",
                color: "#F6981F",
              },
            }}
          />
        </RainbowKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  );
}
