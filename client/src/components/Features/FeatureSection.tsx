// "use client";

// import React from "react";
// import { Video, Code2, FileSpreadsheet, Award, Briefcase, Infinity, Users2, BookOpen, ArrowUpRight } from "lucide-react";

// const inclusions = [
//   { icon: <Video size={24} />, title: "Live Classes", desc: "Interactive sessions with real-time doubt clearing." },
//   { icon: <Code2 size={24} />, title: "10+ Projects", desc: "Build real-world applications for your portfolio." },
//   { icon: <FileSpreadsheet size={24} />, title: "Assignments", desc: "Regular coding challenges to test your skills." },
//   { icon: <Award size={24} />, title: "Certificate", desc: "Industry-recognized completion certificate." },
//   { icon: <Briefcase size={24} />, title: "Placement Aid", desc: "Resume building and dedicated placement support." },
//   { icon: <Infinity size={24} />, title: "Lifetime Access", desc: "Get updates and access to materials forever." },
//   { icon: <Users2 size={24} />, title: "Mock Interviews", desc: "Practice with industry experts to crack interviews." },
//   { icon: <BookOpen size={24} />, title: "Study Material", desc: "Comprehensive notes and source code provided." }
// ];

// const projects = [
//   {
//     title: "E-Commerce Platform",
//     tech: "MERN, Redux, Stripe",
//     badge: "Advanced",
//     image: "https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&w=600&q=80"
//   },
//   {
//     title: "Hospital Management",
//     tech: "React, Node, Socket.io",
//     badge: "Advanced",
//     image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=600&q=80"
//   },
//   {
//     title: "Chat Application",
//     tech: "MERN, WebRTC, Socket",
//     badge: "Intermediate",
//     image: "https://images.unsplash.com/photo-1611605698335-8b15d27e03f4?auto=format&fit=crop&w=600&q=80"
//   },
//   {
//     title: "Food Delivery App",
//     tech: "React, Express, MongoDB",
//     badge: "Intermediate",
//     image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=600&q=80"
//   },
//   {
//     title: "Portfolio Website",
//     tech: "React, Tailwind, Framer",
//     badge: "Beginner",
//     image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=600&q=80"
//   },
//   {
//     title: "Admin Dashboard",
//     tech: "MERN, Chart.js, JWT",
//     badge: "Advanced",
//     image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=600&q=80"
//   }
// ];

// export default function FeaturesSection() {
//   return (
//     <section id="features" className="bg-background text-foreground py-24 px-4 sm:px-6 lg:px-8 border-t border-zinc-200 dark:border-zinc-900/60 transition-colors duration-300 space-y-32">
      
//       {/* ================= PART 1: EVERYTHING YOU NEED TO SUCCEED ================= */}
//       <div className="max-w-7xl mx-auto space-y-16 text-center">
//         <div className="space-y-3">
//           <span className="inline-block px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-950/50 border border-blue-200 dark:border-blue-900/40 text-[11px] font-bold text-sky-500 uppercase tracking-widest">
//             🔹 What's Included
//           </span>
//           <h2 className="text-3xl sm:text-5xl font-black text-zinc-900 dark:text-white tracking-tight">
//             Everything You Need to <span className="bg-gradient-to-r from-[#25a0e2] to-[#4f46e5] bg-clip-text text-transparent">Succeed</span>
//           </h2>
//           <p className="text-zinc-500 dark:text-zinc-400 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
//             We've packed every resource, tool, and support system you need to go from curious learner to confident full-stack developer — and land your first job.
//           </p>
//         </div>

