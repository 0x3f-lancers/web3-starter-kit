// import { Token } from "@/app/providers/wallettypes";

// export const defaultTokens: Token[] = [
//   {
//     symbol: "ETH",
//     balance: "1.5",
//     value: "2,500",
//     change: "+2.5",
//     icon: "https://s2.coinmarketcap.com/static/img/coins/64x64/1027.png", // Ethereum icon
//   },
//   {
//     symbol: "USDC",
//     balance: "1,000",
//     value: "1,000",
//     change: "+0.1",
//     icon: "https://s2.coinmarketcap.com/static/img/coins/64x64/3408.png", // USDC icon
//   },
//   {
//     symbol: "USDT",
//     balance: "500",
//     value: "500",
//     change: "+0.2",
//     icon: "https://s2.coinmarketcap.com/static/img/coins/64x64/825.png", // USDT icon
//   },
// ];
import { ChainConfig } from "@/app/providers/wallettypes";

export const chainConfigs: Record<number, ChainConfig> = {
  // Ethereum Mainnet
  1: {
    chainId: 1,
    name: "Ethereum",
    nativeCurrency: {
      symbol: "ETH",
      name: "Ethereum",
      decimals: 18,
      coinMarketCapId: "1027",
      icon: "https://s2.coinmarketcap.com/static/img/coins/64x64/1027.png",
    },
    tokens: [
      {
        symbol: "USDC",
        name: "USD Coin",
        address: "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48",
        decimals: 6,
        coinMarketCapId: "3408",
        icon: "https://s2.coinmarketcap.com/static/img/coins/64x64/3408.png",
      },
      {
        symbol: "USDT",
        name: "Tether",
        address: "0xdAC17F958D2ee523a2206206994597C13D831ec7",
        decimals: 6,
        coinMarketCapId: "825",
        icon: "https://s2.coinmarketcap.com/static/img/coins/64x64/825.png",
      },
    ],
  },

  // Arbitrum
  42161: {
    chainId: 42161,
    name: "Arbitrum",
    nativeCurrency: {
      symbol: "ETH",
      name: "Ethereum",
      decimals: 18,
      coinMarketCapId: "1027", // Same as Ethereum since it's ETH
      icon: "https://s2.coinmarketcap.com/static/img/coins/64x64/1027.png",
    },
    tokens: [
      {
        symbol: "USDC",
        name: "USD Coin",
        address: "0xaf88d065e77c8cC2239327C5EDb3A432268e5831", // Arbitrum USDC address
        decimals: 6,
        coinMarketCapId: "3408",
        icon: "https://s2.coinmarketcap.com/static/img/coins/64x64/3408.png",
      },
      {
        symbol: "USDT",
        name: "Tether",
        address: "0xFd086bC7CD5C481DCC9C85ebE478A1C0b69FCbb9", // Arbitrum USDT address
        decimals: 6,
        coinMarketCapId: "825",
        icon: "https://s2.coinmarketcap.com/static/img/coins/64x64/825.png",
      },
      {
        symbol: "ARB",
        name: "Arbitrum",
        address: "0x912CE59144191C1204E64559FE8253a0e49E6548", // ARB token address
        decimals: 18,
        coinMarketCapId: "11841", // ARB token CoinMarketCap ID
        icon: "https://s2.coinmarketcap.com/static/img/coins/64x64/11841.png",
      },
    ],
  },

  // Sepolia (Ethereum Testnet)
  11155111: {
    chainId: 11155111,
    name: "Sepolia",
    nativeCurrency: {
      symbol: "ETH",
      name: "Sepolia Ethereum",
      decimals: 18,
      coinMarketCapId: "1027", // Using Ethereum's ID since it's testnet ETH
      icon: "https://s2.coinmarketcap.com/static/img/coins/64x64/1027.png",
    },
    tokens: [
      {
        symbol: "USDC",
        name: "USD Coin (Sepolia)",
        address: "0x1c7D4B196Cb0C7B01d743Fbc6116a902379C7238", // Sepolia USDC address
        decimals: 6,
        coinMarketCapId: "3408",
        icon: "https://s2.coinmarketcap.com/static/img/coins/64x64/3408.png",
      },
      {
        symbol: "USDT",
        name: "Tether (Sepolia)",
        address: "0xaA8E23Fb1079EA71e0a56F48a2aA51851D8433D0", // Sepolia USDT address
        decimals: 6,
        coinMarketCapId: "825",
        icon: "https://s2.coinmarketcap.com/static/img/coins/64x64/825.png",
      },
    ],
  },
};
