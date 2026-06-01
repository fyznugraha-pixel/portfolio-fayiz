"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

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
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ duration: 0.25 }}
      className="liquid-card group overflow-hidden"
    >
      <div className="relative z-10 h-64 overflow-hidden border-b border-white/15 bg-white/[0.05]">
        <Image
          src={project.image}
          alt={`${project.title} preview`}
          fill
          sizes="50vw"
          className="object-cover transition duration-500 group-hover:scale-105"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-[#050713]/75 via-transparent to-transparent" />

        <Link
          href={`/projects/${project.slug}`}
          aria-label={`Open ${project.title}`}
          className="project-arrow liquid-icon flex h-11 w-11 items-center justify-center rounded-full text-slate-950 transition duration-300 group-hover:scale-105"
        >
          <ArrowUpRight size={18} strokeWidth={2.4} />
        </Link>
      </div>

      <div className="relative z-10 p-7">
        <div className="mb-6">
          <p className="text-sm text-sky-300">{project.category}</p>
          <h3 className="mt-3 text-2xl font-semibold">{project.title}</h3>
        </div>

        <p className="leading-7 text-slate-300/90">{project.description}</p>

        <div className="mt-6 flex flex-wrap gap-2">
          {project.tools.map((tool) => (
            <span key={tool} className="liquid-chip px-3 py-1 text-xs">
              {tool}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default function ProjectsDesktop({ projects }: { projects: Project[] }) {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      {projects.map((project) => (
        <ProjectCard key={project.title} project={project} />
      ))}
    </div>
  );
}