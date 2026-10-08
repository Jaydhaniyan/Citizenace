"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import {
  BookOpenCheck,
  Bot,
  Award,
  Sparkles,
  CheckCircle,
  ArrowRight,
  ShieldCheck,
  LucideIcon,
} from "lucide-react";

interface Step {
  stepNumber: string;
  title: string;
  badge: string;
  description: string;
  highlight: string;
  icon: LucideIcon;
  gradient: string;
}

export default function HowItWorks() {
  const steps: Step[] = [
    {
      stepNumber: "01",
      title: "Practice Questions",
      badge: "Step 1: Learn & Drill",
      description:
        "Master the official USCIS civics question bank with bite-sized daily quizzes and smart spaced-repetition flashcards customized to your state and elected officials.",
      highlight: "128 Official USCIS Civics Questions",
      icon: BookOpenCheck,
      gradient: "from-blue-600 to-blue-800",
    },
    {
      stepNumber: "02",
      title: "Take AI Mock Interview",
      badge: "Step 2: Voice Simulation",
      description:
        "Simulate the actual naturalization interview face-to-face with an intelligent AI examiner. Practice answering Form N-400 questions and civics queries aloud.",
      highlight: "Real-time Voice & Clarity Scoring",
      icon: Bot,
      gradient: "from-indigo-600 to-blue-700",
    },
    {
      stepNumber: "03",
      title: "Track Progress & Pass",
      badge: "Step 3: Exam Day Ready",
      description:
        "Review comprehensive diagnostic analytics, achieve your 95%+ readiness threshold, and walk into your USCIS field office with total confidence and zero anxiety.",
      highlight: "98.6% First-Attempt Success Rate",
      icon: Award,
      gradient: "from-blue-700 to-emerald-600",
    },
  ];

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.18,
      },
    },
  };

  const stepCardVariants: Variants = {
    hidden: { opacity: 0, y: 35 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
    },
  };

  return (
    <section id="how-it-works" className="relative py-24 sm:py-32 bg-slate-50/70 overflow-hidden border-t border-slate-200/70">
      {/* Background ambient radial blue glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[400px] bg-blue-100/35 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20 sm:mb-24">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200/80 text-blue-800 text-xs font-bold uppercase tracking-wider mb-4 shadow-2xs"
          >
            <Sparkles className="w-3.5 h-3.5 text-blue-600" />
            <span>Simple 3-Step Process</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight"
          >
            How CitizenPrep AI Works
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-base sm:text-lg text-slate-600 mt-4 leading-relaxed max-w-2xl mx-auto"
          >
            Our proven, data-driven study roadmap takes you from zero preparation to naturalization oath ceremony with total peace of mind.
          </motion.p>
        </div>

        {/* 3-Step Timeline with Connecting Animated Line */}
        <div className="relative">
          
          {/* Desktop Connecting Line behind step circles */}
          <div className="hidden lg:block absolute top-10 left-[16%] right-[16%] h-1 z-0 overflow-hidden">
            {/* Base line */}
            <div className="w-full h-full bg-slate-200" />
            {/* Animated glowing gradient pulse running through line */}
            <motion.div
              animate={{
                x: ["-100%", "100%"],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute top-0 left-0 w-1/2 h-full bg-gradient-to-r from-transparent via-blue-600 to-transparent"
            />
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="grid grid-cols-1 lg:grid-cols-3 gap-8 sm:gap-10 relative z-10"
          >
            {steps.map((step, index) => {
              const Icon = step.icon;

              return (
                <motion.div
                  key={step.stepNumber}
                  variants={stepCardVariants}
                  whileHover={{ y: -8 }}
                  transition={{ duration: 0.25 }}
                  className="flex flex-col items-center text-center group"
                >
                  {/* Step Number Circle with Icon */}
                  <div className="relative mb-6">
                    {/* Pulsing ring */}
                    <div className="absolute -inset-2 bg-gradient-to-r from-blue-500/20 to-indigo-500/20 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                    <div className="relative w-20 h-20 rounded-3xl bg-white border-2 border-blue-100 shadow-xl shadow-blue-900/10 flex items-center justify-center transition-all duration-300 group-hover:border-blue-500 group-hover:scale-105">
                      <div
                        className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${step.gradient} text-white flex items-center justify-center shadow-md shadow-blue-700/20`}
                      >
                        <Icon className="w-7 h-7" />
                      </div>

                      {/* Number badge pill */}
                      <span className="absolute -bottom-2.5 bg-slate-900 text-white font-mono text-[11px] font-extrabold px-2.5 py-0.5 rounded-full shadow-md border border-slate-700">
                        {step.stepNumber}
                      </span>
                    </div>
                  </div>

                  {/* Step Glassmorphic Card Content */}
                  <div className="w-full glass-card rounded-3xl p-7 sm:p-8 border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-blue-300 transition-all duration-300 flex-1 flex flex-col justify-between">
                    <div>
                      <span className="text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-blue-50 text-blue-800 border border-blue-200/60 inline-block mb-3">
                        {step.badge}
                      </span>

                      <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-700 transition-colors">
                        {step.title}
                      </h3>

                      <p className="text-sm text-slate-600 leading-relaxed mb-6 text-left sm:text-center">
                        {step.description}
                      </p>
                    </div>

                    <div className="pt-4 border-t border-slate-100 flex items-center justify-center gap-2 text-xs font-semibold text-blue-800 bg-blue-50/50 py-2.5 px-3 rounded-xl border border-blue-100">
                      <ShieldCheck className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                      <span>{step.highlight}</span>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>

        </div>

      </div>
    </section>
  );
}
