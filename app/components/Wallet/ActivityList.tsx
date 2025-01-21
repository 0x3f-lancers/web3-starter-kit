// import React from "react";
// import { motion } from "framer-motion";
// import { Clock, ArrowLeftRight, Download } from "lucide-react";
// import { useAppKitEvents } from "@reown/appkit/react";
// import { CustomActivityEvent } from "./types";

// export const ActivityList: React.FC = () => {
//   // Fetch activity events dynamically from the hook
//   const events = useAppKitEvents() as unknown as Record<
//     string,
//     CustomActivityEvent
//   >; // Type events properly
//   const activities = Object.values(events || {}); // Convert object to array if events exist

//   return (
//     <div className="relative h-[400px] bg-black border border-gray-800 rounded-lg overflow-hidden">
//       {/* Scrollable Area */}
//       <div className="h-full overflow-y-auto scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-gray-900">
//         {activities.length > 0 ? (
//           activities.map((activity, index) => (
//             <motion.div
//               key={index} // Use index as fallback key if no unique ID is available
//               // whileHover={{ scale: 1.01 }}
//               className="p-4 flex items-center justify-between bg-gray-900 rounded-lg mb-3 shadow-md hover:shadow-lg transition-all border border-gray-700 hover:border-gray-600"
//             >
//               {/* Left Section: Icon and Details */}
//               <div className="flex items-center space-x-4">
//                 {/* Icon for Activity Type */}
//                 <div
//                   className={`w-12 h-12 flex items-center justify-center rounded-full text-white ${
//                     activity.type === "Transaction"
//                       ? "bg-purple-600"
//                       : activity.type === "Receive"
//                       ? "bg-green-600"
//                       : activity.type === "Swap"
//                       ? "bg-blue-600"
//                       : "bg-gray-600"
//                   }`}
//                 >
//                   {activity.type === "Transaction" && (
//                     <ArrowLeftRight className="w-6 h-6" />
//                   )}
//                   {activity.type === "Receive" && (
//                     <Download className="w-6 h-6" />
//                   )}
//                   {activity.type === "Swap" && (
//                     <ArrowLeftRight className="w-6 h-6" />
//                   )}
//                   {!["Transaction", "Receive", "Swap"].includes(
//                     activity.type
//                   ) && <Clock className="w-6 h-6" />}
//                 </div>

//                 {/* Details */}
//                 <div>
//                   <div className="text-lg font-semibold text-gray-200">
//                     {activity.type || "Unknown Activity"}
//                   </div>
//                   <div className="text-sm text-gray-400">
//                     {activity.description || "No description available."}
//                   </div>
//                 </div>
//               </div>

//               {/* Right Section: Timestamp */}
//               <div className="text-right">
//                 <div className="text-sm text-gray-400">
//                   {activity.timeStamp || "Unknown Time"}
//                 </div>
//               </div>
//             </motion.div>
//           ))
//         ) : (
//           // Empty State
//           <div className="flex items-center justify-center h-full">
//             <div className="text-center">
//               <Clock className="w-12 h-12 text-gray-600 mx-auto mb-3" />
//               <p className="text-gray-400">No activity found</p>
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };
// import React from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { Clock, ArrowLeftRight, Download } from "lucide-react";
// import { useAppKitEvents } from "@reown/appkit/react";
// import { CustomActivityEvent } from "./types";

// export const ActivityList: React.FC = () => {
//   // Fetch activity events dynamically from the hook
//   const events = useAppKitEvents() as unknown as Record<
//     string,
//     CustomActivityEvent
//   >; // Type events properly
//   const activities = Object.values(events || {}); // Convert object to array if events exist

//   return (
//     <div className="relative space-y-4 px-0">
//       {/* Scrollable Area */}
//       <div className="h-[350px] overflow-y-auto scrollbar-hide space-y-3 scrollbar-thin scrollbar-thumb-gray-800 scrollbar-track-transparent">
//         <AnimatePresence>
//           {activities.length > 0 ? (
//             activities.map((activity, index) => (
//               <motion.div
//                 key={index}
//                 // initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 // exit={{ opacity: 0, y: -20 }}
//                 transition={{ delay: index * 0.05 }}
//                 className="flex items-center justify-between px-4 py-5 bg-black/60 backdrop-blur-md rounded-lg border border-gray-700 hover:bg-gray-900 transition-all space-x-4"
//               >
//                 {/* Icon and Activity Details */}
//                 <div className="flex items-center space-x-3">
//                   {/* Icon */}
//                   <div
//                     className={`w-10 h-10 flex items-center justify-center rounded-lg text-white ${
//                       activity.type === "Transaction"
//                         ? "bg-purple-600"
//                         : activity.type === "Receive"
//                         ? "bg-green-600"
//                         : activity.type === "Swap"
//                         ? "bg-blue-600"
//                         : "bg-gray-600"
//                     }`}
//                   >
//                     {activity.type === "Transaction" && (
//                       <ArrowLeftRight className="w-5 h-5" />
//                     )}
//                     {activity.type === "Receive" && (
//                       <Download className="w-5 h-5" />
//                     )}
//                     {activity.type === "Swap" && (
//                       <ArrowLeftRight className="w-5 h-5" />
//                     )}
//                     {!["Transaction", "Receive", "Swap"].includes(
//                       activity.type
//                     ) && <Clock className="w-5 h-5" />}
//                   </div>

