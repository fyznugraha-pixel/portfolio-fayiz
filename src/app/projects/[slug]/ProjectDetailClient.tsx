"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  ExternalLink,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

const projectDetails = {
  "campus-care": {
    title: "Campus Care",
    category: "Web App & Flutter Mobile App",
    images: [
        "/projects/campus-care.png",
        "/projects/campus-care-2.png",
        "/projects/campus-care-3.png",
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
      "/projects/literaplus.png",
      "/projects/literaplus-2.png",
      "/projects/literaplus-3.png",
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
      "/projects/proteksindo.png",
      "/projects/proteksindo-2.png",
      "/projects/proteksindo-3.png",
      "/projects/proteksindo-4.png",
      "/projects/proteksindo-5.png",
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
      "/projects/parkir.png",
      "/projects/parkir-2.png",
      "/projects/parkir-3.png",
      "/projects/parkir-4.png",
      "/projects/parkir-5.png",
      "/projects/parkir-6.png",
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
      "/projects/upself.png",
      "/projects/upself-2.png",
      "/projects/upself-3.png",
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
};

type ProjectSlug = keyof typeof projectDetails;

type ProjectDetailClientProps = {
  slug: string;
};

export default function ProjectDetailClient({ slug }: ProjectDetailClientProps) {
  const project = projectDetails[slug as ProjectSlug];
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const galleryRef = useRef<HTMLDivElement | null>(null);

  if (!project) {
    return (
      <main className="portfolio-bg min-h-screen overflow-hidden text-white">
        <div className="portfolio-decor" aria-hidden="true" />
        <div className="portfolio-noise" aria-hidden="true" />

        <section className="relative z-10 mx-auto max-w-5xl px-6 py-28">
          <Link href="/#projects" className="liquid-button px-5 py-3 text-sm">
            <ArrowLeft size={16} className="mr-2 inline" />
            Back to Projects
          </Link>

          <div className="liquid-card mt-10 p-8">
            <div className="relative z-10">
              <h1 className="text-4xl font-semibold">Project not found.</h1>
              <p className="mt-4 text-slate-400">
                Project yang kamu cari belum tersedia atau URL-nya tidak sesuai.
              </p>
            </div>
          </div>
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
    <main className="portfolio-bg min-h-screen overflow-hidden text-white">
      <div className="portfolio-decor" aria-hidden="true" />
      <div className="portfolio-noise" aria-hidden="true" />

      <section className="relative z-10 mx-auto max-w-6xl px-6 py-28">
        <Link href="/#projects" className="liquid-button px-5 py-3 text-sm">
          <ArrowLeft size={16} className="mr-2 inline" />
          Back to Projects
        </Link>

        <div className="mt-12">
          <p className="mb-4 text-sm uppercase tracking-[0.3em] text-sky-300">
            {project.category}
          </p>

          <h1 className="text-4xl font-semibold tracking-tight md:text-7xl">
            {project.title}
          </h1>

          <p className="mt-6 max-w-4xl text-lg leading-8 text-slate-200/90">
            {project.overview}
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            {project.tools.map((tool) => (
              <span key={tool} className="liquid-chip px-4 py-2 text-sm">
                {tool}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-12">
          <div className="mb-5 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-sky-300">
                Preview
              </p>
              <h2 className="mt-2 text-2xl font-semibold">Project Gallery</h2>
            </div>

            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={handlePreviousImage}
                className="liquid-button h-11 w-11 rounded-full p-0"
                aria-label="Previous image"
              >
                <ChevronLeft size={18} />
              </button>

              <p className="min-w-12 text-center text-sm text-slate-200/80">
                {activeImageIndex + 1} / {images.length}
              </p>

              <button
                type="button"
                onClick={handleNextImage}
                className="liquid-button h-11 w-11 rounded-full p-0"
                aria-label="Next image"
              >
                <ChevronRight size={18} />
              </button>
            </div>
          </div>

          <div className="liquid-card overflow-hidden p-3">
            <div
              ref={galleryRef}
              onScroll={handleGalleryScroll}
              style={{
                scrollbarWidth: "none",
                msOverflowStyle: "none",
              }}
              className="gallery-slider relative z-10 flex snap-x snap-mandatory overflow-x-scroll rounded-[1.5rem] bg-white/[0.04] [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
            >
              {images.map((image, index) => (
                <div
                  key={image}
                  className="flex min-w-full snap-start items-center justify-center p-3"
                >
                  <img
                    src={image}
                    alt={`${project.title} preview ${index + 1}`}
                    className="block h-auto w-full rounded-[1.1rem] object-contain"
                    draggable={false}
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="mt-4 flex flex-wrap justify-center gap-3">
            {images.map((image, index) => (
              <button
                key={image}
                type="button"
                onClick={() => scrollToImage(index)}
                className={`h-2.5 rounded-full transition-all ${
                  activeImageIndex === index
                    ? "w-10 bg-sky-300"
                    : "w-2.5 bg-white/25 hover:bg-white/45"
                }`}
                aria-label={`Show image ${index + 1}`}
              />
            ))}
          </div>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          <div className="liquid-card p-7">
            <div className="relative z-10">
              <p className="text-sm text-sky-300">Role</p>
              <h3 className="mt-2 text-xl font-semibold">{project.role}</h3>
            </div>
          </div>

          <div className="liquid-card p-7">
            <div className="relative z-10">
              <p className="text-sm text-sky-300">Duration</p>
              <h3 className="mt-2 text-xl font-semibold">{project.duration}</h3>
            </div>
          </div>

          <div className="liquid-card p-7">
            <div className="relative z-10">
              <p className="text-sm text-sky-300">Project Type</p>
              <h3 className="mt-2 text-xl font-semibold">{project.type}</h3>
            </div>
          </div>
        </div>

        <div className="mt-6 grid gap-6 md:grid-cols-2">
          <div className="liquid-card bg-black/10 p-8">
            <div className="relative z-10">
              <h2 className="text-2xl font-semibold">Problem</h2>
              <p className="mt-4 leading-8 text-slate-200/90">
                {project.problem}
              </p>
            </div>
          </div>

          <div className="liquid-card bg-black/10 p-8">
            <div className="relative z-10">
              <h2 className="text-2xl font-semibold">Solution</h2>
              <p className="mt-4 leading-8 text-slate-200/90">
                {project.solution}
              </p>
            </div>
          </div>
        </div>

        <div className="liquid-card mt-6 p-8">
          <div className="relative z-10">
            <h2 className="text-2xl font-semibold">Key Features</h2>

            <div className="mt-6 grid gap-3 md:grid-cols-2">
              {project.features.map((feature) => (
                <div
                  key={feature}
                  className="flex items-start gap-3 rounded-2xl border border-white/12 bg-black/20 px-4 py-3 text-slate-100"
                >
                  <CheckCircle2
                    size={18}
                    className="mt-0.5 shrink-0 text-sky-300"
                  />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-wrap gap-4">
          <Link href="/#projects" className="liquid-button px-6 py-3 text-sm">
            <ArrowLeft size={16} className="mr-2 inline" />
            Back to Projects
          </Link>

          <Link href="/#contact" className="liquid-button px-6 py-3 text-sm">
            Contact Me
            <ExternalLink size={16} className="ml-2 inline" />
          </Link>
        </div>
      </section>
    </main>
  );
}