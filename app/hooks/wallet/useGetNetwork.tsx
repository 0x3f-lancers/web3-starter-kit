import { useEffect, useState } from "react";
import { useAppKitNetwork } from "@reown/appkit/react";
import { networks } from "@/app/providers/wagmi";
import { AppKitNetwork } from "@reown/appkit/networks";
import { toast } from "sonner";

export const useGetNetwork = () => {
  const { caipNetwork, switchNetwork } = useAppKitNetwork();
  const [searchQuery, setSearchQuery] = useState(""); // User input
  const [debouncedQuery, setDebouncedQuery] = useState(""); // Debounced input
  const [filteredNetworks, setFilteredNetworks] = useState(networks); // Filtered networks

  // Debounce the search query to improve performance
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedQuery(searchQuery.toLowerCase());
    }, 300); // Debounce delay of 300ms
    return () => clearTimeout(timer); // Cleanup timer on query change
  }, [searchQuery]);

  // Filter networks based on the debounced query
  useEffect(() => {
    const filtered = networks.filter((network) =>
      network.name.toLowerCase().includes(debouncedQuery)
    );
    setFilteredNetworks(filtered);
  }, [debouncedQuery]);

  // Handle network switching
  const handleNetworkSwitch = async (
    network: AppKitNetwork,
    onBack: () => void
  ) => {
    try {
      await switchNetwork(network); // Switch network
      onBack(); // Navigate back to the previous view
      toast.success(`Switched to ${network.name}`); // Success toast
    } catch (error) {
      console.error("Error switching network:", error);
      toast.error(`Failed to switch to ${network.name}`);
    }
  };

  return {
    caipNetwork,
    searchQuery,
    setSearchQuery,
    filteredNetworks,
    handleNetworkSwitch,
  };
};
