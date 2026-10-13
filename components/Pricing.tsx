"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, Variants } from "framer-motion";
import {
  Check,
  Sparkles,
  ShieldCheck,
  ArrowRight,
  Zap,
  HelpCircle,
} from "lucide-react";

export default function Pricing() {
  const [billingCycle, setBillingCycle] = useState<"monthly" | "lifetime">("lifetime");

  const freeFeatures = [
    "Full 100 Official USCIS Civics Questions",
    "10-Question Rapid Practice Quizzes",
    "Interactive Flip-to-Reveal Flashcards",
    "Personal Dashboard & Score Tracking",
    "USCIS 60% Passing Benchmark Evaluation",
    "Mobile & Desktop Responsive Access",
  ];

  const premiumFeatures = [
    "Everything included in the Free plan",
    "Extended Civics Interview Simulation Drills",
    "Comprehensive Progress History & Analytics",
    "Category-Specific Drill Sets",
    "Priority Updates & New Civics Question Sets",
    "Ad-Free Premium Study Environment",
  ];

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const },
    },
  };

  return (
    <section id="pricing" className="relative py-24 sm:py-32 bg-slate-50/60 overflow-hidden border-t border-slate-200/70">
      {/* Background ambient radial blue glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[450px] bg-blue-100/40 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200/80 text-blue-800 text-xs font-bold uppercase tracking-wider mb-4 shadow-2xs"
          >
            <Sparkles className="w-3.5 h-3.5 text-blue-600" />
            <span>Transparent &amp; Simple Pricing</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight"
          >
            Invest in Your American Dream
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-base sm:text-lg text-slate-600 mt-4 leading-relaxed max-w-2xl mx-auto"
          >
            Practice for free today with core civics questions and flashcards. Optional premium upgrades will be available in an upcoming update.
          </motion.p>

          {/* Billing Cycle Toggle */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.25 }}
            className="mt-8 inline-flex items-center gap-1.5 p-1.5 rounded-full bg-white border border-slate-200/90 shadow-xs"
          >
            <button
              onClick={() => setBillingCycle("monthly")}
              className={`px-5 py-2 text-xs sm:text-sm font-bold rounded-full transition-all duration-200 ${
                billingCycle === "monthly"
                  ? "bg-blue-700 text-white shadow-sm"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              Monthly Access
            </button>
            <button
              onClick={() => setBillingCycle("lifetime")}
              className={`px-5 py-2 text-xs sm:text-sm font-bold rounded-full transition-all duration-200 flex items-center gap-2 ${
                billingCycle === "lifetime"
                  ? "bg-blue-700 text-white shadow-sm"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              <span>Lifetime Pass</span>
              <span className="px-2 py-0.5 text-[10px] font-extrabold uppercase tracking-wider bg-emerald-100 text-emerald-800 rounded-full">
                Save 40%
              </span>
            </button>
          </motion.div>
        </div>

        {/* Pricing Cards Grid (Free vs Premium) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto items-stretch">
          
          {/* 1. Free Plan Card */}
          <motion.div
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-40px" }}
            whileHover={{ y: -6 }}
            transition={{ duration: 0.25 }}
            className="glass-card rounded-3xl p-8 sm:p-10 border border-slate-200/90 shadow-sm flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-black text-slate-900">
                    Free Practice Pass
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-500 mt-1">
                    Everything you need to master standard civics knowledge.
                  </p>
                </div>
                <span className="w-12 h-12 rounded-2xl bg-slate-100 flex items-center justify-center text-slate-700 font-bold text-lg">
                  🇺🇸
                </span>
              </div>

              {/* Price */}
              <div className="my-6 pb-6 border-b border-slate-100">
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl sm:text-5xl font-black tracking-tight text-slate-900">
                    $0
                  </span>
                  <span className="text-sm font-semibold text-slate-500">
                    / forever
                  </span>
                </div>
                <p className="text-xs text-slate-500 mt-1 font-medium">
                  No credit card required. Start immediately.
                </p>
              </div>

              {/* Feature List */}
              <div className="space-y-3.5 mb-8">
                <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  Included in Free:
                </p>
                {freeFeatures.map((feat) => (
                  <div key={feat} className="flex items-start gap-3 text-xs sm:text-sm text-slate-700">
                    <div className="w-5 h-5 rounded-full bg-blue-50 text-blue-700 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-3.5 h-3.5" />
                    </div>
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Button */}
            <Link
              href="/quiz"
              className="w-full inline-flex items-center justify-center gap-2 py-4 px-6 text-sm font-bold text-slate-800 bg-white hover:bg-slate-50 border border-slate-200/90 rounded-2xl shadow-xs hover:shadow-sm transition-all duration-200"
            >
              <span>Start Free Practice</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>

          {/* 2. Premium Plan Card (Highlighted) */}
          <motion.div
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-40px" }}
            whileHover={{ y: -6 }}
            transition={{ duration: 0.25 }}
            className="relative glass-card-navy text-white rounded-3xl p-8 sm:p-10 border border-blue-500/40 shadow-2xl shadow-blue-900/20 flex flex-col justify-between overflow-hidden"
          >
            {/* Top Popular Ribbon */}
            <div className="absolute top-0 right-0 left-0 h-1.5 bg-gradient-to-r from-blue-500 via-indigo-400 to-red-500" />
            
            <div className="absolute top-4 right-6">
              <span className="inline-flex items-center gap-1 text-[11px] font-extrabold uppercase tracking-wider px-3 py-1 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-md border border-blue-400/30">
                <Sparkles className="w-3 h-3 fill-current" />
                <span>Coming Soon</span>
              </span>
            </div>

            <div>
              <div className="mb-4">
                <h3 className="text-2xl font-black text-white">
                  CitizenPrep Premium
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 mt-1">
                  Upcoming expanded test preparation tools and extended simulations.
                </p>
              </div>

              {/* Price */}
              <div className="my-6 pb-6 border-b border-slate-700/80">
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl sm:text-5xl font-black tracking-tight text-white">
                    {billingCycle === "monthly" ? "$9.99" : "$29"}
                  </span>
                  <span className="text-sm font-semibold text-slate-300">
                    {billingCycle === "monthly" ? "/ month" : " one-time"}
                  </span>
                </div>
                <p className="text-xs text-blue-300 mt-1 font-semibold flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-blue-400" />
                  <span>Preview pricing • Premium upgrades coming soon</span>
                </p>
              </div>

              {/* Feature List */}
              <div className="space-y-3.5 mb-8">
                <p className="text-xs font-bold uppercase tracking-wider text-blue-300">
                  Upcoming in Premium:
                </p>
                {premiumFeatures.map((feat) => (
                  <div key={feat} className="flex items-start gap-3 text-xs sm:text-sm text-slate-200">
                    <div className="w-5 h-5 rounded-full bg-blue-600 text-white flex items-center justify-center flex-shrink-0 mt-0.5 shadow-xs">
                      <Check className="w-3.5 h-3.5" />
                    </div>
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Button */}
            <Link
              href="/pricing"
              className="w-full inline-flex items-center justify-center gap-2 py-4 px-6 text-sm font-extrabold text-white bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 rounded-2xl shadow-lg shadow-blue-600/30 transition-all duration-200 transform active:scale-98"
            >
              <span>View Upcoming Plans</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>

        </div>

        {/* Bottom Info Banner */}
        <div className="mt-14 text-center max-w-2xl mx-auto flex flex-wrap items-center justify-center gap-6 text-xs text-slate-500 font-medium">
          <span className="flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            <span>Full Free Access Available Now</span>
          </span>
          <span className="text-slate-300">•</span>
          <span>No Credit Card Required</span>
          <span className="text-slate-300">•</span>
          <span>Premium Features Launching Soon</span>
        </div>

      </div>
    </section>
  );
}
