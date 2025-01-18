"use client";

import { wagmiAdapter, projectId } from "./wagmi";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { createAppKit } from "@reown/appkit/react";
import { mainnet } from "@reown/appkit/networks";
import React, { type ReactNode } from "react";
import { cookieToInitialState, WagmiProvider, type Config } from "wagmi";
import { Toaster } from "@/components/ui/sonner";
import "@reown/appkit-wallet-button/react";
import { Loop, testLoop } from "./customChain";

// Set up queryClient
const queryClient = new QueryClient();

if (!projectId) {
  throw new Error("Project ID is not defined");
}

// Set up metadata
const metadata = {
  name: "web3-starter-kit",
  description: "web3 starter kit with reown(wallet connect)",
  url: "https://reown.com/appkit", // origin must match your domain & subdomain
  icons: ["https://assets.reown.com/reown-profile-pic.png"],
};

// Create the modal
createAppKit({
  adapters: [wagmiAdapter],
  projectId,
  networks: [mainnet, Loop, testLoop],
  defaultNetwork: mainnet,
  metadata: metadata,
  features: {
    analytics: true, // Optional - defaults to your Cloud configuration
    swaps: true,
    send: true,
    receive: true,
    legalCheckbox: false,
    onramp: true,
    history: true,
    email: true,
    socials: ["x", "discord", "github", "google", "farcaster"],
    allWallets: true,
  },
  chainImages: {
    1: "https://s2.coinmarketcap.com/static/img/coins/64x64/1027.png",
    15551: "https://s2.coinmarketcap.com/static/img/coins/64x64/18761.png",
    14441: "https://s2.coinmarketcap.com/static/img/coins/64x64/18761.png",
  },
  connectorImages: {
    MetaMask: "https://s2.coinmarketcap.com/static/img/coins/64x64/1027.png",
  },
  termsConditionsUrl: "https://www.mytermsandconditions.com",
  privacyPolicyUrl: "https://www.myprivacypolicy.com",
});

function Providers({
  children,
  cookies,
}: {
  children: ReactNode;
  cookies: string | null;
}) {
  const initialState = cookieToInitialState(
    wagmiAdapter.wagmiConfig as Config,
    cookies
  );

  return (
    <WagmiProvider
      config={wagmiAdapter.wagmiConfig as Config}
      initialState={initialState}
    >
      <QueryClientProvider client={queryClient}>
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
      </QueryClientProvider>
    </WagmiProvider>
  );
}

export default Providers;
