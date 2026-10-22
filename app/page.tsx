import Preloader from "@/components/Preloader";
import SmoothScroll from "@/components/SmoothScroll";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Value from "@/components/Value";
import Products from "@/components/Products";
import { Quality, Workflow } from "@/components/Quality";
import Reviews from "@/components/Reviews";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
export default function Page() {
  return (<SmoothScroll><Preloader /><Navbar /><main>
    <Hero /><Value /><Products /><Quality /><Workflow /><Reviews /><Pricing /><FAQ /></main><Footer /></SmoothScroll>);
}
