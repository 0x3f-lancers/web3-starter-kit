import {
  useAppKit,
  useAppKitAccount,
  useDisconnect,
  useAppKitNetwork,
  useAppKitNetworkCore,
  useWalletInfo,
} from "@reown/appkit/react";
import { useAccount } from "wagmi";
import { useState } from "react";
import Image from "next/image";

const compactHash = (hash: string) => {
  return hash.slice(0, 4) + "..." + hash.slice(-5);
};

export const ConnectButtonWithHook = () => {
  const { open } = useAppKit();
  const { isConnected } = useAppKitAccount();

  return (
    <div className="flex items-center justify-center">
      {isConnected ? (
        <UserProfile />
      ) : (
        <button
          onClick={() => open()}
          className="px-8 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold rounded-full shadow-lg 
          hover:from-blue-700 hover:to-blue-800 transition-all duration-300 transform hover:scale-105 
          focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
        >
          Connect Wallet
        </button>
      )}
    </div>
  );
};

export const UserProfile = () => {
  const { open } = useAppKit();
  const { disconnect } = useDisconnect();
  const { isConnected, address, chain } = useAccount();

  const [menuOpen, setMenuOpen] = useState(false);
  const { caipNetwork } = useAppKitNetworkCore();
  const { walletInfo } = useWalletInfo();

  const handleDisconnect = async () => {
    try {
      await disconnect();
      setMenuOpen(false);
    } catch (error) {
      console.error("Failed to disconnect:", error);
    }
  };

  if (!isConnected) {
    return (
      <div className="flex justify-center items-center">
        <button
          onClick={() => open()}
          className="px-8 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold rounded-full shadow-lg 
          hover:from-blue-700 hover:to-blue-800 transition-all duration-300 transform hover:scale-105"
        >
          Connect Wallet
        </button>
      </div>
    );
  }

  return (
    <div className="relative inline-block">
      {/* Profile Button */}
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        className="flex items-center space-x-4 bg-gradient-to-r from-gray-800 to-gray-900 px-6 py-3 rounded-xl shadow-lg
        hover:from-gray-900 hover:to-gray-800 transition-all duration-300 transform hover:scale-105 group
        border border-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50"
      >
        <Image
          alt="image"
          src={caipNetwork?.assets?.imageUrl || "https://xyz.com"}
          width={24}
          height={24}
        />

        <div className="flex items-center space-x-4">
          <div className="flex flex-col items-start">
            <div className="flex items-center space-x-2">
              <span className="w-2 h-2 rounded-full bg-green-500"></span>
              <span className="text-gray-400 text-sm font-mono">
                {compactHash(address || "")}
              </span>
            </div>
          </div>
        </div>
        <div
          className={`text-gray-400 transition-transform duration-300 ${
            menuOpen ? "rotate-180" : ""
          }`}
        >
          ▼
        </div>
      </button>

      {/* Dropdown Menu */}
      {menuOpen && (
        <div
          className="absolute right-0 mt-3 bg-gradient-to-b from-gray-800 to-gray-900 rounded-xl shadow-2xl w-72
          border border-gray-700 transform transition-all duration-300 origin-top-right animate-slideIn"
        >
          <div className="p-4 space-y-3">
            {/* Network Switch Button */}
            <button
              onClick={() => {
                open({ view: "Networks" });
                setMenuOpen(false);
              }}
              className="w-full px-4 py-3 text-left bg-gray-700 bg-opacity-50 rounded-lg text-white
              hover:bg-opacity-75 transition-all duration-300 flex items-center space-x-2"
            >
              <span className="text-blue-400">🌐</span>
              <span>Switch Network</span>
            </button>

            {/* Account Settings */}
            <button
              onClick={() => {
                open();
                setMenuOpen(false);
              }}
              className="w-full px-4 py-3 text-left bg-gray-700 bg-opacity-50 rounded-lg text-white
              hover:bg-opacity-75 transition-all duration-300 flex items-center space-x-2"
            >
              <span className="text-blue-400">⚙️</span>
              <span>Account Settings</span>
            </button>

            {/* Disconnect Button */}
            <button
              onClick={handleDisconnect}
              className="w-full px-4 py-3 text-left bg-red-500 bg-opacity-20 rounded-lg text-red-400
              hover:bg-opacity-30 transition-all duration-300 flex items-center space-x-2"
            >
              <span>🔌</span>
              <span>Disconnect Wallet</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export const ConnectButton = () => {
  return (
    <div className="bg-black rounded-full">
      {/* @ts-ignore */}
      <appkit-button />
    </div>
  );
};
