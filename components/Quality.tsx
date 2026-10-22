import { Ship, Wrench, Users, ShieldCheck } from "lucide-react";
import { QUALITY, STEPS } from "@/lib/data";
const I = { ship: Ship, wrench: Wrench, users: Users, shield: ShieldCheck };
export function Quality() {
  return (
    <section className="bg-canvas px-5 py-24"><div className="mx-auto max-w-6xl">
      <h2 className="font-display text-4xl font-bold">The Pak Dairy quality standard</h2>
      <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {QUALITY.map((q) => { const Ic = I[q.icon]; return (
          <div key={q.t} className="rounded-3xl border border-neon/15 bg-forest p-6"><Ic className="h-7 w-7 text-neon" /><h3 className="mt-4 font-display text-lg font-bold">{q.t}</h3><p className="mt-2 text-sm text-slate2">{q.d}</p></div>); })}
      </div></div></section>);
}
export function Workflow() {
  return (
    <section className="bg-forest px-5 py-24"><div className="mx-auto max-w-6xl">
      <h2 className="font-display text-4xl font-bold">From first message to first milking</h2>
      <ol className="relative mt-12 grid gap-8 md:grid-cols-4">
        <div className="absolute left-0 right-0 top-5 hidden h-px bg-neon/30 md:block" />
        {STEPS.map((s, i) => (<li key={s.t} className="relative">
          <span className="relative z-10 flex h-10 w-10 items-center justify-center rounded-full bg-neon font-bold text-canvas">{i + 1}</span>
          <h3 className="mt-4 font-display font-bold">{s.t}</h3><p className="mt-1 text-sm text-slate2">{s.d}</p></li>))}
      </ol></div></section>);
}
