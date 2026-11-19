"use client";

import { motion } from "framer-motion";
import { FolderGit2, Sparkles, ExternalLink } from "lucide-react";
import ProjectCard from "@/components/ProjectCard";
import { portfolioData } from "@/data/portfolio";

export default function Projects() {
  return (
    <section id="projects" className="relative py-20 sm:py-28 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono text-cyan-500 dark:text-cyan-400 bg-cyan-500/10 border border-cyan-500/20 mb-3"
          >
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>PORTFOLIO SHOWCASE</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-heading font-extrabold text-3xl sm:text-4xl md:text-5xl text-slate-900 dark:text-white"
          >
            Featured <span className="gradient-text">Projects</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-3 text-slate-600 dark:text-slate-400 text-sm sm:text-base max-w-xl"
          >
            Real-world enterprise applications engineered for performance, security, and scale
          </motion.p>
        </div>

        {/* 3 Featured Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 items-stretch">
          {portfolioData.projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
