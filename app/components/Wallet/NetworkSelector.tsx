// import React, { useState, useEffect } from "react";
// import { motion } from "framer-motion";
// import { Search, Check, ChevronLeft } from "lucide-react";
// import { useAppKitNetwork } from "@reown/appkit/react";
// import Image from "next/image";
// import { NetworkSelectorProps } from "./types";

// import { AppKitNetwork } from "@reown/appkit/networks";
// import { Loop, testLoop } from "@/app/providers/customChain";

// const NetworkSelector: React.FC<NetworkSelectorProps> = ({ onBack }) => {
//   const { caipNetwork, switchNetwork } = useAppKitNetwork();
//   const [searchQuery, setSearchQuery] = useState(""); // User input
//   const [debouncedQuery, setDebouncedQuery] = useState(""); // Debounced input
//   const networks = [Loop, testLoop]; // Dynamic network list
//   const [filteredNetworks, setFilteredNetworks] = useState(networks); // Filtered networks

//   // Step 1: Debounce the search query
//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setDebouncedQuery(searchQuery.toLowerCase());
//     }, 300); // Debounce delay of 300ms
//     return () => clearTimeout(timer); // Cleanup the timer on each input change
//   }, [searchQuery]);

//   // Step 2: Filter networks based on the debounced query
//   useEffect(() => {
//     const filtered = networks.filter((network) =>
//       network.name.toLowerCase().includes(debouncedQuery)
//     );
//     setFilteredNetworks(filtered);
//   }, [debouncedQuery, networks]);

//   // Step 3: Handle network switching
//   const handleNetworkSwitch = async (network: AppKitNetwork) => {
//     try {
//       await switchNetwork(network);
//       onBack(); // Go back to the previous view after switching
//     } catch (error) {
//       console.error("Error switching network:", error);
//     }
//   };

//   return (
//     <div className="h-[calc(100%-80px)] bg-black">
//       {/* Header */}
//       <div className="p-4 border-b border-gray-800/50 backdrop-blur-sm bg-black/90 sticky top-0 z-10">
//         <div className="flex items-center space-x-4">
//           <button
//             onClick={onBack}
//             className="p-2 rounded-lg text-gray-400 hover:text-white hover:bg-gray-800/50 transition-all"
//           >
//             <ChevronLeft className="h-5 w-5" />
//           </button>
//           <h2 className="text-lg font-medium text-white">Select Network</h2>
//         </div>
//       </div>

//       {/* Search Bar */}
//       <div className="p-4">
//         <div className="relative">
//           <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
//             <Search className="h-4 w-4 text-gray-500" />
//           </div>
//           <input
//             type="text"
//             placeholder="Search networks..."
//             className="w-full pl-11 pr-4 py-3 bg-black/50 border border-gray-800 rounded-xl
//                      text-white text-sm placeholder-gray-500
//                      focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500/40
//                      transition-all duration-200"
//             value={searchQuery}
//             onChange={(e) => setSearchQuery(e.target.value)} // Update search input
//           />
//         </div>
//       </div>

//       {/* Network List */}
//       <div className="px-4 space-y-2 h-[400px] overflow-y-auto">
//         {/* Handle "no networks found" case */}
//         {filteredNetworks.length > 0 ? (
//           filteredNetworks.map((network, index) => (
//             <motion.button
//               key={index}
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: index * 0.1 }}
//               onClick={() => handleNetworkSwitch(network)}
//               className={`w-full p-4 rounded-xl border transition-all duration-200
//                        ${
//                          caipNetwork?.id === network.id
//                            ? "bg-black/50 border-blue-500/50 hover:border-blue-500"
//                            : "bg-black/50 border-gray-800 hover:border-gray-700 hover:bg-gray-900/30"
//                        }`}
//             >
//               <div className="flex items-center justify-between">
//                 <div className="flex items-center space-x-4">
//                   <div className="relative">
//                     <Image
//                       src={network.assets.imageUrl}
//                       alt={network.name}
//                       width={40}
//                       height={40}
//                       className="rounded-full"
//                     />
//                     {caipNetwork?.id === network.id && (
//                       <div className="absolute -right-1 -bottom-1 bg-blue-500 rounded-full p-1">
//                         <Check className="h-3 w-3 text-white" />
//                       </div>
//                     )}
//                   </div>
//                   <div className="text-left">
//                     <div className="text-white font-medium">{network.name}</div>
//                     <div className="text-sm text-gray-500">
//                       Chain ID: {network.id}
//                     </div>
//                   </div>
//                 </div>

