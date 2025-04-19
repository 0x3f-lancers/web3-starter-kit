// app/utils/blockchain.ts
import { ethers } from "ethers";
import ERC20_ABI from "../../contracts/erc20.json";

export async function getNativeBalance(
  provider: ethers.Provider,
  address: string
) {
  try {
    const balance = await provider.getBalance(address);
    return balance;
  } catch (error) {
    console.error("Error fetching native balance:", error);
    return ethers.parseEther("0");
  }
}

export async function getTokenBalance(
  provider: ethers.Provider,
  tokenAddress: string,
  walletAddress: string
) {
  try {
    const tokenContract = new ethers.Contract(
      tokenAddress,
      ERC20_ABI,
      provider
    );
    const balance = await tokenContract.balanceOf(walletAddress);
    return balance;
  } catch (error) {
    console.error(`Error fetching token balance for ${tokenAddress}:`, error);
    return BigInt(0);
  }
}

export function formatTokenBalance(balance: bigint, decimals: number): string {
  return ethers.formatUnits(balance, decimals);
}
