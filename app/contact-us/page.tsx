"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Card3D from "@/components/Card3D";
import { Mail, Phone, MapPin, Send, CheckCircle, Clock } from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "Telecom & Carrier Systems",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1200);
  };

  return (
    <div className="min-h-screen bg-white dark:bg-[#000000] text-zinc-900 dark:text-white selection:bg-[#ea1d05] selection:text-white flex flex-col justify-between transition-colors duration-300 relative overflow-hidden">
      <Navbar />

      <main className="flex-grow pt-32 relative z-20">
        {/* Header */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-zinc-100/70 dark:bg-[#09090b]/70 backdrop-blur-sm transition-colors duration-300">
          <div className="max-w-7xl mx-auto text-center space-y-4">
            <span className="text-xs font-bold uppercase tracking-widest text-[#ea1d05] bg-[#ea1d05]/10 px-3.5 py-1.5 rounded-full border border-[#ea1d05]/30">
              Get in Touch
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-zinc-950 dark:text-white tracking-tight">
              Connect With <span className="text-gradient-red">Digital Solutions</span>
            </h1>
            <p className="max-w-2xl mx-auto text-base sm:text-lg text-zinc-600 dark:text-zinc-300">
              Engage our senior systems architects and engineering leadership for carrier infrastructure, bespoke software, or strategic advisory.
            </p>
          </div>
        </section>

        {/* Contact Form & Information */}
        <section className="py-24 px-4 sm:px-6 lg:px-8 relative transition-colors duration-300">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Left Column: Direct Contact Info */}
            <div className="lg:col-span-5 space-y-8">
              <div className="space-y-4">
                <h2 className="text-3xl font-black text-zinc-900 dark:text-white tracking-tight">
                  Uganda & Global Headquarters
                </h2>
                <p className="text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed">
                  Located in Entebbe, Uganda, serving carrier clients, enterprise partners, and governments globally since 1998.
                </p>
              </div>

              <div className="space-y-4">
                <Card3D glowColor="red" className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[#ea1d05]/10 text-[#ea1d05] flex items-center justify-center shrink-0">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-zinc-900 dark:text-white">Physical Location</h4>
                    <p className="text-sm text-zinc-600 dark:text-zinc-300 mt-1">
                      Plot 3 Convent Close, Bugonga<br />
                      P.O. Box 716, Entebbe - Uganda
                    </p>
                  </div>
                </Card3D>

                <Card3D glowColor="white" className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-zinc-100 dark:bg-white/10 text-[#ea1d05] flex items-center justify-center shrink-0">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-zinc-900 dark:text-white">Telephone & Support</h4>
                    <p className="text-sm text-zinc-600 dark:text-zinc-300 mt-1">
                      <a href="tel:+256752707743" className="hover:text-[#ea1d05] font-semibold transition-colors">
                        +256-752-707743
                      </a>
                    </p>
                    <p className="text-xs text-zinc-500 mt-1 flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-[#ea1d05]" /> Mon - Fri: 8:00 AM - 5:00 PM EAT
                    </p>
                  </div>
                </Card3D>

                <Card3D glowColor="red" className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[#ea1d05]/10 text-[#ea1d05] flex items-center justify-center shrink-0">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-zinc-900 dark:text-white">Direct Email</h4>
                    <p className="text-sm text-zinc-600 dark:text-zinc-300 mt-1">
                      <a href="mailto:info@dsmagic.com" className="hover:text-[#ea1d05] font-semibold transition-colors">
                        info@dsmagic.com
                      </a>
                    </p>
                    <p className="text-xs text-zinc-500 mt-1">
                      General inquiries and carrier RFPs
                    </p>
                  </div>
                </Card3D>
              </div>
            </div>

            {/* Right Column: Exclusive Interactive Contact Form */}
            <div className="lg:col-span-7">
              <div className="p-8 sm:p-10 rounded-3xl bg-zinc-50/95 dark:bg-[#09090b]/95 border border-zinc-200 dark:border-white/10 shadow-2xl relative backdrop-blur-xl">
                {submitted ? (
                  <div className="py-16 text-center space-y-4">
                    <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-500 flex items-center justify-center mx-auto">
                      <CheckCircle className="w-10 h-10" />
                    </div>
                    <h3 className="text-2xl font-bold text-zinc-900 dark:text-white">
                      Message Dispatched Successfully
                    </h3>
                    <p className="text-sm text-zinc-600 dark:text-zinc-300 max-w-md mx-auto">
                      Thank you for contacting Digital Solutions. A lead engineer will review your inquiry and follow up within 24 hours.
                    </p>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="mt-4 px-6 py-2 rounded-full bg-[#ea1d05] text-white text-xs font-bold uppercase tracking-wider hover:bg-[#ce1705] transition-all"
                    >
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
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
                          className="w-full px-4 py-3 rounded-xl bg-white dark:bg-[#121215] border border-zinc-200 dark:border-white/10 text-zinc-900 dark:text-white focus:outline-none focus:border-[#ea1d05] transition-all text-sm shadow-sm"
                        />
                      </div>

                      <div className="space-y-2">
                        <label className="text-xs font-bold uppercase tracking-wider text-zinc-700 dark:text-zinc-300">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="sarah@telecom.com"
                          className="w-full px-4 py-3 rounded-xl bg-white dark:bg-[#121215] border border-zinc-200 dark:border-white/10 text-zinc-900 dark:text-white focus:outline-none focus:border-[#ea1d05] transition-all text-sm shadow-sm"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-xs font-bold uppercase tracking-wider text-zinc-700 dark:text-zinc-300">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="+256 700 000000"
                          className="w-full px-4 py-3 rounded-xl bg-white dark:bg-[#121215] border border-zinc-200 dark:border-white/10 text-zinc-900 dark:text-white focus:outline-none focus:border-[#ea1d05] transition-all text-sm shadow-sm"
                        />
                      </div>

                      <div className="space-y-2">
                        <label className="text-xs font-bold uppercase tracking-wider text-zinc-700 dark:text-zinc-300">
                          Domain / Interest Area
                        </label>
                        <select
                          value={formData.subject}
                          onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl bg-white dark:bg-[#121215] border border-zinc-200 dark:border-white/10 text-zinc-900 dark:text-white focus:outline-none focus:border-[#ea1d05] transition-all text-sm shadow-sm"
                        >
                          <option value="Telecom & Carrier Systems">Telecom & Carrier Systems (MMSC / SMSC)</option>
                          <option value="eSIM Remote Provisioning">Njiwa GSMA eSIM Solutions</option>
                          <option value="Enterprise Web Applications">Custom Enterprise Applications</option>
                          <option value="Consultancy & Architecture">IT Consultancy & Infrastructure</option>
                        </select>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-wider text-zinc-700 dark:text-zinc-300">
                        Project Details / Message *
                      </label>
                      <textarea
                        required
                        rows={5}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Describe your technical requirements, expected volume, or project timeline..."
                        className="w-full px-4 py-3 rounded-xl bg-white dark:bg-[#121215] border border-zinc-200 dark:border-white/10 text-zinc-900 dark:text-white focus:outline-none focus:border-[#ea1d05] transition-all text-sm shadow-sm resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full inline-flex items-center justify-center gap-2 py-4 px-8 rounded-xl bg-[#ea1d05] hover:bg-[#ce1705] text-white font-bold text-sm tracking-wider uppercase transition-all shadow-xl shadow-red-600/30 disabled:opacity-50"
                    >
                      {loading ? (
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      ) : (
                        <>
                          <span>Transmit Message</span>
                          <Send className="w-4 h-4" />
                        </>
                      )}
                    </button>
                  </form>
                )}
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
