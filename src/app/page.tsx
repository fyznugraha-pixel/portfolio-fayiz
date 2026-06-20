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
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import HeroDesktop from "@/components/HeroDesktop";
import HeroMobile from "@/components/HeroMobile";
import ProjectsDesktop from "@/components/ProjectsDesktop";
import ProjectsMobile from "@/components/ProjectsMobile";

const projects = [
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
      "NodeJS",
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

export default function Home() {
  return (
    <main className="portfolio-bg min-h-screen overflow-hidden text-white">
      <div className="portfolio-decor" aria-hidden="true" />
      <div className="portfolio-noise" aria-hidden="true" />

      <section id="home" className="relative z-10">
        <div className="hidden md:block">
          <HeroDesktop />
        </div>

        <div className="block md:hidden">
          <HeroMobile />
        </div>
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

              <p className="mt-5 leading-8 text-slate-300/90">
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

              <p className="mt-3 leading-7 text-slate-300/90">
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

                <p className="mt-3 leading-7 text-slate-300/90">
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

            <p className="mt-4 max-w-2xl leading-7 text-slate-300/90">
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

        <div className="hidden gap-6 md:grid md:grid-cols-3">
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

                <p className="mt-3 min-h-[56px] leading-7 text-slate-300/90">
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

        <div className="flex snap-x snap-mandatory gap-4 overflow-x-auto pb-5 pr-6 md:hidden [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {skillGroups.map((group) => (
            <motion.div
              key={group.title}
              whileTap={{ scale: 0.98 }}
              className="liquid-card min-w-[82%] snap-start p-6"
            >
              <div className="relative z-10">
                <div className="liquid-icon mb-5 flex h-11 w-11 items-center justify-center rounded-2xl text-sky-200">
                  {group.icon}
                </div>

                <h3 className="text-lg font-semibold">{group.title}</h3>

                <p className="mt-3 text-sm leading-6 text-slate-300/90">
                  {group.description}
                </p>

                <div className="mt-5 flex gap-2 overflow-x-auto pb-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="liquid-chip shrink-0 px-3 py-1.5 text-[11px]"
                    >
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

          <p className="mt-4 max-w-2xl leading-7 text-slate-300/90">
            Beberapa project yang menunjukkan kombinasi kemampuan saya dalam
            membangun tampilan web, aplikasi mobile, dan desain UI berbasis
            Figma.
          </p>
        </div>

        <div className="hidden md:block">
          <ProjectsDesktop projects={projects} />
        </div>

        <div className="block md:hidden">
          <ProjectsMobile projects={projects} />
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

            <p className="mx-auto mt-5 max-w-2xl leading-8 text-slate-300/90">
              Tertarik bekerja sama, berdiskusi project, atau melihat karya saya
              lebih lanjut? Silakan hubungi saya melalui platform berikut.
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=fyznugraha@gmail.com&su=Project%20Inquiry%20-%20Portfolio%20Fayiz&body=Hi%20Fayiz%2C%0A%0AI%20saw%20your%20portfolio%20and%20would%20like%20to%20discuss%20a%20project%20or%20collaboration.%0A%0AThank%20you."
                target="_blank"
                rel="noopener noreferrer"
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
                href="https://www.linkedin.com/in/fayiznugraha"
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

      <footer className="relative z-10 border-t border-white/10 px-6 py-8 text-center text-sm text-slate-400">
        BISMILLAH DAPET KERJAAN
      </footer>
    </main>
  );
}