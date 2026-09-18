"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Radio,
  MessageSquare,
  Cpu,
  PhoneCall,
  TreePine,
  ExternalLink,
  CheckCircle2,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Server,
  Code2,
  Layers,
} from "lucide-react";
import Card3D from "./Card3D";

interface Product {
  id: string;
  name: string;
  tagline: string;
  icon: React.ElementType;
  badge: string;
  description: string;
  image: string;
  stats: { label: string; value: string }[];
  highlights: string[];
  externalUrl?: string;
  githubUrl?: string;
  techStack: string[];
}

const products: Product[] = [
  {
    id: "mbuni",
    name: "Mbuni MMS Gateway",
    tagline: "Carrier-Grade Open-Source MMS & VAS Gateway",
    icon: Radio,
    badge: "Global Carrier Deployed",
    image: "/images/mbuni.jpg",
    description:
      "Developed and maintained by Digital Solutions, Mbuni is a world-renowned, fully-fledged Open Source MMS Gateway (MMSC and MMS VAS Gateway). It powers high-volume multimedia messaging across major tier-1 telecom carriers and content aggregators worldwide.",
    stats: [
      { label: "Deployment", value: "Global Carriers" },
      { label: "Type", value: "MMSC / VAS" },
      { label: "Throughput", value: "High-Volume" },
    ],
    highlights: [
      "Native MMSC & MMS VAS Gateway integration",
      "Commercial licensing & support through Lark Router",
      "Seamless MM4, MM7, and MM1 protocol conformance",
      "Ultra-low latency multi-threaded C routing core",
    ],
    externalUrl: "http://mbuni.org",
    githubUrl: "https://www.larkrouter.com/",
    techStack: ["C", "MMS Core", "MM7 / MM4 Protocols", "SMPP", "Linux"],
  },
  {
    id: "zorilla",
    name: "Zorilla SMS Engine",
    tagline: "High-Throughput SMSC & Bulk Broadcast Platform",
    icon: MessageSquare,
    badge: "High Concurrency",
    image: "/images/zorilla.jpg",
    description:
      "A state-of-the-art software suite interfacing directly with SMSC switches to facilitate SMS-based information services and massive bulk broadcasts. Engineered for the most demanding and competitive telecom markets.",
    stats: [
      { label: "Architecture", value: "Multi-Module" },
      { label: "Interface", value: "Direct SMSC / SMPP" },
      { label: "Capacity", value: "Millions/Day" },
    ],
    highlights: [
      "Direct integration with cellular carrier SMSC switches",
      "Dynamic throttling, queuing, and failover redundancy",
      "Real-time delivery status reports (DSR) & analytics",
      "Custom two-way interactive SMS survey & billing logic",
    ],
    techStack: ["SMPP 3.4/5.0", "C/C++", "PostgreSQL", "Telecom Switch"],
  },
  {
    id: "njiwa",
    name: "Njiwa GSMA eSIM",
    tagline: "World's 1st Open Source GSMA RSP for M2M Devices",
    icon: Cpu,
    badge: "World First Innovation",
    image: "/images/njiwa.jpg",
    description:
      "The world's first open-source implementation of GSMA's Embedded SIM Remote Provisioning (RSP) Manager for M2M IoT devices. Enables seamless remote activation of network profiles and credentials over the air.",
    stats: [
      { label: "Standard", value: "GSMA SGP.02" },
      { label: "Focus", value: "eSIM M2M IoT" },
      { label: "License", value: "Open Source" },
    ],
    highlights: [
      "Over-The-Air (OTA) remote network profile provisioning",
      "Compliant with GSMA embedded SIM specifications",
      "Secure key exchange and eUICC management",
      "Publicly audited repository on GitHub",
    ],
    externalUrl: "http://njiwa.io",
    githubUrl: "https://github.com/bagyenda/njiwa",
    techStack: ["GSMA SGP.02", "eUICC", "ASN.1", "C", "Crypto Engine"],
  },
  {
    id: "msitu",
    name: "MSITU Precision Forestry",
    tagline: "Centimeter-Accuracy RTK GPS Tree Planting & Reforestation App",
    icon: TreePine,
    badge: "Open Source Tech",
    image: "/images/msitu.jpg",
    description:
      "Every tree planter's companion. Precision Android field application using RTK GPS centimeter-accuracy surveying, hybrid pegging algorithms, and equilateral triangular mesh layouts to eliminate field bottlenecks and accelerate tree planting at scale.",
    stats: [
      { label: "Accuracy", value: "Sub-Centimeter" },
      { label: "Platform", value: "Native Android" },
      { label: "License", value: "Open Source" },
    ],
    highlights: [
      "Centimeter-accuracy RTK GPS surveying and field pegging",
      "Dynamic hybrid pegging algorithms & triangular mesh grids",
      "Offline-first spatial caching for remote forest reserves",
      "Seamless export to GIS mapping & forest analytics tools",
    ],
    externalUrl: "https://msitu.tech/",
    githubUrl: "https://github.com/dsmagicug/msitu",
    techStack: ["Android Native", "RTK GPS", "Kotlin / Java", "Triangular Mesh", "GIS"],
  },
  {
    id: "asterisk",
    name: "Asterisk PBX & Telecom VoIP",
    tagline: "Enterprise IVR, AMR Codec & Voice Telephony Systems",
    icon: PhoneCall,
    badge: "VoIP & Hardware",
    image: "/images/asterisk_voip.jpg",
    description:
      "Enterprise PBX, IVR, and VoIP gateways. Digital Solutions is a pioneer with major contributions to the Asterisk ecosystem, including AMR codec support and Voicetronix telephony hardware drivers.",
    stats: [
      { label: "Protocols", value: "SIP / RTP / AMR" },
      { label: "Hardware", value: "Voicetronix / E1" },
      { label: "Features", value: "IVR & Call Routing" },
    ],
    highlights: [
      "Official contributor of AMR Codec for mobile voice clarity",
      "Voicetronix hardware integration & digital E1/T1 trunking",
      "Interactive Voice Response (IVR) with database integration",
      "Carrier-grade SIP trunking and PBX call centers",
    ],
    techStack: ["Asterisk", "SIP / RTP", "AMR Codec", "Voicetronix", "C"],
  },
];

