"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowRightLeft } from "lucide-react";
import SpotlightCard from "./SpotlightCard";
import AnimatedContent from "./AnimatedContent";
import ParallaxSection from "./ParallaxSection";
import { getSkillLogo } from "@/lib/getSkillLogo";

type Project = {
  title: string;
  slug: string;
  category: string;
  image: string;
  description: string;
  tools: string[];
};

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const speed = index % 2 === 0 ? 0.2 : 0.4;
  
  return (
    <ParallaxSection speed={speed} className="h-full">
      <AnimatedContent
        delay={0.1}
        distance={50}
        direction="vertical"
        className="h-full"
      >
      <SpotlightCard spotlightColor="rgba(255, 255, 255, 0.1)" className="group cursor-pointer flex flex-col h-full glass-panel transition-colors duration-300 p-6 rounded-3xl">
        <Link href={`/projects/${project.slug}`} className="block relative w-full aspect-[16/10] border border-white/10 mb-6 overflow-hidden bg-white/5 rounded-2xl">
          <Image
            src={project.image.startsWith('/portofolio') ? project.image : `/portofolio${project.image}`}
            alt={`${project.title} preview`}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover transition-all duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 border border-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 m-4 pointer-events-none rounded-xl"></div>
        </Link>

        <div className="flex flex-col flex-grow w-full z-10 relative">
          <div className="flex flex-col xl:flex-row xl:justify-between xl:items-start gap-2 mb-4 w-full">
            <h3 className="font-headline-lg text-2xl md:text-3xl font-bold uppercase tracking-tight text-white transition-colors">{project.title}</h3>
            <Link
              href={`/projects/${project.slug}`}
              className="font-label-mono text-[#E9333A] flex items-center gap-2 uppercase group-hover:text-white transition-colors shrink-0"
            >
              KNOW MORE <ArrowRight size={16} />
            </Link>
          </div>
          
          <p className="font-body text-secondary group-hover:text-zinc-300 transition-colors mb-6 line-clamp-3">{project.description}</p>
          
          <div className="flex flex-wrap gap-2 mt-auto pt-2">
            {project.tools.slice(0, 4).map((tool) => {
              const logo = getSkillLogo(tool);
              return (
                <span key={tool} className="flex items-center gap-1.5 font-label-mono text-xs border border-white/10 group-hover:border-white/30 group-hover:text-white transition-colors px-3 py-1 uppercase text-zinc-400 rounded-full bg-white/5">
                  {logo && <img src={`/portofolio${logo}`} alt={tool} width={14} height={14} className="object-contain" />}
                  {tool}
                </span>
              );
            })}
            {project.tools.length > 4 && (
              <span className="font-label-mono text-xs border border-white/10 group-hover:border-white/30 group-hover:text-white transition-colors px-3 py-1 uppercase text-zinc-400 rounded-full bg-white/5">
                +{project.tools.length - 4} MORE
              </span>
            )}
          </div>
        </div>
      </SpotlightCard>
      </AnimatedContent>
    </ParallaxSection>
  );
}

export default function Projects({ projects }: { projects: Project[] }) {
  return (
    <>
      <div className="md:hidden flex items-center justify-end gap-2 text-xs text-white/40 uppercase tracking-widest font-label-mono w-full px-2 mb-4">
        <ArrowRightLeft size={12} /> Swipe
      </div>
      <div className="flex overflow-x-auto snap-x snap-mandatory hide-scrollbar gap-6 md:grid md:gap-12 md:grid-cols-2 md:overflow-visible pb-10 md:pb-0 -mx-6 px-6 md:mx-0 md:px-0">
      {projects.map((project, index) => (
        <div key={project.title} className="min-w-[85vw] sm:min-w-[70vw] md:min-w-0 snap-center md:snap-none">
          <ProjectCard project={project} index={index} />
        </div>
      ))}
    </div>
    </>
  );
}
