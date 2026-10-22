import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-zinc-800/80 bg-zinc-950/70 py-10 mt-20">
      <div className="max-w-5xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500">
        <div className="flex items-center gap-2 font-mono">
          <span className="w-2 h-2 rounded-full bg-[#526643]" />
          <span className="text-zinc-300 font-semibold">Jusuf Skopljak</span>
          <span>•</span>
          <span>Software Developer</span>
        </div>

        <div>
          📍 Zenica, Bosna i Hercegovina
        </div>

        <div>
          © {currentYear} Sva prava zadržana.
        </div>
      </div>
    </footer>
  );
}
