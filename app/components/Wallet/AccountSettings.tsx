// import React from "react";
// import { motion } from "framer-motion";

// import { Button } from "@/components/ui/button";
// import { useAppKit, useAppKitNetworkCore } from "@reown/appkit/react";
// import { useAccount, useBalance } from "wagmi";
// import {
//   ArrowLeftRight,
//   ChevronLeft,
//   ChevronRight,
//   Clock,
//   CreditCard,
//   LogOut,
//   Send,
// } from "lucide-react";
// import Image from "next/image";
// import { formatBalance } from "@/app/utils/format";

// export const AccountSettings: React.FC<{ onBack: () => void }> = ({
//   onBack,
// }) => {
//   const { open } = useAppKit(); // Hook to control the modal
//   const { address, isConnected } = useAccount();
//   const { caipNetwork } = useAppKitNetworkCore(); // Get active network details

//   // Fetch wallet balance
//   const {
//     data: balance,
//     isLoading,
//     error,
//   } = useBalance({
//     address: address,
//     chainId: typeof caipNetwork?.id === "number" ? caipNetwork.id : undefined,
//   });

//   return (
//     <div className="h-[calc(100%-80px)] overflow-auto">
//       {/* Header */}
//       <div className="p-4 border-b border-gray-800 flex items-center">
//         <Button
//           variant="ghost"
//           size="icon"
//           onClick={onBack}
//           className="mr-2 text-gray-400 hover:text-white"
//         >
//           <ChevronLeft className="h-5 w-5" />
//         </Button>
//         <h2 className="text-lg font-medium text-white">Wallet Details</h2>
//       </div>

//       <div className="p-4 space-y-4">
//         {/* Profile Section */}
//         <div className="flex flex-col items-center text-center space-y-2">
//           <div className="w-16 h-16 rounded-full bg-gradient-to-r from-green-400 to-blue-500 flex items-center justify-center">
//             <Image
//               src={caipNetwork?.assets?.imageUrl || "https://xyz.com"}
//               alt="Profile"
//               width={64}
//               height={64}
//               className="rounded-full"
//             />
//           </div>

//           <div className="text-white font-medium">
//             {isConnected
//               ? address?.slice(0, 6) + "..." + address?.slice(-4)
//               : "Not connected"}
//           </div>

//           <div className="text-gray-400 text-sm">
//             {isLoading ? (
//               <div className="h-6 w-24 bg-gray-800 animate-pulse rounded-md"></div>
//             ) : error ? (
//               "Unable to fetch balance"
//             ) : balance ? (
//               `${formatBalance(parseFloat(balance.formatted))} ${
//                 balance.symbol
//               }`
//             ) : (
//               "0.00 LOOP"
//             )}
//           </div>
//         </div>

//         {/* Action Buttons */}
//         <div className="space-y-2">
//           {[
//             {
//               index: 1,
//               label: "Buy crypto",
//               icon: CreditCard,
//               view: "OnRampProviders" as const, // Correct view for "Buy Crypto"
//             },
//             {
//               index: 2,
//               label: "Swap",
//               icon: ArrowLeftRight,
//               view: "Swap" as const, // Correct view for "Swap"
//             },
//             {
//               index: 3,
//               label: "Send",
//               icon: Send,
//               view: "Send" as const, // Correct view for "Send"
//             },
//             {
//               index: 4,
//               label: "Receive",
//               icon: Clock,
//               view: "Receive" as const, // Correct view for "Receive"
//             },
//           ].map(({ label, icon: Icon, view, index }) => (
//             <button
//               key={index}
//               onClick={() =>
//                 open({
//                   view: view as
//                     | "OnRampProviders"
//                     | "Account"
//                     | "Connect"
//                     | "Networks"
//                     | "ApproveTransaction",
//                 })
//               } // Open specific modal view
//               className="w-full flex items-center justify-between p-4 rounded-lg bg-gray-900/50 hover:bg-gray-900/70 text-white"
//             >
//               <div className="flex items-center space-x-3">
//                 <Icon className="w-5 h-5 text-blue-400" />
//                 <span>{label}</span>
//               </div>
//               <ChevronRight className="w-5 h-5 text-gray-400" />
//             </button>
//           ))}
//         </div>

//         {/* Disconnect Button */}
//         <button
//           onClick={() => console.log("Disconnect")}
//           className="w-full flex items-center justify-center p-4 rounded-lg bg-red-500/10 hover:bg-red-500/20 text-red-400"
//         >
//           <LogOut className="w-5 h-5 mr-2" />
//           <span>Disconnect</span>
//         </button>
//       </div>
//     </div>
//   );
// };
import React from "react";
import { Button } from "@/components/ui/button";
import { useAppKit, useAppKitNetworkCore } from "@reown/appkit/react";
import { useAccount, useBalance } from "wagmi";
import {
  ArrowLeftRight,
  ChevronLeft,
  ChevronRight,
  Clock,
  CreditCard,
  LogOut,
  Send,
} from "lucide-react";
import Image from "next/image";
import { formatBalance } from "@/app/utils/format";

