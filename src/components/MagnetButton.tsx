"use client";

import { motion } from "framer-motion";
import { useState, useRef, ReactNode } from "react";

interface MagnetButtonProps {
  children: ReactNode;
  className?: string;
  href?: string;
  target?: string;
  rel?: string;
  as?: any;
}

export default function MagnetButton({ children, className, href, target, rel, as = "a" }: MagnetButtonProps) {
  const ref = useRef<any>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouse = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const { clientX, clientY } = e;
    const { height, width, left, top } = ref.current.getBoundingClientRect();
    const middleX = clientX - (left + width / 2);
    const middleY = clientY - (top + height / 2);
    setPosition({ x: middleX * 0.3, y: middleY * 0.3 });
  };

  const reset = () => {
    setPosition({ x: 0, y: 0 });
  };

  const Component = as;

  return (
    <Component
      ref={ref}
      href={href}
      target={target}
      rel={rel}
      onMouseMove={handleMouse}
      onMouseLeave={reset}
      className={className}
    >
      <motion.div
        animate={{ x: position.x, y: position.y }}
        transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
        className="w-full h-full flex items-center justify-center gap-2"
      >
        {children}
      </motion.div>
    </Component>
  );
}
