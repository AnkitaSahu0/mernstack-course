// /* eslint-disable react/jsx-no-undef */
// "use client";

// import React from "react";
// import { Clock, BarChart, Globe, Users, Star, Play } from "lucide-react";

// export default function WatchSection() {
//   return (
//     <section id="course" className="bg-[#050b14] py-20 px-4 sm:px-6 lg:px-8 border-t border-zinc-900/60">
//       <div className="max-w-5xl mx-auto text-center space-y-12">
        
//         {/* Section Headers */}
//         <div className="space-y-3">
//           <span className="inline-block px-3 py-1 rounded-md bg-blue-950/80 border border-blue-800/40 text-[10px] font-bold text-sky-400 uppercase tracking-widest">
//             👁️ See It In Action
//           </span>
//           <h2 className="text-3xl sm:text-4xl font-black text-white">
//             Watch What You'll <span className="text-sky-400">Create</span>
//           </h2>
//           <p className="text-zinc-500 text-sm max-w-xl mx-auto leading-relaxed">
//             Get a sneak peek into our production-ready projects. This is just a fraction of what you'll build — end to end, in full stack.
//           </p>
//         </div>

//         {/* Video Frame / Poster Card container */}
//         <div className="relative group rounded-3xl p-1 bg-gradient-to-b from-zinc-800/60 to-zinc-900/20 shadow-2xl">
//           <div className="relative overflow-hidden rounded-[22px] bg-zinc-950 aspect-video flex items-center justify-center border border-zinc-800/50">
//             {/* Poster Mockup Image (Matches your exact inner banner text) */}
//             <div className="absolute inset-0 bg-gradient-to-br from-amber-950/40 via-zinc-950 to-zinc-950 flex flex-col items-center justify-center p-6 text-center">
//               <div className="space-y-4 max-w-xl">
//                 <span className="text-amber-500 text-xs tracking-widest font-bold uppercase block">Start Your</span>
//                 <h3 className="text-2xl sm:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-b from-amber-200 to-amber-500 tracking-wide uppercase">
//                   MERN STACK <br /> <span className="text-sm font-serif tracking-normal text-amber-300 italic capitalize">Journey Today</span>
//                 </h3>
                
//                 {/* Embedded Company Box mockup */}
//                 <div className="my-4 px-6 py-3 rounded-xl border border-amber-500/30 bg-zinc-900/80 backdrop-blur-md">
//                   <p className="text-sm sm:text-lg font-bold text-amber-400">BeanGate IT Solutions Pvt. Ltd.</p>
//                   <p className="text-[10px] tracking-wider text-zinc-400 mt-0.5">REGISTRATION LINK IN BIO</p>
//                 </div>
//                 <p className="text-xs text-zinc-500 font-medium">STAM, WHATSAPP SUPPORT AVAILABLE</p>
//               </div>
//             </div>

//             {/* Play Button Trigger Overlay */}
//             <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors flex items-center justify-center cursor-pointer">
//               <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-amber-500 text-zinc-950 flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform duration-300 pl-1">
//                 <Play size={28} className="fill-zinc-950 stroke-none" />
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Info Grid Bar (Screenshot bottom structure) */}
//         <div className="grid grid-cols-2 sm:grid-cols-5 gap-4 pt-6 text-left">
//           {[
//             { icon: <Clock size={16} />, label: "Duration", val: "45.5 Hours" },
//             { icon: <BarChart size={16} />, label: "Level", val: "Beginner to Pro" },
//             { icon: <Globe size={16} />, label: "Language", val: "English" },
//             { icon: <Users size={16} />, label: "Students", val: "5,240+" },
//             { icon: <Star size={16} className="fill-amber-400 stroke-amber-400" />, label: "Rating", val: "4.9 (1.2k Reviews)" }
//           ].map((item, index) => (
//             <div key={index} className="p-4 rounded-2xl bg-[#0b1524]/60 border border-zinc-900/60 flex items-start gap-2.5">
//               <div className="text-sky-400 mt-0.5">{item.icon}</div>
//               <div>
//                 <p className="text-[10px] uppercase font-bold tracking-wider text-zinc-500">{item.label}</p>
//                 <p className="text-xs sm:text-sm font-bold text-zinc-200 mt-0.5">{item.val}</p>
//               </div>
//             </div>
//           ))}
//         </div>

//       </div>
//     </section>
//   );
// }


// "use client";

// import React from "react";
// import { Clock, BarChart, Globe, Users, Star, Play } from "lucide-react";

// export default function WatchSection() {
//   return (
//     <section id="course" className="bg-background text-foreground py-20 px-4 sm:px-6 lg:px-8 border-t border-zinc-200 dark:border-zinc-900/60 transition-colors duration-300">
//       <div className="max-w-5xl mx-auto text-center space-y-12">
        
