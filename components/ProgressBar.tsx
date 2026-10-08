"use client";

import React from "react";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

export interface ProgressBarProps {
  current: number; // Current question number (1-based, e.g. 3)
  total: number;   // Total questions count (e.g. 10)
}

export default function ProgressBar({ current, total }: ProgressBarProps) {
  const percentage = total > 0 ? Math.min(100, Math.max(0, Math.round((current / total) * 100))) : 0;

  return (
    <div className="w-full space-y-2.5">
      <div className="flex items-center justify-between text-xs sm:text-sm font-medium">
        <div className="flex items-center gap-2 text-slate-300">
          <Sparkles className="w-4 h-4 text-blue-400 animate-pulse" />
          <span className="font-semibold text-white">Quiz Progress</span>
          <span className="text-slate-500">|</span>
          <span className="text-slate-400">
            Question <span className="font-bold text-white">{current}</span> of {total}
          </span>
        </div>
        <div className="flex items-center gap-1.5">
          <span className="text-xs font-mono font-bold text-purple-300 bg-purple-500/10 border border-purple-500/20 px-2.5 py-0.5 rounded-full shadow-[0_0_12px_rgba(168,85,247,0.2)]">
            {percentage}% completed
          </span>
        </div>
      </div>

      {/* Progress track */}
      <div className="relative w-full h-3 bg-slate-950/80 rounded-full p-0.5 border border-white/10 shadow-[inset_0_2px_4px_rgba(0,0,0,0.6)] overflow-hidden">
        <motion.div
          className="h-full rounded-full bg-gradient-to-r from-blue-600 via-indigo-500 to-purple-600 shadow-[0_0_15px_rgba(99,102,241,0.6)] relative overflow-hidden"
          initial={{ width: 0 }}
          animate={{ width: `${percentage}%` }}
          transition={{ duration: 0.45, ease: "easeOut" }}
        >
          {/* Subtle animated shine effect across bar */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/25 to-transparent -translate-x-full animate-[shimmer_2s_infinite]" />
        </motion.div>
      </div>
    </div>
  );
}
