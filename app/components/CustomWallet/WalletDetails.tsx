import React from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Copy } from "lucide-react";

import { WalletHeader } from "./WalletHeader";
import NetworkSelector from "./Networks";

import ActivityList from "./Activities";
import { useGetWalletDetails } from "@/app/hooks/wallet/useGetWalletDetails";
import { formatBalance } from "@/app/utils/format";
import CustomTokenList from "./CustomToken/CustomTokenList";

// Animation Variants
const slideVariants: Variants = {
  enter: (direction: number) => ({
    x: direction > 0 ? "100%" : "-100%",
    transition: {
      type: "tween",
      ease: "easeInOut",
      duration: 0.5,
    },
  }),
  center: {
    x: 0,
    transition: {
      type: "tween",
      ease: "easeInOut",
      duration: 0.5,
    },
  },
  exit: (direction: number) => ({
    x: direction < 0 ? "100%" : "-100%",
    transition: {
      type: "tween",
      ease: "easeInOut",
      duration: 0.5,
    },
  }),
};

const WalletDetails: React.FC = () => {
  const {
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
  } = useGetWalletDetails();

  if (!address) return null;

  return (
    <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
      <SheetTrigger asChild>
        <motion.div
          whileHover={{ scale: 1.01 }}
          transition={{ duration: 0.2, ease: "easeOut" }}
          className=""
        >
          <Button
            variant="outline"
            className={`bg-black hover:bg-black rounded-full ${
              windowWidth > 500 ? "py-5 pl-6" : "py-3"
            } flex space-x-1 !pl-2 pr-5`}
            onClick={() => setIsSheetOpen(true)}
          >
            {/* Network Icon */}
            {windowWidth > 500 && (
              <Image
                src={caipNetwork?.assets?.imageUrl || "https://xyz.com"}
                alt="Network Icon"
                width={24}
                height={24}
                className="rounded-full"
              />
            )}

            {/* Balance and Address */}
            <div className="text-gray-300 text-base flex items-center space-x-1 text-center">
              {windowWidth > 500 && (
                <span className="pr-2 font-bold">
                  {balance?.formatted || "0.000"} {balance?.symbol}
                </span>
              )}
              {/* Dynamic Network Circle */}
              <span
                className={`w-[22px] h-[22px] sm:w-6 sm:h-6 rounded-full shadow-[0_2px_4px_rgba(0,0,0,0.5),inset_0_-1px_2px_rgba(255,255,255,0.3)]`}
                style={{
                  background: `radial-gradient(circle, ${networkColor}, #000)`,
                }}
              />
              <span className="text-gray-400 font-bold text-[15px] text-center align-middle">
                {address?.slice(0, 4)}...{address?.slice(-6)}
              </span>
            </div>
          </Button>
        </motion.div>
      </SheetTrigger>

      <SheetContent
        side="right"
        className="w-[100%] sml:w-[90%] sm:w-[400px] border bg-black border-gray-900/10 p-0 overflow-hidden rounded-l-2xl"
      >
        <div className="sr-only">
          <SheetTitle>Wallet Details</SheetTitle>
        </div>

        <WalletHeader
          address={address}
          onCloseSheet={() => setIsSheetOpen(false)}
          onNetworkClick={() => navigateTo("network")}
          onSettingsClick={() => navigateTo("settings")}
        />

        {/* Profile Section */}
        <div className="flex flex-col items-center text-center space-y-4 py-6">
          {/* Profile Image */}
          <div className="relative group transition-transform duration-300 hover:scale-105">
            <div className="absolute -inset-1 bg-gradient-to-r from-white/50 to-white/30 rounded-full opacity-75 group-hover:opacity-100 blur-md"></div>
            <div className="relative h-[70px] w-[70px] md:h-[96px] md:w-[96px] rounded-full bg-gradient-to-b from-white/10 to-black p-1">
              <Image
                src={caipNetwork?.assets?.imageUrl || "https://xyz.com"}
                alt="Profile"
                width={96}
                height={96}
                className="rounded-full ring-2 ring-white/20 p-1 bg-black h-[70px] w-[70px] md:h-[96px] md:w-[96px]"
              />
            </div>
          </div>

          {/* Wallet Address */}
          <div className="space-y-2">
            <div className="text-white text-lg md:text-xl font-bold tracking-wide bg-gradient-to-b from-white to-white/70 bg-clip-text">
              <div className="flex space-x-4">
                {address?.slice(0, 6)}...{address?.slice(-4)}
                {address && (
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    onClick={handleCopyAddress}
                    className="ml-2 block sm:hidden p-1 rounded-full bg-black border border-gray-700 text-gray-400 hover:bg-gray-800 hover:text-white shadow-md transition-all"
                  >
                    <Copy className="h-3 w-3" />
                  </motion.button>
                )}
              </div>
            </div>

            {/* Wallet Balance */}
            <div className="text-base md:text-lg font-semibold">
              {isLoading ? (
                <div className="h-6 w-32 bg-white/10 animate-pulse rounded-full mx-auto"></div>
              ) : error ? (
                <span className="text-white font-medium">
                  Unable to fetch balance
                </span>
              ) : balance ? (
                <span className="text-white font-medium">
                  {formatBalance(parseFloat(balance.formatted))}{" "}
                  {balance.symbol}
                </span>
              ) : (
                <span className="text-white/70">0.00</span>
              )}
            </div>
          </div>
        </div>

        {/* Tabs Section */}
        <div className="h-[calc(100%-80px)] relative overflow-hidden">
          <AnimatePresence custom={direction} initial={false}>
            {view === "main" && (
              <motion.div
                key="main"
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                className="h-full flex flex-col absolute inset-0 bg-black will-change-transform"
              >
                <Tabs
                  value={activeTab}
                  onValueChange={setActiveTab}
                  className="flex-1 mt-2 px-3"
                >
                  <TabsList className="w-full grid grid-cols-2 bg-gray-900/50 mb-5 sm:mb-8">
                    <TabsTrigger value="tokens" className="p-2 font-medium">
                      Tokens
                    </TabsTrigger>
                    <TabsTrigger value="activity" className="p-2 font-medium">
                      Activity
                    </TabsTrigger>
                  </TabsList>

                  <TabsContent value="tokens" className="flex-1 overflow-auto">
                    <CustomTokenList />
                  </TabsContent>

                  <TabsContent
                    value="activity"
                    className="flex-1 overflow-auto"
                  >
                    <ActivityList />
                  </TabsContent>
                </Tabs>
              </motion.div>
            )}

            {view === "network" && (
              <motion.div
                key="network"
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                className="absolute inset-0 bg-black will-change-transform"
              >
                <NetworkSelector onBack={() => navigateTo("main")} />
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Close Button for Smaller Screens */}
        <div className="block sm:hidden absolute bottom-4 left-1/2 transform -translate-x-1/2 w-[90%]">
          <button
            onClick={() => setIsSheetOpen(false)}
            className="w-full py-2 bg-white text-black font-semibold text-center rounded-lg shadow hover:bg-red-600 transition"
          >
            Close
          </button>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default WalletDetails;
