"use client";

import { motion } from "framer-motion";
import { AlertCircle, CheckCircle2 } from "lucide-react";

const painPoints = [
  {
    problem: "\"My child scored well in NEET but I don't know which college to choose.\"",
    solution:
      "We analyze your rank, category, state domicile, and budget to shortlist the best colleges — so you don't waste a single option.",
  },
  {
    problem: "\"There are so many agents promising abroad admissions. Who do I trust?\"",
    solution:
      "We only work with NMC-approved, WHO-listed universities. Every college we recommend is verified, and we show you proof.",
  },
  {
    problem: "\"The counselling process is confusing and I'm scared of making a mistake.\"",
    solution:
      "Our experts walk you through every round of counselling — choice filling, document verification, seat allotment — step by step.",
  },
  {
    problem: "\"I'm worried about hidden fees and unexpected costs abroad.\"",
    solution:
      "We give you a complete fee breakdown before you commit — tuition, hostel, food, insurance, and travel. No surprises, ever.",
  },
];

export default function PainPoints() {
  return (
    <section className="py-16 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-12 sm:mb-16"
        >
          <span className="text-primary-light font-semibold text-sm uppercase tracking-wider">
            We Understand Your Concerns
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-primary-dark">
            Real Problems. Real Solutions.
          </h2>
          <p className="mt-4 text-lg text-muted">
            Every parent and student we work with has felt the same worries. Here&apos;s
            how we solve them.
          </p>
        </motion.div>

        <div className="space-y-6">
          {painPoints.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="grid md:grid-cols-2 gap-4 md:gap-0 bg-section-alt rounded-xl overflow-hidden border border-slate-100"
            >
              <div className="flex items-start gap-4 p-6 sm:p-8">
                <AlertCircle className="w-6 h-6 text-red-400 flex-shrink-0 mt-0.5" />
                <div>
                  <div className="text-xs font-semibold uppercase tracking-wider text-red-400 mb-2">
                    The Problem
                  </div>
                  <p className="text-primary-dark font-medium leading-relaxed">
                    {item.problem}
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-6 sm:p-8 bg-primary-light/5 md:border-l border-t md:border-t-0 border-slate-100">
                <CheckCircle2 className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                <div>
                  <div className="text-xs font-semibold uppercase tracking-wider text-green-600 mb-2">
                    Our Solution
                  </div>
                  <p className="text-primary-dark font-medium leading-relaxed">
                    {item.solution}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
