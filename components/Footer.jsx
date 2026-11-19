"use client";

import { ArrowUp, Github, Linkedin, Mail, MessageCircle, Heart } from "lucide-react";
import { portfolioData } from "@/data/portfolio";

const SOCIAL_ICONS = {
  Github,
  Linkedin,
  Mail,
  MessageCircle,
};

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="relative border-t border-slate-200/80 dark:border-white/10 bg-slate-50/50 dark:bg-[#08080c]/80 backdrop-blur-md transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand Column */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-indigo-600 to-cyan-400 p-[1.5px]">
                <div className="w-full h-full bg-[#0a0a0f] rounded-[6px] flex items-center justify-center">
                  <span className="font-heading font-black text-sm text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-300">
                    KP
                  </span>
                </div>
              </div>
              <span className="font-heading font-bold text-lg text-slate-900 dark:text-white">
                {portfolioData.personal.name}
              </span>
            </div>
            <p className="text-sm text-slate-600 dark:text-slate-400 max-w-sm leading-relaxed mb-4">
              {portfolioData.personal.tagline}
            </p>
            <p className="text-xs text-slate-500 font-mono">
              📍 {portfolioData.personal.location}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-bold text-sm uppercase tracking-wider text-slate-900 dark:text-white mb-4">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-sm">
              {portfolioData.navLinks.slice(0, 5).map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-cyan-400 transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Socials & Connect */}
          <div>
            <h4 className="font-heading font-bold text-sm uppercase tracking-wider text-slate-900 dark:text-white mb-4">
              Connect
            </h4>
            <div className="flex flex-wrap gap-2.5 mb-4">
              {portfolioData.socials.map((soc) => {
                const Icon = SOCIAL_ICONS[soc.icon] || Mail;
                return (
                  <a
                    key={soc.name}
                    href={soc.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={soc.name}
                    className="w-10 h-10 rounded-xl bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 hover:border-indigo-500 dark:hover:border-cyan-400 flex items-center justify-center text-slate-700 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-cyan-300 transition-all hover:scale-105 active:scale-95"
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                );
              })}
            </div>
            <a
              href={`mailto:${portfolioData.personal.email}`}
              className="text-xs font-mono text-cyan-600 dark:text-cyan-400 hover:underline block truncate"
            >
              {portfolioData.personal.email}
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-200/80 dark:border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 dark:text-slate-400">
          <p className="text-center sm:text-left">
            © 2026 {portfolioData.personal.name}. All rights reserved.
          </p>

          <p className="flex items-center gap-1.5 text-center">
            <span>Built with Next.js 14, React & Tailwind CSS</span>
          </p>

          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-slate-100 dark:bg-white/5 hover:bg-slate-200 dark:hover:bg-white/10 border border-slate-200 dark:border-white/10 text-slate-700 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-cyan-400 transition-all min-h-[44px] focus:outline-none focus:ring-2 focus:ring-indigo-500"
            aria-label="Back to top"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
