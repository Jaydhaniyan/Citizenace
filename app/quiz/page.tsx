"use client";

import { useMemo, useState } from "react";
import { ArrowLeft, ArrowRight, RotateCcw, Trophy } from "lucide-react";
import { citizenshipQuestions } from "@/data/citizenshipQuestions";
import { saveQuizResult } from "@/lib/firestore";

export default function QuizPage() {
  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [finished, setFinished] = useState(false);
  const [saving, setSaving] = useState(false);

  const question = citizenshipQuestions[current];

  const progress =
    ((current + 1) / citizenshipQuestions.length) * 100;

  const handleSelect = (option: string) => {
    setAnswers({
      ...answers,
      [question.id]: option,
    });
  };

  const score = useMemo(() => {
    return citizenshipQuestions.filter(
      (q) => answers[q.id] === q.answer
    ).length;
  }, [answers]);

  const accuracy = Math.round(
    (score / citizenshipQuestions.length) * 100
  );

  const restartQuiz = () => {
    setAnswers({});
    setCurrent(0);
    setFinished(false);
  };

  const finishQuiz = async () => {
    setSaving(true);

    try {
      await saveQuizResult(
        score,
        citizenshipQuestions.length,
        accuracy
      );

      setFinished(true);
    } catch (error) {
      console.error("Error saving quiz:", error);
      alert("Score save nahi hua.");
    } finally {
      setSaving(false);
    }
  };

  // ================= RESULT SCREEN =================
  if (finished) {
    return (
      <main className="min-h-screen bg-[#050816] flex items-center justify-center px-5 text-white">
        <div className="max-w-xl w-full rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 p-8 text-center">

          <div className="w-28 h-28 rounded-full mx-auto flex items-center justify-center bg-gradient-to-r from-blue-600 to-purple-600 text-3xl font-bold mb-5">
            {score}/{citizenshipQuestions.length}
          </div>

          <h1 className="text-3xl font-bold mb-2">
            Quiz Completed 🎉
          </h1>

          <p className="text-gray-400 mb-6">
            Your score has been saved to Firebase.
          </p>

          <div className="grid grid-cols-2 gap-4 mb-8">

            <div className="bg-[#111827] rounded-2xl p-4">
              <p className="text-gray-400 text-sm">Correct</p>
              <h2 className="text-2xl text-green-400 font-bold">
                {score}
              </h2>
            </div>

            <div className="bg-[#111827] rounded-2xl p-4">
              <p className="text-gray-400 text-sm">Wrong</p>
              <h2 className="text-2xl text-red-400 font-bold">
                {citizenshipQuestions.length - score}
              </h2>
            </div>

            <div className="bg-[#111827] rounded-2xl p-4 col-span-2">
              <p className="text-gray-400 text-sm">Accuracy</p>
              <h2 className="text-3xl text-blue-400 font-bold">
                {accuracy}%
              </h2>
            </div>

          </div>

          <div
            className={`rounded-xl p-4 mb-6 ${
              accuracy >= 60
                ? "bg-green-500/20 border border-green-500/40"
                : "bg-red-500/20 border border-red-500/40"
            }`}
          >
            <h2 className="font-bold text-xl">
              {accuracy >= 60
                ? "✅ Congratulations! You Passed."
                : "❌ Keep Practicing."}
            </h2>
          </div>

          <button
            onClick={restartQuiz}
            className="w-full flex items-center justify-center gap-2 rounded-xl py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:scale-105 transition"
          >
            <RotateCcw size={18} />
            Retake Quiz
          </button>
        </div>
      </main>
    );
  }

  // ================= QUIZ SCREEN =================
  return (
    <main className="min-h-screen bg-[#050816] text-white px-5 py-10">

      <div className="max-w-3xl mx-auto">

        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 px-4 py-2 rounded-full text-blue-300 mb-5">
            <Trophy size={18} />
            Official USCIS Practice Test
          </div>

          <h1 className="text-4xl font-bold">
            US Citizenship Practice Test
          </h1>

          <p className="text-gray-400 mt-2">
            Question {current + 1} of {citizenshipQuestions.length}
          </p>
        </div>

        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex justify-between text-gray-400 text-sm mb-2">
            <span>Progress</span>
            <span>{Math.round(progress)}%</span>
          </div>

          <div className="h-3 rounded-full bg-gray-800 overflow-hidden">
            <div
              style={{ width: `${progress}%` }}
              className="h-full bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-500"
            />
          </div>
        </div>

        {/* Quiz Card */}
        <div className="bg-white/5 backdrop-blur-xl rounded-3xl border border-white/10 p-6 shadow-xl">

          <p className="text-blue-400 text-sm mb-3">
            {question.category}
          </p>

          <h2 className="text-2xl font-bold mb-8">
            {question.question}
          </h2>

          <div className="space-y-4">
            {question.options.map((option) => {
              const selected = answers[question.id] === option;

              return (
                <button
                  key={option}
                  onClick={() => handleSelect(option)}
                  className={`w-full text-left p-4 rounded-2xl transition border ${
                    selected
                      ? "bg-blue-600 border-blue-400 shadow-lg shadow-blue-600/30"
                      : "bg-[#111827] border-gray-700 hover:border-purple-500"
                  }`}
                >
                  {option}
                </button>
              );
            })}
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-between mt-8">

            <button
              disabled={current === 0}
              onClick={() => setCurrent(current - 1)}
              className="flex items-center gap-2 px-5 py-3 rounded-xl bg-gray-800 hover:bg-gray-700 disabled:opacity-40"
            >
              <ArrowLeft size={18} />
              Previous
            </button>

            {current === citizenshipQuestions.length - 1 ? (
              <button
                onClick={finishQuiz}
                disabled={saving}
                className="px-6 py-3 rounded-xl bg-gradient-to-r from-green-500 to-emerald-500 hover:scale-105 transition disabled:opacity-50"
              >
                {saving ? "Saving..." : "Finish Test"}
              </button>
            ) : (
              <button
                onClick={() => setCurrent(current + 1)}
                className="flex items-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 hover:scale-105 transition"
              >
                Next
                <ArrowRight size={18} />
              </button>
            )}

          </div>
        </div>

      </div>

    </main>
  );
}