//         {/* Section Headers */}
//         <div className="space-y-3">
//           <span className="inline-block px-3 py-1 rounded-md bg-blue-50 dark:bg-blue-950/80 border border-blue-200 dark:border-blue-800/40 text-[10px] font-bold text-sky-600 dark:text-sky-400 uppercase tracking-widest">
//             👁️ See It In Action
//           </span>
//           <h2 className="text-3xl sm:text-4xl font-black text-zinc-900 dark:text-white">
//             Watch What You'll <span className="text-sky-500 dark:text-sky-400">Create</span>
//           </h2>
//           <p className="text-zinc-500 dark:text-zinc-400 text-sm max-w-xl mx-auto leading-relaxed">
//             Get a sneak peek into our production-ready projects. This is just a fraction of what you'll build — end to end, in full stack.
//           </p>
//         </div>

//         {/* Video Frame Card */}
//         <div className="relative group rounded-3xl p-1 bg-gradient-to-b from-zinc-200 to-zinc-300/40 dark:from-zinc-800/60 dark:to-zinc-900/20 shadow-xl dark:shadow-2xl">
//           <div className="relative overflow-hidden rounded-[22px] bg-zinc-950 aspect-video flex items-center justify-center border border-zinc-200 dark:border-zinc-800/50">
            
//             {/* Inner Poster Graphics (Always Dark for Video Premium Look) */}
//             <div className="absolute inset-0 bg-gradient-to-br from-amber-950/40 via-zinc-950 to-zinc-950 flex flex-col items-center justify-center p-6 text-center">
//               <div className="space-y-4 max-w-xl">
//                 <span className="text-amber-500 text-xs tracking-widest font-bold uppercase block">Start Your</span>
//                 <h3 className="text-2xl sm:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-b from-amber-200 to-amber-500 tracking-wide uppercase">
//                   MERN STACK <br /> <span className="text-sm font-serif tracking-normal text-amber-300 italic capitalize">Journey Today</span>
//                 </h3>
                
//                 <div className="my-4 px-6 py-3 rounded-xl border border-amber-500/30 bg-zinc-900/80 backdrop-blur-md">
//                   <p className="text-sm sm:text-lg font-bold text-amber-400">BeanGate IT Solutions Pvt. Ltd.</p>
//                   <p className="text-[10px] tracking-wider text-zinc-400 mt-0.5">REGISTRATION LINK IN BIO</p>
//                 </div>
//                 <p className="text-xs text-zinc-500 font-medium">STAM, WHATSAPP SUPPORT AVAILABLE</p>
//               </div>
//             </div>

//             {/* Play Button Trigger Overlay */}
//             <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors flex items-center justify-center cursor-pointer">
//               <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-amber-500 text-zinc-950 flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform duration-300 pl-1">
//                 <Play size={28} className="fill-zinc-950 stroke-none" />
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Info Grid Bar */}
//         <div className="grid grid-cols-2 sm:grid-cols-5 gap-4 pt-6 text-left">
//           {[
//             { icon: <Clock size={16} />, label: "Duration", val: "45.5 Hours" },
//             { icon: <BarChart size={16} />, label: "Level", val: "Beginner to Pro" },
//             { icon: <Globe size={16} />, label: "Language", val: "English" },
//             { icon: <Users size={16} />, label: "Students", val: "5,240+" },
//             { icon: <Star size={16} className="fill-amber-400 stroke-amber-400" />, label: "Rating", val: "4.9 (1.2k Reviews)" }
//           ].map((item, index) => (
//             <div key={index} className="p-4 rounded-2xl bg-zinc-50 dark:bg-[#0b1524]/60 border border-zinc-200 dark:border-zinc-900/60 flex items-start gap-2.5 shadow-sm dark:shadow-none transition-colors">
//               <div className="text-sky-500 dark:text-sky-400 mt-0.5">{item.icon}</div>
//               <div>
//                 <p className="text-[10px] uppercase font-bold tracking-wider text-zinc-400 dark:text-zinc-500">{item.label}</p>
//                 <p className="text-xs sm:text-sm font-bold text-zinc-800 dark:text-zinc-200 mt-0.5">{item.val}</p>
//               </div>
//             </div>
//           ))}
//         </div>

//       </div>
//     </section>
//   );
// }

"use client";

import React, { useState } from "react";
import { Clock, BarChart, Globe, Users, Star, Play } from "lucide-react";

