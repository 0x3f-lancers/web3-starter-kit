import { Token } from "@/app/providers/wallettypes";

export const defaultTokens: Token[] = [
  {
    symbol: "ETH",
    balance: "1.5",
    value: "2,500",
    change: "+2.5",
    icon: "https://s2.coinmarketcap.com/static/img/coins/64x64/1027.png", // Ethereum icon
  },
  {
    symbol: "USDC",
    balance: "1,000",
    value: "1,000",
    change: "+0.1",
    icon: "https://s2.coinmarketcap.com/static/img/coins/64x64/3408.png", // USDC icon
  },
  {
    symbol: "USDT",
    balance: "500",
    value: "500",
    change: "+0.2",
    icon: "https://s2.coinmarketcap.com/static/img/coins/64x64/825.png", // USDT icon
  },
];
