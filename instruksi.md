# MASTER PROMPT — Redesign Portfolio Fayiz.dev ke "Premium Dark Editorial"

> Cara pakai: copy seluruh isi file ini, paste sebagai instruksi ke Claude Code (atau agent coding lain)
> di dalam root project Next.js kamu. Prompt ini sudah include design system, component mapping,
> instalasi, dan checklist — agent tinggal eksekusi step-by-step.

---

## 0. KONTEKS PROJECT

Kamu adalah Principal Front-End Engineer sekaligus UI/UX Expert. Tugasmu adalah merombak total
portfolio Next.js + Tailwind CSS milik Fayiz (`byfayiz.web.id/portofolio`) dari versi "brutalism-basic"
menjadi **"Premium Dark Editorial"** — level visual setara landing page studio desain kelas atas
(Awwwards-tier), dengan animasi scroll yang membuat pengunjung betah menelusuri setiap section
sampai habis.

Stack wajib: **Next.js (App Router) + TypeScript + Tailwind CSS + Framer Motion + GSAP (ScrollTrigger)
+ React Bits (reactbits.dev)**.

Kondisi sekarang (baseline yang harus di-upgrade, JANGAN dihapus struktur informasinya, hanya
di-elevate secara visual & interaksi):
- Hero: headline "FRONTEND DEVELOPER", red double-exposure text effect, foto profil, 3 foto kecil grayscale, CTA merah.
- Section About: 4 card ringkasan fokus (Design Focus, Front-End Web, Mobile UI Design, UI System).
- Section Skills: 3 kategori (Front-End, Back-End & Programming, UI Design) dengan badge tech stack.
- Section Projects: grid 8 project card (thumbnail, title, deskripsi, tag stack, CTA "know more").
- Section Contact: 4 tombol (Email, WhatsApp, LinkedIn, Instagram).
- Footer personal: "BISMILLAH DAPET KERJAAN".

---

## 1. DESIGN SYSTEM (Reasoning: Portfolio + Brutalism-Premium Hybrid)

### 1.1 Style Priority
`Brutalism (refined)` → `Dark Luxury / Editorial` → `Kinetic Typography`

Prinsip: pertahankan DNA brutalist yang sudah ada (tipografi besar-kasar, red-black-white, grid
texture) tapi naikkan level craft-nya — brutalism versi *high-end design studio*, bukan brutalism
versi *template gratisan*. Referensi mood: situs studio desain premium — heavy display type,
generous whitespace/blackspace, micro-interaction di setiap elemen, transisi antar section yang
terasa "directed" bukan sekadar fade-in.

### 1.2 Color Palette (pertahankan identitas, refine kontras)

| Role | Hex | Penggunaan |
|---|---|---|
| Background base | `#0A0A0A` | Latar utama (bukan pure `#000`, biar tidak "flat mati") |
| Background elevated | `#141414` | Card, panel |
| Primary accent (merah) | `#E9333A` | CTA, highlight text, garis aktif |
| Accent glow | `#FF4D55` | Hover state, glow shadow |
| Text primary | `#F5F5F5` | Heading |
| Text secondary | `#9A9A9A` | Body/desc — jangan lebih terang dari ini biar hierarki jaga |
| Border/grid line | `rgba(255,255,255,0.08)` | Grid background, divider |

### 1.3 Typography

- **Display/Heading:** `Neue Machina` atau alternatif gratis `General Sans` / `Clash Display` (geometric, bold, sedikit condensed — cocok gantikan headline "FRONTEND DEVELOPER" biar terasa custom-cut, bukan default sans).
- **Body:** `Inter` atau `Satoshi` — tetap netral, jangan kompetisi dengan display font.
- **Skala:** heading hero minimal `clamp(3.5rem, 10vw, 9rem)`, huruf besar adalah senjata utama gaya ini — jangan diperkecil demi "muat", biarkan overflow terkontrol dan pecah baris dengan estetik.

### 1.4 Key Effects (yang bikin "premium & bikin terpukau")

