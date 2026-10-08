"use client";

import React, { useEffect, useState, useRef } from "react";
import { motion, Variants } from "framer-motion";
import { FileCheck, Bot, Flame, TrendingUp, Sparkles, LucideIcon } from "lucide-react";

interface StatItem {
  id: string;
  value: number;
  prefix?: string;
  suffix?: string;
  label: string;
  sublabel: string;
  icon: LucideIcon;
  gradient: string;
  badge: string;
}

function AnimatedNumber({ target, duration = 1600 }: { target: number; duration?: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasStarted) {
          setHasStarted(true);
        }
      },
      { threshold: 0.25 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [hasStarted]);

  useEffect(() => {
    if (!hasStarted) return;

    let startTimestamp: number | null = null;
    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      // Ease out cubic
      const easeOut = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(easeOut * target));

      if (progress < 1) {
        window.requestAnimationFrame(step);
      } else {
        setCount(target);
      }
    };

    const animFrame = window.requestAnimationFrame(step);
    return () => window.cancelAnimationFrame(animFrame);
  }, [hasStarted, target, duration]);

  return <span ref={ref}>{count.toLocaleString()}</span>;
}

export default function Stats() {
  const stats: StatItem[] = [
    {
      id: "questions",
      value: 128,
      label: "Official USCIS Questions",
      sublabel: "Complete 100 & 128 civics test banks verified for 2026",
      icon: FileCheck,
      gradient: "from-blue-600 to-blue-800",
      badge: "USCIS 2026",
    },
    {
      id: "interviews",
      value: 50000,
      prefix: "+",
      label: "AI Mock Interviews",
      sublabel: "Voice simulations completed with instant pronunciation scoring",
      icon: Bot,
      gradient: "from-indigo-600 to-blue-700",
      badge: "Speech AI",
    },
    {
      id: "streak",
      value: 98,
      suffix: "%",
      label: "First-Try Pass Rate",
      sublabel: "Applicants who maintain a 7-day practice streak pass with ease",
      icon: Flame,
      gradient: "from-blue-700 to-sky-600",
      badge: "Proven",
    },
    {
      id: "tracking",
      value: 100,
      suffix: "%",
      label: "Progress Tracking",
      sublabel: "Real-time mastery index across Civics, Reading, and Writing",
      icon: TrendingUp,
      gradient: "from-blue-800 to-indigo-900",
      badge: "Analytics",
    },
  ];

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
      },
    },
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 28 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] as const },
    },
  };

  return (
    <section className="relative py-20 bg-gradient-to-b from-white via-blue-50/30 to-white overflow-hidden border-y border-slate-200/70">
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[300px] bg-gradient-to-r from-blue-300/15 via-sky-200/20 to-indigo-300/15 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-200/80 text-blue-800 text-xs font-bold uppercase tracking-wider mb-3 shadow-2xs"
          >
            <Sparkles className="w-3.5 h-3.5 text-blue-600" />
            <span>Proven Success Metrics</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 tracking-tight"
          >
            Engineered for Naturalization Exam Success
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-sm sm:text-base text-slate-600 mt-2"
          >
            Every question, flashcard, and AI voice prompt is built to maximize memory retention and speaking confidence.
          </motion.p>
        </div>

        {/* 4 Animated Statistic Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {stats.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.id}
                variants={cardVariants}
                whileHover={{ y: -6, scale: 1.02 }}
                transition={{ duration: 0.25 }}
                className="group relative glass-card rounded-3xl p-6 sm:p-7 border border-slate-200/90 shadow-sm hover:shadow-xl hover:shadow-blue-900/10 hover:border-blue-300 transition-all duration-300 flex flex-col justify-between overflow-hidden"
              >
                {/* Top decorative subtle light sweep */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600/0 via-blue-600/40 to-blue-600/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div>
                  {/* Top Bar: Icon + Badge */}
                  <div className="flex items-center justify-between mb-5">
                    <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${item.gradient} text-white flex items-center justify-center shadow-md shadow-blue-700/20 group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-slate-400 bg-slate-100/80 px-2.5 py-1 rounded-full border border-slate-200/60">
                      {item.badge}
                    </span>
                  </div>

                  {/* Counter Value */}
                  <div className="flex items-baseline gap-0.5 mb-2 font-sans font-black tracking-tight text-slate-900 text-3xl sm:text-4xl">
                    {item.prefix && (
                      <span className="text-2xl sm:text-3xl font-black text-blue-700">
                        {item.prefix}
                      </span>
                    )}
                    <AnimatedNumber target={item.value} />
                    {item.suffix && (
                      <span className="text-2xl sm:text-3xl font-black text-blue-700">
                        {item.suffix}
                      </span>
                    )}
                  </div>

                  {/* Label */}
                  <h3 className="text-base font-bold text-slate-900 mb-1 group-hover:text-blue-800 transition-colors">
                    {item.label}
                  </h3>

                  {/* Sublabel */}
                  <p className="text-xs text-slate-500 leading-relaxed">
                    {item.sublabel}
                  </p>
                </div>

                {/* Bottom Index */}
                <div className="mt-5 pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-400 font-mono">
                  <span>METRIC 0{index + 1}</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-500 opacity-60 group-hover:opacity-100 group-hover:scale-125 transition-all" />
                </div>
              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
}
