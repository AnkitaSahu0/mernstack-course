// "use client";

// import React from "react";
// import { Check, Sparkles } from "lucide-react";

// const plans = [
//   {
//     name: "Starter",
//     price: "₹4,999",
//     features: ["Recorded Videos", "Source Code", "Community Access", "Certificate"],
//     isPopular: false,
//     buttonText: "Choose Plan"
//   },
//   {
//     name: "Professional",
//     price: "₹9,999",
//     features: ["Everything in Starter", "Live Doubt Sessions", "10+ Projects", "Resume Review"],
//     isPopular: true,
//     buttonText: "Choose Plan"
//   },
//   {
//     name: "Premium",
//     price: "₹14,999",
//     features: ["Everything in Pro", "1-on-1 Mentorship", "Mock Interviews", "Job Guarantee"],
//     isPopular: false,
//     buttonText: "Choose Plan"
//   }
// ];

// export default function PricingSection() {
//   return (
//     <section id="pricing" className="bg-background text-foreground py-24 px-4 sm:px-6 lg:px-8 border-t border-zinc-200 dark:border-zinc-900/60 transition-colors duration-300">
//       <div className="max-w-6xl mx-auto space-y-16">
        
//         {/* Section Header */}
//         <div className="text-center space-y-3">
//           <span className="inline-block px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-950/50 border border-blue-200 dark:border-blue-900/40 text-[11px] font-bold text-sky-500 uppercase tracking-widest">
//             🔹 Simple Pricing
//           </span>
//           <h2 className="text-3xl sm:text-5xl font-black text-zinc-900 dark:text-white tracking-tight">
//             Invest in Your <span className="bg-gradient-to-r from-[#25a0e2] to-[#4f46e5] bg-clip-text text-transparent">Future</span>
//           </h2>
//           <p className="text-zinc-500 dark:text-zinc-400 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
//             Transparent, one-time pricing. No hidden fees, no subscriptions. Pick the plan that fits your goals and get full lifetime access.
//           </p>
//         </div>

//         {/* Pricing Cards Layout */}
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto items-stretch">
//           {plans.map((plan, index) => (
//             <div 
//               key={index}
//               className={`relative rounded-3xl p-8 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 ${
//                 plan.isPopular 
//                   ? "bg-zinc-50 dark:bg-[#0b1524]/60 border-2 border-blue-500 dark:border-blue-600 shadow-xl shadow-blue-500/[0.05]" 
//                   : "bg-zinc-50/60 dark:bg-[#0b1524]/30 border border-zinc-200 dark:border-zinc-800/80 shadow-sm"
//               }`}
//             >
//               {plan.isPopular && (
//                 <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-gradient-to-r from-[#25a0e2] to-[#4f46e5] text-white text-[10px] font-bold tracking-widest uppercase rounded-full shadow-md flex items-center gap-1">
//                   <Sparkles size={10} /> Most Popular
//                 </span>
//               )}

//               {/* Upper Body Info */}
//               <div className="space-y-6">
//                 <div>
//                   <h3 className="text-xl font-bold text-zinc-900 dark:text-white">
//                     {plan.name}
//                   </h3>
//                   <div className="mt-2 flex items-baseline">
//                     <span className="text-3xl sm:text-4xl font-black text-zinc-900 dark:text-white tracking-tight">
//                       {plan.price}
//                     </span>
//                   </div>
//                 </div>

//                 {/* Features Checklist */}
//                 <ul className="space-y-4 pt-2">
//                   {plan.features.map((feature, fIdx) => (
//                     <li key={fIdx} className="flex items-center gap-3 text-zinc-600 dark:text-zinc-300 text-sm">
//                       <div className="w-5 h-5 rounded-full bg-emerald-500/10 text-emerald-500 flex items-center justify-center flex-shrink-0">
//                         <Check size={12} strokeWidth={3} />
//                       </div>
//                       <span className="truncate">{feature}</span>
//                     </li>
//                   ))}
//                 </ul>
//               </div>

//               {/* Lower Body Button Wrapper */}
//               <div className="pt-8">
//                 <button 
//                   className={`w-full py-3 px-4 rounded-xl text-sm font-bold tracking-wide transition-all duration-200 active:scale-[0.98] ${
//                     plan.isPopular
//                       ? "bg-gradient-to-r from-[#25a0e2] to-[#4f46e5] hover:opacity-95 text-white shadow-md shadow-blue-500/10"
//                       : "bg-zinc-100 hover:bg-zinc-200 text-zinc-800 dark:bg-zinc-900 dark:hover:bg-zinc-800 dark:text-zinc-200 border border-zinc-200 dark:border-zinc-800"
//                   }`}
//                 >
//                   {plan.buttonText}
//                 </button>
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
import { Check, Sparkles, X } from "lucide-react";

const plans = [
  {
    name: "Starter",
    price: "₹5,999",
    features: ["Recorded Videos", "Source Code", "Community Access", "Certificate"],
    isPopular: false,
    buttonText: "Choose Plan"
  },
  {
    name: "Professional",
    price: "₹9,999",
    features: ["Everything in Starter", "Live Doubt Sessions", "10+ Projects", "Resume Review"],
    isPopular: true,
    buttonText: "Choose Plan"
  },
  {
    name: "Premium",
    price: "₹14,999",
    features: ["Everything in Pro", "1-on-1 Mentorship", "Mock Interviews", "Job Guarantee"],
    isPopular: false,
    buttonText: "Choose Plan"
  }
];

