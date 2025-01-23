import React from "react";
import { motion } from "framer-motion";
import { Settings, LogOut, ChevronDown, Copy } from "lucide-react";
import Image from "next/image";
import { compactHash } from "@/app/utils/format";

import { useGetWalletHeader } from "@/app/hooks/wallet/useGetWalletHeader";
import { WalletHeaderProps } from "@/app/providers/wallettypes";

export const WalletHeader: React.FC<WalletHeaderProps> = ({
  onNetworkClick,
  onCloseSheet,
}) => {
  const {
    address,
    caipNetwork,
    handleCopyAddress,
    handleDisconnect,
    openSettings,
  } = useGetWalletHeader();

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="sticky top-0 z-10 bg-black/95 backdrop-blur-sm border-b border-gray-800 p-4"
    >
      <div className="flex items-center justify-between">
        {/* Profile and Network Section */}
        <div className="flex items-center space-x-4">
          <div className="h-[30px] w-[30px] lg:w-10 lg:h-10 relative">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="w-full h-full rounded-full bg-gradient-to-r from-gray-700 to-gray-900 lg:p-0.5"
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
            <div className="flex space-x-2">
              <motion.div className="text-white font-medium hidden sm:block text-sm lg:text-base">
                {address ? compactHash(address) : ""}
              </motion.div>
              {address && (
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  onClick={handleCopyAddress}
                  className="hidden sm:block p-1 rounded-full bg-black border border-gray-700 text-gray-400 hover:bg-gray-800 hover:text-white shadow-md transition-all"
                >
                  <Copy className="h-3 w-3 lg:h-4 lg:w-4" />
                </motion.button>
              )}
            </div>
            <motion.button
              whileHover={{ scale: 1.02 }}
              onClick={onNetworkClick}
              className="flex items-center text-base sm:text-xs lg:text-sm text-gray-400 hover:text-white transition-colors"
            >
              <span className="mr-1">{caipNetwork?.name || "Unknown"}</span>
              <ChevronDown className="w-4 h-4" />
            </motion.button>
          </div>
        </div>

        {/* Buttons Section */}
        <div className="flex items-center space-x-3">
          {/* Settings Button */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            onClick={() => {
              if (onCloseSheet) onCloseSheet();
              openSettings(); // Open ReOwn account settings
            }}
            className="p-2 rounded-full bg-black border border-gray-700 text-gray-400 hover:bg-gray-800 hover:text-white shadow-md transition-all"
          >
            <Settings className="h-4 w-4 sm:h-5 sm:w-5" />
          </motion.button>

          {/* Disconnect Button */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            onClick={handleDisconnect}
            className="p-2 rounded-full bg-black border border-gray-700 text-gray-400 hover:bg-gray-800 hover:text-white shadow-md transition-all"
          >
            <LogOut className="h-4 w-4 sm:h-5 sm:w-5" />
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};
