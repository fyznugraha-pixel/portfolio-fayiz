"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import { ArrowLeft, ChevronLeft, ChevronRight, ExternalLink } from "lucide-react";
import BorderGlow from "@/components/BorderGlow";
import { getSkillLogo } from "@/lib/getSkillLogo";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";

const projectDetails = {
  cisadane: {
    title: "Festival Cisadane 2026",
    category: "Web App / Event Website",
    images: [
      "/projects/cisadane/cisadane1.png",
      "/projects/cisadane/cisadane2.png",
      "/projects/cisadane/cisadane3.png",
      "/projects/cisadane/cisadane4.png",
      "/projects/cisadane/cisadane5.png",
    ],
    role: "UI/UX Design & Frontend Development",
    duration: "Event Project",
    type: "Event Website",
    overview:
      "Festival Cisadane 2026 adalah website event yang dirancang untuk menghadirkan pengalaman digital yang merepresentasikan semangat, budaya, dan energi Festival Cisadane secara modern dan interaktif. Website ini berfungsi sebagai pusat informasi festival sekaligus media promosi yang mampu meningkatkan minat pengunjung sebelum acara berlangsung.",
    problem:
      "Festival budaya daerah membutuhkan platform digital yang tidak hanya informatif, tetapi juga mampu membangun antusiasme dan merepresentasikan identitas budaya lokal Tangerang melalui visual storytelling.",
    solution:
      "Saya merancang dan mengembangkan website event yang interaktif dengan fokus pada visual storytelling, UX yang optimal, dan identitas budaya lokal. Website ini menyajikan informasi lengkap mulai dari countdown, agenda acara, dokumentasi visual, hingga form registrasi.",
    tools: ["Next.js", "React.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Vercel"],
    features: [
      "Landing page interaktif dengan countdown",
      "Informasi atraksi dan agenda festival",
      "Dokumentasi visual galeri foto",
      "Integrasi video promosi",
      "Informasi lokasi dan akses",
      "Registrasi dan partisipasi pengunjung",
      "Dukungan multi-bahasa (ID & EN)",
      "Responsive design (Desktop & Mobile)",
    ],
    link: "https://www.tactlink.com/festivalcisadane/id",
  },
  "asia-afrika-festival": {
    title: "Asia Afrika Festival",
    category: "Web App / Event Registration",
    images: [
      "/projects/aaf/aaf.png",
      "/projects/aaf/aaf-2.png",
      "/projects/aaf/aaf-3.png",
      "/projects/aaf/aaf-4.png",
      "/projects/aaf/aaf-5.png",
      "/projects/aaf/aaf-admin.png",
    ],
    role: "Full-Stack Web Developer",
    duration: "Work Project",
    type: "Event Website",
    overview:
      "Asia Africa Festival 2026 Website adalah platform digital yang dibuat untuk memperkenalkan informasi event, menampilkan rangkaian program festival, serta memudahkan pengunjung melakukan registrasi secara online. Website ini dirancang dengan visual yang mengikuti identitas Asia Africa Festival, mulai dari penggunaan key visual, warna festival, section informatif, hingga pengalaman pengguna yang responsif di desktop maupun mobile.",
    problem:
      "Informasi event dan proses registrasi visitor perlu dibuat lebih terpusat dalam satu platform digital yang rapi. Tanpa sistem yang jelas, calon pengunjung bisa kesulitan mendapatkan informasi penting seperti jadwal, lokasi, program, dan cara mendaftar. Selain itu, data visitor juga perlu dikelola dengan lebih praktis oleh admin agar proses monitoring, pengecekan detail peserta, dan rekap data bisa dilakukan dengan efisien.",
    solution:
      "Saya membangun website event berbasis Next.js dan Supabase yang menyediakan landing page informatif, form registrasi visitor, serta dashboard admin private untuk memantau data pendaftar. Website ini membantu proses publikasi event dan pengelolaan data visitor menjadi lebih rapi, responsif, dan mudah digunakan.",
    tools: ["Next.js", "TypeScript", "Supabase", "Tailwind CSS", "Vercel"],
    features: [
      "Responsive landing page",
      "Visitor registration form",
      "Country code input for WhatsApp number",
      "Supabase database integration",
      "Private admin dashboard",
      "Visitor data monitoring",
      "Excel export with styled format",
      "Scroll reveal animation",
    ],
    link: "https://asiaafricafestival.co.id/",
  },

  "campus-care": {
    title: "Campus Care",
    category: "Web App & Flutter Mobile App",
    images: [
      "/projects/campus-care/campus-care.png",
      "/projects/campus-care/campus-care-2.png",
      "/projects/campus-care/campus-care-3.png",
      "/projects/campus-care/campus-care-4.png",
    ],
    role: "Front-End Developer & UI Designer",
    duration: "Academic Project",
    type: "Web & Mobile Application",
    overview:
      "Campus Care adalah sistem berbasis web dan mobile yang membantu layanan kampus menjadi lebih terstruktur. Pada versi web, Campus Care menyediakan fitur Lost & Found serta pengelolaan laporan fasilitas. Sementara pada aplikasi mobile, fitur utamanya berfokus pada pelaporan fasilitas kampus agar mahasiswa dapat membuat laporan dan memantau statusnya dengan lebih mudah.",
    problem:
      "Layanan kampus seperti pencarian barang hilang dan pelaporan fasilitas rusak sering kali belum terdokumentasi secara rapi. Informasi barang hilang dapat tersebar secara manual, sedangkan laporan fasilitas rusak sulit dipantau statusnya oleh mahasiswa maupun pihak pengelola.",
    solution:
      "Saya merancang Campus Care dengan dua pendekatan. Versi web digunakan untuk mengelola layanan Lost & Found dan laporan fasilitas, sedangkan aplikasi mobile difokuskan untuk mahasiswa dalam membuat laporan fasilitas kampus dan melihat perkembangan status laporan secara lebih praktis.",
    tools: ["Flutter", "Laravel", "REST API", "MySQL", "UI Design"],
    features: [
      "Lost & Found pada versi web",
      "Pengelolaan data barang hilang dan barang ditemukan",
      "Pelaporan fasilitas rusak melalui aplikasi mobile",
      "Riwayat laporan fasilitas yang dapat dipantau mahasiswa",
      "Dashboard web untuk membantu pengelolaan layanan kampus",
    ],
  },

  literaplus: {
    title: "LiteraPlus",
    category: "Web App / Microservice",
    images: [
      "/projects/literaplus/literaplus.png",
      "/projects/literaplus/literaplus-2.png",
      "/projects/literaplus/literaplus-3.png",
    ],
    role: "Full-Stack Developer",
    duration: "Academic Project",
    type: "Microservice Web Application",
    overview:
      "LiteraPlus adalah microservice untuk mendukung sistem toko buku melalui fitur donasi buku, barter buku, reward point, dan transaksi layanan. Project ini dibuat sebagai layanan terpisah yang tetap terintegrasi dengan sistem utama.",
    problem:
      "Sistem toko buku membutuhkan fitur tambahan yang dapat berjalan secara independen tanpa mengganggu sistem utama. Jika semua fitur dimasukkan langsung ke sistem utama, proses pengembangan dan maintenance bisa menjadi lebih kompleks.",
    solution:
      "Saya membuat layanan terpisah berbasis NodeJS yang memiliki backend dan sistem autentikasi sendiri. Meskipun independen, LiteraPlus tetap dapat diakses dari web utama sehingga pengalaman pengguna tetap terasa terintegrasi.",
    tools: ["NodeJS", "JavaScript", "MySQL", "Microservice"],
    features: [
      "Sistem donasi buku",
      "Sistem barter buku",
      "Reward point",
      "Level membership",
      "Integrasi dari web utama ke microservice",
    ],
  },

  proteksindo: {
    title: "PT Proteksindo",
    category: "UI Design / Figma",
    images: [
      "/projects/proteksindo/proteksindo.png",
      "/projects/proteksindo/proteksindo-2.png",
      "/projects/proteksindo/proteksindo-3.png",
      "/projects/proteksindo/proteksindo-4.png",
      "/projects/proteksindo/proteksindo-5.png",
    ],
    role: "UI Designer",
    duration: "Design Project",
    type: "Company Profile Interface",
    overview:
      "PT Proteksindo adalah project desain UI berbasis Figma untuk kebutuhan tampilan digital perusahaan. Fokus utama project ini adalah menciptakan interface company profile yang rapi, profesional, modern, dan mudah dipahami.",
    problem:
      "Perusahaan membutuhkan tampilan digital yang mampu merepresentasikan identitas brand secara profesional. Informasi perusahaan perlu disusun dengan jelas agar mudah dipahami oleh calon klien maupun pengunjung website.",
    solution:
      "Saya merancang tampilan UI dengan layout yang clean, struktur konten yang rapi, visual yang konsisten, serta pendekatan desain modern agar informasi perusahaan terlihat lebih kredibel dan mudah diakses.",
    tools: ["Figma", "UI Design", "Prototype"],
    features: [
      "Company profile interface",
      "Layout visual profesional",
      "Struktur informasi yang rapi",
      "Prototype Figma",
      "Tampilan modern dan mudah dipahami",
    ],
  },

  "sistem-parkir": {
    title: "Sistem Parkir",
    category: "Web App / Laravel Project",
    images: [
      "/projects/parkir/parkir.png",
      "/projects/parkir/parkir-2.png",
      "/projects/parkir/parkir-3.png",
      "/projects/parkir/parkir-4.png",
      "/projects/parkir/parkir-5.png",
      "/projects/parkir/parkir-6.png",
    ],
    role: "Full-Stack Developer",
    duration: "Academic Project",
    type: "Laravel Web Application",
    overview:
      "Sistem Parkir adalah aplikasi web berbasis Laravel dan PHP yang dibuat untuk membantu pengelolaan akses parkir kampus. Sistem ini menyediakan fitur scan QR code KTM atau kartu pegawai, input manual kartu ID, dashboard admin, serta pengelolaan data pengguna, kendaraan, akses parkir, dan log aktivitas.",
    problem:
      "Proses parkir manual kurang efisien karena pencatatan kendaraan masuk dan keluar membutuhkan waktu, rawan kesalahan, dan sulit dipantau secara real-time. Admin juga membutuhkan sistem yang dapat mengelola data pengguna, kendaraan, serta riwayat akses parkir dalam satu dashboard.",
    solution:
      "Saya membangun sistem parkir berbasis Laravel dengan fitur scan QR code, input manual kartu ID, deteksi otomatis status masuk dan keluar parkir, serta dashboard admin untuk memantau dan mengelola seluruh aktivitas parkir secara lebih terstruktur.",
    tools: ["Laravel", "PHP", "MySQL", "Blade", "Bootstrap"],
    features: [
      "Dashboard admin parkir",
      "Scan QR code KTM atau kartu pegawai",
      "Deteksi otomatis status masuk dan keluar parkir",
      "Input manual kartu ID",
      "Manajemen pengguna",
      "Manajemen kendaraan",
      "Manajemen akses parkir",
      "Log aktivitas parkir",
    ],
  },

  upself: {
    title: "UpSelf",
    category: "UI Design / Upskilling Platform",
    images: [
      "/projects/upself/upself.png",
      "/projects/upself/upself-2.png",
      "/projects/upself/upself-3.png",
    ],
    role: "UI/UX Designer",
    duration: "Design Project",
    type: "Mobile App Design",
    overview:
      "UpSelf adalah konsep aplikasi pengumpul informasi seputar internship, bootcamp, seminar, lomba, dan peluang pengembangan diri lainnya.",
    problem:
      "Informasi pengembangan diri sering tersebar di banyak platform berbeda sehingga mahasiswa perlu mencari secara manual dari berbagai sumber.",
    solution:
      "Saya merancang konsep aplikasi mobile yang mengumpulkan berbagai informasi pengembangan diri dalam satu platform.",
    tools: ["Figma", "Mobile UI", "UX Flow", "Prototype"],
    features: [
      "Informasi internship",
      "Informasi bootcamp",
      "Informasi seminar dan lomba",
      "Mobile UI design",
      "UX flow dan prototype",
    ],
  },

  tactlinkinfo: {
    title: "Tactlink Info",
    category: "Web App / Information Portal",
    images: [
      "/projects/tactlinkinfo/tactlink1.png",
      "/projects/tactlinkinfo/tactlink2.png",
      "/projects/tactlinkinfo/tactlink3.png",
      "/projects/tactlinkinfo/tactlink4.png",
      "/projects/tactlinkinfo/tactlink5.png",
      "/projects/tactlinkinfo/tactlink6.png",
      "/projects/tactlinkinfo/tactlink7.png",
    ],
    role: "Frontend Developer",
    duration: "Client Project",
    type: "Web Application",
    overview:
      "Portal informasi digital terintegrasi untuk kebutuhan perusahaan. Tactlink Info menghadirkan solusi akses data yang cepat dan tampilan antarmuka yang modern untuk mendukung operasional bisnis.",
    problem:
      "Perusahaan membutuhkan platform terpusat untuk menampilkan informasi, data statistik, dan profil layanan secara dinamis dengan performa yang cepat.",
    solution:
      "Mengembangkan portal informasi menggunakan framework modern (React & Next.js) dengan optimasi performa dan antarmuka responsif.",
    tools: ["React", "TypeScript", "Tailwind CSS", "Next.js"],
    features: [
      "Portal informasi terpusat",
      "Tampilan statistik dinamis",
      "Desain antarmuka responsif",
      "Optimasi SEO dan performa",
      "Integrasi API internal",
    ],
  },
};

