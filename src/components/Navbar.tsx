"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";

const navItems = [
  { label: "Home", href: "/#home", id: "home" },
  { label: "About", href: "/#about", id: "about" },
  { label: "Skills", href: "/#skills", id: "skills" },
  { label: "Projects", href: "/#projects", id: "projects" },
  { label: "Contact", href: "/#contact", id: "contact" },
];

export default function Navbar() {
  const pathname = usePathname();

  const [activeSection, setActiveSection] = useState(
    pathname.startsWith("/projects") ? "projects" : "home"
  );

  const [isNavbarVisible, setIsNavbarVisible] = useState(true);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleNavbarVisibility = () => {
      const currentScrollY = window.scrollY;
      const scrollDifference = Math.abs(currentScrollY - lastScrollY.current);

      /*
        Biar navbar nggak kedip-kedip karena scroll kecil banget.
        Navbar baru bereaksi kalau scroll beda minimal 8px.
      */
      if (scrollDifference < 8) return;

      if (currentScrollY <= 20) {
        setIsNavbarVisible(true);
      } else if (currentScrollY > lastScrollY.current) {
        // Scroll ke bawah: navbar hilang/tenggelam
        setIsNavbarVisible(false);
      } else {
        // Scroll sedikit ke atas: navbar muncul lagi
        setIsNavbarVisible(true);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleNavbarVisibility, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleNavbarVisibility);
    };
  }, []);

  useEffect(() => {
    if (pathname.startsWith("/projects")) {
      setActiveSection("projects");
      return;
    }

    const handleActiveSection = () => {
      for (const item of navItems) {
        const section = document.getElementById(item.id);

        if (section) {
          const rect = section.getBoundingClientRect();

          if (rect.top <= 180 && rect.bottom >= 180) {
            setActiveSection(item.id);
            break;
          }
        }
      }
    };

    handleActiveSection();
    window.addEventListener("scroll", handleActiveSection, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleActiveSection);
    };
  }, [pathname]);

  return (
    <nav
      className={`site-navbar liquid-nav left-1/2 top-5 w-[92%] max-w-6xl -translate-x-1/2 px-5 py-3 transition-all duration-500 ease-out ${
        isNavbarVisible
          ? "translate-y-0 opacity-100"
          : "-translate-y-28 opacity-0"
      }`}
    >
      <div className="relative z-10 flex items-center justify-between">
        <a href="/#home" className="text-sm font-semibold tracking-wide">
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

        <a href="/#contact" className="liquid-button px-4 py-2 text-sm">
          Let’s Talk
        </a>
      </div>
    </nav>
  );
}