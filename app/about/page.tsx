import Image from "next/image";
import { Linkedin, Instagram, Mail, FileText } from "lucide-react";

export default function About() {
  return (
    <main className="min-h-screen bg-zinc-950 text-white selection:bg-cyan-500/20 px-6 py-24 md:py-32">
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 items-start">
        
        {/* Lijeva kolona: Slika i Društvene mreže */}
        <div className="flex flex-col items-center md:items-start space-y-6">
          <div className="relative w-48 h-48 rounded-2xl overflow-hidden border-2 border-zinc-800 bg-zinc-900 shadow-xl shadow-cyan-500/5">
            <Image 
              src="/profile.jpg" 
              alt="Moja Profilna Slika" 
              fill 
              className="object-cover"
              unoptimized
            />
          </div>
          
          <div className="w-full space-y-3">
            <h3 className="text-sm font-mono uppercase tracking-wider text-zinc-500 text-center md:text-left">Povežimo se</h3>
            <div className="flex flex-col space-y-2">
              <a href="https://linkedin.com/in/tvoj-username" target="_blank" rel="noreferrer" className="flex items-center gap-3 text-zinc-400 hover:text-cyan-400 transition-colors p-2 bg-zinc-900/50 rounded-lg border border-zinc-800/60">
                <Linkedin size={18} /> <span className="text-sm">LinkedIn</span>
              </a>
              <a href="https://instagram.com/tvoj-username" target="_blank" rel="noreferrer" className="flex items-center gap-3 text-zinc-400 hover:text-cyan-400 transition-colors p-2 bg-zinc-900/50 rounded-lg border border-zinc-800/60">
                <Instagram size={18} /> <span className="text-sm">Instagram</span>
              </a>
              <a href="mailto:tvoj.email@gmail.com" className="flex items-center gap-3 text-zinc-400 hover:text-cyan-400 transition-colors p-2 bg-zinc-900/50 rounded-lg border border-zinc-800/60">
                <Mail size={18} /> <span className="text-sm">Email</span>
              </a>
              <a href="/moj-cv.pdf" target="_blank" className="flex items-center gap-3 text-zinc-950 bg-cyan-500 hover:bg-cyan-400 transition-colors p-2 rounded-lg font-semibold shadow-lg shadow-cyan-500/10">
                <FileText size={18} /> <span className="text-sm">Preuzmi CV</span>
              </a>
            </div>
          </div>
        </div>

        {/* Desna kolona: Biografija / Detalji */}
        <div className="md:col-span-2 space-y-8">
          <div>
            <h2 className="text-cyan-500 font-mono text-sm tracking-wider uppercase mb-2">Ko sam ja</h2>
            <h1 className="text-4xl font-bold mb-4">Upoznaj Skopljaka</h1>
            <p className="text-zinc-400 leading-relaxed text-lg font-light">
              Student sam računarskih nauka i inženjerstva, strastven prema rješavanju kompleksnih problema na spoju softvera i hardvera. Kroz akademske i lične projekte, stekao sam iskustvo u razvoju modernih web aplikacija, ali i u radu sa mrežnom infrastrukturom i sistemskim inženjerstvom.
            </p>
          </div>

          <div className="border-t border-zinc-800 pt-6">
            <h3 className="text-xl font-bold mb-4 text-zinc-200">Fokus i Vještine</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-zinc-400 font-mono">
              <div className="space-y-2">
                <div className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-cyan-500 rounded-full"></span> Full-stack (React, Next.js, Node.js)</div>
                <div className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-cyan-500 rounded-full"></span> Jezici: C++, JavaScript, TypeScript, PHP</div>
              </div>
              <div className="space-y-2">
                <div className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-cyan-500 rounded-full"></span> Baze podataka: SQL (MySQL/PostgreSQL)</div>
                <div className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-cyan-500 rounded-full"></span> Mreže: Cisco Packet Tracer, IoT sistemi</div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </main>
  );
}