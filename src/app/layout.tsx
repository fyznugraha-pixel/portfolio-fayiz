import type { Metadata } from "next";
import { Inter, Outfit, Plus_Jakarta_Sans, JetBrains_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import ShapeGrid from "@/components/ShapeGrid";
import { cn } from "@/lib/utils";
import Providers from "@/components/Providers";

const jetbrainsMono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono" });

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Fayiz Apriwansyah Nugraha | Portfolio",
  description:
    "Portfolio website of Fayiz Apriwansyah Nugraha, Fullstack Web Developer and UI Designer.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn("h-full", "antialiased", inter.variable, outfit.variable, plusJakartaSans.variable, jetbrainsMono.variable, "font-sans")}
    >
      <body className="min-h-full flex flex-col font-sans bg-[#09090b] text-zinc-100 overflow-x-hidden selection:bg-indigo-500/30 selection:text-indigo-200">
        <Providers>
          <div className="fixed inset-0 -z-50 opacity-60">
            <ShapeGrid shape="square" hoverTrailAmount={2} squareSize={65} direction="down" speed={0.1} hoverFillColor="#c8102e" borderColor="#ffffff" />
          </div>
          <Navbar />
          {children}
          <Analytics />
        </Providers>
      </body>
    </html>
  );
}