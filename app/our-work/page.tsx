"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Card3D from "@/components/Card3D";
import { ExternalLink, CheckCircle2, ArrowRight } from "lucide-react";

export default function OurWorkPage() {
  const [filter, setFilter] = useState("all");

  const projects = [
    {
      title: "Mbuni MMSC High-Throughput Carrier Switch",
      category: "telecom",
      client: "Global Tier-1 Mobile Operators",
      description:
        "Open-source MMS Center and WAP Gateway engineered by DSL, powering MMS routing and VAS across tier-1 mobile operators across 12+ nations.",
      image: "/images/carrier_deployment.jpg",
      tags: ["Carrier-Grade", "MMS/WAP", "C / Linux", "High Throughput"],
    },
    {
      title: "Njiwa GSMA eSIM Remote SIM Provisioning",
      category: "telecom",
      client: "Telcos & IoT Device Manufacturers",
      description:
        "Next-generation GSMA SGP.02/SGP.22 compliant eSIM RSP platform offering zero-touch Over-The-Air profile orchestration for connected vehicles and smartphones.",
      image: "/images/server_rack.jpg",
      tags: ["GSMA SGP.22", "SM-DP+", "eSIM OTA", "Cryptographic HSM"],
    },
    {
      title: "UCC National Numbering Information System (NNIS)",
      category: "enterprise",
      client: "Uganda Communications Commission",
      description:
        "National telecom regulator platform managing national numbering plans, short codes, and telecom operator spectrum allocations.",
      image: "/images/about_us.jpg",
      tags: ["Government", "Telecom Regulation", "PostgreSQL", "Next.js"],
    },
    {
      title: "NSSF Uganda Smart Financial Transaction Portal",
      category: "enterprise",
      client: "National Social Security Fund (NSSF)",
      description:
        "High-security financial member contribution and clearance portal handling multi-billion shilling annual transaction volumes.",
      image: "/images/tech_lab.jpg",
      tags: ["Fintech", "Security", "High Availability", "Enterprise"],
    },
  ];

  const filteredProjects =
    filter === "all"
      ? projects
      : projects.filter((p) => p.category === filter);

  return (
    <div className="min-h-screen bg-white dark:bg-[#000000] text-zinc-900 dark:text-white selection:bg-[#ea1d05] selection:text-white flex flex-col justify-between transition-colors duration-300 relative overflow-hidden">
      <Navbar />

      <main className="flex-grow pt-32 relative z-20">
        {/* Header */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-zinc-100/70 dark:bg-[#09090b]/70 backdrop-blur-sm transition-colors duration-300">
          <div className="max-w-7xl mx-auto text-center space-y-4">
            <span className="text-xs font-bold uppercase tracking-widest text-[#ea1d05] bg-[#ea1d05]/10 px-3.5 py-1.5 rounded-full border border-[#ea1d05]/30">
              Proven Track Record
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-zinc-950 dark:text-white tracking-tight">
              Flagship <span className="text-gradient-red">Deployments</span> & Case Studies
            </h1>
            <p className="max-w-3xl mx-auto text-base sm:text-lg text-zinc-600 dark:text-zinc-300">
              Explore our landmark deployments across global telecom operators, government regulatory authorities, and financial institutions.
            </p>
          </div>
        </section>

        {/* Portfolio Showcase Grid */}
        <section className="py-24 px-4 sm:px-6 lg:px-8 relative transition-colors duration-300">
          <div className="max-w-7xl mx-auto">
            {/* Filter Tabs */}
            <div className="flex justify-center gap-3 mb-16 flex-wrap">
              {["all", "telecom", "enterprise"].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setFilter(tab)}
                  className={`px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 ${
                    filter === tab
                      ? "bg-[#ea1d05] text-white shadow-lg shadow-red-600/30"
                      : "bg-zinc-100/90 dark:bg-[#121215]/90 text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white border border-zinc-200 dark:border-white/10"
                  }`}
                >
                  {tab === "all" ? "All Deployments" : tab === "telecom" ? "Telecom & Carrier" : "Enterprise Systems"}
                </button>
              ))}
            </div>

            {/* Project Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              {filteredProjects.map((project, idx) => (
                <Card3D key={idx} glowColor="red" className="p-0 overflow-hidden flex flex-col justify-between">
                  <div className="relative h-64 w-full">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/40 to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4">
                      <span className="text-[11px] font-bold uppercase tracking-wider text-[#ea1d05] bg-black/70 px-2.5 py-1 rounded backdrop-blur-md">
                        {project.client}
                      </span>
                      <h3 className="text-xl font-bold text-white mt-2">
                        {project.title}
                      </h3>
                    </div>
                  </div>

                  <div className="p-6 space-y-4">
                    <p className="text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2 pt-2">
                      {project.tags.map((tag, tIdx) => (
                        <span
                          key={tIdx}
                          className="text-xs px-2.5 py-1 rounded-md bg-zinc-100 dark:bg-white/5 text-zinc-700 dark:text-zinc-300 border border-zinc-200 dark:border-white/10"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </Card3D>
              ))}
            </div>

            {/* Direct Consultation Link */}
            <div className="p-10 rounded-3xl bg-zinc-50/90 dark:bg-[#09090b]/90 border border-zinc-200 dark:border-white/10 text-center max-w-3xl mx-auto shadow-xl backdrop-blur-md">
              <h3 className="text-2xl font-bold text-zinc-900 dark:text-white mb-3">
                Have a Complex Telecom or Software Challenge?
              </h3>
              <p className="text-sm text-zinc-600 dark:text-zinc-300 mb-6">
                Our principal engineers consult on carrier protocol design, GSMA eSIM deployments, and national infrastructure.
              </p>
              <Link
                href="/contact-us"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#ea1d05] hover:bg-[#ce1705] text-white font-bold text-sm tracking-wider uppercase transition-all shadow-lg shadow-red-600/30"
              >
                <span>Request Technical Consultation</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
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
