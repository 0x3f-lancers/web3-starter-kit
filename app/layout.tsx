import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Providers from "@/app/providers/provider";
import { headers } from "next/headers"; // added

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "web3-starter-kit",
  description: "web3 starter kit with reown(wallet connect)",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const headersObj = await headers();
  const cookies = headersObj.get("cookie");

  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers cookies={cookies}>{children}</Providers>
      </body>
    </html>
  );
}
