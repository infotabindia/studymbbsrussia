"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "What NEET score do I need to study MBBS abroad?",
    answer:
      "You need to qualify NEET with the minimum cutoff score set by NMC (typically 50th percentile for general category). Even students with moderate scores have excellent options in countries like Russia, Kazakhstan, and Uzbekistan.",
  },
  {
    question: "Is the MBBS degree from Russia valid in India?",
    answer:
      "Yes, absolutely. All universities we recommend are approved by NMC (National Medical Commission) and listed by WHO. After returning, you need to clear the FMGE/NExT exam to practice in India.",
  },
  {
    question: "What is the total cost of MBBS in Russia?",
    answer:
      "The total cost for 6 years (including tuition, hostel, and living expenses) typically ranges from ₹20-35 lakhs depending on the university. This is significantly lower than private medical colleges in India.",
  },
  {
    question: "Is it safe for students, especially girls, to study in Russia?",
    answer:
      "Yes. Russian medical universities have dedicated hostels with 24/7 security, Indian wardens, and Indian food options. We also have on-ground representatives who assist students throughout their stay.",
  },
  {
    question: "Do you charge for the initial counselling session?",
    answer:
      "No. Your first counselling session is completely free. We assess your NEET score, understand your preferences, and present the best options — no obligation, no pressure.",
  },
  {
    question: "How do I know which college is right for my child?",
    answer:
      "We consider multiple factors — your NEET rank, budget, preferred location, college infrastructure, pass rates, NMC recognition, and hostel quality. We provide a detailed comparison so you can make an informed decision.",
  },
  {
    question: "What documents are needed for admission abroad?",
    answer:
      "Typically you need: NEET scorecard, 10th & 12th marksheets, passport, passport-size photos, medical fitness certificate, and a birth certificate. We provide a complete checklist and help with every document.",
  },
];

function FAQItem({
  faq,
  isOpen,
  onToggle,
}: {
  faq: (typeof faqs)[0];
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="border border-slate-100 rounded-xl overflow-hidden">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between p-5 sm:p-6 text-left hover:bg-slate-50/50 transition-colors"
      >
        <span className="text-base sm:text-lg font-semibold text-primary-dark pr-4">
          {faq.question}
        </span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
          className="flex-shrink-0"
        >
          <ChevronDown className="w-5 h-5 text-muted" />
        </motion.div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="px-5 sm:px-6 pb-5 sm:pb-6 text-muted leading-relaxed">
              {faq.answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-16 sm:py-24 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <span className="text-primary-light font-semibold text-sm uppercase tracking-wider">
            FAQ
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-primary-dark">
            Questions Parents Ask Us
          </h2>
          <p className="mt-4 text-lg text-muted">
            Honest answers to the questions we hear every day.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="space-y-3"
        >
          {faqs.map((faq, i) => (
            <FAQItem
              key={i}
              faq={faq}
              isOpen={openIndex === i}
              onToggle={() => setOpenIndex(openIndex === i ? null : i)}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
