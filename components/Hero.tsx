"use client";

import React, { useState } from "react";
import { motion, Variants } from "framer-motion";
import {
  ArrowRight,
  Play,
  Star,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import Globe3D from "./Globe3D";
import FloatingQuizCards from "./FloatingQuizCards";
import DemoModal from "./DemoModal";

export default function Hero() {
  const [isDemoOpen, setIsDemoOpen] = useState(false);

  // Framer motion container & child variants for staggered entrance
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
    },
  };

  return (
    <section className="relative min-h-[calc(100vh-80px)] flex items-center justify-center animated-gradient-bg overflow-hidden py-12 lg:py-20">
      {/* Background tech grid overlay */}
      <div className="absolute inset-0 bg-grid-tech opacity-70 pointer-events-none" />

      {/* Floating 3D ambient radial glow orbs */}
      <div className="absolute -top-20 -left-20 w-96 h-96 bg-blue-400/20 rounded-full blur-3xl pointer-events-none animate-orb-1" />
      <div className="absolute top-1/3 -right-20 w-[480px] h-[480px] bg-indigo-500/15 rounded-full blur-3xl pointer-events-none animate-orb-2" />
      <div className="absolute -bottom-20 left-1/3 w-80 h-80 bg-red-400/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* LEFT SIDE: Hero Headline, Subtitle, CTA Buttons, Trust Badges */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="lg:col-span-6 flex flex-col items-start text-left"
          >
            {/* 3D Pill Badge */}
            <motion.div
              variants={itemVariants}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/80 backdrop-blur-md border border-blue-200/80 shadow-xs mb-6 hover:border-blue-300 transition-colors"
            >
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-blue-600" />
              </span>
              <span className="text-xs font-extrabold uppercase tracking-wider text-blue-900 font-sans">
                Official USCIS 2026 Test Material
              </span>
              <span className="text-slate-300">|</span>
              <span className="text-xs font-semibold text-slate-600 flex items-center gap-1">
                <Sparkles className="w-3.5 h-3.5 text-amber-500" />
                AI-Powered
              </span>
            </motion.div>

            {/* Title: Pass Your US Citizenship Test on the First Try 🇺🇸 */}
            <motion.h1
              variants={itemVariants}
              className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-950 tracking-tight leading-[1.12] mb-6"
            >
              Pass Your US Citizenship Test on the{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-blue-800 to-indigo-900">
                First Try
              </span>{" "}
              <span
                className="inline-block hover:scale-110 hover:rotate-6 transition-transform cursor-pointer"
                title="United States of America"
              >
                🇺🇸
              </span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              variants={itemVariants}
              className="text-lg sm:text-xl text-slate-600 leading-relaxed max-w-xl mb-8 font-normal"
            >
              Practice official USCIS questions, flashcards, AI interviews, reading &amp; writing exercises, and daily quizzes.
            </motion.p>

            {/* Two CTA Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto mb-10"
            >
              {/* Primary CTA Button */}
              <motion.a
                href="#practice"
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="relative inline-flex items-center justify-center gap-3 px-8 py-4 text-base font-extrabold text-white bg-gradient-to-r from-blue-700 via-blue-800 to-slate-900 rounded-2xl shadow-xl shadow-blue-800/25 hover:shadow-2xl hover:shadow-blue-800/35 border border-blue-500/30 overflow-hidden group"
              >
                <span className="relative z-10">Start Free Practice Test</span>
                <ArrowRight className="w-5 h-5 relative z-10 transition-transform duration-200 group-hover:translate-x-1" />
                <div className="absolute inset-0 w-1/2 h-full bg-white/10 skew-x-12 -translate-x-full group-hover:translate-x-[300%] transition-transform duration-1000 ease-out" />
              </motion.a>

              {/* Secondary CTA Button */}
              <motion.button
                type="button"
                onClick={() => setIsDemoOpen(true)}
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center justify-center gap-3 px-6 py-4 text-base font-bold text-slate-800 bg-white/90 hover:bg-white active:bg-slate-50 rounded-2xl border border-slate-200/90 shadow-sm hover:shadow-md transition-all duration-200 backdrop-blur-sm group"
              >
                <div className="w-7 h-7 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center group-hover:bg-blue-700 group-hover:text-white transition-colors duration-200 shadow-2xs">
                  <Play className="w-3.5 h-3.5 fill-current ml-0.5" />
                </div>
                <span>Watch 3D Demo</span>
              </motion.button>
            </motion.div>

            {/* Social Proof & Trust Badges */}
            <motion.div
              variants={itemVariants}
              className="pt-6 border-t border-slate-200/80 w-full flex flex-wrap items-center gap-6 sm:gap-8"
            >
              {/* User Avatars & Rating */}
              <div className="flex items-center gap-3">
                <div className="flex -space-x-2.5 overflow-hidden">
                  <img
                    className="inline-block h-9 w-9 rounded-full ring-2 ring-white object-cover"
                    src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80"
                    alt="CitizenPrep learner"
                  />
                  <img
                    className="inline-block h-9 w-9 rounded-full ring-2 ring-white object-cover"
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=80"
                    alt="CitizenPrep learner"
                  />
                  <img
                    className="inline-block h-9 w-9 rounded-full ring-2 ring-white object-cover"
                    src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=100&auto=format&fit=crop&q=80"
                    alt="CitizenPrep learner"
                  />
                  <div className="inline-flex h-9 w-9 items-center justify-center rounded-full ring-2 ring-white bg-blue-700 text-white text-xs font-bold">
                    +25k
                  </div>
                </div>
                <div>
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-current" />
                    ))}
                    <span className="text-xs font-extrabold text-slate-800 ml-1">4.9/5</span>
                  </div>
                  <p className="text-xs text-slate-500 font-medium">25,000+ new US citizens passed</p>
                </div>
              </div>

              {/* Free Guarantee Badge */}
              <div className="flex items-center gap-2 text-xs font-semibold text-slate-700 bg-emerald-50/80 px-3 py-1.5 rounded-xl border border-emerald-200/60">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span>100% Free Practice Tests</span>
              </div>
            </motion.div>
          </motion.div>

          {/* RIGHT SIDE: 3D Globe with US-themed Floating Quiz Cards */}
          <div className="lg:col-span-6 relative w-full perspective-1000 flex items-center justify-center py-6 sm:py-10">
            {/* Outer 3D glow base */}
            <div className="absolute inset-0 bg-radial from-blue-500/10 via-transparent to-transparent pointer-events-none -z-10" />

            {/* 3D Interactive Globe Container */}
            <div className="relative w-full max-w-[540px] aspect-square flex items-center justify-center">
              <Globe3D />
              
              {/* US-Themed Floating 3D Quiz Cards positioned around the globe */}
              <FloatingQuizCards />
            </div>
          </div>

        </div>
      </div>

      {/* Interactive 3D Demo Walkthrough Modal */}
      <DemoModal isOpen={isDemoOpen} onClose={() => setIsDemoOpen(false)} />
    </section>
  );
}
