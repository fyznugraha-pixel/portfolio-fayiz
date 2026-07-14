"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const logos = [
  { src: "/logo/HTML.webp", alt: "HTML" },
  { src: "/logo/css.webp", alt: "CSS" },
  { src: "/logo/javascript.png", alt: "JavaScript" },
  { src: "/logo/Typescript.webp", alt: "TypeScript" },
  { src: "/logo/react.webp", alt: "React" },
  { src: "/logo/next-js.png", alt: "Next.js", className: "invert" },
  { src: "/logo/Tailwind.webp", alt: "Tailwind CSS" },
  { src: "/logo/php.webp", alt: "PHP" },
  { src: "/logo/laravel.webp", alt: "Laravel" },
  { src: "/logo/blade.png", alt: "Blade" },
  { src: "/logo/nodejs.webp", alt: "NodeJS" },
  { src: "/logo/csharp.webp", alt: "C#" },
  { src: "/logo/mysql.webp", alt: "MySQL" },
  { src: "/logo/figma.webp", alt: "Figma" },
  { src: "/logo/flutter.png", alt: "Flutter" },
];

export default function LogoWall({ speed = 40 }: { speed?: number }) {
  const duplicatedLogos = [...logos, ...logos, ...logos];

  return (
    <div 
      className="relative w-full overflow-hidden flex items-center py-6 pointer-events-none select-none border-t border-b brutalist-border-subtle bg-pure-black/30 backdrop-blur-sm z-20"
      style={{
        maskImage: "linear-gradient(to right, transparent, black 15%, black 85%, transparent)",
        WebkitMaskImage: "linear-gradient(to right, transparent, black 15%, black 85%, transparent)"
      }}
    >
      <motion.div
        className="flex shrink-0 gap-8 md:gap-12 min-w-max pr-8 md:pr-12"
        animate={{ x: ["0%", "-33.333333%"] }}
        transition={{
          repeat: Infinity,
          ease: "linear",
          duration: speed,
        }}
      >
        {duplicatedLogos.map((logo, index) => (
          <div key={index} className="flex items-center justify-center transition-all duration-300 w-12 md:w-16 h-12 md:h-16 relative">
            <Image
              src={logo.src}
              alt={logo.alt}
              fill
              className={`object-contain ${logo.className || ""}`}
            />
          </div>
        ))}
      </motion.div>
    </div>
  );
}
