"use client";
import { useEffect, useRef, useState } from "react";
import { animate, useInView } from "framer-motion";
export default function Counter({ to, dec, suffix }: { to: number; dec: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const [v, setV] = useState(0);
  useEffect(() => { if (inView) { const c = animate(0, to, { duration: 2, ease: "easeOut", onUpdate: setV }); return () => c.stop(); } }, [inView, to]);
  return <span ref={ref}>{v.toLocaleString("en-US", { minimumFractionDigits: dec, maximumFractionDigits: dec })}{suffix}</span>;
}
