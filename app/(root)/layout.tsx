import type { Metadata } from "next";
import { Toaster } from "sonner";

export const metadata: Metadata = {
  title: "CartRoyal",
  description: "",
};

export default function HomeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="/css/all.min.css" />
      </head>
      <body className="font-inter antialiased scroll-smooth w-full h-full">
        <main>
          {children}
          <Toaster />
        </main>
      </body>
    </html>
  );
}
