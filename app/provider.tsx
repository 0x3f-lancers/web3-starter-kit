"use client";

import * as React from "react";
import { RainbowKitProvider, getDefaultWallets } from "@rainbow-me/rainbowkit";
import { configureChains, createConfig, WagmiConfig } from "wagmi";
import { bsc, bscTestnet } from "wagmi/chains";
import { publicProvider } from "wagmi/providers/public";
import { jsonRpcProvider } from "wagmi/providers/jsonRpc";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

const { chains, publicClient, webSocketPublicClient } = configureChains(
  [
    ...(process.env.NEXT_PUBLIC_ENABLE_TESTNET === "true"
      ? [bscTestnet]
      : [bsc]),
  ],
  [
    publicProvider(),
    jsonRpcProvider({
      rpc: (chain) => ({
        http: ``, // Add RPC URL
      }),
    }),
  ]
);

const projectId = "0x123456"; // Change the projectId

const { connectors } = getDefaultWallets({
  appName: "Template",
  projectId,
  chains,
});

const demoAppInfo = {
  appName: "Template",
};

const wagmiConfig = createConfig({
  autoConnect: true,
  connectors,
  publicClient,
  webSocketPublicClient,
});

export function Providers({ children }: { children: React.ReactNode }) {
  const [mounted, setMounted] = React.useState(false);
  React.useEffect(() => setMounted(true), []);
  return (
    <WagmiConfig config={wagmiConfig}>
      <RainbowKitProvider chains={chains} appInfo={demoAppInfo}>
        {mounted && children}
        <ToastContainer />
      </RainbowKitProvider>
    </WagmiConfig>
  );
}
