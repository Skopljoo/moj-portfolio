import ProjectCard from "@/components/ProjectCard";
import projectsData from "@/data/projects.json";

export default function Home() {
  return (
    <main className="min-h-screen bg-zinc-950 text-white selection:bg-cyan-500/20">
      {/* Gornji "Hero" dio sa tvojim brendom */}
      <section className="max-w-5xl mx-auto px-6 py-28 md:py-36">
        <div className="space-y-6">
          <div className="inline-flex items-center gap-2 bg-zinc-900 border border-zinc-800 px-3 py-1 rounded-full text-xs font-mono text-cyan-400 tracking-wider uppercase">
            <span className="w-2 h-2 rounded-full bg-cyan-500 animate-pulse"></span>
            Skopljak Development
          </div>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-none">
            Software & Hardware <br />
            <span className="text-zinc-600">Engineer.</span>
          </h1>
          <p className="text-zinc-400 max-w-2xl text-lg md:text-xl leading-relaxed font-light">
            Kreiram brza softverska rješenja i dizajniram stabilne hardverske sisteme. Fokusiran na <span className="text-white font-medium">Next.js</span>, full-stack web aplikacije i mrežnu infrastrukturu.
          </p>
        </div>
      </section>

      {/* Grid sa projektima */}
      <section className="max-w-5xl mx-auto px-6 py-12 pb-32">
        <h2 className="text-2xl md:text-3xl font-bold mb-12 flex items-center gap-4 text-zinc-100">
          <span className="h-[1px] w-12 bg-cyan-500 block"></span>
          Izdvojeni Projekti
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projectsData.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>
    </main>
  );
}