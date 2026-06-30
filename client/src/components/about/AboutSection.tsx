"use client";

import React from "react";
import { CheckCircle2, Award, Terminal, Users, Sparkles, Check } from "lucide-react";

const techStack = [
  {
    icon: "🍃",
    name: "MongoDB",
    desc: "Learn NoSQL database design, CRUD operations, aggregation framework, and Mongoose ODM for efficient data modeling."
  },
  {
    icon: "ex",
    name: "Express.js",
    desc: "Master backend routing, middleware, RESTful API design, authentication, and error handling with Express."
  },
  {
    icon: "⚛️",
    name: "React.js",
    desc: "Build dynamic user interfaces, manage state with Hooks, implement routing, and interact with backend APIs seamlessly."
  },
  {
    icon: "JS",
    name: "Node.js",
    desc: "Understand server-side JavaScript, event loop, file system operations, streams, and building scalable network applications."
  }
];

const modules = [
  {
    id: "MODULE 01",
    title: "Frontend Fundamentals",
    points: ["HTML5 Semantic Elements", "Advanced CSS3 & Flexbox/Grid", "JavaScript ES6+ Essentials", "DOM Manipulation & Events"]
  },
  {
    id: "MODULE 02",
    title: "React.js Mastery",
    points: ["React Components & Props", "State Management & Hooks", "React Router Navigation", "API Integration & Context"]
  },
  {
    id: "MODULE 03",
    title: "Node.js & Express API",
    points: ["Node.js Core Modules", "Express.js Server Setup", "RESTful API Architecture", "Middleware & Error Handling"]
  },
  {
    id: "MODULE 04",
    title: "MongoDB & Deployment",
    points: ["MongoDB Atlas & Mongoose", "JWT Authentication & Security", "Payment Gateway Integration", "Production Cloud Deployment"]
  }
];

