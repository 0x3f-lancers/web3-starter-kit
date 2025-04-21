import React, { useEffect } from "react";
import { useAppKit, useAppKitAccount } from "@reown/appkit/react";
import { motion } from "framer-motion";
import { toast, Toaster } from "sonner"; // Import toast and Toaster

import { Button } from "@/components/ui/button"; // Custom button component
import WalletDetails from "@/app/components/CustomWallet/WalletDetails";
// Global toast state
let hasShownWalletConnectedToast = false;
// Hook for wallet connection logic
export const useWalletButton = () => {
  const appKit = useAppKit();
  const { address } = useAppKitAccount();

  const openWalletButton = async () => {
    try {
      await appKit.open();
    } catch (error) {
      console.error("Failed to connect wallet:", error);
      toast.error("Failed to connect wallet!");
    }
  };

  // Set cookie when connected
  useEffect(() => {
    if (address) {
      if (!hasShownWalletConnectedToast) {
        toast.success("LoggedIn successfully!");
        hasShownWalletConnectedToast = true;
      }
    } else {
      hasShownWalletConnectedToast = false;
    }
  }, [address]);

  // Render components based on type
  const WalletButton = ({ type = "both" }) => (
    <div className="flex flex-row justify-center space-x-2 sm:space-x-4">
      {(type === "custom" || type === "both") && (
        <motion.div whileHover={{ scale: 1.02 }}>
          {!address && (
            <Button
              onClick={openWalletButton}
              className="bg-blue-600 text-white font-bold py-2 sm:py-5 px-4 rounded-full text-sm sm:text-base shadow hover:bg-blue-600 transition-all"
            >
              Connect Wallet
            </Button>
          )}
          {address && <WalletDetails />}
        </motion.div>
      )}

      {(type === "appkit" || type === "both") && (
        <div className="bg-black rounded-full">
          {/* Default AppKit Button */}
          {/* @ts-ignore */}
          <appkit-button />
        </div>
      )}
    </div>
  );

  return { appKit, address, openWalletButton, WalletButton };
};

// WalletButton.js
// export { useWalletButton };
