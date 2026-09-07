"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Menu, 
  X, 
  ArrowRight
} from "lucide-react";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 25);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Our Work", href: "/our-work" },
    { name: "Contact Us", href: "/contact-us" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      {/* Top Header: Red in Light Mode, Dark in Dark Mode */}
      <div 
        className={`w-full bg-[#ea1d05] dark:bg-[#000000]/95 text-white dark:text-zinc-300 border-b border-[#ce1705] dark:border-white/10 backdrop-blur-md transition-all duration-300 ${
          isScrolled ? "-translate-y-full opacity-0 pointer-events-none h-0 py-0 overflow-hidden" : "translate-y-0 opacity-100"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2 flex flex-wrap items-center justify-between text-xs font-medium">
          {/* Contact Details: Phone, Email & Location Only */}
          <div className="flex flex-wrap items-center gap-4 sm:gap-6 w-full justify-center sm:justify-start">
            {/* Phone */}
            <a 
              href="tel:+256752707743" 
              className="flex items-center gap-1.5 hover:text-white/80 dark:hover:text-[#ea1d05] transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-white dark:text-[#ea1d05]" />
              <span>+256-752-707743</span>
            </a>

            <span className="hidden sm:inline text-white/40 dark:text-zinc-700">•</span>

            {/* Email */}
            <a 
              href="mailto:info@dsmagic.com" 
              className="flex items-center gap-1.5 hover:text-white/80 dark:hover:text-[#ea1d05] transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-white dark:text-[#ea1d05]" />
              <span>info@dsmagic.com</span>
            </a>

            <span className="hidden md:inline text-white/40 dark:text-zinc-700">•</span>

            {/* Address */}
            <div className="hidden md:flex items-center gap-1.5 text-white/95 dark:text-zinc-400">
              <MapPin className="w-3.5 h-3.5 text-white dark:text-[#ea1d05]" />
              <span>Plot 3 Convent Close, Bugonga, Entebbe</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className={`transition-all duration-300 ${
        isScrolled 
          ? "bg-white/95 dark:bg-[#09090b]/95 backdrop-blur-xl border-b border-zinc-200 dark:border-white/10 shadow-[0_10px_30px_rgba(0,0,0,0.06)] dark:shadow-[0_10px_30px_rgba(0,0,0,0.8)] py-3" 
          : "bg-transparent py-4 sm:py-5"
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 group">
              <div className="relative h-10 w-36 sm:h-12 sm:w-44 transition-transform duration-300 group-hover:scale-105">
                <Image
                  src="/images/log-no-bg.png"
                  alt="Digital Solutions Ltd"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <div className="hidden md:flex items-center space-x-1 lg:space-x-2 bg-zinc-100/90 dark:bg-[#121215]/90 backdrop-blur-md px-4 py-1.5 rounded-full border border-zinc-300 dark:border-white/10 shadow-sm">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${
                      isActive
                        ? "bg-[#ea1d05] text-white shadow-[0_0_20px_rgba(234,29,5,0.5)]"
                        : "text-zinc-700 dark:text-zinc-300 hover:text-black dark:hover:text-white hover:bg-black/5 dark:hover:bg-white/10"
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}
            </div>

            {/* Right Side: Theme Toggle & Action Button */}
            <div className="hidden md:flex items-center space-x-3">
              <ThemeToggle />

              <Link
                href="/contact-us"
                className="relative inline-flex items-center justify-center p-0.5 overflow-hidden text-xs font-bold rounded-full group bg-gradient-to-r from-[#ea1d05] via-[#eb1c04] to-[#e3200b] hover:shadow-[0_0_25px_rgba(234,29,5,0.45)] transition-all duration-300"
              >
                <span className="relative px-5 py-2.5 transition-all ease-in duration-200 bg-white dark:bg-[#000000] rounded-full group-hover:bg-opacity-0 flex items-center gap-2 text-zinc-900 dark:text-white group-hover:text-white">
                  <span>Consult With Us</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#ea1d05] group-hover:text-white group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
            </div>

            {/* Mobile Actions: Theme Toggle + Menu */}
            <div className="flex items-center gap-2 md:hidden">
              <ThemeToggle />
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-xl bg-zinc-100 dark:bg-[#121215] text-zinc-800 dark:text-white border border-zinc-200 dark:border-white/15"
                aria-label="Toggle Navigation"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white/98 dark:bg-[#09090b]/98 backdrop-blur-2xl border-b border-zinc-200 dark:border-white/10 px-4 pt-4 pb-6 mt-3 space-y-3 animate-in fade-in slide-in-from-top-4 duration-300 shadow-xl">
            <div className="flex flex-col space-y-2">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`px-4 py-3 rounded-xl text-base font-semibold transition-all ${
                      isActive
                        ? "bg-[#ea1d05] text-white shadow-md"
                        : "text-zinc-700 dark:text-zinc-300 hover:bg-black/5 dark:hover:bg-white/10 hover:text-black dark:hover:text-white"
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}
            </div>
            <div className="pt-4 border-t border-zinc-200 dark:border-zinc-800 flex flex-col gap-3">
              <Link
                href="/contact-us"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-[#ea1d05] hover:bg-[#ce1705] text-white font-bold text-sm shadow-lg shadow-red-600/30"
              >
                <span>Initiate Project</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <div className="text-xs text-zinc-500 dark:text-zinc-400 space-y-1.5 px-2">
                <p className="flex items-center gap-2">
                  <Phone className="w-3.5 h-3.5 text-[#ea1d05]" /> +256-752-707743
                </p>
                <p className="flex items-center gap-2">
                  <Mail className="w-3.5 h-3.5 text-[#ea1d05]" /> info@dsmagic.com
                </p>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
