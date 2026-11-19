"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Send,
  Github,
  Linkedin,
  Mail,
  MessageCircle,
  ChevronDown,
  Sparkles,
  Database,
  Code2,
} from "lucide-react";
import { portfolioData } from "@/data/portfolio";

const SOCIAL_ICONS = {
  Github,
  Linkedin,
  Mail,
  MessageCircle,
};

export default function Hero() {
  const roles = portfolioData.personal.roles;
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [currentText, setCurrentText] = useState(roles[0]); // pre-filled for immediate SSR visibility
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(100);

  // Typing effect
  useEffect(() => {
    const handleTyping = () => {
      const fullText = roles[currentRoleIndex];

      if (!isDeleting) {
        setCurrentText(fullText.substring(0, currentText.length + 1));
        setTypingSpeed(85);

        if (currentText === fullText) {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        setCurrentText(fullText.substring(0, currentText.length - 1));
        setTypingSpeed(45);

        if (currentText === "") {
          setIsDeleting(false);
          setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
        }
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentRoleIndex, roles, typingSpeed]);

  const scrollToSection = (e, sectionId) => {
    e.preventDefault();
    const element = document.getElementById(sectionId);
    if (element) {
      const navOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-[92vh] sm:min-h-screen flex items-center justify-center pt-24 sm:pt-28 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
        {/* Left Column: Intro & Info (Columns 7) */}
        <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left order-2 lg:order-1">
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-100 dark:bg-white/5 border border-slate-300 dark:border-white/10 text-xs font-mono mb-6 backdrop-blur-md shadow-sm">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
            </span>
            <span className="text-slate-700 dark:text-slate-300">Available for innovative roles & projects</span>
          </div>

          {/* Heading */}
          <div>
            <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.15]">
              Hi, I&apos;m{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-indigo-400 to-cyan-400">
                {portfolioData.personal.name}
              </span>
            </h1>

            {/* Dynamic Typing Title */}
            <div className="mt-3 sm:mt-4 h-12 sm:h-14 flex items-center justify-center lg:justify-start">
              <span className="font-heading font-semibold text-2xl sm:text-3xl md:text-4xl text-slate-700 dark:text-slate-300">
                {currentText}
              </span>
              <span className="inline-block w-[3px] h-8 sm:h-10 ml-1.5 bg-cyan-400 animate-pulse" />
            </div>
          </div>

          {/* Tagline */}
          <p className="mt-4 sm:mt-6 text-base sm:text-lg md:text-xl text-slate-600 dark:text-slate-300 max-w-2xl leading-relaxed">
            {portfolioData.personal.tagline}
          </p>

          {/* CTAs */}
          <div className="mt-8 flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
            <a
              href="#projects"
              onClick={(e) => scrollToSection(e, "projects")}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full font-medium text-white bg-gradient-to-r from-indigo-600 via-indigo-500 to-cyan-500 hover:from-indigo-500 hover:to-cyan-400 shadow-xl shadow-indigo-500/25 active:scale-95 transition-all duration-200 min-h-[48px] focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              <span>View Projects</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <a
              href="#contact"
              onClick={(e) => scrollToSection(e, "contact")}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full font-medium text-slate-800 dark:text-white bg-slate-200/60 dark:bg-transparent border-2 border-slate-300 dark:border-white/20 hover:border-indigo-500 dark:hover:border-cyan-400 hover:bg-slate-100 dark:hover:bg-white/5 active:scale-95 transition-all duration-200 min-h-[48px] focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              <span>Contact Me</span>
              <Send className="w-4 h-4 text-cyan-400" />
            </a>
          </div>

          {/* Socials Row */}
          <div className="mt-10 flex items-center gap-3 pt-6 border-t border-slate-200 dark:border-white/10 w-full justify-center lg:justify-start">
            <span className="text-xs font-mono uppercase text-slate-500 dark:text-slate-400 mr-2">
              Connect:
            </span>
            {portfolioData.socials.map((soc) => {
              const Icon = SOCIAL_ICONS[soc.icon] || Mail;
              return (
                <a
                  key={soc.name}
                  href={soc.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={soc.name}
                  className="p-2.5 rounded-xl border border-slate-200 dark:border-white/10 bg-slate-100 dark:bg-white/5 text-slate-700 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-cyan-300 hover:border-indigo-400 dark:hover:border-cyan-400 hover:scale-105 active:scale-95 transition-all min-h-[44px] min-w-[44px] flex items-center justify-center shadow-sm"
                >
                  <Icon className="w-5 h-5" />
                </a>
              );
            })}
          </div>
        </div>

        {/* Right Column: Hero Avatar with Gradient Ring & Floating Cards (Columns 5) */}
        <div className="lg:col-span-5 flex justify-center items-center order-1 lg:order-2">
          <div className="relative">
            {/* Ambient Background Glow */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-indigo-600/30 via-cyan-400/30 to-purple-600/20 blur-2xl -z-10 scale-110 animate-pulse-subtle" />

            {/* Gradient Ring Outer Wrapper */}
            <div className="relative p-1.5 rounded-full bg-gradient-to-tr from-indigo-600 via-purple-500 to-cyan-400 shadow-2xl shadow-indigo-600/30">
              <div className="p-1.5 rounded-full bg-[#0a0a0f]">
                {/* Photo Container */}
                <div className="relative w-56 h-56 sm:w-72 sm:h-72 md:w-80 md:h-80 rounded-full overflow-hidden border-2 border-white/20">
                  <Image
                    src={portfolioData.personal.avatarUrl}
                    alt={portfolioData.personal.name}
                    fill
                    sizes="(max-width: 640px) 224px, (max-width: 768px) 288px, 320px"
                    priority
                    className="object-cover object-center scale-105 hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
                </div>
              </div>
            </div>

            {/* Floating Code Card 1 (Top Right) */}
            <div className="hidden sm:flex absolute -top-4 -right-4 sm:-right-8 p-3 rounded-2xl glass-panel bg-white/90 dark:bg-[#12121e]/90 border border-slate-200 dark:border-white/15 shadow-xl items-center gap-3 backdrop-blur-md animate-float">
              <div className="w-10 h-10 rounded-xl bg-indigo-500/10 border border-indigo-500/30 flex items-center justify-center text-indigo-500">
                <Code2 className="w-5 h-5" />
              </div>
              <div className="pr-1 text-left">
                <span className="block text-[11px] font-mono text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                  Full Stack
                </span>
                <span className="block text-xs font-bold text-slate-800 dark:text-white font-mono">
                  Next.js + React.js
                </span>
              </div>
            </div>

            {/* Floating Code Card 2 (Bottom Left) */}
            <div className="hidden sm:flex absolute -bottom-6 -left-4 sm:-left-8 p-3 rounded-2xl glass-panel bg-white/90 dark:bg-[#12121e]/90 border border-slate-200 dark:border-white/15 shadow-xl items-center gap-3 backdrop-blur-md animate-float-reverse">
              <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
                <Database className="w-5 h-5" />
              </div>
              <div className="pr-1 text-left">
                <span className="block text-[11px] font-mono text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                  Backend & DB
                </span>
                <span className="block text-xs font-bold text-slate-800 dark:text-white font-mono">
                  Node.js • MongoDB
                </span>
              </div>
            </div>

            {/* Floating Code Card 3 (Bottom Right Micro Badge) */}
            <div className="absolute bottom-2 right-0 sm:-right-4 px-2.5 py-1.5 rounded-xl bg-black/80 border border-cyan-500/40 text-cyan-300 text-[10px] font-mono flex items-center gap-1.5 backdrop-blur-md shadow-lg">
              <Sparkles className="w-3 h-3 text-cyan-400" />
              <span>Production Proven</span>
            </div>
          </div>
        </div>
      </div>

      {/* Animated Scroll Down Indicator */}
      <div
        className="absolute bottom-4 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 pointer-events-auto cursor-pointer"
        onClick={(e) => scrollToSection(e, "about")}
      >
        <span className="text-[11px] font-mono uppercase tracking-widest text-slate-400 dark:text-slate-500">
          Scroll
        </span>
        <div className="text-cyan-400 animate-bounce">
          <ChevronDown className="w-5 h-5" />
        </div>
      </div>
    </section>
  );
}
