"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import BlurText from "./BlurText";
import SplitText from "./SplitText";
import Aurora from "./Aurora";
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

export default function Hero() {
  const { t } = useLanguage();

  return (
    <div className="w-full relative min-h-[90vh] flex flex-col justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Aurora 
          colorStops={["#E9333A", "#FF4D55", "#0A0A0A"]} 
          amplitude={1.2} 
          speed={0.5} 
          blend={0.5} 
        />
      </div>
      
      <div className="w-full px-6 max-w-[1440px] mx-auto pt-24 md:pt-32 relative z-10 pb-24">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-2">
          
          <div className="col-span-1 md:col-span-11 md:col-start-2">
            <div className="mb-8 md:mb-12 flex flex-col -space-y-4 sm:-space-y-6 md:-space-y-10">
              <div className="font-display-xl text-[14vw] sm:text-[12vw] md:text-[11vw] font-bold leading-[0.9] text-white tracking-tighter uppercase text-left break-words">
                <SplitText
                  text={t.hero.fullstack}
                  className="inline-block"
                  delay={50}
                  animationFrom={{ opacity: 0, transform: 'translate3d(0,50px,0)' }}
                  animationTo={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
                  easing="easeOutCubic"
                  threshold={0.2}
                  rootMargin="-50px"
                />
              </div>
              <div className="font-display-xl text-[14vw] sm:text-[12vw] md:text-[11vw] font-bold leading-[0.9] tracking-tighter uppercase text-left break-words text-transparent" style={{ WebkitTextStroke: "2px #E9333A" }}>
                <SplitText
                  text={t.hero.developer}
                  className="inline-block"
                  delay={50}
                  animationFrom={{ opacity: 0, transform: 'translate3d(0,50px,0)' }}
                  animationTo={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
                  easing="easeOutCubic"
                  threshold={0.2}
                  rootMargin="-50px"
                />
              </div>
            </div>
          </div>

          <div className="col-span-1 md:col-span-5 md:col-start-8 mt-4 md:mt-8 flex flex-col items-start md:items-end text-left md:text-right z-10">
            <div className="font-body text-base md:text-lg text-secondary mb-8 max-w-md">
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
              transition={{ duration: 0.9, delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 w-full md:w-auto mb-16"
            >
              <a
                href="#projects"
                className="brutalist-button px-10 py-5 font-label-mono text-base md:text-lg text-center w-full sm:w-auto bg-accent hover:bg-accent-glow"
                style={{ background: "#E9333A", boxShadow: "0 0 20px rgba(233, 51, 58, 0.3)" }}
              >
                {t.hero.viewWork}
              </a>
              <a
                href="#contact"
                className="glass-panel px-7 py-5 text-sm font-label-mono tracking-widest text-center hover:bg-white/10 transition-colors duration-300 rounded-full text-white w-full sm:w-auto md:hidden block"
              >
                {t.hero.contactMe}
              </a>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1 }}
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
                    className="object-cover object-top opacity-60 hover:opacity-100 transition-all duration-500 group-hover:scale-110 grayscale hover:grayscale-0"
                  />
                </div>
              ))}
            </motion.div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.6 }}
          className="relative md:absolute md:top-[45%] md:left-[5%] w-full max-w-sm mx-auto md:w-72 h-[360px] md:h-[450px] glass-panel border border-white/10 hover:border-[#E9333A]/50 transition-colors duration-500 z-10 group overflow-hidden rounded-xl"
        >
          <Image
            src="/profile/fayiz.png"
            alt="Fayiz Apriwansyah Nugraha"
            fill
            priority
            sizes="(max-width: 768px) 100vw, 300px"
            className="object-cover object-top grayscale opacity-100 group-hover:grayscale-0 transition-all duration-500"
          />
          <div className="absolute inset-0 border border-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 m-2 pointer-events-none"></div>
        </motion.div>

      </div>
    </div>
  );
}
