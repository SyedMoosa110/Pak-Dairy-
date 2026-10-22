"use client";
import { useState } from "react";
export default function SmartImage({ src, alt, className = "", label, children }: { src?: string; alt: string; className?: string; label?: string; children?: React.ReactNode }) {
  const [bad, setBad] = useState(false);
  if (src && !bad) return <img src={src} alt={alt} loading="lazy" onError={() => setBad(true)} className={`h-full w-full object-cover ${className}`} />;
  return (
    <div role="img" aria-label={alt} className={`relative flex h-full w-full items-center justify-center overflow-hidden bg-gradient-to-br from-[#1b3a29] via-forest to-canvas ${className}`}>
      <div className="absolute inset-0 opacity-30" style={{ backgroundImage: "repeating-linear-gradient(100deg,rgba(255,255,255,.07) 0 2px,transparent 2px 7px)" }} />
      <div className="absolute -bottom-10 left-1/2 h-40 w-40 -translate-x-1/2 rounded-full bg-neon/30 blur-3xl" />
      <div className="relative">{children}</div>
      {label && <span className="absolute bottom-2 left-3 text-[11px] text-slate2">{label}</span>}
    </div>);
}
