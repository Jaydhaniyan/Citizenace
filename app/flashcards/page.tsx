"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  RotateCcw,
  Eye,
  EyeOff,
  Sparkles,
  BookOpen,
  Filter,
  CheckCircle2,
  HelpCircle,
  Play,
  Home,
  LayoutDashboard,
} from "lucide-react";
import { flashcards, Flashcard } from "@/data/flashcards";

const CATEGORIES = ["All", "Government", "Rights", "History", "Civics"];

export default function FlashcardsPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);

  // Filter flashcards by selected category
  const filteredCards = useMemo(() => {
    if (selectedCategory === "All") return flashcards;
    return flashcards.filter(
      (card) => card.category.toLowerCase() === selectedCategory.toLowerCase()
    );
  }, [selectedCategory]);

  const totalCards = filteredCards.length;
  const currentCard: Flashcard | undefined = filteredCards[currentIndex];

  // Handle category change
  const handleSelectCategory = (cat: string) => {
    setSelectedCategory(cat);
    setCurrentIndex(0);
    setIsFlipped(false);
  };

  // Reset filter to All
  const handleResetFilter = () => {
    setSelectedCategory("All");
    setCurrentIndex(0);
    setIsFlipped(false);
  };

  // Navigation handlers
  const handleNext = () => {
    if (currentIndex < totalCards - 1) {
      setCurrentIndex((prev) => prev + 1);
      setIsFlipped(false);
    }
  };

  const handlePrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
      setIsFlipped(false);
    }
  };

  const handleToggleFlip = () => {
    setIsFlipped((prev) => !prev);
  };

  const progressPercentage =
    totalCards > 0 ? Math.round(((currentIndex + 1) / totalCards) * 100) : 0;

  // Category badge color mapping
  const getBadgeStyle = (cat: string) => {
    switch (cat.toLowerCase()) {
      case "government":
        return "bg-blue-500/15 text-blue-300 border-blue-500/30";
      case "rights":
        return "bg-emerald-500/15 text-emerald-300 border-emerald-500/30";
      case "history":
        return "bg-amber-500/15 text-amber-300 border-amber-500/30";
      case "civics":
        return "bg-purple-500/15 text-purple-300 border-purple-500/30";
      default:
        return "bg-white/10 text-gray-300 border-white/20";
    }
  };

  return (
    <main className="min-h-screen bg-[#050816] text-white px-4 sm:px-6 lg:px-8 py-8 sm:py-12 relative overflow-hidden flex flex-col justify-between">
      {/* Tech Glow Background Orbs */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-blue-600/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 -right-32 w-96 h-96 bg-purple-600/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-32 left-1/3 w-80 h-80 bg-indigo-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto w-full relative z-10 flex-1 flex flex-col">
        {/* Top Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 pb-6 border-b border-white/10">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-300 text-xs font-semibold mb-3">
              <Sparkles size={14} className="text-blue-400" />
              <span>Official 2026 USCIS Test Prep</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
              🇺🇸 Flashcards
            </h1>
            <p className="text-gray-400 text-sm sm:text-base mt-1">
              Learn the USCIS Civics Test one card at a time.
            </p>
          </div>

          {/* Quick Nav Links */}
          <div className="flex items-center gap-2.5">
            <Link
              href="/quiz"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 font-semibold text-xs sm:text-sm shadow-md shadow-blue-500/20 transition-all hover:scale-[1.02]"
            >
              <Play size={14} />
              <span>Practice Test</span>
            </Link>
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

        {/* Category Filter Chips & Reset Button */}
        <div className="flex flex-wrap items-center justify-between gap-3 mb-8">
          <div className="flex items-center gap-2 flex-wrap">
            <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider flex items-center gap-1.5 mr-1">
              <Filter size={13} className="text-blue-400" />
              <span>Category:</span>
            </span>

            {CATEGORIES.map((cat) => {
              const isActive = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  type="button"
                  onClick={() => handleSelectCategory(cat)}
                  className={`px-4 py-1.5 rounded-full text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                    isActive
                      ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-md shadow-blue-500/25 ring-2 ring-blue-400/40"
                      : "bg-white/5 hover:bg-white/10 text-gray-300 border border-white/10 hover:border-white/20"
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>

          {selectedCategory !== "All" && (
            <button
              type="button"
              onClick={handleResetFilter}
              className="inline-flex items-center gap-1.5 text-xs text-blue-400 hover:text-blue-300 font-medium hover:underline transition cursor-pointer"
            >
              <RotateCcw size={12} />
              <span>Reset Filter</span>
            </button>
          )}
        </div>

        {/* Progress Indicator */}
        <div className="mb-6">
          <div className="flex items-center justify-between text-xs sm:text-sm text-gray-400 font-medium mb-2">
            <span className="flex items-center gap-2 text-white">
              <BookOpen size={16} className="text-blue-400" />
              <span>
                Flashcard{" "}
                <strong className="text-white font-mono font-bold text-base">
                  {totalCards > 0 ? currentIndex + 1 : 0}
                </strong>{" "}
                of {totalCards}
              </span>
            </span>
            <span className="text-xs font-mono font-semibold text-purple-300 bg-purple-500/10 border border-purple-500/20 px-2.5 py-0.5 rounded-full">
              {progressPercentage}% Completed
            </span>
          </div>

          <div className="w-full h-2 bg-white/5 border border-white/10 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-blue-600 via-indigo-500 to-purple-600 transition-all duration-300 ease-out shadow-[0_0_12px_rgba(99,102,241,0.5)]"
              style={{ width: `${progressPercentage}%` }}
            />
          </div>
        </div>

        {/* Flashcard Area */}
        {currentCard ? (
          <div className="flex-1 flex flex-col justify-center mb-8">
            <motion.div
              key={currentCard.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              onClick={handleToggleFlip}
              className="relative min-h-[340px] sm:min-h-[380px] rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl p-6 sm:p-10 shadow-2xl hover:border-white/20 transition-all cursor-pointer flex flex-col justify-between group overflow-hidden"
            >
              {/* Card ambient corner glow */}
              <div className="absolute -top-20 -right-20 w-60 h-60 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
              <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />

              {/* Card Top: Category Badge & Card ID */}
              <div className="flex items-center justify-between gap-4 relative z-10">
                <span
                  className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold border tracking-wide uppercase ${getBadgeStyle(
                    currentCard.category
                  )}`}
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-current" />
                  <span>{currentCard.category}</span>
                </span>

                <span className="text-xs font-mono text-gray-400 bg-white/5 border border-white/10 px-2.5 py-0.5 rounded-md">
                  Card #{currentCard.id}
                </span>
              </div>

              {/* Card Middle: Question & Answer */}
              <div className="py-6 sm:py-8 my-auto relative z-10">
                <div className="flex items-center gap-2 text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">
                  <HelpCircle size={15} className="text-blue-400" />
                  <span>USCIS Official Civics Question</span>
                </div>

                <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-white tracking-tight leading-snug">
                  {currentCard.question}
                </h2>

                {/* Flip Answer Area */}
                <div className="mt-6 sm:mt-8 pt-6 border-t border-white/10">
                  <AnimatePresence mode="wait">
                    {isFlipped ? (
                      <motion.div
                        key="revealed-answer"
                        initial={{ opacity: 0, y: 10, scale: 0.98 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -10, scale: 0.98 }}
                        transition={{ duration: 0.25 }}
                        className="bg-emerald-500/10 border border-emerald-500/30 rounded-2xl p-4 sm:p-6 text-emerald-200 shadow-[0_0_25px_rgba(16,185,129,0.15)]"
                      >
                        <div className="flex items-start gap-3">
                          <CheckCircle2
                            size={22}
                            className="text-emerald-400 flex-shrink-0 mt-0.5"
                          />
                          <div>
                            <span className="text-xs font-bold uppercase tracking-wider text-emerald-400 block mb-1">
                              Official Answer
                            </span>
                            <p className="text-lg sm:text-xl font-bold text-white leading-relaxed">
                              {currentCard.answer}
                            </p>
                          </div>
                        </div>
                      </motion.div>
                    ) : (
                      <motion.div
                        key="hidden-answer"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="bg-white/[0.02] border border-dashed border-white/15 rounded-2xl p-5 sm:p-6 text-center text-gray-400 hover:border-blue-400/40 transition group-hover:bg-white/[0.04]"
                      >
                        <Eye size={20} className="mx-auto mb-2 text-gray-500 group-hover:text-blue-400 transition" />
                        <p className="text-sm font-medium text-gray-400">
                          Click card or tap <span className="text-blue-400 font-semibold">&quot;Show Answer&quot;</span> to reveal.
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>

              {/* Card Footer Info */}
              <div className="flex items-center justify-between text-xs text-gray-500 relative z-10 pt-2">
                <span>Tap card to toggle</span>
                <span>USCIS 2026 Test Bank</span>
              </div>
            </motion.div>
          </div>
        ) : (
          <div className="bg-white/5 border border-white/10 rounded-3xl p-12 text-center my-12">
            <p className="text-gray-400 mb-4">
              No flashcards found for category &quot;{selectedCategory}&quot;.
            </p>
            <button
              type="button"
              onClick={handleResetFilter}
              className="px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm transition"
            >
              Reset Filter to All
            </button>
          </div>
        )}

        {/* Bottom Action Controls */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-white/10">
          {/* Previous Button */}
          <button
            type="button"
            onClick={handlePrevious}
            disabled={currentIndex === 0}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl bg-white/5 hover:bg-white/10 active:bg-white/15 border border-white/10 text-gray-300 font-semibold text-sm transition-all disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer"
          >
            <ArrowLeft size={16} />
            <span>Previous</span>
          </button>

          {/* Center Flip Button */}
          <button
            type="button"
            onClick={handleToggleFlip}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-2xl bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white font-bold text-sm shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40 transition-all hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
          >
            {isFlipped ? (
              <>
                <EyeOff size={16} />
                <span>Hide Answer</span>
              </>
            ) : (
              <>
                <Eye size={16} />
                <span>Show Answer</span>
              </>
            )}
          </button>

          {/* Next Button */}
          <button
            type="button"
            onClick={handleNext}
            disabled={currentIndex >= totalCards - 1}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl bg-white/5 hover:bg-white/10 active:bg-white/15 border border-white/10 text-gray-300 font-semibold text-sm transition-all disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer"
          >
            <span>Next</span>
            <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </main>
  );
}
