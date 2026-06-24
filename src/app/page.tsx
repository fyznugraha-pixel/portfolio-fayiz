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
} from "lucide-react";
import { FaWhatsapp, FaLinkedin, FaInstagram } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";
import BorderGlow from "@/components/BorderGlow";
import HeroDesktop from "@/components/HeroDesktop";
import HeroMobile from "@/components/HeroMobile";
import ProjectsDesktop from "@/components/ProjectsDesktop";
import ProjectsMobile from "@/components/ProjectsMobile";
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
    title: "Asia Afrika Festival",
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
      <section id="home" className="relative z-10 border-b brutalist-border-subtle">
        <div className="hidden md:block">
          <HeroDesktop />
        </div>

        <div className="block md:hidden">
          <HeroMobile />
        </div>
      </section>

      <section id="about" className="relative z-10 mx-auto max-w-[1440px] px-6 py-24 border-b brutalist-border-subtle w-full overflow-hidden">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3 w-full">
          <BorderGlow className="p-6 md:p-12 md:col-span-2 glass-card min-w-0">
            <div className="relative z-10">
              <p className="mb-6 font-label-mono text-sm uppercase tracking-widest text-crimson">
                {t.about.tag}
              </p>

              <h2 className="font-display-xl text-3xl sm:text-4xl font-bold md:text-5xl uppercase leading-none tracking-tight mb-8 whitespace-pre-line break-words">
                {t.about.title}
              </h2>

              <p className="mt-5 font-body leading-8 text-secondary max-w-2xl break-words">
                {t.about.description}
              </p>
            </div>
          </BorderGlow>

          <BorderGlow className="p-8 md:p-12 glass-card min-w-0">
            <div className="relative z-10">
              <div className="mb-8 text-white">
                <Palette size={48} strokeWidth={1} />
              </div>

              <h3 className="font-headline-lg text-2xl font-bold uppercase mb-4">{t.about.focusTitle}</h3>

              <p className="font-body leading-7 text-secondary">
                {t.about.focusDescription}
              </p>
            </div>
          </BorderGlow>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3 w-full">
          {translatedServices.map((service, index) => (
            <BorderGlow key={service.title} className="p-8 md:p-10 glass-card min-w-0">
              <div className="relative z-10">
                <div className="mb-6 text-white">
                  {service.icon}
                </div>

                <h3 className="font-headline-lg text-xl font-bold uppercase mb-4">{service.title}</h3>

                <p className="font-body leading-7 text-secondary">
                  {service.description}
                </p>
              </div>
            </BorderGlow>
          ))}
        </div>
      </section>

      <section id="skills" className="relative z-10 mx-auto max-w-[1440px] px-6 py-24 border-b brutalist-border-subtle w-full overflow-hidden">
        <div className="mb-16 grid gap-6 md:grid-cols-[1.2fr_0.8fr] md:items-end w-full">
          <div>
            <p className="mb-4 font-label-mono text-sm uppercase tracking-widest text-crimson">
              {t.skills.tag}
            </p>

            <h2 className="font-display-xl text-5xl font-bold md:text-7xl uppercase leading-none tracking-tighter whitespace-pre-line break-words">
              {t.skills.title}
            </h2>

            <p className="mt-8 max-w-2xl font-body leading-7 text-secondary break-words">
              {t.skills.description}
            </p>
          </div>

          <div className="hidden justify-end md:flex">
            <div className="flex h-32 w-32 items-center justify-center border brutalist-border-subtle text-white glass-card rounded-3xl">
              <Database size={48} strokeWidth={1} />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3 w-full">
          {translatedSkillGroups.map((group) => (
            <BorderGlow
              key={group.title}
              className="p-8 glass-card hover:bg-white/10 transition-colors duration-300 min-w-0"
            >
              <div className="relative z-10">
                <div className="mb-6 text-white border brutalist-border-subtle w-14 h-14 flex items-center justify-center rounded-2xl">
                  {group.icon}
                </div>

                <h3 className="font-headline-lg text-2xl font-bold uppercase mb-4">{group.title}</h3>

                <p className="font-body min-h-[64px] leading-7 text-secondary mb-8">
                  {group.description}
                </p>

                <div className="flex flex-wrap gap-3">
                  {group.skills.map((skill) => (
                    <span key={skill} className="font-label-mono text-xs border border-[#444] px-4 py-2 uppercase text-white hover:bg-crimson hover:border-crimson hover:text-white transition-colors cursor-default rounded-full">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </BorderGlow>
          ))}
        </div>
      </section>

      <section id="projects" className="relative z-10 mx-auto max-w-[1440px] px-6 py-24 border-b brutalist-border-subtle w-full overflow-hidden">
        <div className="mb-16 w-full">
          <p className="mb-4 font-label-mono text-sm uppercase tracking-widest text-crimson">
            {t.projects.tag}
          </p>

          <h2 className="font-display-xl text-4xl font-bold md:text-7xl uppercase leading-none tracking-tighter mb-8 whitespace-pre-line break-words">
            {t.projects.title}
          </h2>

          <p className="max-w-2xl font-body leading-7 text-secondary break-words">
            {t.projects.description}
          </p>
        </div>

        <div className="hidden md:block">
          <ProjectsDesktop projects={translatedProjects} />
        </div>

        <div className="block md:hidden">
          <ProjectsMobile projects={translatedProjects} />
        </div>
      </section>

      <section id="contact" className="relative z-10 mx-auto max-w-[1440px] px-6 py-24 w-full overflow-hidden">
        <BorderGlow className="glass-card p-8 md:p-20 text-center relative overflow-hidden group min-w-0">
          <div className="relative z-10 w-full">
            <p className="mb-6 font-label-mono text-sm uppercase tracking-widest text-crimson">
              {t.contact.tag}
            </p>

            <h2 className="font-display-xl text-4xl font-bold md:text-[80px] uppercase leading-[0.9] tracking-tighter mb-8 max-w-4xl mx-auto break-words">
              {t.contact.title}
            </h2>

            <p className="mx-auto mb-12 max-w-2xl font-body leading-8 text-secondary break-words">
              {t.contact.description}
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=fyznugraha@gmail.com&su=Project%20Inquiry%20-%20Portfolio%20Fayiz&body=Hi%20Fayiz%2C%0A%0AI%20saw%20your%20portfolio%20and%20would%20like%20to%20discuss%20a%20project%20or%20collaboration.%0A%0AThank%20you."
                target="_blank"
                rel="noopener noreferrer"
                className="brutalist-button px-8 py-4 text-sm font-bold flex items-center justify-center gap-2 w-full md:w-auto"
              >
                <Mail size={18} />
                fyznugraha@gmail.com
              </a>

              <a
                href="https://wa.me/6287794693241"
                target="_blank"
                rel="noopener noreferrer"
                className="brutalist-button-outline px-8 py-4 text-sm font-bold flex items-center justify-center gap-2 w-full md:w-auto"
              >
                <FaWhatsapp size={18} />
                WHATSAPP
              </a>

              <a
                href="https://www.linkedin.com/in/fayiznugraha"
                target="_blank"
                rel="noopener noreferrer"
                className="brutalist-button-outline px-8 py-4 text-sm font-bold flex items-center justify-center gap-2 w-full md:w-auto"
              >
                <FaLinkedin size={18} />
                LINKEDIN
              </a>

              <a
                href="https://instagram.com/faizngraha"
                target="_blank"
                rel="noopener noreferrer"
                className="brutalist-button-outline px-8 py-4 text-sm font-bold flex items-center justify-center gap-2 w-full md:w-auto"
              >
                <FaInstagram size={18} />
                INSTAGRAM
              </a>
            </div>
          </div>
          
          <div className="absolute -bottom-24 -right-24 w-64 h-64 border border-[#333] rounded-full opacity-10 pointer-events-none group-hover:scale-150 transition-transform duration-700"></div>
          <div className="absolute -top-24 -left-24 w-64 h-64 border border-[#333] rounded-full opacity-10 pointer-events-none group-hover:scale-150 transition-transform duration-700"></div>
        </BorderGlow>
      </section>

      <footer className="relative z-10 border-t brutalist-border-subtle px-6 py-10 text-center font-label-mono text-sm text-secondary uppercase tracking-widest bg-pure-black">
        {t.contact.footer} {new Date().getFullYear()}
      </footer>
    </main>
  );
}