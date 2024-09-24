import BlobBg from "@/components/blob-bg";
import Footer from "@/components/footer";
import Navbar from "@/components/nav/navbar";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] })


export const metadata: Metadata = {
  title: "Peer 2 peer consorts",
  description: "Money lending corporation based in makerere university",
  viewport: 'width=device-width, initial-scale=1'
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "flex flex-col items-center w-full h-auto antialiased",
          inter.className
        )}
      >
        <Navbar />

        {children}

        <Footer />
        <BlobBg />
      </body>
    </html>
  );
}
