"use client";

import { motion } from "framer-motion";
import { Briefcase, Sparkles } from "lucide-react";
import TimelineItem from "@/components/TimelineItem";
import { portfolioData } from "@/data/portfolio";

export default function Experience() {
  return (
    <section id="experience" className="relative py-20 sm:py-28 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono text-indigo-500 dark:text-indigo-400 bg-indigo-500/10 border border-indigo-500/20 mb-3"
          >
            <Briefcase className="w-3.5 h-3.5" />
            <span>CAREER PATH</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-heading font-extrabold text-3xl sm:text-4xl md:text-5xl text-slate-900 dark:text-white"
          >
            Work <span className="gradient-text">Experience</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-3 text-slate-600 dark:text-slate-400 text-sm sm:text-base max-w-xl"
          >
            Hands-on professional experience delivering production web solutions and collaborating in agile teams
          </motion.p>
        </div>

        {/* Timeline Container */}
        <div className="relative">
          {/* Vertical Connecting Line (Centered on desktop, Left on mobile) */}
          <div className="absolute top-4 bottom-4 left-4 md:left-1/2 -translate-x-1/2 w-[2px] bg-gradient-to-b from-indigo-500 via-cyan-400 to-indigo-600/30 rounded-full" />

          {/* Timeline Items */}
          <div className="space-y-4">
            {portfolioData.experience.map((item, index) => (
              <TimelineItem
                key={`${item.company}-${item.role}`}
                item={item}
                index={index}
                total={portfolioData.experience.length}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
