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
}

export interface CustomToken {
  address: string;
  symbol: string;
  decimals: number;
  icon?: string;
}

export interface WalletHeaderProps {
  address: string;
  balance: string;
  network: string;
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
