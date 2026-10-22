import Link from "next/link";
import Image from "next/image";
import { ArrowDown, Mail, Terminal, Cpu, Network, Sparkles, MapPin } from "lucide-react";
import projectsData from "@/data/projects.json";
import ProjectCard from "@/components/ProjectCard";
import ContactForm from "@/components/ContactForm";

export default function Home() {
  return (
    <div className="space-y-24 md:space-y-32">
      {/* HERO SECTION */}
      <section className="relative pt-32 md:pt-40 pb-16 px-6 overflow-hidden">
        {/* Subtle Background Glow */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-[#3a492f]/20 blur-[130px] rounded-full pointer-events-none" />

        <div className="max-w-4xl mx-auto text-center space-y-6 relative z-10">
          {/* USER REQUIREMENT: Above 'Software & Hardware Engineer', put 'SOFTWARE DEVELOPER' */}
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-zinc-900/80 border border-[#526643]/70 text-[#c5d6b4] text-xs font-mono font-semibold uppercase tracking-widest shadow-lg shadow-black/40">
            <span className="w-2 h-2 rounded-full bg-[#8ea47c] animate-pulse" />
            <span>SOFTWARE DEVELOPER</span>
          </div>

          {/* Heading */}
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold text-white tracking-tight leading-[1.1]">
            Software & Hardware <br />
            <span className="bg-gradient-to-r from-white via-zinc-200 to-[#9cb589] bg-clip-text text-transparent">
              Engineer
            </span>
          </h1>

          {/* Subtitle with strictly Zenica location */}
          <p className="text-zinc-400 text-base sm:text-lg md:text-xl max-w-2xl mx-auto leading-relaxed font-light">
            Pozdrav, ja sam <strong className="text-white font-semibold">Jusuf Skopljak</strong>. Specijalizovan za razvoj modernih web aplikacija, skalabilnih IT sistema, automatizaciju i Cisco mrežnu infrastrukturu.
          </p>

          {/* Location Badge */}
          <div className="flex items-center justify-center gap-2 text-xs font-mono text-zinc-400">
            <MapPin size={13} className="text-[#8ea47c]" />
            <span>Zenica, Bosna i Hercegovina</span>
          </div>

          {/* Call to Action Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <a
              href="#projekti"
              className="inline-flex items-center gap-2 bg-[#3a492f] hover:bg-[#4a5c3d] text-white text-sm font-semibold px-6 py-3 rounded-xl transition-all shadow-lg shadow-black/40 hover:scale-102"
            >
              <span>Istraži Projekte</span>
              <ArrowDown size={15} />
            </a>

            <a
              href="#kontakt"
              className="inline-flex items-center gap-2 bg-zinc-900 hover:bg-zinc-800 text-zinc-200 hover:text-white text-sm font-semibold px-6 py-3 rounded-xl transition-all border border-zinc-800"
            >
              <Mail size={15} className="text-[#8ea47c]" />
              <span>Kontaktiraj me</span>
            </a>

            <a
              href="https://github.com/Skopljoo"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 bg-zinc-900/60 hover:bg-zinc-800 text-zinc-300 hover:text-white text-sm font-medium px-4 py-3 rounded-xl transition-all border border-zinc-800/80"
              title="GitHub Profil"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
              </svg>
              <span className="font-mono text-xs">@Skopljoo</span>
            </a>
          </div>

          {/* Quick Pillars Overview */}
          <div className="pt-10 grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto text-left">
            <div className="p-4 rounded-xl bg-zinc-900/40 border border-zinc-800/70 space-y-1">
              <div className="flex items-center gap-2 text-white text-xs font-mono font-semibold">
                <Terminal size={14} className="text-[#8ea47c]" />
                <span>Web & App Razvoj</span>
              </div>
              <p className="text-zinc-400 text-xs leading-relaxed font-light">
                React, Next.js, TypeScript, C# .NET i responzivni interfejsi.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-zinc-900/40 border border-zinc-800/70 space-y-1">
              <div className="flex items-center gap-2 text-white text-xs font-mono font-semibold">
                <Network size={14} className="text-[#8ea47c]" />
                <span>Mrežni Inženjering</span>
              </div>
              <p className="text-zinc-400 text-xs leading-relaxed font-light">
                Cisco rješenja, VLAN segmentacija, OSPF rutiranje i sigurnost.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-zinc-900/40 border border-zinc-800/70 space-y-1">
              <div className="flex items-center gap-2 text-white text-xs font-mono font-semibold">
                <Cpu size={14} className="text-[#8ea47c]" />
                <span>Hardver & IoT</span>
              </div>
              <p className="text-zinc-400 text-xs leading-relaxed font-light">
                PC arhitektura, IoT displeji, digital signage i dijagnostika.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PROJECTS SECTION */}
      <section id="projekti" className="max-w-5xl mx-auto px-6 space-y-10 scroll-mt-24">
        <div className="space-y-3">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#9cb589]">
            <Sparkles size={14} />
            <span>Portfolio Radova</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Izdvojeni Projekti
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base max-w-2xl font-light">
            Kliknite na bilo koji projekat da biste otvorili njegovu stranicu, pregledali višestruke slike u galeriji, detaljan kod i saradnike.
          </p>
        </div>

        {/* Projects 2-column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projectsData.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>

      {/* ABOUT TEASER SECTION */}
      <section className="max-w-5xl mx-auto px-6">
        <div className="p-8 md:p-12 rounded-2xl bg-zinc-900/50 border border-zinc-800 flex flex-col md:flex-row items-center gap-8 justify-between">
          <div className="relative w-28 h-28 sm:w-36 sm:h-36 shrink-0 rounded-2xl overflow-hidden border-2 border-[#526643]/70 shadow-xl shadow-black/40">
            <Image
              src="/profile.jpg"
              alt="Jusuf Skopljak"
              fill
              className="object-cover"
              unoptimized
            />
          </div>

          <div className="space-y-3 flex-1 text-center md:text-left">
            <div className="text-xs font-mono text-[#9cb589] uppercase tracking-wider">
              Biografija & Vještine
            </div>
            <h3 className="text-2xl font-bold text-white">
              Upoznajte me bolje
            </h3>
            <p className="text-zinc-400 text-sm leading-relaxed font-light max-w-xl">
              Student i inženjer iz Zenice sa praktičnim iskustvom u softverskom inženjeringu, Cisco mrežama i razvoju korisnih alata za poslovne i privatne korisnike.
            </p>
          </div>

          <div className="shrink-0">
            <Link
              href="/about"
              className="inline-flex items-center gap-2 text-xs font-semibold px-5 py-3 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-white transition-all border border-zinc-700"
            >
              <span>Detaljnije o meni</span>
              <ArrowDown size={14} className="-rotate-90" />
            </Link>
          </div>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section id="kontakt" className="max-w-5xl mx-auto px-6 space-y-10 scroll-mt-24">
        <div className="space-y-3 text-center max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#9cb589]">
            <span className="w-2 h-2 rounded-full bg-[#526643]" />
            <span>Povežimo se</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Kontakt & Saradnja
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base font-light">
            Dostupan za nove projekte, softverski razvoj i tehničke konsultacije u Zenici ili na daljinu.
          </p>
        </div>

        <ContactForm />
      </section>
    </div>
  );
}
