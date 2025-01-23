/**
 * Format balance to a fixed number of decimal places
 * @param balance The big number balance (e.g., 3.689755810058728561)
 * @param decimals Number of decimal places to display (default is 2)
 * @returns Formatted balance string
 */
export function formatBalance(balance: number, decimals = 2): string {
  return balance.toFixed(decimals); // Round to specified decimals
}
export const compactHash = (hash: string): string =>
  hash?.slice(0, 4) + "..." + hash?.slice(-6);
