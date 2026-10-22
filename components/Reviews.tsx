import { Star } from "lucide-react";
import SmartImage from "./SmartImage";
import { IMG } from "@/lib/images";
import { REVIEWS } from "@/lib/data";
export default function Reviews() {
  return (
    <section id="reviews" className="bg-canvas px-5 py-24"><div className="mx-auto max-w-6xl">
      <div className="glass inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm"><Star className="h-4 w-4 fill-neon text-neon" />4.8 / 5.0 on Google Maps</div>
      <h2 className="mt-6 font-display text-4xl font-bold">Farmers across Punjab on what changed</h2>
      <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {REVIEWS.map((r, i) => { const city = r.n.split(", ")[1]; return (
          <figure key={i} className="glass relative overflow-hidden rounded-3xl p-6">
            <div className="absolute inset-0 -z-10 opacity-25"><SmartImage src={IMG["farm-bg"]} alt="" /></div>
            <div className="flex items-center gap-3">
              <div className="h-11 w-11 overflow-hidden rounded-full border border-neon/40"><SmartImage src={IMG[`avatar-${city}`]} alt={`${r.n} portrait`}><span className="font-display font-bold text-neon">{city[0]}</span></SmartImage></div>
              <div><figcaption className="text-sm font-semibold">{r.n}</figcaption><div className="flex gap-0.5">{[...Array(5)].map((_, k) => <Star key={k} className="h-3.5 w-3.5 fill-neon text-neon" />)}</div></div>
              <span className="ml-auto rounded-full border border-neon/30 px-2 py-0.5 text-[11px] text-neon">Google review</span>
            </div>
            <blockquote className="mt-4 text-slate-200">{r.t}</blockquote></figure>); })}
      </div></div></section>);
}
