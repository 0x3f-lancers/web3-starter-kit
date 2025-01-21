import React from "react";
import { useAppKit } from "@reown/appkit/react";

import { motion } from "framer-motion";
import WalletDetails from "./WalletDetails";

const WalletConnection = () => {
  const appKit = useAppKit();

  return (
    <>
      <motion.div whileHover={{ scale: 1.02 }}>
        {/* <Button
          onClick={() => appKit.open()}
          className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white"
        >
          <Wallet className="w-5 h-5 mr-2" />
          Connect Wallet
        </Button> */}
        <div className="bg-black rounded-full">
          {/* @ts-ignore */}
          <appkit-button />
        </div>
      </motion.div>

      <WalletDetails />
    </>
  );
};

export default WalletConnection;
