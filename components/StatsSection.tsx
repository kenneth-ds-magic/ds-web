"use client";

import React from "react";
import { Award, Globe2, ShieldCheck, TrendingUp } from "lucide-react";

const stats = [
  {
    number: "25+",
    label: "Years of Excellence",
    description: "Incorporated in 1998, pioneering telecom and software engineering across East Africa.",
    icon: Award,
    color: "text-[#ea1d05]",
    borderColor: "border-[#ea1d05]/30",
  },
  {
    number: "100M+",
    label: "Messages & Transactions",
    description: "Carrier gateways processing massive daily MMS, SMS, and data transmissions worldwide.",
    icon: TrendingUp,
    color: "text-zinc-900 dark:text-white",
    borderColor: "border-zinc-300 dark:border-white/20",
  },
  {
    number: "1st",
    label: "Global eSIM RSP Pioneer",
    description: "Engineered Njiwa: the world's first open-source GSMA SGP.02 eSIM provisioning suite.",
    icon: Globe2,
    color: "text-[#eb1c04]",
    borderColor: "border-[#eb1c04]/30",
  },
  {
    number: "99.99%",
    label: "Carrier Uptime SLA",
    description: "Fault-tolerant systems engineered for telecom operators and critical enterprise infrastructure.",
    icon: ShieldCheck,
    color: "text-zinc-900 dark:text-white",
    borderColor: "border-zinc-300 dark:border-white/20",
  },
];

export default function StatsSection() {
  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-zinc-100/75 dark:bg-[#09090b]/75 border-y border-zinc-200/80 dark:border-white/10 backdrop-blur-sm transition-colors duration-300 overflow-hidden">
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-72 h-72 bg-[#ea1d05]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {stats.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className={`p-6 sm:p-8 rounded-2xl bg-white dark:bg-[#121215]/80 backdrop-blur-md border ${item.borderColor} hover:bg-zinc-50 dark:hover:bg-[#18181b] transition-all duration-300 shadow-lg dark:shadow-xl group`}
              >
                <div className="flex items-center justify-between mb-4">
                  <span className={`text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight ${item.color}`}>
                    {item.number}
                  </span>
                  <div className="p-2.5 rounded-xl bg-zinc-100 dark:bg-white/5 group-hover:scale-110 transition-transform">
                    <Icon className={`w-5 h-5 ${item.color}`} />
                  </div>
                </div>
                <h3 className="text-base font-bold text-zinc-900 dark:text-white mb-2">
                  {item.label}
                </h3>
                <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
