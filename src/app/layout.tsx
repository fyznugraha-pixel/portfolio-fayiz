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
  metadataBase: new URL("https://www.byfayiz.web.id"),
  title: "Fayiz Apriwansyah Nugraha | Fullstack Web Developer & UI Designer",
  description:
    "Portfolio website of Fayiz Apriwansyah Nugraha, a Fullstack Web Developer and UI Designer creating modern, responsive, and beautiful web interfaces.",
  keywords: [
    "Fayiz Apriwansyah Nugraha",
    "Web Developer",
    "Fullstack Developer",
    "UI Designer",
    "Frontend Developer Indonesia",
    "React Developer",
    "Next.js Developer"
  ],
  authors: [{ name: "Fayiz Apriwansyah Nugraha", url: "https://www.byfayiz.web.id/portofolio" }],
  creator: "Fayiz Apriwansyah Nugraha",
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "https://www.byfayiz.web.id/portofolio",
    title: "Fayiz Apriwansyah Nugraha | Fullstack Web Developer & UI Designer",
    description: "Portfolio website of Fayiz Apriwansyah Nugraha, a Fullstack Web Developer and UI Designer.",
    siteName: "Fayiz Portfolio",
    images: [
      {
        url: "/portofolio/profile/fayiz.png",
        width: 1200,
        height: 630,
        alt: "Fayiz Apriwansyah Nugraha",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Fayiz Apriwansyah Nugraha | Fullstack Web Developer & UI Designer",
    description: "Portfolio website of Fayiz Apriwansyah Nugraha, a Fullstack Web Developer and UI Designer.",
    images: ["/portofolio/profile/fayiz.png"],
  },
  alternates: {
    canonical: "https://www.byfayiz.web.id/portofolio",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Fayiz Apriwansyah Nugraha",
    "jobTitle": "Fullstack Web Developer & UI Designer",
    "url": "https://www.byfayiz.web.id/portofolio",
    "sameAs": [
      "https://github.com/fyznugraha-pixel",
      "https://www.linkedin.com/in/fayiznugraha",
      "https://instagram.com/faizngraha"
    ]
  };

  return (
    <html
      lang="en"
      className={cn("h-full", "antialiased", inter.variable, outfit.variable, plusJakartaSans.variable, jetbrainsMono.variable, "font-sans")}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
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
