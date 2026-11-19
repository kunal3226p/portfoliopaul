"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  MessageCircle,
  Send,
  Loader2,
  CheckCircle2,
  Sparkles,
  ArrowUpRight,
} from "lucide-react";
import Toast from "@/components/Toast";
import { portfolioData } from "@/data/portfolio";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [toast, setToast] = useState(null);

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) {
      newErrors.name = "Name is required.";
    }
    if (!formData.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address.";
    }
    if (!formData.message.trim()) {
      newErrors.message = "Message is required.";
    } else if (formData.message.trim().length < 5) {
      newErrors.message = "Message must be at least 5 characters.";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: null }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    setLoading(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok && data.success) {
        setToast({
          type: "success",
          title: "Message Delivered!",
          message: data.message || "Thank you for reaching out! I will respond promptly.",
        });
        setFormData({ name: "", email: "", message: "" });
        setErrors({});
      } else {
        setToast({
          type: "error",
          title: "Unable to Send",
          message: data.error || "Please check your information and try again.",
        });
      }
    } catch (err) {
      setToast({
        type: "error",
        title: "Connection Error",
        message: "Failed to connect to the server. You can also reach me directly via WhatsApp or email.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="relative py-20 sm:py-28 px-4 sm:px-6 lg:px-8">
      {/* Toast Notification */}
      <Toast toast={toast} onClose={() => setToast(null)} />

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
            <span>START A CONVERSATION</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-heading font-extrabold text-3xl sm:text-4xl md:text-5xl text-slate-900 dark:text-white"
          >
            Let&apos;s Work <span className="gradient-text">Together</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-3 text-slate-600 dark:text-slate-400 text-sm sm:text-base max-w-xl"
          >
            Have a project in mind, a job opportunity, or an enterprise challenge? Send a message below or connect directly.
          </motion.p>
        </div>

        {/* 2-Column Grid: Info & Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left Side: Contact Info & WhatsApp (5 Cols) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5 flex flex-col gap-4"
          >
            {/* Email Card */}
            <a
              href={`mailto:${portfolioData.personal.email}`}
              className="p-6 rounded-2xl glass-panel bg-white/70 dark:bg-[#12121e]/80 border border-slate-200 dark:border-white/10 hover:border-cyan-400/50 transition-all duration-300 group flex items-start gap-4 min-h-[44px]"
            >
              <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 group-hover:scale-105 transition-transform flex-shrink-0">
                <Mail className="w-6 h-6" />
              </div>
              <div className="min-w-0 flex-1">
                <span className="block text-xs font-mono uppercase text-slate-500 dark:text-slate-400">
                  Email Me
                </span>
                <span className="block font-heading font-bold text-base sm:text-lg text-slate-900 dark:text-white group-hover:text-cyan-400 transition-colors truncate">
                  {portfolioData.personal.email}
                </span>
                <span className="text-xs text-slate-500 mt-0.5 block">Click to send direct email</span>
              </div>
            </a>

            {/* Phone Card */}
            <a
              href={`tel:${portfolioData.personal.phone}`}
              className="p-6 rounded-2xl glass-panel bg-white/70 dark:bg-[#12121e]/80 border border-slate-200 dark:border-white/10 hover:border-indigo-500/50 transition-all duration-300 group flex items-start gap-4 min-h-[44px]"
            >
              <div className="w-12 h-12 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-500 group-hover:scale-105 transition-transform flex-shrink-0">
                <Phone className="w-6 h-6" />
              </div>
              <div className="min-w-0 flex-1">
                <span className="block text-xs font-mono uppercase text-slate-500 dark:text-slate-400">
                  Call / Phone
                </span>
                <span className="block font-heading font-bold text-base sm:text-lg text-slate-900 dark:text-white group-hover:text-indigo-400 transition-colors truncate">
                  {portfolioData.personal.phone}
                </span>
                <span className="text-xs text-slate-500 mt-0.5 block">Mon - Sat (10:00 - 19:00 IST)</span>
              </div>
            </a>

            {/* Location Card */}
            <div className="p-6 rounded-2xl glass-panel bg-white/70 dark:bg-[#12121e]/80 border border-slate-200 dark:border-white/10 flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400 flex-shrink-0">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <span className="block text-xs font-mono uppercase text-slate-500 dark:text-slate-400">
                  Location
                </span>
                <span className="block font-heading font-bold text-base text-slate-900 dark:text-white">
                  {portfolioData.personal.location}
                </span>
                <span className="text-xs text-slate-500 mt-0.5 block">Open to remote & on-site opportunities</span>
              </div>
            </div>

            {/* WhatsApp CTA Button */}
            <a
              href={portfolioData.personal.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 p-5 rounded-2xl bg-gradient-to-r from-emerald-600 to-teal-500 hover:from-emerald-500 hover:to-teal-400 text-white font-medium shadow-lg shadow-emerald-600/25 flex items-center justify-between group active:scale-98 transition-all min-h-[48px]"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center">
                  <MessageCircle className="w-5 h-5 text-white" />
                </div>
                <div>
                  <span className="block text-xs uppercase tracking-wider text-emerald-100 font-mono">
                    Instant Chat
                  </span>
                  <span className="block font-heading font-bold text-base">
                    Chat on WhatsApp
                  </span>
                </div>
              </div>
              <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </a>
          </motion.div>

          {/* Right Side: Contact Form (7 Cols) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7 p-6 sm:p-8 rounded-3xl glass-panel bg-white/70 dark:bg-[#12121e]/80 border border-slate-200 dark:border-white/10 shadow-2xl"
          >
            <h3 className="font-heading font-bold text-xl sm:text-2xl text-slate-900 dark:text-white mb-2">
              Send a Direct Message
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mb-6">
              Fill out the form below and I&apos;ll get back to you as soon as possible.
            </p>

            <form onSubmit={handleSubmit} noValidate className="space-y-5">
              {/* Name Field */}
              <div>
                <label
                  htmlFor="name"
                  className="block text-xs font-mono uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-2"
                >
                  Your Name <span className="text-rose-500">*</span>
                </label>
                <input
                  id="name"
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="e.g. Alex Sharma"
                  className={`w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-[#0a0a0f] border ${
                    errors.name
                      ? "border-rose-500 focus:ring-rose-500"
                      : "border-slate-300 dark:border-white/10 focus:border-cyan-400 focus:ring-cyan-400"
                  } text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-600 focus:outline-none focus:ring-2 focus:ring-opacity-50 transition-colors min-h-[44px]`}
                />
                {errors.name && (
                  <p className="mt-1 text-xs text-rose-500 font-mono">{errors.name}</p>
                )}
              </div>

              {/* Email Field */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-xs font-mono uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-2"
                >
                  Email Address <span className="text-rose-500">*</span>
                </label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="e.g. alex@company.com"
                  className={`w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-[#0a0a0f] border ${
                    errors.email
                      ? "border-rose-500 focus:ring-rose-500"
                      : "border-slate-300 dark:border-white/10 focus:border-cyan-400 focus:ring-cyan-400"
                  } text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-600 focus:outline-none focus:ring-2 focus:ring-opacity-50 transition-colors min-h-[44px]`}
                />
                {errors.email && (
                  <p className="mt-1 text-xs text-rose-500 font-mono">{errors.email}</p>
                )}
              </div>

              {/* Message Field */}
              <div>
                <label
                  htmlFor="message"
                  className="block text-xs font-mono uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-2"
                >
                  Your Message <span className="text-rose-500">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project goals, timelines, or role opportunity..."
                  className={`w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-[#0a0a0f] border ${
                    errors.message
                      ? "border-rose-500 focus:ring-rose-500"
                      : "border-slate-300 dark:border-white/10 focus:border-cyan-400 focus:ring-cyan-400"
                  } text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-600 focus:outline-none focus:ring-2 focus:ring-opacity-50 transition-colors resize-y`}
                />
                {errors.message && (
                  <p className="mt-1 text-xs text-rose-500 font-mono">{errors.message}</p>
                )}
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={loading}
                className="w-full py-4 px-6 rounded-xl font-medium text-white bg-gradient-to-r from-indigo-600 via-indigo-500 to-cyan-500 hover:from-indigo-500 hover:to-cyan-400 shadow-xl shadow-indigo-600/25 active:scale-98 transition-all flex items-center justify-center gap-2 min-h-[48px] focus:outline-none focus:ring-2 focus:ring-indigo-500 disabled:opacity-60 cursor-pointer"
              >
                {loading ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    <span>Processing message...</span>
                  </>
                ) : (
                  <>
                    <span>Send Message</span>
                    <Send className="w-4 h-4" />
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
