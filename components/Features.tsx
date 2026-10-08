"use client";

import React from "react";
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
}

export default function Features() {
  const features: Feature[] = [
    {
      id: "practice-quiz",
      title: "Practice Quiz",
      description:
        "Timed and untimed civics tests with instant feedback covering American Government, History, and Integrated Civics.",
      badge: "Most Popular",
      icon: HelpCircle,
      gradient: "from-blue-600 to-blue-800",
      highlights: [
        "10-question rapid drill sets",
        "Official USCIS answer explanations",
        "Updated state governor & senator questions",
      ],
    },
    {
      id: "flashcards",
      title: "Spaced Flashcards",
      description:
        "Smart spaced-repetition flashcard deck that focuses on your historically difficult questions until you master them.",
      badge: "Memory Engine",
      icon: Layers,
      gradient: "from-blue-700 to-indigo-800",
      highlights: [
        "Interactive 3D flip-to-reveal",
        "Difficulty tagging & bookmarking",
        "Targeted study by category",
      ],
    },
    {
      id: "ai-interview",
      title: "AI Mock Interview",
      description:
        "Practice speaking with a voice-enabled AI examiner that simulates real USCIS N-400 naturalization interview dialogues.",
      badge: "Voice Simulation",
      icon: Bot,
      gradient: "from-indigo-600 to-blue-700",
      highlights: [
        "Real-time conversational speech scoring",
        "Form N-400 eligibility drill questions",
        "Confidence & pronunciation feedback",
      ],
    },
    {
      id: "reading-practice",
      title: "Reading Practice",
      description:
        "Master the official USCIS reading vocabulary bank with interactive digital tablet prompts mirroring the real exam.",
      badge: "Official Vocab",
      icon: BookOpen,
      gradient: "from-blue-700 to-sky-700",
      highlights: [
        "Official USCIS reading sentence lists",
        "Digital tablet interface simulation",
        "Instant clarity & accuracy rating",
      ],
    },
    {
      id: "writing-practice",
      title: "Writing Practice",
      description:
        "Practice English sentence dictation using digital stylus or keyboard input with automatic syntax verification.",
      badge: "Dictation Simulator",
      icon: PenTool,
      gradient: "from-slate-800 to-blue-900",
      highlights: [
        "Audio dictation sentence prompts",
        "Real-time spelling & grammar checker",
        "Exact USCIS scoring rubrics",
      ],
    },
    {
      id: "audio-pronunciation",
      title: "Audio Pronunciation",
      description:
        "Crystal-clear native English recordings available at normal and slow conversational speeds for non-native speakers.",
      badge: "High-Fidelity",
      icon: Volume2,
      gradient: "from-blue-800 to-slate-900",
      highlights: [
        "Standard & slow speed playback",
        "Bilingual Spanish transcript support",
        "Phonetic breakdown of legal terms",
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
            Everything You Need to Pass Your Civics &amp; English Test
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-base sm:text-lg text-slate-600 mt-4 leading-relaxed max-w-2xl mx-auto"
          >
            The naturalization interview tests four distinct areas: Civics Knowledge, Speaking, Reading, and Writing. CitizenPrep AI prepares you for all four.
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
                    <span className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-700 group-hover:text-blue-800 transition-colors">
                      <span>Explore {feature.title}</span>
                      <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1" />
                    </span>
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
