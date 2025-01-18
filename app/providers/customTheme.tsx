// app/theme.ts
import { Theme, darkTheme } from "@rainbow-me/rainbowkit";

export const customTheme: Theme = darkTheme({
  accentColor: "#FFAD59",
  accentColorForeground: "#000000", // Dark text for contrast
  fontStack: "rounded",
  overlayBlur: "small",
});

// Extend the colors further to match your full design
customTheme.colors = {
  ...customTheme.colors,
  actionButtonSecondaryBackground: "#2E2E2E", // Darker background for secondary buttons
  closeButton: "#FFFFFF", // White for close button icon
  closeButtonBackground: "#333333", // Dark background for close button
  connectButtonBackground: "#FFAD59", // Amber for connect button
  connectButtonBackgroundError: "#FF6347", // Red for errors
  connectButtonInnerBackground: "#FFFFFF", // White inner background
  connectButtonText: "#000000", // Dark text on connect button
  connectButtonTextError: "#FFFFFF", // White text for errors
  connectionIndicator: "#4CAF50", // Green connection indicator
  downloadBottomCardBackground: "#1A1A1A", // Dark theme card background
  downloadTopCardBackground: "#333333", // Top card background
  error: "#FF6347", // Error color
  menuItemBackground: "#1E1E1E", // Background for dropdown menus
  modalBackdrop: "rgba(0, 0, 0, 0.5)", // Semi-transparent black backdrop
  modalBackground: "#1A1A1A", // Dark modal background
  modalBorder: "#333333", // Border around modals
  modalText: "#FFFFFF", // White text for modals
  modalTextDim: "#AAAAAA", // Dimmed text in modals
  modalTextSecondary: "#CCCCCC", // Secondary modal text
  profileAction: "#FFAD59", // Highlighted profile actions
  profileActionHover: "#FFBF7F", // Slightly lighter hover effect
  profileForeground: "#1A1A1A", // Dark profile foreground
  selectedOptionBorder: "#FFAD59", // Amber border for selected options
  standby: "#999999", // Disabled state
};

// Add custom shadows to align with your theme’s aesthetics
customTheme.shadows = {
  connectButton: "0px 4px 12px rgba(255, 173, 89, 0.4)", // Soft glow for connect button
  dialog: "0px 6px 20px rgba(0, 0, 0, 0.6)", // Strong shadow for dialogs
  profileDetailsAction: "0px 2px 8px rgba(255, 173, 89, 0.2)", // Amber shadow for profile actions
  selectedOption: "0px 4px 10px rgba(255, 173, 89, 0.3)", // Glow for selected options
  selectedWallet: "0px 6px 16px rgba(0, 0, 0, 0.6)", // Strong shadow for wallet selection
  walletLogo: "0px 2px 8px rgba(255, 255, 255, 0.2)", // Subtle shadow for wallet logos
};

// Adjust radii for smooth rounded elements
customTheme.radii = {
  actionButton: "8px", // Smooth radius for buttons
  connectButton: "12px", // Slightly rounded connect button
  modal: "16px", // Rounded corners for modals
  menuButton: "8px", // Rounded menu buttons
  modalMobile: "12px", // Compact rounding on mobile
};
