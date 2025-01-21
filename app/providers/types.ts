import { AppKitNetworkButton } from "@reown/appkit";
// import { AppKitNetwork } from "@reown/appkit/networks";

export interface CustomAppKitNetwork extends AppKitNetworkButton {
  assets?: {
    imageId: string;
    imageUrl: string;
  };
}
