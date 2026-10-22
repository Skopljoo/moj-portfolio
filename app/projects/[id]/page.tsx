import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, ExternalLink, Users, Code, CheckCircle, Cpu, Layers } from "lucide-react";
import projectsData from "@/data/projects.json";
import ProjectGallery from "@/components/ProjectGallery";
import type { Metadata } from "next";

interface ProjectPageProps {
  params: Promise<{
    id: string;
  }>;
}

export async function generateStaticParams() {
  return projectsData.map((project) => ({
    id: project.id,
  }));
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { id } = await params;
  const project = projectsData.find((p) => p.id === id);

  if (!project) {
    return {
      title: "Projekat nije pronađen | Jusuf Skopljak",
    };
  }

  return {
    title: `${project.title} | Jusuf Skopljak - Software Developer`,
    description: project.shortDescription || project.description,
  };
}

export default async function ProjectDetailPage({ params }: ProjectPageProps) {
  const { id } = await params;
  const project = projectsData.find((p) => p.id === id);

  if (!project) {
    notFound();
  }

  const liveUrl =
    project.liveUrl && project.liveUrl !== "#"
      ? project.liveUrl.startsWith("http")
        ? project.liveUrl
        : `https://${project.liveUrl}`
      : null;

  return (
    <div className="min-h-screen pt-24 pb-20 px-6">
      <div className="max-w-5xl mx-auto space-y-10">
        {/* Back Link */}
        <div>
          <Link
            href="/#projekti"
            className="inline-flex items-center gap-2 text-sm text-zinc-400 hover:text-white transition-colors group font-medium"
          >
            <ArrowLeft
              size={16}
              className="group-hover:-translate-x-1 transition-transform"
            />
            <span>Nazad na sve projekte</span>
          </Link>
        </div>

        {/* Header Section */}
        <div className="space-y-4 border-b border-zinc-800/80 pb-8">
          <div className="flex flex-wrap items-center gap-3">
            <span className="text-xs font-mono uppercase tracking-wider text-[#9cb589] bg-[#2a3522]/80 border border-[#526643]/60 px-3 py-1 rounded-full">
              {project.category}
            </span>
            {project.badge && (
              <span className="text-xs font-mono text-zinc-400 bg-zinc-900 border border-zinc-800 px-3 py-1 rounded-full">
                {project.badge}
              </span>
            )}
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            {project.title}
          </h1>

          <p className="text-zinc-300 text-base sm:text-lg leading-relaxed font-light max-w-3xl">
            {project.shortDescription || project.description}
          </p>

          {/* Quick Action Links Bar */}
          <div className="flex flex-wrap items-center gap-3 pt-2">
            {project.githubUrl && project.githubUrl !== "#" && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-sm font-semibold text-white bg-zinc-800 hover:bg-zinc-700 px-4 py-2.5 rounded-xl transition-all border border-zinc-700 shadow-md shadow-black/30"
              >
                <svg
                  className="w-4 h-4 fill-current"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                </svg>
                <span>Pogledaj Izvorni Kod na GitHubu</span>
              </a>
            )}

            {liveUrl && (
              <a
                href={liveUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-sm font-semibold text-white bg-[#3a492f] hover:bg-[#4a5c3d] px-4 py-2.5 rounded-xl transition-all shadow-md shadow-black/30"
              >
                <ExternalLink size={15} />
                <span>Otvori Live Aplikaciju</span>
              </a>
            )}
          </div>
        </div>

        {/* Multi-Image Gallery / Slider */}
        <section className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-bold text-white flex items-center gap-2">
              <Layers size={18} className="text-[#8ea47c]" />
              <span>Galerija Slika Projekta</span>
            </h2>
            <span className="text-xs font-mono text-zinc-400">
              {project.images.length} dostupne slike
            </span>
          </div>

          <ProjectGallery images={project.images} title={project.title} />
        </section>

        {/* Project Details Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pt-4">
          {/* Main Content (Left - 8 cols) */}
          <div className="md:col-span-8 space-y-8">
            {/* Overview */}
            <div className="bg-zinc-900/50 border border-zinc-800 rounded-2xl p-6 sm:p-8 space-y-4">
              <h3 className="text-lg font-bold text-white flex items-center gap-2">
                <Code size={18} className="text-[#8ea47c]" />
                <span>O Projektu & Arhitektura</span>
              </h3>
              <p className="text-zinc-300 text-sm sm:text-base leading-relaxed font-light">
                {project.description}
              </p>
            </div>

            {/* Key Features */}
            {project.features && project.features.length > 0 && (
              <div className="bg-zinc-900/50 border border-zinc-800 rounded-2xl p-6 sm:p-8 space-y-4">
                <h3 className="text-lg font-bold text-white flex items-center gap-2">
                  <CheckCircle size={18} className="text-[#8ea47c]" />
                  <span>Glavne Funkcionalnosti</span>
                </h3>
                <ul className="space-y-3">
                  {project.features.map((feature, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-3 text-sm text-zinc-300"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-[#8ea47c] mt-2 shrink-0" />
                      <span className="leading-relaxed">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Challenges & Solutions */}
            {project.challenges && (
              <div className="bg-zinc-900/50 border border-zinc-800 rounded-2xl p-6 sm:p-8 space-y-3">
                <h3 className="text-lg font-bold text-white flex items-center gap-2">
                  <Cpu size={18} className="text-[#8ea47c]" />
                  <span>Tehnički Izazovi & Rješenja</span>
                </h3>
                <p className="text-zinc-300 text-sm leading-relaxed font-light">
                  {project.challenges}
                </p>
              </div>
            )}
          </div>

          {/* Sidebar (Right - 4 cols) */}
          <div className="md:col-span-4 space-y-6">
            {/* Tech Stack Box */}
            <div className="bg-zinc-900/60 border border-zinc-800 rounded-2xl p-6 space-y-3">
              <h4 className="text-xs font-mono uppercase tracking-wider text-[#9cb589]">
                Korištene Tehnologije
              </h4>
              <div className="flex flex-wrap gap-2 pt-1">
                {project.techStack.map((tech, idx) => (
                  <span
                    key={idx}
                    className="bg-zinc-800/80 text-zinc-200 text-xs px-3 py-1.5 rounded-lg font-mono border border-zinc-700/60"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Collaborators Box */}
            <div className="bg-zinc-900/60 border border-zinc-800 rounded-2xl p-6 space-y-4">
              <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#9cb589]">
                <Users size={15} className="text-[#8ea47c]" />
                <span>Saradnici & Tim</span>
              </div>

              {project.collaborators && project.collaborators.length > 0 ? (
                <div className="space-y-3">
                  {project.collaborators.map((c, idx) => (
                    <div
                      key={idx}
                      className="p-3.5 bg-zinc-950/80 rounded-xl border border-zinc-800 space-y-1.5"
                    >
                      <div className="font-semibold text-white text-sm">
                        {c.name}
                      </div>
                      <div className="text-zinc-400 text-xs">{c.role}</div>
                      <div className="pt-1">
                        <a
                          href={c.github}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-1.5 text-xs text-[#9cb589] hover:text-[#d3e3c6] transition-colors font-mono"
                        >
                          <span>Posjeti GitHub profil</span>
                          <ExternalLink size={12} />
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-xs text-zinc-400 leading-relaxed font-light">
                  Samostalni autorski projekat (Jusuf Skopljak — arhitektura, razvoj i testiranje).
                </p>
              )}
            </div>

            {/* GitHub Code Source Box */}
            <div className="bg-zinc-900/60 border border-zinc-800 rounded-2xl p-6 space-y-3">
              <h4 className="text-xs font-mono uppercase tracking-wider text-zinc-400">
                Izvorni Kod
              </h4>
              <p className="text-xs text-zinc-400 leading-relaxed">
                Kompletan repozitorij projekta, dokumentacija i historija izmjena dostupni su na GitHubu.
              </p>
              {project.githubUrl && project.githubUrl !== "#" ? (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 text-xs font-semibold px-4 py-2.5 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-zinc-200 hover:text-white transition-colors border border-zinc-700"
                >
                  <Code size={14} />
                  <span>Otvori GitHub Repozitorij</span>
                </a>
              ) : (
                <span className="text-xs text-zinc-500 italic block">
                  Privatni repozitorij ili klijentski kod.
                </span>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
