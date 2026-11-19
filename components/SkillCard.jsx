"use client";

import { motion } from "framer-motion";
import {
  Boxes,
  Atom,
  Code2,
  FileCode,
  Palette,
  LayoutGrid,
  Server,
  Cpu,
  Database,
  TableProperties,
  GitBranch,
  Github,
  CloudUpload,
  Bug,
  Terminal,
  Layers,
  Sparkles,
  PenTool,
  CheckCircle2,
} from "lucide-react";

const ICON_MAP = {
  Boxes,
  Atom,
  Code2,
  FileCode,
  Palette,
  LayoutGrid,
  Server,
  Cpu,
  Database,
  TableProperties,
  GitBranch,
  Github,
  CloudUpload,
  Bug,
  Terminal,
  Layers,
  Sparkles,
  PenTool,
};

export default function SkillCard({ category, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative rounded-2xl glass-panel bg-white/70 dark:bg-[#12121e]/80 border border-slate-200 dark:border-white/10 p-6 sm:p-7 hover:border-indigo-500/40 dark:hover:border-cyan-400/40 transition-all duration-300 hover:shadow-xl hover:shadow-indigo-500/10 flex flex-col justify-between"
    >
      <div>
        {/* Category Header */}
        <div className="flex items-center justify-between gap-3 mb-3">
          <div className="flex items-center gap-3">
            <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${category.accent} shadow-sm shadow-indigo-500/50`} />
            <h3 className="font-heading font-bold text-xl text-slate-900 dark:text-white group-hover:text-cyan-400 transition-colors">
              {category.category}
            </h3>
          </div>
          <span className="text-xs font-mono text-slate-500 dark:text-slate-400 px-2 py-0.5 rounded-full bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10">
            {category.skills.length} skills
          </span>
        </div>

        <p className="text-sm text-slate-600 dark:text-slate-400 mb-6">
          {category.description}
        </p>

        {/* Skill Chips Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
          {category.skills.map((skill, sIdx) => {
            const IconComponent = ICON_MAP[skill.icon] || Code2;
            return (
              <motion.div
                key={skill.name}
                whileHover={{ y: -3, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 400, damping: 25 }}
                className="group/chip flex items-center justify-between gap-2 p-2.5 rounded-xl bg-slate-100/90 dark:bg-white/[0.04] border border-slate-200/90 dark:border-white/10 hover:border-indigo-500/50 dark:hover:border-cyan-400/50 hover:bg-slate-50 dark:hover:bg-white/[0.08] hover:shadow-md hover:shadow-indigo-500/10 transition-all duration-200 cursor-default"
              >
                <div className="flex items-center gap-2.5 min-w-0">
                  <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500/10 to-cyan-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-600 dark:text-cyan-400 group-hover/chip:text-indigo-400 group-hover/chip:border-indigo-500/40 transition-colors flex-shrink-0">
                    <IconComponent className="w-4 h-4" />
                  </div>
                  <span className="text-sm font-medium text-slate-800 dark:text-slate-200 group-hover/chip:text-white truncate">
                    {skill.name}
                  </span>
                </div>
                <span className="text-[10px] font-mono px-1.5 py-0.5 rounded text-slate-500 dark:text-slate-400 bg-slate-200/60 dark:bg-black/40 flex-shrink-0">
                  {skill.tag}
                </span>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Card bottom bar */}
      <div className="mt-6 pt-4 border-t border-slate-200/80 dark:border-white/10 flex items-center justify-between text-xs font-mono text-slate-500 dark:text-slate-400">
        <span className="flex items-center gap-1.5 text-emerald-600 dark:text-emerald-400">
          <CheckCircle2 className="w-3.5 h-3.5" />
          Production-tested
        </span>
        <span className="text-slate-400 dark:text-slate-500">Enterprise Ready</span>
      </div>
    </motion.div>
  );
}
