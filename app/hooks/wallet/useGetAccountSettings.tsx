import { useAppKit, useAppKitNetworkCore } from "@reown/appkit/react";
import { useAccount, useBalance } from "wagmi";
import { formatBalance } from "@/app/utils/format";

export const useGetAccountSettings = () => {
  const { open } = useAppKit();
  const { address, isConnected } = useAccount();
  const { caipNetwork } = useAppKitNetworkCore();

  const {
    data: balance,
    isLoading,
    error,
  } = useBalance({
    address,
    chainId: typeof caipNetwork?.id === "number" ? caipNetwork.id : undefined,
  });

  const actionButtons = [
    {
      label: "Buy crypto",
      icon: "CreditCard",
      view: "OnRampProviders" as const,
      gradient: "from-purple-500 to-pink-500",
    },
    {
      label: "Swap",
      icon: "ArrowLeftRight",
      view: "Swap" as const,
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      label: "Send",
      icon: "Send",
      view: "Send" as const,
      gradient: "from-green-500 to-emerald-500",
    },
    {
      label: "Receive",
      icon: "Clock",
      view: "Receive" as const,
      gradient: "from-orange-500 to-yellow-500",
    },
  ];

  return {
    address,
    isConnected,
    caipNetwork,
    balance,
    isLoading,
    error,
    actionButtons,
    open,
  };
};
