"use client";
import { useState } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { MessageCircle, X, Check } from "lucide-react";
import TiltCard from "./TiltCard";
import ClawIcon from "./ClawIcon";
import SmartImage from "./SmartImage";
import { IMG } from "@/lib/images";
import { CATS, PRODUCTS, wa } from "@/lib/data";
// Fill in real figures per model; "On request" shows until you do.
const SPECS: Record<string, [string, string][]> = {
  milking: [["Motor power (HP)", "On request"], ["Vacuum pump (CFM)", "On request"], ["Bucket capacity (L)", "On request"]],
  chilling: [["Tank volume (L)", "500L+"], ["Compressor (HP)", "On request"], ["Cooling time", "On request"]],
  parts: [["Fits", "On request"], ["Material", "On request"], ["Origin", "Turkey / Europe"]],
};
export default function Products() {
  const [f, setF] = useState("all");
  const list = PRODUCTS.filter((p) => f === "all" || p.cat === f);
  return (
    <section id="products" className="bg-paper px-5 pb-24 text-canvas">
      <div className="mx-auto max-w-6xl">
        <h2 className="font-display text-4xl font-bold">Machines and parts, in stock in Sahiwal</h2>
        <div className="mt-6 flex flex-wrap gap-2" role="tablist">
          {CATS.map((c) => (<button key={c.id} role="tab" aria-selected={f === c.id} onClick={() => setF(c.id)}
            className={`rounded-full border px-4 py-2 text-sm transition ${f === c.id ? "border-accent bg-accent text-white" : "border-canvas/15 hover:border-accent"}`}>{c.label}</button>))}
        </div>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {list.map((p) => (
            <TiltCard key={p.name} className="rounded-3xl bg-white shadow-[0_10px_40px_-15px_rgba(8,22,14,.35)]">
              <div className="h-44 overflow-hidden rounded-t-3xl [&_img]:transition-transform [&_img]:duration-700 group-hover:[&_img]:scale-110"><SmartImage src={IMG[p.name]} alt={p.name} label={p.tag}><ClawIcon className="h-24 w-20" /></SmartImage></div>
              <div className="p-5">
                <span className="rounded-full bg-accent/10 px-2 py-0.5 text-xs font-semibold text-accent">{p.tag}</span>
                <h3 className="mt-2 font-display text-lg font-bold leading-tight">{p.name}</h3>
                <ul className="mt-3 space-y-1 text-sm text-canvas/70">{p.points.slice(0, 3).map((x) => <li key={x} className="flex gap-2"><Check className="mt-0.5 h-4 w-4 shrink-0 text-accent" />{x}</li>)}</ul>
                <div className="mt-5 flex gap-2">
                  <Dialog.Root><Dialog.Trigger className="flex-1 rounded-full border border-canvas/20 py-2 text-sm font-semibold">Specs</Dialog.Trigger>
                    <Dialog.Portal><Dialog.Overlay className="fixed inset-0 z-[90] bg-canvas/70 backdrop-blur-sm" />
                      <Dialog.Content className="glass fixed inset-x-0 bottom-0 z-[91] mx-auto w-full max-w-lg rounded-t-3xl p-6 pb-8 text-white">
                        <Dialog.Title className="font-display text-xl font-bold">{p.name}</Dialog.Title>
                        <Dialog.Description className="mt-1 text-sm text-slate2">Exact figures depend on the model in stock. Message us for the full sheet and best price.</Dialog.Description>
                        <ul className="mt-4 space-y-2 text-sm">{p.points.map((x) => <li key={x} className="flex gap-2"><Check className="h-4 w-4 text-neon" />{x}</li>)}</ul>
<dl className="mt-5 divide-y divide-neon/15 rounded-2xl border border-neon/20 text-sm">{SPECS[p.cat].map(([k, v]) => <div key={k} className="flex justify-between px-4 py-2"><dt className="text-slate2">{k}</dt><dd>{v}</dd></div>)}</dl>
<a href={wa(`Assalam o Alaikum, please send the full spec sheet for: ${p.name}`)} target="_blank" rel="noreferrer" className="mt-5 block rounded-full bg-neon py-3 text-center font-semibold text-canvas">Get specs on WhatsApp</a>
                        <Dialog.Close className="absolute right-4 top-4" aria-label="Close"><X className="h-5 w-5" /></Dialog.Close></Dialog.Content></Dialog.Portal></Dialog.Root>
                  <a href={wa(`Assalam o Alaikum, I want to order / get a price for: ${p.name}`)} target="_blank" rel="noreferrer" aria-label={`Order ${p.name} on WhatsApp`}
                    className="flex flex-1 items-center justify-center gap-1 rounded-full bg-neon py-2 text-sm font-semibold text-canvas"><MessageCircle className="h-4 w-4" />Order</a>
                </div>
              </div>
            </TiltCard>))}
        </div>
      </div>
    </section>);
}
