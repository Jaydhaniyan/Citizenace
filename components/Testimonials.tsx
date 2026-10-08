"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import { Star, ShieldCheck, Quote, Sparkles, CheckCircle2 } from "lucide-react";

interface Testimonial {
  id: string;
  name: string;
  country: string;
  flag: string;
  location: string;
  naturalizedDate: string;
  quote: string;
  avatarUrl: string;
  score: string;
}

export default function Testimonials() {
  const testimonials: Testimonial[] = [
    {
      id: "maria",
      name: "Maria Gonzalez",
      country: "Mexico",
      flag: "🇲🇽",
      location: "Dallas, Texas",
      naturalizedDate: "Naturalized May 2025",
      quote:
        "I was terrified of the speaking portion because English is my second language. The AI Mock Interview felt so authentic that when I sat down with the actual officer in Dallas, it felt just like another practice session. I passed with 6 out of 6 on my first try!",
      avatarUrl:
        "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=200&auto=format&fit=crop",
      score: "6/6 Civics Correct",
    },
    {
      id: "priya",
      name: "Priya Patel",
      country: "India",
      flag: "🇮🇳",
      location: "San Jose, California",
      naturalizedDate: "Naturalized January 2026",
      quote:
        "The spaced repetition flashcards and state-specific governor/senator updates saved me dozens of study hours. The writing dictation practice is identical to the digital iPad test at the USCIS field office. Could not recommend CitizenPrep AI more!",
      avatarUrl:
        "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=200&auto=format&fit=crop",
      score: "100% Reading & Writing",
    },
    {
      id: "john",
      name: "John Bautista",
      country: "Philippines",
      flag: "🇵🇭",
      location: "Queens, New York",
      naturalizedDate: "Naturalized February 2026",
      quote:
        "CitizenPrep AI was hands down the best investment for my US naturalization journey. The clean interface without distracting ads let me practice during subway commutes. My oath ceremony is next week, and I feel so proud!",
      avatarUrl:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop",
      score: "First-Attempt Pass",
    },
  ];

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
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
    <section id="testimonials" className="relative py-24 sm:py-32 bg-white overflow-hidden">
      {/* Subtle tech background grid */}
      <div className="absolute inset-0 bg-grid-tech opacity-35 pointer-events-none" />

      {/* Decorative ambient radial gradients */}
      <div className="absolute top-1/3 left-0 w-[500px] h-[500px] bg-blue-100/30 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-0 w-[450px] h-[450px] bg-indigo-100/30 rounded-full blur-3xl pointer-events-none -z-10" />

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
            <span>Real Success Stories</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight"
          >
            Trusted by 25,000+ New US Citizens
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-base sm:text-lg text-slate-600 mt-4 leading-relaxed max-w-2xl mx-auto"
          >
            See how aspiring citizens from around the globe passed their USCIS Naturalization test on the very first try.
          </motion.p>
        </div>

        {/* 3 Testimonial Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {testimonials.map((item) => (
            <motion.div
              key={item.id}
              variants={cardVariants}
              whileHover={{ y: -8, scale: 1.02 }}
              transition={{ duration: 0.25 }}
              className="group relative glass-card rounded-3xl p-7 sm:p-8 border border-slate-200/90 shadow-sm hover:shadow-2xl hover:shadow-blue-900/10 hover:border-blue-300 transition-all duration-300 flex flex-col justify-between overflow-hidden"
            >
              {/* Subtle top ambient glow on hover */}
              <div className="absolute top-0 right-0 -mr-10 -mt-10 w-28 h-28 bg-blue-100/60 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

              <div>
                {/* 5-Star Rating & Quote Icon */}
                <div className="flex items-center justify-between mb-5">
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <Quote className="w-7 h-7 text-blue-200 group-hover:text-blue-400 transition-colors" />
                </div>

                {/* Review Quote */}
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-6 italic">
                  &ldquo;{item.quote}&rdquo;
                </p>
              </div>

              {/* Author Info & Verified Badge */}
              <div className="pt-5 border-t border-slate-100 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="relative">
                    <img
                      src={item.avatarUrl}
                      alt={item.name}
                      className="w-11 h-11 rounded-full object-cover ring-2 ring-blue-100"
                    />
                    <span
                      className="absolute -bottom-1 -right-1 text-xs"
                      title={item.country}
                    >
                      {item.flag}
                    </span>
                  </div>

                  <div>
                    <h4 className="text-sm font-bold text-slate-900 group-hover:text-blue-800 transition-colors">
                      {item.name}
                    </h4>
                    <p className="text-xs text-slate-500 font-medium">
                      {item.location}
                    </p>
                  </div>
                </div>

                <div className="text-right">
                  <span className="inline-flex items-center gap-1 text-[11px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-md border border-emerald-200/60">
                    <CheckCircle2 className="w-3 h-3" />
                    <span>{item.score}</span>
                  </span>
                  <div className="text-[10px] text-slate-400 mt-1 font-medium">
                    {item.naturalizedDate}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom Trust Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-14 max-w-2xl mx-auto text-center bg-blue-50/70 border border-blue-100/90 rounded-2xl p-4 flex items-center justify-center gap-3 text-xs sm:text-sm font-semibold text-blue-900"
        >
          <ShieldCheck className="w-5 h-5 text-blue-700 flex-shrink-0" />
          <span>
            98.6% of applicants who finish our study roadmap pass on their first attempt.
          </span>
        </motion.div>

      </div>
    </section>
  );
}
