"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import MagnetButton from "./MagnetButton";

const navItemIds = ["home", "about", "skills", "projects", "contact"];

export default function Navbar() {
  const pathname = usePathname();
  const { t, language, setLanguage } = useLanguage();

  const navItems = [
    { label: t.navbar.home, href: "/#home", id: "home" },
    { label: t.navbar.about, href: "/#about", id: "about" },
    { label: t.navbar.skills, href: "/#skills", id: "skills" },
    { label: t.navbar.projects, href: "/#projects", id: "projects" },
    { label: t.navbar.contact, href: "/#contact", id: "contact" },
  ];

  const [activeSection, setActiveSection] = useState(
    pathname.startsWith("/projects") ? "projects" : "home"
  );

  const [isNavbarVisible, setIsNavbarVisible] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleNavbarVisibility = () => {
      if (isMobileMenuOpen) return;
      
      const currentScrollY = window.scrollY;
      const scrollDifference = Math.abs(currentScrollY - lastScrollY.current);

      if (scrollDifference < 8) return;

      if (currentScrollY <= 20) {
        setIsNavbarVisible(true);
      } else if (currentScrollY > lastScrollY.current) {
        setIsNavbarVisible(false);
      } else {
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
  }, [isMobileMenuOpen]);

  useEffect(() => {
    if (pathname.startsWith("/projects")) {
      setActiveSection("projects");
      return;
    }

    const handleActiveSection = () => {
      for (const id of navItemIds) {
        const section = document.getElementById(id);

        if (section) {
          const rect = section.getBoundingClientRect();

          if (rect.top <= 180 && rect.bottom >= 180) {
            setActiveSection(id);
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
      className={`fixed top-4 left-1/2 -translate-x-1/2 w-[calc(100%-2rem)] max-w-5xl z-50 bg-[#09090b]/85 backdrop-blur-xl border border-white/10 shadow-[0_4px_30px_rgba(0,0,0,0.5)] rounded-full transition-all duration-500 ${
        isNavbarVisible ? "translate-y-0 opacity-100" : "-translate-y-[150%] opacity-0"
      }`}
    >
      <div className="flex justify-between items-center w-full px-4 md:px-6 py-3">
        <Link
          href="/#home"
          className="font-display-lg text-xl font-bold text-white uppercase tracking-tight flex items-center gap-1"
        >
          FAYIZ<span className="text-[#E9333A]">.DEV</span>
        </Link>

        <div className="hidden md:flex gap-6 items-center">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;

            return (
              <Link
                key={item.id}
                href={item.href}
                className={`font-body text-sm font-medium transition-all duration-300 relative ${
                  isActive
                    ? "text-[#E9333A]"
                    : "text-zinc-400 hover:text-white"
                }`}
              >
                {item.label}
                {isActive && (
                  <span className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-1 h-1 bg-[#E9333A] rounded-full shadow-[0_0_8px_rgba(233,51,58,0.8)]" />
                )}
              </Link>
            );
          })}
        </div>

        <div className="flex items-center gap-4">
          <div className="flex items-center font-body font-medium text-xs text-zinc-400 bg-white/5 border border-white/10 rounded-full p-1 backdrop-blur-md">
            <button
              onClick={() => setLanguage("en")}
              className={`px-3 py-1.5 rounded-full transition-all ${
                language === "en" ? "bg-[#E9333A]/20 text-[#E9333A] shadow-[inset_0_0_12px_rgba(233,51,58,0.2)]" : "hover:text-white"
              }`}
            >
              EN
            </button>
            <button
              onClick={() => setLanguage("id")}
              className={`px-3 py-1.5 rounded-full transition-all ${
                language === "id" ? "bg-[#E9333A]/20 text-[#E9333A] shadow-[inset_0_0_12px_rgba(233,51,58,0.2)]" : "hover:text-white"
              }`}
            >
              ID
            </button>
          </div>

          <MagnetButton
            as={Link}
            href="/#contact"
            className="hidden md:flex bg-[#E9333A] hover:bg-[#FF4D55] text-white font-label-mono text-sm tracking-wider px-8 py-3 rounded-full transition-colors"
          >
            {t.navbar.letsTalk}
          </MagnetButton>

          <button 
            className="md:hidden text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <div
        className={`md:hidden absolute top-full left-0 w-full bg-pure-black transition-all duration-300 overflow-hidden flex flex-col items-center ${
          isMobileMenuOpen ? "max-h-[400px] py-6 border-b brutalist-border-subtle" : "max-h-0 py-0 border-transparent"
        }`}
      >
        <div className="flex flex-col gap-6 items-center w-full px-6">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <Link
                key={item.id}
                href={item.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`font-label-mono text-sm uppercase transition-colors duration-200 ${
                  isActive
                    ? "text-crimson border-b-2 border-crimson pb-1"
                    : "text-secondary hover:text-white pb-1 border-b-2 border-transparent"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
          
            <MagnetButton
              as={Link}
              href="/#contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className="bg-[#E9333A] text-white px-8 py-4 font-label-mono text-sm mt-4 w-full rounded-full flex justify-center items-center"
            >
              {t.navbar.letsTalk}
            </MagnetButton>
        </div>
      </div>
    </nav>
  );
}