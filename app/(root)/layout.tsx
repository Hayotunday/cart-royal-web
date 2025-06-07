import type { Metadata } from "next";

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
      <body className="font-raleway antialiased scroll-smooth w-full h-full">
        {children}
      </body>
    </html>
  );
}
