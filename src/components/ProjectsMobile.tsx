"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

type Project = {
  title: string;
  slug: string;
  category: string;
  image: string;
  description: string;
  tools: string[];
};

export default function ProjectsMobile({ projects }: { projects: Project[] }) {
  return (
    <div className="flex snap-x snap-mandatory gap-4 overflow-x-auto pb-5 pr-6 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
      {projects.map((project) => (
        <Link
          key={project.title}
          href={`/projects/${project.slug}`}
          className="liquid-card group block min-w-[82%] snap-start overflow-hidden"
        >
          <div className="relative z-10 h-44 overflow-hidden border-b border-white/15 bg-white/[0.05]">
            <Image
              src={project.image}
              alt={`${project.title} preview`}
              fill
              sizes="82vw"
              className="object-cover transition duration-500 group-hover:scale-105"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-[#050713]/80 via-transparent to-transparent" />

            <div className="absolute right-4 top-4 z-20 liquid-icon flex h-10 w-10 items-center justify-center rounded-full text-slate-950">
              <ArrowUpRight size={17} strokeWidth={2.4} />
            </div>
          </div>

          <div className="relative z-10 p-5">
            <p className="text-xs text-sky-300">{project.category}</p>

            <h3 className="mt-2 text-xl font-semibold">{project.title}</h3>

            <p className="mt-3 line-clamp-3 text-sm leading-6 text-slate-300/90">
              {project.description}
            </p>

            <div className="mt-4 flex gap-2 overflow-x-auto pb-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
              {project.tools.map((tool) => (
                <span
                  key={tool}
                  className="liquid-chip shrink-0 px-3 py-1 text-[11px]"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}