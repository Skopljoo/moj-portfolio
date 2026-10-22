"use client";

import Image from "next/image";
import Link from "next/link";
import { Users, ExternalLink, ArrowRight, Layers } from "lucide-react";

export interface Collaborator {
  name: string;
  role: string;
  github: string;
}

export interface Project {
  id: string;
  title: string;
  category: string;
  badge?: string;
  shortDescription: string;
  description: string;
  image: string;
  images: string[];
  techStack: string[];
  collaborators?: Collaborator[];
  githubUrl?: string | null;
  liveUrl?: string | null;
  features?: string[];
  challenges?: string;
}

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const liveUrl =
    project.liveUrl && project.liveUrl !== "#"
      ? project.liveUrl.startsWith("http")
        ? project.liveUrl
        : `https://${project.liveUrl}`
      : null;

  return (
    <div className="bg-zinc-900/60 border border-zinc-800 rounded-xl overflow-hidden hover:border-[#4a5c3d]/60 hover:bg-zinc-900/90 transition-all flex flex-col group shadow-lg shadow-black/20">
      {/* Cover Image & Image Count Badge */}
      <Link
        href={`/projects/${project.id}`}
        className="relative h-52 w-full bg-zinc-950 overflow-hidden border-b border-zinc-800/60 block cursor-pointer"
      >
        <Image
          src={project.image}
          alt={project.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover group-hover:scale-105 transition-transform duration-300"
          unoptimized
        />
        {/* Category & Multi-image badge */}
        <div className="absolute top-3 left-3 flex items-center gap-2">
          {project.badge && (
            <span className="bg-[#2a3522]/90 backdrop-blur-md text-[#d3e3c6] text-[11px] font-mono font-medium px-2.5 py-1 rounded-md border border-[#526643]/60 shadow-sm">
              {project.badge}
            </span>
          )}
        </div>

        {project.images && project.images.length > 1 && (
          <div className="absolute top-3 right-3 bg-zinc-950/80 backdrop-blur-md text-zinc-300 text-[11px] font-mono px-2.5 py-1 rounded-md border border-zinc-700/60 flex items-center gap-1.5 shadow-sm">
            <Layers size={12} className="text-[#8ea47c]" />
            <span>{project.images.length} slike</span>
          </div>
        )}
      </Link>

      {/* Card Content */}
      <div className="p-6 flex-1 flex flex-col justify-between">
        <div>
          <div className="text-xs font-mono text-[#9cb589] uppercase tracking-wider mb-1.5">
            {project.category}
          </div>
          <Link href={`/projects/${project.id}`}>
            <h3 className="text-xl font-bold text-white mb-2.5 group-hover:text-[#d3e3c6] transition-colors flex items-center justify-between">
              <span>{project.title}</span>
              <ArrowRight
                size={16}
                className="text-zinc-600 group-hover:text-[#9cb589] group-hover:translate-x-1 transition-all shrink-0"
              />
            </h3>
          </Link>
          <p className="text-zinc-400 text-sm mb-4 leading-relaxed font-light">
            {project.shortDescription || project.description}
          </p>

          {/* Tech Stack Pills */}
          <div className="flex flex-wrap gap-1.5 mb-5">
            {project.techStack.map((tech, idx) => (
              <span
                key={idx}
                className="bg-zinc-800/70 text-zinc-300 text-xs px-2.5 py-1 rounded-md font-mono border border-zinc-700/60"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Collaborators section if any */}
          {project.collaborators && project.collaborators.length > 0 && (
            <div className="mb-5 p-3 bg-zinc-950/70 rounded-lg border border-zinc-800/80">
              <div className="flex items-center gap-2 text-zinc-400 text-xs font-mono uppercase tracking-wider mb-2">
                <Users size={14} className="text-[#8ea47c]" />
                <span>Timski Rad / Saradnici:</span>
              </div>
              <div className="space-y-1">
                {project.collaborators.map((c, i) => (
                  <div
                    key={i}
                    className="text-zinc-400 text-xs flex justify-between items-center"
                  >
                    <span>
                      {c.name}{" "}
                      <span className="text-zinc-500">({c.role})</span>
                    </span>
                    <a
                      href={c.github}
                      target="_blank"
                      rel="noreferrer"
                      className="text-[#9cb589] hover:underline hover:text-[#d3e3c6] transition-colors"
                    >
                      GitHub
                    </a>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center gap-2.5 pt-4 border-t border-zinc-800/60 mt-4">
          <Link
            href={`/projects/${project.id}`}
            className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-1.5 text-xs font-semibold text-white bg-[#3a492f] hover:bg-[#4a5c3d] px-3.5 py-2 rounded-lg transition-colors shadow-sm"
          >
            <span>Pogledaj Detalje & Slike</span>
            <ArrowRight size={13} />
          </Link>

          {project.githubUrl && project.githubUrl !== "#" && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1.5 text-xs font-medium text-zinc-200 bg-zinc-800/90 hover:bg-zinc-700 hover:text-white px-3 py-2 rounded-lg transition-colors border border-zinc-700/50"
              title="Pregled izvornog koda na GitHubu"
            >
              <svg
                className="w-3.5 h-3.5 fill-current"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
              </svg>
              <span>Izvorni Kod</span>
            </a>
          )}

          {liveUrl && (
            <a
              href={liveUrl}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1.5 text-xs font-semibold text-emerald-300 bg-emerald-950/60 hover:bg-emerald-900/60 border border-emerald-800/60 px-3 py-2 rounded-lg transition-colors"
            >
              <ExternalLink size={13} />
              <span>Live Demo</span>
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
