// import { Token } from "@/app/providers/wallettypes";
// import { useEffect, useState } from "react";

// export const useGetCustomTokens = (initialTokens: Token[]) => {
//   const [tokens, setTokens] = useState<Token[]>([]); // Tokens state
//   const [isLoading, setIsLoading] = useState(true); // Loading state

//   useEffect(() => {
//     const fetchTokens = async () => {
//       setIsLoading(true);
//       try {
//         // Simulate delay for fetching or processing
//         await new Promise((resolve) => setTimeout(resolve, 500));
//         setTokens(initialTokens); // Use the passed tokens
//       } catch (error) {
//         console.error("Error fetching tokens:", error);
//         setTokens([]); // Fallback to empty array
//       } finally {
//         setIsLoading(false);
//       }
//     };

//     fetchTokens();
//   }, [initialTokens]); // Re-run when initialTokens change

//   return { tokens, isLoading };
// };
import { Token } from "@/app/providers/wallettypes";
import { useEffect, useState } from "react";
import { useAppKitAccount, useAppKitNetworkCore } from "@reown/appkit/react";
import { ethers } from "ethers";
import { useConfig } from "wagmi";
import {
  getNativeBalance,
  getTokenBalance,
  formatTokenBalance,
} from "@/app/utils/blockchain";
import { chainConfigs } from "@/app/components/CustomWallet/CustomToken/data";

// Define properly typed interfaces
interface NativeToken {
  symbol: string;
  name: string;
  decimals: number;
  icon: string;
  coinMarketCapId: string;
  isNative: true;
}

interface ERC20Token {
  symbol: string;
  name: string;
  decimals: number;
  icon: string;
  coinMarketCapId: string;
  address: string;
  isNative?: false;
}

// Union type for all token types
type TokenConfig = NativeToken | ERC20Token;

interface PriceData {
  [id: string]: {
    quote?: {
      USD?: {
        price?: number;
        percent_change_24h?: number;
      };
    };
  };
}

export const useGetCustomTokens = (initialTokens?: Token[]) => {
  const [tokens, setTokens] = useState<Token[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  // Get account and network info from AppKit
  const { address } = useAppKitAccount();
  const { caipNetwork } = useAppKitNetworkCore();

  // Get wagmi config
  const config = useConfig();

  useEffect(() => {
    const fetchTokens = async () => {
      if (!address || !caipNetwork?.id) {
        if (initialTokens && initialTokens.length > 0) {
          setTokens(initialTokens);
        } else {
          setTokens([]);
        }
        setIsLoading(false);
        return;
      }

      setIsLoading(true);

      try {
        const chainId =
          typeof caipNetwork.id === "number"
            ? caipNetwork.id
            : parseInt(caipNetwork.id);

        const chainConfig = chainConfigs[chainId];

        if (!chainConfig) {
          setTokens(initialTokens || []);
          setIsLoading(false);
          return;
        }

        // Get the correct RPC URL from wagmi config for the current chain
        const chain = config.chains.find((c) => c.id === chainId);
        if (!chain) {
          throw new Error(`Chain ${chainId} not configured in wagmi`);
        }

        // Create provider with the correct RPC URL
        const provider = new ethers.JsonRpcProvider(
          chain.rpcUrls.default.http[0]
        );

        // Create properly typed token list
        const nativeToken: NativeToken = {
          symbol: chainConfig.nativeCurrency.symbol,
          name: chainConfig.nativeCurrency.name,
          decimals: chainConfig.nativeCurrency.decimals,
          icon: chainConfig.nativeCurrency.icon,
          coinMarketCapId: chainConfig.nativeCurrency.coinMarketCapId,
          isNative: true,
        };

        const tokenList: TokenConfig[] = [
          nativeToken,
          ...chainConfig.tokens.map((token) => ({
            ...token,
            isNative: false as const,
          })),
        ];

        // Get CoinMarketCap IDs for price fetching
        const coinMarketCapIds = tokenList
          .map((token) => token.coinMarketCapId)
          .join(",");

        // Fetch price data
        let priceData: PriceData = {};
        try {
          const priceResponse = await fetch(
            `/api/token-prices?ids=${coinMarketCapIds}`
          );
          const priceResult = await priceResponse.json();
          priceData = priceResult.data || {};
        } catch (error) {
          console.error("Error fetching token prices:", error);
        }

        // Fetch balances and create token list
        const tokenPromises = tokenList.map(async (tokenConfig) => {
          let rawBalance: bigint;

          if (tokenConfig.isNative) {
            // Native token (ETH, MATIC, etc.)
            rawBalance = await getNativeBalance(provider, address);
          } else {
            // ERC20 token with address
            rawBalance = await getTokenBalance(
              provider,
              tokenConfig.address,
              address
            );
          }

          // Format balance
          const formattedBalance = formatTokenBalance(
            rawBalance,
            tokenConfig.decimals
          );

          // Get price data
          const cmcId = tokenConfig.coinMarketCapId;
          const tokenPriceData = priceData[cmcId] || {};
          const price = tokenPriceData?.quote?.USD?.price || 0;
          const change24h = tokenPriceData?.quote?.USD?.percent_change_24h || 0;

          // Calculate USD value
          const numericBalance = parseFloat(formattedBalance);
          const valueUsd = (numericBalance * price).toLocaleString(undefined, {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
          });

          // Create token object
          const token: Token = {
            symbol: tokenConfig.symbol,
            balance: formattedBalance,
            value: valueUsd,
            change:
              change24h > 0 ? `+${change24h.toFixed(1)}` : change24h.toFixed(1),
            icon: tokenConfig.icon,
            coinMarketCapId: tokenConfig.coinMarketCapId,
          };

          // Add address for ERC20 tokens
          if (!tokenConfig.isNative) {
            token.address = tokenConfig.address;
          }

          return token;
        });

        const fetchedTokens = await Promise.all(tokenPromises);
        setTokens(fetchedTokens);
      } catch (error) {
        console.error("Error fetching tokens:", error);
        setTokens(initialTokens || []);
      } finally {
        setIsLoading(false);
      }
    };

    fetchTokens();
  }, [address, caipNetwork?.id, config, initialTokens]);

  return { tokens, isLoading };
};
