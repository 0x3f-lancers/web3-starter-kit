import { CustomActivityEvent } from "@/app/providers/wallettypes";
import { useAppKitEvents } from "@reown/appkit/react";

export const useGetActivity = () => {
  // Fetch activity events dynamically from the hook
  const events = useAppKitEvents() as unknown as Record<
    string,
    CustomActivityEvent
  >; // Type events properly

  // Convert the events object to an array
  const activities = Object.values(events || {});

  return { activities };
};