//         {/* Inclusions 8-Grid Setup */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12 max-w-6xl mx-auto">
//           {inclusions.map((item, index) => (
//             <div key={index} className="flex flex-col items-center text-center space-y-3 group">
//               {/* Blue Circular Icon Frame */}
//               <div className="w-12 h-12 rounded-full bg-blue-500/10 dark:bg-blue-500/5 text-blue-500 flex items-center justify-center transition-transform duration-300 group-hover:scale-110 shadow-sm">
//                 {item.icon}
//               </div>
//               <h3 className="text-lg font-bold text-zinc-900 dark:text-zinc-200 transition-colors">
//                 {item.title}
//               </h3>
//               <p className="text-zinc-500 dark:text-zinc-400 text-xs sm:text-sm leading-relaxed max-w-[240px] transition-colors">
//                 {item.desc}
//               </p>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* ================= PART 2: REAL-WORLD PROJECTS YOU'LL BUILD ================= */}
//       <div className="max-w-7xl mx-auto space-y-16 text-center">
//         <div className="space-y-3">
//           <span className="inline-block px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-950/50 border border-blue-200 dark:border-blue-900/40 text-[11px] font-bold text-sky-500 uppercase tracking-widest">
//             🔹 Hands-On Portfolio
//           </span>
//           <h2 className="text-3xl sm:text-5xl font-black text-zinc-900 dark:text-white tracking-tight">
//             Real-World <span className="text-[#25a0e2]">Projects</span> You'll Build
//           </h2>
//           <p className="text-zinc-500 dark:text-zinc-400 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
//             Don't just learn theory — ship production-ready applications. Each project is designed to land in your portfolio and impress recruiters.
//           </p>
//         </div>

//         {/* Project Image Cards Grid */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {projects.map((proj, index) => (
//             <div 
//               key={index} 
//               className="group relative overflow-hidden rounded-2xl bg-zinc-50 dark:bg-[#0b1524]/40 border border-zinc-200 dark:border-zinc-800/60 p-4 shadow-sm transition-all duration-300 hover:-translate-y-1 text-left"
//             >
//               {/* Image Frame Wrapper with Absolute Badge */}
//               <div className="relative aspect-[16/10] overflow-hidden rounded-xl bg-zinc-200 dark:bg-zinc-900">
//                 <img 
//                   src={proj.image} 
//                   alt={proj.title}
//                   className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
//                 />
//                 <span className="absolute top-3 right-3 px-2.5 py-1 text-[10px] font-bold bg-black/70 text-white backdrop-blur-sm rounded-md uppercase tracking-wider">
//                   {proj.badge}
//                 </span>
//               </div>

//               {/* Text Info */}
//               <div className="pt-5 pb-2 space-y-2">
//                 <h3 className="text-xl font-bold text-zinc-900 dark:text-white group-hover:text-[#25a0e2] transition-colors">
//                   {proj.title}
//                 </h3>
//                 <p className="text-xs font-semibold text-blue-600 dark:text-sky-400 font-mono">
//                   {proj.tech}
//                 </p>
                
//                 {/* View Details External Trigger Mockup */}
//                 <div className="pt-2 flex items-center gap-1 text-xs font-bold text-zinc-400 group-hover:text-zinc-600 dark:group-hover:text-zinc-300 transition-colors cursor-pointer">
//                   <span>View Details</span>
//                   <ArrowUpRight size={14} />
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Bottom Horizontal Analytics Matrix Box */}
//         <div className="mt-16 p-8 sm:p-12 rounded-3xl bg-zinc-50 dark:bg-[#060d18] border border-zinc-200 dark:border-zinc-900 grid grid-cols-2 lg:grid-cols-4 gap-8 text-center shadow-inner transition-colors">
//           <div>
//             <p className="text-3xl sm:text-5xl font-black text-zinc-900 dark:text-white tracking-tight">5000+</p>
//             <p className="text-[10px] sm:text-xs font-bold text-blue-600 dark:text-sky-400 uppercase tracking-widest mt-2">Students</p>
//           </div>
//           <div>
//             <p className="text-3xl sm:text-5xl font-black text-zinc-900 dark:text-white tracking-tight">100+</p>
//             <p className="text-[10px] sm:text-xs font-bold text-blue-600 dark:text-sky-400 uppercase tracking-widest mt-2">Projects</p>
//           </div>
//           <div>
//             <p className="text-3xl sm:text-5xl font-black text-zinc-900 dark:text-white tracking-tight">25+</p>
//             <p className="text-[10px] sm:text-xs font-bold text-blue-600 dark:text-sky-400 uppercase tracking-widest mt-2">Mentors</p>
//           </div>
//           <div>
//             <p className="text-3xl sm:text-5xl font-black text-zinc-900 dark:text-white tracking-tight">95%</p>
//             <p className="text-[10px] sm:text-xs font-bold text-blue-600 dark:text-sky-400 uppercase tracking-widest mt-2">Placement Support</p>
//           </div>
//         </div>

