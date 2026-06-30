/* eslint-disable react-hooks/rules-of-hooks */
// // "use client";

// // import React from "react";
// // import { ArrowRight, Code, Terminal, Cpu, Database } from "lucide-react";

// // export default function HomeSection() {
// //   return (
// //     <section 
// //       id="home" 
// //       className="relative min-h-[calc(100vh-80px)] flex items-center justify-center overflow-hidden bg-[#050b14] px-4 sm:px-6 lg:px-8 py-12"
// //     >
// //       {/* Background Decorative Gradients / Glow Effects */}
// //       <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-indigo-600/10 rounded-full blur-[120px] pointer-events-none" />
// //       <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 w-96 h-96 bg-[#25a0e2]/10 rounded-full blur-[150px] pointer-events-none" />

// //       <div className="max-w-[1400px] w-full mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
        
// //         {/* Left Side: Content & CTA */}
// //         <div className="space-y-6 text-center lg:text-left">
// //           {/* Tagline/Badge */}
// //           <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-zinc-900 border border-zinc-800 text-[#25a0e2] text-xs sm:text-sm font-semibold tracking-wide uppercase">
// //             <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
// //             Empowering Future Developers
// //           </div>

// //           {/* Main Heading */}
// //           <h1 className="text-4xl sm:text-5xl xl:text-6xl font-black text-white tracking-tight leading-[1.15]">
// //             Master Full Stack <br />
// //             <span className="bg-gradient-to-r from-[#25a0e2] via-[#4f46e5] to-purple-500 bg-clip-text text-transparent">
// //               MERN Stack
// //             </span>{" "}
// //             Development
// //           </h1>

// //           {/* Description */}
// //           <p className="text-zinc-400 text-base sm:text-lg max-w-xl mx-auto lg:mx-0 leading-relaxed">
// //             Build production-ready web applications using MongoDB, Express, React, 
// //             and Node.js. Join our elite academy and transform into a high-demand 
// //             software engineer.
// //           </p>

// //           {/* Buttons/Actions */}
// //           <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
// //             <button className="w-full sm:w-auto px-8 py-4 bg-[#25a0e2] hover:bg-[#1d82ba] text-white font-bold rounded-xl transition-all duration-300 shadow-lg shadow-[#25a0e2]/20 flex items-center justify-center gap-2 group cursor-pointer">
// //               Explore Courses
// //               <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
// //             </button>
// //             <button className="w-full sm:w-auto px-8 py-4 bg-zinc-900 hover:bg-zinc-800 text-zinc-300 border border-zinc-800 font-semibold rounded-xl transition-all duration-300 cursor-pointer">
// //               View Curriculum
// //             </button>
// //           </div>

// //           {/* Quick Stats/Features Badges */}
// //           <div className="grid grid-cols-3 gap-4 pt-8 border-t border-zinc-800/60 max-w-md mx-auto lg:mx-0">
// //             <div>
// //               <p className="text-2xl sm:text-3xl font-extrabold text-white">100%</p>
// //               <p className="text-xs text-zinc-500 font-medium uppercase tracking-wider mt-1">Practical</p>
// //             </div>
// //             <div>
// //               <p className="text-2xl sm:text-3xl font-extrabold text-[#25a0e2]">25+</p>
// //               <p className="text-xs text-zinc-500 font-medium uppercase tracking-wider mt-1">Projects</p>
// //             </div>
// //             <div>
// //               <p className="text-2xl sm:text-3xl font-extrabold text-purple-500">24/7</p>
// //               <p className="text-xs text-zinc-500 font-medium uppercase tracking-wider mt-1">Support</p>
// //             </div>
// //           </div>
// //         </div>

// //         {/* Right Side: Visual Cards Array (MERN Tech Graphics Grid) */}
// //         <div className="hidden lg:grid grid-cols-2 gap-6 relative px-4">
          
// //           {/* Card 1: MongoDB */}
// //           <div className="p-6 rounded-2xl bg-zinc-900/40 border border-zinc-800/60 backdrop-blur-sm hover:-translate-y-1 transition-transform duration-300">
// //             <div className="w-12 h-12 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-500 mb-4">
// //               <Database size={24} />
// //             </div>
// //             <h3 className="text-lg font-bold text-white mb-1">MongoDB</h3>
// //             <p className="text-sm text-zinc-500">Scalable NoSQL database infrastructure for modern data.</p>
// //           </div>

