import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  Mail,
  Smartphone,
  Globe,
  Trophy,
  ExternalLink,
} from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Jusuf Skopljak | Software & Hardware Engineer",
  description:
    "Portfolio i inženjerski profil Jusufa Skopljaka – Full-stack web razvoj, mrežna infrastruktura i ugrađeni sistemi.",
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#090a0d] text-zinc-100 px-6 pt-24 pb-28 md:pt-32 md:pb-36">
      <div className="max-w-4xl mx-auto space-y-8">
        {/* Top Navigation */}
        <div className="flex items-center justify-between">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs font-mono text-zinc-400 hover:text-white transition-colors"
          >
            <ArrowLeft size={14} />
            <span>Nazad na Početnu</span>
          </Link>
          <a
            href="mailto:jusufskopljak2605@gmail.com"
            className="inline-flex items-center gap-2 text-xs font-semibold px-3 py-1.5 rounded-lg bg-[#3a492f] hover:bg-[#485b3b] text-white transition-colors"
          >
            <Mail size={13} />
            <span>Kontaktiraj me</span>
          </a>
        </div>

        {/* Title Header */}
        <div className="space-y-2">
          <div className="flex items-center gap-2.5">
            <span className="w-2 h-2 rounded-full bg-[#526643]" />
            <span className="text-xs font-mono uppercase tracking-widest text-[#9cb589]">
              Biografija &amp; Akademski Profil
            </span>
          </div>
          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white">
            O Meni
          </h1>
          <p className="text-zinc-400 text-sm md:text-base font-light max-w-2xl">
            Kompletan pregled profesionalnog iskustva, akademskog usmjerenja,
            tehničkih kompetencija i realizovanih inženjerskih projekata.
          </p>
        </div>

        {/* CV Card */}
        <div className="pt-4">
          <div className="w-full max-w-4xl mx-auto bg-white text-zinc-800 rounded-2xl shadow-2xl shadow-black/50 overflow-hidden border border-zinc-200/80 transition-all">
            {/* CV Header */}
            <div className="bg-[#3a492f] text-white p-6 md:p-8 flex flex-col md:flex-row items-center md:items-stretch gap-6 relative">
              <div className="relative w-36 h-36 md:w-40 md:h-44 shrink-0 rounded-lg overflow-hidden border-2 border-white/25 shadow-md bg-[#2d3924]">
                <Image
                  src="/profile.jpg"
                  alt="Jusuf Skopljak"
                  fill
                  priority
                  className="object-cover object-top"
                  unoptimized
                />
              </div>

              <div className="flex-1 flex flex-col justify-center text-center md:text-left space-y-2">
                <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight text-white">
                  Jusuf Skopljak
                </h2>
                <p className="text-base md:text-lg font-medium text-[#dce7d1] tracking-wide">
                  Software &amp; Hardware Engineer
                </p>
                <div className="pt-2 space-y-1.5 text-xs md:text-sm text-[#e8f0df]">
                  <a
                    href="mailto:jusufskopljak2605@gmail.com"
                    className="flex items-center justify-center md:justify-start gap-2 text-[#e8f0df] hover:text-white transition-colors"
                  >
                    <Mail size={15} className="shrink-0 text-[#cadbbb]" />
                    <span>jusufskopljak2605@gmail.com</span>
                  </a>
                  <div className="flex items-center justify-center md:justify-start gap-2 text-[#c8d8be]">
                    <Smartphone size={15} className="shrink-0 text-[#cadbbb]" />
                    <span>
                      Bosna i Hercegovina • Svaki oblik javljanja je dobrodošao
                    </span>
                  </div>
                </div>
              </div>

              {/* Social links */}
              <div className="shrink-0 flex flex-col justify-center space-y-2 text-xs md:text-sm font-mono border-t md:border-t-0 md:border-l border-white/15 pt-4 md:pt-0 md:pl-6 w-full md:w-auto">
                <a
                  href="https://www.linkedin.com/in/jusuf-skopljak-81647338a"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2.5 text-[#dbe6cf] hover:text-white transition-colors group"
                >
                  <span className="w-5 h-5 rounded flex items-center justify-center bg-white/10 group-hover:bg-white/20 transition-colors">
                    <svg className="w-3 h-3 fill-current" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  </span>
                  <span>ba.linkedin.com/in/jusuf-skopljak</span>
                </a>

                <a
                  href="https://github.com/Skopljoo"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2.5 text-[#dbe6cf] hover:text-white transition-colors group"
                >
                  <span className="w-5 h-5 rounded flex items-center justify-center bg-white/10 group-hover:bg-white/20 transition-colors">
                    <svg className="w-3 h-3 fill-current" viewBox="0 0 24 24">
                      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                    </svg>
                  </span>
                  <span>github.com/Skopljoo</span>
                </a>

                <a
                  href="https://www.instagram.com/jusuf.skopljak"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2.5 text-[#dbe6cf] hover:text-white transition-colors group"
                >
                  <span className="w-5 h-5 rounded flex items-center justify-center bg-white/10 group-hover:bg-white/20 transition-colors">
                    <svg
                      className="w-3 h-3 stroke-current fill-none"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                    </svg>
                  </span>
                  <span>instagram.com/jusuf.skopljak</span>
                </a>

                <div className="flex items-center gap-2.5 text-[#dbe6cf]">
                  <span className="w-5 h-5 rounded flex items-center justify-center bg-white/10">
                    <Globe size={13} className="text-[#cadbbb]" />
                  </span>
                  <span>skopljak.dev</span>
                </div>
              </div>
            </div>

            {/* CV Content */}
            <div className="p-6 md:p-10 space-y-8 bg-[#fafaf9]">
              {/* About Me Text */}
              <div>
                <h3 className="text-sm font-bold tracking-wider uppercase text-[#3a492f] border-b-2 border-[#3a492f]/25 pb-1 mb-3">
                  ABOUT ME
                </h3>
                <p className="text-xs md:text-sm text-zinc-600 leading-relaxed font-normal text-justify">
                  Student softverskog inženjerstva na Politehničkom fakultetu
                  Univerziteta u Zenici i IT stručnjak zaposlen u kompaniji Almy
                  d.o.o. Nosilac prvog mjesta na međunarodnom takmičenju
                  &quot;Poslovni izazov Zapadnog Balkana 2024&quot; u Poreču, kao
                  i prvog mjesta na državnom STEM takmičenju &quot;Škola
                  budućnosti&quot; u izradi i programiranju Hexapod robota.
                  Spajam stručna znanja iz full-stack web arhitekture (Next.js,
                  React, Node.js, TypeScript), relacionih baza podataka (SQL) i
                  mrežnog inženjeringa (Cisco Packet Tracer) sa praktičnim radom
                  na održavanju korporativnih IT sistema. Usmjeren na stabilnu
                  sistemsku arhitekturu, čisti kod i rješavanje kompleksnih
                  inženjerskih izazova.
                </p>
              </div>

              {/* Grid 2 kolone */}
              <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
                {/* Lijeva kolona: Radno iskustvo & Projekti */}
                <div className="md:col-span-7 space-y-6">
                  <div>
                    <h3 className="text-sm font-bold tracking-wider uppercase text-[#3a492f] border-b-2 border-[#3a492f]/25 pb-1 mb-5">
                      WORK EXPERIENCE &amp; PROJECTS
                    </h3>
                    <div className="relative border-l-2 border-[#3a492f]/35 ml-2 pl-5 space-y-6">
                      {/* Posao 1 */}
                      <div className="relative">
                        <div className="absolute -left-[27px] top-1 w-3 h-3 rounded-full bg-white border-2 border-[#3a492f]" />
                        <div className="flex flex-wrap items-baseline justify-between gap-1">
                          <h4 className="text-sm font-bold text-zinc-900">
                            IT &amp; Developer
                          </h4>
                          <span className="text-xs font-semibold text-[#3a492f]">
                            Almy d.o.o. (Part-time)
                          </span>
                        </div>
                        <p className="text-xs text-[#526643] font-mono mt-0.5 mb-2">
                          2026 - Trenutno
                        </p>
                        <ul className="text-xs text-zinc-600 space-y-1 list-disc list-inside leading-relaxed">
                          <li>
                            Administracija, dijagnostika i održavanje
                            računarske opreme, mrežne infrastrukture i
                            hardverskih sistema kompanije.
                          </li>
                          <li>
                            Razvoj, prilagođavanje i podrška internim
                            softverskim rješenjima i radnim bazama podataka.
                          </li>
                          <li>
                            Otklanjanje tehničkih i mrežnih zastoja te
                            operativna tehnička podrška timovima.
                          </li>
                        </ul>
                      </div>

                      {/* Posao 2 */}
                      <div className="relative">
                        <div className="absolute -left-[27px] top-1 w-3 h-3 rounded-full bg-white border-2 border-[#3a492f]" />
                        <div className="flex flex-wrap items-baseline justify-between gap-1">
                          <h4 className="text-sm font-bold text-zinc-900">
                            Full-Stack &amp; Systems Developer
                          </h4>
                          <span className="text-xs font-medium text-zinc-500">
                            Samostalni &amp; Inženjerski projekti
                          </span>
                        </div>
                        <p className="text-xs text-[#526643] font-mono mt-0.5 mb-2">
                          2025 - Trenutno
                        </p>
                        <ul className="text-xs text-zinc-600 space-y-1 list-disc list-inside leading-relaxed">
                          <li>
                            <span className="font-medium text-zinc-800">
                              Hardware Hub
                            </span>
                            : Full-stack platforma za PC komponente sa live
                            provjerom kompatibilnosti (Next.js, TypeScript, SQL).
                          </li>
                          <li>
                            <span className="font-medium text-zinc-800">
                              Mrežna Fabrika
                            </span>
                            : Projektovanje i simulacija višespratne industrijske
                            mreže u Cisco Packet Tracer-u (VLAN, ACL, IoT).
                          </li>
                          <li>
                            <span className="font-medium text-zinc-800">
                              SupportDesk
                            </span>
                            : Desktop/web ticketing sistem za tehničku podršku
                            (C#).
                          </li>
                        </ul>
                      </div>

                      {/* Posao 3 */}
                      <div className="relative">
                        <div className="absolute -left-[27px] top-1 w-3 h-3 rounded-full bg-white border-2 border-[#3a492f]" />
                        <div className="flex flex-wrap items-baseline justify-between gap-1">
                          <h4 className="text-sm font-bold text-zinc-900">
                            1. Mjesto – STEM Robotika &amp; Hexapod
                          </h4>
                          <span className="text-xs font-semibold text-zinc-600">
                            Škola Budućnosti (Sarajevo)
                          </span>
                        </div>
                        <p className="text-xs text-[#526643] font-mono mt-0.5 mb-2">
                          2024 • Pobjednik takmičenja
                        </p>
                        <ul className="text-xs text-zinc-600 space-y-1 list-disc list-inside leading-relaxed">
                          <li>
                            Osvojeno{" "}
                            <span className="font-semibold text-zinc-800">
                              1. mjesto
                            </span>{" "}
                            na takmičenju u izradi, mehatronici i programiranju
                            šestonogog (Hexapod) robota.
                          </li>
                          <li>
                            Programiranje kinematike kretanja, balansiranja,
                            senzorske logike i autonomnog savladavanja prepreka.
                          </li>
                          <li>
                            Dizajn kontrolnih algoritama, timski inženjerski rad
                            i prezentacija pred stručnim žirijem.
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Desna kolona: Obrazovanje, Nagrade, Vještine, Jezici */}
                <div className="md:col-span-5 space-y-6">
                  {/* Obrazovanje */}
                  <div>
                    <h3 className="text-sm font-bold tracking-wider uppercase text-[#3a492f] border-b-2 border-[#3a492f]/25 pb-1 mb-3">
                      EDUCATION
                    </h3>
                    <div className="space-y-4">
                      <div>
                        <h4 className="text-xs md:text-sm font-bold text-zinc-900">
                          Inženjer softverskog inženjerstva
                        </h4>
                        <p className="text-xs text-zinc-600 font-medium">
                          Politehnički fakultet, Univerzitet u Zenici (PTF)
                        </p>
                        <p className="text-xs text-[#526643] font-mono mt-0.5">
                          2025 - 2028
                        </p>
                      </div>
                      <div>
                        <h4 className="text-xs md:text-sm font-bold text-zinc-900">
                          Elektrotehničar računarske tehnike i automatike
                        </h4>
                        <p className="text-xs text-zinc-600">
                          Srednja tehnička škola Zenica
                        </p>
                        <p className="text-xs text-[#526643] font-mono mt-0.5">
                          Završeno 2024/25.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Nagrade */}
                  <div>
                    <h3 className="text-sm font-bold tracking-wider uppercase text-[#3a492f] border-b-2 border-[#3a492f]/25 pb-1 mb-3">
                      AWARDS &amp; RECOGNITION
                    </h3>
                    <div className="space-y-3 text-xs text-zinc-700">
                      <div className="flex items-start gap-2.5">
                        <Trophy size={16} className="text-[#3a492f] shrink-0 mt-0.5" />
                        <div>
                          <div className="font-bold text-zinc-900">
                            1. Mjesto – Poslovni izazov Zapadnog Balkana 2024
                          </div>
                          <div className="text-zinc-600">
                            Poreč, Hrvatska (Međunarodno finale, 80 takmičara iz 4 države).
                          </div>
                        </div>
                      </div>

                      <div className="flex items-start gap-2.5">
                        <Trophy size={16} className="text-[#3a492f] shrink-0 mt-0.5" />
                        <div>
                          <div className="font-bold text-zinc-900">
                            1. Mjesto – STEMI Hexapod Robotika (2024)
                          </div>
                          <div className="text-zinc-600">
                            Projekat Škola budućnosti, STEM Sarajevo.
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Core Competencies */}
                  <div>
                    <h3 className="text-sm font-bold tracking-wider uppercase text-[#3a492f] border-b-2 border-[#3a492f]/25 pb-1 mb-3">
                      CORE COMPETENCIES
                    </h3>
                    <div className="space-y-2 text-xs text-zinc-700">
                      <div>
                        <span className="font-semibold text-zinc-900">
                          Full-Stack:
                        </span>{" "}
                        React, Next.js, Node.js, TypeScript, Tailwind CSS
                      </div>
                      <div>
                        <span className="font-semibold text-zinc-900">
                          Jezici:
                        </span>{" "}
                        C++, C#, JavaScript, TypeScript, PHP, Lua, SQL
                      </div>
                      <div>
                        <span className="font-semibold text-zinc-900">
                          Mreže &amp; Hardver:
                        </span>{" "}
                        Cisco Packet Tracer, IoT, VLAN, Routing, Servis PC
                      </div>
                    </div>
                  </div>

                  {/* Jezici */}
                  <div>
                    <h3 className="text-sm font-bold tracking-wider uppercase text-[#3a492f] border-b-2 border-[#3a492f]/25 pb-1 mb-3">
                      LANGUAGE
                    </h3>
                    <div className="space-y-1.5 text-xs text-zinc-700">
                      <div className="flex justify-between items-center">
                        <span className="font-medium text-zinc-900">Bosanski</span>
                        <span className="text-zinc-500">(Maternji / Native)</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="font-medium text-zinc-900">Engleski</span>
                        <span className="text-zinc-500">(Professional level)</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Footer */}
              <div className="pt-4 border-t border-zinc-200 flex flex-wrap items-center justify-between gap-4">
                <div className="text-xs text-zinc-500">
                  Ažurirano: 2026 • Dostupno za profesionalne angažmane, saradnje i prakse
                </div>
                <div className="flex items-center gap-3">
                  <a
                    href="/#kontakt"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-lg bg-[#3a492f] text-white hover:bg-[#485b3b] transition-colors"
                  >
                    <Mail size={13} />
                    <span>Pošalji poruku</span>
                  </a>
                  <a
                    href="https://www.linkedin.com/in/jusuf-skopljak-81647338a"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 rounded-lg bg-zinc-100 hover:bg-zinc-200 text-zinc-700 transition-colors"
                  >
                    <span>LinkedIn Profil</span>
                    <ExternalLink size={12} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}