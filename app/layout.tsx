import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Syne } from "next/font/google";
import "./globals.css";
const jakarta = Plus_Jakarta_Sans({ subsets: ["latin"], variable: "--font-jakarta" });
const syne = Syne({ subsets: ["latin"], variable: "--font-syne", weight: ["600", "700", "800"] });
export const metadata: Metadata = {
  title: "Milking Machine Sahiwal | Pak Dairy Machinery",
  description: "Imported milking machines, chilling plants, parlors and genuine spare parts in Sahiwal. Dairy machinery Pakistan.",
  openGraph: { title: "Pak Dairy Machinery Sahiwal", description: "Engineered for efficiency. Imported for modern dairy farming.", type: "website" },
};
const ld = { "@context": "https://schema.org", "@type": "LocalBusiness", name: "Pak Dairy Machinery Sahiwal", telephone: "+92 341 5488877",
  address: { "@type": "PostalAddress", streetAddress: "Office 355, Royal Palm Garden, St 19 Bypass, Royal Palm City", addressLocality: "Sahiwal", postalCode: "57000", addressRegion: "Punjab", addressCountry: "PK" },
  aggregateRating: { "@type": "AggregateRating", ratingValue: "4.8", bestRating: "5" } };
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (<html lang="en" className={`${jakarta.variable} ${syne.variable}`}><body className="font-sans antialiased">
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }} />
    {children}</body></html>);
}
