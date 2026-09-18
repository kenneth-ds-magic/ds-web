import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  ShieldCheck,
  Zap,
  Lightbulb,
  Globe,
  ChevronRight,
  Code2
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero3DCanvas from "@/components/Hero3DCanvas";
import SolutionsShowcase from "@/components/SolutionsShowcase";
import ServicesGrid from "@/components/ServicesGrid";
import StatsSection from "@/components/StatsSection";
import FAQSection from "@/components/FAQSection";

export const metadata: Metadata = {
  title: "Digital Solutions | Pioneering Telecommunications, Web & Mobile Systems",
  description:
    "Over 25 years engineering carrier-grade telecom gateways (Mbuni MMS, Zorilla SMS, Njiwa), bespoke enterprise software, and mission-critical digital systems across Africa.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Digital Solutions | Pioneering Telecommunications, Web & Mobile Systems",
    description:
      "Over 25 years engineering carrier-grade telecom gateways (Mbuni MMS, Zorilla SMS, Njiwa), bespoke enterprise software, and mission-critical digital systems across Africa.",
    url: "/",
    images: [
      {
        url: "/images/products.jpg",
        width: 1200,
        height: 630,
        alt: "Digital Solutions Enterprise Telecom Gateways and Software",
      },
    ],
  },
  twitter: {
    title: "Digital Solutions | Pioneering Telecommunications, Web & Mobile Systems",
    description:
      "Over 25 years engineering carrier-grade telecom gateways (Mbuni MMS, Zorilla SMS, Njiwa), bespoke enterprise software, and mission-critical digital systems across Africa.",
    images: ["/images/products.jpg"],
  },
};