1. **Custom cursor** — dot kecil + ring yang mengikuti mouse dengan delay/lag halus (magnetic), berubah bentuk saat hover di atas link/tombol/card.
2. **Text reveal on scroll** — tiap heading section muncul dengan split-text animation (per huruf/per kata naik dari bawah + fade), trigger saat masuk viewport.
3. **Magnetic buttons** — CTA button "tertarik" mengikuti posisi cursor dalam radius kecil sebelum di-klik.
4. **Smooth scroll + scroll-linked parallax** — pakai Lenis/GSAP ScrollTrigger, foto hero & background grid bergerak beda kecepatan (parallax layer).
5. **Project card hover** — image zoom halus + overlay gradient muncul + tag stack slide-in, BUKAN scale transform yang bikin layout shift (ikuti anti-pattern rule di bawah).
6. **Page/section transition** — noise/grain texture halus di background sebagai "signature" biar tidak flat, khas situs premium dark-theme.
7. **Number/stat counter** — kalau ada angka (tahun pengalaman, jumlah project), animasikan count-up saat masuk viewport.
8. **Marquee tech stack** — pertahankan tapi upgrade jadi marquee yang pause on hover + arah gerak berlawanan di dua baris (kalau ada 2 baris).

### 1.5 Anti-Patterns (WAJIB DIHINDARI)

- ❌ Emoji sebagai icon — pakai SVG (Lucide/Heroicons/Simple Icons) konsisten satu set.
- ❌ Scale-transform hover yang menggeser layout tetangganya — pakai transform pada elemen dalam card (image/overlay), bukan pada card container yang mengubah dimensi grid.
- ❌ Instant state change — semua transisi 200–400ms, easing custom (`cubic-bezier`), bukan linear.
- ❌ Duplicate DOM untuk responsive (lihat temuan audit sebelumnya: hero dobel) — gunakan satu struktur dengan Tailwind responsive utility.
- ❌ Marquee tanpa `aria-hidden` pada elemen duplikat — screen reader tidak boleh baca berkali-kali.
- ❌ Kontras teks < 4.5:1 — testing text secondary di atas background elevated.
- ❌ Animasi tanpa hormati `prefers-reduced-motion` — sediakan fallback statis.
- ❌ Cursor custom yang menutupi/ mengganggu klik di mobile — disable di breakpoint touch device.

---

## 2. COMPONENT MAPPING — REACT BITS PER SECTION

> Install via CLI: `npx jsrepo add https://reactbits.dev/<variant>/<Category>/<ComponentName>`
> Gunakan variant `TS-TW` (TypeScript + Tailwind) supaya konsisten dengan stack project.

### Hero Section
| Kebutuhan | Komponen React Bits |
|---|---|
| Headline besar dengan efek masuk dramatis | `TextAnimations/SplitText` atau `TextAnimations/BlurText` |
| Background grid/texture bergerak halus | `Backgrounds/Squares` atau `Backgrounds/DotGrid` |
| Efek glow/aurora di belakang foto profil | `Backgrounds/Aurora` (adjust warna ke merah `#E9333A`) |
| Foto profil dengan efek reveal saat load | `Animations/ImageTrail` (opsional, untuk 3 foto kecil jadi trail interaktif saat hover, ganti dari statis) |
| Tombol CTA magnetik | `Animations/MagnetButton` (atau custom pakai Framer Motion `useSpring`) |

### About / Design Focus Section
| Kebutuhan | Komponen React Bits |
|---|---|
| Card dengan spotlight cursor effect | `Components/SpotlightCard` |
| Heading section reveal | `TextAnimations/ShinyText` untuk label kecil `[ ABOUT ME ]` |

### Skills Section
| Kebutuhan | Komponen React Bits |
|---|---|
| Marquee logo tech stack | `Components/LogoLoop` atau `Components/Marquee` (pause-on-hover) |
| Grid kategori skill dengan hover glow | `Components/GlareHover` atau `Components/TiltedCard` |

### Projects Section (paling krusial — ini "jualan" utama portfolio)
| Kebutuhan | Komponen React Bits |
|---|---|
| Card project dengan tilt 3D halus mengikuti mouse | `Components/TiltedCard` |
| Image reveal saat scroll masuk viewport | `Animations/AnimatedContent` (fade + slide up per card, staggered) |
| Preview besar saat hover (opsional, kalau mau lebih premium) | `Components/TextImagePreview` — cocok untuk daftar project versi list, cursor menampilkan preview gambar saat hover judul project |
| Counter jumlah project/tech digunakan | `Components/CountUp` |

### Contact Section
| Kebutuhan | Komponen React Bits |
|---|---|
| Heading CTA closing dengan efek shine | `TextAnimations/ShinyText` atau `GradientText` |
| Tombol sosial dengan magnetic + glow border | `Components/MagnetButton` + `Components/GlowingBorder` (custom via box-shadow animate) |
| Background section penutup | `Backgrounds/Particles` (subtle, density rendah biar tidak ganggu keterbacaan) |