// //           {/* Card 2: Express */}
// //           <div className="p-6 rounded-2xl bg-zinc-900/40 border border-zinc-800/60 backdrop-blur-sm mt-8 hover:-translate-y-1 transition-transform duration-300">
// //             <div className="w-12 h-12 rounded-xl bg-zinc-400/10 flex items-center justify-center text-zinc-300 mb-4">
// //               <Terminal size={24} />
// //             </div>
// //             <h3 className="text-lg font-bold text-white mb-1">Express.js</h3>
// //             <p className="text-sm text-zinc-500">Minimalist and flexible routing framework for backend APIs.</p>
// //           </div>

// //           {/* Card 3: React */}
// //           <div className="p-6 rounded-2xl bg-zinc-900/40 border border-zinc-800/60 backdrop-blur-sm hover:-translate-y-1 transition-transform duration-300">
// //             <div className="w-12 h-12 rounded-xl bg-[#25a0e2]/10 flex items-center justify-center text-[#25a0e2] mb-4">
// //               <Code size={24} />
// //             </div>
// //             <h3 className="text-lg font-bold text-white mb-1">React.js</h3>
// //             <p className="text-sm text-zinc-500">Component-based powerful UI library for frontend apps.</p>
// //           </div>

// //           {/* Card 4: Node.js */}
// //           <div className="p-6 rounded-2xl bg-zinc-900/40 border border-zinc-800/60 backdrop-blur-sm mt-8 hover:-translate-y-1 transition-transform duration-300">
// //             <div className="w-12 h-12 rounded-xl bg-indigo-500/10 flex items-center justify-center text-indigo-400 mb-4">
// //               <Cpu size={24} />
// //             </div>
// //             <h3 className="text-lg font-bold text-white mb-1">Node.js</h3>
// //             <p className="text-sm text-zinc-500">Fast, asynchronous V8 JavaScript runtime engine.</p>
// //           </div>

// //         </div>

// //       </div>
// //     </section>
// //   );
// // }


// "use client";

// import React from "react";
// import { Play } from "lucide-react";

// export default function HomeSection() {
//   return (
//     <section id="home" className="relative min-h-screen flex items-center bg-[#050b14] overflow-hidden pt-20 px-4 sm:px-6 lg:px-8">
//       {/* Background radial glow */}
//       <div className="absolute top-1/2 left-2/3 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-sky-500/10 rounded-full blur-[120px] pointer-events-none" />

//       <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10 py-12">
        
//         {/* Left Content Column */}
//         <div className="lg:col-span-7 space-y-6 text-left">
//           {/* Top Badge */}
//           <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#0b1524] border border-sky-500/20 text-[#25a0e2] text-xs sm:text-sm font-medium tracking-wide">
//             🚀 The Ultimate MERN Stack Course
//           </div>

//           {/* Heading */}
//           <h1 className="text-4xl sm:text-5xl xl:text-6xl font-black text-zinc-200 tracking-tight leading-[1.15]">
//             Become a <span className="bg-gradient-to-r from-[#25a0e2] to-[#4f46e5] bg-clip-text text-transparent">MERN <br className="hidden sm:block"/>Stack</span> Developer
//           </h1>

//           {/* Description */}
//           <p className="text-zinc-400 text-base sm:text-lg max-w-xl leading-relaxed">
//             Learn React, Node.js, Express.js and MongoDB from scratch. Build production-ready full-stack applications.
//           </p>

//           {/* CTA Buttons */}
//           <div className="flex flex-wrap items-center gap-4 pt-2">
//             <button className="px-8 py-3.5 bg-gradient-to-r from-blue-600 to-sky-500 hover:from-blue-700 hover:to-sky-600 text-white font-bold rounded-full shadow-lg shadow-blue-500/20 transition-all cursor-pointer">
//               Enroll Now
//             </button>
//             <button className="px-6 py-3.5 bg-[#0b1524] hover:bg-[#112035] text-zinc-200 border border-zinc-800 font-semibold rounded-full flex items-center gap-2 transition-all cursor-pointer">
//               <Play size={16} className="fill-white" />
//               Watch Demo
//             </button>
//           </div>

