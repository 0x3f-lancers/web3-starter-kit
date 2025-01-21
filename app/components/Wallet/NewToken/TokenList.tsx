// import React from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { Wallet } from "lucide-react";
// import { defaultTokens } from "./data"; // Import tokens from data.ts

// const TokenList: React.FC = () => {
//   // Fetch tokens from data.ts
//   const tokens = defaultTokens;

//   return (
//     <div className="relative space-y-4 px-0">
//       <div className="h-[350px] overflow-y-auto scrollbar-hide space-y-2 scrollbar-thin scrollbar-thumb-gray-800 scrollbar-track-transparent">
//         <AnimatePresence>
//           {tokens.length > 0 ? (
//             tokens.map((token, index) => (
//               <motion.div
//                 key={index}
//                 // initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 // exit={{ opacity: 0, y: -20 }}
//                 transition={{ delay: index * 0.05 }}
//                 className="flex items-center justify-between p-4 bg-black/50 backdrop-blur-sm rounded-xl border border-gray-800 hover:bg-gray-900/50 transition-colors"
//               >
//                 <div className="flex items-center space-x-3">
//                   <img
//                     src={token.icon}
//                     alt={token.symbol}
//                     className="w-8 h-8 rounded-full bg-gray-800"
//                   />
//                   <div>
//                     <div className="font-medium text-gray-200">
//                       {token.symbol}
//                     </div>
//                     <div className="text-sm text-gray-400">
//                       {token.balance} {token.symbol}
//                     </div>
//                   </div>
//                 </div>
//                 <div className="text-right">
//                   <div className="font-medium text-gray-200">
//                     ${token.value}
//                   </div>
//                   <div className="text-sm text-green-400">{token.change}%</div>
//                 </div>
//               </motion.div>
//             ))
//           ) : (
//             <motion.div
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               className="text-center py-8"
//             >
//               <Wallet className="w-12 h-12 text-gray-600 mx-auto mb-2" />
//               <p className="text-gray-400">No tokens found</p>
//             </motion.div>
//           )}
//         </AnimatePresence>
//       </div>
//     </div>
//   );
// };

// export default TokenList;
import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Wallet } from "lucide-react";
import Image from "next/image"; // Import Next.js Image component
import { defaultTokens } from "./data"; // Import tokens from data.ts

const TokenList: React.FC = () => {
  // Fetch tokens from data.ts
  const tokens = defaultTokens;

  return (
    <div className="relative space-y-4">
      <div className="h-[300px] sm:h-[350px] md:h-[400px] overflow-y-auto scrollbar-hide space-y-3 sm:space-y-4 scrollbar-thin scrollbar-thumb-gray-800 scrollbar-track-transparent">
        <AnimatePresence>
          {tokens.length > 0 ? (
            tokens.map((token, index) => (
              <motion.div
                key={index}
                // initial={{ opacity: 0, y: 10 }}
                // animate={{ opacity: 1, y: 0 }}
                // exit={{ opacity: 0, y: -10 }}
                // transition={{ delay: index * 0.05 }}
                className="flex items-center justify-between p-3 sm:p-4 bg-black/50 backdrop-blur-sm rounded-xl border border-gray-800 hover:bg-gray-900/50 transition-colors"
              >
                <div className="flex items-center space-x-3 sm:space-x-4">
                  {/* Use Next.js Image component for optimized images */}
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
                <div className="text-right">
                  <div className="font-medium text-gray-200 text-sm sm:text-base md:text-lg">
                    ${token.value}
                  </div>
                  <div className="text-xs sm:text-sm text-green-400">
                    {token.change}%
                  </div>
                </div>
              </motion.div>
            ))
          ) : (
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
    </div>
  );
};

export default TokenList;
