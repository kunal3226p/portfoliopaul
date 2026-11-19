"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Code2, Server, Database, Sparkles, MapPin, Mail, Phone } from "lucide-react";
import AnimatedCounter from "@/components/AnimatedCounter";
import { portfolioData } from "@/data/portfolio";

export default function About() {
  const highlights = [
    {
      title: "Full Stack Architecture",
      desc: "End-to-end development with Next.js, React, Node.js, and serverless infrastructure.",
      icon: Code2,
    },
    {
      title: "Database Engineering",
      desc: "Robust schema modeling, aggregation pipelines, and query optimization in MongoDB & MySQL.",
      icon: Database,
    },
    {
      title: "Enterprise Solutions",
      desc: "Built live production workforce, attendance, and financial portal platforms.",
      icon: Server,
    },
  ];

  return (
    <section id="about" className="relative py-20 sm:py-28 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono text-cyan-500 dark:text-cyan-400 bg-cyan-500/10 border border-cyan-500/20 mb-3"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>GET TO KNOW ME</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-heading font-extrabold text-3xl sm:text-4xl md:text-5xl text-slate-900 dark:text-white"
          >
            About <span className="gradient-text">Me</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-3 text-slate-600 dark:text-slate-400 text-sm sm:text-base max-w-xl"
          >
            Bridging clean user interfaces with performant backend pipelines
          </motion.p>
        </div>

        {/* Two-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          {/* Column 1: Main Bio & Philosophy (7 Cols) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7 flex flex-col justify-between p-6 sm:p-8 rounded-3xl glass-panel bg-white/70 dark:bg-[#12121e]/80 border border-slate-200 dark:border-white/10 shadow-xl"
          >
            <div>
              <div className="flex items-center gap-2 mb-4">
                <span className="w-2.5 h-2.5 rounded-full bg-cyan-400" />
                <span className="text-xs font-mono uppercase tracking-wider text-indigo-500 dark:text-cyan-400 font-semibold">
                  Engineering Background
                </span>
              </div>

              <h3 className="font-heading font-bold text-2xl sm:text-3xl text-slate-900 dark:text-white mb-6 leading-snug">
                Building scalable web apps with modern technologies & enterprise rigor.
              </h3>

              <div className="space-y-4 text-slate-600 dark:text-slate-300 text-base leading-relaxed">
                <p>
                  {portfolioData.personal.bio}
                </p>
                <p>
                  My engineering journey focuses on delivering high reliability: from crafting dynamic Next.js dashboards with responsive Tailwind UI to structuring performant MongoDB aggregation pipelines and secure JWT-authenticated Node.js backends.
                </p>
              </div>
            </div>

            {/* Quick Personal Metadata Grid */}
            <div className="mt-8 pt-6 border-t border-slate-200 dark:border-white/10 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm">
              <div className="flex items-center gap-2 text-slate-600 dark:text-slate-300">
                <MapPin className="w-4 h-4 text-indigo-500 flex-shrink-0" />
                <span>{portfolioData.personal.location}</span>
              </div>
              <div className="flex items-center gap-2 text-slate-600 dark:text-slate-300">
                <Mail className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                <a href={`mailto:${portfolioData.personal.email}`} className="hover:underline truncate">
                  {portfolioData.personal.email}
                </a>
              </div>
            </div>
          </motion.div>

          {/* Column 2: Core Pillars & Expertise Cards (5 Cols) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-5 flex flex-col justify-between gap-4"
          >
            {highlights.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="p-6 rounded-2xl glass-panel bg-white/70 dark:bg-[#12121e]/80 border border-slate-200 dark:border-white/10 hover:border-indigo-500/40 dark:hover:border-cyan-400/40 transition-all duration-300 group flex items-start gap-4"
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-500/10 to-cyan-500/10 border border-indigo-500/20 group-hover:border-cyan-400/50 flex items-center justify-center text-indigo-600 dark:text-cyan-400 flex-shrink-0 transition-colors">
                    <Icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-heading font-bold text-base sm:text-lg text-slate-900 dark:text-white group-hover:text-cyan-400 transition-colors">
                      {item.title}
                    </h4>
                    <p className="mt-1 text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </motion.div>
        </div>

        {/* Stats Row with Animated Counters */}
        <div className="mt-12 sm:mt-16 grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {portfolioData.stats.map((stat, idx) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="p-6 sm:p-7 rounded-2xl glass-panel bg-white/70 dark:bg-[#12121e]/80 border border-slate-200 dark:border-white/10 hover:border-indigo-500/40 dark:hover:border-cyan-400/40 transition-all duration-300 text-center flex flex-col items-center justify-center group"
            >
              <div className="font-heading font-black text-3xl sm:text-4xl md:text-5xl text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-cyan-400 mb-1">
                <AnimatedCounter
                  value={stat.value}
                  prefix={stat.prefix || ""}
                  suffix={stat.suffix || ""}
                  duration={2200}
                />
              </div>
              <h4 className="font-heading font-bold text-sm sm:text-base text-slate-900 dark:text-white">
                {stat.label}
              </h4>
              <p className="text-[11px] sm:text-xs text-slate-500 dark:text-slate-400 mt-1">
                {stat.sublabel}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
