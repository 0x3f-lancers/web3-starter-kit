import { Chain } from "@rainbow-me/rainbowkit";

export const Loop = {
  id: 15551,
  name: "Loop",
  iconUrl: "https://s2.coinmarketcap.com/static/img/coins/64x64/18761.png",
  iconBackground: "#fff",
  nativeCurrency: { name: "LOOP", symbol: "LOOP", decimals: 18 },
  rpcUrls: {
    default: { http: ["https://api.mainnetloop.com"] },
  },
  blockExplorers: {
    default: { name: "Loop explorer", url: "https://explorer.mainnetloop.com" },
  },
  contracts: {
    multicall3: {
      address: "0xca11bde05977b3631167028862be2a173976ca11",
      blockCreated: 11_907_934,
    },
  },
} as const satisfies Chain;

export const testLoop = {
  id: 14441,
  name: "tLoop",
  iconUrl: "https://s2.coinmarketcap.com/static/img/coins/64x64/18761.png",
  iconBackground: "#fff",
  nativeCurrency: { name: "LOOP", symbol: "LOOP", decimals: 18 },
  rpcUrls: {
    default: { http: ["https://api.testnetloop.com"] },
  },
  blockExplorers: {
    default: { name: "Loop explorer", url: "https://explorer.testnetloop.com" },
  },
  contracts: {
    multicall3: {
      address: "0xca11bde05977b3631167028862be2a173976ca11",
      blockCreated: 11_907_934,
    },
  },
} as const satisfies Chain;
