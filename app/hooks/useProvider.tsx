import { useEthersProvider } from "./useEthersProvider"; // Custom hook to provide ethers.js provider
import { useMemo } from "react"; // React hook for memoizing values to optimize performance

/**
 * A custom hook to provide a consistent ethers.js provider based on the environment configuration.
 * It ensures that during development, the application does not default to the mainnet
 * when the wallet is not connected, addressing a common issue with RainbowKit.
 */
export function useProvider() {
  // Determine the chain ID based on the environment variable `NEXT_PUBLIC_IS_TESTNET`.
  // If the environment is set to use a testnet, chain ID 11155420 (e.g., Sepolia testnet) is used.
  // Otherwise, it defaults to chain ID 1 (Ethereum mainnet).
  const chainID = useMemo(() => {
    return process.env.NEXT_PUBLIC_ENABLE_TESTNET === "true" ? 11155420 : 1;
  }, []);

  // Return the ethers.js provider with the selected chain ID.
  // This ensures the provider aligns with the desired network configuration.
  return useEthersProvider({ chainId: chainID });
}
