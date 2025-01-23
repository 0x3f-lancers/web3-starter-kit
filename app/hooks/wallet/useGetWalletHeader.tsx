import { useAppKit, useAppKitNetworkCore } from "@reown/appkit/react";
import { useAccount, useDisconnect } from "wagmi";
import { toast } from "sonner";

export const useGetWalletHeader = () => {
  const appKit = useAppKit(); // Access ReOwn AppKit
  const { caipNetwork } = useAppKitNetworkCore();
  const { address } = useAccount();
  const { disconnect } = useDisconnect();

  const handleCopyAddress = () => {
    if (address) {
      navigator.clipboard.writeText(address);
      toast.success("Address copied to clipboard!");
    }
  };

  const handleDisconnect = () => {
    disconnect();
    toast.success("Wallet disconnected successfully!");
  };

  const openSettings = () => {
    appKit.open(); // Opens ReOwn account settings
  };

  return {
    address,
    caipNetwork,
    handleCopyAddress,
    handleDisconnect,
    openSettings,
  };
};
