import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Clock, ArrowLeftRight, Download } from "lucide-react";
import { useGetActivity } from "@/app/hooks/wallet/useGetActivity";

const Activities: React.FC = () => {
  const { activities } = useGetActivity(); // Use custom hook for logic

  return (
    <div className="relative space-y-4">
      {/* Scrollable Area */}
      <div className="h-[200px] sm:h-[250px] md:h-[230px] overflow-y-auto scrollbar-hide space-y-3 sm:space-y-4 scrollbar-thin scrollbar-thumb-gray-800 scrollbar-track-transparent">
        <AnimatePresence>
          {activities.length > 0 ? (
            activities.map((activity, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ delay: index * 0.05 }}
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

export default Activities;
