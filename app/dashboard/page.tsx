"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { onAuthStateChanged, User } from "firebase/auth";
import { auth } from "@/lib/firebase";
import { getQuizResults, QuizResult } from "@/lib/firestore";
import {
  Trophy,
  Target,
  BookOpen,
  Calendar,
  ShieldCheck,
  RotateCcw,
  Play,
  LogIn,
  Loader2,
  Sparkles,
  ArrowRight,
} from "lucide-react";

export default function DashboardPage() {
  const [user, setUser] = useState<User | null>(null);
  const [results, setResults] = useState<QuizResult[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Listen for authentication state changes
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      setUser(currentUser);

      if (currentUser) {
        try {
          // Fetch user quiz history from Firestore without composite index dependency
          const data = await getQuizResults(currentUser.uid);
          setResults(data);
        } catch (error) {
          console.error("Dashboard failed to fetch results:", error);
          setResults([]);
        }
      } else {
        setResults([]);
      }

      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  // Compute stats safely
  const totalAttempts = results.length;

  const bestScore =
    results.length > 0 ? Math.max(...results.map((r) => r.score)) : 0;
  const bestAttempt = results.find((r) => r.score === bestScore);

  const latestAttempt = results.length > 0 ? results[0] : null;
  const latestScore = latestAttempt ? latestAttempt.score : 0;

  // Format date helper
  const formatDate = (createdAt: any): string => {
    if (!createdAt) return "Recent";
    try {
      let date: Date | null = null;
      if (typeof createdAt.toDate === "function") {
        date = createdAt.toDate();
      } else if (typeof createdAt.seconds === "number") {
        date = new Date(createdAt.seconds * 1000);
      } else if (createdAt instanceof Date) {
        date = createdAt;
      } else if (typeof createdAt === "number" || typeof createdAt === "string") {
        date = new Date(createdAt);
      }

      if (date && !isNaN(date.getTime())) {
        return date.toLocaleDateString("en-US", {
          month: "short",
          day: "numeric",
          year: "numeric",
          hour: "numeric",
          minute: "2-digit",
        });
      }
    } catch (e) {
      console.error("Error formatting date:", e);
    }
    return "Recent";
  };

  // Loading spinner view
  if (loading) {
    return (
      <main className="min-h-screen bg-[#050816] flex flex-col items-center justify-center text-white px-4">
        <div className="relative flex items-center justify-center mb-4">
          <div className="w-12 h-12 rounded-full border-4 border-blue-500/20 border-t-blue-500 animate-spin" />
          <Loader2 className="w-6 h-6 text-blue-400 absolute animate-pulse" />
        </div>
        <p className="text-gray-400 text-sm font-medium animate-pulse">
          Loading your dashboard...
        </p>
      </main>
    );
  }

  // Not logged in view
  if (!user) {
    return (
      <main className="min-h-screen bg-[#050816] text-white flex items-center justify-center px-4 py-12 relative overflow-hidden">
        {/* Glow ambient effects */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-md w-full bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-xl text-center shadow-2xl relative z-10">
          <div className="w-16 h-16 rounded-2xl bg-blue-500/10 border border-blue-500/20 text-blue-400 flex items-center justify-center mx-auto mb-5 text-2xl">
            🇺🇸
          </div>
          <h1 className="text-2xl sm:text-3xl font-bold mb-3 tracking-tight">
            Sign In to View Dashboard
          </h1>
          <p className="text-gray-400 text-sm mb-8 leading-relaxed">
            Log in with your Google account to track your official USCIS civics practice test scores and review attempt history.
          </p>
          <div className="space-y-3">
            <Link
              href="/login"
              className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 font-semibold shadow-lg shadow-blue-500/20 hover:scale-[1.02] active:scale-[0.98] transition-all"
            >
              <LogIn size={18} />
              <span>Sign In with Google</span>
            </Link>
            <Link
              href="/"
              className="w-full inline-flex items-center justify-center gap-2 py-3 px-6 rounded-xl bg-white/5 hover:bg-white/10 text-gray-300 font-medium text-sm transition"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#050816] text-white px-4 sm:px-6 lg:px-8 py-8 sm:py-12 relative overflow-hidden">
      {/* Background Tech Glow Blobs */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-blue-600/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 -right-32 w-96 h-96 bg-purple-600/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Top Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8 pb-6 border-b border-white/10">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-300 text-xs font-semibold mb-3">
              <Sparkles size={14} className="text-blue-400" />
              <span>Official USCIS Civics Test Preparation</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
              📊 CitizenAce Dashboard
            </h1>
            <p className="text-gray-400 text-sm sm:text-base mt-1">
              Welcome back,{" "}
              <span className="font-semibold text-white">
                {user.displayName || user.email || "Citizen"}
              </span>
              ! Here is your quiz progress.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <Link
              href="/quiz"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 font-semibold text-sm shadow-md shadow-blue-500/20 hover:scale-[1.02] active:scale-[0.98] transition-all"
            >
              <Play size={16} />
              <span>Practice Test</span>
            </Link>
            <Link
              href="/"
              className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-gray-300 text-sm font-medium transition"
            >
              Home
            </Link>
          </div>
        </div>

        {/* TASK 3: Three Statistic Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-10">
          {/* Card 1: Best Score */}
          <div className="bg-white/5 border border-white/10 rounded-3xl p-6 backdrop-blur-xl shadow-xl hover:border-yellow-500/30 transition group">
            <div className="w-12 h-12 rounded-2xl bg-yellow-400/10 border border-yellow-400/20 flex items-center justify-center text-yellow-400 mb-4 group-hover:scale-110 transition-transform">
              <Trophy size={26} />
            </div>
            <p className="text-gray-400 text-xs sm:text-sm font-medium uppercase tracking-wider">
              Best Score
            </p>
            <div className="flex items-baseline gap-2 mt-1">
              <h2 className="text-3xl sm:text-4xl font-black text-white font-mono">
                {results.length > 0
                  ? `${bestScore}/${bestAttempt?.totalQuestions || 20}`
                  : "0"}
              </h2>
            </div>
            <p className="text-xs text-yellow-400/80 mt-2 font-medium">
              {results.length > 0
                ? `${bestAttempt?.accuracy || 0}% Accuracy Record`
                : "No attempts yet"}
            </p>
          </div>

          {/* Card 2: Latest Score */}
          <div className="bg-white/5 border border-white/10 rounded-3xl p-6 backdrop-blur-xl shadow-xl hover:border-blue-500/30 transition group">
            <div className="w-12 h-12 rounded-2xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 mb-4 group-hover:scale-110 transition-transform">
              <Target size={26} />
            </div>
            <p className="text-gray-400 text-xs sm:text-sm font-medium uppercase tracking-wider">
              Latest Score
            </p>
            <div className="flex items-baseline gap-2 mt-1">
              <h2 className="text-3xl sm:text-4xl font-black text-white font-mono">
                {latestAttempt
                  ? `${latestScore}/${latestAttempt.totalQuestions}`
                  : "0"}
              </h2>
            </div>
            <p className="text-xs text-blue-400/80 mt-2 font-medium">
              {latestAttempt
                ? `${latestAttempt.accuracy}% Recent Accuracy`
                : "No attempts yet"}
            </p>
          </div>

          {/* Card 3: Total Quiz Attempts */}
          <div className="bg-white/5 border border-white/10 rounded-3xl p-6 backdrop-blur-xl shadow-xl hover:border-purple-500/30 transition group">
            <div className="w-12 h-12 rounded-2xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400 mb-4 group-hover:scale-110 transition-transform">
              <BookOpen size={26} />
            </div>
            <p className="text-gray-400 text-xs sm:text-sm font-medium uppercase tracking-wider">
              Total Quiz Attempts
            </p>
            <div className="flex items-baseline gap-2 mt-1">
              <h2 className="text-3xl sm:text-4xl font-black text-white font-mono">
                {totalAttempts}
              </h2>
            </div>
            <p className="text-xs text-purple-400/80 mt-2 font-medium">
              {totalAttempts === 1
                ? "1 session completed"
                : `${totalAttempts} sessions completed`}
            </p>
          </div>
        </div>

        {/* TASK 3: Recent Quiz Attempts Section */}
        <div className="bg-white/5 border border-white/10 rounded-3xl p-6 sm:p-8 backdrop-blur-xl shadow-xl">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-2.5">
              <div className="w-2.5 h-2.5 rounded-full bg-blue-500 animate-pulse" />
              <h2 className="text-xl sm:text-2xl font-bold tracking-tight">
                Recent Quiz Attempts
              </h2>
            </div>
            {results.length > 0 && (
              <span className="text-xs font-semibold text-gray-400 bg-white/5 border border-white/10 px-3 py-1 rounded-full">
                Newest First
              </span>
            )}
          </div>

          {/* TASK 4: Error Handling / Empty State */}
          {results.length === 0 ? (
            <div className="text-center py-12 px-4 rounded-2xl bg-white/[0.02] border border-white/5">
              <div className="w-14 h-14 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mx-auto mb-4 text-gray-400">
                <BookOpen size={26} />
              </div>
              <p className="text-gray-300 text-base font-medium mb-2">
                No quiz history found. Complete your first practice test.
              </p>
              <p className="text-gray-500 text-sm max-w-md mx-auto mb-6">
                Take a practice civics test to measure your readiness for the official naturalization examination.
              </p>
              <Link
                href="/quiz"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white font-semibold text-sm shadow-lg shadow-blue-500/25 transition-all hover:scale-[1.02]"
              >
                <Play size={16} />
                <span>Start Practice Test</span>
              </Link>
            </div>
          ) : (
            <div className="space-y-3.5">
              {results.map((item, index) => {
                const attemptNumber = totalAttempts - index;
                const isPassing = item.accuracy >= 60;
                const formattedDate = formatDate(item.createdAt);

                return (
                  <div
                    key={item.id}
                    className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-[#111827]/80 hover:bg-[#111827] border border-white/5 hover:border-white/15 rounded-2xl p-4 sm:p-5 transition-all shadow-sm"
                  >
                    {/* Left: Attempt Number, Status Badge, Date */}
                    <div className="flex items-start sm:items-center gap-4">
                      <div className="w-11 h-11 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center font-bold font-mono text-sm text-blue-400 flex-shrink-0">
                        #{attemptNumber}
                      </div>

                      <div>
                        <div className="flex items-center gap-2.5 flex-wrap">
                          <p className="font-bold text-white text-base">
                            Attempt #{attemptNumber}
                          </p>

                          {isPassing ? (
                            <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                              <ShieldCheck size={12} />
                              <span>Pass (≥60%)</span>
                            </span>
                          ) : (
                            <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-amber-500/10 text-amber-400 border border-amber-500/20">
                              <RotateCcw size={12} />
                              <span>Needs Practice</span>
                            </span>
                          )}
                        </div>

                        <div className="flex items-center gap-3 text-xs text-gray-400 mt-1">
                          <span className="inline-flex items-center gap-1">
                            <Calendar size={13} className="text-gray-500" />
                            <span>{formattedDate}</span>
                          </span>
                          <span>•</span>
                          <span className="font-medium text-gray-300">
                            Accuracy: {item.accuracy}%
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Right: Score and Accuracy Highlight */}
                    <div className="flex items-center justify-between sm:justify-end gap-5 pt-2 sm:pt-0 border-t sm:border-t-0 border-white/5">
                      <div className="text-left sm:text-right">
                        <span className="text-xs text-gray-500 block">
                          Score
                        </span>
                        <div className="text-xl sm:text-2xl font-black font-mono tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-300">
                          {item.score}
                          <span className="text-sm font-normal text-gray-500">
                            /{item.totalQuestions}
                          </span>
                        </div>
                      </div>

                      <div className="text-right sm:pl-3">
                        <span className="text-xs text-gray-500 block">
                          Accuracy
                        </span>
                        <span
                          className={`text-lg sm:text-xl font-bold font-mono ${
                            isPassing ? "text-emerald-400" : "text-amber-400"
                          }`}
                        >
                          {item.accuracy}%
                        </span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </main>
  );
}