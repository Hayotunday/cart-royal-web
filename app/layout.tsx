import type { Metadata } from "next";
import { Toaster } from "@/components/ui/sonner";
import "./globals.css";
import { Providers } from "./providers";

export const metadata: Metadata = {
  title: "CartRoyal",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="/css/all.min.css" />
      </head>
      <body className="font-inter antialiased scroll-smooth">
        <Providers>{children}</Providers>
        <Toaster />
      </body>
    </html>
  );
}
