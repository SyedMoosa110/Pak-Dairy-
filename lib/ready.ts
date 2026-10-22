"use client";
import { useEffect, useState } from "react";
export function useReady() {
  const [r, setR] = useState(false);
  useEffect(() => {
    if ((window as any).__ready) setR(true);
    const f = () => setR(true);
    window.addEventListener("preloader:done", f);
    return () => window.removeEventListener("preloader:done", f);
  }, []);
  return r;
}
