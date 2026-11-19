"use client";

import { motion } from "framer-motion";
import { Wrench, Sparkles } from "lucide-react";
import SkillCard from "@/components/SkillCard";
import { portfolioData } from "@/data/portfolio";

export default function Skills() {
  return (
    <section id="skills" className="relative py-20 sm:py-28 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono text-indigo-500 dark:text-indigo-400 bg-indigo-500/10 border border-indigo-500/20 mb-3"
          >
            <Wrench className="w-3.5 h-3.5" />
            <span>TECHNICAL PROFICIENCY</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-heading font-extrabold text-3xl sm:text-4xl md:text-5xl text-slate-900 dark:text-white"
          >
            Skills & <span className="gradient-text">Expertise</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-3 text-slate-600 dark:text-slate-400 text-sm sm:text-base max-w-xl"
          >
            Proven tools and technologies leveraged in building scalable, production-grade applications
          </motion.p>
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 items-stretch">
          {portfolioData.skills.map((category, index) => (
            <SkillCard key={category.category} category={category} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
