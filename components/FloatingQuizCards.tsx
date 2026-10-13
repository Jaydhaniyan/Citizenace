"use client";

import React from "react";
import { motion } from "framer-motion";
import { CheckCircle2, Volume2, ShieldCheck, Flame, Bot } from "lucide-react";

export default function FloatingQuizCards() {
  return (
    <>
      {/* 3D Floating Card 1: Top-Left Official Civics Quiz */}
      <motion.div
        initial={{ opacity: 0, y: 30, x: -20, rotateX: 10, rotateY: -10 }}
        animate={{
          opacity: 1,
          y: [0, -12, 0],
          rotateX: [6, 2, 6],
          rotateY: [-8, -4, -8],
        }}
        transition={{
          y: { duration: 5.5, repeat: Infinity, ease: "easeInOut" },
          rotateX: { duration: 6, repeat: Infinity, ease: "easeInOut" },
          rotateY: { duration: 6.5, repeat: Infinity, ease: "easeInOut" },
          opacity: { duration: 0.8 },
        }}
        whileHover={{ scale: 1.05, rotateX: 0, rotateY: 0, zIndex: 30 }}
        className="absolute -top-4 sm:-top-6 left-0 sm:-left-6 z-20 w-64 sm:w-72 glass-card rounded-2xl p-4 shadow-xl border border-slate-200/90 cursor-pointer"
      >
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-1.5">
            <span className="text-xs">🇺🇸</span>
            <span className="text-[11px] font-bold uppercase tracking-wider text-blue-800 bg-blue-50 px-2 py-0.5 rounded-md border border-blue-200/60">
              USCIS Question #1
            </span>
          </div>
          <span className="text-[10px] font-mono font-semibold text-slate-400">Civics 2026</span>
        </div>

        <p className="text-xs sm:text-sm font-bold text-slate-900 leading-snug mb-2.5">
          &ldquo;What is the supreme law of the land?&rdquo;
        </p>

        <div className="bg-emerald-50 border border-emerald-300/80 rounded-xl p-2.5 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
            <span className="text-xs font-bold text-emerald-900">The Constitution</span>
          </div>
          <span className="text-[10px] font-extrabold uppercase tracking-wider text-emerald-700 bg-white px-1.5 py-0.5 rounded shadow-2xs">
            100% Correct
          </span>
        </div>
      </motion.div>

      {/* 3D Floating Card 2: Top-Right AI Naturalization Examiner */}
      <motion.div
        initial={{ opacity: 0, y: -20, x: 20, rotateX: -6, rotateY: 12 }}
        animate={{
          opacity: 1,
          y: [0, 14, 0],
          rotateX: [-4, -8, -4],
          rotateY: [10, 6, 10],
        }}
        transition={{
          y: { duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.5 },
          rotateX: { duration: 7, repeat: Infinity, ease: "easeInOut" },
          rotateY: { duration: 6.8, repeat: Infinity, ease: "easeInOut" },
          opacity: { duration: 0.8, delay: 0.2 },
        }}
        whileHover={{ scale: 1.05, rotateX: 0, rotateY: 0, zIndex: 30 }}
        className="absolute top-8 sm:top-4 right-0 sm:-right-4 z-20 w-60 sm:w-68 glass-card-navy text-white rounded-2xl p-4 shadow-2xl cursor-pointer"
      >
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg bg-blue-600 flex items-center justify-center text-white shadow-xs">
              <Bot className="w-4 h-4" />
            </div>
            <div>
              <div className="text-[11px] font-semibold text-blue-300">AI USCIS Examiner</div>
              <div className="text-xs font-bold text-white">Officer Miller</div>
            </div>
          </div>
          <span className="flex h-2 w-2 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-red-500" />
          </span>
        </div>

        <p className="text-[11px] text-slate-300 mb-2 leading-relaxed">
          &ldquo;Name one branch or part of the government.&rdquo;
        </p>

        {/* Audio Wave Simulation */}
        <div className="bg-slate-800/80 rounded-xl p-2 flex items-center justify-between border border-slate-700">
          <div className="flex items-center gap-1.5">
            <Volume2 className="w-3.5 h-3.5 text-blue-400" />
            <span className="text-[11px] font-semibold text-slate-200">Congress / Legislative</span>
          </div>
          <div className="flex items-end gap-0.5 h-3">
            {[40, 90, 60, 100, 50, 80].map((h, i) => (
              <motion.span
                key={i}
                animate={{ height: ["30%", `${h}%`, "30%"] }}
                transition={{ duration: 0.8, repeat: Infinity, delay: i * 0.12 }}
                className="w-1 bg-blue-400 rounded-full"
              />
            ))}
          </div>
        </div>
      </motion.div>

      {/* 3D Floating Card 3: Bottom-Left Pass Readiness Gauge */}
      <motion.div
        initial={{ opacity: 0, y: 30, x: -15, rotateX: 6, rotateY: -8 }}
        animate={{
          opacity: 1,
          y: [0, -10, 0],
          rotateX: [4, 8, 4],
          rotateY: [-6, -2, -6],
        }}
        transition={{
          y: { duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 },
          rotateX: { duration: 6.2, repeat: Infinity, ease: "easeInOut" },
          opacity: { duration: 0.8, delay: 0.3 },
        }}
        whileHover={{ scale: 1.05, rotateX: 0, rotateY: 0, zIndex: 30 }}
        className="absolute -bottom-6 sm:-bottom-8 left-2 sm:left-4 z-20 w-56 sm:w-64 glass-card rounded-2xl p-3.5 shadow-xl border border-slate-200/90 cursor-pointer"
      >
        <div className="flex items-center gap-3">
          <div className="relative flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-blue-700 to-indigo-800 text-white shadow-md shadow-blue-800/20">
            <ShieldCheck className="w-6 h-6" />
          </div>
          <div>
            <div className="flex items-center gap-1 text-[11px] font-bold text-slate-500 uppercase tracking-wider">
              <span>Readiness</span>
              <span className="text-emerald-600 font-extrabold">• USCIS Target</span>
            </div>
            <div className="text-xl font-black text-slate-900 tracking-tight flex items-baseline gap-1">
              <span>85%</span>
              <span className="text-xs font-semibold text-emerald-600">Passing is 60%</span>
            </div>
          </div>
        </div>
      </motion.div>

      {/* 3D Floating Card 4: Bottom-Right Daily Practice Streak */}
      <motion.div
        initial={{ opacity: 0, y: 20, x: 20, rotateX: -6, rotateY: 8 }}
        animate={{
          opacity: 1,
          y: [0, 12, 0],
          rotateX: [-3, -7, -3],
          rotateY: [8, 4, 8],
        }}
        transition={{
          y: { duration: 5.8, repeat: Infinity, ease: "easeInOut", delay: 1.5 },
          rotateX: { duration: 6.5, repeat: Infinity, ease: "easeInOut" },
          opacity: { duration: 0.8, delay: 0.4 },
        }}
        whileHover={{ scale: 1.05, rotateX: 0, rotateY: 0, zIndex: 30 }}
        className="absolute -bottom-8 sm:-bottom-10 right-2 sm:right-2 z-20 w-52 sm:w-60 glass-card rounded-2xl p-3.5 shadow-xl border border-slate-200/90 cursor-pointer"
      >
        <div className="flex items-center gap-3">
          <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-amber-500 to-red-500 text-white flex items-center justify-center shadow-md shadow-amber-500/20">
            <Flame className="w-6 h-6" />
          </div>
          <div>
            <div className="text-xs font-bold text-slate-800">7-Day Streak</div>
            <div className="text-[11px] text-slate-500 font-medium">
              10/10 civics mastered today
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
}
