"use client";
import { useRef } from "react";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import BorderGlow from "./BorderGlow";

type Project = {
  title: string;
  slug: string;
  category: string;
  image: string;
  description: string;
  tools: string[];
};

export default function ProjectsMobile({ projects }: { projects: Project[] }) {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <div className="w-full relative">
      <div 
        ref={containerRef}
        className="flex overflow-x-auto gap-8 pb-12 snap-x snap-mandatory gallery-slider hide-scrollbar px-6"
      >
        {projects.map((project) => (
          <BorderGlow
            key={project.title}
            className="group block min-w-[90%] snap-center flex-col h-full glass-card hover:bg-crimson transition-colors duration-300 p-4"
          >
          <Link href={`/projects/${project.slug}`} className="block relative w-full aspect-video brutalist-border mb-6 overflow-hidden glass-card rounded-2xl">
            <Image
              src={project.image}
              alt={`${project.title} preview`}
              fill
              sizes="90vw"
              className="object-cover transition-all duration-500"
            />
          </Link>

          <div className="flex flex-col gap-4">
            <div className="w-full">
              <div className="flex justify-between items-start gap-2 mb-3">
                <h3 className="font-headline-lg text-2xl font-bold uppercase tracking-tight text-white transition-colors">{project.title}</h3>
                <Link
                  href={`/projects/${project.slug}`}
                  className="font-label-mono text-crimson flex items-center gap-1 uppercase group-hover:text-white transition-colors shrink-0"
                >
                  <ArrowRight size={20} />
                </Link>
              </div>
              
              <p className="font-body text-sm text-secondary group-hover:text-white transition-colors mb-5 line-clamp-3">{project.description}</p>
              
              <div className="flex flex-wrap gap-2">
                {project.tools.slice(0, 3).map((tool) => (
                  <span key={tool} className="font-label-mono text-[10px] border border-[#333] group-hover:border-white group-hover:text-white transition-colors px-3 py-1 uppercase text-secondary rounded-full">
                    {tool}
                  </span>
                ))}
                {project.tools.length > 3 && (
                  <span className="font-label-mono text-[10px] border border-[#333] group-hover:border-white group-hover:text-white transition-colors px-3 py-1 uppercase text-secondary rounded-full">
                    +{project.tools.length - 3}
                  </span>
                )}
              </div>
            </div>
          </div>
        </BorderGlow>
      ))}
      </div>
    </div>
  );
}