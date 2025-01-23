import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Wallet } from "lucide-react";
import Image from "next/image";
import { useGetCustomTokens } from "@/app/hooks/wallet/useGetCustomTokens";
import { defaultTokens } from "./data"; // Import tokens directly
import TokenSkeleton from "./CustomTokenListSkeleton";

const CustomTokenList: React.FC = () => {
  const { tokens, isLoading } = useGetCustomTokens(defaultTokens); // Pass defaultTokens to the hook

  return (
    <div className="relative space-y-4">
      {/* Loading State */}
      {isLoading ? (
        <div className="h-[200px] sm:h-[250px] md:h-[230px] 2xl:h-[260px] overflow-y-auto scrollbar-hide space-y-3 md:space-y-4">
          {Array.from({ length: 5 }).map((_, index) => (
            <TokenSkeleton key={index} />
          ))}
        </div>
      ) : (
        <div className="h-[200px] sm:h-[250px] md:h-[230px] 2xl:h-[300px] overflow-y-auto scrollbar-hide space-y-3 md:space-y-4 scrollbar-thin scrollbar-thumb-gray-800 scrollbar-track-transparent">
          <AnimatePresence>
            {tokens.length > 0 ? (
              tokens.map((token, index) => (
                <motion.div
                  key={index}
                  className="flex items-center justify-between p-3 sm:p-4 bg-black/50 backdrop-blur-sm rounded-xl border border-gray-800 hover:bg-gray-900/50 transition-colors"
                >
                  {/* Token Icon and Details */}
                  <div className="flex items-center space-x-3 sm:space-x-4">
                    <div className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 relative rounded-full bg-gray-800 overflow-hidden">
                      <Image
                        src={token.icon}
                        alt={token.symbol}
                        layout="fill"
                        objectFit="cover"
                        className="rounded-full"
                      />
                    </div>
                    <div>
                      <div className="font-medium text-gray-200 text-sm sm:text-base md:text-lg">
                        {token.symbol}
                      </div>
                      <div className="text-xs sm:text-sm text-gray-400">
                        {token.balance} {token.symbol}
                      </div>
                    </div>
                  </div>
                  {/* Token Value and Change */}
                  <div className="text-right">
                    <div className="font-medium text-gray-200 text-sm sm:text-base md:text-lg">
                      ${token.value}
                    </div>
                    <div
                      className={`text-xs sm:text-sm ${
                        token.change.startsWith("+")
                          ? "text-green-400"
                          : "text-red-400"
                      }`}
                    >
                      {token.change}%
                    </div>
                  </div>
                </motion.div>
              ))
            ) : (
              // No Tokens Found
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-6 sm:py-8"
              >
                <Wallet className="w-10 h-10 sm:w-12 sm:h-12 text-gray-600 mx-auto mb-2" />
                <p className="text-gray-400 text-sm sm:text-base">
                  No tokens found
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      )}
    </div>
  );
};

export default CustomTokenList;
