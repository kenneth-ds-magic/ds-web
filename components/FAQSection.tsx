"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ChevronDown, HelpCircle, CheckCircle2, ArrowRight } from "lucide-react";
import Link from "next/link";

interface FAQItem {
  question: string;
  answers: string[];
}

const faqs: FAQItem[] = [
  {
    question: "How can Digital Solutions help your business?",
    answers: [
      "We focus on finding the best solution tailored specifically to our customers' operational needs.",
      "Each problem is treated as a unique challenge for which we seek the optimal architecture in close collaboration with your technical team.",
      "Our decisive advantage is our mastery of computing technology at a fundamental level (from OS kernel and carrier signaling up to modern web frameworks). We select and exploit the best technology for the job.",
    ],
  },
  {
    question: "Will Digital Technology from DSL boost my business?",
    answers: [
      "Our state-of-the-art solutions grant your business a significant competitive edge because systems are carefully tailored by our expert developers rather than restricted to off-the-shelf templates.",
      "We deliver a complete package that solves what you want immediately while architecting what you need for future scale.",
      "We guarantee robust uptime, automated failovers, and direct engineering access for mission-critical operations.",
    ],
  },
  {
    question: "What makes DSL's telecommunication gateways different?",
    answers: [
      "DSL has built world-renowned open-source and commercial engines like Mbuni (MMS Gateway) and Njiwa (world's 1st open-source GSMA eSIM RSP manager).",
      "Our systems are written in high-performance compiled languages (C/C++) with multi-threaded routing cores capable of handling tens of thousands of simultaneous telecom transactions per second.",
      "We support direct SMSC, MMSC, SMPP, USSD, and SIP trunking without reliance on expensive third-party middleware.",
    ],
  },
  {
    question: "Can you build custom bespoke software for unique industry requirements?",
    answers: [
      "Yes. Customers frequently approach DSL with complex IT problems that cannot be solved with standard software.",
      "We build multi-platform client/server systems, internet applications, financial transaction pipelines, and secure IoT management suites.",
    ],
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="relative py-28 px-4 sm:px-6 lg:px-8 bg-white/75 dark:bg-[#000000]/75 backdrop-blur-sm transition-colors duration-300 overflow-hidden">
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-[#ea1d05]/5 dark:bg-[#ea1d05]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Heading & Visual Showcase */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold bg-[#ea1d05]/10 text-[#ea1d05] border border-[#ea1d05]/30 mb-4 shadow-sm">
                <HelpCircle className="w-3.5 h-3.5 text-[#ea1d05]" />
                <span>Frequently Asked Questions</span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-zinc-900 dark:text-white tracking-tight leading-tight">
                Clear Answers to Your <span className="text-gradient-red">Technology</span> Questions
              </h2>
              <p className="mt-4 text-sm sm:text-base text-zinc-600 dark:text-zinc-300 leading-relaxed">
                Discover why leading telecom operators, financial institutions, and fast-growing enterprises rely on Digital Solutions Ltd for their core digital infrastructure.
              </p>
            </div>

            {/* Visual Image Grid from DSL */}
            <div className="relative rounded-3xl overflow-hidden border border-zinc-200 dark:border-white/10 p-2 bg-zinc-50 dark:bg-[#09090b]/80 shadow-xl dark:shadow-2xl backdrop-blur-md">
              <div className="relative h-64 sm:h-72 w-full rounded-2xl overflow-hidden">
                <Image
                  src="/images/about.jpg"
                  alt="Digital Solutions Technology Engineering"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-white/90 dark:bg-[#09090b]/90 backdrop-blur-md border border-zinc-200 dark:border-white/10 shadow-lg">
                  <p className="text-xs font-bold text-zinc-900 dark:text-white">
                    &ldquo;Our single vision is to enhance technology experience by developing easy-to-use, relevant applications.&rdquo;
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-2 mt-2">
                <div className="relative h-28 rounded-xl overflow-hidden">
                  <Image
                    src="/images/about-1.jpg"
                    alt="DSL Team Working"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative h-28 rounded-xl overflow-hidden">
                  <Image
                    src="/images/about-2.jpg"
                    alt="DSL Hardware and Systems"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-zinc-100 dark:bg-gradient-to-r dark:from-[#ea1d05]/20 dark:to-[#121215] border border-zinc-300 dark:border-[#ea1d05]/30">
              <h4 className="text-sm font-bold text-zinc-900 dark:text-white mb-1">Have a specific question?</h4>
              <p className="text-xs text-zinc-600 dark:text-zinc-300 mb-4">
                Our principal software architects are available for direct technical consultations.
              </p>
              <Link
                href="/contact-us"
                className="inline-flex items-center gap-2 text-xs font-bold text-[#ea1d05] hover:underline transition-colors"
              >
                <span>Contact Our Architects</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          {/* Right Column: Interactive Accordion */}
          <div className="lg:col-span-7 space-y-4">
            {faqs.map((faq, idx) => {
              const isOpen = openIndex === idx;
              return (
                <div
                  key={idx}
                  className={`rounded-2xl transition-all duration-300 border overflow-hidden ${
                    isOpen
                      ? "bg-white dark:bg-[#121215] border-[#ea1d05] shadow-lg dark:shadow-[0_10px_30px_rgba(234,29,5,0.25)]"
                      : "bg-zinc-50 dark:bg-[#09090b] border-zinc-200 dark:border-white/10 hover:border-zinc-300 dark:hover:border-white/20"
                  }`}
                >
                  <button
                    onClick={() => toggleFAQ(idx)}
                    className="w-full flex items-center justify-between p-6 text-left cursor-pointer transition-colors"
                  >
                    <span className="text-base sm:text-lg font-bold text-zinc-900 dark:text-white pr-4">
                      {faq.question}
                    </span>
                    <div
                      className={`p-2 rounded-xl border transition-all duration-300 shrink-0 ${
                        isOpen
                          ? "bg-[#ea1d05] border-[#ea1d05] text-white rotate-180"
                          : "bg-zinc-200 dark:bg-white/5 border-zinc-300 dark:border-white/10 text-zinc-700 dark:text-zinc-400"
                      }`}
                    >
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </button>

                  {isOpen && (
                    <div className="px-6 pb-6 pt-2 border-t border-zinc-200 dark:border-zinc-800 text-zinc-700 dark:text-zinc-200 space-y-3 text-sm leading-relaxed animate-in fade-in duration-300">
                      {faq.answers.map((ans, aIdx) => (
                        <div key={aIdx} className="flex items-start gap-3">
                          <CheckCircle2 className="w-4 h-4 text-[#ea1d05] shrink-0 mt-0.5" />
                          <span>{ans}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
