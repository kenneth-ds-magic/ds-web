"use client";

import React, { useState } from "react";
import Link from "next/link";
import { 
  Radio, 
  MessageSquare, 
  Cpu, 
  PhoneCall, 
  ExternalLink, 
  CheckCircle2, 
  Terminal, 
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Server
} from "lucide-react";
import Card3D from "./Card3D";
import NetworkConstellationBackground from "./NetworkConstellationBackground";

interface Product {
  id: string;
  name: string;
  tagline: string;
  icon: React.ElementType;
  badge: string;
  description: string;
  stats: { label: string; value: string }[];
  highlights: string[];
  externalUrl?: string;
  githubUrl?: string;
  techStack: string[];
  protocolSnippet: string;
}

const products: Product[] = [
  {
    id: "mbuni",
    name: "Mbuni MMS Gateway",
    tagline: "Carrier-Grade Open-Source MMS & VAS Gateway",
    icon: Radio,
    badge: "Global Carrier Deployed",
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
    protocolSnippet: `// Mbuni MMSC Configuration Example
group = mbuni
hostname = mmsc.carrier.net
system-type = "dsl-vas"
send-mms-url = "http://localhost:8080/mms"
log-level = 0
storage-type = spool`,
  },
  {
    id: "zorilla",
    name: "Zorilla SMS Engine",
    tagline: "High-Throughput SMSC & Bulk Broadcast Platform",
    icon: MessageSquare,
    badge: "High Concurrency",
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
    protocolSnippet: `// Zorilla SMSC Routing Matrix
ROUTE_ENTRY {
  route_id: "SMSC_PRIMARY_UGA",
  protocol: "SMPP_V34",
  tps_limit: 2500,
  window_size: 100,
  auto_reconnect: true
}`,
  },
  {
    id: "njiwa",
    name: "Njiwa GSMA eSIM",
    tagline: "World's 1st Open Source GSMA RSP for M2M Devices",
    icon: Cpu,
    badge: "World First Innovation",
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
    protocolSnippet: `// GSMA SGP.02 Profile Download Protocol
struct Es4DownloadRequest {
  octet_string iccid;
  eSIM_Profile_Header header;
  CryptoKeySet sessionKeys;
}; // Njiwa Embedded SIM Manager`,
  },
  {
    id: "asterisk",
    name: "Asterisk PBX & Telecom VoIP",
    tagline: "Enterprise IVR, AMR Codec & Voice Telephony Systems",
    icon: PhoneCall,
    badge: "VoIP & Hardware",
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
    protocolSnippet: `// Asterisk Dialplan with AMR Codec
[carrier-inbound]
exten => _+256X.,1,Answer()
same => n,Set(CHANNEL(audioreadformat)=amr)
same => n,AGI(dsl_ivr_handler.py)
same => n,Hangup()`,
  },
];

