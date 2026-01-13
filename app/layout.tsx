import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Preloader } from "@/components/layout/Preloader";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "SolarFlow - Project Management for Solar EPCs",
  description:
    "Track solar projects from lead to payment. Give customers real-time updates. Get paid on time. Built for rooftop solar EPCs in India.",
  keywords: [
    "solar project management",
    "EPC software",
    "solar tracking",
    "DISCOM approvals",
    "solar installation management",
    "India solar software",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans antialiased`}>
        <Preloader />
        {children}
      </body>
    </html>
  );
}


