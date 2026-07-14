"use client";

import { motion } from "framer-motion";
import {
  Mail,
  Code2,
  Palette,
  Smartphone,
  Globe,
  Layers,
  Braces,
  PenTool,
  Database,
  ArrowRight,
} from "lucide-react";
import { FaWhatsapp, FaLinkedin, FaInstagram } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";
import BorderGlow from "@/components/BorderGlow";
import SpotlightCard from "@/components/SpotlightCard";
import ShinyText from "@/components/ShinyText";
import LogoLoop from "@/components/LogoLoop";
import Hero from "@/components/Hero";
import LogoWall from "@/components/LogoWall";
import Projects from "@/components/Projects";
import MagnetButton from "@/components/MagnetButton";
import ParallaxSection from "@/components/ParallaxSection";
import { getSkillLogo } from "@/lib/getSkillLogo";
import { useLanguage } from "@/context/LanguageContext";

const projects = [
  {
    title: "Festival Cisadane 2026",
    slug: "cisadane",
    category: "Web App / Event Website",
    image: "/projects/cisadane/cisadane1.png",
    description:
      "Festival Cisadane 2026 adalah website event yang dirancang untuk menghadirkan pengalaman digital yang merepresentasikan semangat, budaya, dan energi Festival Cisadane secara modern dan interaktif.",
    tools: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Vercel"],
  },
  {
    title: "Asia Africa Festival",
    slug: "asia-afrika-festival",
    category: "Web App / Event Registration",
    image: "/projects/aaf/aaf.png",
    description:
      "Asia Africa Festival 2026 Website adalah platform event berbasis Next.js dan Supabase untuk menampilkan informasi festival, program acara, registrasi visitor, serta dashboard admin untuk mengelola data pendaftar.",
    tools: ["Next.js", "TypeScript", "Supabase", "Tailwind CSS"],
  },
  {
    title: "Campus Care",
    slug: "campus-care",
    category: "Web App & Flutter Mobile App",
    image: "/projects/campus-care/campus-care.png",
    description:
      "Campus Care adalah sistem berbasis web dan mobile untuk mendukung layanan kampus. Pada versi web, sistem menyediakan fitur Lost & Found serta pengelolaan laporan fasilitas. Sementara pada aplikasi mobile, fitur utamanya berfokus pada pelaporan fasilitas kampus agar mahasiswa dapat membuat dan memantau laporan dengan lebih mudah.",
    tools: ["Flutter", "Laravel", "REST API", "MySQL", "UI Design"],
  },
  {
    title: "LiteraPlus",
    slug: "literaplus",
    category: "Web App / Microservice",
    image: "/projects/literaplus/literaplus.png",
    description:
      "Platform microservice untuk mendukung sistem toko buku melalui fitur donasi buku, barter buku, reward point, dan transaksi layanan. LiteraPlus dirancang sebagai layanan terpisah yang tetap terintegrasi dengan sistem utama.",
    tools: ["NodeJS", "JavaScript", "MySQL", "Microservice"],
  },
  {
    title: "PT Proteksindo",
    slug: "proteksindo",
    category: "UI Design / Figma",
    image: "/projects/proteksindo/proteksindo.png",
    description:
      "Desain antarmuka berbasis Figma untuk kebutuhan digital PT Proteksindo. Project ini berfokus pada tampilan company profile yang profesional, rapi, modern, dan mudah dipahami untuk memperkuat identitas visual perusahaan.",
    tools: ["Figma", "UI Design", "Prototype"],
  },
  {
    title: "Sistem Parkir",
    slug: "sistem-parkir",
    category: "Web App / Laravel Project",
    image: "/projects/parkir/parkir.png",
    description:
      "Sistem Parkir adalah aplikasi web berbasis Laravel dan PHP untuk mengelola akses parkir kampus. Project ini memiliki fitur dashboard admin, scan QR code KTM/kartu pegawai, pengelolaan pengguna, kendaraan, akses parkir, serta log aktivitas parkir.",
    tools: ["Laravel", "PHP", "MySQL", "Blade", "Bootstrap"],
  },
  {
    title: "UpSelf",
    slug: "upself",
    category: "UI Design / Upskilling Platform",
    image: "/projects/upself/upself.png",
    description:
      "Konsep aplikasi pengumpul informasi seputar internship, bootcamp, seminar, lomba, dan peluang pengembangan diri lainnya. UpSelf dirancang untuk membantu mahasiswa dan kalangan muda menemukan kesempatan upskilling dengan lebih mudah.",
    tools: ["Figma", "Mobile UI", "UX Flow", "Prototype"],
  },
  {
    title: "Tactlink Info",
    slug: "tactlinkinfo",
    category: "Web App / Information Portal",
    image: "/projects/tactlinkinfo/tactlink1.png",
    description:
      "Portal informasi digital terintegrasi untuk kebutuhan perusahaan. Tactlink Info menghadirkan solusi akses data yang cepat dan tampilan antarmuka yang modern untuk mendukung operasional bisnis.",
    tools: ["React", "TypeScript", "Tailwind CSS", "Next.js"],
  },
];

