import { Token } from "@/app/providers/wallettypes";
import { useEffect, useState } from "react";

export const useGetCustomTokens = (initialTokens: Token[]) => {
  const [tokens, setTokens] = useState<Token[]>([]); // Tokens state
  const [isLoading, setIsLoading] = useState(true); // Loading state

  useEffect(() => {
    const fetchTokens = async () => {
      setIsLoading(true);
      try {
        // Simulate delay for fetching or processing
        await new Promise((resolve) => setTimeout(resolve, 500));
        setTokens(initialTokens); // Use the passed tokens
      } catch (error) {
        console.error("Error fetching tokens:", error);
        setTokens([]); // Fallback to empty array
      } finally {
        setIsLoading(false);
      }
    };

    fetchTokens();
  }, [initialTokens]); // Re-run when initialTokens change

  return { tokens, isLoading };
};
