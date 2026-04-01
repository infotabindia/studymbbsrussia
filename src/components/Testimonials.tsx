"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Dr. Priya Sharma",
    role: "MBBS Graduate, Russia",
    quote:
      "I was confused after NEET results. StudyMBBS Russia helped me choose the right university in Russia. Today I'm a practicing doctor. Their guidance was life-changing.",
    rating: 5,
  },
  {
    name: "Rajesh Kumar",
    role: "Parent, Bihar",
    quote:
      "As a parent, I was worried about sending my daughter abroad. The team handled everything — from documentation to settling her in at the university. We felt supported throughout.",
    rating: 5,
  },
  {
    name: "Ananya Patel",
    role: "NEET 2024 Aspirant",
    quote:
      "The counselling session was so helpful. They explained every option clearly — India, abroad, fees, everything. I finally made an informed decision without panic.",
    rating: 5,
  },
  {
    name: "Mohammed Irfan",
    role: "Parent, Hyderabad",
    quote:
      "Transparent, honest, and genuinely helpful. Unlike other agents, they didn't push any college. They helped us find the best fit for my son's score and our budget.",
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-16 sm:py-24 bg-section-alt">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-12 sm:mb-16"
        >
          <span className="text-primary-light font-semibold text-sm uppercase tracking-wider">
            Success Stories
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-primary-dark">
            Families Who Trusted Us — And Succeeded
          </h2>
          <p className="mt-4 text-lg text-muted">
            Don&apos;t just take our word for it. Hear from parents and students who
            made the right decision.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-6 sm:gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="bg-white rounded-xl p-6 sm:p-8 border border-slate-100 hover:shadow-md transition-shadow"
            >
              <Quote className="w-8 h-8 text-primary-light/20 mb-4" />
              <p className="text-primary-dark leading-relaxed mb-6">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-bold text-primary-dark">{t.name}</div>
                  <div className="text-sm text-muted">{t.role}</div>
                </div>
                <div className="flex gap-0.5">
                  {Array.from({ length: t.rating }).map((_, s) => (
                    <Star
                      key={s}
                      className="w-4 h-4 fill-amber-400 text-amber-400"
                    />
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
