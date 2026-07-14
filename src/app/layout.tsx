import type { Metadata } from "next";
import { Inter, Outfit, Plus_Jakarta_Sans, JetBrains_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import CursorGrid from "@/components/CursorGrid";
import GradualBlur from "@/components/GradualBlur";
import { cn } from "@/lib/utils";
import Providers from "@/components/Providers";
import LenisProvider from "@/components/LenisProvider";

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
          <div className="noise-overlay"></div>
          <LenisProvider>
            <div className="fixed inset-0 -z-50 pointer-events-none opacity-60">
              <CursorGrid color="#E9333A" />
            </div>
            <Navbar />
            <GradualBlur preset="page-footer" zIndex={40} hoverIntensity={0} animated={true} height="7.5rem" strength={5} duration="0.15s" />
            {children}
            <Analytics />
          </LenisProvider>
        </Providers>
      </body>
    </html>
  );
}