"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { Menu } from "lucide-react";

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
      className={`fixed top-0 left-0 w-full z-50 bg-pure-black border-b brutalist-border-subtle transition-transform duration-300 ${
        isNavbarVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="flex justify-between items-center w-full px-6 py-6 max-w-[1440px] mx-auto">
        <Link
          href="/#home"
          className="font-headline-lg text-2xl font-black text-on-surface uppercase tracking-tight"
        >
          FAYIZ.DEV
        </Link>

        <div className="hidden md:flex gap-8 items-center">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;

            return (
              <a
                key={item.id}
                href={item.href}
                className={`font-label-mono text-sm uppercase transition-colors duration-200 ${
                  isActive
                    ? "text-crimson border-b-2 border-crimson pb-1"
                    : "text-secondary hover:text-white pb-1 border-b-2 border-transparent"
                }`}
              >
                {item.label}
              </a>
            );
          })}
        </div>

        <a
          href="/#contact"
          className="brutalist-button px-8 py-3 text-sm hidden md:block"
        >
          Let’s Talk
        </a>

        <button className="md:hidden text-white">
          <Menu size={28} />
        </button>
      </div>
    </nav>
  );
}