"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  ExternalLink,
  Code2,
  ArrowRight,
  Radio,
  Cpu,
  PhoneCall,
  MessageSquare,
  TreePine,
  Layers,
  ChevronLeft,
  ChevronRight,
  Pause,
  Play,
  Plus,
  CheckCircle2
} from "lucide-react";

export default function OurWorkContent() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const DURATION_MS = 6000; // 6 seconds per slide

  const projects = [
    {
      id: "mbuni",
      indexNum: "01",
      tagline: "Carrier-Grade Infrastructure",
      title: "Mbuni MMS Gateway & MMSC Switch",
      category: "telecom",
      icon: Radio,
      client: "Tier-1 Mobile Carriers (12+ Nations)",
      description:
        "World-renowned, carrier-grade Open Source MMS Gateway (MMSC and MMS VAS Gateway) developed and maintained by Digital Solutions. Engineered in C/Linux for ultra-low latency, multi-million message daily routing, and MM4/MM7 carrier interconnection protocols.",
      image: "/images/mbuni.jpg",
      tags: ["Carrier MMSC Core", "MM4 / MM7 Protocols", "C / Linux", "High Volume Routing"],
      stats: "12+ Nations Deployed",
      externalUrl: "http://mbuni.org",
    },
    {
      id: "zorilla",
      indexNum: "02",
      tagline: "High-Throughput Mobile VAS",
      title: "Zorilla SMS VAS & Broadcast Engine",
      category: "telecom",
      icon: MessageSquare,
      client: "Mobile Network Operators & Aggregators",
      description:
        "Industrial SMS VAS and broadcast automation platform interfacing directly with carrier SMSC switches. Built for high-volume content subscriptions, multi-operator billing triggers, and emergency alert dissemination.",
      image: "/images/zorilla.jpg",
      tags: ["SMSC Interfacing", "VAS Broadcasts", "Carrier Core", "High Concurrency"],
      stats: "Millions SMS/Day",
    },
    {
      id: "njiwa",
      indexNum: "03",
      tagline: "GSMA SGP.02 Open Standard",
      title: "Njiwa GSMA eSIM Remote Provisioning",
      category: "opensource",
      icon: Cpu,
      client: "Telcos & M2M / IoT Device Manufacturers",
      description:
        "The world's first Open Source implementation of GSMA's Embedded SIM (eSIM) Remote Provisioning Manager for M2M devices. Orchestrates Over-The-Air (OTA) cryptographic profile download and carrier switching directly to eUICC chips.",
      image: "/images/njiwa.jpg",
      tags: ["GSMA SGP.02", "eUICC / SM-DP", "OTA Remote Config", "C Crypto Engine"],
      stats: "1st Open Source eSIM",
      externalUrl: "http://njiwa.io",
      githubUrl: "https://github.com/bagyenda/njiwa",
    },
    {
      id: "lark",
      indexNum: "04",
      tagline: "Enterprise Telecom Routing Core",
      title: "Lark Router Commercial MMSC Core",
      category: "telecom",
      icon: Layers,
      client: "Enterprise Telecom Operators",
      description:
        "High-performance commercial carrier routing engine for Mbuni, providing enterprise SLAs, multi-threaded routing cores, SMPP protocol conformance, active-active clustering, and 24/7 telecommunications reliability.",
      image: "/images/lark_router.jpg",
      tags: ["Commercial Routing", "SMPP / MMSC", "Low Latency", "Carrier SLAs"],
      stats: "99.999% Reliability",
      externalUrl: "https://www.larkrouter.com/",
    },
    {
      id: "asterisk",
      indexNum: "05",
      tagline: "Telecom Voice & Codec Engineering",
      title: "Asterisk PBX, AMR Codec & VoIP Systems",
      category: "opensource",
      icon: PhoneCall,
      client: "Enterprise Telephony & Call Centers",
      description:
        "Pioneering contributions to the Asterisk VoIP ecosystem, including native AMR (Adaptive Multi-Rate) codec support for crystal-clear mobile voice encoding and low-level hardware drivers for Voicetronix telephony boards.",
      image: "/images/asterisk_voip.jpg",
      tags: ["Asterisk PBX", "AMR Codec", "Voicetronix Drivers", "HD Voice Clarity"],
      stats: "Global Open Source Contribution",
    },
    {
      id: "msitu",
      indexNum: "06",
      tagline: "Precision Forestry & RTK GPS",
      title: "MSITU — Precision Tree Planting App",
      category: "opensource",
      icon: TreePine,
      client: "Uganda Forestry Teams & Global Reforestation",
      description:
        "Every tree planter's companion. Precision Android field application using RTK GPS centimeter-accuracy surveying, hybrid pegging algorithms, and equilateral triangular mesh layouts to eliminate field bottlenecks and accelerate tree planting at scale.",
      image: "/images/msitu.jpg",
      tags: ["RTK GPS Precision", "Android Native", "Triangular Mesh", "Precision Forestry"],
      stats: "Centimeter Accuracy",
      externalUrl: "https://msitu.tech/",
      githubUrl: "https://github.com/dsmagicug/msitu",
    },
    {
      id: "rapidpro",
      indexNum: "07",
      tagline: "Mobile Signaling Channel Connector",
      title: "RapidPro External USSD Gateway Channel",
      category: "opensource",
      icon: MessageSquare,
      client: "Mobile Operators & Automated Workflows",
      description:
        "Carrier-grade external USSD channel connector engineered for RapidPro workflows, enabling automated interactive session handling over live mobile signaling networks without requiring mobile data.",
      image: "/images/rapidpro_ussd.jpg",
      tags: ["USSD Signaling", "RapidPro Channel", "Interactive Menus", "Open Source"],
      stats: "Zero-Data Mobile Access",
      githubUrl: "https://github.com/dsmagicug/rapidpro-external-ussd-channel",
    },
  ];

  // Zero-skip, deterministic sequential auto-advancing logic
  useEffect(() => {
    if (isPaused) return;

    const timer = setTimeout(() => {
      setActiveIndex((prev) => (prev + 1) % projects.length);
    }, DURATION_MS);

    return () => clearTimeout(timer);
  }, [activeIndex, isPaused, projects.length]);

  const handleSelectSlide = (idx: number) => {
    setActiveIndex(idx);
  };

  const handlePrev = () => {
    setActiveIndex((current) =>
      current === 0 ? projects.length - 1 : current - 1
    );
  };

  const handleNext = () => {
    setActiveIndex((current) => (current + 1) % projects.length);
  };

  return (
    <div className="min-h-screen bg-white dark:bg-[#000000] text-zinc-900 dark:text-white selection:bg-[#ea1d05] selection:text-white flex flex-col justify-between transition-colors duration-300 relative overflow-hidden">
      <Navbar />

      <main className="flex-grow pt-24 sm:pt-28 pb-16 sm:pb-36 relative z-20">
        {/* ========================================================================= */}
        {/* HERO EXPANDING ACCORDION SHOWCASE (FUTURE-PROCESSING STYLE) */}
        {/* ========================================================================= */}
        <section className="px-4 sm:px-6 lg:px-8 max-w-[1440px] mx-auto">
          {/* Main Interactive Accordion Frame */}
          <div
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            className="relative overflow-hidden"
          >
            {/* Desktop Horizontal Expanding Accordion (Hidden on small mobile, flex on md+) */}
            <div className="hidden md:flex h-[620px] lg:h-[680px] w-full p-2.5 gap-2.5 select-none overflow-hidden">
              {projects.map((project, idx) => {
                const isActive = idx === activeIndex;
                const IconComp = project.icon;

                return (
                  <div
                    key={project.id}
                    onClick={() => handleSelectSlide(idx)}
                    className={`relative rounded-2xl overflow-hidden cursor-pointer transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] border ${isActive
                        ? "flex-[8] lg:flex-[8.5] border-[#ea1d05] dark:border-[#ea1d05]/60"
                        : "flex-[1.1] border-zinc-300/80 dark:border-white/10 hover:border-[#ea1d05]/50 bg-zinc-900/90"
                      }`}
                  >
                    {/* High-Resolution Background Image */}
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      priority={isActive}
                      className={`object-cover transition-all duration-700 ${isActive
                          ? "scale-100 opacity-90 filter brightness-[0.85] blur-none"
                          : "scale-110 opacity-30 filter brightness-[0.4] grayscale-[30%] blur-md md:blur-lg"
                        }`}
                    />

                    {/* Vignette Gradients */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/45 to-black/30 pointer-events-none" />
                    {isActive && (
                      <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/55 to-transparent pointer-events-none" />
                    )}

                    {/* ========================================= */}
                    {/* COLLAPSED STATE (Vertical Column strip)   */}
                    {/* ========================================= */}
                    {!isActive && (
                      <div className="absolute inset-0 bg-black/40 backdrop-blur-md flex flex-col justify-between p-4 z-10 transition-all duration-500 hover:bg-black/25">
                        {/* Top: Number and Category Icon */}
                        <div className="flex flex-col items-center gap-2">
                          <span className="text-xs font-mono font-black text-white/70 bg-black/60 px-2 py-1 rounded-md border border-white/10 shadow-sm">
                            {project.indexNum}
                          </span>
                          <div className="p-2 rounded-xl bg-black/50 backdrop-blur-md border border-white/10 text-white/80 shadow-sm">
                            <IconComp className="w-4 h-4" />
                          </div>
                        </div>

                        {/* Middle: Rotated Vertical Title */}
                        <div className="flex-1 flex items-center justify-center my-4 overflow-hidden">
                          <span
                            className="text-sm font-bold text-white tracking-wider whitespace-nowrap opacity-85 uppercase transition-colors [writing-mode:vertical-rl] rotate-180 drop-shadow"
                          >
                            {project.title.length > 26 ? project.title.slice(0, 24) + "..." : project.title}
                          </span>
                        </div>

                        {/* Bottom: Plus icon trigger */}
                        <div className="flex justify-center">
                          <div className="p-2 rounded-full bg-white/10 text-white/90 border border-white/10 hover:bg-[#ea1d05] hover:text-white transition-colors shadow-sm">
                            <Plus className="w-4 h-4" />
                          </div>
                        </div>
                      </div>
                    )}

                    {/* ========================================= */}
                    {/* EXPANDED ACTIVE STATE                     */}
                    {/* ========================================= */}
                    {isActive && (
                      <div className="absolute inset-0 flex flex-col justify-between p-6 lg:p-10 z-10 text-white">
                        {/* Top Row: Client & Category Credentials */}
                        <div className="flex items-center justify-between gap-3 flex-wrap">
                          <div className="flex items-center gap-2.5">
                            <span className="text-xs font-bold uppercase tracking-wider text-white bg-black/80 px-3.5 py-1.5 rounded-full border border-white/20 backdrop-blur-md shadow-sm">
                              {project.client}
                            </span>
                            <span className="text-xs font-semibold text-emerald-400 bg-emerald-950/70 border border-emerald-500/30 px-3 py-1.5 rounded-full backdrop-blur-md">
                              {project.stats}
                            </span>
                          </div>

                          <div className="p-2.5 rounded-2xl bg-black/60 backdrop-blur-md border border-white/20 text-[#ea1d05] shadow-lg">
                            <IconComp className="w-5 h-5 text-white" />
                          </div>
                        </div>

                        {/* Center / Bottom: Title, Description, Tags, Action Buttons */}
                        <div className="space-y-4 max-w-2xl mt-auto">
                          <div className="space-y-1.5">
                            <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#ea1d05]">
                              {project.indexNum}. {project.tagline}
                            </span>
                            <h2 className="text-2xl lg:text-4xl font-black text-white tracking-tight leading-tight drop-shadow-md">
                              {project.title}
                            </h2>
                          </div>

                          <p className="text-xs sm:text-sm lg:text-base text-zinc-200 leading-relaxed drop-shadow-sm font-normal">
                            {project.description}
                          </p>

                          {/* Technology Tags */}
                          <div className="flex flex-wrap gap-2 pt-1">
                            {project.tags.map((tag, tIdx) => (
                              <span
                                key={tIdx}
                                className="text-[11px] font-semibold px-3 py-1 rounded-lg bg-black/70 text-zinc-200 border border-white/15 backdrop-blur-md"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>

                          {/* CTAs & Navigation Buttons in Card */}
                          <div className="pt-2 flex items-center justify-between gap-3 flex-wrap">
                            <div className="flex items-center gap-3">
                              {project.externalUrl && (
                                <a
                                  href={project.externalUrl}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold bg-[#ea1d05] hover:bg-[#ce1705] text-white shadow-lg shadow-red-600/30 active:scale-95 transition-all"
                                >
                                  <span>Visit Official Website</span>
                                  <ExternalLink className="w-3.5 h-3.5" />
                                </a>
                              )}
                              {project.githubUrl && (
                                <a
                                  href={project.githubUrl}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold bg-white/10 hover:bg-white text-white hover:text-black border border-white/20 backdrop-blur-md shadow-md active:scale-95 transition-all"
                                >
                                  <Code2 className="w-4 h-4" />
                                  <span>Open Source Code</span>
                                </a>
                              )}
                            </div>

                            {/* Card Navigation Controls */}
                            <div className="flex items-center gap-1.5 bg-black/70 p-1 rounded-xl border border-white/15 backdrop-blur-md">
                              <button
                                onClick={(e) => {
                                  e.stopPropagation();
                                  handlePrev();
                                }}
                                aria-label="Previous slide"
                                className="p-2 rounded-lg hover:bg-white/10 text-white transition-colors cursor-pointer"
                              >
                                <ChevronLeft className="w-4 h-4" />
                              </button>
                              <button
                                onClick={(e) => {
                                  e.stopPropagation();
                                  setIsPaused(!isPaused);
                                }}
                                aria-label={isPaused ? "Play slide timer" : "Pause slide timer"}
                                className="p-2 rounded-lg hover:bg-white/10 text-white transition-colors cursor-pointer"
                                title={isPaused ? "Play auto-advance" : "Pause"}
                              >
                                {isPaused ? <Play className="w-4 h-4 text-emerald-400" /> : <Pause className="w-4 h-4 text-zinc-300" />}
                              </button>
                              <button
                                onClick={(e) => {
                                  e.stopPropagation();
                                  handleNext();
                                }}
                                aria-label="Next slide"
                                className="p-2 rounded-lg hover:bg-white/10 text-white transition-colors cursor-pointer"
                              >
                                <ChevronRight className="w-4 h-4" />
                              </button>
                            </div>
                          </div>

                          {/* PROGRESS TIMER IN THE CARD (Future Processing Style) */}
                          <div className="pt-2">
                            <div className="relative w-full h-[2px] bg-white/20 rounded-full overflow-hidden">
                              <div
                                key={`timer-desk-${activeIndex}`}
                                className="h-full bg-gradient-to-r from-[#ea1d05] via-red-500 to-[#ea1d05] rounded-full shadow-[0_0_8px_#ea1d05] origin-left animate-progress-grow"
                                style={{
                                  animationDuration: `${DURATION_MS}ms`,
                                  animationPlayState: isPaused ? "paused" : "running",
                                }}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Mobile Vertical Accordion (< md screens) */}
            <div className="flex md:hidden flex-col gap-2.5 p-1 select-none overflow-hidden">
              {projects.map((project, idx) => {
                const isActive = idx === activeIndex;
                const IconComp = project.icon;

                return (
                  <div
                    key={project.id}
                    onClick={() => handleSelectSlide(idx)}
                    className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                      isActive
                        ? "border-[#ea1d05] dark:border-[#ea1d05]/60 bg-zinc-50 dark:bg-zinc-900/90 shadow-sm"
                        : "border-zinc-200 dark:border-white/10 bg-zinc-100/90 dark:bg-zinc-950/70 hover:border-zinc-300 dark:hover:border-white/20 hover:bg-zinc-200/60 dark:hover:bg-zinc-900/60"
                    }`}
                  >
                    {/* Accordion Bar Header */}
                    <div className="flex items-center justify-between p-4 cursor-pointer">
                      <div className="flex items-center gap-3">
                        <span className="text-xs font-mono font-bold text-[#ea1d05]">
                          {project.indexNum}
                        </span>
                        <span className="text-sm font-bold text-zinc-900 dark:text-white truncate max-w-[200px]">
                          {project.title}
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="p-1.5 rounded-lg bg-zinc-200 dark:bg-white/10 text-zinc-800 dark:text-white">
                          <IconComp className="w-3.5 h-3.5" />
                        </div>
                        <div className={`p-1 text-zinc-500 dark:text-white/70 transition-transform ${isActive ? "rotate-45" : ""}`}>
                          <Plus className="w-4 h-4" />
                        </div>
                      </div>
                    </div>

                    {/* Expanded Mobile Content */}
                    {isActive && (
                      <div className="p-4 pt-0 space-y-4">
                        <div className="relative aspect-[16/9] w-full rounded-xl overflow-hidden border border-zinc-200 dark:border-white/10">
                          <Image
                            src={project.image}
                            alt={project.title}
                            fill
                            className="object-cover"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                          <div className="absolute bottom-2 left-2">
                            <span className="text-[10px] font-bold text-white bg-black/80 px-2 py-0.5 rounded border border-white/20">
                              {project.client}
                            </span>
                          </div>
                        </div>

                        <p className="text-xs text-zinc-600 dark:text-zinc-300 leading-relaxed">
                          {project.description}
                        </p>

                        <div className="flex flex-wrap gap-1.5">
                          {project.tags.map((tag, tIdx) => (
                            <span
                              key={tIdx}
                              className="text-[10px] font-semibold px-2 py-0.5 rounded bg-zinc-200/80 dark:bg-white/10 text-zinc-800 dark:text-zinc-200 border border-zinc-300/80 dark:border-white/10"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>

                        <div className="flex items-center justify-between gap-2 pt-2">
                          <div className="flex items-center gap-2">
                            {project.externalUrl && (
                              <a
                                href={project.externalUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold bg-[#ea1d05] text-white shadow-sm"
                              >
                                <ExternalLink className="w-3.5 h-3.5" />
                                <span>Website</span>
                              </a>
                            )}
                            {project.githubUrl && (
                              <a
                                href={project.githubUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold bg-zinc-200 dark:bg-white/10 text-zinc-900 dark:text-white border border-zinc-300 dark:border-white/20 hover:bg-zinc-300 dark:hover:bg-white/20"
                              >
                                <Code2 className="w-3.5 h-3.5" />
                                <span>Code</span>
                              </a>
                            )}
                          </div>

                          <div className="flex items-center gap-1 bg-zinc-100 dark:bg-black/60 p-1 rounded-lg border border-zinc-200 dark:border-white/10">
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                handlePrev();
                              }}
                              aria-label="Previous slide"
                              className="p-1 text-zinc-700 dark:text-white hover:bg-zinc-200 dark:hover:bg-white/10 rounded cursor-pointer"
                            >
                              <ChevronLeft className="w-3.5 h-3.5" />
                            </button>
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                handleNext();
                              }}
                              aria-label="Next slide"
                              className="p-1 text-zinc-700 dark:text-white hover:bg-zinc-200 dark:hover:bg-white/10 rounded cursor-pointer"
                            >
                              <ChevronRight className="w-3.5 h-3.5" />
                            </button>
                          </div>
                        </div>

                        {/* Progress bar on mobile card */}
                        <div className="relative w-full h-[2px] bg-zinc-200 dark:bg-white/20 rounded-full overflow-hidden mt-2">
                          <div
                            key={`timer-mob-${activeIndex}`}
                            className="h-full bg-[#ea1d05] rounded-full shadow-[0_0_6px_#ea1d05] origin-left animate-progress-grow"
                            style={{
                              animationDuration: `${DURATION_MS}ms`,
                              animationPlayState: isPaused ? "paused" : "running",
                            }}
                          />
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* IMPACT METRICS STRIP */}
        {/* ========================================================================= */}
        <section className="px-4 sm:px-6 lg:px-8 max-w-[1440px] mx-auto mt-12 sm:mt-16">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 p-6 sm:p-8 rounded-3xl bg-zinc-50/80 dark:bg-[#09090b]/80 border border-zinc-200 dark:border-white/10 backdrop-blur-md">
            {[
              { label: "Nations Deployed", value: "12+", sub: "Carrier MMSC & Switch Cores" },
              { label: "Engineering Heritage", value: "25+", sub: "Years in Systems Architecture" },
              { label: "Daily Message Throughput", value: "100M+", sub: "Multi-Carrier Transactions" },
              { label: "Global Standards", value: "100%", sub: "GSMA & 3GPP Conformance" },
            ].map((metric, mIdx) => (
              <div key={mIdx} className="space-y-1 sm:space-y-1.5 p-2">
                <span className="text-2xl sm:text-4xl font-black tracking-tight text-[#ea1d05] dark:text-[#ea1d05]">
                  {metric.value}
                </span>
                <p className="text-xs sm:text-sm font-bold text-zinc-900 dark:text-white">
                  {metric.label}
                </p>
                <p className="text-[11px] text-zinc-500 dark:text-zinc-400 font-medium">
                  {metric.sub}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ========================================================================= */}
        {/* CORE ARCHITECTURAL CAPABILITIES */}
        {/* ========================================================================= */}
        <section className="mt-20 sm:mt-24 px-4 sm:px-6 lg:px-8 max-w-[1440px] mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
            <div className="space-y-2 max-w-2xl">
              <h2 className="text-2xl sm:text-4xl font-black text-zinc-950 dark:text-white tracking-tight">
                Built for Carrier Reliability & Mission-Critical Demands
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 max-w-md">
              Every engine we build is grounded in low-level systems programming, protocol compliance, and carrier interoperability.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Carrier Protocol Stacks",
                desc: "Native implementations of MM4, MM7, SMPP, SIP, and SS7 signaling channels engineered for ultra-high concurrency.",
                icon: Radio,
                badge: "Telecom Infrastructure"
              },
              {
                title: "C & Linux Low-Level Cores",
                desc: "Multi-threaded, lock-free routing kernels with minimal memory footprint and zero queue starvation under load.",
                icon: Cpu,
                badge: "Kernel Engineering"
              },
              {
                title: "Open Source Heritage",
                desc: "Pioneering maintainers of Mbuni, Njiwa, and MSITU repositories adopted globally across tier-1 mobile operators.",
                icon: Code2,
                badge: "Global Open Source"
              },
              {
                title: "Precision IoT & Telemetry",
                desc: "Centimeter RTK GPS mesh surveying and GSMA SGP.02 Over-The-Air (OTA) remote SIM orchestration.",
                icon: TreePine,
                badge: "IoT & Precision"
              }
            ].map((feat, fIdx) => {
              const Icon = feat.icon;
              return (
                <div 
                  key={fIdx} 
                  className="p-6 rounded-3xl bg-zinc-50 dark:bg-[#101014] border border-zinc-200 dark:border-white/10 flex flex-col justify-between space-y-4 hover:border-[#ea1d05]/50 transition-all duration-300 group"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="p-2.5 rounded-2xl bg-[#ea1d05]/10 text-[#ea1d05] border border-[#ea1d05]/20 group-hover:bg-[#ea1d05] group-hover:text-white transition-colors duration-300">
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className="text-[10px] font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
                        {feat.badge}
                      </span>
                    </div>

                    <h3 className="text-base sm:text-lg font-bold text-zinc-950 dark:text-white">
                      {feat.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                      {feat.desc}
                    </p>
                  </div>

                  <div className="pt-2 flex items-center gap-1.5 text-xs font-bold text-[#ea1d05]">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>Carrier Tested</span>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* ========================================================================= */}
        {/* ENGINEERING LIFECYCLE / HOW WE DELIVER */}
        {/* ========================================================================= */}
        <section className="mt-20 sm:mt-24 px-4 sm:px-6 lg:px-8 max-w-[1440px] mx-auto">
          <div className="p-8 sm:p-12 rounded-3xl bg-zinc-50/80 dark:bg-[#09090b]/80 border border-zinc-200 dark:border-white/10">
            <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
              <span className="text-xs font-bold uppercase tracking-widest text-[#ea1d05] bg-[#ea1d05]/10 px-3 py-1 rounded-full border border-[#ea1d05]/20">
                Delivery Methodology
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-zinc-950 dark:text-white tracking-tight">
                How Digital Solutions Engineers & Delivers
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
              {[
                {
                  step: "01",
                  title: "Protocol & Architecture Design",
                  desc: "Comprehensive specification mapping, RFC protocol compliance checks, and lock-free thread pipeline modeling."
                },
                {
                  step: "02",
                  title: "High-Performance Implementation",
                  desc: "Core C/Linux engine coding, hardware driver optimization, and stress testing against multi-million message queues."
                },
                {
                  step: "03",
                  title: "Carrier Interoperability & Deployment",
                  desc: "Live mobile carrier interconnect verification, SMPP/MM7 gateway staging, and 24/7 mission-critical rollout."
                }
              ].map((item, sIdx) => (
                <div key={sIdx} className="space-y-3 relative">
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-mono font-black text-[#ea1d05] bg-[#ea1d05]/10 px-2.5 py-1 rounded-lg border border-[#ea1d05]/20">
                      {item.step}
                    </span>
                    <h3 className="text-base sm:text-lg font-bold text-zinc-950 dark:text-white">
                      {item.title}
                    </h3>
                  </div>
                  <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed pl-1">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* DIRECT CONSULTATION CTA BANNER */}
        {/* ========================================================================= */}
        <section className="mt-28 sm:mt-36 mb-28 sm:mb-44 px-4 sm:px-6 lg:px-8 max-w-[1440px] mx-auto">
          <div className="relative p-8 sm:p-12 rounded-3xl overflow-hidden bg-gradient-to-b from-zinc-900 to-black text-white border border-white/10 shadow-2xl">
            {/* Ambient Red Glow Background */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-[#ea1d05]/15 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-red-600/10 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-8 max-w-5xl mx-auto">
              <div className="space-y-3 max-w-2xl">
                <div>
                  <span className="inline-block text-xs font-bold uppercase tracking-widest text-[#ea1d05] bg-[#ea1d05]/10 px-3.5 py-1.5 rounded-full border border-[#ea1d05]/30">
                    Let&apos;s Build Together
                  </span>
                </div>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight">
                  Need Bespoke Telecom Core or Software Architecture?
                </h2>
                <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed font-normal">
                  Our principal software architects and telecom engineers are available for custom switch engineering, protocol integration, and mission-critical enterprise systems.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 shrink-0">
                <Link
                  href="/contact-us"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-[#ea1d05] hover:bg-[#ce1705] text-white font-bold text-xs sm:text-sm tracking-wider uppercase transition-all shadow-lg shadow-red-600/30 active:scale-95 cursor-pointer"
                >
                  <span>Request Consultation</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <a
                  href="https://github.com/dsmagicug"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-full bg-white/10 hover:bg-white text-white hover:text-black border border-white/20 font-bold text-xs sm:text-sm tracking-wider uppercase transition-all active:scale-95 cursor-pointer backdrop-blur-md"
                >
                  <Code2 className="w-4 h-4" />
                  <span>GitHub Org</span>
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <div className="relative z-20">
        <Footer />
      </div>
    </div>
  );
}