export default function SolutionsShowcase() {
  const [activeTab, setActiveTab] = useState<string>("mbuni");
  const selectedProduct = products.find((p) => p.id === activeTab) || products[0];
  const IconComp = selectedProduct.icon;

  return (
    <section className="relative py-24 sm:py-28 px-4 sm:px-6 lg:px-8 bg-zinc-50/75 dark:bg-[#09090b]/75 backdrop-blur-sm transition-colors duration-300 overflow-hidden">
      {/* Ambient Red glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-[#ea1d05]/10 dark:bg-[#ea1d05]/15 blur-[130px] pointer-events-none" />
      <div className="absolute inset-0 bg-grid-pattern opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold bg-[#ea1d05]/10 text-[#ea1d05] border border-[#ea1d05]/30 mb-4 shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-[#ea1d05]" />
            <span>Pioneering Telecom & Software Engines</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-zinc-900 dark:text-white tracking-tight">
            Our Proprietary & <span className="text-gradient-red">Open-Source</span> Software
          </h2>
          <p className="mt-4 text-base sm:text-lg text-zinc-600 dark:text-zinc-300">
            Over the years we have engineered industry-defining software products deployed by national carriers, multinational enterprises, and the global open-source community.
          </p>
        </div>

        {/* Tab Buttons in Red & Light/Dark */}
        <div className="flex items-center justify-center gap-2 sm:gap-3 flex-wrap mb-12">
          {products.map((p) => {
            const Icon = p.icon;
            const isActive = activeTab === p.id;
            return (
              <button
                key={p.id}
                onClick={() => setActiveTab(p.id)}
                className={`flex items-center gap-2 px-5 py-3 rounded-2xl text-xs sm:text-sm font-bold transition-all duration-300 border cursor-pointer ${isActive
                    ? "bg-[#ea1d05] text-white border-[#ea1d05] shadow-[0_0_25px_rgba(234,29,5,0.35)] scale-105"
                    : "bg-white dark:bg-[#121215] text-zinc-700 dark:text-zinc-300 border-zinc-200 dark:border-white/10 hover:bg-zinc-100 dark:hover:bg-[#18181b] hover:text-black dark:hover:text-white shadow-sm"
                  }`}
              >
                <Icon className={`w-4 h-4 ${isActive ? "text-white" : "text-[#ea1d05]"}`} />
                <span>{p.name.split(" ")[0]}</span>
              </button>
            );
          })}
        </div>

        {/* Active Product Detailed 2-Column Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left: Product Information Card */}
          <div className="lg:col-span-7 flex flex-col justify-between rounded-3xl bg-white dark:bg-[#101014] border border-zinc-200 dark:border-white/10 p-8 sm:p-10 shadow-xl backdrop-blur-xl relative overflow-hidden transition-colors">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#ea1d05]/5 dark:bg-[#ea1d05]/10 rounded-full blur-3xl pointer-events-none" />

            <div>
              <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
                <span className="px-3.5 py-1 rounded-full text-xs font-bold bg-[#ea1d05]/10 text-[#ea1d05] dark:text-white border border-[#ea1d05]/30">
                  {selectedProduct.badge}
                </span>
                <div className="flex items-center gap-2">
                  {selectedProduct.externalUrl && (
                    <a
                      href={selectedProduct.externalUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold bg-zinc-100 dark:bg-white/5 hover:bg-zinc-200 dark:hover:bg-white/10 text-zinc-800 dark:text-white border border-zinc-200 dark:border-white/15 transition-colors"
                    >
                      <span>Website</span>
                      <ExternalLink className="w-3.5 h-3.5 text-[#ea1d05]" />
                    </a>
                  )}
                  {selectedProduct.githubUrl && (
                    <a
                      href={selectedProduct.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold bg-[#ea1d05]/10 hover:bg-[#ea1d05]/20 text-[#ea1d05] dark:text-white border border-[#ea1d05]/30 transition-colors"
                    >
                      <Code2 className="w-3.5 h-3.5" />
                      <span>Source Code</span>
                    </a>
                  )}
                </div>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-zinc-900 dark:text-white mb-2">
                {selectedProduct.name}
              </h3>
              <p className="text-sm font-bold text-[#ea1d05] mb-4">
                {selectedProduct.tagline}
              </p>
              <p className="text-zinc-600 dark:text-zinc-300 text-sm sm:text-base leading-relaxed mb-8">
                {selectedProduct.description}
              </p>

              {/* Stats Row */}
              <div className="grid grid-cols-3 gap-3 mb-8 p-4 rounded-2xl bg-zinc-50 dark:bg-black/60 border border-zinc-200 dark:border-white/10">
                {selectedProduct.stats.map((st, idx) => (
                  <div key={idx} className="text-center">
                    <p className="text-xs text-zinc-500 dark:text-zinc-400 mb-0.5">{st.label}</p>
                    <p className="text-sm sm:text-base font-extrabold text-zinc-900 dark:text-white truncate">{st.value}</p>
                  </div>
                ))}
              </div>

              {/* Key Capabilities */}
              <div className="space-y-3 mb-8">
                <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
                  Key Capabilities
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {selectedProduct.highlights.map((h, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-700 dark:text-zinc-200">
                      <CheckCircle2 className="w-4 h-4 text-[#ea1d05] shrink-0 mt-0.5" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Bottom Tech Tags & Action */}
            <div className="pt-6 border-t border-zinc-200 dark:border-white/10 flex flex-wrap items-center justify-between gap-4">
              <div className="flex flex-wrap gap-1.5">
                {selectedProduct.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 rounded-lg text-[11px] font-mono bg-zinc-100 dark:bg-black text-zinc-800 dark:text-zinc-300 border border-zinc-300 dark:border-zinc-800 font-semibold"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <Link
                href="/our-work"
                className="inline-flex items-center gap-2 text-xs font-bold text-[#ea1d05] hover:underline transition-colors"
              >
                <span>View Full Portfolio</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          {/* Right: Modern Product Preview Card (Replaces the raw .engine code card) */}
          <div className="lg:col-span-5 flex">
            <Card3D glowColor="red" className="w-full h-full flex flex-col justify-between p-6 sm:p-8 bg-white dark:bg-[#101014] border-zinc-200 dark:border-white/10 shadow-xl rounded-3xl">
              <div className="space-y-6">
                {/* Visual Thumbnail Preview Container */}
                <div className="relative aspect-[16/10] w-full rounded-2xl overflow-hidden border border-zinc-200 dark:border-white/10 bg-zinc-900 shadow-md group">
                  <Image
                    src={selectedProduct.image}
                    alt={selectedProduct.name}
                    fill
                    className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent" />

                  {/* Overlaid Badge & Category Icon */}
                  <div className="absolute top-3 left-3 right-3 flex items-center justify-between gap-2 pointer-events-none">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-white bg-black/75 px-3 py-1 rounded-full border border-white/20 backdrop-blur-md">
                      {selectedProduct.badge}
                    </span>
                    <div className="p-2 rounded-xl bg-black/60 backdrop-blur-md border border-white/20 text-white shadow-sm">
                      <IconComp className="w-4 h-4" />
                    </div>
                  </div>

                  {/* Bottom Title Bar on Image */}
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs text-white font-bold">
                    <span className="truncate max-w-[200px]">{selectedProduct.name}</span>
                    <span className="text-[#ea1d05] font-mono text-[11px]">Production Ready</span>
                  </div>
                </div>

                {/* Architecture Highlights */}
                <div className="space-y-3">
                  <div className="p-4 rounded-2xl bg-zinc-50 dark:bg-black/60 border border-zinc-200 dark:border-white/10 flex items-center gap-3.5">
                    <div className="p-2.5 rounded-xl bg-[#ea1d05]/10 text-[#ea1d05]">
                      <Server className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-zinc-900 dark:text-white uppercase tracking-wider">
                        Carrier-Grade Reliability
                      </h4>
                      <p className="text-xs text-zinc-600 dark:text-zinc-400 mt-0.5">
                        High throughput, zero-queue starvation, and sub-millisecond core processing.
                      </p>
                    </div>
                  </div>

                  <div className="p-4 rounded-2xl bg-zinc-50 dark:bg-black/60 border border-zinc-200 dark:border-white/10 flex items-center gap-3.5">
                    <div className="p-2.5 rounded-xl bg-[#ea1d05]/10 text-[#ea1d05]">
                      <ShieldCheck className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-zinc-900 dark:text-white uppercase tracking-wider">
                        Open RFC & GSMA Standards
                      </h4>
                      <p className="text-xs text-zinc-600 dark:text-zinc-400 mt-0.5">
                        Conforms strictly with 3GPP, GSMA SGP.02, SMPP, and MM4/MM7 specifications.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom CTA within card */}
              <div className="pt-6 mt-6 border-t border-zinc-100 dark:border-white/10 flex items-center gap-3">
                <Link
                  href="/contact-us"
                  className="flex-1 flex items-center justify-center gap-2 py-3.5 px-4 rounded-2xl bg-[#ea1d05] hover:bg-[#ce1705] text-white font-bold text-xs tracking-wider uppercase transition-all shadow-lg shadow-red-600/30 active:scale-95 cursor-pointer"
                >
                  <span>Request Custom Deployment</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
                <Link
                  href="/our-work"
                  className="p-3.5 rounded-2xl bg-zinc-100 dark:bg-white/10 hover:bg-zinc-200 dark:hover:bg-white/20 text-zinc-800 dark:text-white border border-zinc-200 dark:border-white/15 transition-all cursor-pointer"
                  title="View in Our Work Showcase"
                >
                  <Layers className="w-4 h-4" />
                </Link>
              </div>
            </Card3D>
          </div>
        </div>
      </div>
    </section>
  );
}