export default function HomePage() {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "How can Digital Solutions help your business?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "We focus on finding the best solution tailored specifically to our customers' operational needs with mastery of computing technology at a fundamental level.",
        },
      },
      {
        "@type": "Question",
        name: "Will Digital Technology from DSL boost my business?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Our state-of-the-art solutions grant your business a significant competitive edge because systems are carefully tailored by our expert developers rather than restricted to off-the-shelf templates.",
        },
      },
      {
        "@type": "Question",
        name: "What makes DSL's telecommunication gateways different?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "DSL has built world-renowned open-source and commercial engines like Mbuni (MMS Gateway) and Njiwa (world's 1st open-source GSMA eSIM RSP manager), written in high-performance C/C++ with multi-threaded routing cores.",
        },
      },
      {
        "@type": "Question",
        name: "Can you build custom bespoke software for unique industry requirements?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Customers frequently approach DSL with complex IT problems that cannot be solved with standard software. We build multi-platform client/server systems, internet applications, financial transaction pipelines, and secure IoT management suites.",
        },
      },
    ],
  };

  return (
    <div className="min-h-screen bg-white dark:bg-[#000000] text-zinc-900 dark:text-white selection:bg-[#ea1d05] selection:text-white flex flex-col justify-between transition-colors duration-300 relative">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Navbar />

      <main className="flex-grow">
        {/* ================= HERO SECTION (3D ROTATING GLOBE - z-10) ================= */}
        <section className="relative z-10 min-h-[92vh] pt-36 pb-24 flex items-center overflow-hidden bg-white dark:bg-[#000000] transition-colors duration-300">
          {/* Interactive 3D Rotating Earth Globe Canvas */}
          <Hero3DCanvas />

          {/* Soft Ambient Red Atmosphere */}
          <div className="absolute top-1/3 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[450px] bg-[#ea1d05]/15 dark:bg-[#ea1d05]/20 blur-[150px] pointer-events-none" />
          <div className="absolute inset-0 bg-grid-pattern opacity-15 dark:opacity-20 pointer-events-none" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 w-full">
            <div className="max-w-3xl space-y-8 text-center lg:text-left">
              {/* Brand Badge */}
              <div className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold bg-white/90 dark:bg-[#121215]/90 text-zinc-800 dark:text-white border border-zinc-300 dark:border-white/15 shadow-sm dark:shadow-lg backdrop-blur-md animate-float">
                <span>Promoting Computing as an Aid to Business Productivity</span>
              </div>

              {/* Main Headline */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-zinc-950 dark:text-white tracking-tight leading-[1.12]">
                Pioneering{" "}
                <span className="text-gradient-red">Mobile, Web</span> &{" "}
                <span className="text-zinc-900 dark:text-white">Telecom</span> Systems
              </h1>

              {/* Subheading */}
              <p className="text-base sm:text-lg text-zinc-600 dark:text-zinc-300 max-w-2xl leading-relaxed">
                With over 25 years of cutting-edge research and development, Digital Solutions delivers high-throughput carrier gateways, GSMA eSIM architectures, and bespoke enterprise software across East Africa and globally.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
                <a
                  href="#solutions"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-[#ea1d05] hover:bg-[#ce1705] hover:shadow-[0_0_35px_rgba(234,29,5,0.45)] text-white font-black text-sm tracking-wider uppercase transition-all duration-300 group shadow-xl"
                >
                  <span>Explore Flagship Solutions</span>
                  <ArrowRight className="w-4 h-4 text-white group-hover:translate-x-1.5 transition-transform" />
                </a>

                <Link
                  href="/about"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-white/85 dark:bg-[#121215]/85 hover:bg-zinc-100 dark:hover:bg-white/10 text-zinc-900 dark:text-white font-bold text-sm border border-zinc-300 dark:border-white/20 transition-all duration-300 backdrop-blur-md shadow-sm"
                >
                  <span>About Our Company</span>
                  <ChevronRight className="w-4 h-4 text-[#ea1d05]" />
                </Link>
              </div>

              {/* Trust Badges */}
              <div className="pt-6 flex flex-wrap items-center justify-center lg:justify-start gap-6 text-xs text-zinc-500 dark:text-zinc-400 border-t border-zinc-200 dark:border-zinc-800">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-[#ea1d05]" />
                  <span className="font-medium text-zinc-700 dark:text-zinc-300">Incorporated 1998</span>
                </div>
                <div className="flex items-center gap-2">
                  <Globe className="w-4 h-4 text-[#ea1d05]" />
                  <span className="font-medium text-zinc-700 dark:text-zinc-300">Global Carrier Deployed</span>
                </div>
                <div className="flex items-center gap-2">
                  <Code2 className="w-4 h-4 text-[#ea1d05]" />
                  <span className="font-medium text-zinc-700 dark:text-zinc-300">Open-Source Authors</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ================= LOWER SECTIONS OVER FORE-BACKGROUND CONSTELLATION NODES ================= */}
        {/* INTRO 3 PILLARS SECTION */}
        <section className="relative z-10 py-16 px-4 sm:px-6 lg:px-8 border-y border-zinc-200/50 dark:border-white/10 transition-colors duration-300">
          <div className="max-w-7xl mx-auto relative z-20">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Pillar 1 */}
              <div className="p-6 sm:p-8 rounded-2xl bg-white/85 dark:bg-[#121215]/85 border border-zinc-200 dark:border-white/10 hover:border-[#ea1d05] transition-all duration-300 shadow-md dark:shadow-xl group backdrop-blur-md">
                <div className="w-12 h-12 rounded-xl bg-[#ea1d05]/10 text-[#ea1d05] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Zap className="w-6 h-6" />
                </div>
                <div className="w-8 h-1 bg-[#ea1d05] mb-4 rounded-full" />
                <h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-2">
                  Information Technology Consultancy
                </h3>
                <p className="text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed">
                  Strategic insights and deep technology advisory to empower business productivity and infrastructure modernization.
                </p>
              </div>

              {/* Pillar 2 */}
              <div className="p-6 sm:p-8 rounded-2xl bg-white/85 dark:bg-[#121215]/85 border border-zinc-200 dark:border-white/10 hover:border-[#ea1d05] transition-all duration-300 shadow-md dark:shadow-xl group backdrop-blur-md">
                <div className="w-12 h-12 rounded-xl bg-[#ea1d05]/10 text-[#ea1d05] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Lightbulb className="w-6 h-6" />
                </div>
                <div className="w-8 h-1 bg-[#ea1d05] mb-4 rounded-full" />
                <h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-2">
                  Complex Systems Design
                </h3>
                <p className="text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed">
                  Architecting resilient client/server distributed platforms, high-volume transactions, and zero-downtime telecom switches.
                </p>
              </div>

              {/* Pillar 3 */}
              <div className="p-6 sm:p-8 rounded-2xl bg-white/85 dark:bg-[#121215]/85 border border-zinc-200 dark:border-white/10 hover:border-[#ea1d05] transition-all duration-300 shadow-md dark:shadow-xl group backdrop-blur-md">
                <div className="w-12 h-12 rounded-xl bg-[#ea1d05]/10 text-[#ea1d05] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Globe className="w-6 h-6" />
                </div>
                <div className="w-8 h-1 bg-[#ea1d05] mb-4 rounded-full" />
                <h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-2">
                  Mobile, Web & Internet App Development
                </h3>
                <p className="text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed">
                  End-to-end digital engineering spanning modern Next.js interfaces, cloud backends, mobile apps, and telecom APIs.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 20+ YEARS LEGACY & MISSION SECTION */}
        <section className="relative z-10 py-24 px-4 sm:px-6 lg:px-8 transition-colors duration-300 overflow-hidden">
          <div className="max-w-7xl mx-auto relative z-20">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-xs font-bold uppercase tracking-widest text-[#ea1d05] bg-[#ea1d05]/10 px-3.5 py-1 rounded-full border border-[#ea1d05]/30">
                Pioneering Since 1998
              </span>
              <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-black text-zinc-900 dark:text-white tracking-tight">
                More than <span className="text-[#ea1d05]">25 Years</span> of Providing <span className="text-zinc-900 dark:text-white">IT Solutions</span>
              </h2>
              <p className="mt-4 text-base sm:text-lg text-zinc-600 dark:text-zinc-300 italic">
                &ldquo;Our single vision in respect to application and systems development and deployment is to enhance technology experience by developing easy-to-use, relevant applications.&rdquo;
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
              {/* Box 1 */}
              <div className="p-8 rounded-3xl bg-zinc-50/90 dark:bg-[#09090b]/90 border border-zinc-200 dark:border-white/10 text-center shadow-lg dark:shadow-xl backdrop-blur-md">
                <div className="w-16 h-16 rounded-2xl bg-[#ea1d05]/10 text-[#ea1d05] flex items-center justify-center mx-auto mb-6">
                  <Globe className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-2">
                  Web Applications Development
                </h3>
                <p className="text-sm text-zinc-600 dark:text-zinc-300">
                  Custom information portals, transactional web apps, and distributed data systems.
                </p>
              </div>

              {/* Center SVG Illustration from ds_site */}
              <div className="relative h-64 sm:h-80 w-full flex items-center justify-center">
                <div className="relative w-full h-full animate-float">
                  <Image
                    src="/images/services.svg"
                    alt="Digital Solutions Services"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>

              {/* Box 2 */}
              <div className="p-8 rounded-3xl bg-zinc-50/90 dark:bg-[#09090b]/90 border border-zinc-200 dark:border-white/10 text-center shadow-lg dark:shadow-xl backdrop-blur-md">
                <div className="w-16 h-16 rounded-2xl bg-[#ea1d05]/10 text-[#ea1d05] flex items-center justify-center mx-auto mb-6">
                  <ShieldCheck className="w-8 h-8 text-[#ea1d05]" />
                </div>
                <h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-2">
                  Secure Mobile & Network Applications
                </h3>
                <p className="text-sm text-zinc-600 dark:text-zinc-300">
                  Carrier-grade network switches, encrypted data transmission, and GSMA eSIM security.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* STATS SECTION */}
        <div className="relative z-10">
          <StatsSection />
        </div>

        {/* FLAGSHIP PRODUCTS & SOLUTIONS */}
        <div id="solutions" className="relative z-10">
          <SolutionsShowcase />
        </div>

        {/* EXCLUSIVE SERVICES GRID */}
        <div className="relative z-10">
          <ServicesGrid />
        </div>

        {/* FAQ ACCORDION WITH DSL PHOTOS */}
        <div className="relative z-10">
          <FAQSection />
        </div>
      </main>

      <div className="relative z-20">
        <Footer />
      </div>
    </div>
  );
}
