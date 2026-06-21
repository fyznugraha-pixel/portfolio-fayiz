"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import BlurText from "./BlurText";
import TextPressure from "./TextPressure";

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
  return (
    <div className="mx-auto flex min-h-screen max-w-md flex-col justify-center px-6 pb-16 pt-[120px] text-center relative">
      <div className="mb-8 flex flex-col gap-2">
        <div className="relative w-full h-[60px]">
          <TextPressure text="FRONTEND" flex={false} className="text-left" width={true} weight={true} italic={false} textColor="#ffffff" scale={true} />
        </div>
        <div className="relative w-full h-[60px]">
          <TextPressure text="DEVELOPER" flex={false} className="text-left" stroke={true} strokeColor="#dc143c" textColor="transparent" width={true} weight={true} italic={false} scale={true} />
        </div>
      </div>

      <div className="font-body text-base text-secondary mb-8 text-left">
        <BlurText
          text="Hi, I’m Fayiz Apriwansyah Nugraha. Architecting digital monoliths. Brutalist aesthetics meeting high-performance web engineering."
          delay={50}
          animateBy="words"
          direction="bottom"
        />
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.96, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="relative mx-auto w-full mb-8 border-[4px] border-[#333] hover:border-crimson transition-colors duration-300 bg-transparent group overflow-hidden"
      >
        <div className="relative z-10 h-[360px] w-full">
          <Image
            src="/profile/fayiz.png"
            alt="Fayiz Apriwansyah Nugraha"
            fill
            priority
            sizes="320px"
            className="object-cover object-top grayscale opacity-100"
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
          className="brutalist-button border border-white px-8 py-4 font-label-mono text-base hover:scale-105 transition-transform duration-300"
        >
          VIEW MY WORK
        </a>

        <a
          href="#contact"
          className="brutalist-button-outline w-full px-7 py-4 text-sm font-label-mono tracking-widest text-center"
        >
          CONTACT ME
        </a>
      </motion.div>
      
      {/* Abstract background shape element for tension */}
      <div className="absolute top-[10%] left-[5%] w-32 h-32 border-t border-l brutalist-border-subtle opacity-30 pointer-events-none -z-20"></div>
    </div>
  );
}