import type { Metadata } from "next";
import { Ubuntu_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";


const ubuntuMono = Ubuntu_Mono({
  variable: "--font-ubuntu-mono",
  weight: ["400", "700"],
  subsets: ["latin"],

});

export const metadata: Metadata = {
  title: "Mickie2k",
  description: "Mickie2k Portfolio",
  icons: {
    icon: '/icon.png', // /public path
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  
  return (
    <html lang="en">
      
      <body
        className={`${ubuntuMono.className} antialiased`}
        id="__next"
      >
        <Navbar/>
        {children}
      </body>
    </html>
  );
}
