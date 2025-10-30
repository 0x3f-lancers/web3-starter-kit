// Re-export wagmi, but override useAccount to support a view address.
// This lets us control the active address via env without touching callers.

import { useAccount as wagmiUseAccount } from "wagmi";
export * from "wagmi";

import type { Address } from "viem";
import { isAddress } from "viem";

type WagmiUseAccountReturn = ReturnType<typeof wagmiUseAccount>;

/**
 * Custom useAccount hook that supports view mode.
 *
 * View mode allows you to override the connected wallet address with a specific address
 * for read-only operations. This is useful for:
 * - Testing UI with specific addresses
 * - Viewing data for different wallets without connecting
 * - Development and debugging
 *
 * Configuration:
 * - Set NEXT_PUBLIC_IS_VIEW=true to enable view mode
 * - Set NEXT_PUBLIC_VIEW_ADDRESS to the address you want to view as
 *
 * The override only applies when:
 * 1. View mode is enabled
 * 2. A wallet is actually connected
 * 3. A valid view address is provided
 *
 * @returns Same return type as wagmi's useAccount, but with potentially overridden address
 */
export function useAccount(): WagmiUseAccountReturn {
  const result = wagmiUseAccount();

  // Only override when explicitly enabled and wallet is connected.
  const rawIsView = process.env.NEXT_PUBLIC_IS_VIEW;
  const isView =
    typeof rawIsView === "string" && /^(true|1|yes)$/i.test(rawIsView);

  const rawViewAddress =
    process.env.NEXT_PUBLIC_VIEW_ADDRESS?.trim()?.toLowerCase();
  const viewAddress =
    rawViewAddress && isAddress(rawViewAddress)
      ? (rawViewAddress as Address)
      : undefined;

  const overrideAddress = isView && result.isConnected && viewAddress;

  return {
    ...result,
    address: overrideAddress ? viewAddress : result.address,
  } as WagmiUseAccountReturn;
}
