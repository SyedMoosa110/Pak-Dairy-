export const PHONE = "+92 341 5488877";
export const WA = "923415488877";
export const wa = (msg: string) => `https://wa.me/${WA}?text=${encodeURIComponent(msg)}`;
export const MAPS = "https://www.google.com/maps/search/?api=1&query=" + encodeURIComponent("Pak Dairy Machinery Royal Palm City Sahiwal");
export type Cat = "milking" | "chilling" | "parts";
export const CATS: { id: "all" | Cat; label: string }[] = [
  { id: "all", label: "All machinery" }, { id: "milking", label: "Milking machines" },
  { id: "chilling", label: "Chilling plants" }, { id: "parts", label: "Spare parts" },
];
export const PRODUCTS: { name: string; cat: Cat; tag: string; points: string[] }[] = [
  { name: "Turkish Dual-Bucket Milking Machine", cat: "milking", tag: "Flagship", points: ["20–24 cows per hour", "Heavy-duty dry vacuum pump", "Food-grade SS304 buckets", "Shock-proof frame"] },
  { name: "Portable Single-Bucket Milking Machine", cat: "milking", tag: "Starter", points: ["Suits 1–5 animals", "Single cluster", "Mobile trolley", "Low-oil pump"] },
  { name: "Milking Parlor with Pipeline", cat: "milking", tag: "Industrial", points: ["For 30+ animals", "Pipeline system", "On-site setup and training", "Warranty on motor and pump"] },
  { name: "Milk Chilling Tank (500L+)", cat: "chilling", tag: "Chilling", points: ["Rapid chilling", "Stainless steel build", "Pairs with pipeline parlors", "European/Turkish import"] },
  { name: "Silicone Milk Liners", cat: "parts", tag: "Spare part", points: ["Imported silicone", "In stock in Sahiwal", "Fits common clusters"] },
  { name: "Pneumatic Pulsators", cat: "parts", tag: "Spare part", points: ["Genuine import", "Local warehouse stock", "Ask us to match your model"] },
  { name: "Vacuum Pump Vanes", cat: "parts", tag: "Spare part", points: ["For dry vacuum pumps", "Same-week dispatch", "Technician advice on fitting"] },
  { name: "Milk Line Filters", cat: "parts", tag: "Spare part", points: ["Food-grade", "Routine-maintenance item", "Bulk orders welcome"] },
];
export const STATS = [
  { to: 99.8, dec: 1, suffix: "%", label: "Operational reliability" },
  { to: 5000, dec: 0, suffix: "+", label: "Dairy farmers served" },
  { to: 10, dec: 0, suffix: "+", label: "Years in-field experience" },
  { to: 100, dec: 0, suffix: "%", label: "Genuine European/Turkish import" },
];
export const QUALITY = [
  { icon: "ship", t: "Direct import guarantee", d: "Sourced straight from certified Turkish and European manufacturers." },
  { icon: "wrench", t: "24/7 Sahiwal spare support", d: "Local warehouse inventory so your farm does not stand still." },
  { icon: "users", t: "On-site setup and training", d: "A free technician visit for installation and an operator walkthrough." },
  { icon: "shield", t: "Direct warranty protection", d: "Full operational warranty on motor and pump assemblies." },
] as const;
export const STEPS = [
  { t: "Inquiry and selection", d: "Message us on WhatsApp with your herd size." },
  { t: "Technical assessment", d: "We check farm size and power supply." },
  { t: "Express dispatch", d: "Direct delivery from our Sahiwal hub." },
  { t: "Farm setup and first flow", d: "On-site calibration and your first milking." },
];
// NOTE: placeholder testimonials — replace with real, permissioned reviews before launch.
export const REVIEWS = [
  { n: "Farmer, Sahiwal", t: "Milking time dropped and the machine has run through two summers without a break." },
  { n: "Farmer, Okara", t: "Spare liners arrived the next day. No more waiting on Lahore dealers." },
  { n: "Farmer, Sargodha", t: "The technician set it up and trained my staff the same afternoon." },
  { n: "Farmer, Faisalabad", t: "Dual-bucket unit handles my herd easily. Build quality feels industrial." },
  { n: "Dairy owner, Sahiwal", t: "Clear advice on which pump suits my power supply. Honest pricing." },
  { n: "Farmer, Okara", t: "Moved from hand milking to the starter unit. Fewer infections in my cows." },
];
export const PRICING = [
  { tier: "Starter", name: "Portable Single-Bucket", size: "1 – 5 animals", feats: ["Single cluster", "Mobile trolley", "Low-oil pump"], cta: "Chat for best price", hot: false },
  { tier: "Commercial", name: "Dual-Bucket Heavy Duty", size: "5 – 25 animals", feats: ["Twin cluster", "Dry/oil vacuum", "Stainless steel"], cta: "Chat for best price", hot: true },
  { tier: "Industrial", name: "Milking Parlor & Chilling", size: "30+ animals", feats: ["Pipeline system", "Rapid chilling tank (500L+)", "On-site planning"], cta: "Request on-site visit", hot: false },
];
export const FAQ = [
  { q: "What motor voltage do your machines need?", a: "Most units run on standard single-phase supply; parlors may need three-phase. Send us your farm's power details and we confirm before you order." },
  { q: "How long does delivery take across Punjab and Sindh?", a: "We dispatch from our Sahiwal hub. Most Punjab orders arrive within a few days; Sindh timelines depend on the route. We confirm on WhatsApp." },
  { q: "Are spare parts always available?", a: "We keep liners, pulsators, vanes and filters in local stock. If a part is not on the shelf, we tell you the lead time up front." },
  { q: "How often does the machine need maintenance?", a: "Wash after every milking, check liners and vanes routinely, and service the pump on schedule. Our technician gives you a plan at setup." },
  { q: "Do you offer warranty?", a: "Yes, a direct operational warranty on motor and pump assemblies." },
];
