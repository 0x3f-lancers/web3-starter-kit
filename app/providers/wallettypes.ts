export interface Network {
  id: number;
  name: string;
  icon: string;
  chainId: string;
}

export interface Token {
  symbol: string;
  balance: string;
  value: string;
  change: string;
  icon: string;
  coinMarketCapId: string;
  address?: string;
}

export interface CustomToken {
  address: string;
  symbol: string;
  decimals: number;
  icon?: string;
}

export interface WalletHeaderProps {
  address: string;
  // network: string;
  onCloseSheet?: () => void;
  onNetworkClick: () => void;
  onSettingsClick: () => void;
}

export interface NetworkSelectorProps {
  onBack: () => void;
}

export interface CustomActivityEvent {
  type: string;
  description: string;
  timeStamp: string;
}
// app/config/chainTokens.ts
export interface TokenConfig {
  symbol: string;
  name: string;
  address: string; // Contract address
  decimals: number;
  coinMarketCapId: string; // ID for price data
  icon: string;
}

export interface ChainConfig {
  chainId: number;
  name: string;
  nativeCurrency: {
    symbol: string;
    name: string;
    decimals: number;
    coinMarketCapId: string;
    icon: string;
  };
  tokens: TokenConfig[];
}
