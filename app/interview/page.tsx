"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  Sparkles,
  CheckCircle2,
  XCircle,
  ArrowRight,
  RotateCcw,
  LayoutDashboard,
  ShieldCheck,
  Award,
  Zap,
  HelpCircle,
  Home,
} from "lucide-react";
import { interviewQuestions } from "@/data/interviewQuestions";

type InterviewStage = "start" | "question" | "result";

export default function InterviewPage() {
  const [stage, setStage] = useState<InterviewStage>("start");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [score, setScore] = useState(0);

  const totalQuestions = interviewQuestions.length;
  const currentQuestion = interviewQuestions[currentIndex];

  // Start interview handler
  const handleStart = () => {
    setCurrentIndex(0);
    setSelectedOption(null);
    setIsAnswered(false);
    setScore(0);
    setStage("question");
  };

  // Option selection handler
  const handleSelectOption = (option: string) => {
    if (isAnswered) return; // Prevent multiple answers

    setSelectedOption(option);
    setIsAnswered(true);

    if (option === currentQuestion.correctAnswer) {
      setScore((prev) => prev + 1);
    }
  };

  // Next question or finish handler
  const handleNext = () => {
    if (currentIndex < totalQuestions - 1) {
      setCurrentIndex((prev) => prev + 1);
      setSelectedOption(null);
      setIsAnswered(false);
    } else {
      setStage("result");
    }
  };

  // Restart interview handler
  const handleRestart = () => {
    setCurrentIndex(0);
    setSelectedOption(null);
    setIsAnswered(false);
    setScore(0);
    setStage("question");
  };

  // Calculate score and feedback
  const percentage = Math.round((score / totalQuestions) * 100);

  const getFeedbackMessage = (finalScore: number): string => {
    if (finalScore >= 13) return "Excellent! You are well prepared.";
    if (finalScore >= 10) return "Good job! A little more practice will help.";
    if (finalScore >= 7) return "Keep practicing. You are getting there.";
    return "Keep studying the civics questions and try again.";
  };

  const progressPercentage = Math.round(
    ((currentIndex + 1) / totalQuestions) * 100
  );

  const optionLetters = ["A", "B", "C", "D"];

  return (
    <main className="min-h-screen bg-[#050816] text-white px-4 sm:px-6 lg:px-8 py-8 sm:py-12 relative overflow-hidden flex flex-col justify-between">
      {/* Background Tech Glow Blobs */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-blue-600/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 -right-32 w-96 h-96 bg-purple-600/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-32 left-1/3 w-80 h-80 bg-indigo-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-3xl mx-auto w-full relative z-10 flex-1 flex flex-col">
        {/* Top Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8 pb-6 border-b border-white/10">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-300 text-xs font-semibold mb-3">
              <Sparkles size={14} className="text-blue-400" />
              <span>Official USCIS Civics Simulation</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
              🇺🇸 AI Citizenship Interview
            </h1>
            <p className="text-gray-400 text-sm sm:text-base mt-1">
              Practice your U.S. citizenship interview with realistic civics questions.
            </p>
          </div>

          <div className="flex items-center gap-2.5">
            <Link
              href="/dashboard"
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-gray-300 text-xs sm:text-sm font-medium transition"
            >
              <LayoutDashboard size={14} />
              <span>Dashboard</span>
            </Link>
            <Link
              href="/"
              className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-gray-400 hover:text-white text-xs sm:text-sm font-medium transition"
              title="Home"
            >
              <Home size={14} />
            </Link>
          </div>
        </div>

        {/* ================= STAGE 1: START SCREEN ================= */}
        {stage === "start" && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35 }}
            className="my-auto rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl p-8 sm:p-12 shadow-2xl text-center relative overflow-hidden"
          >
            <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-3xl bg-gradient-to-br from-blue-600/20 to-purple-600/20 border border-blue-500/30 flex items-center justify-center mx-auto mb-6 text-3xl sm:text-4xl shadow-lg shadow-blue-500/10">
              🇺🇸
            </div>

            <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight mb-3">
              AI Citizenship Interview
            </h2>

            <p className="text-gray-300 text-base sm:text-lg max-w-lg mx-auto mb-8 font-normal leading-relaxed">
              Test your knowledge before your real citizenship interview.
            </p>

            {/* Feature Pills */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 max-w-xl mx-auto mb-10">
              <div className="bg-white/5 border border-white/10 rounded-2xl p-4 flex flex-col items-center justify-center text-center">
                <HelpCircle size={22} className="text-blue-400 mb-1.5" />
                <span className="font-bold text-white text-sm">15 Questions</span>
                <span className="text-gray-400 text-xs mt-0.5">Official USCIS Topics</span>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-2xl p-4 flex flex-col items-center justify-center text-center">
                <Zap size={22} className="text-amber-400 mb-1.5" />
                <span className="font-bold text-white text-sm">Instant Feedback</span>
                <span className="text-gray-400 text-xs mt-0.5">Real-time Explanations</span>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-2xl p-4 flex flex-col items-center justify-center text-center">
                <Award size={22} className="text-purple-400 mb-1.5" />
                <span className="font-bold text-white text-sm">Final Score</span>
                <span className="text-gray-400 text-xs mt-0.5">Readiness Assessment</span>
              </div>
            </div>

            {/* Start Button */}
            <button
              type="button"
              onClick={handleStart}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white font-bold text-base shadow-xl shadow-blue-500/25 hover:shadow-blue-500/40 hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer"
            >
              <span>Start Interview</span>
              <ArrowRight size={18} />
            </button>
          </motion.div>
        )}

        {/* ================= STAGE 2: QUESTION SCREEN ================= */}
        {stage === "question" && currentQuestion && (
          <div className="my-auto flex-1 flex flex-col justify-center">
            {/* Progress Bar & Counter Header */}
            <div className="mb-6">
              <div className="flex items-center justify-between text-xs sm:text-sm text-gray-400 font-medium mb-2.5">
                <span className="text-white font-semibold flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
                  <span>
                    Question <strong className="text-blue-400 font-mono text-base">{currentIndex + 1}</strong> of {totalQuestions}
                  </span>
                </span>
                <span className="text-xs font-mono font-semibold text-purple-300 bg-purple-500/10 border border-purple-500/20 px-2.5 py-0.5 rounded-full">
                  {progressPercentage}% Completed
                </span>
              </div>

              {/* Visual Progress Bar */}
              <div className="w-full h-2.5 bg-white/5 border border-white/10 rounded-full overflow-hidden p-0.5">
                <div
                  className="h-full bg-gradient-to-r from-blue-600 via-indigo-500 to-purple-600 rounded-full transition-all duration-300 ease-out shadow-[0_0_12px_rgba(99,102,241,0.5)]"
                  style={{ width: `${progressPercentage}%` }}
                />
              </div>
            </div>

            {/* Question Card */}
            <motion.div
              key={currentQuestion.id}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl p-6 sm:p-10 shadow-2xl relative overflow-hidden"
            >
              {/* Question Text */}
              <div className="mb-8">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-300 text-xs font-semibold uppercase tracking-wider mb-3">
                  <HelpCircle size={13} className="text-blue-400" />
                  <span>USCIS Civics Question</span>
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-white tracking-tight leading-snug">
                  {currentQuestion.question}
                </h2>
              </div>

              {/* 4 Answer Options */}
              <div className="space-y-3.5 mb-6">
                {currentQuestion.options.map((option, idx) => {
                  const isSelected = selectedOption === option;
                  const isCorrect = option === currentQuestion.correctAnswer;
                  const letter = optionLetters[idx];

                  let buttonStyle =
                    "border-white/10 bg-white/[0.03] hover:bg-white/[0.08] hover:border-blue-400/40 text-gray-200";
                  let badgeStyle =
                    "bg-white/10 text-gray-300 border-white/10 group-hover:border-blue-400/30 group-hover:text-blue-300";

                  if (isAnswered) {
                    if (isCorrect) {
                      // Correct answer always green
                      buttonStyle =
                        "border-emerald-500 bg-emerald-500/20 text-emerald-100 ring-2 ring-emerald-500/50 shadow-[0_0_20px_rgba(16,185,129,0.25)]";
                      badgeStyle = "bg-emerald-500 border-emerald-400 text-white";
                    } else if (isSelected && !isCorrect) {
                      // Wrong selected option red
                      buttonStyle =
                        "border-red-500 bg-red-500/20 text-red-100 ring-2 ring-red-500/50 shadow-[0_0_20px_rgba(239,68,68,0.25)]";
                      badgeStyle = "bg-red-500 border-red-400 text-white";
                    } else {
                      // Other unselected options dimmed
                      buttonStyle =
                        "border-white/5 bg-white/[0.01] text-gray-500 opacity-40";
                      badgeStyle = "bg-white/5 text-gray-600 border-white/5";
                    }
                  }

                  return (
                    <button
                      key={option}
                      type="button"
                      onClick={() => handleSelectOption(option)}
                      disabled={isAnswered}
                      className={`w-full text-left p-4 sm:p-4.5 rounded-2xl border transition-all flex items-center justify-between gap-4 cursor-pointer disabled:cursor-default group ${buttonStyle}`}
                    >
                      <div className="flex items-center gap-3.5 min-w-0">
                        <span
                          className={`w-8 h-8 rounded-xl flex items-center justify-center text-xs sm:text-sm font-bold border transition-colors flex-shrink-0 ${badgeStyle}`}
                        >
                          {letter}
                        </span>
                        <span className="text-sm sm:text-base font-medium leading-snug break-words">
                          {option}
                        </span>
                      </div>

                      {isAnswered && (
                        <div className="flex-shrink-0 ml-2">
                          {isCorrect && (
                            <CheckCircle2 size={20} className="text-emerald-400" />
                          )}
                          {isSelected && !isCorrect && (
                            <XCircle size={20} className="text-red-400" />
                          )}
                        </div>
                      )}
                    </button>
                  );
                })}
              </div>

              {/* Feedback and Next Action Bar */}
              <AnimatePresence>
                {isAnswered && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.25 }}
                    className="pt-4 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4"
                  >
                    <div className="flex items-center gap-2.5 text-sm">
                      {selectedOption === currentQuestion.correctAnswer ? (
                        <div className="flex items-center gap-2 text-emerald-400 font-semibold">
                          <CheckCircle2 size={18} />
                          <span>Correct! Well done.</span>
                        </div>
                      ) : (
                        <div className="flex items-center gap-2 text-red-400 font-medium">
                          <XCircle size={18} className="flex-shrink-0" />
                          <span>
                            Incorrect. The correct answer is:{" "}
                            <strong className="text-white font-semibold">
                              {currentQuestion.correctAnswer}
                            </strong>
                          </span>
                        </div>
                      )}
                    </div>

                    <button
                      type="button"
                      onClick={handleNext}
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white font-bold text-sm shadow-lg shadow-blue-500/25 transition-all hover:scale-[1.02] cursor-pointer"
                    >
                      <span>
                        {currentIndex < totalQuestions - 1
                          ? "Next Question"
                          : "View Results"}
                      </span>
                      <ArrowRight size={16} />
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </div>
        )}

        {/* ================= STAGE 3: RESULT SCREEN ================= */}
        {stage === "result" && (
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.35 }}
            className="my-auto rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl p-8 sm:p-12 shadow-2xl text-center relative overflow-hidden"
          >
            <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-3xl bg-gradient-to-br from-blue-600/20 to-purple-600/20 border border-blue-500/30 flex items-center justify-center mx-auto mb-6 text-3xl sm:text-4xl shadow-lg">
              🎉
            </div>

            <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight mb-2">
              Interview Complete!
            </h2>

            <p className="text-gray-400 text-sm sm:text-base max-w-md mx-auto mb-8">
              {percentage >= 60
                ? "You passed the official USCIS Civics Interview standard (≥ 60%)."
                : "You did not reach the 60% passing mark this time. Keep practicing!"}
            </p>

            {/* Score Showcase */}
            <div className="bg-white/[0.03] border border-white/10 rounded-3xl p-6 sm:p-8 max-w-md mx-auto mb-8 shadow-inner">
              <span className="text-xs uppercase tracking-wider font-semibold text-gray-400 block mb-1">
                Your Score
              </span>
              <div className="text-5xl sm:text-6xl font-black font-mono tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-300 to-purple-400 mb-2">
                {score} <span className="text-gray-600 font-normal">/</span> {totalQuestions}
              </div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-purple-300 font-bold mb-3">
                Percentage: {percentage}%
              </div>

              {/* Performance Message based on user score */}
              <div className="pt-3 border-t border-white/10">
                <p className="text-sm sm:text-base font-semibold text-white">
                  &ldquo;{getFeedbackMessage(score)}&rdquo;
                </p>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 max-w-md mx-auto">
              <button
                type="button"
                onClick={handleRestart}
                className="w-full sm:w-auto flex-1 inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-2xl bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white font-bold text-sm shadow-lg shadow-blue-500/25 transition-all hover:scale-[1.02] cursor-pointer"
              >
                <RotateCcw size={16} />
                <span>Try Again</span>
              </button>

              <Link
                href="/dashboard"
                className="w-full sm:w-auto flex-1 inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 text-gray-200 hover:text-white font-semibold text-sm transition-all"
              >
                <LayoutDashboard size={16} />
                <span>Back to Dashboard</span>
              </Link>
            </div>
          </motion.div>
        )}
      </div>
    </main>
  );
}