//       </div>

//     </section>
//   );
// }



// "use client";

// import React from "react";
// import { Video, Code2, FileSpreadsheet, Award, Briefcase, Infinity, Users2, BookOpen, ArrowUpRight } from "lucide-react";

// const inclusions = [
//   { icon: <Video size={22} />, title: "Live Classes", desc: "Interactive sessions with real-time doubt clearing." },
//   { icon: <Code2 size={22} />, title: "10+ Projects", desc: "Build real-world applications for your portfolio." },
//   { icon: <FileSpreadsheet size={22} />, title: "Assignments", desc: "Regular coding challenges to test your skills." },
//   { icon: <Award size={22} />, title: "Certificate", desc: "Industry-recognized completion certificate." },
//   { icon: <Briefcase size={22} />, title: "Placement Aid", desc: "Resume building and dedicated placement support." },
//   { icon: <Infinity size={22} />, title: "Lifetime Access", desc: "Get updates and access to materials forever." },
//   { icon: <Users2 size={22} />, title: "Mock Interviews", desc: "Practice with industry experts to crack interviews." },
//   { icon: <BookOpen size={22} />, title: "Study Material", desc: "Comprehensive notes and source code provided." }
// ];

// const projects = [
//   {
//     title: "E-Commerce Platform",
//     tech: "MERN, Redux, Stripe",
//     badge: "Advanced",
//     image: "https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&w=600&q=80"
//   },
//   {
//     title: "Hospital Management",
//     tech: "React, Node, Socket.io",
//     badge: "Advanced",
//     image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=600&q=80"
//   },
//   {
//     title: "Chat Application",
//     tech: "MERN, WebRTC, Socket",
//     badge: "Intermediate",
//     image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?q=80&w=800&auto=format&fit=crop"
//   },
//   {
//     title: "Food Delivery App",
//     tech: "React, Express, MongoDB",
//     badge: "Intermediate",
//     image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=600&q=80"
//   },
//   {
//     title: "Portfolio Website",
//     tech: "React, Tailwind, Framer",
//     badge: "Beginner",
//     image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=600&q=80"
//   },
//   {
//     title: "Admin Dashboard",
//     tech: "MERN, Chart.js, JWT",
//     badge: "Advanced",
//     image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=600&q=80"
//   }
// ];

// export default function FeaturesSection() {
//   return (
//     <section id="features" className="bg-background text-foreground py-24 px-4 sm:px-6 lg:px-8 border-t border-zinc-200 dark:border-zinc-900/60 transition-colors duration-300 space-y-32">
      
//       {/* ================= PART 1: EVERYTHING YOU NEED TO SUCCEED ================= */}
//       <div className="max-w-7xl mx-auto space-y-16 text-center">
//         <div className="space-y-3">
//           <span className="inline-block px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-950/50 border border-blue-200 dark:border-blue-900/40 text-[11px] font-bold text-sky-500 uppercase tracking-widest">
//             🔹 What's Included
//           </span>
//           <h2 className="text-3xl sm:text-5xl font-black text-zinc-900 dark:text-white tracking-tight">
//             Everything You Need to <span className="bg-gradient-to-r from-[#25a0e2] to-[#4f46e5] bg-clip-text text-transparent">Succeed</span>
//           </h2>
//           <p className="text-zinc-500 dark:text-zinc-400 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
//             We've packed every resource, tool, and support system you need to go from curious learner to confident full-stack developer.
//           </p>
//         </div>

