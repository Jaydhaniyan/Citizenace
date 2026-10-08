"use client";

import React, { useState } from "react";
import { X, CheckCircle2, Bot, ArrowRight } from "lucide-react";

interface DemoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function DemoModal({ isOpen, onClose }: DemoModalProps) {
  const [activeTab, setActiveTab] = useState<"quiz" | "interview" | "report">("interview");

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="px-6 py-4 border-b border-slate-100 flex items-center justify-between bg-slate-50/70">
          <div className="flex items-center gap-2.5">
            <span className="text-xl">🇺🇸</span>
            <div>
              <h3 className="text-base font-bold text-slate-900">
                CitizenPrep AI Interactive Walkthrough
              </h3>
              <p className="text-xs text-slate-500">See how you pass on your very first try</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-slate-700 hover:bg-slate-200/60 rounded-full transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Nav */}
        <div className="flex border-b border-slate-200 bg-white px-6 gap-2 pt-3">
          {[
            { id: "quiz", label: "1. 100 Civics Quiz" },
            { id: "interview", label: "2. Voice AI Interview" },
            { id: "report", label: "3. Pass Readiness" },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as "quiz" | "interview" | "report")}
              className={`pb-3 text-xs sm:text-sm font-semibold border-b-2 px-3 transition-colors ${
                activeTab === tab.id
                  ? "border-blue-700 text-blue-800"
                  : "border-transparent text-slate-500 hover:text-slate-800"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="p-6">
          {activeTab === "quiz" && (
            <div className="space-y-4">
              <div className="bg-blue-50/60 border border-blue-100 rounded-2xl p-4">
                <span className="text-xs font-bold uppercase text-blue-700 tracking-wider">
                  Adaptive Flashcard Engine
                </span>
                <h4 className="text-base font-bold text-slate-900 mt-1">
                  How many amendments does the Constitution have?
                </h4>
                <div className="mt-3 grid grid-cols-2 gap-2 text-sm font-medium">
                  <div className="p-2.5 bg-white border border-slate-200 rounded-xl text-slate-600">10 (Ten)</div>
                  <div className="p-2.5 bg-emerald-50 border border-emerald-400 rounded-xl text-emerald-800 flex items-center justify-between font-bold">
                    <span>27 (Twenty-Seven)</span>
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  </div>
                  <div className="p-2.5 bg-white border border-slate-200 rounded-xl text-slate-600">50 (Fifty)</div>
                  <div className="p-2.5 bg-white border border-slate-200 rounded-xl text-slate-600">21 (Twenty-One)</div>
                </div>
              </div>
              <p className="text-xs text-slate-600">
                Spaced repetition algorithm focuses on the 10 questions applicants miss most frequently.
              </p>
            </div>
          )}

          {activeTab === "interview" && (
            <div className="space-y-4">
              <div className="bg-slate-900 text-white rounded-2xl p-5 relative overflow-hidden">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center">
                      <Bot className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <div className="text-xs font-semibold text-blue-300">USCIS Simulation Officer</div>
                      <div className="text-sm font-bold">Officer Miller (Voice Active)</div>
                    </div>
                  </div>
                  <span className="px-2.5 py-1 text-[11px] font-bold bg-red-600/20 text-red-300 border border-red-500/30 rounded-full flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-red-500 animate-ping" />
                    Live Audio
                  </span>
                </div>
                <div className="space-y-3 font-sans text-sm">
                  <div className="bg-slate-800/80 p-3 rounded-xl border border-slate-700">
                    <p className="text-slate-300">
                      &ldquo;Good morning. Please raise your right hand. Do you swear to tell the truth, the whole truth, and nothing but the truth?&rdquo;
                    </p>
                  </div>
                  <div className="bg-blue-900/60 p-3 rounded-xl border border-blue-700/60 ml-6">
                    <p className="text-blue-100 font-semibold">
                      &ldquo;Yes, I do.&rdquo;
                    </p>
                    <span className="text-[11px] text-emerald-300 mt-1 block">
                      ✓ Clarity: 99% • Confidence: High
                    </span>
                  </div>
                </div>
              </div>
              <p className="text-xs text-slate-600">
                Practice answering Form N-400 eligibility questions aloud so you never freeze during your actual appointment.
              </p>
            </div>
          )}

          {activeTab === "report" && (
            <div className="space-y-4">
              <div className="grid grid-cols-3 gap-3">
                <div className="p-4 bg-blue-50 border border-blue-100 rounded-2xl text-center">
                  <div className="text-2xl font-black text-blue-900">98.4%</div>
                  <div className="text-xs font-semibold text-blue-700 mt-0.5">Overall Readiness</div>
                </div>
                <div className="p-4 bg-emerald-50 border border-emerald-100 rounded-2xl text-center">
                  <div className="text-2xl font-black text-emerald-800">100/100</div>
                  <div className="text-xs font-semibold text-emerald-700 mt-0.5">Civics Mastered</div>
                </div>
                <div className="p-4 bg-indigo-50 border border-indigo-100 rounded-2xl text-center">
                  <div className="text-2xl font-black text-indigo-900">100%</div>
                  <div className="text-xs font-semibold text-indigo-700 mt-0.5">Reading & Writing</div>
                </div>
              </div>
              <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200 text-xs text-slate-600 space-y-1">
                <div className="font-bold text-slate-900">USCIS Pass Guarantee</div>
                <p>When all 3 categories reach the 95% threshold, you are statistically primed to pass on your first attempt.</p>
              </div>
            </div>
          )}
        </div>

        {/* Footer CTA */}
        <div className="px-6 py-4 bg-slate-50 border-t border-slate-100 flex items-center justify-between">
          <button
            onClick={onClose}
            className="text-xs font-semibold text-slate-600 hover:text-slate-900"
          >
            Close
          </button>
          <a
            href="#practice"
            onClick={onClose}
            className="inline-flex items-center gap-2 px-5 py-2.5 text-xs sm:text-sm font-bold text-white bg-blue-700 hover:bg-blue-800 rounded-xl shadow-sm transition-colors"
          >
            <span>Start Free Practice Test</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </div>
  );
}
