"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Check,
  Sparkles,
  ChevronDown,
  Info,
  X,
  Play,
  LayoutDashboard,
  Home,
  ShieldCheck,
  Star,
  Zap,
} from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

const FAQ_LIST: FAQItem[] = [
  {
    question: "Can I use CitizenAce for free?",
    answer: "Yes. The free plan provides access to basic practice features.",
  },
  {
    question: "What does Pro include?",
    answer:
      "Pro provides access to advanced practice, flashcards, interview preparation and progress features.",
  },
  {
    question: "Is Lifetime access a one-time payment?",
    answer: "Yes. The Lifetime plan is designed as a one-time purchase.",
  },
  {
    question: "Can I cancel Pro?",
    answer:
      "Yes. Subscription management will be available once payments are integrated.",
  },
  {
    question: "Will more features be added?",
    answer:
      "Yes. CitizenAce will continue adding useful citizenship preparation features.",
  },
];

export default function PricingPage() {
  const [notice, setNotice] = useState<string | null>(null);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const handleUpgradeClick = () => {
    setNotice("Premium payments will be available soon.");
    setTimeout(() => {
      setNotice(null);
    }, 5000);
  };

  const toggleFaq = (index: number) => {
    setOpenFaq((prev) => (prev === index ? null : index));
  };

  return (
    <main className="min-h-screen bg-[#050816] text-white px-4 sm:px-6 lg:px-8 py-8 sm:py-14 relative overflow-hidden flex flex-col justify-between selection:bg-blue-500/30 selection:text-white">
      {/* Background Tech Glow Blobs */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-blue-600/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 -right-32 w-96 h-96 bg-purple-600/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-32 left-1/3 w-80 h-80 bg-indigo-600/10 rounded-full blur-3xl pointer-events-none" />

      {/* Floating Notice Toast */}
      {notice && (
        <div className="fixed top-6 left-1/2 -translate-x-1/2 z-50 max-w-md w-[92%] sm:w-auto bg-slate-900/95 border border-blue-500/40 text-blue-200 px-5 py-3.5 rounded-2xl shadow-2xl backdrop-blur-xl flex items-center justify-between gap-3 animate-in fade-in slide-in-from-top-4 duration-300">
          <div className="flex items-center gap-2.5 text-sm font-medium">
            <Info size={18} className="text-blue-400 flex-shrink-0" />
            <span>{notice}</span>
          </div>
          <button
            type="button"
            onClick={() => setNotice(null)}
            className="text-gray-400 hover:text-white transition p-1 cursor-pointer"
            aria-label="Dismiss notice"
          >
            <X size={16} />
          </button>
        </div>
      )}

      <div className="max-w-6xl mx-auto w-full relative z-10 flex-1 flex flex-col">
        {/* Top Header & Navigation */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-10 pb-6 border-b border-white/10">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-300 text-xs font-semibold mb-3">
              <Sparkles size={14} className="text-blue-400" />
              <span>USCIS Naturalization Test Preparation</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
              🇺🇸 CitizenAce Premium
            </h1>
            <p className="text-gray-400 text-base sm:text-lg mt-2">
              Prepare smarter. Practice better. Become confident.
            </p>
          </div>

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

        {/* ================= PRICING CARDS ================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 items-stretch mb-20">
          {/* PLAN 1: FREE */}
          <div className="rounded-3xl bg-white/5 border border-white/10 p-6 sm:p-8 backdrop-blur-xl flex flex-col justify-between transition-all hover:border-white/20 shadow-xl">
            <div>
              <div className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-white/10 text-gray-300 text-xs font-bold uppercase tracking-wider mb-4">
                Starter
              </div>

              <h2 className="text-2xl font-bold text-white mb-2">Free</h2>
              <p className="text-gray-400 text-sm mb-6 leading-relaxed">
                Essential tools to begin your U.S. citizenship study journey.
              </p>

              <div className="flex items-baseline gap-1 mb-8">
                <span className="text-4xl sm:text-5xl font-black font-mono tracking-tight text-white">
                  $0
                </span>
                <span className="text-gray-400 text-sm font-medium">/ free forever</span>
              </div>

              <div className="space-y-3.5 mb-8 pt-6 border-t border-white/10">
                <p className="text-xs font-bold uppercase tracking-wider text-gray-400">
                  Included Features:
                </p>
                <ul className="space-y-3 text-sm text-gray-300">
                  <li className="flex items-start gap-3">
                    <Check size={18} className="text-emerald-400 flex-shrink-0 mt-0.5" />
                    <span>Practice citizenship test</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check size={18} className="text-emerald-400 flex-shrink-0 mt-0.5" />
                    <span>Basic flashcards</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check size={18} className="text-emerald-400 flex-shrink-0 mt-0.5" />
                    <span>Basic interview practice</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check size={18} className="text-emerald-400 flex-shrink-0 mt-0.5" />
                    <span>Basic progress tracking</span>
                  </li>
                </ul>
              </div>
            </div>

            <button
              type="button"
              disabled
              className="w-full py-3.5 px-4 rounded-2xl bg-white/5 border border-white/10 text-gray-400 font-semibold text-sm cursor-default flex items-center justify-center gap-2"
            >
              <ShieldCheck size={16} />
              <span>Current Plan</span>
            </button>
          </div>

          {/* PLAN 2: PRO (MOST POPULAR) */}
          <div className="relative rounded-3xl bg-gradient-to-b from-blue-900/30 via-slate-900/90 to-purple-900/30 border-2 border-blue-500 shadow-[0_0_40px_rgba(59,130,246,0.25)] p-6 sm:p-8 backdrop-blur-xl flex flex-col justify-between scale-100 lg:scale-105 z-10 transition-transform">
            {/* MOST POPULAR BADGE */}
            <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-gradient-to-r from-blue-600 via-indigo-500 to-purple-600 text-white text-xs font-black uppercase tracking-wider px-4 py-1 rounded-full shadow-lg shadow-blue-500/40 flex items-center gap-1.5 whitespace-nowrap">
              <Star size={13} className="fill-current text-amber-300" />
              <span>⭐ MOST POPULAR</span>
            </div>

            <div>
              <div className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 text-xs font-bold uppercase tracking-wider mb-4 border border-blue-500/30">
                Recommended
              </div>

              <h2 className="text-2xl font-bold text-white mb-2">Pro</h2>
              <p className="text-gray-300 text-sm mb-6 leading-relaxed">
                Comprehensive preparation with unlimited practice tests and AI interview simulation.
              </p>

              <div className="flex items-baseline gap-1 mb-8">
                <span className="text-4xl sm:text-5xl font-black font-mono tracking-tight text-white">
                  $9.99
                </span>
                <span className="text-gray-400 text-sm font-medium">/ month</span>
              </div>

              <div className="space-y-3.5 mb-8 pt-6 border-t border-white/10">
                <p className="text-xs font-bold uppercase tracking-wider text-blue-300">
                  Everything in Free, plus:
                </p>
                <ul className="space-y-3 text-sm text-gray-200">
                  <li className="flex items-start gap-3">
                    <Check size={18} className="text-blue-400 flex-shrink-0 mt-0.5" />
                    <span className="font-medium text-white">Unlimited practice tests</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check size={18} className="text-blue-400 flex-shrink-0 mt-0.5" />
                    <span>Full flashcard library</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check size={18} className="text-blue-400 flex-shrink-0 mt-0.5" />
                    <span>Full AI interview practice</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check size={18} className="text-blue-400 flex-shrink-0 mt-0.5" />
                    <span>Advanced progress tracking</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check size={18} className="text-blue-400 flex-shrink-0 mt-0.5" />
                    <span>Detailed performance insights</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check size={18} className="text-blue-400 flex-shrink-0 mt-0.5" />
                    <span>Future AI-powered features</span>
                  </li>
                </ul>
              </div>
            </div>

            <button
              type="button"
              onClick={handleUpgradeClick}
              className="w-full py-4 px-4 rounded-2xl bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white font-bold text-sm shadow-xl shadow-blue-500/30 hover:shadow-blue-500/50 hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer flex items-center justify-center gap-2"
            >
              <Zap size={16} />
              <span>Upgrade to Pro</span>
            </button>
          </div>

          {/* PLAN 3: LIFETIME */}
          <div className="rounded-3xl bg-white/5 border border-purple-500/30 p-6 sm:p-8 backdrop-blur-xl flex flex-col justify-between transition-all hover:border-purple-500/60 shadow-xl">
            <div>
              <div className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-purple-500/20 text-purple-300 text-xs font-bold uppercase tracking-wider mb-4 border border-purple-500/30">
                Best Value
              </div>

              <h2 className="text-2xl font-bold text-white mb-2">Lifetime</h2>
              <p className="text-gray-400 text-sm mb-6 leading-relaxed">
                Pay once and enjoy permanent access to all current and future updates.
              </p>

              <div className="flex items-baseline gap-1 mb-8">
                <span className="text-4xl sm:text-5xl font-black font-mono tracking-tight text-white">
                  $49.99
                </span>
                <span className="text-gray-400 text-sm font-medium">/ one-time</span>
              </div>

              <div className="space-y-3.5 mb-8 pt-6 border-t border-white/10">
                <p className="text-xs font-bold uppercase tracking-wider text-purple-300">
                  Included Features:
                </p>
                <ul className="space-y-3 text-sm text-gray-300">
                  <li className="flex items-start gap-3">
                    <Check size={18} className="text-purple-400 flex-shrink-0 mt-0.5" />
                    <span className="font-medium text-white">Everything in Pro</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check size={18} className="text-purple-400 flex-shrink-0 mt-0.5" />
                    <span>Lifetime access</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check size={18} className="text-purple-400 flex-shrink-0 mt-0.5" />
                    <span>Future premium features</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check size={18} className="text-purple-400 flex-shrink-0 mt-0.5" />
                    <span>No monthly subscription</span>
                  </li>
                </ul>
              </div>
            </div>

            <button
              type="button"
              onClick={handleUpgradeClick}
              className="w-full py-3.5 px-4 rounded-2xl bg-white/10 hover:bg-white/15 border border-white/20 hover:border-purple-500/50 text-white font-bold text-sm transition-all hover:scale-[1.02] active:scale-[0.98] cursor-pointer flex items-center justify-center gap-2"
            >
              <Sparkles size={16} className="text-purple-400" />
              <span>Get Lifetime Access</span>
            </button>
          </div>
        </div>

        {/* ================= FAQ SECTION ================= */}
        <div className="mb-20 max-w-3xl mx-auto w-full">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mb-3">
              Frequently Asked Questions
            </h2>
            <p className="text-gray-400 text-sm sm:text-base">
              Got questions about our plans? Here are answers to common questions.
            </p>
          </div>

          <div className="space-y-3.5">
            {FAQ_LIST.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={faq.question}
                  className="rounded-2xl bg-white/[0.03] border border-white/10 overflow-hidden transition-all hover:border-white/20"
                >
                  <button
                    type="button"
                    onClick={() => toggleFaq(idx)}
                    className="w-full p-5 text-left flex items-center justify-between gap-4 font-semibold text-white text-base sm:text-lg cursor-pointer"
                  >
                    <span>{faq.question}</span>
                    <ChevronDown
                      size={20}
                      className={`text-gray-400 transition-transform duration-200 flex-shrink-0 ${
                        isOpen ? "rotate-180 text-blue-400" : ""
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-5 pt-1 text-gray-300 text-sm sm:text-base leading-relaxed border-t border-white/5">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* ================= BOTTOM CTA SECTION ================= */}
        <div className="rounded-3xl bg-gradient-to-r from-blue-900/30 via-slate-900 to-purple-900/30 border border-white/15 p-8 sm:p-12 text-center shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-2xl mx-auto">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight mb-4">
              Ready to become citizenship-test ready?
            </h2>

            <p className="text-gray-300 text-sm sm:text-base mb-8 leading-relaxed">
              Start practicing today and build confidence for your U.S. citizenship interview.
            </p>

            <Link
              href="/quiz"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white font-bold text-base shadow-xl shadow-blue-500/25 hover:shadow-blue-500/40 hover:scale-[1.02] active:scale-[0.98] transition-all"
            >
              <span>Start Free Practice</span>
              <Play size={16} />
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
