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
  ArrowRight,
  Home,
  Building2,
  Cpu,
  MessageSquare,
  ChevronRight
} from "lucide-react";
import { motion, AnimatePresence, type Variants } from "framer-motion";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [mobileMenuOpen]);

  // Close menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  const navLinks = [
    { 
      name: "Home", 
      href: "/", 
      icon: Home,
      desc: "Overview & Telecom Engines" 
    },
    { 
      name: "About Us", 
      href: "/about", 
      icon: Building2,
      desc: "Legacy, Leadership & R&D" 
    },
    { 
      name: "Our Work", 
      href: "/our-work", 
      icon: Cpu,
      desc: "Gateways, Case Studies & Core" 
    },
    { 
      name: "Contact Us", 
      href: "/contact-us", 
      icon: MessageSquare,
      desc: "Direct Engineering Consultation" 
    },
  ];

  const drawerVariants: Variants = {
    closed: {
      x: "100%",
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 35,
      },
    },
    open: {
      x: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30,
        staggerChildren: 0.07,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    closed: { opacity: 0, x: 25 },
    open: { opacity: 1, x: 0, transition: { type: "spring", stiffness: 300, damping: 25 } },
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      {/* Top Header: Contact Bar with smooth height collapse */}
      <div 
        className={`w-full overflow-hidden transition-all duration-300 ease-in-out ${
          isScrolled ? "max-h-0 opacity-0 pointer-events-none" : "max-h-20 opacity-100"
        }`}
      >
        <div className="w-full bg-[#ea1d05] dark:bg-[#000000]/95 text-white dark:text-zinc-300 border-b border-[#ce1705] dark:border-white/10 backdrop-blur-md">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2 flex flex-wrap items-center justify-between text-xs font-medium">
            {/* Contact Details */}
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
      </div>

      {/* Main Sticky Navbar */}
      <motion.nav 
        initial={false}
        animate={{
          backgroundColor: isScrolled 
            ? "rgba(255, 255, 255, 0.92)" 
            : "rgba(255, 255, 255, 0)",
          borderBottomColor: isScrolled
            ? "rgba(228, 228, 231, 0.8)"
            : "rgba(255, 255, 255, 0)",
        }}
        className={`w-full transition-all duration-300 ${
          isScrolled 
            ? "dark:!bg-[#09090b]/92 backdrop-blur-xl dark:!border-white/10 border-b shadow-[0_10px_30px_rgba(0,0,0,0.05)] dark:shadow-[0_10px_30px_rgba(0,0,0,0.8)] py-3" 
            : "py-4 sm:py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo with smooth spring hover */}
            <Link href="/" className="flex items-center gap-3 group">
              <motion.div 
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 400, damping: 20 }}
                className="relative h-10 w-36 sm:h-12 sm:w-44"
              >
                <Image
                  src="/images/log-no-bg.png"
                  alt="Digital Solutions Ltd"
                  fill
                  className="object-contain"
                  priority
                />
              </motion.div>
            </Link>

            {/* Desktop Navigation Links with Smooth Morphing Spring Pill */}
            <div 
              onMouseLeave={() => setHoveredIndex(null)}
              className="hidden md:flex items-center space-x-1 lg:space-x-1.5 px-3 py-1.5 relative"
            >
              {navLinks.map((link, idx) => {
                const isActive = pathname === link.href;
                const isHovered = hoveredIndex === idx;

                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    onMouseEnter={() => setHoveredIndex(idx)}
                    className={`relative px-4 py-2 rounded-full text-sm font-semibold transition-colors duration-200 z-10 select-none ${
                      isActive
                        ? "text-white font-bold"
                        : "text-zinc-700 dark:text-zinc-300 hover:text-zinc-950 dark:hover:text-white"
                    }`}
                  >
                    {/* Hover Floating Glow Backdrop */}
                    {isHovered && !isActive && (
                      <motion.div
                        layoutId="navHoverPill"
                        transition={{ type: "spring", stiffness: 350, damping: 25 }}
                        className="absolute inset-0 rounded-full bg-zinc-200/80 dark:bg-white/10 -z-10"
                      />
                    )}

                    {/* Active Route Pill with Red Neon Glow */}
                    {isActive && (
                      <motion.div
                        layoutId="navActivePill"
                        transition={{ type: "spring", stiffness: 380, damping: 28 }}
                        className="absolute inset-0 rounded-full bg-[#ea1d05] shadow-[0_0_20px_rgba(234,29,5,0.45)] -z-10"
                      />
                    )}

                    <span>{link.name}</span>
                  </Link>
                );
              })}
            </div>

            {/* Right Side: Theme Toggle & Animated Action Button */}
            <div className="hidden md:flex items-center space-x-3">
              <ThemeToggle />

              <Link href="/contact-us">
                <motion.div
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.96 }}
                  transition={{ type: "spring", stiffness: 400, damping: 22 }}
                  className="relative inline-flex items-center justify-center p-0.5 overflow-hidden text-xs font-bold rounded-full group bg-gradient-to-r from-[#ea1d05] via-[#eb1c04] to-[#e3200b] shadow-md hover:shadow-[0_0_25px_rgba(234,29,5,0.45)] transition-shadow duration-300"
                >
                  <span className="relative px-5 py-2.5 transition-all ease-in duration-200 bg-white dark:bg-[#000000] rounded-full group-hover:bg-opacity-0 flex items-center gap-2 text-zinc-900 dark:text-white group-hover:text-white">
                    <span>Consult With Us</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#ea1d05] group-hover:text-white group-hover:translate-x-1 transition-transform" />
                  </span>
                </motion.div>
              </Link>
            </div>

            {/* Mobile Actions: Theme Toggle + Animated Menu Button */}
            <div className="flex items-center gap-2.5 md:hidden">
              <ThemeToggle />
              <motion.button
                whileTap={{ scale: 0.92 }}
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className={`relative p-2.5 rounded-xl border transition-all duration-300 cursor-pointer ${
                  mobileMenuOpen
                    ? "bg-[#ea1d05] text-white border-[#ea1d05] shadow-[0_0_18px_rgba(234,29,5,0.4)]"
                    : "bg-white dark:bg-[#121215] text-zinc-900 dark:text-white border-zinc-200 dark:border-white/15 shadow-sm"
                }`}
                aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
                aria-expanded={mobileMenuOpen}
              >
                <AnimatePresence mode="wait" initial={false}>
                  {mobileMenuOpen ? (
                    <motion.div
                      key="close"
                      initial={{ rotate: -90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: 90, opacity: 0 }}
                      transition={{ duration: 0.18 }}
                    >
                      <X className="w-5 h-5" />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="menu"
                      initial={{ rotate: 90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: -90, opacity: 0 }}
                      transition={{ duration: 0.18 }}
                    >
                      <Menu className="w-5 h-5" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Clean Right-to-Left Slide-over Mobile Drawer with Staggered Animations */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={() => setMobileMenuOpen(false)}
              className="fixed inset-0 bg-black/60 dark:bg-black/80 backdrop-blur-sm z-40 md:hidden"
            />

            {/* Side Drawer Panel */}
            <motion.div
              variants={drawerVariants}
              initial="closed"
              animate="open"
              exit="closed"
              className="fixed top-0 right-0 bottom-0 w-[84vw] max-w-[340px] h-full z-50 md:hidden bg-white/95 dark:bg-[#0d0d10]/95 backdrop-blur-2xl border-l border-zinc-200 dark:border-white/10 shadow-2xl flex flex-col justify-between p-6 overflow-y-auto"
            >
              {/* Drawer Top: Logo & Close Button */}
              <div>
                <div className="flex items-center justify-between pb-6 border-b border-zinc-100 dark:border-white/10">
                  <Link 
                    href="/" 
                    onClick={() => setMobileMenuOpen(false)}
                    className="relative h-9 w-36"
                  >
                    <Image
                      src="/images/log-no-bg.png"
                      alt="Digital Solutions Ltd"
                      fill
                      className="object-contain"
                      priority
                    />
                  </Link>

                  <motion.button
                    whileTap={{ scale: 0.9 }}
                    onClick={() => setMobileMenuOpen(false)}
                    className="p-2 rounded-xl bg-zinc-100 dark:bg-white/5 text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white border border-zinc-200 dark:border-white/10 transition-colors cursor-pointer"
                    aria-label="Close navigation"
                  >
                    <X className="w-5 h-5" />
                  </motion.button>
                </div>

                {/* Navigation Links with Staggered Entrance */}
                <nav className="flex flex-col gap-2 pt-6">
                  {navLinks.map((link) => {
                    const Icon = link.icon;
                    const isActive = pathname === link.href;
                    return (
                      <motion.div key={link.name} variants={itemVariants}>
                        <Link
                          href={link.href}
                          onClick={() => setMobileMenuOpen(false)}
                          className={`flex items-center justify-between px-4 py-3.5 rounded-xl text-sm font-semibold transition-all duration-200 ${
                            isActive
                              ? "bg-[#ea1d05] text-white shadow-md shadow-red-600/30 font-bold"
                              : "text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-white/5 hover:text-zinc-950 dark:hover:text-white"
                          }`}
                        >
                          <div className="flex items-center gap-3">
                            <Icon className={`w-4 h-4 ${isActive ? "text-white" : "text-zinc-400 dark:text-zinc-500"}`} />
                            <span>{link.name}</span>
                          </div>
                          <ChevronRight className={`w-4 h-4 ${isActive ? "text-white" : "text-zinc-300 dark:text-zinc-600"}`} />
                        </Link>
                      </motion.div>
                    );
                  })}
                </nav>
              </div>

              {/* Drawer Bottom Action */}
              <motion.div variants={itemVariants} className="pt-6 border-t border-zinc-100 dark:border-white/10 flex flex-col gap-3">
                <Link
                  href="/contact-us"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full flex items-center justify-center gap-2 py-3.5 px-4 rounded-xl bg-[#ea1d05] hover:bg-[#ce1705] text-white font-bold text-sm shadow-lg shadow-red-600/30 active:scale-[0.98] transition-all"
                >
                  <span>Consult With Us</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
