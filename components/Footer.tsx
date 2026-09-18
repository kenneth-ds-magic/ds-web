"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin, ArrowUpRight, ShieldCheck } from "lucide-react";
import FooterNetworkCanvas from "./FooterNetworkCanvas";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-zinc-100/80 dark:bg-[#000000]/80 backdrop-blur-md border-t border-zinc-200 dark:border-white/10 text-zinc-700 dark:text-zinc-300 pt-16 pb-12 transition-colors duration-300 overflow-hidden">
      {/* 3D Digitization & Networking Nodes Web Canvas */}
      <FooterNetworkCanvas />

      {/* Background ambient red glow & subtle grid */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-32 bg-[#ea1d05]/10 blur-[100px] pointer-events-none z-0" />
      <div className="absolute inset-0 bg-grid-pattern opacity-10 dark:opacity-15 pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-zinc-300 dark:border-zinc-800">
          {/* Col 1: Brand & Identity */}
          <div className="lg:col-span-4 space-y-4">
            <Link href="/" className="inline-block">
              <div className="relative h-12 w-48">
                <Image
                  src="/images/log-no-bg.png"
                  alt="Digital Solutions Logo"
                  fill
                  className="object-contain"
                />
              </div>
            </Link>
            <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed max-w-sm">
              Digital Solutions Ltd (DSL) is an elite research and development house incorporated in Uganda in 1998, specializing in Mobile, Web-based, and Carrier Telecom architectures.
            </p>
            <div className="pt-2 flex items-center gap-2 text-xs text-[#ea1d05] font-semibold">
              <ShieldCheck className="w-4 h-4 text-[#ea1d05]" />
              <span>Certified Telecommunications & Systems Engineering</span>
            </div>
          </div>

          {/* Col 2: Vision & Mission */}
          <div className="lg:col-span-3 space-y-5">
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#ea1d05] mb-2">
                Vision
              </h4>
              <p className="text-xs text-zinc-600 dark:text-zinc-300 leading-relaxed">
                Our single vision in respect to application and systems development and deployment is to enhance technology experience by developing easy-to-use, relevant application.
              </p>
            </div>
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#ea1d05] mb-2">
                Mission
              </h4>
              <p className="text-xs text-zinc-600 dark:text-zinc-300 leading-relaxed">
                To promote the use of computing as an aid to business productivity, and also to be one of the leading IT solutions providers in the East and Central Africa region.
              </p>
            </div>
          </div>

          {/* Col 3: Explore Links */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-900 dark:text-white mb-4">
              Explore
            </h4>
            <ul className="space-y-2.5 text-xs font-medium">
              <li>
                <Link href="/" className="hover:text-[#ea1d05] transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-[#ea1d05] transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/our-work" className="hover:text-[#ea1d05] transition-colors">
                  Our Work & Products
                </Link>
              </li>
              <li>
                <Link href="/contact-us" className="hover:text-[#ea1d05] transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <a
                  href="http://mbuni.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-zinc-600 dark:text-zinc-400 hover:text-[#ea1d05] transition-colors"
                >
                  <span>Mbuni MMS</span>
                  <ArrowUpRight className="w-3 h-3" />
                </a>
              </li>
              <li>
                <a
                  href="http://njiwa.io"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-zinc-600 dark:text-zinc-400 hover:text-[#ea1d05] transition-colors"
                >
                  <span>Njiwa eSIM</span>
                  <ArrowUpRight className="w-3 h-3" />
                </a>
              </li>
              <li>
                <a
                  href="https://msitu.tech/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-zinc-600 dark:text-zinc-400 hover:text-[#ea1d05] transition-colors"
                >
                  <span>MSITU</span>
                  <ArrowUpRight className="w-3 h-3" />
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Have a Question? / Contact Info */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-900 dark:text-white mb-4">
              Have a Question?
            </h4>
            <ul className="space-y-3.5 text-xs text-zinc-700 dark:text-zinc-300">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#ea1d05] shrink-0 mt-0.5" />
                <span>Plot 3 Convent Close, Bugonga, Entebbe</span>
              </li>
              <li className="flex items-start gap-2.5">
                <Mail className="w-4 h-4 text-[#ea1d05] shrink-0 mt-0.5" />
                <div>
                  <a href="mailto:info@dsmagic.com" className="hover:text-[#ea1d05] transition-colors font-semibold">
                    info@dsmagic.com
                  </a>
                  <p className="text-[11px] text-zinc-500">P.O. Box 236 Kampala, Uganda</p>
                </div>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#ea1d05] shrink-0" />
                <a href="tel:+256752707743" className="hover:text-[#ea1d05] transition-colors font-semibold">
                  +256-752-707743
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500 dark:text-zinc-500">
          <p className="text-center sm:text-left">
            Digital Solutions is a registered business name. Copyright &copy; 1998 - {currentYear}. All rights reserved.
          </p>
          <div className="flex items-center gap-4 font-medium">
            <Link href="/about" className="hover:text-zinc-700 dark:hover:text-zinc-300 transition-colors">
              Terms & Privacy
            </Link>
            <span>•</span>
            <Link href="/contact-us" className="hover:text-zinc-700 dark:hover:text-zinc-300 transition-colors">
              Support
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
