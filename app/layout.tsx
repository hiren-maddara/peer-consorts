import BlobBg from "@/components/blob-bg";
import Footer from "@/components/footer";
import Navbar from "@/components/nav/navbar";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] })


export const metadata: Metadata = {
  title: "Peer 2 peer consorts",
  description: "Money lending corporation based in makerere university",
  icons: {
    icon: "/favicon32.png"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.png" sizes="any" />
      </Head>
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