export const AccountSettings: React.FC<{ onBack: () => void }> = ({
  onBack,
}) => {
  const { open } = useAppKit();
  const { address, isConnected } = useAccount();
  const { caipNetwork } = useAppKitNetworkCore();

  const {
    data: balance,
    isLoading,
    error,
  } = useBalance({
    address: address,
    chainId: typeof caipNetwork?.id === "number" ? caipNetwork.id : undefined,
  });

  const actionButtons = [
    {
      label: "Buy crypto",
      icon: CreditCard,
      view: "OnRampProviders" as const,
      gradient: "from-purple-500 to-pink-500",
    },
    {
      label: "Swap",
      icon: ArrowLeftRight,
      view: "Swap" as const,
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      label: "Send",
      icon: Send,
      view: "Send" as const,
      gradient: "from-green-500 to-emerald-500",
    },
    {
      label: "Receive",
      icon: Clock,
      view: "Receive" as const,
      gradient: "from-orange-500 to-yellow-500",
    },
  ];

  return (
    <div className="flex flex-col h-full bg-gradient-to-b from-black to-gray-900">
      {/* Header */}
      <div className="p-4 border-b border-gray-800/40 backdrop-blur-lg bg-black/40 z-10">
        <div className="flex items-center">
          <Button
            variant="ghost"
            size="icon"
            onClick={onBack}
            className="mr-2 text-gray-400 hover:text-white transition-colors duration-300"
          >
            <ChevronLeft className="h-5 w-5" />
          </Button>
          <h2 className="text-lg font-semibold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            Wallet Details
          </h2>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col p-4 space-y-4 overflow-hidden">
        {/* Profile Section */}
        {/* Main Content */}
        <div className="flex-1 flex flex-col p-6 space-y-6 overflow-hidden">
          {/* Profile Section with prominent display */}
          <div className="flex flex-col items-center text-center space-y-4 animate-[fadeIn_0.5s_ease-out_forwards]">
            {/* Profile Image with Glowing Effect */}
            <div className="relative group transition-transform duration-300 hover:scale-105">
              <div className="absolute -inset-1 bg-gradient-to-r from-white/50 to-white/30 rounded-full opacity-75 group-hover:opacity-100 blur-md"></div>
              <div className="relative w-24 h-24 rounded-full bg-gradient-to-b from-white/10 to-black p-1">
                <Image
                  src={caipNetwork?.assets?.imageUrl || "https://xyz.com"}
                  alt="Profile"
                  width={96}
                  height={96}
                  className="rounded-full ring-2 ring-white/20 p-1 bg-black"
                />
              </div>
            </div>

            {/* Address Display */}
            <div className="space-y-2">
              <div className="text-white text-xl font-bold tracking-wide bg-gradient-to-b from-white to-white/70 bg-clip-text">
                {isConnected
                  ? address?.slice(0, 6) + "..." + address?.slice(-4)
                  : "Not connected"}
              </div>

              {/* Balance Display */}
              <div className="text-lg font-semibold">
                {isLoading ? (
                  <div className="h-6 w-32 bg-white/10 animate-pulse rounded-full mx-auto"></div>
                ) : error ? (
                  <span className="text-red-400">Unable to fetch balance</span>
                ) : balance ? (
                  <span className="text-white/90">
                    {formatBalance(parseFloat(balance.formatted))}{" "}
                    {balance.symbol}
                  </span>
                ) : (
                  <span className="text-white/70">0.00 LOOP</span>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="grid grid-cols-2 gap-2 py-1">
          {actionButtons.map(({ label, icon: Icon, view, gradient }, index) => (
            <button
              key={index}
              onClick={() =>
                open({
                  view: view as
                    | "OnRampProviders"
                    | "Account"
                    | "Connect"
                    | "Networks"
                    | "ApproveTransaction",
                })
              }
              className="group relative transition-transform duration-300 hover:scale-105"
            >
              <div
                className={`absolute -inset-0.5 bg-gradient-to-r opacity-50 group-hover:opacity-100 blur transition-opacity duration-300 rounded-xl`}
              ></div>
              <div className="relative flex flex-col items-center px-3 rounded-lg bg-gray-900/90 backdrop-blur-sm hover:bg-gray-900/70 text-white py-6">
                <div
                  className={`bg-gradient-to-r ${gradient} p-2 rounded-lg mb-2`}
                >
                  <Icon className="w-5 h-5 text-white" />
                </div>
                <span className="text-sm font-medium">{label}</span>
              </div>
            </button>
          ))}
        </div>

        {/* Spacer */}
        <div className="flex-1 min-h-4"></div>

        {/* Disconnect Button */}
        <button
          onClick={() => console.log("Disconnect")}
          className="w-full flex items-center justify-center p-3 rounded-lg bg-gradient-to-r from-red-500/5 to-pink-500/5 hover:from-red-500/10 hover:to-pink-500/10 text-red-400 hover:text-red-300 transition-all duration-300 hover:scale-105"
        >
          <LogOut className="w-4 h-4 mr-2" />
          <span className="text-sm font-medium">Disconnect</span>
        </button>
      </div>
    </div>
  );
};

export default AccountSettings;
