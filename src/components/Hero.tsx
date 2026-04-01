"use client";

import { motion } from "framer-motion";
import { ArrowRight, Phone, Shield, Users, Award } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative pt-20 sm:pt-24 pb-16 sm:pb-24 bg-gradient-to-br from-primary-dark via-primary to-primary-light overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-white rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-accent rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            {/* Trust badge */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-sm rounded-full px-4 py-2 mb-6"
            >
              <Shield className="w-4 h-4 text-accent-light" />
              <span className="text-sm text-white/90 font-medium">
                Trusted by 5,000+ Families Across India
              </span>
            </motion.div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight">
              Your Child&apos;s{" "}
              <span className="text-accent-light">Medical Dream</span>{" "}
              Starts With the Right Guidance
            </h1>

            <p className="mt-6 text-lg sm:text-xl text-blue-100 leading-relaxed max-w-xl">
              Expert NEET counselling for medical college admissions in India &amp;
              abroad. We help you pick the right college, avoid costly mistakes,
              and secure your future — stress-free.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-lg bg-accent text-primary-dark font-bold text-base hover:bg-accent-light transition-colors"
              >
                Get Free Counselling
                <ArrowRight className="w-5 h-5" />
              </motion.a>
              <motion.a
                href="https://wa.me/919999999999?text=Hi%2C%20I%20need%20guidance%20for%20NEET%20admission"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-lg bg-white/10 backdrop-blur-sm border border-white/25 text-white font-semibold text-base hover:bg-white/20 transition-colors"
              >
                <Phone className="w-5 h-5" />
                Talk to an Expert
              </motion.a>
            </div>

            {/* Quick stats */}
            <div className="mt-10 grid grid-cols-3 gap-6">
              {[
                { icon: Users, number: "5,000+", label: "Students Guided" },
                { icon: Award, number: "98%", label: "Success Rate" },
                { icon: Shield, number: "10+", label: "Years Experience" },
              ].map((stat) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  className="text-center sm:text-left"
                >
                  <stat.icon className="w-5 h-5 text-accent-light mb-1 mx-auto sm:mx-0" />
                  <div className="text-xl sm:text-2xl font-bold text-white">
                    {stat.number}
                  </div>
                  <div className="text-xs sm:text-sm text-blue-200">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right side visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="hidden lg:block"
          >
            <div className="relative">
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
                <div className="space-y-6">
                  <div className="flex items-center gap-4 bg-white/10 rounded-xl p-4">
                    <div className="w-12 h-12 bg-green-400/20 rounded-full flex items-center justify-center">
                      <span className="text-2xl">🎓</span>
                    </div>
                    <div>
                      <div className="text-white font-semibold">NEET UG/PG Guidance</div>
                      <div className="text-blue-200 text-sm">Personalized college selection</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 bg-white/10 rounded-xl p-4">
                    <div className="w-12 h-12 bg-blue-400/20 rounded-full flex items-center justify-center">
                      <span className="text-2xl">🌍</span>
                    </div>
                    <div>
                      <div className="text-white font-semibold">MBBS Abroad</div>
                      <div className="text-blue-200 text-sm">Russia, Kazakhstan, Philippines &amp; more</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 bg-white/10 rounded-xl p-4">
                    <div className="w-12 h-12 bg-amber-400/20 rounded-full flex items-center justify-center">
                      <span className="text-2xl">📋</span>
                    </div>
                    <div>
                      <div className="text-white font-semibold">Complete Support</div>
                      <div className="text-blue-200 text-sm">From application to admission</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 bg-white/10 rounded-xl p-4">
                    <div className="w-12 h-12 bg-purple-400/20 rounded-full flex items-center justify-center">
                      <span className="text-2xl">✅</span>
                    </div>
                    <div>
                      <div className="text-white font-semibold">NMC Approved Colleges</div>
                      <div className="text-blue-200 text-sm">100% verified &amp; recognized</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
