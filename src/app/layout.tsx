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
import LanguageSuggestion from "@/components/LanguageSuggestion";

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
      <body className="min-h-full flex flex-col font-sans bg-black text-zinc-100 overflow-x-hidden selection:bg-[#E9333A]/30 selection:text-white">
        <Providers>
          <div className="noise-overlay"></div>
          <LenisProvider>
            <div className="fixed inset-0 -z-50 pointer-events-none opacity-60">
              <CursorGrid color="#E9333A" />
            </div>
            <Navbar />
            <LanguageSuggestion />
            {children}
            <Analytics />
          </LenisProvider>
        </Providers>
      </body>
    </html>
  );
}