const skillGroups = [
  {
    title: "Front-End",
    icon: <Code2 size={24} />,
    description: "Teknologi yang saya gunakan untuk membangun tampilan web.",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "TypeScript",
      "React",
      "Next.js",
      "Tailwind CSS",
      "Responsive Design",
    ],
  },
  {
    title: "Back-End & Programming",
    icon: <Braces size={24} />,
    description: "Bahasa dan framework yang mendukung pengembangan sistem.",
    skills: [
      "PHP",
      "Laravel",
      "Laravel Blade",
      "NodeJS",
      "C#",
      "REST API",
      "MySQL",
    ],
  },
  {
    title: "UI Design",
    icon: <PenTool size={24} />,
    description: "Tools dan pendekatan desain untuk membuat interface modern.",
    skills: [
      "Figma",
      "UI Design",
      "Mobile UI",
      "Prototyping",
      "UX Flow",
      "Design System",
    ],
  },
];

const services = [
  {
    icon: <Globe size={24} />,
    title: "Front-End Web",
    description:
      "Membangun tampilan website yang responsif, rapi, dan nyaman digunakan.",
  },
  {
    icon: <Smartphone size={24} />,
    title: "Mobile UI Design",
    description:
      "Merancang tampilan aplikasi mobile dengan alur yang sederhana dan visual modern.",
  },
  {
    icon: <Layers size={24} />,
    title: "UI System",
    description:
      "Membuat layout, komponen, dan style visual yang konsisten untuk produk digital.",
  },
];

