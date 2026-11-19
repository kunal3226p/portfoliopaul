"use client";

import { motion } from "framer-motion";
import { GraduationCap, Award, Trophy, BadgeCheck, Sparkles, Calendar, MapPin } from "lucide-react";
import { portfolioData } from "@/data/portfolio";

export default function Education() {
  return (
    <section id="education" className="relative py-20 sm:py-28 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono text-cyan-500 dark:text-cyan-400 bg-cyan-500/10 border border-cyan-500/20 mb-3"
          >
            <GraduationCap className="w-3.5 h-3.5" />
            <span>BACKGROUND & HONORS</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-heading font-extrabold text-3xl sm:text-4xl md:text-5xl text-slate-900 dark:text-white"
          >
            Education & <span className="gradient-text">Achievements</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-3 text-slate-600 dark:text-slate-400 text-sm sm:text-base max-w-xl"
          >
            Academic foundations and competitive milestones fueling my technical capabilities
          </motion.p>
        </div>

        {/* 2 Main Columns: Education & Achievements */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Column 1: Academic Degrees */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 rounded-lg bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-500">
                <GraduationCap className="w-4 h-4" />
              </div>
              <h3 className="font-heading font-bold text-xl text-slate-900 dark:text-white">
                Academic Degrees
              </h3>
            </div>

            <div className="space-y-6">
              {portfolioData.education.map((edu, idx) => (
                <motion.div
                  key={edu.degree}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.15 }}
                  className="p-6 rounded-2xl glass-panel bg-white/70 dark:bg-[#12121e]/80 border border-slate-200 dark:border-white/10 hover:border-indigo-500/40 dark:hover:border-cyan-400/40 transition-all duration-300 group"
                >
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                    <span className="text-xs font-mono font-medium px-2.5 py-0.5 rounded-full text-indigo-600 dark:text-cyan-300 bg-indigo-50 dark:bg-cyan-500/10 border border-indigo-200 dark:border-cyan-500/20">
                      {edu.period}
                    </span>
                    <span className="text-xs font-mono text-emerald-600 dark:text-emerald-400 font-semibold">
                      {edu.status}
                    </span>
                  </div>

                  <h4 className="font-heading font-bold text-lg text-slate-900 dark:text-white group-hover:text-cyan-400 transition-colors">
                    {edu.degree}
                  </h4>

                  <p className="text-sm font-medium text-indigo-600 dark:text-indigo-400 mt-1">
                    {edu.institution}
                  </p>

                  <div className="flex items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400 mt-2 mb-3">
                    <MapPin className="w-3.5 h-3.5 text-slate-400" />
                    <span>{edu.location}</span>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 border-t border-slate-200/80 dark:border-white/10 pt-3">
                    {edu.grade}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Column 2: Honors & Achievements */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 rounded-lg bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400">
                <Trophy className="w-4 h-4" />
              </div>
              <h3 className="font-heading font-bold text-xl text-slate-900 dark:text-white">
                Key Honors & Certifications
              </h3>
            </div>

            <div className="space-y-6">
              {portfolioData.achievements.map((ach, idx) => {
                const isTrophy = ach.icon === "Trophy";
                const IconComponent = isTrophy ? Trophy : BadgeCheck;
                return (
                  <motion.div
                    key={ach.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.15 }}
                    className="p-6 rounded-2xl glass-panel bg-white/70 dark:bg-[#12121e]/80 border border-slate-200 dark:border-white/10 hover:border-cyan-500/40 transition-all duration-300 group flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between gap-2 mb-3">
                        <span className="inline-flex items-center gap-1.5 text-xs font-mono px-2.5 py-0.5 rounded-full text-amber-600 dark:text-amber-300 bg-amber-500/10 border border-amber-500/20">
                          <IconComponent className="w-3.5 h-3.5 text-amber-400" />
                          {ach.type}
                        </span>
                        <span className="text-xs font-mono text-slate-500 dark:text-slate-400">
                          {ach.date}
                        </span>
                      </div>

                      <h4 className="font-heading font-bold text-lg text-slate-900 dark:text-white group-hover:text-cyan-400 transition-colors">
                        {ach.title}
                      </h4>

                      <p className="text-sm font-medium text-slate-700 dark:text-slate-300 mt-1 mb-3">
                        Issued by: <span className="text-indigo-600 dark:text-indigo-400">{ach.issuer}</span>
                      </p>

                      <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed border-t border-slate-200/80 dark:border-white/10 pt-3">
                        {ach.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
