"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import ClawIcon from "./ClawIcon";
export default function Preloader() {
  const [p, setP] = useState(0);
  const [gone, setGone] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    document.documentElement.style.overflow = "hidden";
    const start = performance.now(); let raf = 0;
    const tick = (now: number) => {
      const v = Math.min(100, ((now - start) / 2400) * 100);
      setP(v);
      if (v < 100) raf = requestAnimationFrame(tick);
      else setTimeout(() => {
        setOpen(true); (window as any).__ready = true;
        window.dispatchEvent(new Event("preloader:done"));
        document.documentElement.style.overflow = "";
        setTimeout(() => setGone(true), 1300);
      }, 450);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);
  if (gone) return null;
  const done = p >= 100;
  return (
    <motion.div className="fixed inset-0 z-[100] bg-canvas" role="status" aria-label="Loading"
      animate={{ y: open ? "-100%" : 0 }} transition={{ duration: 1.1, ease: [0.65, 0, 0.35, 1] }}>
      <motion.div className="absolute inset-0 flex flex-col items-center justify-center gap-6" animate={{ opacity: open ? 0 : 1 }} transition={{ duration: .5 }}>
        <motion.div animate={done ? { filter: ["drop-shadow(0 0 0 rgba(34,197,94,0))", "drop-shadow(0 0 40px rgba(34,197,94,.9))", "drop-shadow(0 0 14px rgba(34,197,94,.5))"] } : {}} transition={{ duration: .8 }}>
          <ClawIcon progress={p} className="h-44 w-36" /></motion.div>
        <div className={`font-display text-5xl font-bold tabular-nums transition-colors ${done ? "text-white" : "text-neon"}`}>{Math.round(p)}%</div>
        <div className="text-sm text-slate2">Pak Dairy Machinery</div>
      </motion.div>
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-neon/10 to-transparent" />
    </motion.div>);
}
