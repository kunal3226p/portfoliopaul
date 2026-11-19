"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, FileDown, ArrowUpRight } from "lucide-react";
import ThemeToggle from "./ThemeToggle";
import { portfolioData } from "@/data/portfolio";

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("hero");
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Toggle sticky shadow/blur intensity
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Active section detection
      const sections = portfolioData.navLinks.map((link) => link.href.substring(1));
      const scrollPosition = window.scrollY + 180;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section) {
          const sectionTop = section.offsetTop;
          if (scrollPosition >= sectionTop) {
            setActiveSection(sections[i]);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [mobileMenuOpen]);

  const scrollTo = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const targetId = href.replace("#", "");
    const element = document.getElementById(targetId);
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
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-[#0a0a0f]/80 dark:bg-[#0a0a0f]/80 bg-white/80 backdrop-blur-md border-b border-black/5 dark:border-white/10 shadow-lg shadow-black/5 dark:shadow-black/20 py-3.5"
            : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <a
            href="#hero"
            onClick={(e) => scrollTo(e, "#hero")}
            className="group flex items-center gap-2 focus:outline-none focus:ring-2 focus:ring-indigo-500 rounded-lg p-1 min-h-[44px]"
            aria-label="Kunal Paul Portfolio - Back to top"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-indigo-600 via-indigo-500 to-cyan-400 p-[1.5px] transition-transform duration-300 group-hover:scale-105 shadow-md shadow-indigo-500/20">
              <div className="w-full h-full bg-[#0a0a0f] rounded-[10px] flex items-center justify-center">
                <span className="font-heading font-black text-lg text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-300">
                  KP
                </span>
              </div>
            </div>
            <div className="flex flex-col">
              <span className="font-heading font-bold text-lg tracking-tight text-slate-900 dark:text-white flex items-center">
                {portfolioData.personal.shortName}
                <span className="text-cyan-400">.</span>
              </span>
              <span className="text-[10px] tracking-wider font-mono uppercase text-indigo-600 dark:text-indigo-400 font-semibold -mt-1 hidden sm:inline-block">
                Full Stack Dev
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2" aria-label="Main Navigation">
            {portfolioData.navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => scrollTo(e, link.href)}
                  className={`relative px-3.5 py-2 rounded-full text-sm font-medium transition-all duration-200 min-h-[44px] flex items-center focus:outline-none focus:ring-2 focus:ring-indigo-500 ${
                    isActive
                      ? "text-white font-semibold"
                      : "text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-white/5"
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="navPill"
                      className="absolute inset-0 bg-gradient-to-r from-indigo-600/90 to-cyan-500/90 rounded-full -z-10 shadow-sm shadow-indigo-500/30"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                  {link.label}
                </a>
              );
            })}
          </nav>

          {/* Right Action Buttons */}
          <div className="hidden sm:flex items-center gap-3">
            <ThemeToggle />

            <a
              href={portfolioData.personal.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              download="Kunal-Paul-Resume.pdf"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full text-sm font-medium text-slate-800 dark:text-white bg-slate-200/80 dark:bg-white/10 hover:bg-indigo-600 hover:text-white dark:hover:bg-gradient-to-r dark:hover:from-indigo-600 dark:hover:to-cyan-500 border border-slate-300 dark:border-white/10 transition-all duration-200 hover:shadow-lg hover:shadow-indigo-500/25 active:scale-95 min-h-[44px] focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              <FileDown className="w-4 h-4" />
              <span>Resume</span>
            </a>
          </div>

          {/* Mobile hamburger & Theme Toggle */}
          <div className="flex items-center gap-2 lg:hidden">
            <ThemeToggle />

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              type="button"
              className="p-2.5 rounded-xl border border-slate-300 dark:border-white/10 bg-slate-100 dark:bg-white/5 text-slate-800 dark:text-white min-h-[44px] min-w-[44px] flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-colors"
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6 text-cyan-400" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Animated Slide-in Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 lg:hidden bg-black/60 backdrop-blur-md"
            onClick={() => setMobileMenuOpen(false)}
          >
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 w-full sm:w-80 max-w-full bg-[#0a0a0f] border-l border-white/10 p-6 flex flex-col justify-between shadow-2xl z-50 overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div>
                {/* Header in Drawer */}
                <div className="flex items-center justify-between pb-6 border-b border-white/10 mb-6">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg bg-gradient-to-tr from-indigo-500 to-cyan-400 flex items-center justify-center text-white font-heading font-black">
                      KP
                    </div>
                    <div>
                      <h2 className="font-heading font-bold text-white leading-tight">
                        {portfolioData.personal.name}
                      </h2>
                      <p className="text-xs text-indigo-400 font-mono">Full Stack Developer</p>
                    </div>
                  </div>
                  <button
                    onClick={() => setMobileMenuOpen(false)}
                    className="p-2 text-slate-400 hover:text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 min-h-[44px] min-w-[44px] flex items-center justify-center"
                    aria-label="Close menu"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>

                {/* Navigation Links */}
                <nav className="flex flex-col gap-2" aria-label="Mobile Navigation">
                  {portfolioData.navLinks.map((link, idx) => {
                    const isActive = activeSection === link.href.substring(1);
                    return (
                      <motion.a
                        key={link.label}
                        href={link.href}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.04 }}
                        onClick={(e) => scrollTo(e, link.href)}
                        className={`flex items-center justify-between px-4 py-3 rounded-xl text-base font-medium transition-all min-h-[48px] ${
                          isActive
                            ? "bg-gradient-to-r from-indigo-600/30 to-cyan-500/20 text-cyan-300 border border-indigo-500/30 font-semibold"
                            : "text-slate-300 hover:text-white hover:bg-white/5"
                        }`}
                      >
                        <span>{link.label}</span>
                        {isActive && <div className="w-2 h-2 rounded-full bg-cyan-400 shadow-sm shadow-cyan-400" />}
                      </motion.a>
                    );
                  })}
                </nav>
              </div>

              {/* Bottom CTA & Info */}
              <div className="pt-6 border-t border-white/10 flex flex-col gap-3">
                <a
                  href={portfolioData.personal.resumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  download="Kunal-Paul-Resume.pdf"
                  className="w-full flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl font-medium text-white bg-gradient-to-r from-indigo-600 to-cyan-500 hover:opacity-95 shadow-lg shadow-indigo-600/25 min-h-[48px] active:scale-98 transition-all"
                >
                  <FileDown className="w-5 h-5" />
                  <span>Download Resume</span>
                </a>

                <a
                  href={portfolioData.personal.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-sm font-medium text-emerald-400 bg-emerald-500/10 hover:bg-emerald-500/20 border border-emerald-500/20 min-h-[48px] transition-all"
                >
                  <span>WhatsApp Chat</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>

                <div className="text-center text-xs text-slate-500 pt-2">
                  {portfolioData.personal.location}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
