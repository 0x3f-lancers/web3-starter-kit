import React from "react";
import { motion } from "framer-motion";
import { Search, CheckCircle, ChevronLeft } from "lucide-react";
import Image from "next/image";

import { getChainImage } from "@/app/utils/ChainImages";
import { useGetNetwork } from "@/app/hooks/wallet/useGetNetwork";
import { NetworkSelectorProps } from "@/app/providers/wallettypes";

const Networks: React.FC<NetworkSelectorProps> = ({ onBack }) => {
  const {
    caipNetwork,
    searchQuery,
    setSearchQuery,
    filteredNetworks,
    handleNetworkSwitch,
  } = useGetNetwork();

  return (
    <div>
      {/* Header */}
      <div className="px-4 py-1 sm:px-4 sm:py-4 border-b border-gray-900/50 backdrop-blur-sm bg-black/90 sticky top-0 z-10">
        <div className="flex items-center space-x-4">
          <button
            onClick={onBack}
            className="p-2 rounded-lg text-gray-400 hover:text-white hover:bg-gray-800/50 transition-all"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <h2 className="text-base sm:text-lg font-medium text-white">
            Select Network
          </h2>
        </div>
      </div>

      {/* Search Bar */}
      <div className="px-4 pb-2">
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
            <Search className="h-4 w-4 text-gray-500" />
          </div>
          <input
            type="text"
            placeholder="Search networks..."
            className="w-full pl-11 pr-4 py-3 bg-black/50 border border-gray-800 rounded-xl
                     text-white text-sm sm:text-base placeholder-gray-500 
                     focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500/40
                     transition-all duration-200"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)} // Update search input
          />
        </div>
      </div>

      {/* Network List */}
      <div className="px-4 space-y-2 h-[180px] sm:h-[210px] md:h-[180px] 2xl:h-[260px] overflow-y-auto scrollbar-hide">
        {/* Handle "no networks found" case */}
        {filteredNetworks.length > 0 ? (
          filteredNetworks.map((network, index) => (
            <motion.button
              key={index}
              onClick={() => handleNetworkSwitch(network, onBack)}
              className={`w-full p-3 sm:p-4 rounded-lg border transition-all duration-200
                       ${
                         caipNetwork?.id === network.id
                           ? "bg-black/50 border-blue-500/50 hover:border-blue-500"
                           : "bg-black/50 border-gray-800 hover:border-gray-700 hover:bg-gray-900/30"
                       }`}
            >
              <div className="flex items-center justify-between">
                {/* Left Section: Network Icon and Details */}
                <div className="flex items-center space-x-3 sm:space-x-4">
                  {/* Network Icon */}
                  <div className="relative">
                    <Image
                      src={getChainImage(network.id)}
                      alt={network.name}
                      width={32}
                      height={32}
                      className="rounded-full"
                    />
                  </div>

                  {/* Network Details */}
                  <div className="text-left flex-1">
                    <div className="text-sm sm:text-base text-white font-medium mb-1 sm:mb-0">
                      {network.name}
                    </div>
                    <div className="text-xs text-gray-500 sm:hidden">
                      ID: {network.id}
                    </div>
                    <div className="hidden sm:block text-xs sm:text-sm text-gray-500">
                      Chain ID: {network.id}
                    </div>
                  </div>
                </div>

                {/* Right Section: Connected State */}
                <div className="flex items-center">
                  {caipNetwork?.id === network.id ? (
                    <>
                      {/* Show CheckCircle Icon for small screens */}
                      <CheckCircle className="w-5 h-5 text-blue-400 sm:hidden" />
                      {/* Show 'Connected' text for larger screens */}
                      <div className="flex items-center space-x-2">
                        {caipNetwork?.id === network.id && (
                          <span className="hidden sm:block text-xs text-blue-400 bg-blue-500/10 px-2 py-1 rounded-full">
                            Connected
                          </span>
                        )}
                      </div>
                    </>
                  ) : null}
                </div>
              </div>
            </motion.button>
          ))
        ) : (
          // No networks found message
          <div className="text-center text-gray-500 py-6 sm:py-8">
            <p className="text-sm sm:text-base">
              No networks matched your search.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Networks;
