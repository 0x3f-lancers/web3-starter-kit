import { getDefaultConfig } from "@rainbow-me/rainbowkit";
import { mainnet, sepolia } from "viem/chains";

export const config = getDefaultConfig({
  appName: "web3-starter-kit", // Change the appName
  projectId: process.env.NEXT_PUBLIC_PROJECT_ID!, // Change the projectId
  chains: [
    mainnet,
    ...(process.env.NEXT_PUBLIC_ENABLE_TESTNET === "true" ? [sepolia] : []),
  ],
  ssr: true,
});
