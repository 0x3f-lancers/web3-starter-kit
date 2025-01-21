import React from "react";
import { motion } from "framer-motion";
import { Settings, ChevronDown, LogOut } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useAccount, useBalance, useDisconnect } from "wagmi";
import { useAppKitNetworkCore } from "@reown/appkit/react";

import { WalletHeaderProps } from "./types";
import { compactHash, formatBalance } from "@/app/utils/format";

export const WalletHeader: React.FC<WalletHeaderProps> = ({
  onNetworkClick,
  onSettingsClick,
}) => {
  const { caipNetwork } = useAppKitNetworkCore();
  const { address, isConnected } = useAccount();
  const { disconnect } = useDisconnect();
  const { data: balance, isLoading } = useBalance({
    address: address,
    chainId: typeof caipNetwork?.id === "number" ? caipNetwork.id : undefined,
  });
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="sticky top-0 z-10 bg-black/95 backdrop-blur-sm border-b border-gray-800 p-4"
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <div className="h-[30px] w-[30px] lg:w-10 lg:h-10 relative">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="w-full h-full rounded-full bg-gradient-to-r from-purple-500 to-pink-500 lg:p-0.5"
            >
              <Image
                src={caipNetwork?.assets?.imageUrl || "https://xyz.com"}
                alt="Profile"
                width={40}
                height={40}
                className="rounded-full h-[30px] w-[30px] lg:h-[40px] lg:w-[40px]"
              />
            </motion.div>
          </div>
          <div>
            <motion.div className="text-white font-medium hidden sm:block text-sm lg:text-base">
              {address ? compactHash(address) : "N/A"}
            </motion.div>
            <motion.button
              whileHover={{ scale: 1.02 }}
              onClick={onNetworkClick}
              className="flex items-center text-lg sm:text-xs lg:text-sm text-gray-400 hover:text-white transition-colors"
            >
              <span className="mr-1">{caipNetwork?.name || "Unknown"}</span>
              <ChevronDown className="w-4 h-4" />
            </motion.button>
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <motion.button
            whileHover={{ scale: 1.05 }}
            onClick={() => disconnect()} // Disconnect wallet when clicked
            className="hidden sm:flex items-center space-x-2 px-3 py-2 rounded-lg bg-red-500/10 hover:bg-red-500/20 text-red-400 hover:text-red-300 transition-all"
          >
            <LogOut className="w-4 h-4" />
            <span className="text-sm font-medium">Disconnect</span>
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            onClick={() => disconnect()} // Disconnect wallet when clicked
            className="flex sm:hidden items-center space-x-2 px-3 py-2 rounded-lg bg-red-500/10 hover:bg-red-500/20 text-red-400 hover:text-red-300 transition-all"
          >
            <LogOut className="w-4 h-4" />
          </motion.button>

          {/* <Button
            variant="ghost"
            size="icon"
            onClick={onSettingsClick}
            className="text-gray-400 hover:text-white transition-colors"
          >
            <Settings className="h-5 w-5" />
          </Button> */}
        </div>
      </div>
    </motion.div>
  );
};
