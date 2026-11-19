"use client";

export default function BackgroundBlobs() {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10 select-none">
      {/* Background base */}
      <div className="absolute inset-0 bg-[#f8fafc] dark:bg-[#0a0a0f] transition-colors duration-500" />

      {/* Grid pattern overlay */}
      <div 
        className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(rgba(99, 102, 241, 0.4) 1px, transparent 1px)`,
          backgroundSize: '32px 32px'
        }}
      />

      {/* Top Left Gradient Blob - Electric Indigo */}
      <div 
        className="absolute -top-32 -left-32 w-[350px] sm:w-[500px] md:w-[650px] h-[350px] sm:h-[500px] md:h-[650px] rounded-full bg-gradient-to-br from-indigo-600/25 to-blue-600/10 dark:from-indigo-600/20 dark:to-purple-900/10 blur-[100px] sm:blur-[130px] animate-gradient-blob"
        style={{ animationDelay: '0s' }}
      />

      {/* Top Right Gradient Blob - Cyan / Aqua */}
      <div 
        className="absolute top-1/4 -right-32 w-[300px] sm:w-[450px] md:w-[600px] h-[300px] sm:h-[450px] md:h-[600px] rounded-full bg-gradient-to-bl from-cyan-400/25 to-indigo-500/15 dark:from-cyan-500/15 dark:to-indigo-500/10 blur-[90px] sm:blur-[120px] animate-gradient-blob"
        style={{ animationDelay: '3s' }}
      />

      {/* Center Bottom Gradient Blob - Deep Blue / Indigo */}
      <div 
        className="absolute -bottom-32 left-1/3 w-[320px] sm:w-[480px] md:w-[650px] h-[320px] sm:h-[480px] md:h-[650px] rounded-full bg-gradient-to-tr from-indigo-500/15 to-cyan-400/10 dark:from-indigo-900/20 dark:to-cyan-600/10 blur-[100px] sm:blur-[140px] animate-gradient-blob"
        style={{ animationDelay: '6s' }}
      />
    </div>
  );
}