export default function Home() {
  const { t } = useLanguage();

  const projectSlugToKey: Record<string, keyof typeof t.projects.items> = {
    "cisadane": "cisadane",
    "asia-afrika-festival": "aaf",
    "campus-care": "campusCare",
    "literaplus": "literaplus",
    "proteksindo": "proteksindo",
    "sistem-parkir": "parkir",
    "upself": "upself",
    "tactlinkinfo": "tactlinkinfo",
  };

  const translatedProjects = projects.map(proj => ({
    ...proj,
    title: t.projects.items[projectSlugToKey[proj.slug]].title,
    category: t.projects.items[projectSlugToKey[proj.slug]].category,
    description: t.projects.items[projectSlugToKey[proj.slug]].description,
  }));

  const translatedSkillGroups = [
    { ...skillGroups[0], title: t.skills.groups.frontendTitle, description: t.skills.groups.frontendDesc },
    { ...skillGroups[1], title: t.skills.groups.backendTitle, description: t.skills.groups.backendDesc },
    { ...skillGroups[2], title: t.skills.groups.uiTitle, description: t.skills.groups.uiDesc },
  ];

  const translatedServices = [
    { ...services[0], title: t.about.services.frontendTitle, description: t.about.services.frontendDesc },
    { ...services[1], title: t.about.services.mobileTitle, description: t.about.services.mobileDesc },
    { ...services[2], title: t.about.services.uiTitle, description: t.about.services.uiDesc },
  ];

  return (
    <main className="min-h-screen overflow-hidden bg-transparent text-white selection:bg-crimson selection:text-white">
      <section id="home" className="relative z-10 border-b border-white/10 flex flex-col">
        <div className="w-full relative z-10 bg-pure-black pt-[80px] md:pt-[80px]">
          <LogoWall speed={50} />
        </div>

        <div className="flex-grow w-full">
          <Hero />
        </div>
      </section>

      <section id="about" className="relative z-10 mx-auto max-w-[1440px] px-6 py-24 border-b border-white/10 w-full">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3 w-full">
          <ParallaxSection speed={0.4} className="h-full md:col-span-2">
            <SpotlightCard spotlightColor="rgba(255, 255, 255, 0.1)" className="p-6 md:p-12 glass-panel min-w-0 h-full flex flex-col justify-center">
              <div className="relative z-10">
                <div className="mb-4 inline-block font-body font-bold text-sm uppercase tracking-widest text-[#E9333A]">
                  <ShinyText text={t.about.tag} disabled={false} speed={3} className="text-[#E9333A]" />
                </div>

                <h2 className="font-display-xl text-4xl md:text-6xl font-bold uppercase leading-tight tracking-tighter whitespace-pre-line break-words text-white">
                  {t.about.title}
                </h2>

                <p className="mt-5 font-body leading-8 text-secondary max-w-2xl break-words">
                  {t.about.description}
                </p>
              </div>
            </SpotlightCard>
          </ParallaxSection>

          <ParallaxSection speed={0.6} className="h-full">
            <SpotlightCard spotlightColor="rgba(233, 51, 58, 0.15)" className="p-8 md:p-12 glass-panel min-w-0 h-full">
              <div className="relative z-10">
                <div className="mb-8 text-[#E9333A]">
                  <Palette size={48} strokeWidth={1} />
                </div>

                <h3 className="font-headline-lg text-2xl font-bold uppercase mb-4 text-white">{t.about.focusTitle}</h3>

                <p className="font-body leading-7 text-secondary">
                  {t.about.focusDescription}
                </p>
              </div>
            </SpotlightCard>
          </ParallaxSection>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3 w-full">
          {translatedServices.map((service, index) => (
            <ParallaxSection key={service.title} speed={0.4 + (index * 0.1)} className="h-full">
              <SpotlightCard spotlightColor="rgba(255, 255, 255, 0.1)" className="p-8 md:p-10 glass-panel min-w-0 rounded-3xl h-full">
                <div className="relative z-10">
                  <div className="mb-6 text-[#E9333A]">
                    {service.icon}
                  </div>

                  <h3 className="font-headline-lg text-xl font-bold uppercase mb-4 text-white">{service.title}</h3>

                  <p className="font-body leading-7 text-secondary">
                    {service.description}
                  </p>
                </div>
              </SpotlightCard>
            </ParallaxSection>
          ))}
        </div>
      </section>

      <section id="skills" className="relative z-10 mx-auto max-w-[1440px] px-6 py-24 border-b border-white/10 w-full">
        <div className="mb-16 grid gap-6 md:grid-cols-[1.2fr_0.8fr] md:items-end w-full">
          <ParallaxSection speed={0.3}>
            <div>
              <div className="mb-4 inline-block font-body font-bold text-sm uppercase tracking-widest text-[#E9333A]">
                <ShinyText text={t.skills.tag} disabled={false} speed={3} className="text-[#E9333A]" />
              </div>

              <h2 className="font-display-xl text-5xl font-bold md:text-7xl uppercase leading-none tracking-tighter whitespace-pre-line break-words text-white">
                {t.skills.title}
              </h2>

              <p className="mt-8 max-w-2xl font-body leading-7 text-secondary break-words">
                {t.skills.description}
              </p>
            </div>
          </ParallaxSection>

          <ParallaxSection speed={0.6} className="hidden justify-end md:flex">
            <div className="flex h-32 w-32 items-center justify-center glass-panel text-white rounded-3xl shadow-[0_0_30px_rgba(233,51,58,0.15)] border-white/10">
              <Database size={48} strokeWidth={1.5} className="text-[#E9333A]" />
            </div>
          </ParallaxSection>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3 w-full mb-20">
          {translatedSkillGroups.map((group, index) => (
            <ParallaxSection speed={0.3 + (index * 0.1)} key={group.title} className="h-full">
              <SpotlightCard
                spotlightColor="rgba(255, 255, 255, 0.1)"
                className="p-8 glass-panel min-w-0 rounded-3xl h-full flex flex-col"
              >
                <div className="relative z-10 flex-grow">
                  <div className="mb-6 text-[#E9333A] border border-white/10 bg-white/5 w-14 h-14 flex items-center justify-center rounded-2xl">
                    {group.icon}
                  </div>

                  <h3 className="font-headline-lg text-2xl font-bold uppercase mb-4 text-white">{group.title}</h3>

                  <p className="font-body min-h-[64px] leading-7 text-secondary mb-8">
                    {group.description}
                  </p>

                  <div className="flex flex-wrap gap-3">
                    {group.skills.map((skill) => {
                      const logo = getSkillLogo(skill);
                      return (
                        <span key={skill} className="flex items-center gap-2 font-label-mono text-xs border border-white/10 px-4 py-2 uppercase text-white hover:bg-white/10 hover:border-white/20 transition-colors cursor-default rounded-full">
                          {logo && <img src={`/portofolio${logo}`} alt={skill} width={16} height={16} className="object-contain" />}
                          {skill}
                        </span>
                      );
                    })}
                  </div>
                </div>
              </SpotlightCard>
            </ParallaxSection>
          ))}
        </div>

        <div className="w-full flex flex-col gap-6">
          <LogoLoop
            logos={skillGroups.flatMap(group => group.skills).slice(0, Math.ceil(skillGroups.flatMap(group => group.skills).length / 2)).map(skill => {
              const logo = getSkillLogo(skill);
              return {
                node: (
                  <span className="flex items-center gap-3 font-label-mono text-sm border border-white/10 bg-black/40 px-6 py-3 uppercase text-white cursor-default rounded-full backdrop-blur-sm">
                    {logo && <img src={`/portofolio${logo}`} alt={skill} width={16} height={16} className="w-4 h-4 object-contain" />}
                    {skill}
                  </span>
                )
              };
            })}
            direction="left"
            speed={40}
            pauseOnHover={true}
            logoHeight={48}
            gap={24}
            fadeOut={true}
            fadeOutColor="#09090b"
          />
          <LogoLoop
            logos={skillGroups.flatMap(group => group.skills).slice(Math.ceil(skillGroups.flatMap(group => group.skills).length / 2)).map(skill => {
              const logo = getSkillLogo(skill);
              return {
                node: (
                  <span className="flex items-center gap-3 font-label-mono text-sm border border-white/10 bg-black/40 px-6 py-3 uppercase text-white cursor-default rounded-full backdrop-blur-sm">
                    {logo && <img src={`/portofolio${logo}`} alt={skill} width={16} height={16} className="w-4 h-4 object-contain" />}
                    {skill}
                  </span>
                )
              };
            })}
            direction="right"
            speed={40}
            pauseOnHover={true}
            logoHeight={48}
            gap={24}
            fadeOut={true}
            fadeOutColor="#09090b"
          />
        </div>
      </section>

      <section id="projects" className="relative z-10 mx-auto max-w-[1440px] px-6 py-24 border-b border-white/10 w-full">
        <div className="mb-16 flex flex-col md:flex-row md:items-end md:justify-between gap-8 w-full">
          <ParallaxSection speed={0.3} className="max-w-2xl">
            <div>
              <div className="mb-4 inline-block font-body font-bold text-sm uppercase tracking-widest text-[#E9333A]">
                <ShinyText text={t.projects.tag} disabled={false} speed={3} className="text-[#E9333A]" />
              </div>

              <h2 className="font-display-xl text-5xl font-bold md:text-7xl uppercase leading-none tracking-tighter whitespace-pre-line break-words text-white">
                {t.projects.title}
              </h2>
            </div>
          </ParallaxSection>

        </div>

        <div className="flex-grow w-full">
          <Projects projects={translatedProjects} />
        </div>
      </section>

      <section id="contact" className="relative z-10 mx-auto max-w-[1440px] px-6 py-24 w-full mb-20">
        <ParallaxSection speed={0.5}>
          <BorderGlow className="glass-panel p-8 md:p-12 min-w-0 rounded-3xl text-center relative overflow-hidden group">
            <div className="relative z-10 w-full">
              <div className="mb-6 inline-block font-body font-bold text-sm uppercase tracking-widest text-[#E9333A]">
                <ShinyText text={t.contact.tag} disabled={false} speed={3} className="text-[#E9333A]" />
              </div>

              <h2 className="font-display-xl text-4xl font-bold md:text-[80px] uppercase leading-[0.9] tracking-tighter mb-8 max-w-4xl mx-auto break-words text-white">
                {t.contact.title}
              </h2>

              <p className="mx-auto mb-12 max-w-2xl font-body leading-8 text-secondary break-words">
                {t.contact.description}
              </p>

              <div className="flex flex-wrap justify-center gap-4">
                <MagnetButton
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=fyznugraha@gmail.com&su=Project%20Inquiry%20-%20Portfolio%20Fayiz&body=Hi%20Fayiz%2C%0A%0AI%20saw%20your%20portfolio%20and%20would%20like%20to%20discuss%20a%20project%20or%20collaboration.%0A%0AThank%20you."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-full px-8 py-4 text-sm font-bold w-full md:w-auto bg-[#E9333A] hover:bg-[#FF4D55] text-white transition-all shadow-[0_0_20px_rgba(233,51,58,0.3)] hover:shadow-[0_0_30px_rgba(233,51,58,0.5)] border border-white/10 hover:-translate-y-0.5"
                >
                  <Mail className="mr-2" size={18} />
                  EMAIL
                </MagnetButton>
                
                <MagnetButton
                  href="https://wa.me/6281234567890" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-full px-8 py-4 text-sm font-bold w-full md:w-auto bg-[#25D366] hover:bg-[#20bd5a] text-white transition-all shadow-[0_0_20px_rgba(37,211,102,0.3)] hover:shadow-[0_0_30px_rgba(37,211,102,0.5)] border border-white/10 hover:-translate-y-0.5"
                >
                  <FaWhatsapp className="mr-2" size={18} />
                  WHATSAPP
                </MagnetButton>
              </div>

              <div className="mt-12 flex justify-center gap-6">
                <MagnetButton
                  href="https://linkedin.com/in/fayiz" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-secondary hover:text-white transition-colors flex items-center gap-2 text-sm font-bold tracking-wider"
                >
                  <FaLinkedin size={18} />
                  LINKEDIN
                </MagnetButton>
                
                <MagnetButton
                  href="https://instagram.com/fayiz" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-secondary hover:text-white transition-colors flex items-center gap-2 text-sm font-bold tracking-wider"
                >
                  <FaInstagram size={18} />
                  INSTAGRAM
                </MagnetButton>
              </div>
            </div>
            
            <div className="absolute -bottom-24 -right-24 w-64 h-64 border border-white/10 rounded-full opacity-10 pointer-events-none group-hover:scale-150 transition-transform duration-700"></div>
            <div className="absolute -top-24 -left-24 w-64 h-64 border border-white/10 rounded-full opacity-10 pointer-events-none group-hover:scale-150 transition-transform duration-700"></div>
          </BorderGlow>
        </ParallaxSection>
      </section>

      <footer className="relative z-10 border-t border-white/10 px-6 py-10 text-center font-label-mono text-sm text-secondary uppercase tracking-widest bg-pure-black">
        {t.contact.footer} {new Date().getFullYear()}
      </footer>
    </main>
  );
}