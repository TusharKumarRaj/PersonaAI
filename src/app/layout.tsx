import type { Metadata } from "next";
import { DM_Sans, Permanent_Marker } from "next/font/google";
import { PageBackground } from "@/components/PageBackground";
import "./globals.css";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
});

const permanentMarker = Permanent_Marker({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-permanent-marker",
});

export const metadata: Metadata = {
  title: "Persona AI",
  description: "Chat with Hitesh Choudhary and Piyush Garg",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${dmSans.variable} ${permanentMarker.variable} relative z-10 antialiased`}>
        <PageBackground />
        {children}
      </body>
    </html>
  );
}