// <div className="flex items-center space-x-2">
//   {caipNetwork?.id === network.id && (
//     <span className="text-xs text-blue-400 bg-blue-500/10 px-2 py-1 rounded-full">
//       Connected
//     </span>
//   )}
// </div>
//               </div>
//             </motion.button>
//           ))
//         ) : (
//           // No networks found message
//           <div className="text-center text-gray-500 py-8">
//             <p>No networks matched your search.</p>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };
// export default NetworkSelector;
// import React, { useState, useEffect } from "react";
// import { motion } from "framer-motion";
// import { Search, Check, ChevronLeft } from "lucide-react";
// import { useAppKitNetwork } from "@reown/appkit/react";
// import Image from "next/image";
// import { NetworkSelectorProps } from "./types";

// import { AppKitNetwork } from "@reown/appkit/networks";
// import { Loop, testLoop } from "@/app/providers/customChain";

// const NetworkSelector: React.FC<NetworkSelectorProps> = ({ onBack }) => {
//   const { caipNetwork, switchNetwork } = useAppKitNetwork();
//   const [searchQuery, setSearchQuery] = useState(""); // User input
//   const [debouncedQuery, setDebouncedQuery] = useState(""); // Debounced input
//   const networks = [Loop, testLoop]; // Dynamic network list
//   const [filteredNetworks, setFilteredNetworks] = useState(networks); // Filtered networks

//   // Step 1: Debounce the search query
//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setDebouncedQuery(searchQuery.toLowerCase());
//     }, 300); // Debounce delay of 300ms
//     return () => clearTimeout(timer); // Cleanup the timer on each input change
//   }, [searchQuery]);

//   // Step 2: Filter networks based on the debounced query
//   useEffect(() => {
//     const filtered = networks.filter((network) =>
//       network.name.toLowerCase().includes(debouncedQuery)
//     );
//     setFilteredNetworks(filtered);
//   }, [debouncedQuery, networks]);

//   // Step 3: Handle network switching
//   const handleNetworkSwitch = async (network: AppKitNetwork) => {
//     try {
//       await switchNetwork(network);
//       onBack(); // Go back to the previous view after switching
//     } catch (error) {
//       console.error("Error switching network:", error);
//     }
//   };

//   return (
//     <div className="h-[calc(100%-80px)] bg-black">
//       {/* Header */}
//       <div className="p-4 border-b border-gray-800/50 backdrop-blur-sm bg-black/90 sticky top-0 z-10">
//         <div className="flex items-center space-x-4">
//           <button
//             onClick={onBack}
//             className="p-2 rounded-lg text-gray-400 hover:text-white hover:bg-gray-800/50 transition-all"
//           >
//             <ChevronLeft className="h-5 w-5" />
//           </button>
//           <h2 className="text-base sm:text-lg font-medium text-white">
//             Select Network
//           </h2>
//         </div>
//       </div>

//       {/* Search Bar */}
//       <div className="p-4">
//         <div className="relative">
//           <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
//             <Search className="h-4 w-4 text-gray-500" />
//           </div>
//           <input
//             type="text"
//             placeholder="Search networks..."
//             className="w-full pl-11 pr-4 py-2 sm:py-3 bg-black/50 border border-gray-800 rounded-xl
//                      text-white text-sm sm:text-base placeholder-gray-500
//                      focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500/40
//                      transition-all duration-200"
//             value={searchQuery}
//             onChange={(e) => setSearchQuery(e.target.value)} // Update search input
//           />
//         </div>
//       </div>

//       {/* Network List */}
//       <div className="px-4 space-y-2 h-[350px] sm:h-[400px] overflow-y-auto scrollbar-thin scrollbar-thumb-gray-800 scrollbar-track-transparent">
//         {/* Handle "no networks found" case */}
//         {filteredNetworks.length > 0 ? (
//           filteredNetworks.map((network, index) => (
//             <motion.button
//               key={index}
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: index * 0.1 }}
//               onClick={() => handleNetworkSwitch(network)}
//               className={`w-full p-3 sm:p-4 rounded-lg border transition-all duration-200
//                        ${
//                          caipNetwork?.id === network.id
//                            ? "bg-black/50 border-blue-500/50 hover:border-blue-500"
//                            : "bg-black/50 border-gray-800 hover:border-gray-700 hover:bg-gray-900/30"
//                        }`}
//             >
//               <div className="flex items-center justify-between">
//                 <div className="flex items-center space-x-3 sm:space-x-4">
//                   <div className="relative">
//                     <Image
//                       src={network.assets.imageUrl}
//                       alt={network.name}
//                       width={32}
//                       height={32}
//                       className="rounded-full"
//                     />
//                     {caipNetwork?.id === network.id && (
//                       <div className="absolute -right-1 -bottom-1 bg-blue-500 rounded-full p-1">
//                         <Check className="h-3 w-3 text-white" />
//                       </div>
//                     )}
//                   </div>
//                   <div className="text-left">
//                     <div className="text-sm sm:text-base text-white font-medium mb-0.5">
//                       {network.name}
//                     </div>
//                     <div className="hidden sm:block text-xs sm:text-sm text-gray-500">
//                       Chain ID: {network.id}
//                     </div>
//                     <div className="block sm:hidden text-xs sm:text-sm text-gray-500">
//                       ID: {network.id}
//                     </div>
//                   </div>
//                 </div>

