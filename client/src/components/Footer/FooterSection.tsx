"use client";

import React from "react";
import { Phone, Mail, MapPin, Globe,   ArrowUp, MessageSquare } from "lucide-react";

export default function Footer() {
  
  // Smooth scroll handle back to absolute top view layer
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="bg-zinc-50 dark:bg-[#060d18] text-foreground border-t border-zinc-200 dark:border-zinc-900/80 pt-16 pb-8 px-4 sm:px-6 lg:px-8 transition-colors duration-300 relative">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 sm:gap-8 pb-12 border-b border-zinc-200 dark:border-zinc-900">
        
        {/* /* ================= COLUMN 1: CONTACT DATA METADATA ================= */ }
        <div className="space-y-4">
          <h4 className="text-xs sm:text-sm font-black uppercase tracking-widest text-[#25a0e2]">
            Contact
          </h4>
          <ul className="space-y-3 text-xs sm:text-sm text-zinc-500 dark:text-zinc-400 font-medium">
            <li className="flex items-center gap-3">
              <Phone size={14} className="text-blue-500 flex-shrink-0" />
              <span>9752740090, 7471112020</span>
            </li>
            <li className="flex items-center gap-3">
              <Mail size={14} className="text-blue-500 flex-shrink-0" />
              <a href="mailto:beangateitsolutions@gmail.com" className="hover:text-blue-500 transition-colors">
                beangateitsolutions@gmail.com
              </a>
            </li>
            <li className="flex items-start gap-3">
              <MapPin size={14} className="text-blue-500 mt-0.5 flex-shrink-0" />
              <span className="leading-relaxed">
                Flat No. A-4/501, Kokta Transport Nagar,<br />Bhopal (M.P.) – 462022
              </span>
            </li>
            <li className="flex items-center gap-3">
              <Globe size={14} className="text-blue-500 flex-shrink-0" />
              <a href="https://beangates.com/" target="_blank" rel="noreferrer" className="hover:text-blue-500 transition-colors font-mono text-[13px]">
                https://beangates.com/
              </a>
            </li>
          </ul>
        </div>

        {/* ================= COLUMN 2: USEFUL QUICK NAVIGATION LINKS ================= */}
        <div className="space-y-4">
          <h4 className="text-xs sm:text-sm font-black uppercase tracking-widest text-[#25a0e2]">
            Useful Links
          </h4>
          <ul className="space-y-2.5 text-xs sm:text-sm text-zinc-500 dark:text-zinc-400 font-bold">
            <li>
              <a href="#about" className="hover:text-blue-500 transition-colors">About Course</a>
            </li>
            <li>
              <a href="#curriculum" className="hover:text-blue-500 transition-colors">Curriculum</a>
            </li>
            <li>
              <a href="#features" className="hover:text-blue-500 transition-colors">Projects</a>
            </li>
            <li>
              <a href="#contact" className="hover:text-blue-500 transition-colors">FAQ</a>
            </li>
            <li>
              <a href="#application-form" className="hover:text-blue-500 transition-colors">Register Now</a>
            </li>
          </ul>
        </div>

        {/* ================= COLUMN 3: BRAND PROFILE DESCRIPTIVE INFO & SOCIALS ================= */}
        <div className="space-y-5">
          <h4 className="text-xs sm:text-sm font-black uppercase tracking-widest text-[#25a0e2]">
           Beangate IT Solutions
          </h4>
          <p className="text-xs sm:text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed font-medium">
           Beangate IT Solutions provides industry-focused training in MongoDB, Express.js, React.js and Node.js. Learn through real-world projects, expert mentorship, interview preparation, and placement assistance to become a professional Full Stack Developer.
          </p>
          
          {/* Action Row Platforms Circles Grid matching colors from image */}
          <div className="flex items-center gap-3 pt-2">
            <a 
              href="https://wa.me/919752740090" 
              target="_blank" 
              rel="noreferrer"
              className="w-8 h-8 rounded-full bg-emerald-500 text-white flex items-center justify-center shadow hover:scale-105 transition-transform"
            >
              <MessageSquare size={14} fill="currentColor" />
            </a>
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noreferrer"
              className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center shadow hover:scale-105 transition-transform"
            >
              {/* <Linkedin size={14} fill="currentColor" /> */}
              <svg 
  className="w-5 h-5 text-zinc-600 dark:text-zinc-400 hover:text-[#25a0e2] transition-colors cursor-pointer" 
  viewBox="0 0 24 24" 
  fill="none" 
  stroke="currentColor" 
  strokeWidth="2" 
  strokeLinecap="round" 
  strokeLinejoin="round"
>
  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
  <rect width="4" height="12" x="2" y="9" />
  <circle cx="4" cy="4" r="2" />
</svg>
            </a>
            <a 
              href="https://github.com" 
              target="_blank" 
              rel="noreferrer"
              className="w-8 h-8 rounded-full bg-zinc-800 dark:bg-zinc-900 text-white flex items-center justify-center border border-zinc-700/50 shadow hover:scale-105 transition-transform"
            >
              {/* <GitHub size={14} /> */}
              <svg 
  className="w-5 h-5 text-zinc-600 dark:text-zinc-400 hover:text-[#25a0e2] transition-colors cursor-pointer" 
  viewBox="0 0 24 24" 
  fill="none" 
  stroke="currentColor" 
  strokeWidth="2" 
  strokeLinecap="round" 
  strokeLinejoin="round"
>
  <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
  <path d="M9 18c-4.51 2-5-2-7-2" />
</svg>
            </a>
          </div>
        </div>

      </div>

      {/* ================= LOWER LAYER SUB-BAR PANELS ================= */}
      <div className="max-w-7xl mx-auto pt-8 flex flex-col sm:flex-row items-center justify-between text-[11px] font-semibold text-zinc-400 dark:text-zinc-500 gap-4">
        <p>© 2026  Beangate IT Solutions. All Rights Reserved.</p>
        
        {/* Floating Action Scroll Navigation Tracker */}
        <button 
          onClick={scrollToTop}
          className="w-9 h-9 rounded-xl bg-blue-500 hover:bg-blue-600 text-white flex items-center justify-center shadow-md transition-all active:scale-95 fixed bottom-6 right-6 sm:right-8 z-50 group border border-blue-400/20"
          aria-label="Scroll to top"
        >
          <ArrowUp size={16} className="group-hover:-translate-y-0.5 transition-transform" />
        </button>
      </div>
    </footer>
  );
}