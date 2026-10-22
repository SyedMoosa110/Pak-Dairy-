"use client";
import { Droplet } from "lucide-react";
import { wa } from "@/lib/data";
const L = [["Products", "#products"], ["Spare parts", "#products"], ["Why Pak Dairy", "#why"], ["Reviews", "#reviews"], ["Pricing", "#pricing"]];
export default function Navbar() {
  return (
    <header className="fixed inset-x-0 top-4 z-50 flex justify-center px-4">
      <nav className="glass flex w-full max-w-5xl items-center justify-between rounded-full py-2 pl-5 pr-2">
        <a href="#top" className="flex items-center gap-2 font-display text-lg font-bold"><Droplet className="h-5 w-5 text-neon" />Pak Dairy</a>
        <ul className="hidden gap-6 text-sm text-slate2 md:flex">{L.map(([t, h]) => <li key={t}><a href={h} className="transition hover:text-white">{t}</a></li>)}</ul>
        <a href={wa("Assalam o Alaikum, I want to inquire about dairy machinery.")} target="_blank" rel="noreferrer"
          className="flex items-center gap-2 rounded-full bg-neon px-4 py-2 text-sm font-semibold text-canvas shadow-glow">
          <span className="relative flex h-2 w-2"><span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-canvas/60" /><span className="relative h-2 w-2 rounded-full bg-canvas" /></span>Inquire now</a>
      </nav>
    </header>);
}
