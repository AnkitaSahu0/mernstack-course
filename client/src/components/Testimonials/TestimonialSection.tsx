"use client";

import React, { useState } from "react";
import { ChevronLeft, ChevronRight, Star, Sparkles } from "lucide-react";

const reviews = [
  {
    quote: "This course completely transformed my career. The projects are top-notch!",
    name: "Rahul Sharma",
    company: "TCS",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80"
  },
  {
    quote: "Deep-dive explanations of backend systems and architecture helped me crack senior roles easily.",
    name: "Ananya Iyer",
    company: "Cognizant",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80"
  },
  {
    quote: "The best structured MERN stack curriculum out there. Absolute production standards guidance.",
    name: "Vikram Malhotra",
    company: "Infosys",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80"
  }
];

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? reviews.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === reviews.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <section id="testimonials" className="bg-background text-foreground py-24 px-4 sm:px-6 lg:px-8  border-zinc-200 dark:border-zinc-900/60 transition-colors duration-300">
      <div className="max-w-5xl mx-auto space-y-12 text-center">
        
        {/* Top Section Badge & Header */}
        <div className="space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 dark:bg-blue-950/50 border border-blue-200 dark:border-blue-900/40 text-[#25a0e2] text-xs font-bold tracking-wider uppercase">
            <Sparkles size={12} /> Student Success Stories
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-zinc-900 dark:text-white tracking-tight">
            Trusted by <span className="bg-gradient-to-r from-[#25a0e2] to-[#4f46e5] bg-clip-text text-transparent">5,000+ Developers</span>
          </h2>
          <p className="text-zinc-500 dark:text-zinc-400 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
            Our students don't just learn — they get hired. Here's what some of our top graduates say about their transformation.
          </p>
        </div>

        {/* Carousel Container Layout */}
        <div className="flex items-center justify-center gap-4 sm:gap-8 pt-6 relative max-w-4xl mx-auto">
          
          {/* Left Navigation Arrow */}
          <button 
            onClick={handlePrev}
            className="w-10 h-10 rounded-full bg-zinc-100 dark:bg-[#0b1524]/60 border border-zinc-200 dark:border-zinc-800/80 flex items-center justify-center text-zinc-600 dark:text-zinc-400 hover:text-[#25a0e2] hover:border-[#25a0e2]/40 transition-all active:scale-95 shadow-sm"
          >
            <ChevronLeft size={20} />
          </button>

          {/* Central Quote Card */}
          <div className="flex-1 p-8 sm:p-12 rounded-3xl bg-zinc-50 dark:bg-[#0b1524]/40 border border-zinc-200 dark:border-zinc-800/60 shadow-lg shadow-blue-500/[0.01] dark:shadow-sky-500/[0.02] text-center space-y-6 relative group overflow-hidden min-h-[280px] flex flex-col justify-center">
            
            {/* Soft decorative ambient glow backdrop */}
            <div className="absolute inset-0 bg-gradient-to-b from-blue-500/[0.01] to-purple-500/[0.01] pointer-events-none" />

            {/* Stars Row */}
            <div className="flex justify-center gap-1 text-amber-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={16} fill="currentColor" />
              ))}
            </div>

            {/* Quote Statement Text */}
            <p className="text-zinc-700 dark:text-zinc-300 text-base sm:text-xl font-medium italic leading-relaxed max-w-2xl mx-auto transition-all duration-300">
              "{reviews[currentIndex].quote}"
            </p>

            {/* Profile Avatar Metadata Stack */}
            <div className="flex flex-col items-center space-y-2 pt-2">
              <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-blue-500/80 p-0.5 bg-background shadow-md">
                <img 
                  src={reviews[currentIndex].avatar} 
                  alt={reviews[currentIndex].name}
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
              <div>
                <h4 className="text-sm sm:text-base font-bold text-zinc-900 dark:text-white">
                  {reviews[currentIndex].name}
                </h4>
                <p className="text-xs font-semibold text-blue-600 dark:text-sky-400 tracking-wider uppercase font-mono mt-0.5">
                  {reviews[currentIndex].company}
                </p>
              </div>
            </div>

          </div>

          {/* Right Navigation Arrow */}
          <button 
            onClick={handleNext}
            className="w-10 h-10 rounded-full bg-zinc-100 dark:bg-[#0b1524]/60 border border-zinc-200 dark:border-zinc-800/80 flex items-center justify-center text-zinc-600 dark:text-zinc-400 hover:text-[#25a0e2] hover:border-[#25a0e2]/40 transition-all active:scale-95 shadow-sm"
          >
            <ChevronRight size={20} />
          </button>

        </div>

      </div>
    </section>
  );
}