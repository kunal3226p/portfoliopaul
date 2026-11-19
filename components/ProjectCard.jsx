"use client";

import { motion } from "framer-motion";
import { ExternalLink, Globe, Lock, ShieldCheck, ArrowUpRight } from "lucide-react";

export default function ProjectCard({ project, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      className="group relative rounded-2xl glass-panel bg-white/70 dark:bg-[#12121e]/80 border border-slate-200 dark:border-white/10 hover:border-indigo-500/40 dark:hover:border-cyan-400/40 transition-all duration-300 hover:shadow-2xl hover:shadow-indigo-500/10 dark:hover:shadow-cyan-500/10 flex flex-col overflow-hidden"
    >
      {/* Top Browser-Mockup Header & Visual Thumbnail */}
      <div className="relative border-b border-slate-200 dark:border-white/10 bg-slate-100/90 dark:bg-[#0e0e17]/90 pt-3 px-3 sm:px-4 pb-0">
        {/* Browser Top Controls */}
        <div className="flex items-center justify-between gap-2 pb-3">
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80 inline-block" />
            <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80 inline-block" />
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80 inline-block" />
          </div>

          {/* Browser Address Bar */}
          <div className="flex-1 max-w-[280px] sm:max-w-xs mx-auto flex items-center justify-center gap-1.5 bg-white/80 dark:bg-black/40 border border-slate-200 dark:border-white/10 rounded-md py-1 px-2.5 text-[11px] font-mono text-slate-600 dark:text-slate-400 truncate shadow-inner">
            <Lock className="w-3 h-3 text-emerald-500 flex-shrink-0" />
            <span className="truncate">{project.mockupData?.domain || project.liveUrl}</span>
          </div>

          <div className="w-8 flex justify-end">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
          </div>
        </div>

        {/* Browser Viewport Canvas (CSS-Generated Mockup) */}
        <div className={`relative h-44 sm:h-52 w-full rounded-t-xl overflow-hidden bg-gradient-to-br ${project.gradient} p-4 flex flex-col justify-between border-t border-x border-white/10`}>
          {/* Subtle Grid Pattern Overlay */}
          <div 
            className="absolute inset-0 opacity-20 pointer-events-none"
            style={{
              backgroundImage: `radial-gradient(rgba(255, 255, 255, 0.6) 1px, transparent 1px)`,
              backgroundSize: '16px 16px'
            }}
          />

          {/* Top Mockup Status */}
          <div className="relative z-10 flex items-center justify-between">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-mono font-medium bg-black/40 text-cyan-300 border border-cyan-500/20 backdrop-blur-md">
              <ShieldCheck className="w-3 h-3 text-cyan-400" />
              {project.mockupData?.status || "Production Live"}
            </span>
            <span className="text-[10px] uppercase tracking-wider font-semibold px-2 py-0.5 rounded bg-white/15 dark:bg-white/10 text-white backdrop-blur-sm">
              {project.category}
            </span>
          </div>

          {/* Center Graphic / Metric Cards */}
          <div className="relative z-10 my-auto py-2">
            <h4 className="text-sm sm:text-base font-heading font-bold text-white drop-shadow-sm truncate">
              {project.mockupData?.title || project.title}
            </h4>
            <p className="text-[11px] sm:text-xs text-slate-200 line-clamp-1 opacity-90">
              {project.tagline}
            </p>
          </div>

          {/* Bottom Mockup Metrics Strip */}
          <div className="relative z-10 grid grid-cols-3 gap-2 pt-2 border-t border-white/15">
            {project.mockupData?.metrics?.map((m, i) => (
              <div key={i} className="bg-black/35 backdrop-blur-sm rounded-lg p-1.5 text-center border border-white/10">
                <span className="block text-[9px] uppercase tracking-wider text-slate-300 font-mono">
                  {m.label}
                </span>
                <span className="block text-xs font-bold text-white font-mono truncate">
                  {m.value}
                </span>
              </div>
            ))}
          </div>

          {/* Hover Glow Light Accent */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-60 group-hover:opacity-30 transition-opacity duration-300" />
        </div>
      </div>

      {/* Card Body */}
      <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between">
        <div>
          <div className="flex items-center justify-between gap-2 mb-2">
            <span className={`text-xs font-semibold px-2.5 py-0.5 rounded-full border ${project.badgeColor}`}>
              {project.category}
            </span>
            <span className="text-xs text-slate-500 dark:text-slate-400 font-mono">
              Production Verified
            </span>
          </div>

          <h3 className="font-heading font-bold text-lg sm:text-xl text-slate-900 dark:text-white group-hover:text-cyan-500 dark:group-hover:text-cyan-300 transition-colors duration-200">
            {project.title}
          </h3>

          <p className="mt-2.5 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
            {project.description}
          </p>
        </div>

        {/* Tech Stack Badges & Live Demo Button */}
        <div className="mt-6 pt-5 border-t border-slate-200/80 dark:border-white/10 flex flex-col gap-4">
          <div className="flex flex-wrap gap-1.5">
            {project.tech.map((t) => (
              <span
                key={t}
                className="text-xs font-mono px-2.5 py-1 rounded-md bg-slate-100 dark:bg-white/5 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-white/10 transition-colors group-hover:border-indigo-500/30"
              >
                {t}
              </span>
            ))}
          </div>

          <div className="flex items-center justify-between pt-1">
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl font-medium text-sm text-white bg-gradient-to-r from-indigo-600 to-cyan-500 hover:from-indigo-500 hover:to-cyan-400 active:scale-95 shadow-md shadow-indigo-600/20 hover:shadow-cyan-500/30 transition-all duration-200 min-h-[44px] w-full sm:w-auto"
            >
              <span>Live Demo</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>

            <span className="hidden sm:inline-flex items-center gap-1 text-xs text-slate-500 dark:text-slate-400 font-mono">
              <Globe className="w-3.5 h-3.5 text-cyan-400" />
              {project.mockupData?.domain}
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
