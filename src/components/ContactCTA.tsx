"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, MessageCircle, Phone, Mail } from "lucide-react";

export default function ContactCTA() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // In production, wire this to your backend or a service like Formspree
    setSubmitted(true);
  }

  return (
    <section id="contact" className="py-16 sm:py-24 bg-gradient-to-br from-primary-dark via-primary to-primary-light relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 right-20 w-80 h-80 bg-accent rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-10 w-60 h-60 bg-white rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: CTA content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white leading-tight">
              Take the First Step Toward Your Child&apos;s{" "}
              <span className="text-accent-light">Medical Career</span>
            </h2>
            <p className="mt-4 text-lg text-blue-100 leading-relaxed">
              Book a free counselling session. We&apos;ll analyze your NEET score, discuss
              options in India &amp; abroad, and create a clear plan — no pressure,
              no obligation.
            </p>

            <div className="mt-8 space-y-4">
              <a
                href="https://wa.me/919999999999?text=Hi%2C%20I%20need%20guidance%20for%20NEET%20admission"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 bg-white/10 backdrop-blur-sm rounded-xl p-4 hover:bg-white/20 transition-colors group"
              >
                <div className="w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center">
                  <MessageCircle className="w-6 h-6 text-green-400" />
                </div>
                <div>
                  <div className="text-white font-semibold group-hover:text-accent-light transition-colors">
                    WhatsApp Us
                  </div>
                  <div className="text-blue-200 text-sm">
                    Get instant response on WhatsApp
                  </div>
                </div>
              </a>
              <a
                href="tel:+919999999999"
                className="flex items-center gap-4 bg-white/10 backdrop-blur-sm rounded-xl p-4 hover:bg-white/20 transition-colors group"
              >
                <div className="w-12 h-12 bg-blue-400/20 rounded-full flex items-center justify-center">
                  <Phone className="w-6 h-6 text-blue-300" />
                </div>
                <div>
                  <div className="text-white font-semibold group-hover:text-accent-light transition-colors">
                    Call Us Directly
                  </div>
                  <div className="text-blue-200 text-sm">
                    +91 99999 99999
                  </div>
                </div>
              </a>
              <a
                href="mailto:info@studymbbsrussia.com"
                className="flex items-center gap-4 bg-white/10 backdrop-blur-sm rounded-xl p-4 hover:bg-white/20 transition-colors group"
              >
                <div className="w-12 h-12 bg-purple-400/20 rounded-full flex items-center justify-center">
                  <Mail className="w-6 h-6 text-purple-300" />
                </div>
                <div>
                  <div className="text-white font-semibold group-hover:text-accent-light transition-colors">
                    Email Us
                  </div>
                  <div className="text-blue-200 text-sm">
                    info@studymbbsrussia.com
                  </div>
                </div>
              </a>
            </div>
          </motion.div>

          {/* Right: Lead form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-2xl">
              <h3 className="text-xl font-bold text-primary-dark mb-1">
                Get Free Counselling
              </h3>
              <p className="text-muted text-sm mb-6">
                Fill in your details and our expert will call you within 24 hours.
              </p>

              {!submitted ? (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">
                      Student Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Enter student's full name"
                      className="w-full px-4 py-3 rounded-lg border border-slate-200 text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-primary-light/30 focus:border-primary-light transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 XXXXX XXXXX"
                      className="w-full px-4 py-3 rounded-lg border border-slate-200 text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-primary-light/30 focus:border-primary-light transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">
                      NEET Score (if available)
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. 450"
                      className="w-full px-4 py-3 rounded-lg border border-slate-200 text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-primary-light/30 focus:border-primary-light transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">
                      Interested In
                    </label>
                    <select
                      className="w-full px-4 py-3 rounded-lg border border-slate-200 text-slate-800 focus:outline-none focus:ring-2 focus:ring-primary-light/30 focus:border-primary-light transition-colors"
                      defaultValue=""
                    >
                      <option value="" disabled>
                        Select an option
                      </option>
                      <option>MBBS in India (Private Colleges)</option>
                      <option>MBBS in Russia</option>
                      <option>MBBS Abroad (Other Countries)</option>
                      <option>NEET PG Counselling</option>
                      <option>Not sure — need guidance</option>
                    </select>
                  </div>
                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full flex items-center justify-center gap-2 px-6 py-3.5 bg-primary-light text-white rounded-lg font-semibold hover:bg-primary transition-colors"
                  >
                    <Send className="w-4 h-4" />
                    Request Free Callback
                  </motion.button>
                  <p className="text-xs text-center text-muted">
                    Your information is 100% confidential. We never spam.
                  </p>
                </form>
              ) : (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-8"
                >
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-3xl">✅</span>
                  </div>
                  <h4 className="text-xl font-bold text-primary-dark mb-2">
                    Thank You!
                  </h4>
                  <p className="text-muted">
                    Our counsellor will reach out to you within 24 hours. In the
                    meantime, feel free to WhatsApp us for instant help.
                  </p>
                </motion.div>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
