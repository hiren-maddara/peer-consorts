import Footer from "@/components/footer";
import Navbar from "@/components/nav/navbar";
import { Toaster } from "@/components/ui/toaster";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Head from "next/head";
import "./globals.css";
import { ThemeProvider } from "@/components/providers/theme-provider";

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
        <ThemeProvider
          enableSystem
          defaultTheme="light"
          attribute="class"
          disableTransitionOnChange
          themes={["light", "dark"]}
        >
          <Navbar />

          {children}

          <Footer />
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
