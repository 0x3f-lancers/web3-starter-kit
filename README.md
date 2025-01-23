# Next.js with Reown Template

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app), integrated with [Reown](https://www.walletconnect.com/) (previously WalletConnect) for seamless multi-chain wallet connection. It's an ideal starting point for building web applications requiring integration with EVM chains, Solana, and Bitcoin.

## Features

- **Next.js 15**: Leverage the latest features of Next.js for fast, efficient, and scalable web development.
- **Reown Integration**: Easy and user-friendly wallet connection, supporting EVM chains, Solana, and Bitcoin.
- **Shadcn/UI Support**: Leverage beautifully styled and accessible UI components.
- **Ethers.js v6**: A powerful and lightweight library for Ethereum interaction.
- **Wagmi**: Simplified hooks and utilities for Ethereum developers.
- **TypeChain**: Strongly-typed smart contract interaction for TypeScript enthusiasts.
- **Font Optimization**: Utilizes [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) for optimized loading of the Inter font, a popular Google Font.
- **Development Ready**: Quick setup with support for various package managers (npm, yarn, pnpm, bun).

## Wallet Connection: Default vs Custom

### Default Reown (AppKit) Wallet Connection

Reown provides a default wallet connection method through its AppKit:

- One-click wallet connection
- Supports multiple chains out of the box
- Minimal configuration required
- Use the default `<appkit-button />` component

### Custom Wallet Connection

Our custom implementation offers:

- More control over the UI and connection flow
- Custom styling and interaction
- Additional features like network switching, address copying, etc.
- Toasts and user-friendly feedback

## Wallet Connection Hooks

### Location

All wallet-related hooks are located in `app/hooks/wallet/`:

1. **useWalletConnection**

   - Primary hook for wallet connection
   - Supports both default and custom connection types
   - Provides methods to open wallet connection
   - Renders connection buttons with different types

   ```typescript
   const { appKit, address, openWalletConnection, WalletConnection } =
     useWalletConnection();
   ```

   - Types:
     - `"default"`: Only AppKit button
     - `"custom"`: Only custom button
     - `"both"`: Both connection methods

2. **useGetAccountSettings**

   - Retrieves account-specific information
   - Fetches balance, network, and connection status
   - Provides action buttons for crypto operations

   ```typescript
   const { address, isConnected, caipNetwork, balance, actionButtons } =
     useGetAccountSettings();
   ```

3. **useGetActivity**

   - Fetches wallet activity events
   - Converts events to an easily consumable array

   ```typescript
   const { activities } = useGetActivity();
   ```

4. **useGetCustomTokens**

   - Manages custom token lists
   - Supports loading and processing tokens

   ```typescript
   const { tokens, isLoading } = useGetCustomTokens(initialTokens);
   ```

5. **useGetNetwork**

   - Handles network selection and switching
   - Provides search and filter functionality for networks

   ```typescript
   const { caipNetwork, searchQuery, filteredNetworks, handleNetworkSwitch } =
     useGetNetwork();
   ```

6. **useGetWalletDetails**

   - Comprehensive wallet details management
   - Handles view navigation, balance, and responsive design

   ```typescript
   const { view, address, balance, navigateTo, handleCopyAddress } =
     useGetWalletDetails();
   ```

7. **useGetWalletHeader**
   - Provides wallet header-specific functionalities
   - Handles address copying and disconnection
   ```typescript
   const { address, handleCopyAddress, handleDisconnect } =
     useGetWalletHeader();
   ```

## Chain Management

### Chain Images and Configuration

#### Location

- Chain-related configurations are in `app/providers/` directory
- Chain images management in `utils/chainImages.ts`

#### Adding Chains

1. **Wagmi Configuration** (`app/providers/wagmi.ts`):

   - Configure supported networks
   - Define chain details (ID, name, RPC URLs)

   ```typescript
   import { defineChain } from "wagmi/chains";

   export const customChain = defineChain({
     id: 12345,
     name: "Custom Network",
     nativeCurrency: { name: "Custom Token", symbol: "CSTM", decimals: 18 },
     rpcUrls: {
       default: { http: ["https://custom-rpc-url.com"] },
     },
   });
   ```

2. **Chain Images** (`utils/chainImages.ts`):
   - Centralized location for chain logo images
   - Supports matching images by chain ID
   - Easy to extend and customize
   ```typescript
   export const getChainImage = (chainId: number) => {
     const chainImages: Record<number, string> = {
       1: "/images/chains/ethereum.png",
       // Add more chain images
     };
     return chainImages[chainId] || "/images/chains/default.png";
   };
   ```

### Custom Chains

- Easily add custom networks
- Supports both standard and unique blockchain configurations
- Integrate with Wagmi and Reown seamlessly

## Getting Started

(Previous getting started section remains the same)

## Learn More

(Previous learn more section remains the same)

## Contributions

Contributions are welcome! Check out the GitHub repository for issues to tackle or submit your own improvements to the template. Together, we can build an even better starting point for multi-chain wallet-integrated applications.

---

Happy building! 🚀
