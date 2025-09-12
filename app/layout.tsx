import type { Metadata } from "next";
import { Toaster } from "@/components/ui/sonner";
import "./globals.css";
import { Providers } from "./providers";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "CartRoyal",
  description: "Africa Global E-Commerce. Shopping like a King",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.className}>
      <head>
        <link rel="stylesheet" href="/css/all.min.css" />
      </head>
      <body className="antialiased scroll-smooth w-screen">
        <Providers>{children}</Providers>
        <Toaster />
      </body>
    </html>
  );
}
