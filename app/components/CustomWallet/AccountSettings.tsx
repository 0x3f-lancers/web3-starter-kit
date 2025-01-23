import React from "react";
import { ChevronLeft, LogOut } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { formatBalance } from "@/app/utils/format";
import { useGetAccountSettings } from "@/app/hooks/wallet/useGetAccountSettings";

const AccountSettings: React.FC<{ onBack: () => void }> = ({ onBack }) => {
  const {
    address,
    isConnected,
    caipNetwork,
    balance,
    isLoading,
    error,
    actionButtons,
    open,
  } = useGetAccountSettings();

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
        <div className="flex flex-col items-center text-center space-y-4 animate-[fadeIn_0.5s_ease-out_forwards]">
          {/* Profile Image */}
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

          {/* Address */}
          <div className="space-y-2">
            <div className="text-white text-xl font-bold tracking-wide bg-gradient-to-b from-white to-white/70 bg-clip-text">
              {isConnected
                ? address?.slice(0, 6) + "..." + address?.slice(-4)
                : "Not connected"}
            </div>
            {/* Balance */}
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
                  {React.createElement(Icon, {
                    className: "w-5 h-5 text-white",
                  })}
                </div>
                <span className="text-sm font-medium">{label}</span>
              </div>
            </button>
          ))}
        </div>

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
