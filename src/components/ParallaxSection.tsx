import React from "react";

interface ParallaxSectionProps {
  children: React.ReactNode;
  speed?: number; // Kept for backward compatibility but unused
  className?: string;
  id?: string;
}

export default function ParallaxSection({
  children,
  className = "",
  id,
}: ParallaxSectionProps) {
  // Parallax effect has been completely removed for better performance and stability
  return (
    <section id={id} className={`relative w-full ${className}`}>
      <div className="w-full h-full">
        {children}
      </div>
    </section>
  );
}
