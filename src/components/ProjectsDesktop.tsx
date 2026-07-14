"use client";

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



function ProjectCard({ project }: { project: Project }) {
  return (
    <BorderGlow className="group cursor-pointer flex flex-col h-full glass-panel glass-panel-hover transition-colors duration-300 p-6 rounded-3xl">
      <Link href={`/projects/${project.slug}`} className="block relative w-full aspect-video border border-white/10 mb-6 overflow-hidden bg-white/5 rounded-2xl">
        <Image
          src={project.image}
          alt={`${project.title} preview`}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover transition-all duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 border border-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 m-4 pointer-events-none rounded-xl"></div>
      </Link>

      <div className="flex flex-col flex-grow w-full">
          <div className="flex flex-col xl:flex-row xl:justify-between xl:items-start gap-2 mb-4 w-full">
            <h3 className="font-headline-lg text-3xl font-bold uppercase tracking-tight text-white transition-colors">{project.title}</h3>
            <Link
              href={`/projects/${project.slug}`}
              className="font-label-mono text-indigo-400 flex items-center gap-2 uppercase group-hover:text-indigo-300 transition-colors shrink-0"
            >
              KNOW MORE <ArrowRight size={16} />
            </Link>
          </div>
          
          <p className="font-body text-secondary group-hover:text-white transition-colors mb-6 line-clamp-3">{project.description}</p>
          
          <div className="flex flex-wrap gap-2 mt-auto pt-2">
            {project.tools.slice(0, 4).map((tool) => {
              const logo = getSkillLogo(tool);
              return (
                <span key={tool} className="flex items-center gap-1.5 font-label-mono text-xs border border-white/10 group-hover:border-white/30 group-hover:text-white transition-colors px-3 py-1 uppercase text-zinc-400 rounded-full">
                  {logo && <img src={`/portofolio${logo}`} alt={tool} width={14} height={14} className="object-contain" />}
                  {tool}
                </span>
              );
            })}
            {project.tools.length > 4 && (
              <span className="font-label-mono text-xs border border-white/10 group-hover:border-white/30 group-hover:text-white transition-colors px-3 py-1 uppercase text-zinc-400 rounded-full">
                +{project.tools.length - 4} MORE
              </span>
            )}
          </div>
      </div>
    </BorderGlow>
  );
}

export default function ProjectsDesktop({ projects }: { projects: Project[] }) {
  return (
    <div className="grid gap-16 md:grid-cols-2">
      {projects.map((project, index) => (
        <div key={project.title} className="h-full">
          <ProjectCard project={project} />
        </div>
      ))}
    </div>
  );
}