//           {/* Student Stats Avatars */}
//           <div className="flex items-center gap-3 pt-6  border-zinc-900">
//             <div className="flex -space-x-3 overflow-hidden">
//               {[
//                 "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&q=80",
//                 "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80",
//                 "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=100&q=80",
//                 "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=100&q=80"
//               ].map((src, i) => (
//                 <img key={i} className="inline-block h-9 w-9 rounded-full ring-2 ring-[#050b14] object-cover" src={src} alt="Student" />
//               ))}
//             </div>
//             <p className="text-xs sm:text-sm text-zinc-400 font-medium">
//               <span className="text-white font-bold">5,000+</span> students already enrolled
//             </p>
//           </div>
//         </div>

//         {/* Right Animated Graphics Column */}
//         <div className="lg:col-span-5 flex justify-center items-center relative h-[400px] w-full">
//           {/* Orbiting Ring Axis Container */}
//           <div className="relative w-72 h-72 rounded-full border border-zinc-800/40 flex items-center justify-center animate-[spin_25s_linear_infinite]">
            
//             {/* Top Node: React */}
//             <div className="absolute -top-6 p-3 rounded-xl bg-zinc-900/90 border border-zinc-800 text-[#61dafb] animate-[spin_25s_linear_infinite_reverse]">
//               <span className="text-xs font-bold font-mono">⚛️</span>
//             </div>
//             {/* Right Node: Node.js */}
//             <div className="absolute -right-6 p-3 rounded-xl bg-zinc-900/90 border border-zinc-800 text-green-500 animate-[spin_25s_linear_infinite_reverse]">
//               <span className="text-xs font-bold font-mono">JS</span>
//             </div>
//             {/* Bottom Node: MongoDB */}
//             <div className="absolute -bottom-6 p-3 rounded-xl bg-zinc-900/90 border border-zinc-800 text-emerald-500 animate-[spin_25s_linear_infinite_reverse]">
//               <span className="text-xs font-bold font-mono">🍃</span>
//             </div>
//             {/* Left Node: Express */}
//             <div className="absolute -left-6 p-3 rounded-xl bg-zinc-900/90 border border-zinc-800 text-zinc-400 animate-[spin_25s_linear_infinite_reverse]">
//               <span className="text-xs font-mono">ex</span>
//             </div>
//           </div>

//           {/* Center Main Core Glow Ball */}
//           <div className="absolute w-24 h-24 rounded-full bg-gradient-to-tr from-blue-600 to-sky-400 p-0.5 shadow-2xl shadow-sky-500/30 flex items-center justify-center">
//             <div className="w-full h-full rounded-full bg-[#050b14]/90 backdrop-blur-sm" />
//           </div>
//         </div>

//       </div>
//     </section>
//   );
// }


// "use client";

// import React, { useState } from "react";
// import { ArrowRight, Play, Sparkles, X } from "lucide-react";
// import { motion } from "framer-motion";


// export default function Hero() {
//   // Popup (Modal) show/hide karne ke liye state
//   const [isModalOpen, setIsModalOpen] = useState(false);

//   const handleEnrollClick = () => {
//     // Custom UI Popup open hoga
//     setIsModalOpen(true);
//   };

//   const handleProceedToForm = () => {
//     // Popup close hoga
//     setIsModalOpen(false);
    
//     // Contact Form par smoothly scroll karega
//     const contactSection = document.getElementById("application-form");
//     if (contactSection) {
//       contactSection.scrollIntoView({ behavior: "smooth" });
//     }
//   };

//   const handleWatchDemoClick = () => {
    
//     const watchSection = document.getElementById("course");
//     if (watchSection) {
//       watchSection.scrollIntoView({ behavior: "smooth" });
//     }
//   };

//   // Animation Configurations
// const containerVariants = {
//   hidden: { opacity: 0 },
//   visible: {
//     opacity: 1,
//     transition: { staggerChildren: 0.15 } // Ek ke baad ek smooth entry
//   }
// };

// const itemVariants = {
//   hidden: { opacity: 0, y: 25 },
//   visible: { 
//     opacity: 1, 
//     y: 0, 
//     transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
//   }
// };

//   return (
//     // <section id="home" className="relative min-h-screen flex items-center bg-background text-foreground overflow-hidden pt-20 px-4 sm:px-6 lg:px-8 transition-colors duration-300">
//     //   {/* Background radial glow - Light mode me bohot soft dikhega, dark me bright */}
//     //   <div className="absolute top-1/2 left-2/3 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-sky-500/10 dark:bg-sky-500/5 rounded-full blur-[120px] pointer-events-none" />

//     //   <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10 py-12">
        
