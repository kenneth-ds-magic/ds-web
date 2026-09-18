import React from "react";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Card3D from "@/components/Card3D";
import StatsSection from "@/components/StatsSection";
import NetworkConstellationBackground from "@/components/NetworkConstellationBackground";
import { Users, History, Handshake, ArrowRight } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Us | 25+ Years of Telecom & Computing Innovation",
  description:
    "Explore the legacy, engineering philosophy, and R&D achievements of Digital Solutions Ltd. Incorporated in Uganda in 1998, pioneering telecom gateways and enterprise computing.",
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "About Us | Digital Solutions",
    description:
      "25+ years pioneering open-source telecom gateways (Mbuni MMS, Zorilla SMS, Njiwa) and high-throughput enterprise systems across East Africa.",
    url: "/about",
    images: [
      {
        url: "/images/about_us.jpg",
        width: 1200,
        height: 630,
        alt: "About Digital Solutions Engineering & Legacy",
      },
    ],
  },
  twitter: {
    title: "About Us | Digital Solutions",
    description:
      "25+ years pioneering open-source telecom gateways (Mbuni MMS, Zorilla SMS, Njiwa) and high-throughput enterprise systems across East Africa.",
    images: ["/images/about_us.jpg"],
  },
};

export default function AboutPage() {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://dsmagic.com";

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: baseUrl,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "About Us",
        item: `${baseUrl}/about`,
      },
    ],
  };

  return (
    <div className="min-h-screen bg-white dark:bg-[#000000] text-zinc-900 dark:text-white selection:bg-[#ea1d05] selection:text-white flex flex-col justify-between transition-colors duration-300 relative overflow-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <Navbar />

      {/* Full-Page Fixed Static Telemetry Background Animation */}
      <div className="fixed inset-0 w-full h-full pointer-events-none z-0 opacity-45 dark:opacity-50 overflow-hidden">
        <NetworkConstellationBackground opacity={0.65} />
      </div>

      {/* Soft Ambient Atmosphere & Grid Background */}
      <div className="fixed top-1/3 left-1/2 -translate-x-1/2 w-[850px] h-[500px] bg-[#ea1d05]/10 dark:bg-[#ea1d05]/15 blur-[160px] pointer-events-none z-0" />
      <div className="fixed inset-0 bg-grid-pattern opacity-10 dark:opacity-15 pointer-events-none z-0" />

      <main className="flex-grow pt-32 relative z-20">
        {/* Hero Banner */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden bg-white/40 dark:bg-black/40 backdrop-blur-md transition-colors duration-300 border-b border-zinc-200/60 dark:border-white/10">
          <div className="absolute inset-0 opacity-10 dark:opacity-15 bg-cover bg-center" />
          <div className="absolute inset-0 bg-gradient-to-t from-white/90 dark:from-[#000000]/90 via-white/50 dark:via-[#000000]/50 to-transparent" />

          <div className="max-w-7xl mx-auto relative z-10 text-center space-y-4">
            <span className="text-xs font-bold uppercase tracking-widest text-[#ea1d05] bg-[#ea1d05]/10 px-3.5 py-1.5 rounded-full border border-[#ea1d05]/30">
              About Digital Solutions
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-zinc-950 dark:text-white tracking-tight">
              Engineering Technology for <span className="text-gradient-red">Human & Business</span> Progress
            </h1>
            <p className="max-w-3xl mx-auto text-base sm:text-lg text-zinc-600 dark:text-zinc-300 leading-relaxed">
              We are a research and development house with core business focus on Mobile, Web-based, and Internet applications & services.
            </p>
          </div>
        </section>

        {/* Who We Are Details */}
        <section className="py-24 px-4 sm:px-6 lg:px-8 relative transition-colors duration-300">
          <div className="max-w-7xl mx-auto">
            <div className="p-8 sm:p-12 rounded-3xl bg-white/80 dark:bg-[#09090b]/80 border border-zinc-200 dark:border-white/10 backdrop-blur-xl shadow-xl dark:shadow-2xl mb-16 text-center max-w-4xl mx-auto">
              <h2 className="text-2xl sm:text-3xl font-black text-zinc-900 dark:text-white mb-4">WHO ARE WE?</h2>
              <p className="text-base sm:text-lg text-zinc-700 dark:text-zinc-200 leading-relaxed italic">
                &ldquo;We are a research and development house, with a core business focus on Mobile, Web-based and Internet applications and services. Our single vision in respect to application and systems development and deployment is to enhance technology experience by developing easy-to-use, relevant applications. Our goal is to promote the use of computing as an aid to business productivity, and also to be one of the leading IT solutions providers in the East and Central Africa region.&rdquo;
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              {/* Card 1: Team */}
              <Card3D glowColor="red">
                <div className="w-12 h-12 rounded-xl bg-[#ea1d05]/10 text-[#ea1d05] flex items-center justify-center mb-6">
                  <Users className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-3">OUR TEAM</h3>
                <p className="text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed">
                  DSL employees are equally spread over the technology/development functions and business management. We are a team of highly skilled developers ensuring applications are tailored to client requirements, easy to use, and adhere to industry best practices.
                </p>
              </Card3D>

              {/* Card 2: History */}
              <Card3D glowColor="white">
                <div className="w-12 h-12 rounded-xl bg-zinc-100 dark:bg-white/10 text-[#ea1d05] flex items-center justify-center mb-6">
                  <History className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-3">OUR HISTORY</h3>
                <p className="text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed">
                  DSL is a privately owned IT solutions company, incorporated in Uganda in 1998. Since then, we have built a formidable research and development capability, constantly investigating emerging technologies and delivering market-leading solutions.
                </p>
              </Card3D>

              {/* Card 3: Partnerships */}
              <Card3D glowColor="red">
                <div className="w-12 h-12 rounded-xl bg-[#ea1d05]/10 text-[#ea1d05] flex items-center justify-center mb-6">
                  <Handshake className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-3">PARTNERSHIPS</h3>
                <p className="text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed">
                  We constantly develop strategic alliances with preferred partners to extend our reach and synergy. Our focus is to maintain market leadership as a preferred technology partner in specialized telecommunications and bespoke digital solutions.
                </p>
              </Card3D>
            </div>

            {/* Quick Call to Action Link */}
            <div className="text-center">
              <Link
                href="/contact-us"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#ea1d05] hover:bg-[#ce1705] text-white font-bold text-sm tracking-wider uppercase transition-all shadow-lg shadow-red-600/30"
              >
                <span>Speak With Our Team</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>

        <StatsSection hideBackgroundCanvas={true} />
      </main>

      <div className="relative z-20">
        <Footer />
      </div>
    </div>
  );
}
