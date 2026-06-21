import type { Metadata } from "next";
import { Inter, Space_Grotesk, Space_Mono, JetBrains_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import ShapeGrid from "@/components/ShapeGrid";
import { cn } from "@/lib/utils";

const jetbrainsMono = JetBrains_Mono({subsets:['latin'],variable:'--font-mono'});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

const spaceMono = Space_Mono({
  variable: "--font-space-mono",
  weight: ["400", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Fayiz Apriwansyah Nugraha | Portfolio",
  description:
    "Portfolio website of Fayiz Apriwansyah Nugraha, Front-End Web Developer and UI Designer.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn("h-full", "antialiased", inter.variable, spaceGrotesk.variable, spaceMono.variable, "font-mono", jetbrainsMono.variable)}
    >
      <body className="min-h-full flex flex-col font-body bg-pure-black text-on-surface">
        <div className="fixed inset-0 -z-50 opacity-60">
          <ShapeGrid shape="square" hoverTrailAmount={2} squareSize={65} direction="down" speed={0.1} hoverFillColor="#c8102e" borderColor="#ffffff" />
        </div>
        <Navbar />
        {children}
        <Analytics />
      </body>
    </html>
  );
}