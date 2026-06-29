import Image from "next/image";
import { Mail, FileText } from "lucide-react"; // Izbačeni Linkedin i Instagram odavde

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
              
              {/* LinkedIn sa čistim SVG-om */}
              <a href="https://linkedin.com/in/tvoj-username" target="_blank" rel="noreferrer" className="flex items-center gap-3 text-zinc-400 hover:text-cyan-400 transition-colors p-2 bg-zinc-900/50 rounded-lg border border-zinc-800/60">
                <svg className="w-[18px] h-[18px] fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
                <span className="text-sm">LinkedIn</span>
              </a>

              {/* Instagram sa čistim SVG-om */}
              <a href="https://instagram.com/tvoj-username" target="_blank" rel="noreferrer" className="flex items-center gap-3 text-zinc-400 hover:text-cyan-400 transition-colors p-2 bg-zinc-900/50 rounded-lg border border-zinc-800/60">
                <svg className="w-[18px] h-[18px] stroke-current fill-none" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
                <span className="text-sm">Instagram</span>
              </a>

              {/* Email (Lucide radi) */}
              <a href="mailto:tvoj.email@gmail.com" className="flex items-center gap-3 text-zinc-400 hover:text-cyan-400 transition-colors p-2 bg-zinc-900/50 rounded-lg border border-zinc-800/60">
                <Mail size={18} /> <span className="text-sm">Email</span>
              </a>

              {/* CV (Lucide radi) */}
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