### Global
| Kebutuhan | Komponen React Bits |
|---|---|
| Custom cursor | `Animations/SplashCursor` (adjust jadi minimal dot+ring, bukan splash penuh — biar tetap elegan bukan playful) |
| Transisi antar section saat scroll | GSAP `ScrollTrigger` + `Lenis` smooth scroll (di luar React Bits, setup manual) |
| Grain/noise texture overlay | Custom CSS `background-image: url(noise.svg)` + `mix-blend-mode: overlay`, opacity ~4% |

---

## 3. STRUKTUR EKSEKUSI (untuk agent, step-by-step)

```
1. Setup dependencies:
   npm install framer-motion gsap @studio-freight/lenis clsx

2. Install komponen React Bits yang dibutuhkan (jalankan satu per satu):
   npx jsrepo add https://reactbits.dev/ts-tw/TextAnimations/SplitText
   npx jsrepo add https://reactbits.dev/ts-tw/Backgrounds/DotGrid
   npx jsrepo add https://reactbits.dev/ts-tw/Backgrounds/Aurora
   npx jsrepo add https://reactbits.dev/ts-tw/Components/SpotlightCard
   npx jsrepo add https://reactbits.dev/ts-tw/Components/TiltedCard
   npx jsrepo add https://reactbits.dev/ts-tw/Components/LogoLoop
   npx jsrepo add https://reactbits.dev/ts-tw/Animations/AnimatedContent
   npx jsrepo add https://reactbits.dev/ts-tw/Components/CountUp
   npx jsrepo add https://reactbits.dev/ts-tw/TextAnimations/ShinyText
   npx jsrepo add https://reactbits.dev/ts-tw/Animations/SplashCursor
   (sesuaikan nama komponen dengan katalog terbaru di reactbits.dev/get-started,
    karena versi/nama bisa berubah)

3. Update tailwind.config: tambahkan warna custom di atas sebagai CSS variables
   (--color-bg-base, --color-accent, dst) supaya reusable dan gampang di-theme.

4. Setup Lenis smooth scroll di root layout (app/layout.tsx), bungkus children.

5. Refactor Hero section:
   - HAPUS duplikasi DOM (bug yang sudah teridentifikasi sebelumnya)
   - Ganti headline plain text jadi <SplitText> dengan trigger on mount
   - Tambahkan <DotGrid> atau <Aurora> sebagai background layer (z-index di belakang konten)
   - Bungkus CTA dengan magnetic button wrapper

6. Refactor Projects grid:
   - Standarisasi semua thumbnail ke aspect-ratio seragam (16:10) dengan object-cover
   - Bungkus tiap card dengan <TiltedCard> atau <SpotlightCard>
   - Tambahkan stagger animation pakai <AnimatedContent> saat scroll masuk viewport
     (gunakan Intersection Observer / GSAP ScrollTrigger, delay 80ms antar card)

7. Tambahkan grain texture overlay di body (fixed, pointer-events-none, mix-blend-mode overlay)

8. Setup custom cursor global (disable di media query touch/mobile)

9. Test prefers-reduced-motion: semua animasi GSAP/Framer harus check
   window.matchMedia('(prefers-reduced-motion: reduce)') dan fallback ke instant state.

10. Jalankan Pre-Delivery Checklist di bagian 4 sebelum dianggap selesai.
```

---

## 4. PRE-DELIVERY CHECKLIST

- [ ] Tidak ada duplikasi DOM untuk responsive (satu struktur, Tailwind breakpoint utility)
- [ ] Semua icon SVG konsisten (bukan emoji, bukan campur beberapa icon set)
- [ ] Custom cursor otomatis nonaktif di device touch/mobile
- [ ] Semua elemen interaktif punya `cursor-pointer` + hover feedback yang jelas
- [ ] Transisi 200–400ms dengan easing custom, tidak ada perubahan state instan
- [ ] Kontras teks minimum 4.5:1 di semua kombinasi warna
- [ ] `prefers-reduced-motion` dihormati — sediakan versi statis
- [ ] Thumbnail project seragam aspect-ratio, tidak ada yang gepeng/stretch
- [ ] Marquee logo pakai `aria-hidden` pada elemen duplikat
- [ ] Responsive teruji di 375px, 768px, 1024px, 1440px — tidak ada horizontal scroll
- [ ] Grain/noise overlay tidak mengganggu keterbacaan teks (opacity rendah, blend mode tepat)
- [ ] Loading state untuk animasi berat (Aurora/Particles) tidak bikin CLS (Cumulative Layout Shift)
- [ ] Footer copy "BISMILLAH DAPET KERJAAN" tetap ada tapi treatment-nya elevated (mis. tipografi kecil elegan di pojok, bukan headline besar) — pertahankan identitas personal tanpa merusak tone premium