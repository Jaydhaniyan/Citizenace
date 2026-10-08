"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, HelpCircle, Sparkles } from "lucide-react";

interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: string;
}

export default function FAQ() {
  const [openId, setOpenId] = useState<string | null>("faq-1");

  const faqs: FAQItem[] = [
    {
      id: "faq-1",
      category: "Curriculum",
      question: "How many USCIS questions are included in CitizenPrep AI?",
      answer:
        "CitizenPrep AI includes the full official 100 civics questions (2008 version currently in standard use) as well as the 128 questions bank. We automatically update answers whenever state governors, senators, and US representatives change, so your study material is always 100% accurate for your exact location and ZIP code.",
    },
    {
      id: "faq-2",
      category: "Pricing",
      question: "Is CitizenPrep AI really free to use?",
      answer:
        "Yes! You can take unlimited free civics practice tests, study essential flashcards, and review the official reading & writing vocabulary list completely free without needing a credit card. We also offer an optional Premium pass for unlimited voice AI mock interviews and detailed predictive readiness analytics.",
    },
    {
      id: "faq-3",
      category: "AI Simulation",
      question: "How does the AI Mock Interview simulate the real USCIS officer?",
      answer:
        "Using real-time speech recognition, our AI Naturalization Examiner conducts a realistic verbal interview. It asks both randomized civics questions and verifies your Form N-400 biographical answers, giving you instant constructive feedback on clarity, pronunciation, and confidence.",
    },
    {
      id: "faq-4",
      category: "Compatibility",
      question: "Can I practice on mobile phones and tablets?",
      answer:
        "CitizenPrep AI is built as a fully responsive web application that runs smoothly on any iPhone, iPad, Android device, or desktop computer. You don't need to download an app store package—simply open your browser and your progress automatically syncs across all your devices.",
    },
    {
      id: "faq-5",
      category: "Updates",
      question: "Is all content verified and updated for 2026?",
      answer:
        "Yes, all questions, civics answers, cabinet members, Supreme Court Justices, and regional representatives are strictly verified and updated for 2026 USCIS testing requirements.",
    },
    {
      id: "faq-6",
      category: "Languages",
      question: "Does CitizenPrep AI support Spanish or other native languages?",
      answer:
        "Yes! CitizenPrep AI includes Spanish translation hints and dual-language audio explanations to assist native Spanish speakers in understanding complex legal and constitutional terminology while preparing for the English exam requirements (including qualifying 50/20 and 55/15 age exemptions).",
    },
  ];

  const toggleFAQ = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section id="faq" className="relative py-24 sm:py-32 bg-white overflow-hidden">
      {/* Background tech grid overlay */}
      <div className="absolute inset-0 bg-grid-tech opacity-30 pointer-events-none" />

      {/* Decorative ambient radial gradients */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-blue-100/35 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 sm:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200/80 text-blue-800 text-xs font-bold uppercase tracking-wider mb-4 shadow-2xs"
          >
            <HelpCircle className="w-3.5 h-3.5 text-blue-600" />
            <span>Got Questions?</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight"
          >
            Frequently Asked Questions
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-base sm:text-lg text-slate-600 mt-4 leading-relaxed"
          >
            Everything you need to know about the official USCIS Naturalization test and preparing with CitizenPrep AI.
          </motion.p>
        </div>

        {/* 6 FAQ Accordion Items */}
        <div className="space-y-4">
          {faqs.map((item) => {
            const isOpen = openId === item.id;

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
                className={`glass-card rounded-2xl border transition-all duration-300 overflow-hidden ${
                  isOpen
                    ? "border-blue-300 shadow-md shadow-blue-900/5 bg-white"
                    : "border-slate-200/80 hover:border-slate-300 shadow-2xs"
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleFAQ(item.id)}
                  className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-center gap-3">
                    <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-blue-700 bg-blue-50 px-2.5 py-1 rounded-md border border-blue-100 flex-shrink-0">
                      {item.category}
                    </span>
                    <span className="text-base sm:text-lg font-bold text-slate-900">
                      {item.question}
                    </span>
                  </div>

                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.25 }}
                    className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-colors ${
                      isOpen
                        ? "bg-blue-600 text-white"
                        : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </motion.div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="px-5 pb-6 sm:px-6 sm:pb-6 pt-1 text-sm sm:text-base text-slate-600 leading-relaxed border-t border-slate-100">
                        {item.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

        {/* Support Callout */}
        <div className="mt-12 text-center text-xs sm:text-sm text-slate-500 font-medium">
          Have more questions? Reach out to our team at{" "}
          <a
            href="mailto:support@citizenprep.ai"
            className="font-bold text-blue-700 hover:underline"
          >
            support@citizenprep.ai
          </a>
        </div>

      </div>
    </section>
  );
}