//         {/* FIXED: Added Border and Proper Background Card Layout to Inclusions */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
//           {inclusions.map((item, index) => (
//             <div 
//               key={index} 
//               className="flex flex-col items-center text-center p-6 rounded-2xl bg-zinc-50/50 dark:bg-[#0b1524]/30 border border-zinc-200/80 dark:border-zinc-800/60 shadow-sm transition-all duration-300 hover:-translate-y-1 group"
//             >
//               <div className="w-12 h-12 rounded-full bg-blue-500/10 text-blue-500 flex items-center justify-center transition-transform duration-300 group-hover:scale-110 mb-4">
//                 {item.icon}
//               </div>
//               <h3 className="text-base font-bold text-zinc-900 dark:text-zinc-200">
//                 {item.title}
//               </h3>
//               <p className="text-zinc-500 dark:text-zinc-400 text-xs mt-2 leading-relaxed">
//                 {item.desc}
//               </p>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* ================= PART 2: REAL-WORLD PROJECTS YOU'LL BUILD ================= */}
//       <div className="max-w-7xl mx-auto space-y-16 text-center">
//         <div className="space-y-3">
//           <span className="inline-block px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-950/50 border border-blue-200 dark:border-blue-900/40 text-[11px] font-bold text-sky-500 uppercase tracking-widest">
//             🔹 Hands-On Portfolio
//           </span>
//           <h2 className="text-3xl sm:text-5xl font-black text-zinc-900 dark:text-white tracking-tight">
//             Real-World <span className="text-[#25a0e2]">Projects</span> You'll Build
//           </h2>
//           <p className="text-zinc-500 dark:text-zinc-400 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
//             Don't just learn theory — ship production-ready applications.
//           </p>
//         </div>

//         {/* FIXED: Made Project Cards Smaller (max-w-[350px]) and Perfectly Center Aligned */}
//         <div className="flex flex-wrap justify-center gap-8 max-w-6xl mx-auto">
//           {projects.map((proj, index) => (
//             <div 
//               key={index} 
//               className="group relative overflow-hidden rounded-2xl bg-zinc-50 dark:bg-[#0b1524]/40 border border-zinc-200 dark:border-zinc-800/60 p-4 shadow-sm transition-all duration-300 hover:-translate-y-1 text-left w-full sm:w-[calc(50%-16px)] lg:w-[calc(33.333%-22px)] max-w-[350px]"
//             >
//               <div className="relative aspect-[16/11] overflow-hidden rounded-xl bg-zinc-200 dark:bg-zinc-900">
//                 <img 
//                   src={proj.image} 
//                   alt={proj.title}
//                   className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
//                 />
//                 <span className="absolute top-3 right-3 px-2 py-0.5 text-[9px] font-bold bg-black/70 text-white backdrop-blur-sm rounded-md uppercase tracking-wider">
//                   {proj.badge}
//                 </span>
//               </div>

//               <div className="pt-4 pb-1 space-y-1.5">
//                 <h3 className="text-lg font-bold text-zinc-900 dark:text-white group-hover:text-[#25a0e2] transition-colors line-clamp-1">
//                   {proj.title}
//                 </h3>
//                 <p className="text-[11px] font-semibold text-blue-600 dark:text-sky-400 font-mono">
//                   {proj.tech}
//                 </p>
                
//                 <div className="pt-2 flex items-center gap-1 text-[11px] font-bold text-zinc-400 group-hover:text-zinc-600 dark:group-hover:text-zinc-300 transition-colors cursor-pointer">
//                   <span>View Details</span>
//                   <ArrowUpRight size={12} />
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Bottom Horizontal Analytics Matrix Box */}
//         <div className="mt-16 p-8 sm:p-12 rounded-3xl bg-zinc-50 dark:bg-[#060d18] border border-zinc-200 dark:border-zinc-900 grid grid-cols-2 lg:grid-cols-4 gap-8 text-center shadow-inner transition-colors">
//           <div>
//             <p className="text-3xl sm:text-5xl font-black text-zinc-900 dark:text-white tracking-tight">5000+</p>
//             <p className="text-[10px] sm:text-xs font-bold text-blue-600 dark:text-sky-400 uppercase tracking-widest mt-2">Students</p>
//           </div>
//           <div>
//             <p className="text-3xl sm:text-5xl font-black text-zinc-900 dark:text-white tracking-tight">100+</p>
//             <p className="text-[10px] sm:text-xs font-bold text-blue-600 dark:text-sky-400 uppercase tracking-widest mt-2">Projects</p>
//           </div>
//           <div>
//             <p className="text-3xl sm:text-5xl font-black text-zinc-900 dark:text-white tracking-tight">25+</p>
//             <p className="text-[10px] sm:text-xs font-bold text-blue-600 dark:text-sky-400 uppercase tracking-widest mt-2">Mentors</p>
//           </div>
//           <div>
//             <p className="text-3xl sm:text-5xl font-black text-zinc-900 dark:text-white tracking-tight">95%</p>
//             <p className="text-[10px] sm:text-xs font-bold text-blue-600 dark:text-sky-400 uppercase tracking-widest mt-2">Placement Support</p>
//           </div>
//         </div>

