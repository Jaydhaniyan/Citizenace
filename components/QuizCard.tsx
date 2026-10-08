"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, XCircle, HelpCircle, Check, Info } from "lucide-react";
import { Question } from "@/data/questions";

export interface QuizCardProps {
  question: Question;
  selectedOption: string | null;
  isSubmitted: boolean;
  onSelectOption: (option: string) => void;
}

const OPTION_LETTERS = ["A", "B", "C", "D"];

export default function QuizCard({
  question,
  selectedOption,
  isSubmitted,
  onSelectOption,
}: QuizCardProps) {
  const isCorrect = selectedOption === question.answer;

  return (
    <motion.div
      key={question.id}
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -16 }}
      transition={{ duration: 0.35, ease: "easeOut" }}
      className="relative rounded-3xl bg-slate-900/80 border border-white/10 backdrop-blur-xl p-6 sm:p-8 md:p-10 shadow-2xl shadow-blue-950/40 overflow-hidden"
    >
      {/* Ambient background glow accents */}
      <div className="absolute -top-24 -right-24 w-72 h-72 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 w-72 h-72 bg-purple-600/10 rounded-full blur-3xl pointer-events-none" />

      {/* Top Question Tag */}
      <div className="flex items-center justify-between gap-4 mb-6">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-300 text-xs font-semibold tracking-wide">
          <HelpCircle className="w-3.5 h-3.5 text-blue-400" />
          <span>USCIS Civics Question #{question.id}</span>
        </div>

        <span className="text-xs font-mono text-slate-400 bg-slate-800/60 border border-white/5 px-2.5 py-0.5 rounded-md">
          Official 2026 Test
        </span>
      </div>

      {/* Large Question Text */}
      <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-white tracking-tight leading-snug mb-8">
        {question.question}
      </h2>

      {/* Four Option Cards */}
      <div className="grid grid-cols-1 gap-3.5 sm:gap-4 mb-6">
        {question.options.map((option, idx) => {
          const isSelected = selectedOption === option;
          const isAnswer = option === question.answer;
          const letter = OPTION_LETTERS[idx] || String.fromCharCode(65 + idx);

          // Determine styles based on state
          let cardStyle =
            "border-white/10 bg-slate-800/40 text-slate-200 hover:border-blue-500/40 hover:bg-slate-800/80";
          let badgeStyle =
            "bg-slate-800 border-white/10 text-slate-400 group-hover:border-blue-500/30 group-hover:text-blue-300";
          let indicatorIcon = null;

          if (!isSubmitted) {
            if (isSelected) {
              cardStyle =
                "border-blue-500 bg-blue-500/15 text-white ring-2 ring-blue-500/60 shadow-[0_0_25px_rgba(59,130,246,0.35)]";
              badgeStyle = "bg-blue-600 border-blue-400 text-white";
              indicatorIcon = (
                <div className="w-5 h-5 rounded-full bg-blue-500 flex items-center justify-center text-white shadow-sm">
                  <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                </div>
              );
            }
          } else {
            // Submitted state
            if (isAnswer) {
              cardStyle =
                "border-emerald-500 bg-emerald-500/15 text-emerald-100 ring-2 ring-emerald-500/60 shadow-[0_0_25px_rgba(16,185,129,0.35)]";
              badgeStyle = "bg-emerald-600 border-emerald-400 text-white";
              indicatorIcon = (
                <div className="flex items-center gap-1.5 text-xs font-bold text-emerald-400">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                </div>
              );
            } else if (isSelected && !isAnswer) {
              cardStyle =
                "border-red-500 bg-red-500/15 text-red-100 ring-2 ring-red-500/60 shadow-[0_0_25px_rgba(239,68,68,0.35)]";
              badgeStyle = "bg-red-600 border-red-400 text-white";
              indicatorIcon = (
                <div className="flex items-center gap-1.5 text-xs font-bold text-red-400">
                  <XCircle className="w-5 h-5 text-red-400" />
                </div>
              );
            } else {
              cardStyle = "border-white/5 bg-slate-900/30 text-slate-500 opacity-50";
              badgeStyle = "bg-slate-900/60 border-white/5 text-slate-600";
            }
          }

          return (
            <motion.button
              key={option}
              type="button"
              onClick={() => {
                if (!isSubmitted) onSelectOption(option);
              }}
              disabled={isSubmitted}
              whileHover={!isSubmitted ? { scale: 1.012, y: -1 } : {}}
              whileTap={!isSubmitted ? { scale: 0.99 } : {}}
              className={`w-full group text-left p-4 sm:p-5 rounded-2xl border backdrop-blur-md transition-all duration-200 flex items-center justify-between gap-4 cursor-pointer disabled:cursor-default ${cardStyle}`}
            >
              <div className="flex items-center gap-3.5 min-w-0">
                <span
                  className={`w-9 h-9 rounded-xl flex items-center justify-center text-sm font-bold border transition-colors flex-shrink-0 ${badgeStyle}`}
                >
                  {letter}
                </span>
                <span className="text-sm sm:text-base font-medium leading-snug break-words">
                  {option}
                </span>
              </div>

              {indicatorIcon && (
                <div className="flex-shrink-0 ml-2">{indicatorIcon}</div>
              )}
            </motion.button>
          );
        })}
      </div>

      {/* Explanation Banner when submitted */}
      <AnimatePresence>
        {isSubmitted && (
          <motion.div
            initial={{ opacity: 0, height: 0, y: 12 }}
            animate={{ opacity: 1, height: "auto", y: 0 }}
            exit={{ opacity: 0, height: 0, y: -12 }}
            transition={{ duration: 0.35 }}
            className={`p-4 sm:p-5 rounded-2xl border backdrop-blur-md overflow-hidden ${
              isCorrect
                ? "bg-emerald-950/40 border-emerald-500/30 text-emerald-200 shadow-[0_0_20px_rgba(16,185,129,0.15)]"
                : "bg-red-950/40 border-red-500/30 text-red-200 shadow-[0_0_20px_rgba(239,68,68,0.15)]"
            }`}
          >
            <div className="flex items-start gap-3.5">
              {isCorrect ? (
                <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
              ) : (
                <Info className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
              )}
              <div className="space-y-1">
                <h4 className="text-sm sm:text-base font-bold text-white flex items-center gap-2">
                  {isCorrect ? (
                    <span className="text-emerald-400">Correct! Great job.</span>
                  ) : (
                    <span className="text-red-400">Incorrect. Correct Answer: {question.answer}</span>
                  )}
                </h4>
                <p className="text-xs sm:text-sm leading-relaxed text-slate-300">
                  {question.explanation}
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
