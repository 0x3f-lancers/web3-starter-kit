import { useCallback, useState } from "react";
import { useProvider } from "./useProvider";
import { TransactionReceipt } from "ethers";

// Define the response type for verifyTransaction function
interface VerifyTransactionResponse {
  receipt: TransactionReceipt | null;
  success: boolean;
}

// Define the return type for the useVerifyTransaction hook
interface UseVerifyTransactionHook {
  verifyTransaction: (tx: {
    hash: string;
  }) => Promise<VerifyTransactionResponse>;
  error: Error | null;
  txLoading: boolean;
}

function useVerifyTransaction(): UseVerifyTransactionHook {
  const [error, setError] = useState<Error | null>(null);
  const [txLoading, setTxLoading] = useState<boolean>(false);
  const provider = useProvider();

  const verifyTransaction = useCallback(
    async (tx: { hash: string }): Promise<VerifyTransactionResponse> => {
      if (provider) {
        try {
          setTxLoading(true);
          const receipt = (await provider.waitForTransaction(
            tx.hash
          )) as TransactionReceipt;
          return {
            receipt, // the transaction receipt details
            success: receipt.status === 1, // the status of the transaction (true if successful)
          };
        } catch (err: any) {
          setError(err);
          throw err;
        } finally {
          setTxLoading(false);
        }
      }
      // Handle the case when provider is not available
      throw new Error("Blockchain provider is not available.");
    },
    [provider]
  );

  return { verifyTransaction, error, txLoading };
}

export default useVerifyTransaction;