export default function PricingSection() {
  // Modal toggle aur dynamic target plan state tracking
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);

  const handleChoosePlan = (planName: string) => {
    setSelectedPlan(planName);
  };

  const handleCompleteRegistration = () => {
    setSelectedPlan(null); // Modal close karein

    // Contact form standard matrix container trace point
    const contactSection = document.getElementById("application-form");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="pricing" className="bg-background text-foreground py-24 px-4 sm:px-6 lg:px-8 border-t border-zinc-200 dark:border-zinc-900/60 transition-colors duration-300">
      <div className="max-w-6xl mx-auto space-y-16">
        
        {/* Section Header */}
        <div className="text-center space-y-3">
          <span className="inline-block px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-950/50 border border-blue-200 dark:border-blue-900/40 text-[11px] font-bold text-sky-500 uppercase tracking-widest">
            🔹 Simple Pricing
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-zinc-900 dark:text-white tracking-tight">
            Invest in Your <span className="bg-gradient-to-r from-[#25a0e2] to-[#4f46e5] bg-clip-text text-transparent">Future</span>
          </h2>
          <p className="text-zinc-500 dark:text-zinc-400 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
            Transparent, one-time pricing. No hidden fees, no subscriptions. Pick the plan that fits your goals and get full lifetime access.
          </p>
        </div>

        {/* Pricing Cards Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto items-stretch">
          {plans.map((plan, index) => (
            <div 
              key={index}
              className={`relative rounded-3xl p-8 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 ${
                plan.isPopular 
                  ? "bg-zinc-50 dark:bg-[#0b1524]/60 border-2 border-blue-500 dark:border-blue-600 shadow-xl shadow-blue-500/[0.05]" 
                  : "bg-zinc-50/60 dark:bg-[#0b1524]/30 border border-zinc-200 dark:border-zinc-800/80 shadow-sm"
              }`}
            >
              {plan.isPopular && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-gradient-to-r from-[#25a0e2] to-[#4f46e5] text-white text-[10px] font-bold tracking-widest uppercase rounded-full shadow-md flex items-center gap-1">
                  <Sparkles size={10} /> Most Popular
                </span>
              )}

              {/* Upper Body Info */}
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold text-zinc-900 dark:text-white">
                    {plan.name}
                  </h3>
                  <div className="mt-2 flex items-baseline">
                    <span className="text-3xl sm:text-4xl font-black text-zinc-900 dark:text-white tracking-tight">
                      {plan.price}
                    </span>
                  </div>
                </div>

                {/* Features Checklist */}
                <ul className="space-y-4 pt-2">
                  {plan.features.map((feature, fIdx) => (
                    <li key={fIdx} className="flex items-center gap-3 text-zinc-600 dark:text-zinc-300 text-sm">
                      <div className="w-5 h-5 rounded-full bg-emerald-500/10 text-emerald-500 flex items-center justify-center flex-shrink-0">
                        <Check size={12} strokeWidth={3} />
                      </div>
                      <span className="truncate">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Lower Body Button Wrapper */}
              <div className="pt-8">
                <button 
                  onClick={() => handleChoosePlan(plan.name)}
                  className={`w-full py-3 px-4 rounded-xl text-sm font-bold tracking-wide transition-all duration-200 active:scale-[0.98] cursor-pointer ${
                    plan.isPopular
                      ? "bg-gradient-to-r from-[#25a0e2] to-[#4f46e5] hover:opacity-95 text-white shadow-md shadow-blue-500/10"
                      : "bg-zinc-100 hover:bg-zinc-200 text-zinc-800 dark:bg-zinc-900 dark:hover:bg-zinc-800 dark:text-zinc-200 border border-zinc-200 dark:border-zinc-800"
                  }`}
                >
                  {plan.buttonText}
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>

      {/* ================= PREMIUM BRANDING UI MODAL POPUP ================= */}
      {selectedPlan && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          
          {/* Backdrop Blur Overlay Shadow Layer */}
          <div 
            onClick={() => setSelectedPlan(null)} 
            className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
          />

          {/* Modal Container Body */}
          <div className="relative w-full max-w-lg overflow-hidden rounded-3xl bg-[#0b1524] border border-zinc-800 p-6 sm:p-8 shadow-2xl transform transition-all scale-100 animate-in fade-in zoom-in-95 duration-200">
            
            {/* Top Close Axis Trigger Button */}
            <button 
              onClick={() => setSelectedPlan(null)}
              className="absolute right-5 top-5 p-1 rounded-full text-zinc-400 hover:bg-zinc-800/80 transition-colors cursor-pointer"
            >
              <X size={18} />
            </button>

            {/* Content Flow Shell */}
            <div className="space-y-6 pt-2">
              <h3 className="text-xl sm:text-2xl font-black text-white tracking-tight border-b border-zinc-800 pb-4">
                Enroll in {selectedPlan}
              </h3>
              
              <p className="text-zinc-400 text-sm leading-relaxed font-medium">
                You've selected the <span className="text-white font-bold">{selectedPlan}</span> plan. We are redirecting you to the secure checkout process.
              </p>

              {/* Action Submit Control Panel */}
              <div className="pt-2">
                <button 
                  onClick={handleCompleteRegistration}
                  className="w-full py-4 px-4 rounded-xl text-sm font-bold bg-gradient-to-r from-[#25a0e2] to-[#4f46e5] text-white shadow-lg shadow-blue-500/10 hover:opacity-95 transition-all active:scale-[0.98] cursor-pointer"
                >
                  Complete Registration
                </button>
              </div>
            </div>

          </div>
        </div>
      )}
    </section>
  );
}