export default function AboutSection() {
  const benefits = [
    "Industry-expert led live mentorship sessions.",
    "Hands-on development with 25+ real-world projects.",
    "Comprehensive curriculum designed for production standards.",
    "Dedicated 24/7 technical doubt-support ecosystem.",
    "Resume building, mock interviews, and placement support."
  ];

  return (
    <section id="about" className="bg-background text-foreground py-24 px-4 sm:px-6 lg:px-8 border-t border-zinc-200 dark:border-zinc-900/60 transition-colors duration-300 space-y-32">
      
      {/* ================= PART 1: CORE ABOUT SUMMARY ================= */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
        {/* Left: Text Content & Benefits */}
        <div className="lg:col-span-7 space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 dark:bg-blue-950/80 border border-blue-200 dark:border-blue-800/40 text-[#25a0e2] text-xs sm:text-sm font-semibold tracking-wide uppercase transition-colors">
            <Sparkles size={14} /> About The Academy
          </div>

          <h2 className="text-3xl sm:text-4xl font-black text-zinc-900 dark:text-white tracking-tight leading-tight transition-colors">
            We Don't Just Teach Code. <br />
            <span className="bg-gradient-to-r from-[#25a0e2] to-[#4f46e5] bg-clip-text text-transparent">
              We Build Tech Careers.
            </span>
          </h2>

          <p className="text-zinc-600 dark:text-zinc-400 text-base sm:text-lg leading-relaxed max-w-2xl transition-colors">
            Beangate IT Solutions is a premium hub crafted to bridge the gap between traditional education and core engineering standards. We focus deeply on data layers, performance optimization, architectures, and full autonomy over JavaScript systems.
          </p>

          <div className="space-y-3 pt-2">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start gap-3 group">
                <div className="text-emerald-500 mt-1 flex-shrink-0 group-hover:scale-110 transition-transform">
                  <CheckCircle2 size={18} className="fill-emerald-500/10" />
                </div>
                <p className="text-zinc-700 dark:text-zinc-300 text-sm sm:text-base transition-colors">
                  {benefit}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Feature Stats Matrix */}
        <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-6 relative">
          <div className="p-6 rounded-2xl bg-zinc-50 dark:bg-[#0b1524]/60 border border-zinc-200 dark:border-zinc-800/60 shadow-sm transition-all duration-300 hover:-translate-y-1">
            <div className="w-12 h-12 rounded-xl bg-[#25a0e2]/10 flex items-center justify-center text-[#25a0e2] mb-4">
              <Award size={22} />
            </div>
            <h3 className="text-2xl font-black text-zinc-900 dark:text-white">5+ Years</h3>
            <p className="text-xs sm:text-sm text-zinc-500 dark:text-zinc-400 mt-1">Specialized software pedigree.</p>
          </div>

          <div className="p-6 rounded-2xl bg-zinc-50 dark:bg-[#0b1524]/60 border border-zinc-200 dark:border-zinc-800/60 shadow-sm transition-all duration-300 hover:-translate-y-1 sm:mt-8">
            <div className="w-12 h-12 rounded-xl bg-purple-500/10 flex items-center justify-center text-purple-500 mb-4">
              <Terminal size={22} />
            </div>
            <h3 className="text-2xl font-black text-zinc-900 dark:text-white">100k+ Lines</h3>
            <p className="text-xs sm:text-sm text-zinc-500 dark:text-zinc-400 mt-1">Code reviewed and optimized.</p>
          </div>

          <div className="p-6 rounded-2xl bg-zinc-50 dark:bg-[#0b1524]/60 border border-zinc-200 dark:border-zinc-800/60 shadow-sm transition-all duration-300 hover:-translate-y-1">
            <div className="w-12 h-12 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-500 mb-4">
              <Users size={22} />
            </div>
            <h3 className="text-2xl font-black text-zinc-900 dark:text-white">Active Hub</h3>
            <p className="text-xs sm:text-sm text-zinc-500 dark:text-zinc-400 mt-1">Connect with developers globally.</p>
          </div>

          <div className="p-6 rounded-2xl bg-zinc-50 dark:bg-[#0b1524]/60 border border-zinc-200 dark:border-zinc-800/60 shadow-sm transition-all duration-300 hover:-translate-y-1 sm:mt-8">
            <div className="w-12 h-12 rounded-xl bg-amber-500/10 flex items-center justify-center text-amber-500 mb-4">
              <span className="font-mono font-bold text-lg">📁</span>
            </div>
            <h3 className="text-2xl font-black text-zinc-900 dark:text-white">Enterprise</h3>
            <p className="text-xs sm:text-sm text-zinc-500 dark:text-zinc-400 mt-1">Industrial grade SaaS architecture.</p>
          </div>
        </div>
      </div>

      {/* ================= PART 2: TECHNOLOGY STACK ================= */}
      <div className="max-w-7xl mx-auto text-center space-y-12">
        <div className="space-y-3">
          <span className="inline-block px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-950/50 border border-blue-200 dark:border-blue-900/40 text-[11px] font-bold text-sky-500 uppercase tracking-widest">
            🔹 The Technology Stack
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-zinc-900 dark:text-white tracking-tight">
            Master the <span className="bg-gradient-to-r from-[#25a0e2] to-[#4f46e5] bg-clip-text text-transparent">Full Stack</span>
          </h2>
          <p className="text-zinc-500 dark:text-zinc-400 text-sm max-w-2xl mx-auto leading-relaxed">
            Go deep into every layer of the MERN stack. From NoSQL databases to pixel-perfect UIs — you'll build it all from scratch.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
          {techStack.map((tech, index) => (
            <div key={index} className="p-8 rounded-2xl bg-zinc-50 dark:bg-[#0b1524]/40 border border-zinc-200 dark:border-zinc-800/60 shadow-sm hover:-translate-y-1 transition-all duration-300 group">
              <div className="w-12 h-12 rounded-xl bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 flex items-center justify-center font-mono font-bold text-lg text-zinc-700 dark:text-[#25a0e2] mb-6">
                {tech.icon}
              </div>
              <h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-2">{tech.name}</h3>
              <p className="text-zinc-500 dark:text-zinc-400 text-xs sm:text-sm leading-relaxed">{tech.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ================= PART 3: CURRICULUM ROADMAP ================= */}
      <div id="curriculum" className="max-w-5xl mx-auto space-y-16 scroll-mt-24">
        <div className="text-center space-y-3">
          <span className="inline-block px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-950/50 border border-blue-200 dark:border-blue-900/40 text-[11px] font-bold text-[#4f46e5] dark:text-sky-400 uppercase tracking-widest">
            📍 Learning Roadmap
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-zinc-900 dark:text-white tracking-tight">
            Your <span className="bg-gradient-to-r from-[#25a0e2] via-[#4f46e5] to-purple-500 bg-clip-text text-transparent">Step-by-Step</span> Journey
          </h2>
          <p className="text-zinc-500 dark:text-zinc-400 text-sm max-w-xl mx-auto leading-relaxed">
            A carefully structured curriculum that takes you from absolute beginner to a job-ready full-stack developer.
          </p>
        </div>

        <div className="relative pt-8">
          {/* Central Line */}
          <div className="absolute left-4 lg:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-indigo-500 to-purple-600 rounded-full" />

          <div className="space-y-12">
            {modules.map((mod, index) => {
              const isEven = index % 2 === 0;
              return (
                <div key={index} className={`relative flex flex-col lg:flex-row items-start ${isEven ? "lg:justify-start" : "lg:justify-end"}`}>
                  {/* Indicator Dot */}
                  <div className="absolute left-4 lg:left-1/2 -translate-x-[7px] lg:-translate-x-1/2 top-6 w-4 h-4 rounded-full bg-background border-4 border-blue-500 z-20 shadow-sm" />

                  {/* Card Panel */}
                  <div className={`w-full lg:w-[calc(50%-32px)] pl-10 lg:pl-0 ${isEven ? "lg:pr-8" : "lg:pl-8"}`}>
                    <div className="p-6 sm:p-8 rounded-2xl bg-zinc-50 dark:bg-[#0b1524]/50 border border-zinc-200 dark:border-zinc-800/80 shadow-sm hover:border-blue-500/30 dark:hover:border-sky-500/30 transition-all duration-300">
                      <span className="text-xs font-bold text-blue-600 dark:text-sky-400 tracking-wider font-mono block mb-1">{mod.id}</span>
                      <h3 className="text-xl font-extrabold text-zinc-900 dark:text-white mb-4 tracking-tight">{mod.title}</h3>
                      <ul className="space-y-3">
                        {mod.points.map((pt, pIdx) => (
                          <li key={pIdx} className="flex items-center gap-3 text-zinc-600 dark:text-zinc-300 text-sm">
                            <div className="w-5 h-5 rounded-full bg-emerald-500/10 text-emerald-500 flex items-center justify-center flex-shrink-0">
                              <Check size={12} strokeWidth={3} />
                            </div>
                            <span className="truncate">{pt}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

    </section>
  );
}