"use client";

import React from "react";
import Link from "next/link";
import {
  Zap,
  Lightbulb,
  Globe,
  ShieldCheck,
  Cpu,
  Layers,
  ArrowUpRight,
  Sparkles,
  ArrowRight
} from "lucide-react";
import Card3D from "./Card3D";

const services = [
  {
    icon: Zap,
    title: "Information Technology Consultancy",
    category: "Strategic Advisory",
    description:
      "Leverage over 25 years of profound technological insight. We guide enterprises and telecom operators in selecting, architecting, and exploiting the optimal technology stack.",
    glow: "red" as const,
    accent: "from-[#ea1d05] to-[#ce1705]",
    features: ["Enterprise Architecture", "Tech Stack Feasibility", "Legacy Modernization"],
  },
  {
    icon: Lightbulb,
    title: "Complex Systems Design",
    category: "High-Concurrency Engineering",
    description:
      "Architecting mission-critical, distributed client-server systems built for high throughput, sub-second latency, and fault-tolerant operation under intense traffic loads.",
    glow: "red" as const,
    accent: "from-[#e3200b] to-[#cf3828]",
    features: ["Distributed Systems", "Fault-Tolerant Clusters", "Scalable Data Pipelines"],
  },
  {
    icon: Globe,
    title: "Mobile, Web & Internet App Development",
    category: "Full-Stack Software",
    description:
      "Developing state-of-the-art web platforms and native mobile applications with exceptional user experiences, resilient APIs, and enterprise-grade cloud integrations.",
    glow: "red" as const,
    accent: "from-[#eb1c04] to-[#ea1d05]",
    features: ["Next.js & React Applications", "Mobile App Development", "High-Performance APIs"],
  },
  {
    icon: Layers,
    title: "Bespoke Enterprise Solutions",
    category: "Custom Engineering",
    description:
      "When off-the-shelf software fails, we engineer custom software specifically tailored to your organization's unique operational constraints and competitive advantages.",
    glow: "red" as const,
    accent: "from-[#ec4936] to-[#ce1705]",
    features: ["Tailored Algorithms", "Custom ERP/CRM Integrations", "Domain-Specific Workflows"],
  },
  {
    icon: Cpu,
    title: "Telecommunications & USSD Gateways",
    category: "Carrier Infrastructure",
    description:
      "Deep expertise in cellular carrier interfaces, SS7/SMPP signaling, MMSC VAS routing, GSMA eSIM remote provisioning, and interactive voice response (IVR).",
    glow: "red" as const,
    accent: "from-[#ea1d05] to-[#cf3828]",
    features: ["SMPP / SMSC Switches", "GSMA eSIM (SGP.02)", "USSD Menu Applications"],
  },
  {
    icon: ShieldCheck,
    title: "Strategic Partnerships & Support",
    category: "Long-Term SLA",
    description:
      "We forge enduring alliances with forward-thinking enterprises, delivering continuous after-sales technical maintenance, 24/7 SLA monitoring, and feature iteration.",
    glow: "white" as const,
    accent: "from-[#ce1705] to-zinc-900",
    features: ["24/7 Critical SLA Support", "Security Auditing", "Continuous Deployment"],
  },
];

export default function ServicesGrid() {
  return (
    <section className="relative py-28 px-4 sm:px-6 lg:px-8 bg-white/75 dark:bg-[#000000]/75 backdrop-blur-sm transition-colors duration-300 overflow-hidden">
      {/* Background Decorative Glows */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#ea1d05]/5 dark:bg-[#ea1d05]/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute inset-0 bg-grid-pattern opacity-15 pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold bg-[#ea1d05]/10 text-[#ea1d05] border border-[#ea1d05]/30 mb-4 shadow-sm">
              <Sparkles className="w-3.5 h-3.5 text-[#ea1d05]" />
              <span>Full-Spectrum Digital Capabilities</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-zinc-900 dark:text-white tracking-tight">
              Our Exclusive <span className="text-gradient-red">Digital Solutions</span> Services
            </h2>
            <p className="mt-4 text-base sm:text-lg text-zinc-600 dark:text-zinc-300">
              From low-level carrier protocols to modern cloud architectures, we design and build software that drives real enterprise productivity.
            </p>
          </div>

          <Link
            href="/about"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-zinc-100 dark:bg-[#121215] hover:bg-[#ea1d05] hover:text-white text-zinc-900 dark:text-white text-xs font-bold border border-zinc-300 dark:border-white/15 transition-all duration-300 shadow-md group self-start md:self-auto"
          >
            <span>Learn About Our Methodology</span>
            <ArrowRight className="w-3.5 h-3.5 text-[#ea1d05] group-hover:text-white group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* 3D Interactive Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {services.map((srv, idx) => {
            const Icon = srv.icon;
            return (
              <Card3D
                key={idx}
                glowColor={srv.glow}
                className="h-full flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className={`p-3.5 rounded-2xl bg-gradient-to-br ${srv.accent} text-white shadow-lg`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-bold tracking-wider uppercase text-zinc-600 dark:text-zinc-400 bg-zinc-100 dark:bg-white/5 px-3 py-1 rounded-full border border-zinc-200 dark:border-white/10">
                      {srv.category}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-3 group-hover:text-[#ea1d05] transition-colors">
                    {srv.title}
                  </h3>

                  <p className="text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed mb-6">
                    {srv.description}
                  </p>

                  <div className="space-y-2 pt-4 border-t border-zinc-200 dark:border-zinc-800">
                    {srv.features.map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-center gap-2 text-xs text-zinc-500 dark:text-zinc-400">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#ea1d05]" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-6 mt-6 border-t border-zinc-200 dark:border-zinc-800 flex items-center justify-between">
                  <Link
                    href="/contact-us"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-zinc-700 dark:text-zinc-300 hover:text-[#ea1d05] transition-colors"
                  >
                    <span>Request Details</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </Link>
                  <span className="text-xs font-mono text-zinc-400 dark:text-zinc-600 font-bold">
                    0{idx + 1}
                  </span>
                </div>
              </Card3D>
            );
          })}
        </div>
      </div>
    </section>
  );
}
