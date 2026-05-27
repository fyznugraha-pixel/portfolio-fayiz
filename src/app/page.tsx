"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Mail,
  Code2,
  Palette,
  Sparkles,
  Smartphone,
  Globe,
  Layers,
  Braces,
  PenTool,
  Database,
} from "lucide-react";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

const navItems = [
  { label: "Home", href: "#home", id: "home" },
  { label: "About", href: "#about", id: "about" },
  { label: "Skills", href: "#skills", id: "skills" },
  { label: "Projects", href: "#projects", id: "projects" },
  { label: "Contact", href: "#contact", id: "contact" },
];

const projects = [
  {
    title: "Campus Care",
    category: "Web App & Flutter Mobile App",
    image: "/projects/campus-care.png",
    description:
      "Aplikasi pelaporan fasilitas kampus yang terdiri dari web dashboard dan aplikasi mobile Flutter. Sistem ini membantu mahasiswa membuat laporan fasilitas rusak, melihat riwayat laporan secara publik, serta memudahkan admin dan satpam dalam memantau status perbaikan.",
    tools: ["Flutter", "Laravel", "REST API", "UI Design"],
  },
  {
    title: "LiteraPlus",
    category: "Web App / Microservice",
    image: "/projects/literaplus.png",
    description:
      "Platform microservice untuk mendukung sistem toko buku melalui fitur donasi buku, barter buku, reward point, dan transaksi layanan. LiteraPlus dirancang sebagai layanan terpisah yang tetap terintegrasi dengan sistem utama.",
    tools: ["NodeJS", "JavaScript", "MySQL", "Microservice"],
  },
  {
    title: "PT Proteksindo",
    category: "UI Design / Figma",
    image: "/projects/proteksindo.png",
    description:
      "Desain antarmuka berbasis Figma untuk kebutuhan digital PT Proteksindo. Project ini berfokus pada tampilan company profile yang profesional, rapi, modern, dan mudah dipahami untuk memperkuat identitas visual perusahaan.",
    tools: ["Figma", "UI Design", "Prototype"],
  },
  {
    title: "UpSelf",
    category: "UI Design / Upskilling Platform",
    image: "/projects/upself.png",
    description:
      "Konsep aplikasi pengumpul informasi seputar internship, bootcamp, seminar, lomba, dan peluang pengembangan diri lainnya. UpSelf dirancang untuk membantu mahasiswa dan kalangan muda menemukan kesempatan upskilling dengan lebih mudah.",
    tools: ["Figma", "Mobile UI", "UX Flow", "Prototype"],
  },
];

const skillGroups = [
  {
    title: "Front-End",
    icon: <Code2 size={22} />,
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
    icon: <Braces size={22} />,
    description: "Bahasa dan framework yang mendukung pengembangan sistem.",
    skills: [
      "PHP",
      "Laravel",
      "Laravel Blade",
      "C#",
      "REST API Integration",
      "MySQL",
    ],
  },
  {
    title: "UI Design",
    icon: <PenTool size={22} />,
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
    icon: <Globe size={22} />,
    title: "Front-End Web",
    description:
      "Membangun tampilan website yang responsif, rapi, dan nyaman digunakan.",
  },
  {
    icon: <Smartphone size={22} />,
    title: "Mobile UI Design",
    description:
      "Merancang tampilan aplikasi mobile dengan alur yang sederhana dan visual modern.",
  },
  {
    icon: <Layers size={22} />,
    title: "UI System",
    description:
      "Membuat layout, komponen, dan style visual yang konsisten untuk produk digital.",
  },
];

type Project = {
  title: string;
  category: string;
  image: string;
  description: string;
  tools: string[];
};