// <section id="home" className="relative flex flex-col justify-center bg-background text-foreground overflow-hidden pt-5 md:pt-14 pb-16 px-4 sm:px-6 lg:px-8 transition-colors duration-300 scroll-mt-24">
 
// {/* Background radial glow */}
//       <div className="absolute top-1/2 left-2/3 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-sky-500/10 dark:bg-sky-500/5 rounded-full blur-[120px] pointer-events-none" />

//       <motion.div 
//         variants={containerVariants}
//         initial="hidden"
//         animate="visible"
//         className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10 pt-6 pb-6"
//       >
//         {/* Left Content Column */}
//         <div className="lg:col-span-7 space-y-6 text-left">
          
//           {/* 1. Top Badge */}
//           <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-zinc-100 dark:bg-[#0b1524] border border-zinc-200 dark:border-sky-500/20 text-[#25a0e2] text-xs sm:text-sm font-medium tracking-wide transition-colors">
//             🚀 The Ultimate MERN Stack Course
//           </motion.div>

//           {/* 2. Heading */}
//           <motion.h1 variants={itemVariants} className="text-4xl sm:text-5xl xl:text-6xl font-black text-zinc-900 dark:text-zinc-200 tracking-tight leading-[1.15] transition-colors">
//             Become a <span className="bg-gradient-to-r from-[#25a0e2] to-[#4f46e5] bg-clip-text text-transparent">MERN <br className="hidden sm:block"/>Stack</span> Developer
//           </motion.h1>

//           {/* 3. Description */}
//           <motion.p variants={itemVariants} className="text-zinc-600 dark:text-zinc-400 text-base sm:text-lg max-w-xl leading-relaxed transition-colors">
//             Learn React, Node.js, Express.js and MongoDB from scratch. Build production-ready full-stack applications.
//           </motion.p>

//           {/* 4. CTA Buttons */}
//           <motion.div variants={itemVariants} className="relative">
//             <div className="flex flex-wrap items-center gap-4 pt-2">
//               <button onClick={handleEnrollClick} className="px-8 py-3.5 bg-gradient-to-r from-blue-600 to-sky-500 hover:from-blue-700 hover:to-sky-600 text-white font-bold rounded-full shadow-lg shadow-blue-500/20 transition-all cursor-pointer active:scale-95">
//                 Enroll Now
//               </button>
//               <button onClick={handleWatchDemoClick} className="px-6 py-3.5 bg-zinc-100 dark:bg-[#0b1524] hover:bg-zinc-200 dark:hover:bg-[#112035] text-zinc-800 dark:text-zinc-200 border border-zinc-200 dark:border-zinc-800 font-semibold rounded-full flex items-center gap-2 transition-all cursor-pointer active:scale-95">
//                 <Play size={16} className="fill-current" />
//                 Watch Demo
//               </button>
//             </div>

//             {/* Modal Logic As-It-Is */}
//             {isModalOpen && (
//               <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
//                 <div onClick={() => setIsModalOpen(false)} className="absolute inset-0 bg-black/60 backdrop-blur-sm" />
//                 <div className="relative w-full max-w-md overflow-hidden rounded-3xl bg-zinc-50 dark:bg-[#0b1524] border border-zinc-200 dark:border-zinc-800/80 p-6 sm:p-8 shadow-2xl">
//                   <button onClick={() => setIsModalOpen(false)} className="absolute right-4 top-4 p-1 rounded-full text-zinc-400 hover:bg-zinc-200 dark:hover:bg-zinc-800/60 transition-colors">
//                     <X size={18} />
//                   </button>
//                   <div className="text-center space-y-4 mt-2">
//                     <div className="mx-auto w-12 h-12 rounded-full bg-blue-500/10 flex items-center justify-center text-[#25a0e2]">
//                       <Sparkles size={24} />
//                     </div>
//                     <div className="space-y-2">
//                       <h3 className="text-xl font-black text-zinc-900 dark:text-white tracking-tight">Proceed to <span className="text-[#25a0e2]">Registration</span></h3>
//                       <p className="text-zinc-500 dark:text-zinc-400 text-xs sm:text-sm leading-relaxed">Aapko application form section par redirect kiya ja raha hai.</p>
//                     </div>
//                     <button onClick={handleProceedToForm} className="w-full mt-4 py-3 px-4 inline-flex items-center justify-center gap-2 rounded-xl text-sm font-bold bg-gradient-to-r from-[#25a0e2] to-[#4f46e5] text-white shadow-lg">
//                       Let's Go <ArrowRight size={16} />
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             )}
//           </motion.div>

