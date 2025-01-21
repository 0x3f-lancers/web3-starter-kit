// import React, { useState } from "react";
// import { motion, AnimatePresence, Variants } from "framer-motion";
// import {
//   Sheet,
//   SheetContent,
//   SheetDescription,
//   SheetTitle,
//   SheetTrigger,
// } from "@/components/ui/sheet";
// import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
// import { Button } from "@/components/ui/button";
// import {
//   useAppKitAccount,
//   useDisconnect,
//   useAppKitNetworkCore,
// } from "@reown/appkit/react";
// import Image from "next/image";
// import { WalletHeader } from "./WalletHeader";
// import { AccountSettings } from "./AccountSettings";
// import { ActivityList } from "./ActivityList";
// import { LogOut } from "lucide-react";
// import { compactHash } from "@/app/utils/format";
// import NetworkSelector from "./NetworkSelector";
// import TokenList from "./NewToken/TokenList";

// const slideVariants: Variants = {
//   enter: (direction: number) => ({
//     x: direction > 0 ? "100%" : "-100%",
//     transition: {
//       type: "tween",
//       ease: "easeInOut",
//       duration: 0.5,
//     },
//   }),
//   center: {
//     x: 0,
//     transition: {
//       type: "tween",
//       ease: "easeInOut",
//       duration: 0.5,
//     },
//   },
//   exit: (direction: number) => ({
//     x: direction < 0 ? "100%" : "-100%",
//     transition: {
//       type: "tween",
//       ease: "easeInOut",
//       duration: 0.5,
//     },
//   }),
// };

// const WalletDetails: React.FC = () => {
//   const [view, setView] = useState<"main" | "settings" | "network">("main");
//   const [activeTab, setActiveTab] = useState("tokens");
//   const { disconnect } = useDisconnect();
//   const { caipNetwork } = useAppKitNetworkCore();
//   const { address } = useAppKitAccount();
//   const [direction, setDirection] = useState(0);

//   const navigateTo = (newView: "main" | "settings" | "network") => {
//     const dir = newView === "main" ? -1 : 1;
//     setDirection(dir);
//     setView(newView);
//   };

//   if (!address) return null;

//   return (
//     <Sheet>
//       <SheetTrigger asChild>
//         <motion.div
//           whileHover={{ scale: 1.01 }}
//           transition={{ duration: 0.2, ease: "easeOut" }}
//         >
//           <Button variant="outline" className="bg-black hover:bg-black">
//             <Image
//               src={caipNetwork?.assets?.imageUrl || "https://xyz.com"}
//               alt="Profile"
//               width={32}
//               height={32}
//               className="rounded-full mr-2"
//             />
//             <span className="text-gray-200">{compactHash(address)}</span>
//           </Button>
//         </motion.div>
//       </SheetTrigger>

//       <SheetContent
//         side="right"
//         className="w-[400px] bg-black border-gray-800 p-0 overflow-hidden"
//       >
//         <div className="sr-only">
//           <SheetTitle>Wallet Details</SheetTitle>
//           <SheetDescription>
//             Manage your wallet, tokens, and activities here.
//           </SheetDescription>
//         </div>
//         <WalletHeader
//           address={address}
//           balance="1,234.56"
//           network="Ethereum"
//           onNetworkClick={() => navigateTo("network")}
//           onSettingsClick={() => navigateTo("settings")}
//         />

//         <div className="h-[calc(100%-80px)] relative overflow-hidden">
//           <AnimatePresence custom={direction} initial={false}>
//             {view === "main" && (
//               <motion.div
//                 key="main"
//                 custom={direction}
//                 variants={slideVariants}
//                 initial="enter"
//                 animate="center"
//                 exit="exit"
//                 className="h-full flex flex-col absolute inset-0 bg-black will-change-transform"
//               >
//                 <Tabs
//                   value={activeTab}
//                   onValueChange={setActiveTab}
//                   className="flex-1 mt-8 px-3"
//                 >
//                   <TabsList className="w-full grid grid-cols-2 bg-gray-900/50 mb-8">
//                     <TabsTrigger value="tokens" className="p-2">
//                       Tokens
//                     </TabsTrigger>
//                     <TabsTrigger value="activity" className="p-2">
//                       Activity
//                     </TabsTrigger>
//                   </TabsList>

//                   <TabsContent value="tokens" className="flex-1 overflow-auto">
//                     <TokenList />
//                   </TabsContent>

//                   <TabsContent
//                     value="activity"
//                     className="flex-1 overflow-auto"
//                   >
//                     <ActivityList />
//                   </TabsContent>
//                 </Tabs>

//                 <motion.button
//                   whileHover={{ scale: 1.01 }}
//                   transition={{ duration: 0.2, ease: "easeOut" }}
//                   onClick={() => disconnect()}
//                   className="m-4 p-4 rounded-xl bg-red-500/10 hover:bg-red-500/20 border border-red-500/20 text-red-400 transition-all"
//                 >
//                   <div className="flex items-center justify-center space-x-2">
//                     <LogOut className="w-4 h-4" />
//                     <span>Disconnect Wallet</span>
//                   </div>
//                 </motion.button>
//               </motion.div>
//             )}

