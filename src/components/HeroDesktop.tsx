"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight, Sparkles } from "lucide-react";

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
  return (
    <div className="mx-auto grid min-h-screen max-w-6xl items-center gap-12 px-6 pt-32 text-left md:grid-cols-[1.05fr_0.95fr]">
      <div>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="liquid-pill mb-5 inline-flex items-center gap-2 px-4 py-2 text-sm text-slate-200"
        >
          <Sparkles size={16} className="text-sky-300" />
          Front-End Web Developer & UI Designer
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.1 }}
          className="text-5xl font-semibold tracking-tight md:text-7xl"
        >
          Designing clean interfaces and building{" "}
          <span className="bg-gradient-to-r from-sky-100 via-cyan-100 to-blue-200 bg-clip-text text-transparent">
            elegant digital experiences.
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="mt-6 max-w-2xl text-base leading-8 text-slate-300/90 md:text-lg"
        >
          Hi, I’m Fayiz Apriwansyah Nugraha. I create modern web interfaces,
          mobile app designs, and responsive digital experiences with a clean,
          elegant, and user-focused approach.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.3 }}
          className="mt-9 flex gap-4"
        >
          <a
            href="#projects"
            className="liquid-button group px-7 py-3 text-sm font-medium"
          >
            View My Work
            <ArrowUpRight
              size={16}
              className="ml-2 inline transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </a>

          <a
            href="#contact"
            className="liquid-button px-7 py-3 text-sm font-medium"
          >
            Contact Me
          </a>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.96, y: 24 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.25 }}
        className="relative mx-auto w-full max-w-[460px]"
      >
        <div className="absolute -left-8 top-12 h-36 w-36 rounded-full bg-sky-400/25 blur-3xl" />
        <div className="absolute -right-8 bottom-16 h-44 w-44 rounded-full bg-sky-500/20 blur-3xl" />

        <div className="liquid-card relative overflow-hidden rounded-[2.5rem] p-3">
          <div className="relative z-10 h-[500px] overflow-hidden rounded-[2rem] bg-white/[0.06]">
            <Image
              src="/profile/fayiz.png"
              alt="Fayiz Apriwansyah Nugraha"
              fill
              priority
              sizes="460px"
              className="object-cover object-[center_62%]"
            />
          </div>
        </div>

        <div className="mt-4 grid grid-cols-3 gap-3">
          {profilePhotos.map((photo) => (
            <div
              key={photo.src}
              className="liquid-card overflow-hidden rounded-[1.5rem] p-2"
            >
              <div className="relative z-10 h-40 overflow-hidden rounded-[1rem] bg-white/[0.06]">
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  sizes="140px"
                  className="object-cover object-[center_62%]"
                />
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}