//           {/* 5. Student Stats Avatars */}
//           <motion.div variants={itemVariants} className="flex items-center gap-3 pt-6 border-zinc-200 dark:border-zinc-900/60">
//             <div className="flex -space-x-3 overflow-hidden">
//               {[
//                 "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&q=80",
//                 "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80",
//                 "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=100&q=80",
//                 "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=100&q=80"
//               ].map((src, i) => (
//                 <img key={i} className="inline-block h-9 w-9 rounded-full ring-2 ring-white dark:ring-[#050b14] object-cover" src={src} alt="Student" />
//               ))}
//             </div>
//             <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 font-medium">
//               <span className="text-zinc-900 dark:text-white font-bold">5,000+</span> students already enrolled
//             </p>
//           </motion.div>

//         </div>
//       </motion.div>

//       {/* Right Animated Graphics Column */}
//       <div className="lg:col-span-5 flex justify-center items-center relative h-[380px] sm:h-[450px] w-full select-none animate-in fade-in zoom-in duration-1000 delay-300">
//       {/* Dotted/Dashed Orbiting Ring Axis */}
//       <div className="relative w-56 h-56 sm:w-72 sm:h-72 lg:w-80 lg:h-80 rounded-full border-2 border-dashed border-zinc-300/40 dark:border-zinc-800/60 flex items-center justify-center animate-[spin_40s_linear_infinite]">
        
//         {/* 🍃 MongoDB */}
//         <div className="absolute top-2 left-2 sm:top-4 sm:left-4 -translate-x-1/2 -translate-y-1/2 p-2.5 sm:p-4 rounded-2xl bg-zinc-50 dark:bg-[#0f1b2d] border border-zinc-200 dark:border-zinc-800/80 shadow-2xl shadow-emerald-500/[0.05] animate-[spin_40s_linear_infinite_reverse] flex flex-col items-center gap-1 min-w-[70px] sm:min-w-[90px]">
//           <svg className="w-6 h-6 sm:w-8 sm:h-8 text-emerald-500" viewBox="0 0 24 24" fill="currentColor">
//             <path d="M12 2s-1 2.33-1 4.33c0 .81.24 1.48.65 2.01C9.09 9.32 7 11.4 7 14c0 3.08 2.24 5 5 5s5-1.92 5-5c0-2.6-2.09-4.68-4.65-5.66.41-.53.65-1.2.65-2.01C13 4.33 12 2 12 2z" />
//           </svg>
//           <span className="text-[10px] sm:text-xs font-semibold font-sans text-zinc-700 dark:text-zinc-300">MongoDB</span>
//         </div>

//         {/* ex Express.js */}
//         <div className="absolute top-2 right-2 sm:top-4 sm:right-4 translate-x-1/2 -translate-y-1/2 p-2.5 sm:p-4 rounded-2xl bg-zinc-50 dark:bg-[#0f1b2d] border border-zinc-200 dark:border-zinc-800/80 shadow-2xl animate-[spin_40s_linear_infinite_reverse] flex flex-col items-center gap-1 min-w-[70px] sm:min-w-[90px]">
//           <span className="text-xl sm:text-2xl font-normal tracking-tighter text-zinc-800 dark:text-zinc-200 font-sans px-1.5 block leading-none select-none">ex</span>
//           <span className="text-[10px] sm:text-xs font-semibold font-sans text-zinc-700 dark:text-zinc-300">Express</span>
//         </div>

//         {/* ⚛️ React */}
//         <div className="absolute bottom-2 right-2 sm:bottom-4 sm:right-4 translate-x-1/2 translate-y-1/2 p-2.5 sm:p-4 rounded-2xl bg-zinc-50 dark:bg-[#0f1b2d] border border-zinc-200 dark:border-zinc-800/80 shadow-2xl shadow-sky-500/[0.05] animate-[spin_40s_linear_infinite_reverse] flex flex-col items-center gap-1 min-w-[70px] sm:min-w-[90px]">
//           <svg className="w-6 h-6 sm:w-8 sm:h-8 text-[#61dafb] animate-[spin_10s_linear_infinite]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
//             <ellipse cx="12" cy="12" rx="10" ry="4.5" transform="rotate(0 12 12)" />
//             <ellipse cx="12" cy="12" rx="10" ry="4.5" transform="rotate(60 12 12)" />
//             <ellipse cx="12" cy="12" rx="10" ry="4.5" transform="rotate(120 12 12)" />
//             <circle cx="12" cy="12" r="2" fill="currentColor" />
//           </svg>
//           <span className="text-[10px] sm:text-xs font-semibold font-sans text-zinc-700 dark:text-zinc-300">React</span>
//         </div>