//                 <div className="flex items-center space-x-2">
//                   {caipNetwork?.id === network.id && (
//                     <span className="text-xs sm:text-sm text-blue-400 bg-blue-500/10 px-2 py-1 rounded-full">
//                       Connected
//                     </span>
//                   )}
//                 </div>
//               </div>
//             </motion.button>
//           ))
//         ) : (
//           // No networks found message
//           <div className="text-center text-gray-500 py-6 sm:py-8">
//             <p className="text-sm sm:text-base">
//               No networks matched your search.
//             </p>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default NetworkSelector;
// import React, { useState, useEffect } from "react";
// import { motion } from "framer-motion";
// import { Search, CheckCircle, ChevronLeft } from "lucide-react";
// import { useAppKitNetwork } from "@reown/appkit/react";
// import Image from "next/image";
// import { NetworkSelectorProps } from "./types";

// import { AppKitNetwork } from "@reown/appkit/networks";
// import { Loop, testLoop } from "@/app/providers/customChain";

// const NetworkSelector: React.FC<NetworkSelectorProps> = ({ onBack }) => {
//   const { caipNetwork, switchNetwork } = useAppKitNetwork();
//   const [searchQuery, setSearchQuery] = useState(""); // User input
//   const [debouncedQuery, setDebouncedQuery] = useState(""); // Debounced input
//   const networks = [Loop, testLoop]; // Dynamic network list
//   const [filteredNetworks, setFilteredNetworks] = useState(networks); // Filtered networks

//   // Step 1: Debounce the search query
//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setDebouncedQuery(searchQuery.toLowerCase());
//     }, 300); // Debounce delay of 300ms
//     return () => clearTimeout(timer); // Cleanup the timer on each input change
//   }, [searchQuery]);

//   // Step 2: Filter networks based on the debounced query
//   useEffect(() => {
//     const filtered = networks.filter((network) =>
//       network.name.toLowerCase().includes(debouncedQuery)
//     );
//     setFilteredNetworks(filtered);
//   }, [debouncedQuery, networks]);

//   // Step 3: Handle network switching
//   const handleNetworkSwitch = async (network: AppKitNetwork) => {
//     try {
//       await switchNetwork(network);
//       onBack(); // Go back to the previous view after switching
//     } catch (error) {
//       console.error("Error switching network:", error);
//     }
//   };

//   return (
//     <div className="h-[calc(100%-80px)] bg-black">
//       {/* Header */}
//       <div className="p-4 border-b border-gray-800/50 backdrop-blur-sm bg-black/90 sticky top-0 z-10">
//         <div className="flex items-center space-x-4">
//           <button
//             onClick={onBack}
//             className="p-2 rounded-lg text-gray-400 hover:text-white hover:bg-gray-800/50 transition-all"
//           >
//             <ChevronLeft className="h-5 w-5" />
//           </button>
//           <h2 className="text-base sm:text-lg font-medium text-white">
//             Select Network
//           </h2>
//         </div>
//       </div>

//       {/* Search Bar */}
//       <div className="p-4">
//         <div className="relative">
//           <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
//             <Search className="h-4 w-4 text-gray-500" />
//           </div>
//           <input
//             type="text"
//             placeholder="Search networks..."
//             className="w-full pl-11 pr-4 py-3 bg-black/50 border border-gray-800 rounded-xl
//                      text-white text-sm sm:text-base placeholder-gray-500
//                      focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500/40
//                      transition-all duration-200"
//             value={searchQuery}
//             onChange={(e) => setSearchQuery(e.target.value)} // Update search input
//           />
//         </div>
//       </div>

