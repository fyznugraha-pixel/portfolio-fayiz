"use client";


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
      className="relative w-full overflow-hidden flex items-center py-6 select-none border-t border-b brutalist-border-subtle bg-pure-black/30 backdrop-blur-sm z-20 group mask-gradient"
    >
      <style>{`
        .mask-gradient {
          mask-image: linear-gradient(to right, transparent, black 15%, black 85%, transparent);
          -webkit-mask-image: linear-gradient(to right, transparent, black 15%, black 85%, transparent);
        }
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-33.333333%); }
        }
        .animate-marquee {
          animation: marquee linear infinite;
        }
      `}</style>
      <div
        className="flex shrink-0 gap-8 md:gap-12 min-w-max pr-8 md:pr-12 animate-marquee group-hover:[animation-play-state:paused]"
        style={{ animationDuration: `${speed}s` }}
      >
        {duplicatedLogos.map((logo, index) => (
          <div key={index} className="flex items-center justify-center transition-all duration-300 w-12 md:w-16 h-12 md:h-16 relative hover:scale-125 cursor-pointer">
            <img
              src={`/portofolio${logo.src}`}
              alt={logo.alt}
              className={`absolute inset-0 w-full h-full object-contain ${logo.className || ""}`}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