//             {/* {view === "settings" && (
//               <motion.div
//                 key="settings"
//                 custom={direction}
//                 variants={slideVariants}
//                 initial="enter"
//                 animate="center"
//                 exit="exit"
//                 className="absolute inset-0 bg-black will-change-transform"
//               >
//                 <AccountSettings onBack={() => navigateTo("main")} />
//               </motion.div>
//             )} */}

//             {view === "network" && (
//               <motion.div
//                 key="network"
//                 custom={direction}
//                 variants={slideVariants}
//                 initial="enter"
//                 animate="center"
//                 exit="exit"
//                 className="absolute inset-0 bg-black will-change-transform"
//               >
//                 <NetworkSelector onBack={() => navigateTo("main")} />
//               </motion.div>
//             )}
//           </AnimatePresence>
//         </div>
//       </SheetContent>
//     </Sheet>
//   );
// };

// export default WalletDetails;
import React, { useState } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import {
  useAppKitAccount,
  useDisconnect,
  useAppKitNetworkCore,
} from "@reown/appkit/react";
import { useBalance } from "wagmi"; // Import useBalance hook
import Image from "next/image";
import { WalletHeader } from "./WalletHeader";

import NetworkSelector from "./NetworkSelector";
import TokenList from "./NewToken/TokenList";
import { formatBalance } from "@/app/utils/format";
import { LogOut } from "lucide-react";
import ActivityList from "./ActivityList";

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
  const [view, setView] = useState<"main" | "settings" | "network">("main");
  const [activeTab, setActiveTab] = useState("tokens");
  const [direction, setDirection] = useState(0);

  const { disconnect } = useDisconnect();
  const { caipNetwork } = useAppKitNetworkCore();
  const { address } = useAppKitAccount();

  // Fetch wallet balance using wagmi's useBalance hook
  const {
    data: balance,
    isLoading,
    error,
  } = useBalance({
    address: address?.startsWith("0x") ? (address as `0x${string}`) : undefined,
    chainId: typeof caipNetwork?.id === "number" ? caipNetwork.id : undefined,
  });

  const navigateTo = (newView: "main" | "settings" | "network") => {
    const dir = newView === "main" ? -1 : 1;
    setDirection(dir);
    setView(newView);
  };

  if (!address) return null;

  return (
    <Sheet>
      <SheetTrigger asChild>
        <motion.div
          whileHover={{ scale: 1.01 }}
          transition={{ duration: 0.2, ease: "easeOut" }}
        >
          <Button
            variant="outline"
            className="bg-black hover:bg-black rounded-full px-8 h-12"
          >
            <Image
              src={caipNetwork?.assets?.imageUrl || "https://xyz.com"}
              alt="Profile"
              width={32}
              height={32}
              className="rounded-full mr-2"
            />
            <span className="text-gray-300 text-lg ">
              {address?.slice(0, 6)}...{address?.slice(-4)}
            </span>
          </Button>
        </motion.div>
      </SheetTrigger>

      <SheetContent
        side="right"
        className="w-[90%] sm:w-[400px] bg-black border-gray-800 p-0 overflow-hidden"
      >
        <div className="sr-only">
          <SheetTitle>Wallet Details</SheetTitle>
        </div>

        <WalletHeader
          address={address}
          balance="1,234.56"
          network="Ethereum"
          onNetworkClick={() => navigateTo("network")}
          onSettingsClick={() => navigateTo("settings")}
        />

        {/* Add the profile section here */}
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
              {address?.slice(0, 6)}...{address?.slice(-4)}
            </div>

            {/* Wallet Balance */}
            <div className="text-base md:text-lg font-semibold">
              {isLoading ? (
                <div className="h-6 w-32 bg-white/10 animate-pulse rounded-full mx-auto"></div>
              ) : error ? (
                <span className="text-red-400">Unable to fetch balance</span>
              ) : balance ? (
                <span className="text-red-400">
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
                  <TabsList className="w-full grid grid-cols-2 bg-gray-900/50 mb-8">
                    <TabsTrigger value="tokens" className="p-2 font-medium">
                      Tokens
                    </TabsTrigger>
                    <TabsTrigger value="activity" className="p-2 font-medium">
                      Activity
                    </TabsTrigger>
                  </TabsList>

                  <TabsContent value="tokens" className="flex-1 overflow-auto">
                    <TokenList />
                  </TabsContent>

                  <TabsContent
                    value="activity"
                    className="flex-1 overflow-auto"
                  >
                    <ActivityList />
                  </TabsContent>
                </Tabs>

                {/* <motion.button
                  whileHover={{ scale: 1.01 }}
                  transition={{ duration: 0.2, ease: "easeOut" }}
                  onClick={() => disconnect()}
                  className="m-4 p-4 rounded-xl bg-red-500/10 hover:bg-red-500/20 border border-red-500/20 text-red-400 transition-all"
                >
                  <div className="flex items-center justify-center space-x-2">
                    <LogOut className="w-4 h-4" />
                    <span>Disconnect Wallet</span>
                  </div>
                </motion.button> */}
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
      </SheetContent>
    </Sheet>
  );
};

export default WalletDetails;