//         {/* 🟢 Node.js */}
//         <div className="absolute bottom-2 left-2 sm:bottom-4 sm:left-4 -translate-x-1/2 translate-y-1/2 p-2.5 sm:p-4 rounded-2xl bg-zinc-50 dark:bg-[#0f1b2d] border border-zinc-200 dark:border-zinc-800/80 shadow-2xl shadow-green-500/[0.05] animate-[spin_40s_linear_infinite_reverse] flex flex-col items-center gap-1 min-w-[70px] sm:min-w-[90px]">
//           <svg className="w-6 h-6 sm:w-8 sm:h-8 text-green-500" viewBox="0 0 24 24" fill="currentColor">
//             <path d="M12 2L4.5 6.3v8.6L12 19.3l7.5-4.4V6.3L12 2zm-1 11.5c0 .8-.7 1.5-1.5 1.5s-1.5-.7-1.5-1.5.7-1.5 1.5-1.5 1.5.7 1.5 1.5zm5 0c0 .8-.7 1.5-1.5 1.5s-1.5-.7-1.5-1.5.7-1.5 1.5-1.5 1.5.7 1.5 1.5z" />
//           </svg>
//           <span className="text-[10px] sm:text-xs font-semibold font-sans text-zinc-700 dark:text-zinc-300">Node.js</span>
//         </div>

//       </div>

//       {/* Center Main Core */}
//       <div className="absolute w-20 h-20 sm:w-28 sm:h-28 rounded-full bg-blue-500/10 dark:bg-blue-500/5 flex items-center justify-center border border-blue-500/10 backdrop-blur-sm animate-pulse">
//         <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-gradient-to-b from-[#25a0e2] to-blue-600 shadow-[0_0_30px_rgba(37,160,226,0.5)]" />
//       </div>

//     </div>
//       </div>
//     </section>
//   );
// }
"use client";

import React, { useState } from "react";
import { ArrowRight, Play, Sparkles, X } from "lucide-react";
import { motion, Variants } from "framer-motion";

// Configurations with strict type annotations outside the component
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { 
      staggerChildren: 0.15 
    } 
  }
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 25 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { 
      duration: 0.6, 
      ease: [0.25, 1, 0.5, 1] // Fixed tuple format internally mapped by Variants type
    }
  }
};

