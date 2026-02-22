
'use client';

import Link from 'next/link';

export default function SelectQuizPage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-8 bg-sky-50 p-8 dark:bg-slate-900">
      <div className="text-center">
        <h1 className="text-3xl font-bold text-sky-900 dark:text-sky-50">Choose Your Quiz</h1>
        <p className="mt-2 text-sky-700 dark:text-sky-300">Select a quiz type to start training</p>
      </div>

      <div className="flex w-full max-w-2xl flex-col gap-4 sm:flex-row">
        <Link href="/quiz"
          className="flex flex-1 flex-col items-center gap-4 rounded-2xl border-2 border-sky-200 bg-white p-8 text-center shadow-md transition-all hover:border-teal-400 hover:shadow-lg dark:border-sky-700 dark:bg-slate-800">
          <span className="text-5xl">🎧</span>
          <h2 className="text-xl font-bold text-sky-900 dark:text-sky-50">Audio Quiz</h2>
          <p className="text-sm text-sky-600 dark:text-sky-400">
            Listen to real scam call recordings and identify the red flags in the conversation.
          </p>
          <span className="rounded-lg bg-teal-600 px-6 py-2 font-semibold text-white hover:bg-teal-700">
            Start Audio Quiz
          </span>
        </Link>

        <Link href="/visual-quiz"
          className="flex flex-1 flex-col items-center gap-4 rounded-2xl border-2 border-sky-200 bg-white p-8 text-center shadow-md transition-all hover:border-sky-400 hover:shadow-lg dark:border-sky-700 dark:bg-slate-800">
          <span className="text-5xl">📧</span>
          <h2 className="text-xl font-bold text-sky-900 dark:text-sky-50">Email Quiz</h2>
          <p className="text-sm text-sky-600 dark:text-sky-400">
            Read scam emails and spot the suspicious phrases, fake domains, and manipulation tactics.
          </p>
          <span className="rounded-lg bg-sky-600 px-6 py-2 font-semibold text-white hover:bg-sky-700">
            Start Email Quiz
          </span>
        </Link>
      </div>

      <Link href="/" className="text-sky-600 hover:underline dark:text-sky-400">
        ← Back to Home
      </Link>
    </div>
  );
}

