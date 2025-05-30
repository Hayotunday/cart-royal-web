import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Cart Royal",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-raleway antialiased scroll-smooth">{children}</body>
    </html>
  );
}
