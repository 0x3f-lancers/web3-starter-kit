import { useState, useEffect } from "react";
import { useAppKitAccount, useAppKitNetworkCore } from "@reown/appkit/react";
import { useBalance } from "wagmi";
import { toast } from "sonner";
import { getNetworkColor } from "@/app/utils/DynamicColour";

export const useGetWalletDetails = () => {
  const [view, setView] = useState<"main" | "settings" | "network">("main");
  const [activeTab, setActiveTab] = useState("tokens");
  const [direction, setDirection] = useState(0);
  const [isSheetOpen, setIsSheetOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState<number>(window.innerWidth);

  const { caipNetwork } = useAppKitNetworkCore();
  const { address } = useAppKitAccount();

  // Fetch balance using wagmi
  const {
    data: balance,
    isLoading,
    error,
  } = useBalance({
    address: address?.startsWith("0x") ? (address as `0x${string}`) : undefined,
    chainId: typeof caipNetwork?.id === "number" ? caipNetwork.id : undefined,
  });

  // Update window width on resize
  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Navigate between views
  const navigateTo = (newView: "main" | "settings" | "network") => {
    const dir = newView === "main" ? -1 : 1;
    setDirection(dir);
    setView(newView);
  };

  // Copy wallet address to clipboard
  const handleCopyAddress = () => {
    if (address) {
      navigator.clipboard.writeText(address);
      toast.success("Address copied to clipboard!");
    }
  };

  const networkColor = getNetworkColor(String(caipNetwork?.id) || "unknown");

  return {
    view,
    activeTab,
    setActiveTab,
    direction,
    isSheetOpen,
    setIsSheetOpen,
    windowWidth,
    caipNetwork,
    address,
    balance,
    isLoading,
    error,
    navigateTo,
    handleCopyAddress,
    networkColor,
  };
};
