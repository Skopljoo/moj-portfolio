import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-zinc-950/80 backdrop-blur-md border-b border-zinc-900">
      <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="font-mono text-sm font-bold tracking-wider text-white hover:text-cyan-400 transition-colors">
          SKOPLJAK.DEV
        </Link>
        <div className="flex gap-6 text-sm font-medium">
          <Link href="/" className="text-zinc-400 hover:text-white transition-colors">
            Projekti
          </Link>
          <Link href="/about" className="text-zinc-400 hover:text-white transition-colors">
            O meni
          </Link>
        </div>
      </div>
    </nav>
  );
}