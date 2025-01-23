import React from "react";

const CustomTokenListSkeleton: React.FC = () => {
  return (
    <div className="flex items-center justify-between p-3 sm:p-4 bg-black/50 backdrop-blur-sm rounded-xl border border-gray-800 hover:bg-gray-900/50 transition-colors animate-pulse">
      {/* Skeleton Icon */}
      <div className="flex items-center space-x-3 sm:space-x-4">
        <div className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 rounded-full bg-gray-700" />
        <div>
          <div className="h-4 w-16 bg-gray-700 rounded-sm mb-1 sm:mb-2" />
          <div className="h-3 w-24 bg-gray-700 rounded-sm" />
        </div>
      </div>

      {/* Skeleton Value and Change */}
      <div className="text-right">
        <div className="h-4 w-20 bg-gray-700 rounded-sm mb-1 sm:mb-2" />
        <div className="h-3 w-12 bg-gray-700 rounded-sm" />
      </div>
    </div>
  );
};

export default CustomTokenListSkeleton;
