"use client";

import React, { useState } from "react";
import { 
  Send, 
  Phone, 
  Mail, 
  MapPin, 
  CheckCircle2, 
  Sparkles, 
  Clock 
} from "lucide-react";
import confetti from "canvas-confetti";
import { toast } from "sonner";

export default function CTASection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSent, setIsSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      toast.error("Please fill in all required fields.");
      return;
    }

    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSent(true);
      toast.success("Thank you! Your inquiry has been transmitted to our engineering team.");

      try {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.7 },
          colors: ["#ea1d05", "#eb1c04", "#e3200b", "#ec4936", "#cf3828", "#ffffff"],
        });
      } catch (err) {
        // ignore confetti errors
      }
    }, 900);
  };

  return (
    <section id="contact" className="relative py-28 px-4 sm:px-6 lg:px-8 bg-zinc-50 dark:bg-[#09090b] transition-colors duration-300 overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-[#ea1d05]/10 dark:bg-[#ea1d05]/15 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="rounded-3xl bg-white dark:bg-gradient-to-b dark:from-[#121215] dark:to-[#000000] border border-zinc-200 dark:border-white/10 p-8 sm:p-12 lg:p-16 shadow-2xl dark:shadow-[0_20px_60px_rgba(0,0,0,0.8)] backdrop-blur-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Left: Contact Info & Value Proposition */}
            <div className="lg:col-span-5 space-y-8 flex flex-col justify-between">
              <div>
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold bg-[#ea1d05]/10 text-[#ea1d05] border border-[#ea1d05]/30 mb-4 shadow-sm">
                  <Sparkles className="w-3.5 h-3.5 text-[#ea1d05]" />
                  <span>Start Your Digital Transformation</span>
                </div>
                <h2 className="text-3xl sm:text-4xl font-black text-zinc-900 dark:text-white tracking-tight leading-tight">
                  Let’s Build Your Next <span className="text-gradient-red">Breakthrough</span> System
                </h2>
                <p className="mt-4 text-sm sm:text-base text-zinc-600 dark:text-zinc-300 leading-relaxed">
                  Whether you need carrier-grade telecom gateways, bespoke client-server systems, or strategic technology consulting, our engineers are ready to assist.
                </p>
              </div>

              {/* Direct Info Tiles */}
              <div className="space-y-4">
                <div className="flex items-start gap-4 p-4 rounded-2xl bg-zinc-50 dark:bg-[#09090b] border border-zinc-200 dark:border-white/10">
                  <div className="p-3 rounded-xl bg-[#ea1d05]/10 dark:bg-[#ea1d05]/20 text-[#ea1d05] shrink-0">
                    <Phone className="w-5 h-5 text-[#ea1d05]" />
                  </div>
                  <div>
                    <p className="text-xs text-zinc-500 dark:text-zinc-400 font-medium">Direct Telephone</p>
                    <a
                      href="tel:+256752707743"
                      className="text-sm font-bold text-zinc-900 dark:text-white hover:text-[#ea1d05] transition-colors"
                    >
                      +256-752-707743
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-2xl bg-zinc-50 dark:bg-[#09090b] border border-zinc-200 dark:border-white/10">
                  <div className="p-3 rounded-xl bg-[#ea1d05]/10 dark:bg-[#ea1d05]/20 text-[#ea1d05] shrink-0">
                    <Mail className="w-5 h-5 text-[#ea1d05]" />
                  </div>
                  <div>
                    <p className="text-xs text-zinc-500 dark:text-zinc-400 font-medium">Electronic Mail</p>
                    <a
                      href="mailto:info@dsmagic.com"
                      className="text-sm font-bold text-zinc-900 dark:text-white hover:text-[#ea1d05] transition-colors"
                    >
                      info@dsmagic.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-2xl bg-zinc-50 dark:bg-[#09090b] border border-zinc-200 dark:border-white/10">
                  <div className="p-3 rounded-xl bg-[#ea1d05]/10 dark:bg-[#ea1d05]/20 text-[#ea1d05] shrink-0">
                    <MapPin className="w-5 h-5 text-[#ea1d05]" />
                  </div>
                  <div>
                    <p className="text-xs text-zinc-500 dark:text-zinc-400 font-medium">Headquarters</p>
                    <p className="text-sm font-bold text-zinc-900 dark:text-white">
                      Plot 3 Convent Close, Bugonga, Entebbe
                    </p>
                    <p className="text-xs text-zinc-500 dark:text-zinc-400">P.O. Box 236 Kampala, Uganda</p>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-2 text-xs text-zinc-500 dark:text-zinc-400">
                <Clock className="w-4 h-4 text-[#ea1d05]" />
                <span>Typical response time: Within 24 business hours</span>
              </div>
            </div>

            {/* Right: Interactive Contact Form */}
            <div className="lg:col-span-7">
              <div className="p-6 sm:p-8 rounded-2xl bg-zinc-50 dark:bg-[#000000] border border-zinc-200 dark:border-white/10 shadow-xl relative">
                {isSent ? (
                  <div className="text-center py-12 space-y-4 animate-in fade-in zoom-in-95 duration-500">
                    <div className="w-16 h-16 rounded-full bg-[#ea1d05]/10 dark:bg-[#ea1d05]/20 text-[#ea1d05] border border-[#ea1d05]/40 flex items-center justify-center mx-auto">
                      <CheckCircle2 className="w-8 h-8" />
                    </div>
                    <h3 className="text-2xl font-black text-zinc-900 dark:text-white">Message Transmitted!</h3>
                    <p className="text-sm text-zinc-600 dark:text-zinc-300 max-w-md mx-auto">
                      Thank you for contacting Digital Solutions Ltd. Our technical director will review your requirements and reach out to you promptly.
                    </p>
                    <button
                      onClick={() => {
                        setIsSent(false);
                        setFormData({ name: "", email: "", subject: "", message: "" });
                      }}
                      className="px-6 py-2.5 rounded-full bg-[#ea1d05] text-white text-xs font-bold hover:bg-[#ce1705] transition-all"
                    >
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-zinc-700 dark:text-zinc-300 mb-1.5">
                          Your Full Name <span className="text-[#ea1d05]">*</span>
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="e.g. John Doe"
                          className="w-full px-4 py-3 rounded-xl bg-white dark:bg-[#121215] border border-zinc-300 dark:border-white/10 text-zinc-900 dark:text-white placeholder-zinc-400 dark:placeholder-zinc-500 text-sm focus:outline-none focus:border-[#ea1d05] focus:ring-1 focus:ring-[#ea1d05] transition-all"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-zinc-700 dark:text-zinc-300 mb-1.5">
                          Your Email Address <span className="text-[#ea1d05]">*</span>
                        </label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="name@company.com"
                          className="w-full px-4 py-3 rounded-xl bg-white dark:bg-[#121215] border border-zinc-300 dark:border-white/10 text-zinc-900 dark:text-white placeholder-zinc-400 dark:placeholder-zinc-500 text-sm focus:outline-none focus:border-[#ea1d05] focus:ring-1 focus:ring-[#ea1d05] transition-all"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-zinc-700 dark:text-zinc-300 mb-1.5">
                        Subject / Project Scope
                      </label>
                      <input
                        type="text"
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        placeholder="e.g. MMS/SMS Gateway Deployment or Enterprise Software"
                        className="w-full px-4 py-3 rounded-xl bg-white dark:bg-[#121215] border border-zinc-300 dark:border-white/10 text-zinc-900 dark:text-white placeholder-zinc-400 dark:placeholder-zinc-500 text-sm focus:outline-none focus:border-[#ea1d05] focus:ring-1 focus:ring-[#ea1d05] transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-zinc-700 dark:text-zinc-300 mb-1.5">
                        Message & Requirements <span className="text-[#ea1d05]">*</span>
                      </label>
                      <textarea
                        required
                        rows={4}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Tell us about your system requirements, performance targets, or partnership proposal..."
                        className="w-full px-4 py-3 rounded-xl bg-white dark:bg-[#121215] border border-zinc-300 dark:border-white/10 text-zinc-900 dark:text-white placeholder-zinc-400 dark:placeholder-zinc-500 text-sm focus:outline-none focus:border-[#ea1d05] focus:ring-1 focus:ring-[#ea1d05] transition-all resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl bg-gradient-to-r from-[#ea1d05] via-[#eb1c04] to-[#ce1705] hover:opacity-95 text-white font-black text-sm tracking-wider uppercase transition-all shadow-xl shadow-red-600/30 cursor-pointer disabled:opacity-50"
                    >
                      {isSubmitting ? (
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
        </div>
      </div>
    </section>
  );
}