//                   {/* Details */}
//                   <div>
//                     <div className="text-sm font-semibold text-white truncate mb-1">
//                       {activity.type || "Unknown Activity"}
//                     </div>
//                     <div className="text-xs text-gray-400 truncate">
//                       {activity.description || "No description available."}
//                     </div>
//                   </div>
//                 </div>

//                 {/* Timestamp */}
//                 <div className="text-right">
//                   <div className="text-sm text-gray-300">
//                     {activity.timeStamp || "Unknown Time"}
//                   </div>
//                 </div>
//               </motion.div>
//             ))
//           ) : (
//             // Empty State
//             <motion.div
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               className="text-center py-8"
//             >
//               <Clock className="w-12 h-12 text-gray-600 mx-auto mb-2" />
//               <p className="text-gray-400">No activity found</p>
//             </motion.div>
//           )}
//         </AnimatePresence>
//       </div>
//     </div>
//   );
// };

// export default ActivityList;
import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Clock, ArrowLeftRight, Download } from "lucide-react";
import { useAppKitEvents } from "@reown/appkit/react";
import { CustomActivityEvent } from "./types";

const ActivityList: React.FC = () => {
  // Fetch activity events dynamically from the hook
  const events = useAppKitEvents() as unknown as Record<
    string,
    CustomActivityEvent
  >; // Type events properly
  const activities = Object.values(events || {}); // Convert object to array if events exist

  return (
    <div className="relative space-y-4">
      {/* Scrollable Area */}
      <div className="h-[300px] sm:h-[350px] md:h-[400px] overflow-y-auto scrollbar-hide space-y-3 sm:space-y-4 scrollbar-thin scrollbar-thumb-gray-800 scrollbar-track-transparent">
        <AnimatePresence>
          {activities.length > 0 ? (
            activities.map((activity, index) => (
              <motion.div
                key={index}
                // initial={{ opacity: 0, y: 10 }}
                // animate={{ opacity: 1, y: 0 }}
                // exit={{ opacity: 0, y: -10 }}
                // transition={{ delay: index * 0.05 }}
                className="flex items-center justify-between px-3 py-4 sm:px-4 sm:py-5 bg-black/60 backdrop-blur-md rounded-lg border border-gray-700 hover:bg-gray-900 transition-all"
              >
                {/* Icon and Activity Details */}
                <div className="flex items-center space-x-3 sm:space-x-4">
                  {/* Icon */}
                  <div
                    className={`w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 flex items-center justify-center rounded-lg text-white ${
                      activity.type === "Transaction"
                        ? "bg-purple-600"
                        : activity.type === "Receive"
                        ? "bg-green-600"
                        : activity.type === "Swap"
                        ? "bg-blue-600"
                        : "bg-gray-600"
                    }`}
                  >
                    {activity.type === "Transaction" && (
                      <ArrowLeftRight className="w-4 h-4 sm:w-5 sm:h-5" />
                    )}
                    {activity.type === "Receive" && (
                      <Download className="w-4 h-4 sm:w-5 sm:h-5" />
                    )}
                    {activity.type === "Swap" && (
                      <ArrowLeftRight className="w-4 h-4 sm:w-5 sm:h-5" />
                    )}
                    {!["Transaction", "Receive", "Swap"].includes(
                      activity.type
                    ) && <Clock className="w-4 h-4 sm:w-5 sm:h-5" />}
                  </div>

                  {/* Details */}
                  <div>
                    <div className="text-sm sm:text-base font-semibold text-white truncate mb-1">
                      {activity.type || "Unknown Activity"}
                    </div>
                    <div className="text-xs sm:text-sm text-gray-400 truncate">
                      {activity.description || "No description available."}
                    </div>
                  </div>
                </div>

                {/* Timestamp */}
                <div className="text-right">
                  <div className="text-xs sm:text-sm text-gray-300">
                    {activity.timeStamp || "Unknown Time"}
                  </div>
                </div>
              </motion.div>
            ))
          ) : (
            // Empty State
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-6 sm:py-8"
            >
              <Clock className="w-10 h-10 sm:w-12 sm:h-12 text-gray-600 mx-auto mb-2" />
              <p className="text-gray-400 text-sm sm:text-base">
                No activity found
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default ActivityList;