//       {/* Network List */}
//       <div className="px-4 space-y-2 h-[350px] sm:h-[400px] overflow-y-auto scrollbar-thin scrollbar-thumb-gray-800 scrollbar-track-transparent">
//         {/* Handle "no networks found" case */}
//         {filteredNetworks.length > 0 ? (
//           filteredNetworks.map((network, index) => (
//             <motion.button
//               key={index}
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: index * 0.1 }}
//               onClick={() => handleNetworkSwitch(network)}
//               className={`w-full p-3 sm:p-4 rounded-lg border transition-all duration-200
//                        ${
//                          caipNetwork?.id === network.id
//                            ? "bg-black/50 border-blue-500/50 hover:border-blue-500"
//                            : "bg-black/50 border-gray-800 hover:border-gray-700 hover:bg-gray-900/30"
//                        }`}
//             >
//               <div className="flex items-center justify-between">
//                 <div className="flex items-center space-x-3 sm:space-x-4">
//                   {/* Network Icon */}
//                   <div className="relative">
//                     <Image
//                       src={network.assets.imageUrl}
//                       alt={network.name}
//                       width={32}
//                       height={32}
//                       className="rounded-full"
//                     />
//                   </div>

//                   {/* Network Details */}
//                   <div className="text-left flex flex-col sm:flex-row sm:items-center sm:space-x-4">
//                     <div className="text-sm sm:text-base text-white font-medium mb-1 sm:mb-0">
//                       {network.name}
//                     </div>
//                     <div className="hidden sm:block text-xs sm:text-sm text-gray-500">
//                       Chain ID: {network.id}
//                     </div>
//                     <div className="block sm:hidden text-xs sm:text-sm text-gray-500">
//                       ID: {network.id}
//                     </div>
//                   </div>
//                 </div>

//                 {/* Connected State */}
//                 <div className="flex items-center space-x-2">
//                   {caipNetwork?.id === network.id && (
//                     <CheckCircle
//                       className="w-5 h-5 sm:w-6 sm:h-6 text-blue-400"
//                       // title="Connected"
//                     />
//                   )}
//                 </div>
//               </div>
//             </motion.button>
//           ))
//         ) : (
//           // No networks found message
//           <div className="text-center text-gray-500 py-6 sm:py-8">
//             <p className="text-sm sm:text-base">
//               No networks matched your search.
//             </p>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default NetworkSelector;
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Search, CheckCircle, ChevronLeft } from "lucide-react";
import { useAppKitNetwork } from "@reown/appkit/react";
import Image from "next/image";
import { NetworkSelectorProps } from "./types";

import { AppKitNetwork } from "@reown/appkit/networks";
import { Loop, testLoop } from "@/app/providers/customChain";

const NetworkSelector: React.FC<NetworkSelectorProps> = ({ onBack }) => {
  const { caipNetwork, switchNetwork } = useAppKitNetwork();
  const [searchQuery, setSearchQuery] = useState(""); // User input
  const [debouncedQuery, setDebouncedQuery] = useState(""); // Debounced input
  const networks = [Loop, testLoop]; // Dynamic network list
  const [filteredNetworks, setFilteredNetworks] = useState(networks); // Filtered networks

  // Step 1: Debounce the search query
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedQuery(searchQuery.toLowerCase());
    }, 300); // Debounce delay of 300ms
    return () => clearTimeout(timer); // Cleanup the timer on each input change
  }, [searchQuery]);

  // Step 2: Filter networks based on the debounced query
  useEffect(() => {
    const filtered = networks.filter((network) =>
      network.name.toLowerCase().includes(debouncedQuery)
    );
    setFilteredNetworks(filtered);
  }, [debouncedQuery, networks]);

  // Step 3: Handle network switching
  const handleNetworkSwitch = async (network: AppKitNetwork) => {
    try {
      await switchNetwork(network);
      onBack(); // Go back to the previous view after switching
    } catch (error) {
      console.error("Error switching network:", error);
    }
  };

  return (
    <div className="h-[calc(100%-80px)] bg-black">
      {/* Header */}
      <div className="p-4 border-b border-gray-800/50 backdrop-blur-sm bg-black/90 sticky top-0 z-10">
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
      <div className="p-4">
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
      <div className="px-4 space-y-2 h-[350px] sm:h-[400px] overflow-y-auto scrollbar-thin scrollbar-thumb-gray-800 scrollbar-track-transparent">
        {/* Handle "no networks found" case */}
        {filteredNetworks.length > 0 ? (
          filteredNetworks.map((network, index) => (
            <motion.button
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              onClick={() => handleNetworkSwitch(network)}
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
                      src={network.assets.imageUrl}
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
                      <CheckCircle
                        className="w-5 h-5 text-blue-400 sm:hidden"
                        // title="Connected"
                      />
                      {/* Show 'Connected' text for larger screens */}
                      <div className="flex items-center space-x-2">
                        {caipNetwork?.id === network.id && (
                          <span className="text-xs text-blue-400 bg-blue-500/10 px-2 py-1 rounded-full">
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

export default NetworkSelector;
