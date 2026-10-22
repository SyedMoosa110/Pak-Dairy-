import { Check } from "lucide-react";
import { PRICING, wa } from "@/lib/data";
export default function Pricing() {
  return (
    <section id="pricing" className="bg-paper px-5 py-24 text-canvas"><div className="mx-auto max-w-6xl">
      <h2 className="font-display text-4xl font-bold">Pick the package that fits your herd</h2>
      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {PRICING.map((p) => (<div key={p.tier} className={`flex flex-col rounded-3xl p-7 ${p.hot ? "bg-canvas text-white shadow-glow md:-translate-y-3" : "border border-canvas/10 bg-white"}`}>
          <p className={`text-sm font-semibold ${p.hot ? "text-neon" : "text-accent"}`}>{p.tier}</p>
          <h3 className="mt-1 font-display text-2xl font-bold">{p.name}</h3><p className="mt-1 text-sm opacity-70">{p.size}</p>
          <ul className="mt-6 flex-1 space-y-2 text-sm">{p.feats.map((f) => <li key={f} className="flex gap-2"><Check className="h-4 w-4 text-neon" />{f}</li>)}</ul>
          <a href={wa(`Assalam o Alaikum, I am interested in the ${p.tier} package (${p.name}). ${p.cta}.`)} target="_blank" rel="noreferrer"
            className="mt-8 rounded-full bg-neon py-3 text-center font-semibold text-canvas">{p.cta}</a></div>))}
      </div></div></section>);
}
