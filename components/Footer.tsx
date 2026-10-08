"use client";

import React from "react";
import Link from "next/link";
import {
  Mail,
  Shield,
  ArrowRight,
  Sparkles,
} from "lucide-react";

export default function Footer() {
  const quickLinks = [
    { label: "Practice Quiz", href: "#features" },
    { label: "Spaced Flashcards", href: "#features" },
    { label: "AI Mock Interview", href: "#features" },
    { label: "How It Works", href: "#how-it-works" },
    { label: "Pricing & Plans", href: "#pricing" },
    { label: "Success Stories", href: "#testimonials" },
  ];

  const resources = [
    { label: "Official 100 Civics Bank", href: "#" },
    { label: "128 Questions (2026)", href: "#" },
    { label: "Form N-400 Checklist", href: "#" },
    { label: "USCIS Reading Vocabulary", href: "#" },
    { label: "USCIS Writing Vocabulary", href: "#" },
    { label: "Naturalization Guide", href: "#" },
  ];

  const legalLinks = [
    { label: "Privacy Policy", href: "#" },
    { label: "Terms of Service", href: "#" },
    { label: "Cookie Policy", href: "#" },
    { label: "Security & Encryption", href: "#" },
    { label: "Refund Policy", href: "#" },
  ];

  return (
    <footer className="bg-slate-900 text-white border-t border-slate-800 relative overflow-hidden">
      {/* Ambient background light gradients */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-0 right-10 w-80 h-80 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none -z-10" />

      {/* Top CTA Banner Band */}
      <div className="border-b border-slate-800 bg-slate-950/60 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
            <div>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 text-xs font-bold uppercase tracking-wider border border-blue-400/30 mb-3">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Start Preparing Today</span>
              </span>
              <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
                Ready to Pass Your US Naturalization Test?
              </h3>
              <p className="text-sm text-slate-400 mt-1 max-w-xl">
                Join over 25,000+ applicants who passed on their first attempt with CitizenPrep AI.
              </p>
            </div>

            <div className="flex items-center gap-3">
              <a
                href="#practice"
                className="inline-flex items-center gap-2 px-6 py-3.5 text-sm font-bold text-white bg-blue-600 hover:bg-blue-500 rounded-xl shadow-lg shadow-blue-600/20 transition-all duration-200"
              >
                <span>Start Free Test</span>
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="#pricing"
                className="inline-flex items-center gap-2 px-6 py-3.5 text-sm font-bold text-slate-300 hover:text-white bg-slate-800 hover:bg-slate-700 rounded-xl border border-slate-700 transition-all duration-200"
              >
                <span>View Plans</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Links Columns */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8">
          
          {/* Brand & Mission Column (Spans 2 on large screens) */}
          <div className="lg:col-span-2 flex flex-col justify-between">
            <div>
              <Link href="/" className="flex items-center gap-3 group">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-700 via-blue-800 to-slate-900 flex items-center justify-center text-xl shadow-md border border-blue-500/30">
                  <span role="img" aria-label="US Flag">🇺🇸</span>
                </div>
                <div className="flex flex-col">
                  <div className="flex items-center gap-1.5">
                    <span className="text-xl font-extrabold tracking-tight text-white font-sans">
                      CitizenPrep
                    </span>
                    <span className="px-1.5 py-0.5 text-[10px] font-extrabold uppercase tracking-widest bg-blue-500/20 text-blue-300 rounded-md border border-blue-400/30">
                      AI
                    </span>
                  </div>
                  <span className="text-[11px] font-medium text-slate-400">
                    US Citizenship Prep 2026
                  </span>
                </div>
              </Link>

              <p className="text-sm text-slate-400 leading-relaxed mt-4 max-w-sm">
                The premier AI-powered naturalization exam platform helping immigrants achieve the American dream through interactive civics quizzes, flashcards, and realistic voice officer simulations.
              </p>
            </div>

            {/* Social Icons */}
            <div className="mt-8">
              <p className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
                Follow Us
              </p>
              <div className="flex items-center gap-3">
                {/* Twitter / X */}
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Twitter / X"
                  className="w-9 h-9 rounded-xl bg-slate-800 hover:bg-blue-600 flex items-center justify-center text-slate-300 hover:text-white transition-colors"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </a>

                {/* LinkedIn */}
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="w-9 h-9 rounded-xl bg-slate-800 hover:bg-blue-600 flex items-center justify-center text-slate-300 hover:text-white transition-colors"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
                  </svg>
                </a>

                {/* GitHub */}
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="w-9 h-9 rounded-xl bg-slate-800 hover:bg-blue-600 flex items-center justify-center text-slate-300 hover:text-white transition-colors"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                  </svg>
                </a>

                {/* YouTube */}
                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="YouTube"
                  className="w-9 h-9 rounded-xl bg-slate-800 hover:bg-red-600 flex items-center justify-center text-slate-300 hover:text-white transition-colors"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links Column */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-white mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-sm text-slate-400">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="hover:text-blue-400 transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Column */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-white mb-4">
              Resources
            </h4>
            <ul className="space-y-2.5 text-sm text-slate-400">
              {resources.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="hover:text-blue-400 transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal & Contact Column */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-white mb-4">
              Legal &amp; Contact
            </h4>
            <ul className="space-y-2.5 text-sm text-slate-400 mb-6">
              {legalLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="hover:text-blue-400 transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>

            <div className="pt-4 border-t border-slate-800">
              <p className="text-xs text-slate-400 font-semibold mb-1.5">
                Contact Email:
              </p>
              <a
                href="mailto:support@citizenprep.ai"
                className="inline-flex items-center gap-2 text-xs font-bold text-blue-400 hover:text-blue-300"
              >
                <Mail className="w-3.5 h-3.5" />
                <span>support@citizenprep.ai</span>
              </a>
            </div>
          </div>

        </div>

        {/* Legal Disclaimer & Bottom Copyright Bar */}
        <div className="mt-16 pt-8 border-t border-slate-800/80 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p className="max-w-2xl text-center md:text-left leading-relaxed">
            <Shield className="w-3.5 h-3.5 inline mr-1 text-slate-400" />
            <span className="font-semibold text-slate-400">Official Disclaimer:</span>{" "}
            CitizenPrep AI is an independent educational prep platform and is not affiliated with, endorsed by, or sponsored by the U.S. Citizenship and Immigration Services (USCIS) or the United States Government.
          </p>

          <p className="text-center md:text-right flex-shrink-0">
            &copy; {new Date().getFullYear()} CitizenPrep AI. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