export default function Hero() {
  // Popup (Modal) show/hide karne ke liye state
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleEnrollClick = () => {
    setIsModalOpen(true);
  };

  const handleProceedToForm = () => {
    setIsModalOpen(false);
    const contactSection = document.getElementById("application-form");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleWatchDemoClick = () => {
    const watchSection = document.getElementById("course");
    if (watchSection) {
      watchSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="relative flex flex-col justify-center bg-background text-foreground overflow-hidden pt-5 md:pt-14 pb-16 px-4 sm:px-6 lg:px-8 transition-colors duration-300 scroll-mt-24">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-2/3 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-sky-500/10 dark:bg-sky-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10 pt-6 pb-6">
        
        {/* Left Content Column with Entry Stagger Animation */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="lg:col-span-7 space-y-6 text-left"
        >
          {/* 1. Top Badge */}
          <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-zinc-100 dark:bg-[#0b1524] border border-zinc-200 dark:border-sky-500/20 text-[#25a0e2] text-xs sm:text-sm font-medium tracking-wide transition-colors">
            🚀 The Ultimate MERN Stack Course
          </motion.div>

          {/* 2. Heading */}
          <motion.h1 variants={itemVariants} className="text-4xl sm:text-5xl xl:text-6xl font-black text-zinc-900 dark:text-zinc-200 tracking-tight leading-[1.15] transition-colors">
            Become a <span className="bg-gradient-to-r from-[#25a0e2] to-[#4f46e5] bg-clip-text text-transparent">MERN <br className="hidden sm:block"/>Stack</span> Developer
          </motion.h1>

          {/* 3. Description */}
          <motion.p variants={itemVariants} className="text-zinc-600 dark:text-zinc-400 text-base sm:text-lg max-w-xl leading-relaxed transition-colors">
            Learn React, Node.js, Express.js and MongoDB from scratch. Build production-ready full-stack applications.
          </motion.p>

          {/* 4. CTA Buttons */}
          <motion.div variants={itemVariants} className="relative">
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button onClick={handleEnrollClick} className="px-8 py-3.5 bg-gradient-to-r from-blue-600 to-sky-500 hover:from-blue-700 hover:to-sky-600 text-white font-bold rounded-full shadow-lg shadow-blue-500/20 transition-all cursor-pointer active:scale-95">
                Enroll Now
              </button>
              <button onClick={handleWatchDemoClick} className="px-6 py-3.5 bg-zinc-100 dark:bg-[#0b1524] hover:bg-zinc-200 dark:hover:bg-[#112035] text-zinc-800 dark:text-zinc-200 border border-zinc-200 dark:border-zinc-800 font-semibold rounded-full flex items-center gap-2 transition-all cursor-pointer active:scale-95">
                <Play size={16} className="fill-current" />
                Watch Demo
              </button>
            </div>

            {/* Modal Logic */}
            {isModalOpen && (
              <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
                <div onClick={() => setIsModalOpen(false)} className="absolute inset-0 bg-black/60 backdrop-blur-sm" />
                <div className="relative w-full max-w-md overflow-hidden rounded-3xl bg-zinc-50 dark:bg-[#0b1524] border border-zinc-200 dark:border-zinc-800/80 p-6 sm:p-8 shadow-2xl">
                  <button onClick={() => setIsModalOpen(false)} className="absolute right-4 top-4 p-1 rounded-full text-zinc-400 hover:bg-zinc-200 dark:hover:bg-zinc-800/60 transition-colors">
                    <X size={18} />
                  </button>
                  <div className="text-center space-y-4 mt-2">
                    <div className="mx-auto w-12 h-12 rounded-full bg-blue-500/10 flex items-center justify-center text-[#25a0e2]">
                      <Sparkles size={24} />
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-xl font-black text-zinc-900 dark:text-white tracking-tight">Proceed to <span className="text-[#25a0e2]">Registration</span></h3>
                      <p className="text-zinc-500 dark:text-zinc-400 text-xs sm:text-sm leading-relaxed">Aapko application form section par redirect kiya ja raha hai.</p>
                    </div>
                    <button onClick={handleProceedToForm} className="w-full mt-4 py-3 px-4 inline-flex items-center justify-center gap-2 rounded-xl text-sm font-bold bg-gradient-to-r from-[#25a0e2] to-[#4f46e5] text-white shadow-lg">
                      Let's Go <ArrowRight size={16} />
                    </button>
                  </div>
                </div>
              </div>
            )}
          </motion.div>

          {/* 5. Student Stats Avatars */}
          <motion.div variants={itemVariants} className="flex items-center gap-3 pt-6 border-zinc-200 dark:border-zinc-900/60">
            <div className="flex -space-x-3 overflow-hidden">
              {[
                "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&q=80",
                "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80",
                "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=100&q=80",
                "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=100&q=80"
              ].map((src, i) => (
                <img key={i} className="inline-block h-9 w-9 rounded-full ring-2 ring-white dark:ring-[#050b14] object-cover" src={src} alt="Student" />
              ))}
            </div>
            <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 font-medium">
              <span className="text-zinc-900 dark:text-white font-bold">5,000+</span> students already enrolled
            </p>
          </motion.div>
        </motion.div>

        {/* Right Animated Graphics Column */}
        <div className="lg:col-span-5 flex justify-center items-center relative h-[380px] sm:h-[450px] w-full select-none animate-in fade-in zoom-in duration-1000 delay-300">
          {/* Dotted/Dashed Orbiting Ring Axis */}
          <div className="relative w-56 h-56 sm:w-72 sm:h-72 lg:w-80 lg:h-80 rounded-full border-2 border-dashed border-zinc-300/40 dark:border-zinc-800/60 flex items-center justify-center animate-[spin_40s_linear_infinite]">
            
            {/* 🍃 MongoDB */}
            <div className="absolute top-2 left-2 sm:top-4 sm:left-4 -translate-x-1/2 -translate-y-1/2 p-2.5 sm:p-4 rounded-2xl bg-zinc-50 dark:bg-[#0f1b2d] border border-zinc-200 dark:border-zinc-800/80 shadow-2xl shadow-emerald-500/[0.05] animate-[spin_40s_linear_infinite_reverse] flex flex-col items-center gap-1 min-w-[70px] sm:min-w-[90px]">
              <svg className="w-6 h-6 sm:w-8 sm:h-8 text-emerald-500" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2s-1 2.33-1 4.33c0 .81.24 1.48.65 2.01C9.09 9.32 7 11.4 7 14c0 3.08 2.24 5 5 5s5-1.92 5-5c0-2.6-2.09-4.68-4.65-5.66.41-.53.65-1.2.65-2.01C13 4.33 12 2 12 2z" />
              </svg>
              <span className="text-[10px] sm:text-xs font-semibold font-sans text-zinc-700 dark:text-zinc-300">MongoDB</span>
            </div>

            {/* ex Express.js */}
            <div className="absolute top-2 right-2 sm:top-4 sm:right-4 translate-x-1/2 -translate-y-1/2 p-2.5 sm:p-4 rounded-2xl bg-zinc-50 dark:bg-[#0f1b2d] border border-zinc-200 dark:border-zinc-800/80 shadow-2xl animate-[spin_40s_linear_infinite_reverse] flex flex-col items-center gap-1 min-w-[70px] sm:min-w-[90px]">
              <span className="text-xl sm:text-2xl font-normal tracking-tighter text-zinc-800 dark:text-zinc-200 font-sans px-1.5 block leading-none select-none">ex</span>
              <span className="text-[10px] sm:text-xs font-semibold font-sans text-zinc-700 dark:text-zinc-300">Express</span>
            </div>

            {/* ⚛️ React */}
            <div className="absolute bottom-2 right-2 sm:bottom-4 sm:right-4 translate-x-1/2 translate-y-1/2 p-2.5 sm:p-4 rounded-2xl bg-zinc-50 dark:bg-[#0f1b2d] border border-zinc-200 dark:border-zinc-800/80 shadow-2xl shadow-sky-500/[0.05] animate-[spin_40s_linear_infinite_reverse] flex flex-col items-center gap-1 min-w-[70px] sm:min-w-[90px]">
              <svg className="w-6 h-6 sm:w-8 sm:h-8 text-[#61dafb] animate-[spin_10s_linear_infinite]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <ellipse cx="12" cy="12" rx="10" ry="4.5" transform="rotate(0 12 12)" />
                <ellipse cx="12" cy="12" rx="10" ry="4.5" transform="rotate(60 12 12)" />
                <ellipse cx="12" cy="12" rx="10" ry="4.5" transform="rotate(120 12 12)" />
                <circle cx="12" cy="12" r="2" fill="currentColor" />
              </svg>
              <span className="text-[10px] sm:text-xs font-semibold font-sans text-zinc-700 dark:text-zinc-300">React</span>
            </div>

            {/* 🟢 Node.js */}
            <div className="absolute bottom-2 left-2 sm:bottom-4 sm:left-4 -translate-x-1/2 translate-y-1/2 p-2.5 sm:p-4 rounded-2xl bg-zinc-50 dark:bg-[#0f1b2d] border border-zinc-200 dark:border-zinc-800/80 shadow-2xl shadow-green-500/[0.05] animate-[spin_40s_linear_infinite_reverse] flex flex-col items-center gap-1 min-w-[70px] sm:min-w-[90px]">
              <svg className="w-6 h-6 sm:w-8 sm:h-8 text-green-500" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2L4.5 6.3v8.6L12 19.3l7.5-4.4V6.3L12 2zm-1 11.5c0 .8-.7 1.5-1.5 1.5s-1.5-.7-1.5-1.5.7-1.5 1.5-1.5 1.5.7 1.5 1.5zm5 0c0 .8-.7 1.5-1.5 1.5s-1.5-.7-1.5-1.5.7-1.5 1.5-1.5 1.5.7 1.5 1.5z" />
              </svg>
              <span className="text-[10px] sm:text-xs font-semibold font-sans text-zinc-700 dark:text-zinc-300">Node.js</span>
            </div>
          </div>

          {/* Center Main Core */}
          <div className="absolute w-20 h-20 sm:w-28 sm:h-28 rounded-full bg-blue-500/10 dark:bg-blue-500/5 flex items-center justify-center border border-blue-500/10 backdrop-blur-sm animate-pulse">
            <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-gradient-to-b from-[#25a0e2] to-blue-600 shadow-[0_0_30px_rgba(37,160,226,0.5)]" />
          </div>
        </div>

      </div>
    </section>
  );
}