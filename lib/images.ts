// One place for all photography. Paste an Unsplash/Pexels/own URL into any slot.
// Empty slots render a branded steel-texture fallback, so nothing is ever blank or broken.
export const un = (id: string, w = 1000) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=80`;
export const IMG: Record<string, string | undefined> = {
  hero: undefined,            // isolated dual-bucket machine (transparent PNG works best)
  manual: undefined,          // manual milking, farm photo
  modern: undefined,          // automated dairy shed, steel vacuum lines
  "Turkish Dual-Bucket Milking Machine": undefined,
  "Portable Single-Bucket Milking Machine": undefined,
  "Milking Parlor with Pipeline": undefined,
  "Milk Chilling Tank (500L+)": undefined,
  "Silicone Milk Liners": undefined,
  "Pneumatic Pulsators": undefined,
  "Vacuum Pump Vanes": undefined,
  "Milk Line Filters": undefined,
  "farm-bg": undefined,       // darkened background for review cards
  "avatar-Sahiwal": undefined, "avatar-Okara": undefined, "avatar-Sargodha": undefined, "avatar-Faisalabad": undefined,
};
