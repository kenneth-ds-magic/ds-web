"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Card3D from "@/components/Card3D";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  CheckCircle2, 
  Clock, 
  Globe, 
  Sparkles, 
  Navigation, 
  ArrowRight, 
  ShieldCheck, 
  Headphones, 
  Building2
} from "lucide-react";
import confetti from "canvas-confetti";
import { toast } from "sonner";

export default function ContactUsContent() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    subject: "Telecom & Carrier Systems (MMSC / SMSC)",
    volume: "Under 100K msg/day",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      toast.error("Please fill in all mandatory fields.");
      return;
    }

    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      toast.success("Thank you! Your inquiry has been routed to our systems engineering team.");

      try {
        confetti({
          particleCount: 70,
          spread: 60,
          origin: { y: 0.6 },
          colors: ["#ea1d05", "#eb1c04", "#ec4936", "#ffffff", "#121215"],
        });
      } catch (err) {
        // ignore confetti errors if unsupported
      }
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-white dark:bg-[#000000] text-zinc-900 dark:text-white selection:bg-[#ea1d05] selection:text-white flex flex-col justify-between transition-colors duration-300 relative overflow-hidden">
      <Navbar />

      {/* Ambient Red Glows & Grid Accent */}
      <div className="fixed top-20 left-1/3 -translate-x-1/2 w-[700px] h-[450px] bg-[#ea1d05]/10 dark:bg-[#ea1d05]/15 blur-[160px] pointer-events-none z-0" />
      <div className="fixed bottom-10 right-1/4 w-[600px] h-[400px] bg-[#ea1d05]/10 dark:bg-[#ea1d05]/10 blur-[150px] pointer-events-none z-0" />
      <div className="fixed inset-0 bg-grid-pattern opacity-10 dark:opacity-15 pointer-events-none z-0" />

      <main className="flex-grow pt-32 relative z-20">
        {/* ================= HERO HEADER ================= */}
        <section className="relative py-16 sm:py-20 px-4 sm:px-6 lg:px-8 border-b border-zinc-200/80 dark:border-white/10 bg-zinc-50/70 dark:bg-[#09090b]/70 backdrop-blur-md transition-colors duration-300">
          <div className="max-w-7xl mx-auto text-center space-y-5">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-[#ea1d05]/10 text-[#ea1d05] border border-[#ea1d05]/30 shadow-sm">
              <Sparkles className="w-3.5 h-3.5 text-[#ea1d05]" />
              <span>Direct Engineering Engagement</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-zinc-950 dark:text-white tracking-tight leading-[1.1]">
              Connect With <span className="text-gradient-red">Digital Solutions</span>
            </h1>

            <p className="max-w-3xl mx-auto text-base sm:text-lg text-zinc-600 dark:text-zinc-300 leading-relaxed">
              Engage our lead systems architects for carrier-grade telecoms infrastructure, open-source GSMA eSIM solutions, high-throughput enterprise platforms, or technology advisory.
            </p>

            {/* Quick Badges Bar */}
            <div className="pt-4 flex flex-wrap items-center justify-center gap-4 sm:gap-8 text-xs font-semibold text-zinc-600 dark:text-zinc-400">
              <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white dark:bg-[#121215] border border-zinc-200 dark:border-white/10 shadow-sm">
                <ShieldCheck className="w-4 h-4 text-[#ea1d05]" />
                <span>Incorporated 1998 // 25+ Years Experience</span>
              </div>
              <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white dark:bg-[#121215] border border-zinc-200 dark:border-white/10 shadow-sm">
                <Clock className="w-4 h-4 text-[#ea1d05]" />
                <span>&lt; 24h Architect Response</span>
              </div>
              <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white dark:bg-[#121215] border border-zinc-200 dark:border-white/10 shadow-sm">
                <Globe className="w-4 h-4 text-[#ea1d05]" />
                <span>Global Carrier Deployments</span>
              </div>
            </div>
          </div>
        </section>

        {/* ================= MAIN CONTACT & FORM SECTION ================= */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 relative transition-colors duration-300">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            {/* Left Column: Direct Contact Info & Headquarters */}
            <div className="lg:col-span-5 space-y-8">
              <div className="space-y-3">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-zinc-100 dark:bg-white/10 text-zinc-800 dark:text-zinc-200">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span>Entebbe HQ Active // UTC+3 EAT</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-black text-zinc-900 dark:text-white tracking-tight">
                  Global & Regional Headquarters
                </h2>
                <p className="text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed">
                  Headquartered in Entebbe, Uganda with carrier clients, telecom operators, and enterprise deployments across East Africa and worldwide.
                </p>
              </div>

              <div className="space-y-4">
                {/* Physical Location Card */}
                <Card3D glowColor="red" className="flex items-start gap-4 p-5 sm:p-6 rounded-2xl bg-white/90 dark:bg-[#121215]/90 border border-zinc-200 dark:border-white/10 shadow-lg backdrop-blur-md">
                  <div className="w-12 h-12 rounded-xl bg-[#ea1d05]/10 text-[#ea1d05] flex items-center justify-center shrink-0 shadow-inner">
                    <Building2 className="w-6 h-6" />
                  </div>
                  <div className="flex-grow">
                    <div className="flex items-center justify-between">
                      <h4 className="text-base font-bold text-zinc-900 dark:text-white">Physical Location</h4>
                      <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-zinc-100 dark:bg-white/10 text-zinc-600 dark:text-zinc-400">Main Office</span>
                    </div>
                    <p className="text-sm text-zinc-600 dark:text-zinc-300 mt-1 leading-relaxed">
                      Plot 3 Convent Close, Bugonga<br />
                      P.O. Box 716, Entebbe – Uganda
                    </p>
                    <a
                      href="#interactive-map"
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-[#ea1d05] hover:underline mt-2.5"
                    >
                      <span>View Map Location Below</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </Card3D>

                {/* Telephone & Immediate Lines */}
                <Card3D glowColor="white" className="flex items-start gap-4 p-5 sm:p-6 rounded-2xl bg-white/90 dark:bg-[#121215]/90 border border-zinc-200 dark:border-white/10 shadow-lg backdrop-blur-md">
                  <div className="w-12 h-12 rounded-xl bg-zinc-100 dark:bg-white/10 text-[#ea1d05] flex items-center justify-center shrink-0 shadow-inner">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div className="flex-grow">
                    <h4 className="text-base font-bold text-zinc-900 dark:text-white">Telephone & Support</h4>
                    <p className="text-sm text-zinc-600 dark:text-zinc-300 mt-1">
                      <a href="tel:+256752707743" className="hover:text-[#ea1d05] font-bold text-base transition-colors text-zinc-900 dark:text-white">
                        +256 752 707743
                      </a>
                    </p>
                    <div className="text-xs text-zinc-500 dark:text-zinc-400 mt-2 flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-[#ea1d05]" />
                      <span>Mon – Fri: 8:00 AM – 5:00 PM EAT</span>
                    </div>
                  </div>
                </Card3D>

                {/* Direct Technical Email */}
                <Card3D glowColor="red" className="flex items-start gap-4 p-5 sm:p-6 rounded-2xl bg-white/90 dark:bg-[#121215]/90 border border-zinc-200 dark:border-white/10 shadow-lg backdrop-blur-md">
                  <div className="w-12 h-12 rounded-xl bg-[#ea1d05]/10 text-[#ea1d05] flex items-center justify-center shrink-0 shadow-inner">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div className="flex-grow">
                    <h4 className="text-base font-bold text-zinc-900 dark:text-white">Direct Email</h4>
                    <p className="text-sm text-zinc-600 dark:text-zinc-300 mt-1">
                      <a href="mailto:info@dsmagic.com" className="hover:text-[#ea1d05] font-bold text-base transition-colors text-zinc-900 dark:text-white">
                        info@dsmagic.com
                      </a>
                    </p>
                    <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-1">
                      For RFPs, carrier tenders, system audits, and partnerships.
                    </p>
                  </div>
                </Card3D>
              </div>
            </div>

            {/* Right Column: Premium Engineering Inquiry Form */}
            <div className="lg:col-span-7">
              <div className="p-8 sm:p-12 rounded-3xl bg-white/95 dark:bg-[#09090b]/95 border border-zinc-200 dark:border-white/10 shadow-2xl relative backdrop-blur-2xl">
                {/* Form Header */}
                <div className="mb-8 border-b border-zinc-200 dark:border-white/10 pb-6">
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <h3 className="text-2xl sm:text-3xl font-black text-zinc-900 dark:text-white tracking-tight">
                      Technical Inquiry & Consultation
                    </h3>
                    <div className="hidden sm:flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#ea1d05]/10 text-[#ea1d05] text-[11px] font-bold">
                      <ShieldCheck className="w-3.5 h-3.5" />
                      <span>Encrypted SSL</span>
                    </div>
                  </div>
                  <p className="text-sm text-zinc-600 dark:text-zinc-400">
                    Submit your system scope, expected carrier volume, or requirements below.
                  </p>
                </div>

                {submitted ? (
                  <div className="py-16 text-center space-y-5">
                    <div className="w-20 h-20 rounded-2xl bg-emerald-500/20 text-emerald-500 flex items-center justify-center mx-auto shadow-inner border border-emerald-500/30 animate-bounce">
                      <CheckCircle2 className="w-10 h-10" />
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-2xl sm:text-3xl font-black text-zinc-900 dark:text-white">
                        Inquiry Successfully Transmitted
                      </h3>
                      <p className="text-sm text-zinc-600 dark:text-zinc-300 max-w-md mx-auto leading-relaxed">
                        Thank you, <span className="font-bold text-zinc-900 dark:text-white">{formData.name}</span>. Your technical dossier has been dispatched to our engineering leadership. A senior architect will follow up within 24 hours.
                      </p>
                    </div>
                    <div className="pt-4">
                      <button
                        onClick={() => {
                          setSubmitted(false);
                          setFormData({
                            name: "",
                            email: "",
                            phone: "",
                            company: "",
                            subject: "Telecom & Carrier Systems (MMSC / SMSC)",
                            volume: "Under 100K msg/day",
                            message: "",
                          });
                        }}
                        className="px-8 py-3.5 rounded-full bg-[#ea1d05] hover:bg-[#ce1705] text-white text-xs font-bold uppercase tracking-wider transition-all shadow-lg shadow-red-600/30"
                      >
                        Submit Another Inquiry
                      </button>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">

                    {/* Name & Email Row */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div className="space-y-2">
                        <label className="text-xs font-bold uppercase tracking-wider text-zinc-700 dark:text-zinc-300">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="e.g. Eng. Sarah Mukasa"
                          className="w-full px-4 py-3.5 rounded-xl bg-zinc-50 dark:bg-[#121215] border border-zinc-200 dark:border-white/10 text-zinc-900 dark:text-white focus:outline-none focus:border-[#ea1d05] focus:ring-1 focus:ring-[#ea1d05] transition-all text-sm shadow-sm"
                        />
                      </div>

                      <div className="space-y-2">
                        <label className="text-xs font-bold uppercase tracking-wider text-zinc-700 dark:text-zinc-300">
                          Corporate / Work Email *
                        </label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="sarah@carrier.com"
                          className="w-full px-4 py-3.5 rounded-xl bg-zinc-50 dark:bg-[#121215] border border-zinc-200 dark:border-white/10 text-zinc-900 dark:text-white focus:outline-none focus:border-[#ea1d05] focus:ring-1 focus:ring-[#ea1d05] transition-all text-sm shadow-sm"
                        />
                      </div>
                    </div>

                    {/* Phone & Company / Organization Row */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div className="space-y-2">
                        <label className="text-xs font-bold uppercase tracking-wider text-zinc-700 dark:text-zinc-300">
                          Telephone / WhatsApp
                        </label>
                        <input
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="+256 700 000000"
                          className="w-full px-4 py-3.5 rounded-xl bg-zinc-50 dark:bg-[#121215] border border-zinc-200 dark:border-white/10 text-zinc-900 dark:text-white focus:outline-none focus:border-[#ea1d05] focus:ring-1 focus:ring-[#ea1d05] transition-all text-sm shadow-sm"
                        />
                      </div>

                      <div className="space-y-2">
                        <label className="text-xs font-bold uppercase tracking-wider text-zinc-700 dark:text-zinc-300">
                          Company / Carrier Name
                        </label>
                        <input
                          type="text"
                          value={formData.company}
                          onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                          placeholder="e.g. Telecom Operator X"
                          className="w-full px-4 py-3.5 rounded-xl bg-zinc-50 dark:bg-[#121215] border border-zinc-200 dark:border-white/10 text-zinc-900 dark:text-white focus:outline-none focus:border-[#ea1d05] focus:ring-1 focus:ring-[#ea1d05] transition-all text-sm shadow-sm"
                        />
                      </div>
                    </div>

                    {/* Message Details */}
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <label className="text-xs font-bold uppercase tracking-wider text-zinc-700 dark:text-zinc-300">
                          Technical Requirements & Scope *
                        </label>
                        <span className="text-[11px] text-zinc-500">Min. 20 characters</span>
                      </div>
                      <textarea
                        required
                        rows={5}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Describe your technical requirements, carrier protocols (MM4/MM7/SMPP), projected transaction volumes, or integration timeline..."
                        className="w-full px-4 py-3.5 rounded-xl bg-zinc-50 dark:bg-[#121215] border border-zinc-200 dark:border-white/10 text-zinc-900 dark:text-white focus:outline-none focus:border-[#ea1d05] focus:ring-1 focus:ring-[#ea1d05] transition-all text-sm shadow-sm resize-none"
                      />
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full inline-flex items-center justify-center gap-3 py-4 px-8 rounded-xl bg-[#ea1d05] hover:bg-[#ce1705] text-white font-black text-sm tracking-wider uppercase transition-all shadow-xl shadow-red-600/30 disabled:opacity-50 group hover:shadow-[0_0_35px_rgba(234,29,5,0.45)]"
                    >
                      {loading ? (
                        <div className="flex items-center gap-2">
                          <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                          <span>Routing Telemetry...</span>
                        </div>
                      ) : (
                        <>
                          <span>Transmit Technical Inquiry</span>
                          <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* ================= INTERACTIVE GOOGLE MAP SHOWCASE ================= */}
        <section id="interactive-map" className="py-20 px-4 sm:px-6 lg:px-8 relative transition-colors duration-300 border-t border-zinc-200/80 dark:border-white/10 bg-zinc-50/60 dark:bg-[#09090b]/60 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto space-y-8">
            
            {/* Map Section Header */}
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#ea1d05]/10 text-[#ea1d05] border border-[#ea1d05]/30 mb-2">
                  <Navigation className="w-3.5 h-3.5 text-[#ea1d05]" />
                  <span>Headquarters Navigation & Visit</span>
                </div>
                <h2 className="text-3xl sm:text-4xl font-black text-zinc-950 dark:text-white tracking-tight">
                  Visit Our Headquarters in Entebbe
                </h2>
                <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-400 mt-1 max-w-2xl">
                  Located conveniently in Bugonga, Entebbe — just minutes away from Entebbe International Airport (EBB).
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3">
                <a
                  href="https://www.google.com/maps/dir/?api=1&destination=Digital+Solutions+Limited+Entebbe"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#ea1d05] hover:bg-[#ce1705] text-white font-bold text-xs uppercase tracking-wider transition-all shadow-md shadow-red-600/30"
                >
                  <Navigation className="w-4 h-4" />
                  <span>Get Directions</span>
                </a>
              </div>
            </div>

            {/* Map Frame Card */}
            <div className="relative rounded-3xl overflow-hidden border border-zinc-200 dark:border-white/15 shadow-2xl bg-white dark:bg-[#121215]">
              {/* Responsive Iframe */}
              <div className="relative w-full h-[450px] sm:h-[520px] lg:h-[580px]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7979.633920654992!2d32.46360288137853!3d0.047307830917541455!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x177d86c751bb4f5b%3A0x14261a15d66587ac!2sDigital%20Solutions%20Limited!5e0!3m2!1sen!2sug!4v1789662725718!5m2!1sen!2sug"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="strict-origin-when-cross-origin"
                  title="Digital Solutions Limited Location Map"
                  className="w-full h-full"
                />
              </div>

              {/* Floating Overlay Badge with Address & Quick Facts */}
              <div className="absolute bottom-4 left-4 right-4 sm:right-auto sm:max-w-md p-4 sm:p-5 rounded-2xl bg-white/95 dark:bg-[#09090b]/95 border border-zinc-200 dark:border-white/15 backdrop-blur-xl shadow-2xl space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#ea1d05]/10 text-[#ea1d05] flex items-center justify-center shrink-0">
                    <Building2 className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-zinc-900 dark:text-white">Digital Solutions Limited</h4>
                    <p className="text-xs text-zinc-500 dark:text-zinc-400">Plot 3 Convent Close, Bugonga, Entebbe</p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-2 pt-2 border-t border-zinc-100 dark:border-white/10 text-[11px] text-zinc-600 dark:text-zinc-300">
                  <div className="flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-[#ea1d05]" />
                    <span>8:00 AM – 5:00 PM</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" />
                    <span>Secure HQ Facility</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Travel & Proximity Information */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
              <div className="p-6 rounded-2xl bg-white dark:bg-[#121215] border border-zinc-200 dark:border-white/10 shadow-sm space-y-2">
                <div className="flex items-center gap-2 text-[#ea1d05] font-bold text-sm">
                  <MapPin className="w-4 h-4" />
                  <span>Entebbe Airport Proximity</span>
                </div>
                <p className="text-xs text-zinc-600 dark:text-zinc-300 leading-relaxed">
                  Approximately 7–10 minutes drive from Entebbe International Airport (EBB), ideal for visiting international delegations and regional carrier partners.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-white dark:bg-[#121215] border border-zinc-200 dark:border-white/10 shadow-sm space-y-2">
                <div className="flex items-center gap-2 text-[#ea1d05] font-bold text-sm">
                  <Building2 className="w-4 h-4" />
                  <span>Kampala Expressway Link</span>
                </div>
                <p className="text-xs text-zinc-600 dark:text-zinc-300 leading-relaxed">
                  Direct access via the Kampala–Entebbe Expressway (approx. 30–35 minutes from Kampala Central Business District).
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-white dark:bg-[#121215] border border-zinc-200 dark:border-white/10 shadow-sm space-y-2">
                <div className="flex items-center gap-2 text-[#ea1d05] font-bold text-sm">
                  <Headphones className="w-4 h-4" />
                  <span>Appointments & Visitor Protocol</span>
                </div>
                <p className="text-xs text-zinc-600 dark:text-zinc-300 leading-relaxed">
                  To schedule an in-person systems presentation or carrier workshop with our executive team, please book at least 24 hours in advance.
                </p>
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
