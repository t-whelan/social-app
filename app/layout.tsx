import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/navbar/Navbar";
import {
  ClerkProvider,

} from '@clerk/nextjs'

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Nextjs Social App",
  description: "Nextjs social web app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="w-full bg-white px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64">
        <Navbar />
        </div>
        <div className="w-full bg-white px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64">
        {children}
        </div>
      </body>
    </html>
    </ClerkProvider>
  );
}