export default function WatchSection() {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section id="course" className="bg-background text-foreground py-20 px-4 sm:px-6 lg:px-8 border-t border-zinc-200 dark:border-zinc-900/60 transition-colors duration-300">
      <div className="max-w-5xl mx-auto text-center space-y-12">
        
        {/* Section Headers */}
        <div className="space-y-3">
          <span className="inline-block px-3 py-1 rounded-md bg-blue-50 dark:bg-blue-950/80 border border-blue-200 dark:border-blue-800/40 text-[10px] font-bold text-sky-600 dark:text-sky-400 uppercase tracking-widest">
            👁️ See It In Action
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-zinc-900 dark:text-white">
            Watch What You'll <span className="text-sky-500 dark:text-sky-400">Create</span>
          </h2>
          <p className="text-zinc-500 dark:text-zinc-400 text-sm max-w-xl mx-auto leading-relaxed">
            Get a sneak peek into our production-ready projects. This is just a fraction of what you'll build — end to end, in full stack.
          </p>
        </div>

        {/* Video Frame Card */}
        <div className="relative group rounded-3xl p-1 bg-gradient-to-b from-zinc-200 to-zinc-300/40 dark:from-zinc-800/60 dark:to-zinc-900/20 shadow-xl dark:shadow-2xl">
          <div className="relative overflow-hidden rounded-[22px] bg-zinc-950 aspect-video flex items-center justify-center border border-zinc-200 dark:border-zinc-800/50">
            
            {/* HTML5 Video Component */}
            <video
              src="/video.mp4" // Agar file public folder me h to path sahi h, warna absolute path ya import use krein
              controls={isPlaying}
              className="w-full h-full object-cover"
              onClick={() => setIsPlaying(true)}
              id="course-video"
            />

            {/* Poster and Play Overlay (Hide when video is playing) */}
            {!isPlaying && (
              <>
                {/* Inner Poster Graphics */}
                <div className="absolute inset-0 bg-gradient-to-br from-amber-950/40 via-zinc-950 to-zinc-950 flex flex-col items-center justify-center p-6 text-center pointer-events-none">
                  <div className="space-y-4 max-w-xl">
                    <span className="text-amber-500 text-xs tracking-widest font-bold uppercase block">Start Your</span>
                    <h3 className="text-2xl sm:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-b from-amber-200 to-amber-500 tracking-wide uppercase">
                      MERN STACK <br /> <span className="text-sm font-serif tracking-normal text-amber-300 italic capitalize">Journey Today</span>
                    </h3>
                    
                    <div className="my-4 px-6 py-3 rounded-xl border border-amber-500/30 bg-zinc-900/80 backdrop-blur-md">
                      <p className="text-sm sm:text-lg font-bold text-amber-400">BeanGate IT Solutions Pvt. Ltd.</p>
                      <p className="text-[10px] tracking-wider text-zinc-400 mt-0.5">REGISTRATION LINK IN BIO</p>
                    </div>
                    <p className="text-xs text-zinc-500 font-medium">STAM, WHATSAPP SUPPORT AVAILABLE</p>
                  </div>
                </div>

                {/* Play Button Trigger Overlay */}
                <div 
                  className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors flex items-center justify-center cursor-pointer"
                  onClick={() => {
                    const video = document.getElementById("course-video") as HTMLVideoElement;
                    if (video) {
                      video.play();
                      setIsPlaying(true);
                    }
                  }}
                >
                  <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-amber-500 text-zinc-950 flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform duration-300 pl-1">
                    <Play size={28} className="fill-zinc-950 stroke-none" />
                  </div>
                </div>
              </>
            )}
          </div>
        </div>

        {/* Info Grid Bar */}
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-4 pt-6 text-left">
          {[
            { icon: <Clock size={16} />, label: "Duration", val: "45.5 Hours" },
            { icon: <BarChart size={16} />, label: "Level", val: "Beginner to Pro" },
            { icon: <Globe size={16} />, label: "Language", val: "English" },
            { icon: <Users size={16} />, label: "Students", val: "5,240+" },
            { icon: <Star size={16} className="fill-amber-400 stroke-amber-400" />, label: "Rating", val: "4.9 (1.2k Reviews)" }
          ].map((item, index) => (
            <div key={index} className="p-4 rounded-2xl bg-zinc-50 dark:bg-[#0b1524]/60 border border-zinc-200 dark:border-zinc-900/60 flex items-start gap-2.5 shadow-sm dark:shadow-none transition-colors">
              <div className="text-sky-500 dark:text-sky-400 mt-0.5">{item.icon}</div>
              <div>
                <p className="text-[10px] uppercase font-bold tracking-wider text-zinc-400 dark:text-zinc-500">{item.label}</p>
                <p className="text-xs sm:text-sm font-bold text-zinc-800 dark:text-zinc-200 mt-0.5">{item.val}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}