"use client";

import Link from "next/link";
import { ArrowLeft, Home, Terminal } from "lucide-react";
import BackgroundBlobs from "@/components/BackgroundBlobs";

export default function NotFound() {
  return (
    <div className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden">
      <BackgroundBlobs />

      <div className="max-w-md w-full text-center p-8 rounded-3xl glass-panel bg-white/70 dark:bg-[#12121e]/85 border border-slate-200 dark:border-white/10 shadow-2xl backdrop-blur-xl">
        <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-indigo-500/20 to-cyan-500/20 border border-indigo-500/30 flex items-center justify-center text-cyan-400 mx-auto mb-6">
          <Terminal className="w-8 h-8" />
        </div>

        <span className="font-mono text-xs font-semibold px-3 py-1 rounded-full text-indigo-500 dark:text-cyan-400 bg-indigo-500/10 border border-indigo-500/20 inline-block mb-3">
          ERROR 404
        </span>

        <h1 className="font-heading font-black text-6xl text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-cyan-400 mb-3">
          404
        </h1>

        <h2 className="font-heading font-bold text-2xl text-slate-900 dark:text-white mb-3">
          Page Not Found
        </h2>

        <p className="text-sm text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">
          The requested route does not exist or has been relocated. Let&apos;s get you back to the portfolio showcase.
        </p>

        <Link
          href="/"
          className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-full font-medium text-white bg-gradient-to-r from-indigo-600 to-cyan-500 hover:from-indigo-500 hover:to-cyan-400 shadow-xl shadow-indigo-600/25 active:scale-95 transition-all min-h-[48px] w-full"
        >
          <Home className="w-4 h-4" />
          <span>Return to Home</span>
        </Link>
      </div>
    </div>
  );
}
