"use client";
import { useRef } from "react";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import BorderGlow from "./BorderGlow";
import { getSkillLogo } from "@/lib/getSkillLogo";

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
            className="group block min-w-[90%] snap-center flex-col h-full glass-panel transition-colors duration-300 p-4 rounded-3xl"
          >
          <Link href={`/projects/${project.slug}`} className="block relative w-full aspect-video border border-white/10 mb-6 overflow-hidden bg-white/5 rounded-2xl">
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
                  className="font-label-mono text-indigo-400 flex items-center gap-1 uppercase group-hover:text-white transition-colors shrink-0"
                >
                  <ArrowRight size={20} />
                </Link>
              </div>
              
              <p className="font-body text-sm text-secondary group-hover:text-white transition-colors mb-5 line-clamp-3">{project.description}</p>
              
              <div className="flex flex-wrap gap-2">
                {project.tools.slice(0, 3).map((tool) => {
                  const logo = getSkillLogo(tool);
                  return (
                    <span key={tool} className="flex items-center gap-1.5 font-label-mono text-xs border border-white/10 group-hover:border-white/30 group-hover:text-white transition-colors px-3 py-1 uppercase text-zinc-400 rounded-full">
                      {logo && <img src={`/portofolio${logo}`} alt={tool} width={14} height={14} className="object-contain" />}
                      {tool}
                    </span>
                  );
                })}
                {project.tools.length > 3 && (
                  <span className="font-label-mono text-xs border border-white/10 group-hover:border-white/30 group-hover:text-white transition-colors px-3 py-1 uppercase text-zinc-400 rounded-full">
                    +{project.tools.length - 3} MORE
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