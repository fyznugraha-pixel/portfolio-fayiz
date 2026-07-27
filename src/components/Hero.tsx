"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import BlurText from "./BlurText";
import SplitText from "./SplitText";
import TextPressure from "./TextPressure";
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
  const { scrollY } = useScroll();
  
  // Parallax effects
  const textY1 = useTransform(scrollY, [0, 500], [0, -100]);
  const textY2 = useTransform(scrollY, [0, 500], [0, -50]);

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
          
          <div className="col-span-1 md:col-span-12">
            <div className="mb-8 md:mb-12 flex flex-col -space-y-4 sm:-space-y-6 md:-space-y-10 cursor-pointer">
              <motion.div 
                className="w-full text-center"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                style={{ y: textY1 }}
              >
                <TextPressure
                  text={t.hero.fullstack}
                  flex={true}
                  alpha={false}
                  stroke={false}
                  width={true}
                  weight={true}
                  italic={true}
                  textColor="#ffffff"
                  strokeColor="#ff0000"
                  minFontSize={60}
                />
              </motion.div>
              <motion.div 
                className="w-full text-center"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                style={{ y: textY2 }}
              >
                <TextPressure
                  text={t.hero.developer}
                  flex={true}
                  alpha={false}
                  stroke={true}
                  width={true}
                  weight={true}
                  italic={true}
                  textColor="transparent"
                  strokeColor="#E9333A"
                  minFontSize={60}
                />
              </motion.div>
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
                    src={photo.src.startsWith('/portofolio') ? photo.src : `/portofolio${photo.src}`}
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
          className="relative md:absolute md:top-[45%] md:left-[5%] w-full max-w-sm mx-auto md:w-72 h-[360px] md:h-[450px] z-10 group"
        >
          {/* Layer 1: Background Blob Frame (Visuals only, no overflow) */}
          <div
            className="absolute inset-0 mt-8 glass-panel border border-white/10 group-hover:border-[#E9333A]/50 transition-all duration-500 z-0"
            style={{
              borderRadius: "60% 40% 30% 70% / 60% 30% 70% 40%",
            }}
          >
            {/* Inner hover line */}
            <div 
              className="absolute inset-0 border-2 border-white/0 group-hover:border-white/80 transition-all duration-500 m-3 pointer-events-none z-10"
              style={{
                borderRadius: "50% 50% 40% 60% / 60% 40% 60% 40%",
              }}
            ></div>
          </div>

          {/* Layer 2: Masked Image (Renders the bottom half that conforms perfectly to the blob shape) */}
          <div
            className="absolute inset-0 mt-8 overflow-hidden pointer-events-none z-10"
            style={{
              borderRadius: "60% 40% 30% 70% / 60% 30% 70% 40%",
            }}
          >
            {/* Note: top offset is -72px (-40px - 32px) so it aligns perfectly with the outer image */}
            <div className="absolute inset-x-0 bottom-0 -top-[72px] group-hover:-top-[96px] transition-all duration-700">
              <Image
                src="/portofolio/profile/fayiz.png"
                alt="Fayiz Apriwansyah Nugraha"
                fill
                priority
                sizes="(max-width: 768px) 100vw, 300px"
                className="object-contain object-bottom grayscale opacity-90 group-hover:opacity-100 group-hover:grayscale-0 scale-[1.05] group-hover:scale-[1.15] transition-all duration-700"
              />
            </div>
          </div>

          {/* Layer 3: Foreground Pop-out Image (Renders the top half that breaks out of the frame) */}
          <div className="absolute inset-x-0 bottom-0 -top-10 group-hover:-top-16 transition-all duration-700 z-20 pointer-events-none [clip-path:inset(0_0_35%_0)]">
            <Image
              src="/portofolio/profile/fayiz.png"
              alt="Fayiz Apriwansyah Nugraha"
              fill
              priority
              sizes="(max-width: 768px) 100vw, 300px"
              className="object-contain object-bottom grayscale opacity-90 group-hover:opacity-100 group-hover:grayscale-0 scale-[1.05] group-hover:scale-[1.15] transition-all duration-700 drop-shadow-[0_10px_20px_rgba(0,0,0,0.5)] group-hover:drop-shadow-[0_20px_30px_rgba(233,51,58,0.3)]"
            />
          </div>
        </motion.div>

      </div>
    </div>
  );
}
