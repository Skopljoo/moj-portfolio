"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { ExternalLink, Users } from "lucide-react";

export default function ProjectCard({ project }: { project: any }) {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ duration: 0.2 }}
      className="bg-zinc-900/50 border border-zinc-800 rounded-xl overflow-hidden hover:border-cyan-500/40 hover:bg-zinc-900 transition-all group"
    >
      {/* Prostor za sliku */}
      <div className="relative h-48 w-full bg-zinc-800 overflow-hidden">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
          unoptimized
        />
      </div>
      
      {/* Sadržaj kartice */}
      <div className="p-6">
        <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
          {project.title}
        </h3>
        <p className="text-zinc-400 text-sm mb-4 leading-relaxed">{project.description}</p>
        
        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.techStack.map((tech: string, i: number) => (
            <span key={i} className="bg-zinc-800/80 text-cyan-400 text-xs px-2.5 py-1 rounded-md font-mono border border-zinc-700/50">
              {tech}
            </span>
          ))}
        </div>

        {/* Saradnici (Prikazuje se samo ako ih ima) */}
        {project.collaborators.length > 0 && (
          <div className="mb-4 p-3 bg-zinc-950/60 rounded-lg border border-zinc-800">
            <div className="flex items-center gap-2 text-zinc-300 text-xs font-mono uppercase tracking-wider mb-2">
              <Users size={14} className="text-cyan-500" />
              Timski Rad / Saradnici:
            </div>
            {project.collaborators.map((collab: any, i: number) => (
              <div key={i} className="text-zinc-400 text-sm flex justify-between items-center">
                <span>{collab.name} <span className="text-zinc-600 text-xs">({collab.role})</span></span>
                <a href={collab.github} target="_blank" rel="noreferrer" className="text-xs text-cyan-500 hover:underline">GitHub</a>
              </div>
            ))}
          </div>
        )}

        {/* Linkovi */}
        <div className="flex gap-4 mt-6">
          {project.githubUrl !== "#" && (
  <a href={project.githubUrl} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-sm text-zinc-300 bg-zinc-800 hover:bg-zinc-700 hover:text-white px-4 py-2 rounded-lg transition-colors">
    {/* Čisti SVG GitHub Logo umjesto lucide ikone */}
    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
    </svg>
    Izborni Kod
  </a>
)}
        </div>
      </div>
    </motion.div>
  );
}