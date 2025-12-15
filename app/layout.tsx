import type React from "react";
import type { Metadata } from "next";
import { outfit, clashDisplay } from "./fonts";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";

export const metadata: Metadata = {
  title: "Novacrust Crypto Widget",
  description: "Crypto conversion widget",
  icons: {
    icon: [
      {
        url: "/icon.svg",
        media: "(prefers-color-scheme: light)",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${outfit.variable} ${clashDisplay.variable}`}>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
