import { CustomActivityEvent } from "@/app/providers/wallettypes";
import { useAppKitEvents } from "@reown/appkit/react";

export const useGetActivity = () => {
  // Fetch raw events from AppKit
  const rawEvents = useAppKitEvents();

  // Initialize empty activities array
  let activities: CustomActivityEvent[] = [];

  // Only process events if they exist and are in the expected format
  if (rawEvents && typeof rawEvents === "object") {
    try {
      // Convert to record and then to array
      const events = rawEvents as unknown as Record<
        string,
        CustomActivityEvent
      >;

      // Filter valid activities - explicitly check for valid structure
      activities = Object.values(events).filter(
        (activity) =>
          // Make sure it's not null/undefined
          activity &&
          // Make sure type is one of the expected values (and not "track" or "Unknown Activity")
          activity.type &&
          ["Transaction", "Receive", "Swap"].includes(activity.type) &&
          // Make sure it has a description that's not the default
          activity.description &&
          activity.description !== "No description available." &&
          // Make sure it has a timestamp
          activity.timeStamp
      );
    } catch (error) {
      console.error("Error processing activity events:", error);
      activities = [];
    }
  }

  return { activities };
};
