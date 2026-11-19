"use client";

import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, AlertCircle, X } from "lucide-react";

export default function Toast({ toast, onClose }) {
  if (!toast) return null;

  const isSuccess = toast.type === "success";

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: 50, scale: 0.9 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 20, scale: 0.9 }}
        transition={{ type: "spring", damping: 25, stiffness: 300 }}
        className="fixed bottom-6 right-6 z-50 max-w-md w-[calc(100vw-3rem)] shadow-2xl rounded-2xl glass-panel bg-white/95 dark:bg-[#12121e]/95 border p-4 flex items-start gap-3 border-indigo-500/30"
        role="alert"
        aria-live="assertive"
      >
        <div className={`p-2 rounded-xl flex-shrink-0 ${isSuccess ? "bg-emerald-500/10 text-emerald-500" : "bg-rose-500/10 text-rose-500"}`}>
          {isSuccess ? <CheckCircle2 className="w-5 h-5" /> : <AlertCircle className="w-5 h-5" />}
        </div>

        <div className="flex-1 min-w-0 pt-0.5">
          <p className="font-heading font-bold text-sm text-slate-900 dark:text-white">
            {toast.title}
          </p>
          <p className="text-xs text-slate-600 dark:text-slate-300 mt-0.5 leading-relaxed">
            {toast.message}
          </p>
        </div>

        <button
          onClick={onClose}
          className="text-slate-400 hover:text-slate-600 dark:hover:text-white p-1 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 min-h-[32px] min-w-[32px] flex items-center justify-center"
          aria-label="Dismiss toast"
        >
          <X className="w-4 h-4" />
        </button>
      </motion.div>
    </AnimatePresence>
  );
}
