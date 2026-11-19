"use client";

import Navbar from "@/components/Navbar";
import Hero from "@/sections/Hero";
import About from "@/sections/About";
import Skills from "@/sections/Skills";
import Projects from "@/sections/Projects";
import Experience from "@/sections/Experience";
import Education from "@/sections/Education";
import Contact from "@/sections/Contact";
import Footer from "@/components/Footer";
import BackgroundBlobs from "@/components/BackgroundBlobs";

export default function Home() {
  return (
    <div className="relative min-h-screen selection:bg-cyan-500/30 selection:text-cyan-200">
      {/* Background Animated Ambience */}
      <BackgroundBlobs />

      {/* Sticky Navigation */}
      <Navbar />

      {/* Main Page Content */}
      <main className="relative z-10 flex flex-col">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Education />
        <Contact />
      </main>

      {/* Site Footer */}
      <Footer />
    </div>
  );
}
