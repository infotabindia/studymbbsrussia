"use client";

import { motion } from "framer-motion";
import { Shield, Clock, IndianRupee, BookOpen, Handshake, MapPin } from "lucide-react";

const reasons = [
  {
    icon: Shield,
    title: "NMC/WHO Verified Colleges Only",
    description:
      "We only recommend colleges recognized by NMC and WHO. No compromises on your degree validity.",
  },
  {
    icon: Clock,
    title: "10+ Years of Experience",
    description:
      "Over a decade of helping families navigate the complex medical admission process successfully.",
  },
  {
    icon: IndianRupee,
    title: "Transparent Fee Structure",
    description:
      "No hidden charges, no last-minute surprises. We show you the real cost upfront — tuition, hostel, everything.",
  },
  {
    icon: BookOpen,
    title: "Data-Driven College Matching",
    description:
      "We match your NEET score, budget, and preferences to the best-fit colleges using real admission data.",
  },
  {
    icon: Handshake,
    title: "End-to-End Support",
    description:
      "From counselling to admission, visa, travel, and even post-arrival support — we are with you throughout.",
  },
  {
    icon: MapPin,
    title: "On-Ground Support Abroad",
    description:
      "Our representatives are present at partner universities to help students settle in comfortably.",
  },
];

export default function WhyUs() {
  return (
    <section id="why-us" className="py-16 sm:py-24 bg-section-alt">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-12 sm:mb-16"
        >
          <span className="text-primary-light font-semibold text-sm uppercase tracking-wider">
            Why Choose Us
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-primary-dark">
            Parents Trust Us Because We Deliver Results
          </h2>
          <p className="mt-4 text-lg text-muted">
            We understand the pressure you feel. That&apos;s why we built a process
            that&apos;s transparent, supportive, and focused on your child&apos;s success.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {reasons.map((reason, i) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="flex gap-4 p-6 bg-white rounded-xl border border-slate-100 hover:shadow-md transition-shadow"
            >
              <div className="flex-shrink-0 w-11 h-11 rounded-lg bg-primary-light/10 flex items-center justify-center">
                <reason.icon className="w-5 h-5 text-primary-light" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-primary-dark mb-1">
                  {reason.title}
                </h3>
                <p className="text-muted text-sm leading-relaxed">
                  {reason.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
