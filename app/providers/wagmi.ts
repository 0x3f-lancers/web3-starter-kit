import { getDefaultConfig } from "@rainbow-me/rainbowkit";
import {
  metaMaskWallet,
  coinbaseWallet,
  walletConnectWallet,
  trustWallet,
} from "@rainbow-me/rainbowkit/wallets";
import { hardhat, mainnet, sepolia } from "wagmi/chains";

// Flags from environment
const enableTestnets = process.env.NEXT_PUBLIC_ENABLE_TESTNETS === "true";
const enableLocalnets = process.env.NEXT_PUBLIC_ENABLE_LOCALNETS === "true";

/**
 * Chain selection with priority:
 * 1. Local network (hardhat) if NEXT_PUBLIC_ENABLE_LOCALNETS=true
 * 2. Testnet if NEXT_PUBLIC_ENABLE_TESTNETS=true
 * 3. Mainnet by default
 *
 * To customize chains:
 * - Replace hardhat, bscTestnet, bsc with your preferred chains
 * - Import from wagmi/chains (e.g., mainnet, sepolia, polygon, etc.)
 */
const chains = enableLocalnets
  ? ([hardhat] as const)
  : enableTestnets
  ? ([sepolia] as const)
  : ([mainnet] as const);

export const config = getDefaultConfig({
  appName: process.env.NEXT_PUBLIC_APP_NAME || "My DApp",
  projectId: process.env.NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID!,
  wallets: [
    {
      groupName: "Wallets",
      wallets: [
        trustWallet,
        metaMaskWallet,
        coinbaseWallet,
        walletConnectWallet,
      ],
    },
  ],
  chains,
  ssr: true,
});
