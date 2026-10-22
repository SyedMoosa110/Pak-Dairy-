"use client";
import { useRef } from "react";
export default function TiltCard({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const r = useRef<HTMLDivElement>(null);
  const move = (e: React.MouseEvent) => {
    const el = r.current!; const b = el.getBoundingClientRect();
    const px = (e.clientX - b.left) / b.width, py = (e.clientY - b.top) / b.height;
    el.style.transform = `perspective(900px) rotateX(${(0.5 - py) * 30}deg) rotateY(${(px - 0.5) * 30}deg)`;
    el.style.setProperty("--gx", `${px * 100}%`); el.style.setProperty("--gy", `${py * 100}%`);
  };
  const reset = () => { if (r.current) r.current.style.transform = "perspective(900px)"; };
  return (
    <div ref={r} onMouseMove={move} onMouseLeave={reset} style={{ transition: "transform .15s ease-out", transformStyle: "preserve-3d" }} className={`group relative ${className}`}>
      {children}
      <div className="pointer-events-none absolute inset-0 rounded-[inherit] opacity-0 transition group-hover:opacity-100"
        style={{ background: "radial-gradient(circle at var(--gx,50%) var(--gy,50%), rgba(255,255,255,.35), transparent 45%)" }} />
    </div>);
}
