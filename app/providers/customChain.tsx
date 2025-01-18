import { defineChain } from "@reown/appkit/networks";

export const Loop = defineChain({
  id: 15551,
  name: "Loop",
  assets: {
    imageId: "loop",
    imageUrl: "https://s2.coinmarketcap.com/static/img/coins/64x64/18761.png",
  },
  chainNamespace: "eip155",
  caipNetworkId: "eip155:15551",
  nativeCurrency: { name: "LOOP", symbol: "LOOP", decimals: 18 },
  rpcUrls: {
    default: { http: ["https://api.mainnetloop.com"] },
  },
  blockExplorers: {
    default: { name: "Loop explorer", url: "https://explorer.mainnetloop.com" },
  },
  testnet: true,
  contracts: {
    // Add the contracts here
  },
});

export const testLoop = defineChain({
  id: 14441,
  name: "tLoop",
  chainNamespace: "eip155",
  caipNetworkId: "eip155:1551444151",
  assets: {
    imageId: "tloop",
    imageUrl: "https://s2.coinmarketcap.com/static/img/coins/64x64/18761.png",
  },
  nativeCurrency: { name: "TLOOP", symbol: "tLoop", decimals: 18 },
  rpcUrls: {
    default: { http: ["https://api.testnetloop.com"] },
  },
  blockExplorers: {
    default: { name: "Loop explorer", url: "https://explorer.testnetloop.com" },
  },
  contracts: {
    // Add the contracts here
  },
});
