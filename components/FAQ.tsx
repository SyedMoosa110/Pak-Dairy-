"use client";
import * as A from "@radix-ui/react-accordion";
import { ChevronDown } from "lucide-react";
import { FAQ as D } from "@/lib/data";
export default function FAQ() {
  return (
    <section className="bg-paper px-5 pb-24 text-canvas"><div className="mx-auto max-w-3xl">
      <h2 className="font-display text-4xl font-bold">Questions farmers ask</h2>
      <A.Root type="single" collapsible className="mt-8 divide-y divide-canvas/10 border-y border-canvas/10">
        {D.map((f) => (<A.Item key={f.q} value={f.q}>
          <A.Header><A.Trigger className="group flex w-full items-center justify-between py-5 text-left font-semibold">{f.q}<ChevronDown className="h-5 w-5 transition group-data-[state=open]:rotate-180" /></A.Trigger></A.Header>
          <A.Content className="overflow-hidden data-[state=closed]:animate-[up_.25s_ease] data-[state=open]:animate-[down_.25s_ease]"><p className="pb-5 text-canvas/70">{f.a}</p></A.Content></A.Item>))}
      </A.Root>
      <style>{`@keyframes down{from{height:0}to{height:var(--radix-accordion-content-height)}}@keyframes up{from{height:var(--radix-accordion-content-height)}to{height:0}}`}</style>
    </div></section>);
}