function ProjectCard({ project }: { project: Project }) {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ duration: 0.25 }}
      className="liquid-card group overflow-hidden"
    >
      <div className="relative z-10 h-64 overflow-hidden border-b border-white/15 bg-white/[0.05]">
        <Image
          src={project.image}
          alt={`${project.title} preview`}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover transition duration-500 group-hover:scale-105"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-[#050713]/75 via-transparent to-transparent" />

        <a
          href="#"
          aria-label={`Open ${project.title}`}
          className="project-arrow liquid-icon flex h-11 w-11 items-center justify-center rounded-full text-slate-950 transition duration-300 group-hover:scale-105"
        >
          <ArrowUpRight size={18} strokeWidth={2.4} />
        </a>
      </div>

      <div className="relative z-10 p-7">
        <div className="mb-6">
          <p className="text-sm text-sky-300">{project.category}</p>

          <h3 className="mt-3 text-2xl font-semibold">{project.title}</h3>
        </div>

        <p className="leading-7 text-slate-400">{project.description}</p>

        <div className="mt-6 flex flex-wrap gap-2">
          {project.tools.map((tool) => (
            <span key={tool} className="liquid-chip px-3 py-1 text-xs">
              {tool}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default function Home() {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const sectionIds = navItems.map((item) => item.id);

      for (const sectionId of sectionIds) {
        const section = document.getElementById(sectionId);

        if (section) {
          const rect = section.getBoundingClientRect();

          if (rect.top <= 160 && rect.bottom >= 160) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <main className="portfolio-bg min-h-screen overflow-hidden text-white">
      <div className="portfolio-decor" aria-hidden="true" />
      <div className="portfolio-noise" aria-hidden="true" />

      <nav className="liquid-nav fixed left-1/2 top-5 z-50 w-[92%] max-w-6xl -translate-x-1/2 px-5 py-3">
        <div className="relative z-10 flex items-center justify-between">
          <a href="#home" className="text-sm font-semibold tracking-wide">
            Fayiz<span className="text-sky-300">.</span>
          </a>

          <div className="hidden items-center gap-2 text-sm text-slate-300 md:flex">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;

              return (
                <a
                  key={item.id}
                  href={item.href}
                  className={`rounded-full px-4 py-2 transition ${
                    isActive
                      ? "liquid-active text-white"
                      : "text-slate-300 hover:bg-white/10 hover:text-white"
                  }`}
                >
                  {item.label}
                </a>
              );
            })}
          </div>

          <a href="#contact" className="liquid-button px-4 py-2 text-sm">
            Let’s Talk
          </a>
        </div>
      </nav>

      <section
        id="home"
        className="relative z-10 mx-auto flex min-h-screen max-w-6xl flex-col items-center justify-center px-6 pt-24 text-center"
      >
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
          className="max-w-5xl text-5xl font-semibold tracking-tight md:text-7xl"
        >
          Designing clean interfaces and building{" "}
          <span className="bg-gradient-to-r from-sky-200 via-cyan-100 to-violet-200 bg-clip-text text-transparent">
            elegant digital experiences.
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="mt-6 max-w-2xl text-base leading-8 text-slate-400 md:text-lg"
        >
          Hi, I’m Fayiz Apriwansyah Nugraha. I create modern web interfaces,
          mobile app designs, and responsive digital experiences with a clean,
          elegant, and user-focused approach.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.3 }}
          className="mt-9 flex flex-col gap-4 sm:flex-row"
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
      </section>

      <section id="about" className="relative z-10 mx-auto max-w-6xl px-6 py-24">
        <div className="grid gap-6 md:grid-cols-3">
          <div className="liquid-card p-7 md:col-span-2">
            <div className="relative z-10">
              <p className="mb-3 text-sm uppercase tracking-[0.3em] text-sky-300">
                About Me
              </p>

              <h2 className="text-3xl font-semibold md:text-4xl">
                I blend design taste with front-end implementation.
              </h2>

              <p className="mt-5 leading-8 text-slate-400">
                Saya adalah mahasiswa Sistem Informasi yang memiliki
                ketertarikan pada front-end development dan UI design. Saya
                terbiasa merancang tampilan digital menggunakan Figma, lalu
                mengubahnya menjadi interface yang responsif, rapi, dan mudah
                digunakan.
              </p>
            </div>
          </div>

          <div className="liquid-card p-7">
            <div className="relative z-10">
              <div className="liquid-icon mb-5 flex h-12 w-12 items-center justify-center rounded-2xl text-sky-200">
                <Palette />
              </div>

              <h3 className="text-xl font-semibold">Design Focus</h3>

              <p className="mt-3 leading-7 text-slate-400">
                Clean layout, modern visual, responsive design, dan pengalaman
                pengguna yang sederhana.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-6 grid gap-6 md:grid-cols-3">
          {services.map((service) => (
            <div key={service.title} className="liquid-card p-7">
              <div className="relative z-10">
                <div className="liquid-icon mb-5 flex h-12 w-12 items-center justify-center rounded-2xl text-sky-200">
                  {service.icon}
                </div>

                <h3 className="text-xl font-semibold">{service.title}</h3>

                <p className="mt-3 leading-7 text-slate-400">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="skills" className="relative z-10 mx-auto max-w-6xl px-6 py-24">
        <div className="mb-10 grid gap-6 md:grid-cols-[1.2fr_0.8fr] md:items-end">
          <div>
            <p className="mb-3 text-sm uppercase tracking-[0.3em] text-sky-300">
              Skills
            </p>

            <h2 className="text-3xl font-semibold md:text-4xl">
              Tools & technologies I use.
            </h2>

            <p className="mt-4 max-w-2xl leading-7 text-slate-400">
              Skill yang saya gunakan untuk merancang UI, membangun tampilan
              web, dan menghubungkan interface dengan kebutuhan sistem.
            </p>
          </div>

          <div className="hidden justify-end md:flex">
            <div className="liquid-icon flex h-24 w-24 items-center justify-center rounded-[2rem] text-sky-200">
              <Database size={34} />
            </div>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {skillGroups.map((group) => (
            <motion.div
              key={group.title}
              whileHover={{ y: -6 }}
              transition={{ duration: 0.25 }}
              className="liquid-card p-7"
            >
              <div className="relative z-10">
                <div className="liquid-icon mb-5 flex h-12 w-12 items-center justify-center rounded-2xl text-sky-200">
                  {group.icon}
                </div>

                <h3 className="text-xl font-semibold">{group.title}</h3>

                <p className="mt-3 min-h-[56px] leading-7 text-slate-400">
                  {group.description}
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span key={skill} className="liquid-chip px-3 py-2 text-xs">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section id="projects" className="relative z-10 mx-auto max-w-6xl px-6 py-24">
        <div className="mb-10">
          <p className="mb-3 text-sm uppercase tracking-[0.3em] text-sky-300">
            Projects
          </p>

          <h2 className="text-3xl font-semibold md:text-4xl">
            Selected works.
          </h2>

          <p className="mt-4 max-w-2xl leading-7 text-slate-400">
            Beberapa project yang menunjukkan kombinasi kemampuan saya dalam
            membangun tampilan web, aplikasi mobile, dan desain UI berbasis
            Figma.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </section>

      <section id="contact" className="relative z-10 mx-auto max-w-6xl px-6 py-24">
        <div className="liquid-card p-8 text-center md:p-14">
          <div className="relative z-10">
            <p className="mb-3 text-sm uppercase tracking-[0.3em] text-sky-300">
              Contact
            </p>

            <h2 className="text-3xl font-semibold md:text-5xl">
              Let’s build something clean and meaningful.
            </h2>

            <p className="mx-auto mt-5 max-w-2xl leading-8 text-slate-400">
              Tertarik bekerja sama, berdiskusi project, atau melihat karya saya
              lebih lanjut? Silakan hubungi saya melalui platform berikut.
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <a
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=fyznugraha@gmail.com&su=Project%20Inquiry%20-%20Portfolio%20Fayiz&body=Hi%20Fayiz%2C%0A%0AI%20saw%20your%20portfolio%20and%20would%20like%20to%20discuss%20a%20project%20or%20collaboration.%0A%0AThank%20you."
                className="liquid-button px-5 py-3 text-sm"
              >
                <Mail size={16} className="mr-2 inline" />
                fyznugraha@gmail.com
              </a>

              <a
                href="https://github.com/fyznugraha-pixel"
                target="_blank"
                rel="noopener noreferrer"
                className="liquid-button px-5 py-3 text-sm"
              >
                <FaGithub size={16} className="mr-2 inline" />
                GitHub
              </a>

              <a
                href="http://www.linkedin.com/in/fayiznugraha"
                target="_blank"
                rel="noopener noreferrer"
                className="liquid-button px-5 py-3 text-sm"
              >
                <FaLinkedin size={16} className="mr-2 inline" />
                LinkedIn
              </a>

              <a
                href="https://instagram.com/faizngraha"
                target="_blank"
                rel="noopener noreferrer"
                className="liquid-button px-5 py-3 text-sm"
              >
                <FaInstagram size={16} className="mr-2 inline" />
                Instagram
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer className="relative z-10 border-t border-white/10 px-6 py-8 text-center text-sm text-slate-500">
        BISSMILLAH DAPET KERJAAN
      </footer>
    </main>
  );
}