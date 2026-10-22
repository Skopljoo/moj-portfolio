"use client";

import Link from "next/link";
import { useState } from "react";
import { Mail, Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-[#090a0d]/90 backdrop-blur-md border-b border-zinc-800/80 transition-all">
      <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link
          href="/"
          className="font-mono text-sm font-bold tracking-wider text-white hover:text-[#d3e3c6] transition-colors flex items-center gap-2"
        >
          <span className="w-2 h-2 rounded-full bg-[#526643] inline-block" />
          SKOPLJAK.DEV
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden sm:flex items-center gap-6 md:gap-7 text-sm font-medium">
          <Link
            href="/#projekti"
            className="text-zinc-400 hover:text-white transition-colors"
          >
            Projekti
          </Link>
          <Link
            href="/about"
            className="text-zinc-400 hover:text-white transition-colors"
          >
            O meni
          </Link>
          <a
            href="/#kontakt"
            className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-300 hover:text-white hover:border-[#526643]/70 hover:bg-[#3a492f]/20 transition-all"
          >
            <Mail size={13} className="text-[#8ea47c]" />
            <span>Kontakt</span>
          </a>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="sm:hidden p-2 text-zinc-400 hover:text-white"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="sm:hidden px-6 py-4 bg-zinc-950/95 border-b border-zinc-800 space-y-3 font-medium text-sm">
          <Link
            href="/#projekti"
            onClick={() => setIsOpen(false)}
            className="block text-zinc-300 hover:text-white py-1"
          >
            Projekti
          </Link>
          <Link
            href="/about"
            onClick={() => setIsOpen(false)}
            className="block text-zinc-300 hover:text-white py-1"
          >
            O meni
          </Link>
          <a
            href="/#kontakt"
            onClick={() => setIsOpen(false)}
            className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-300 hover:text-white"
          >
            <Mail size={13} className="text-[#8ea47c]" />
            <span>Kontakt</span>
          </a>
        </div>
      )}
    </nav>
  );
}
