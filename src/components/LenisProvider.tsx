"use client";

import { useEffect, useState } from "react";
import Lenis from "lenis";
import SplashCursor from "./SplashCursor";

export default function LenisProvider({ children }: { children: React.ReactNode }) {
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    const checkTouch = () => {
      setIsTouchDevice(window.matchMedia("(pointer: coarse)").matches || 'ontouchstart' in window);
    };
    checkTouch();
    window.addEventListener("resize", checkTouch);
    return () => window.removeEventListener("resize", checkTouch);
  }, []);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <>
      {!isTouchDevice && (
        <div className="fixed inset-0 z-[100] pointer-events-none">
          <SplashCursor 
            COLOR="#E9333A" 
            SPLAT_RADIUS={0.1}
            SPLAT_FORCE={4000}
            DENSITY_DISSIPATION={4}
            VELOCITY_DISSIPATION={2}
          />
        </div>
      )}
      {children}
    </>
  );
}
