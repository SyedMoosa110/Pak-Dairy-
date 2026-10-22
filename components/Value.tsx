import SmartImage from "./SmartImage";
import { IMG } from "@/lib/images";
import { Hand, Cog } from "lucide-react";
const PINS = [{ x: "24%", y: "40%", t: "Vacuum regulator" }, { x: "56%", y: "58%", t: "Pulsator" }, { x: "80%", y: "30%", t: "SS piping" }];
export default function Value() {
  return (
    <section id="why" className="bg-paper px-5 py-24 text-canvas">
      <div className="mx-auto max-w-6xl">
        <h2 className="max-w-3xl font-display text-4xl font-bold">Hand milking costs you time. Vacuum precision gives it back.</h2>
        <div className="relative mt-10 grid overflow-hidden rounded-3xl bg-canvas md:grid-cols-2">
          <div className="relative aspect-[4/3] md:aspect-auto md:min-h-[420px]">
            <SmartImage src={IMG.manual} alt="Manual milking on a farm"><Hand className="h-14 w-14 text-slate2" /></SmartImage>
            <div className="absolute inset-0 bg-gradient-to-t from-canvas via-canvas/40 to-canvas/30" />
            <div className="absolute bottom-0 p-6 text-white"><p className="font-display text-xl font-bold">Manual milking</p><p className="mt-1 max-w-xs text-sm text-slate2">High labor, variable speed, higher infection risk.</p></div>
          </div>
          <div className="relative aspect-[4/3] md:aspect-auto">
            <SmartImage src={IMG.modern} alt="Automated dairy shed with stainless vacuum lines"><Cog className="h-14 w-14 text-neon" /></SmartImage>
            <div className="absolute inset-0 bg-gradient-to-t from-canvas via-transparent to-neon/10" />
            {PINS.map((p) => (<button key={p.t} style={{ left: p.x, top: p.y }} className="group absolute" aria-label={p.t}>
              <span className="block h-5 w-5 animate-ping rounded-full bg-neon/70" /><span className="absolute inset-0 m-auto h-3 w-3 rounded-full bg-neon shadow-glow" />
              <span className="glass pointer-events-none absolute left-7 top-0 whitespace-nowrap rounded-lg px-3 py-1 text-xs text-white opacity-0 transition group-hover:opacity-100 group-focus:opacity-100">{p.t}</span></button>))}
            <div className="absolute bottom-0 p-6 text-white"><p className="font-display text-xl font-bold text-neon">Pak Dairy vacuum systems</p><p className="mt-1 max-w-xs text-sm text-slate2">Steady vacuum, consistent speed, closed food-grade milk path.</p></div>
          </div>
          <div className="pointer-events-none absolute inset-y-0 left-1/2 hidden w-px bg-neon/40 md:block" />
        </div>
      </div>
    </section>);
}
