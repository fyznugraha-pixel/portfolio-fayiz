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

export default function HeroMobile() {
  const { t } = useLanguage();

  return (
    <div className="mx-auto flex flex-col justify-center px-6 pb-16 pt-8 text-center relative">
      <div className="mb-8 flex flex-col -space-y-2 sm:-space-y-4">
        <motion.div 
          className="w-full"
          initial={{ opacity: 0, x: -40, filter: "blur(10px)" }}
          animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          <TextPressure 
            text={t.hero.fullstack} 
            flex={false} 
            className="font-display-xl text-[14vw] sm:text-[12vw] font-bold leading-[0.9] text-white tracking-tighter uppercase text-left break-words" 
            width={true} 
            weight={true} 
            italic={false} 
            textColor="#ffffff" 
            scale={false}
            dynamicSize={false} 
          />
        </motion.div>
        <motion.div 
          className="w-full"
          initial={{ opacity: 0, x: 40, filter: "blur(10px)" }}
          animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
          transition={{ duration: 1, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
        >
          <TextPressure 
            text={t.hero.developer} 
            flex={false} 
            className="font-display-xl text-[14vw] sm:text-[12vw] font-bold leading-[0.9] tracking-tighter uppercase text-left break-words" 
            stroke={true} 
            strokeColor="#4f46e5" 
            textColor="transparent" 
            width={true} 
            weight={true} 
            italic={false} 
            scale={false}
            dynamicSize={false} 
          />
        </motion.div>
      </div>

      <div className="font-body text-base text-secondary mb-8 text-left">
        <BlurText
          text={t.hero.description}
          delay={50}
          animateBy="words"
          direction="bottom"
        />
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.96, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="relative mx-auto w-full mb-8 glass-panel border border-white/10 hover:border-indigo-500/50 transition-colors duration-500 z-10 group overflow-hidden rounded-xl"
      >
        <div className="relative z-10 h-[360px] w-full">
          <Image
            src="/profile/fayiz.png"
            alt="Fayiz Apriwansyah Nugraha"
            fill
            priority
            sizes="320px"
            className="object-cover object-top opacity-80"
          />
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 22 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.85, delay: 0.3 }}
        className="grid gap-3"
      >
        <a
          href="#projects"
          className="brutalist-button px-8 py-4 font-label-mono text-base text-center"
        >
          {t.hero.viewWork}
        </a>

        <a
          href="#contact"
          className="glass-panel px-7 py-4 text-sm font-label-mono tracking-widest text-center hover:bg-white/10 transition-colors duration-300 rounded-full text-white"
        >
          {t.hero.contactMe}
        </a>
      </motion.div>
      
      {/* Abstract background shape element for tension */}
      <div className="absolute top-[10%] left-[5%] w-32 h-32 border-t border-l brutalist-border-subtle opacity-30 pointer-events-none -z-20"></div>
    </div>
  );
}