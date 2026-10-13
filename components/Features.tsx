"use client";

import React from "react";
import Link from "next/link";
import { motion, Variants } from "framer-motion";
import {
  HelpCircle,
  Layers,
  Bot,
  BookOpen,
  PenTool,
  Volume2,
  ArrowRight,
  CheckCircle2,
  Sparkles,
  LucideIcon,
} from "lucide-react";

interface Feature {
  id: string;
  title: string;
  description: string;
  badge: string;
  icon: LucideIcon;
  gradient: string;
  highlights: string[];
  href: string;
}

export default function Features() {
  const features: Feature[] = [
    {
      id: "practice-quiz",
      title: "Practice Quiz",
      description:
        "Civics tests with instant scoring and explanations covering American Government, History, and Civics.",
      badge: "Most Popular",
      icon: HelpCircle,
      gradient: "from-blue-600 to-blue-800",
      href: "/quiz",
      highlights: [
        "10-question practice test sets",
        "Official USCIS civics question bank",
        "Instant score percentage calculation",
      ],
    },
    {
      id: "flashcards",
      title: "Civics Flashcards",
      description:
        "Interactive flip-to-reveal flashcards organized across core civics categories to reinforce memory recall.",
      badge: "Memory Engine",
      icon: Layers,
      gradient: "from-blue-700 to-indigo-800",
      href: "/flashcards",
      highlights: [
        "Interactive 3D flip-to-reveal",
        "Targeted study by category",
        "Self-paced active recall practice",
      ],
    },
    {
      id: "ai-interview",
      title: "AI Civics Interview",
      description:
        "Simulated 15-question civics interview practice designed to test your knowledge in an interview format.",
      badge: "Interview Prep",
      icon: Bot,
      gradient: "from-indigo-600 to-blue-700",
      href: "/interview",
      highlights: [
        "15 realistic civics interview questions",
        "Instant answer feedback & validation",
        "Passing benchmark evaluation",
      ],
    },
    {
      id: "study-dashboard",
      title: "Study Dashboard",
      description:
        "Track your preparation journey with saved quiz results, personal high scores, and completed question counts.",
      badge: "Progress Tracking",
      icon: BookOpen,
      gradient: "from-blue-700 to-sky-700",
      href: "/dashboard",
      highlights: [
        "Best and latest score tracking",
        "Total questions completed counter",
        "Past quiz attempt history",
      ],
    },
    {
      id: "account-sync",
      title: "Google Account Sync",
      description:
        "Sign in seamlessly with Google to save your test records and synchronize your study progress securely.",
      badge: "Cloud Sync",
      icon: PenTool,
      gradient: "from-slate-800 to-blue-900",
      href: "/login",
      highlights: [
        "Quick one-click Google Sign-In",
        "Secure Firestore data persistence",
        "Seamless access across study sessions",
      ],
    },
    {
      id: "test-analytics",
      title: "Results & Scoring",
      description:
        "Detailed result summaries with accuracy percentages and USCIS 60% passing benchmark evaluation.",
      badge: "Passing Insights",
      icon: Volume2,
      gradient: "from-blue-800 to-slate-900",
      href: "/quiz",
      highlights: [
        "Instant percentage score calculation",
        "Pass/Fail indicator based on 60% standard",
        "Review correct and incorrect answers",
      ],
    },
  ];

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] as const },
    },
  };

  return (
    <section id="features" className="relative py-24 sm:py-32 bg-white overflow-hidden">
      {/* Subtle background tech grid */}
      <div className="absolute inset-0 bg-grid-tech opacity-40 pointer-events-none" />

      {/* Decorative ambient radial glows */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-blue-100/40 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 left-0 w-[450px] h-[450px] bg-indigo-100/30 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200/80 text-blue-800 text-xs font-bold uppercase tracking-wider mb-4 shadow-2xs"
          >
            <Sparkles className="w-3.5 h-3.5 text-blue-600" />
            <span>Comprehensive Learning Suite</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight"
          >
            Everything You Need for Focused Civics Practice
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-base sm:text-lg text-slate-600 mt-4 leading-relaxed max-w-2xl mx-auto"
          >
            Prepare for the official USCIS civics test with interactive quizzes, smart flashcards, simulated interviews, and personal performance tracking.
          </motion.p>
        </div>

        {/* 6 Premium Feature Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <motion.div
                key={feature.id}
                variants={cardVariants}
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ duration: 0.25 }}
                className="group relative glass-card rounded-3xl p-7 sm:p-8 border border-slate-200/90 shadow-sm hover:shadow-2xl hover:shadow-blue-900/10 hover:border-blue-300/90 transition-all duration-300 flex flex-col justify-between overflow-hidden"
              >
                {/* Subtle top corner gradient highlight */}
                <div className="absolute top-0 right-0 -mr-12 -mt-12 w-32 h-32 bg-gradient-to-br from-blue-400/20 to-sky-300/10 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                <div>
                  {/* Top: Icon + Badge */}
                  <div className="flex items-center justify-between mb-6">
                    <div
                      className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${feature.gradient} text-white flex items-center justify-center shadow-lg shadow-blue-800/20 group-hover:scale-110 group-hover:rotate-2 transition-transform duration-300`}
                    >
                      <Icon className="w-7 h-7" />
                    </div>

                    <span className="text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-blue-50/80 text-blue-800 border border-blue-200/60 group-hover:bg-blue-100/80 transition-colors">
                      {feature.badge}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-700 transition-colors">
                    {feature.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-slate-600 leading-relaxed mb-6">
                    {feature.description}
                  </p>
                </div>

                {/* Highlights list & Link */}
                <div className="pt-5 border-t border-slate-100 space-y-3">
                  <div className="space-y-2">
                    {feature.highlights.map((item, i) => (
                      <div
                        key={i}
                        className="flex items-center gap-2 text-xs font-semibold text-slate-600"
                      >
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>

                  <div className="pt-2">
                    <Link
                      href={feature.href}
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-700 hover:text-blue-800 transition-colors"
                    >
                      <span>Explore {feature.title}</span>
                      <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
}
