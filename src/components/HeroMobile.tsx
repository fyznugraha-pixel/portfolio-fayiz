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

export default function HeroMobile() {
  return (
    <div className="mx-auto flex min-h-screen max-w-md flex-col justify-center px-5 pb-16 pt-28 text-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.96, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative mx-auto w-full max-w-[320px]"
      >
        <div className="absolute -left-6 top-10 h-28 w-28 rounded-full bg-sky-400/25 blur-3xl" />
        <div className="absolute -right-6 bottom-10 h-32 w-32 rounded-full bg-sky-500/20 blur-3xl" />

        <div className="liquid-card relative overflow-hidden rounded-[2rem] p-2.5">
          <div className="relative z-10 h-[360px] overflow-hidden rounded-[1.5rem] bg-white/[0.06]">
            <Image
              src="/profile/fayiz.png"
              alt="Fayiz Apriwansyah Nugraha"
              fill
              priority
              sizes="320px"
              className="object-cover object-[center_62%]"
            />
          </div>
        </div>

        <div className="mt-3 grid grid-cols-3 gap-2.5">
          {profilePhotos.map((photo) => (
            <div
              key={photo.src}
              className="liquid-card overflow-hidden rounded-[1.25rem] p-1.5"
            >
              <div className="relative z-10 h-24 overflow-hidden rounded-[0.9rem] bg-white/[0.06]">
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  sizes="30vw"
                  className="object-cover object-[center_62%]"
                />
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 22 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.85, delay: 0.15 }}
        className="mt-8"
      >
        <div className="liquid-pill mb-4 inline-flex items-center gap-2 px-4 py-2 text-xs text-slate-200">
          <Sparkles size={14} className="text-sky-300" />
          Front-End Web Developer
        </div>

        <h1 className="text-4xl font-semibold leading-tight tracking-tight">
          Building clean and elegant{" "}
          <span className="bg-gradient-to-r from-sky-100 via-cyan-100 to-blue-200 bg-clip-text text-transparent">
            digital interfaces.
          </span>
        </h1>

        <p className="mx-auto mt-5 max-w-sm text-sm leading-7 text-slate-300/90">
          Hi, I’m Fayiz. I design and build responsive web interfaces, mobile UI,
          and clean digital experiences.
        </p>

        <div className="mt-7 grid gap-3">
          <a
            href="#projects"
            className="liquid-button group w-full px-7 py-3 text-sm font-medium"
          >
            View My Work
            <ArrowUpRight
              size={16}
              className="ml-2 inline transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </a>

          <a
            href="#contact"
            className="liquid-button w-full px-7 py-3 text-sm font-medium"
          >
            Contact Me
          </a>
        </div>
      </motion.div>
    </div>
  );
}