type ProjectSlug = keyof typeof projectDetails;

type ProjectDetailClientProps = {
  slug: string;
};

export default function ProjectDetailClient({ slug }: ProjectDetailClientProps) {
  const { t } = useLanguage();

  const projectSlugToKey: Record<string, keyof typeof t.projectDetail.items> = {
    "cisadane": "cisadane",
    "asia-afrika-festival": "aaf",
    "campus-care": "campusCare",
    "literaplus": "literaplus",
    "proteksindo": "proteksindo",
    "sistem-parkir": "parkir",
    "upself": "upself",
    "tactlinkinfo": "tactlinkinfo",
  };

  const projectKey = projectSlugToKey[slug];
  const projectLocal = t.projectDetail.items[projectKey];
  const projectBase = projectDetails[slug as ProjectSlug];
  
  const project = projectBase && projectLocal ? {
    ...projectBase,
    ...projectLocal,
    category: t.projects.items[projectKey as keyof typeof t.projects.items]?.category || projectBase.category,
  } : null;

  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const galleryRef = useRef<HTMLDivElement | null>(null);

  if (!project) {
    return (
      <main className="min-h-screen overflow-hidden bg-transparent text-white selection:bg-crimson selection:text-white">
        <section className="relative z-10 mx-auto max-w-[1440px] px-6 py-32 text-center">
          <h1 className="font-display-xl text-5xl font-bold uppercase mb-8">{t.projectDetail.notFound}</h1>
          <p className="font-body text-secondary mb-12">
            {t.projectDetail.notFoundDesc}
          </p>
          <Link href="/#projects" className="brutalist-button-outline px-8 py-4 inline-flex items-center">
            <ArrowLeft size={16} className="mr-2" />
            {t.projectDetail.backToProjects}
          </Link>
        </section>
      </main>
    );
  }

  const images = project.images;

  const scrollToImage = (index: number) => {
    const gallery = galleryRef.current;

    if (!gallery) return;

    const safeIndex = (index + images.length) % images.length;
    const targetLeft = safeIndex * gallery.clientWidth;

    gallery.scrollTo({
      left: targetLeft,
      behavior: "smooth",
    });

    setActiveImageIndex(safeIndex);
  };

  const handlePreviousImage = () => {
    scrollToImage(activeImageIndex - 1);
  };

  const handleNextImage = () => {
    scrollToImage(activeImageIndex + 1);
  };

  const handleGalleryScroll = () => {
    const gallery = galleryRef.current;

    if (!gallery) return;

    const index = Math.round(gallery.scrollLeft / gallery.clientWidth);
    const safeIndex = Math.min(Math.max(index, 0), images.length - 1);

    setActiveImageIndex(safeIndex);
  };

  return (
    <main className="min-h-screen bg-transparent text-white selection:bg-crimson selection:text-white pb-32">
      <section className="relative z-10 mx-auto max-w-[1440px] px-6 pt-32">
        <div className="mb-12 border-b brutalist-border-subtle pb-8">
          <Link href="/#projects" className="font-label-mono text-sm uppercase flex items-center text-secondary hover:text-white transition-colors mb-12">
            <ArrowLeft size={16} className="mr-2" />
            {t.projectDetail.backToProjects}
          </Link>

          <p className="mb-4 font-label-mono text-sm uppercase tracking-widest text-crimson">
            [ {project.category} ]
          </p>

          <h1 className="font-display-xl text-5xl font-bold md:text-[80px] uppercase leading-[0.9] tracking-tighter mb-8 max-w-5xl">
            {project.title}
          </h1>

          <p className="mt-6 max-w-4xl font-body text-lg leading-8 text-secondary">
            {project.overview}
          </p>

          <div className="mt-12 flex flex-wrap gap-3">
            {project.tools.map((tool) => {
              const logo = getSkillLogo(tool);
              return (
                <span key={tool} className="flex items-center gap-2 font-label-mono text-xs border border-[#444] px-4 py-2 uppercase text-white glass-card rounded-full">
                  {logo && <img src={`/portofolio${logo}`} alt={tool} width={16} height={16} className="object-contain" />}
                  {tool}
                </span>
              );
            })}
          </div>
        </div>

        <div className="mt-16">
          <div className="mb-6 flex flex-col gap-6 md:flex-row md:items-end md:justify-between border-b brutalist-border-subtle pb-4">
            <div>
              <p className="font-label-mono text-sm uppercase tracking-widest text-crimson mb-2">
                {t.projectDetail.preview}
              </p>
              <h2 className="font-headline-lg text-3xl font-bold uppercase">{t.projectDetail.projectGallery}</h2>
            </div>

            <div className="flex items-center gap-4">
              <button
                type="button"
                onClick={handlePreviousImage}
                className="brutalist-button-outline h-12 w-12 flex items-center justify-center glass-card hover:!text-crimson hover:!border-crimson transition-colors"
                aria-label="Previous image"
              >
                <ChevronLeft size={20} />
              </button>

              <p className="font-label-mono text-sm text-secondary min-w-[3rem] text-center">
                {activeImageIndex + 1} / {images.length}
              </p>

              <button
                type="button"
                onClick={handleNextImage}
                className="brutalist-button-outline h-12 w-12 flex items-center justify-center glass-card hover:!text-crimson hover:!border-crimson transition-colors"
                aria-label="Next image"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>

          <BorderGlow className="glass-card p-4 group">
            <div
              ref={galleryRef}
              onScroll={handleGalleryScroll}
              style={{
                scrollbarWidth: "none",
                msOverflowStyle: "none",
              }}
              className="gallery-slider relative z-10 flex snap-x snap-mandatory overflow-x-scroll bg-pure-black border border-[#222] rounded-xl [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
            >
              {images.map((image, index) => (
                <div
                  key={image}
                  className="flex min-w-full snap-start items-center justify-center relative aspect-video"
                >
                  <Image
                    src={image}
                    alt={`${project.title} preview ${index + 1}`}
                    fill
                    sizes="(max-width: 1440px) 100vw, 1440px"
                    className="object-contain p-4 opacity-100 transition-all duration-500"
                    draggable={false}
                  />
                </div>
              ))}
            </div>
          </BorderGlow>

          <div className="mt-6 flex flex-wrap justify-center gap-3">
            {images.map((image, index) => (
              <button
                key={image}
                type="button"
                onClick={() => scrollToImage(index)}
                className={`h-3 transition-all border rounded-full ${
                  activeImageIndex === index
                    ? "w-12 bg-crimson border-crimson"
                    : "w-3 bg-charcoal border-[#555] hover:border-white"
                }`}
                aria-label={`Show image ${index + 1}`}
              />
            ))}
          </div>
        </div>

        <div className="mt-20 grid gap-6 md:grid-cols-3">
          <BorderGlow className="p-8 glass-card">
            <p className="font-label-mono text-sm uppercase text-crimson mb-2">[ {t.projectDetail.role} ]</p>
            <h3 className="font-headline-lg text-2xl font-bold uppercase">{project.role}</h3>
          </BorderGlow>

          <BorderGlow className="p-8 glass-card">
            <p className="font-label-mono text-sm uppercase text-crimson mb-2">[ {t.projectDetail.duration} ]</p>
            <h3 className="font-headline-lg text-2xl font-bold uppercase">{project.duration}</h3>
          </BorderGlow>

          <BorderGlow className="p-8 glass-card">
            <p className="font-label-mono text-sm uppercase text-crimson mb-2">[ {t.projectDetail.projectType} ]</p>
            <h3 className="font-headline-lg text-2xl font-bold uppercase">{project.type}</h3>
          </BorderGlow>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          <BorderGlow className="p-8 md:p-12 glass-card">
            <h2 className="font-headline-lg text-3xl font-bold uppercase mb-6 text-crimson">{t.projectDetail.problem}</h2>
            <p className="font-body leading-8 text-secondary">
              {project.problem}
            </p>
          </BorderGlow>

          <BorderGlow className="p-8 md:p-12 glass-card">
            <h2 className="font-headline-lg text-3xl font-bold uppercase mb-6 text-crimson">{t.projectDetail.solution}</h2>
            <p className="font-body leading-8 text-secondary">
              {project.solution}
            </p>
          </BorderGlow>
        </div>

        <BorderGlow className="mt-12 glass-card p-8 md:p-12">
          <h2 className="font-headline-lg text-3xl font-bold uppercase mb-8">{t.projectDetail.keyFeatures}</h2>

          <div className="grid gap-4 md:grid-cols-2">
            {project.features.map((feature) => (
              <div
                key={feature}
                className="flex items-start gap-4 border border-[#333] bg-pure-black px-5 py-4 rounded-xl"
              >
                <div className="font-label-mono text-crimson shrink-0 mt-0.5">[+]</div>
                <span className="font-body text-secondary">{feature}</span>
              </div>
            ))}
          </div>
        </BorderGlow>

        <div className="mt-20 flex flex-wrap gap-4 border-t brutalist-border-subtle pt-12">
          <Link href="/#projects" className="brutalist-button-outline px-8 py-4 flex items-center">
            <ArrowLeft size={18} className="mr-3" />
            {t.projectDetail.backToProjects}
          </Link>

          {(project as any).link && (
            <a 
              href={(project as any).link} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="brutalist-button-outline px-8 py-4 flex items-center hover:bg-white hover:text-black transition-colors"
            >
              {t.projectDetail.visitWebsite || "VISIT WEBSITE"}
              <ExternalLink size={18} className="ml-3" />
            </a>
          )}

          <Link href="/#contact" className="brutalist-button px-8 py-4 flex items-center bg-crimson hover:bg-white hover:text-black transition-colors">
            {t.hero.contactMe}
            <ExternalLink size={18} className="ml-3" />
          </Link>
        </div>
      </section>
    </main>
  );
}