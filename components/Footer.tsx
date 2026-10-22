"use client";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { MapPin, Phone } from "lucide-react";
import { MAPS, PHONE } from "@/lib/data";
export default function Footer() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end end"] });
  const y = useTransform(scrollYProgress, [0, 1], [120, 0]);
  return (
    <footer ref={ref} className="relative overflow-hidden bg-canvas px-5 pt-20">
      <div className="relative z-10 mx-auto grid max-w-6xl gap-10 pb-48 md:grid-cols-4">
        <div><h3 className="font-display text-xl font-bold">Pak Dairy Machinery Sahiwal</h3>
          <p className="mt-3 text-sm text-slate2">Office 355, Royal Palm Garden, St 19 Bypass, Royal Palm City, Sahiwal 57000, Punjab</p>
          <a href={MAPS} target="_blank" rel="noreferrer" className="mt-4 inline-flex items-center gap-2 rounded-full bg-neon px-4 py-2 text-sm font-semibold text-canvas"><MapPin className="h-4 w-4" />Get directions</a></div>
        <nav><h4 className="font-semibold">Quick links</h4><ul className="mt-3 space-y-2 text-sm text-slate2">{[["Products", "#products"], ["Why Pak Dairy", "#why"], ["Reviews", "#reviews"], ["Pricing", "#pricing"]].map(([t, h]) => <li key={t}><a href={h} className="hover:text-white">{t}</a></li>)}</ul></nav>
        <div><h4 className="font-semibold">Categories</h4><ul className="mt-3 space-y-2 text-sm text-slate2"><li>Milking machines</li><li>Chilling plants</li><li>Milking parlors</li><li>Spare parts</li></ul></div>
        <div><h4 className="font-semibold">Emergency spare line</h4><a href="tel:+923415488877" className="mt-3 inline-flex items-center gap-2 text-neon"><Phone className="h-4 w-4" />{PHONE}</a></div>
      </div>
      <motion.div aria-hidden style={{ y, fontSize: "clamp(5rem,22vw,24rem)", WebkitTextStroke: "2px rgba(255,255,255,.04)", color: "rgba(255,255,255,.04)" }}
        className="pointer-events-none absolute inset-x-0 -bottom-[0.12em] select-none text-center font-display font-extrabold leading-none">PAK DAIRY</motion.div>
    </footer>);
}
