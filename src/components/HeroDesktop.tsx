"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import BlurText from "./BlurText";
import TextPressure from "./TextPressure";
import { useLanguage } from "@/context/LanguageContext";

const profilePhotos = [
  {
    src: "/profile/fayiz-2.png",
    alt: "Fayiz profile photo 2",
  },
  {
    src: "/profile/fayiz-3.png",
    alt: "Fayiz profile photo 3",
  },
  {
    src: "/profile/fayiz-4.png",
    alt: "Fayiz profile photo 4",
  },
];

export default function HeroDesktop() {
  const { t } = useLanguage();

  return (
    <div className="w-full px-6 max-w-[1440px] mx-auto pt-8 md:pt-16 relative pb-24">
      <div className="grid grid-cols-12 gap-2">
        <div className="col-span-12 md:col-span-11 md:col-start-2">
          <div className="mb-12 flex flex-col -space-y-4 md:-space-y-6 lg:-space-y-10">
            <div className="w-full">
              <TextPressure 
                text={t.hero.frontend} 
                flex={false} 
                className="font-display-xl text-[14vw] sm:text-[12vw] md:text-[11vw] font-bold leading-[0.9] text-white tracking-tighter uppercase text-left" 
                width={true} 
                weight={true} 
                italic={false} 
                textColor="#ffffff" 
                scale={false}
                dynamicSize={false} 
              />
            </div>
            <div className="w-full">
              <TextPressure 
                text={t.hero.developer} 
                flex={false} 
                className="font-display-xl text-[14vw] sm:text-[12vw] md:text-[11vw] font-bold leading-[0.9] tracking-tighter uppercase text-left" 
                stroke={true} 
                strokeColor="#dc143c" 
                textColor="transparent" 
                width={true} 
                weight={true} 
                italic={false} 
                scale={false}
                dynamicSize={false} 
              />
            </div>
          </div>
        </div>

        <div className="col-span-12 md:col-span-5 md:col-start-8 mt-8 flex flex-col items-start md:items-end text-left md:text-right z-10">
          <div className="font-body text-lg text-secondary mb-8 max-w-md">
            <BlurText
              text={t.hero.description}
              delay={50}
              animateBy="words"
              direction="bottom"
            />
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.3 }}
            className="flex gap-4 w-full md:w-auto mb-16"
          >
            <a
              href="#projects"
              className="brutalist-button border border-white px-10 py-5 font-label-mono text-lg text-center w-full md:w-auto hover:scale-105 transition-transform duration-300"
            >
              {t.hero.viewWork}
            </a>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="hidden md:grid grid-cols-3 gap-0 border brutalist-border-subtle w-full max-w-[450px] bg-transparent z-10"
          >
            {profilePhotos.map((photo, index) => (
              <div
                key={photo.src}
                className={`relative h-40 overflow-hidden group ${index !== 2 ? 'border-r brutalist-border-subtle' : ''}`}
              >
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  sizes="150px"
                  className="object-cover object-top grayscale opacity-100 group-hover:grayscale-0 transition-all duration-500 group-hover:scale-110"
                />
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.4 }}
        className="absolute top-[45%] left-[5%] w-72 h-[450px] border-[4px] border-[#333] hover:border-crimson transition-colors duration-300 bg-transparent z-10 group overflow-hidden"
      >
        <Image
          src="/profile/fayiz.png"
          alt="Fayiz Apriwansyah Nugraha"
          fill
          priority
          sizes="300px"
          className="object-cover object-top grayscale opacity-100 group-hover:grayscale-0 transition-all duration-500"
        />
        <div className="absolute inset-0 border border-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 m-2 pointer-events-none"></div>
      </motion.div>

      {/* Abstract background shape element for tension */}
      <div className="absolute top-[10%] left-[5%] w-64 h-64 border-t border-l brutalist-border-subtle opacity-30 pointer-events-none -z-20"></div>
    </div>
  );
}