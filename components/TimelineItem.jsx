"use client";

import { motion } from "framer-motion";
import { Briefcase, Calendar, MapPin, CheckCircle } from "lucide-react";

export default function TimelineItem({ item, index, total }) {
  const isEven = index % 2 === 0;

  return (
    <div className="relative flex flex-col md:flex-row items-center w-full my-6 sm:my-8">
      {/* Central Node for Desktop & Left Node for Mobile */}
      <div className="absolute left-4 md:left-1/2 -translate-x-1/2 flex items-center justify-center z-20">
        <div className="relative flex items-center justify-center">
          {/* Outer Pulsing Glow */}
          <span className="absolute w-7 h-7 rounded-full bg-cyan-400/20 dark:bg-cyan-400/30 animate-ping" />
          {/* Inner Circle with Border */}
          <div className="w-5 h-5 rounded-full bg-gradient-to-tr from-indigo-600 to-cyan-400 p-[2px] shadow-lg shadow-indigo-500/50">
            <div className="w-full h-full bg-[#0a0a0f] rounded-full flex items-center justify-center">
              <div className="w-2 h-2 rounded-full bg-cyan-400" />
            </div>
          </div>
        </div>
      </div>

      {/* Content Card Wrapper */}
      <div className="w-full flex flex-col md:flex-row">
        {/* Left Side Container (for desktop alternating) */}
        <div className={`w-full md:w-1/2 pl-12 md:pl-0 ${isEven ? "md:pr-12 md:text-right" : "md:order-2 md:pl-12 md:text-left"}`}>
          <motion.div
            initial={{ opacity: 0, x: isEven ? -40 : 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: index * 0.15 }}
            className="group relative rounded-2xl glass-panel bg-white/70 dark:bg-[#12121e]/80 border border-slate-200 dark:border-white/10 p-6 hover:border-indigo-500/40 dark:hover:border-cyan-400/40 transition-all duration-300 hover:shadow-xl hover:shadow-indigo-500/10 text-left"
          >
            {/* Header info */}
            <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-medium text-cyan-600 dark:text-cyan-300 bg-cyan-500/10 border border-cyan-500/20">
                <Calendar className="w-3.5 h-3.5" />
                {item.period}
              </span>
              <span className="text-xs font-mono text-slate-500 dark:text-slate-400 px-2 py-0.5 rounded bg-slate-100 dark:bg-white/5">
                {item.type}
              </span>
            </div>

            <h3 className="font-heading font-bold text-lg sm:text-xl text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-cyan-400 transition-colors">
              {item.role}
            </h3>

            <div className="flex flex-wrap items-center gap-y-1 gap-x-3 text-sm text-slate-600 dark:text-slate-300 font-medium mt-1 mb-4">
              <span className="flex items-center gap-1 text-indigo-600 dark:text-indigo-400 font-semibold">
                <Briefcase className="w-3.5 h-3.5" />
                {item.company}
              </span>
              <span className="flex items-center gap-1 text-slate-500 dark:text-slate-400 text-xs">
                <MapPin className="w-3.5 h-3.5" />
                {item.location}
              </span>
            </div>

            {/* Bullet points */}
            <ul className="space-y-2 mb-4">
              {item.highlights.map((point, pIdx) => (
                <li key={pIdx} className="flex items-start gap-2.5 text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  <CheckCircle className="w-4 h-4 text-cyan-500 flex-shrink-0 mt-0.5" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>

            {/* Skills chip row */}
            <div className="pt-3 border-t border-slate-200/80 dark:border-white/10 flex flex-wrap gap-1.5">
              {item.skills.map((skill) => (
                <span
                  key={skill}
                  className="text-[11px] font-mono px-2 py-0.5 rounded-md bg-slate-100 dark:bg-white/5 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-white/10"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Empty placeholder spacer for the opposite side on desktop */}
        <div className={`hidden md:block w-1/2 ${isEven ? "order-2" : "order-1"}`} />
      </div>
    </div>
  );
}
