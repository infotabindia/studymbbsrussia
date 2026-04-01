"use client";

import { GraduationCap } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-primary-dark text-blue-200 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <GraduationCap className="w-7 h-7 text-accent-light" />
              <span className="text-lg font-bold text-white">
                Study<span className="text-accent-light">MBBS</span>Russia
              </span>
            </div>
            <p className="text-sm leading-relaxed">
              Trusted medical education consultants helping NEET aspirants and
              families make the right college decision — in India and abroad.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#services" className="hover:text-white transition-colors">Our Services</a></li>
              <li><a href="#why-us" className="hover:text-white transition-colors">Why Choose Us</a></li>
              <li><a href="#testimonials" className="hover:text-white transition-colors">Success Stories</a></li>
              <li><a href="#faq" className="hover:text-white transition-colors">FAQ</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Contact Us</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-sm">
              <li>NEET UG Counselling</li>
              <li>NEET PG Guidance</li>
              <li>MBBS in Russia</li>
              <li>MBBS Abroad</li>
              <li>Visa & Travel Support</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-sm">
              <li>+91 93158 78181</li>
              <li>info@studymbbsrussia.com</li>
              <li>Mon-Sat: 9 AM - 7 PM IST</li>
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-8 border-t border-white/10 text-center text-sm text-blue-300/60">
          &copy; {new Date().getFullYear()} StudyMBBSRussia. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