//       </div>

//     </section>
//   );
// }



"use client";

import React, { useState } from "react";
import { Video, Code2, FileSpreadsheet, Award, Briefcase, Infinity, Users2, BookOpen, ArrowUpRight, X } from "lucide-react";

const inclusions = [
  { icon: <Video size={22} />, title: "Live Classes", desc: "Interactive sessions with real-time doubt clearing." },
  { icon: <Code2 size={22} />, title: "10+ Projects", desc: "Build real-world applications for your portfolio." },
  { icon: <FileSpreadsheet size={22} />, title: "Assignments", desc: "Regular coding challenges to test your skills." },
  { icon: <Award size={22} />, title: "Certificate", desc: "Industry-recognized completion certificate." },
  { icon: <Briefcase size={22} />, title: "Placement Aid", desc: "Resume building and dedicated placement support." },
  { icon: <Infinity size={22} />, title: "Lifetime Access", desc: "Get updates and access to materials forever." },
  { icon: <Users2 size={22} />, title: "Mock Interviews", desc: "Practice with industry experts to crack interviews." },
  { icon: <BookOpen size={22} />, title: "Study Material", desc: "Comprehensive notes and source code provided." }
];

const projects = [
  {
    title: "E-Commerce Platform",
    tech: "MERN, Redux, Stripe",
    badge: "Advanced",
    image: "https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&w=600&q=80",
    desc: "A comprehensive full-stack application built during the course.",
    learningOutcome: "Master data modeling, state management, and API integrations by building this project from scratch."
  },
  {
    title: "Hospital Management",
    tech: "React, Node, Socket.io",
    badge: "Advanced",
    image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=600&q=80",
    desc: "Advanced healthcare resource management matrix with live booking engines.",
    learningOutcome: "Understand complex database architecture, real-time sync systems, and secure hospital dashboard management."
  },
  {
    title: "Chat Application",
    tech: "MERN, WebRTC, Socket",
    badge: "Intermediate",
    image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?q=80&w=800&auto=format&fit=crop",
    desc: "Instant messaging engine built with persistent channels and low-latency audio pipelines.",
    learningOutcome: "Implement customized full-scale data streams, peer-to-peer routing channels, and modern authorization gates."
  },
  {
    title: "Food Delivery App",
    tech: "React, Express, MongoDB",
    badge: "Intermediate",
    image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=600&q=80",
    desc: "Hyperlocal restaurant tracking platform with geo-fencing sorting layers.",
    learningOutcome: "Master map API coordinates binding, fast session cart management, and state pipeline updates."
  },
  {
    title: "Portfolio Website",
    tech: "React, Tailwind, Framer",
    badge: "Beginner",
    image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=600&q=80",
    desc: "Highly-responsive high-fidelity canvas optimized for showcasing digital engineering products.",
    learningOutcome: "Implement modern custom CSS architectures, motion-graphics triggers, and asset transformations."
  },
  {
    title: "Admin Dashboard",
    tech: "MERN, Chart.js, JWT",
    badge: "Advanced",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=600&q=80",
    desc: "Analytical control metrics grid tracking dynamic monetization channels.",
    learningOutcome: "Master complex structural chart analytics data modeling, secure cookie tokens, and strict role clearances."
  }
];

type ProjectType = typeof projects[0];