export default function SolutionsShowcase() {
  const [activeTab, setActiveTab] = useState<string>("mbuni");
  const selectedProduct = products.find((p) => p.id === activeTab) || products[0];

  return (
    <section className="relative py-28 px-4 sm:px-6 lg:px-8 bg-zinc-50/75 dark:bg-[#09090b]/75 backdrop-blur-sm transition-colors duration-300 overflow-hidden">
      {/* Top-Left Fore-Background Server & Connected Devices Ecosystem */}
      <div className="absolute top-0 left-0 w-[380px] lg:w-[460px] h-[270px] lg:h-[320px] pointer-events-none z-0 opacity-75 overflow-hidden">
        <NetworkConstellationBackground />
      </div>

      {/* Ambient Red glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-[#ea1d05]/10 dark:bg-[#ea1d05]/15 blur-[130px] pointer-events-none" />
      <div className="absolute inset-0 bg-grid-pattern opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
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
        <div className="flex items-center justify-center gap-2 sm:gap-4 flex-wrap mb-12">
          {products.map((p) => {
            const Icon = p.icon;
            const isActive = activeTab === p.id;
            return (
              <button
                key={p.id}
                onClick={() => setActiveTab(p.id)}
                className={`flex items-center gap-2.5 px-6 py-3.5 rounded-xl text-sm font-bold transition-all duration-300 border cursor-pointer ${
                  isActive
                    ? "bg-[#ea1d05] text-white border-[#ea1d05] shadow-[0_0_25px_rgba(234,29,5,0.45)] scale-105"
                    : "bg-white dark:bg-[#121215] text-zinc-700 dark:text-zinc-300 border-zinc-200 dark:border-white/10 hover:bg-zinc-100 dark:hover:bg-[#18181b] hover:text-black dark:hover:text-white shadow-sm"
                }`}
              >
                <Icon className={`w-4 h-4 ${isActive ? "text-white" : "text-[#ea1d05]"}`} />
                <span>{p.name.split(" ")[0]}</span>
              </button>
            );
          })}
        </div>

        {/* Active Product Detailed 3D Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left: Product Information Card */}
          <div className="lg:col-span-7 flex flex-col justify-between rounded-3xl bg-white dark:bg-gradient-to-b dark:from-[#121215] dark:to-[#09090b] border border-zinc-200 dark:border-white/10 p-8 sm:p-10 shadow-xl dark:shadow-2xl backdrop-blur-xl relative overflow-hidden transition-colors">
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
                      className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-semibold bg-zinc-100 dark:bg-white/5 hover:bg-zinc-200 dark:hover:bg-white/10 text-zinc-800 dark:text-white border border-zinc-200 dark:border-white/15 transition-colors"
                    >
                      <span>Website</span>
                      <ExternalLink className="w-3 h-3 text-[#ea1d05]" />
                    </a>
                  )}
                  {selectedProduct.githubUrl && (
                    <a
                      href={selectedProduct.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-semibold bg-[#ea1d05]/10 hover:bg-[#ea1d05]/20 text-[#ea1d05] dark:text-white border border-[#ea1d05]/30 transition-colors"
                    >
                      <span>Project Link</span>
                      <ExternalLink className="w-3 h-3 text-[#ea1d05]" />
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
              <div className="grid grid-cols-3 gap-3 mb-8 p-4 rounded-2xl bg-zinc-50 dark:bg-[#000000]/80 border border-zinc-200 dark:border-white/10">
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
            <div className="pt-6 border-t border-zinc-200 dark:border-zinc-800 flex flex-wrap items-center justify-between gap-4">
              <div className="flex flex-wrap gap-1.5">
                {selectedProduct.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 rounded-md text-[11px] font-mono bg-zinc-100 dark:bg-black text-zinc-800 dark:text-zinc-300 border border-zinc-300 dark:border-zinc-700 font-semibold"
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

          {/* Right: Interactive 3D Card with Code / Architecture Console */}
          <div className="lg:col-span-5 flex">
            <Card3D glowColor="red" className="h-full flex flex-col justify-between p-6 sm:p-8 bg-white dark:bg-[#000000]/95 border-zinc-200 dark:border-white/10">
              <div>
                {/* Console Header */}
                <div className="flex items-center justify-between pb-4 border-b border-zinc-200 dark:border-zinc-800 mb-4">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-[#ea1d05]" />
                    <div className="w-3 h-3 rounded-full bg-[#cf3828]" />
                    <div className="w-3 h-3 rounded-full bg-[#ec4936]" />
                    <span className="ml-2 text-xs font-mono text-zinc-600 dark:text-zinc-300 font-bold">
                      {selectedProduct.id}.telecom_engine
                    </span>
                  </div>
                  <Terminal className="w-4 h-4 text-[#ea1d05]" />
                </div>

                {/* Code Window */}
                <div className="p-4 rounded-xl bg-zinc-900 dark:bg-[#09090b] border border-zinc-800 text-xs font-mono text-zinc-100 leading-relaxed overflow-x-auto shadow-inner mb-6">
                  <pre>{selectedProduct.protocolSnippet}</pre>
                </div>

                {/* Architecture Highlights */}
                <div className="space-y-4">
                  <div className="p-4 rounded-xl bg-zinc-50 dark:bg-[#121215] border border-zinc-200 dark:border-white/10">
                    <div className="flex items-center gap-3">
                      <div className="p-2.5 rounded-lg bg-[#ea1d05]/15 text-[#ea1d05]">
                        <Server className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="text-xs font-bold text-zinc-900 dark:text-white uppercase tracking-wider">
                          Carrier-Grade Reliability
                        </h4>
                        <p className="text-xs text-zinc-600 dark:text-zinc-300 mt-0.5">
                          Engineered for zero-downtime telecom operations with sub-millisecond switching.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="p-4 rounded-xl bg-zinc-50 dark:bg-[#121215] border border-zinc-200 dark:border-white/10">
                    <div className="flex items-center gap-3">
                      <div className="p-2.5 rounded-lg bg-[#ea1d05]/15 text-[#ea1d05]">
                        <ShieldCheck className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="text-xs font-bold text-zinc-900 dark:text-white uppercase tracking-wider">
                          Standard-Compliant Architecture
                        </h4>
                        <p className="text-xs text-zinc-600 dark:text-zinc-300 mt-0.5">
                          Full conformance with 3GPP, GSMA, and IETF protocol specifications.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom CTA within 3D card */}
              <div className="pt-6 mt-6 border-t border-zinc-200 dark:border-zinc-800">
                <Link
                  href="/contact-us"
                  className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-[#ea1d05] hover:bg-[#ce1705] text-white font-bold text-xs tracking-wider uppercase transition-all shadow-lg shadow-red-600/30"
                >
                  <span>Request Custom Deployment</span>
                  <ArrowRight className="w-3.5 h-3.5 text-white" />
                </Link>
              </div>
            </Card3D>
          </div>
        </div>
      </div>
    </section>
  );
}
