import type { Metadata } from "next";
import { Space_Grotesk, Inter, IBM_Plex_Mono } from "next/font/google";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ScrollReveal from "@/components/animations/ScrollReveal";
import { buildMetadata } from "@/lib/metadata";
import "@/styles/globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display-family",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body-family",
  display: "swap",
});

const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-mono-family",
  display: "swap",
});

export const metadata: Metadata = buildMetadata({
  title: "United Technologies — AI Automation for Growing Businesses",
  description:
    "United Technologies designs and implements AI-powered workflows that respond to customers, qualify leads, book appointments, process documents, and connect your business systems.",
  path: "/",
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${inter.variable} ${plexMono.variable}`}>
      <body>
        <ScrollReveal />
        <Navbar />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
