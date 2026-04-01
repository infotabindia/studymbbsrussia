"use client";

import { motion } from "framer-motion";
import {
  GraduationCap,
  Globe,
  ClipboardList,
  HeadphonesIcon,
  FileCheck,
  Plane,
} from "lucide-react";

const services = [
  {
    icon: GraduationCap,
    title: "NEET UG Counselling",
    description:
      "Rank-based college prediction, state & all-India quota guidance, and step-by-step counselling support for NEET UG aspirants.",
  },
  {
    icon: ClipboardList,
    title: "NEET PG Guidance",
    description:
      "Specialization selection, college shortlisting, and seat allotment strategy for postgraduate medical admissions.",
  },
  {
    icon: Globe,
    title: "MBBS Abroad",
    description:
      "Admission assistance for top NMC-approved universities in Russia, Kazakhstan, Philippines, Uzbekistan, and more.",
  },
  {
    icon: HeadphonesIcon,
    title: "1-on-1 Counselling",
    description:
      "Personalized sessions with experienced counsellors who understand your score, budget, and career goals.",
  },
  {
    icon: FileCheck,
    title: "College Selection",
    description:
      "Data-driven college comparison based on fees, placements, NMC recognition, hostel facilities, and pass rates.",
  },
  {
    icon: Plane,
    title: "Visa & Travel Support",
    description:
      "Complete assistance with documentation, visa processing, travel arrangements, and pre-departure orientation.",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function Services() {
  return (
    <section id="services" className="py-16 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-12 sm:mb-16"
        >
          <span className="text-primary-light font-semibold text-sm uppercase tracking-wider">
            Our Services
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-primary-dark">
            Everything You Need for Medical Admission Success
          </h2>
          <p className="mt-4 text-lg text-muted">
            From NEET score analysis to final college admission — we guide you
            through every step so you never feel lost.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
        >
          {services.map((service) => (
            <motion.div
              key={service.title}
              variants={cardVariants}
              whileHover={{ y: -5 }}
              className="group p-6 sm:p-8 rounded-xl border border-slate-100 hover:border-primary-light/30 hover:shadow-lg hover:shadow-primary-light/5 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-lg bg-primary-light/10 flex items-center justify-center mb-5 group-hover:bg-primary-light/20 transition-colors">
                <service.icon className="w-6 h-6 text-primary-light" />
              </div>
              <h3 className="text-xl font-bold text-primary-dark mb-3">
                {service.title}
              </h3>
              <p className="text-muted leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
