"use client";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { MessageCircle } from "lucide-react";
import ClawIcon from "./ClawIcon";
import SmartImage from "./SmartImage";
import { IMG } from "@/lib/images";
import Counter from "./Counter";
import { useReady } from "@/lib/ready";
import { STATS, wa } from "@/lib/data";
export default function Hero() {
  const ready = useReady();
  const mx = useSpring(useMotionValue(0), { stiffness: 80, damping: 15 });
  const my = useSpring(useMotionValue(0), { stiffness: 80, damping: 15 });
  const tx = useTransform(mx, (v) => v * 30), ty = useTransform(my, (v) => v * 30);
  const words = "Engineered for efficiency. Imported for modern dairy farming.".split(" ");
  return (
    <section id="top" className="relative overflow-hidden bg-canvas px-5 pb-16 pt-36 md:pt-44"
      onMouseMove={(e) => { mx.set(e.clientX / innerWidth - 0.5); my.set(e.clientY / innerHeight - 0.5); }}>
      <div className="pointer-events-none absolute -right-40 top-20 h-[560px] w-[560px] rounded-full bg-neon/20 blur-[140px]" />
      <div className="relative mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-[1.2fr_1fr]">
        <div>
          <h1 className="font-display text-4xl font-extrabold leading-[1.05] sm:text-6xl">
            {words.map((w, i) => (<span key={i} className="mr-[0.25em] inline-block overflow-hidden align-bottom">
              <motion.span className="inline-block" initial={{ y: "110%" }} animate={ready ? { y: 0 } : {}} transition={{ delay: i * 0.07, duration: .7, ease: [.2, .8, .2, 1] }}>{w}</motion.span></span>))}
          </h1>
          <motion.p initial={{ opacity: 0 }} animate={ready ? { opacity: 1 } : {}} transition={{ delay: .9 }} className="mt-6 max-w-xl text-lg text-slate2">
            Pakistan&apos;s trusted supplier of high-yield imported milking machines, chilling plants and commercial dairy spare parts.</motion.p>
          <motion.a initial={{ opacity: 0 }} animate={ready ? { opacity: 1 } : {}} transition={{ delay: 1.1 }}
            href={wa("Assalam o Alaikum, I want a quote for a milking machine.")} target="_blank" rel="noreferrer"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-neon px-7 py-4 font-semibold text-canvas shadow-glow transition hover:scale-105">
            <MessageCircle className="h-5 w-5" />Get a quote on WhatsApp</motion.a>
        </div>
        <motion.div style={{ x: tx, y: ty }} className="relative mx-auto">
          <div className="absolute -inset-10 rounded-full bg-neon/25 blur-[90px]" />
          <div className="animate-float relative h-96 w-80 overflow-hidden rounded-[2rem] border border-neon/30 shadow-glow">
            <SmartImage src={IMG.hero} alt="Stainless-steel dual-bucket milking machine"><ClawIcon className="h-52 w-40" /></SmartImage>
            <div className="absolute inset-0 bg-gradient-to-t from-canvas/70 via-transparent to-transparent" />
          </div>
          <div className="glass absolute -bottom-5 -left-6 flex items-center gap-2 rounded-full px-4 py-2 text-xs font-semibold">
            <span className="relative flex h-2.5 w-2.5"><span className="absolute h-full w-full animate-ping rounded-full bg-neon/70" /><span className="relative h-2.5 w-2.5 rounded-full bg-neon" /></span>
            Turkish direct import · SS304 food grade</div>
        </motion.div>
      </div>
      <dl className="relative mx-auto mt-16 grid max-w-6xl grid-cols-2 gap-6 border-t border-neon/20 pt-8 md:grid-cols-4">
        {STATS.map((s) => (<div key={s.label}><dd className="font-display text-4xl font-bold text-neon"><Counter {...s} /></dd><dt className="mt-1 text-sm text-slate2">{s.label}</dt></div>))}
      </dl>
    </section>);
}