export default function FeaturesSection() {
  // Modal tracking state for dynamic updates
  const [selectedProject, setSelectedProject] = useState<ProjectType | null>(null);

  return (
    <section id="features" className="bg-background text-foreground py-24 px-4 sm:px-6 lg:px-8 border-t border-zinc-200 dark:border-zinc-900/60 transition-colors duration-300 space-y-32 relative">
      
      {/* ================= PART 1: EVERYTHING YOU NEED TO SUCCEED ================= */}
      <div className="max-w-7xl mx-auto space-y-16 text-center">
        <div className="space-y-3">
          <span className="inline-block px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-950/50 border border-blue-200 dark:border-blue-900/40 text-[11px] font-bold text-sky-500 uppercase tracking-widest">
            🔹 What's Included
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-zinc-900 dark:text-white tracking-tight">
            Everything You Need to <span className="bg-gradient-to-r from-[#25a0e2] to-[#4f46e5] bg-clip-text text-transparent">Succeed</span>
          </h2>
          <p className="text-zinc-500 dark:text-zinc-400 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            We've packed every resource, tool, and support system you need to go from curious learner to confident full-stack developer.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {inclusions.map((item, index) => (
            <div 
              key={index} 
              className="flex flex-col items-center text-center p-6 rounded-2xl bg-zinc-50/50 dark:bg-[#0b1524]/30 border border-zinc-200/80 dark:border-zinc-800/60 shadow-sm transition-all duration-300 hover:-translate-y-1 group"
            >
              <div className="w-12 h-12 rounded-full bg-blue-500/10 text-blue-500 flex items-center justify-center transition-transform duration-300 group-hover:scale-110 mb-4">
                {item.icon}
              </div>
              <h3 className="text-base font-bold text-zinc-900 dark:text-zinc-200">
                {item.title}
              </h3>
              <p className="text-zinc-500 dark:text-zinc-400 text-xs mt-2 leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* ================= PART 2: REAL-WORLD PROJECTS YOU'LL BUILD ================= */}
      <div className="max-w-7xl mx-auto space-y-16 text-center">
        <div className="space-y-3">
          <span className="inline-block px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-950/50 border border-blue-200 dark:border-blue-900/40 text-[11px] font-bold text-sky-500 uppercase tracking-widest">
            🔹 Hands-On Portfolio
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-zinc-900 dark:text-white tracking-tight">
            Real-World <span className="text-[#25a0e2]">Projects</span> You'll Build
          </h2>
          <p className="text-zinc-500 dark:text-zinc-400 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
            Don't just learn theory — ship production-ready applications.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-8 max-w-6xl mx-auto">
          {projects.map((proj, index) => (
            <div 
              key={index} 
              className="group relative overflow-hidden rounded-2xl bg-zinc-50 dark:bg-[#0b1524]/40 border border-zinc-200 dark:border-zinc-800/60 p-4 shadow-sm transition-all duration-300 hover:-translate-y-1 text-left w-full sm:w-[calc(50%-16px)] lg:w-[calc(33.333%-22px)] max-w-[350px]"
            >
              <div className="relative aspect-[16/11] overflow-hidden rounded-xl bg-zinc-200 dark:bg-zinc-900">
                <img 
                  src={proj.image} 
                  alt={proj.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <span className="absolute top-3 right-3 px-2 py-0.5 text-[9px] font-bold bg-black/70 text-white backdrop-blur-sm rounded-md uppercase tracking-wider">
                  {proj.badge}
                </span>
              </div>

              <div className="pt-4 pb-1 space-y-1.5">
                <h3 className="text-lg font-bold text-zinc-900 dark:text-white group-hover:text-[#25a0e2] transition-colors line-clamp-1">
                  {proj.title}
                </h3>
                <p className="text-[11px] font-semibold text-blue-600 dark:text-sky-400 font-mono">
                  {proj.tech}
                </p>
                
                {/* Click action logic implementation */}
                <div 
                  onClick={() => setSelectedProject(proj)}
                  className="pt-2 flex items-center gap-1 text-[11px] font-bold text-zinc-400 group-hover:text-zinc-600 dark:group-hover:text-zinc-300 transition-colors cursor-pointer w-fit"
                >
                  <span>View Details</span>
                  <ArrowUpRight size={12} />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Analytics Box */}
        <div className="mt-16 p-8 sm:p-12 rounded-3xl bg-zinc-50 dark:bg-[#060d18] border border-zinc-200 dark:border-zinc-900 grid grid-cols-2 lg:grid-cols-4 gap-8 text-center shadow-inner transition-colors">
          <div>
            <p className="text-3xl sm:text-5xl font-black text-zinc-900 dark:text-white tracking-tight">5000+</p>
            <p className="text-[10px] sm:text-xs font-bold text-blue-600 dark:text-sky-400 uppercase tracking-widest mt-2">Students</p>
          </div>
          <div>
            <p className="text-3xl sm:text-5xl font-black text-zinc-900 dark:text-white tracking-tight">100+</p>
            <p className="text-[10px] sm:text-xs font-bold text-blue-600 dark:text-sky-400 uppercase tracking-widest mt-2">Projects</p>
          </div>
          <div>
            <p className="text-3xl sm:text-5xl font-black text-zinc-900 dark:text-white tracking-tight">25+</p>
            <p className="text-[10px] sm:text-xs font-bold text-blue-600 dark:text-sky-400 uppercase tracking-widest mt-2">Mentors</p>
          </div>
          <div>
            <p className="text-3xl sm:text-5xl font-black text-zinc-900 dark:text-white tracking-tight">95%</p>
            <p className="text-[10px] sm:text-xs font-bold text-blue-600 dark:text-sky-400 uppercase tracking-widest mt-2">Placement Support</p>
          </div>
        </div>
      </div>

      {/* ================= HIGH FIDELITY CUSTOM POPUP MODAL ================= */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          
          {/* Backdrop Glassmorphism Overlay */}
          <div 
            onClick={() => setSelectedProject(null)}
            className="absolute inset-0 bg-black/70 backdrop-blur-sm transition-opacity"
          />

          {/* Modal Card Structure */}
          <div className="relative w-full max-w-xl overflow-hidden rounded-3xl bg-[#0b1524] border border-zinc-800 p-5 sm:p-7 shadow-2xl transform transition-all scale-100 animate-in fade-in zoom-in-95 duration-200 text-left">
            
            {/* Top Close Click Node Button */}
            <button 
              onClick={() => setSelectedProject(null)}
              className="absolute right-5 top-5 p-1.5 rounded-full text-zinc-400 hover:bg-zinc-800 transition-colors cursor-pointer z-10"
            >
              <X size={16} />
            </button>

            {/* Content Core Body Layout */}
            <div className="space-y-5">
              <h3 className="text-xl sm:text-2xl font-black text-white tracking-tight pr-6">
                {selectedProject.title}
              </h3>

              {/* Responsive Project Graphic Preview Box */}
              <div className="relative w-full aspect-video rounded-xl overflow-hidden bg-zinc-900 border border-zinc-800/60">
                <img 
                  src={selectedProject.image} 
                  alt={selectedProject.title} 
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Project Main Subtext */}
              <p className="text-zinc-300 text-sm leading-relaxed">
                {selectedProject.desc}
              </p>

              {/* Tag Badges Grid */}
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1.5 text-xs font-bold rounded-xl bg-blue-500/10 text-[#25a0e2] border border-blue-500/20 uppercase tracking-wide">
                  {selectedProject.badge}
                </span>
                <span className="px-3 py-1.5 text-xs font-bold rounded-xl bg-[#0f243a] text-sky-400 border border-sky-500/10 font-mono">
                  {selectedProject.tech}
                </span>
              </div>

              {/* Learning Outcomes Matrix Container */}
              <div className="pt-4 border-t border-zinc-800/80 space-y-1">
                <h4 className="text-xs font-black uppercase tracking-widest text-zinc-400">
                  Learning Outcome:
                </h4>
                <p className="text-zinc-300 text-xs sm:text-sm leading-relaxed font-medium">
                  {selectedProject.learningOutcome}
                </p>
              </div>
            </div>

          </div>
        </div>
      )}

    </section>
  );
}