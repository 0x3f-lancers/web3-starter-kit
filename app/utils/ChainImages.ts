export const getChainImage = (chainId: number): string => {
  switch (chainId) {
    case 1: // Ethereum Mainnet
      return "https://s2.coinmarketcap.com/static/img/coins/128x128/1027.png";
    case 15551: // Loop
      return "https://s2.coinmarketcap.com/static/img/coins/128x128/18761.png";
    case 42161: // Arbitrum One
      return "https://s2.coinmarketcap.com/static/img/coins/128x128/11841.png";
    case 11155111: // Sepolia Testnet
      return "https://s2.coinmarketcap.com/static/img/coins/128x128/9721.png"; // Sepolia image from CoinMarketCap
    case 14441: // tLoop Testnet
      return "https://s2.coinmarketcap.com/static/img/coins/128x128/18761.png";
    default: // Placeholder for unknown chains
      return "https://s2.coinmarketcap.com/static/img/coins/128x128/825.png"; // Placeholder image from CoinMarketCap
  }
};
