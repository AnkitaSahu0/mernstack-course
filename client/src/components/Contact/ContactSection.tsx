// /* eslint-disable @typescript-eslint/no-unused-vars */

// "use client";

// import React, { useState } from "react";
// import { Search, ChevronDown, ChevronUp, MessageSquare, Sparkles, Check } from "lucide-react";

// const categories = ["All", "Course", "Learning", "Placement", "Payment", "Career"];

// const faqData = [
//   {
//     q: "What exactly is the MERN Stack?",
//     a: "MERN stands for MongoDB, Express.js, React.js, and Node.js — four powerful JavaScript technologies that together form a complete, end-to-end web development stack. With MERN, you can build anything from a simple blog to an enterprise-grade SaaS product using a single programming language: JavaScript.",
//     cat: "Course"
//   },
//   {
//     q: "Who is this course designed for?",
//     a: "This course is crafted for absolute beginners, college students, and working professionals looking to transition into core full-stack software engineering roles.",
//     cat: "Course"
//   },
//   {
//     q: "Do I need any prior coding experience to join?",
//     a: "No prior coding experience is required. We start from absolute scratch (HTML/CSS basics) before shifting into advanced architecture layers.",
//     cat: "Learning"
//   },
//   {
//     q: "How long does the course take to complete?",
//     a: "Typically it takes 4 to 6 months of dedicated learning, including live mentorship and shipping production portfolio applications.",
//     cat: "Learning"
//   },
//   {
//     q: "Do you provide placement assistance?",
//     a: "Yes, we offer comprehensive placement support including resume optimization modules, technical mock interviews, and direct corporate referral pathways.",
//     cat: "Placement"
//   },
//   {
//     q: "Is there a refund policy?",
//     a: "Yes, we offer a no-questions-asked 7-day refund guarantee window from the batch activation start date.",
//     cat: "Payment"
//   }
// ];

// export default function ContactSection() {
//   // FAQ states
//   const [searchQuery, setSearchQuery] = useState("");
//   const [activeCategory, setActiveCategory] = useState("All");
//   const [openIndex, setOpenIndex] = useState<number | null>(0); // Default open first one like image

//   // Filter logic
//   const filteredFaqs = faqData.filter((faq) => {
//     const matchesCategory = activeCategory === "All" || faq.cat === activeCategory;
//     const matchesSearch = faq.q.toLowerCase().includes(searchQuery.toLowerCase()) || 
//                           faq.a.toLowerCase().includes(searchQuery.toLowerCase());
//     return matchesCategory && matchesSearch;
//   });

//   return (
//     <section id="contact" className="bg-background text-foreground py-24 px-4 sm:px-6 lg:px-8 border-t border-zinc-200 dark:border-zinc-900/60 transition-colors duration-300 space-y-32">
      
//       {/* ================= PART 1: APPLICATION REGISTRATION FORM ================= */}
//       <div className="max-w-4xl mx-auto">
//         <div className="relative overflow-hidden rounded-3xl bg-zinc-50 dark:bg-[#0b1524]/50 border border-zinc-200 dark:border-zinc-800/80 p-8 sm:p-12 shadow-xl shadow-blue-500/[0.01]">
          
//           <div className="text-center space-y-4 max-w-2xl mx-auto mb-10">
//             <span className="inline-block px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-950/50 border border-blue-200 dark:border-blue-900/40 text-[10px] font-bold text-sky-500 uppercase tracking-widest">
//               🔒 Secure Your Spot
//             </span>
//             <h2 className="text-3xl sm:text-5xl font-black text-zinc-900 dark:text-white tracking-tight">
//               Start Your <span className="text-[#25a0e2]">Journey</span> Today
//             </h2>
//             <p className="text-zinc-500 dark:text-zinc-400 text-xs sm:text-sm leading-relaxed">
//               Join thousands of developers who changed their careers with this course. Fill in your details and we'll confirm your enrollment within 24 hours.
//             </p>
//           </div>

//           {/* Form Matrix structure */}
//           <form onSubmit={(e) => e.preventDefault()} className="space-y-6">
//             <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//               <input 
//                 type="text" 
//                 placeholder="Full Name" 
//                 className="w-full px-4 py-3 text-sm rounded-xl bg-white dark:bg-[#070f1a] border border-zinc-200 dark:border-zinc-800/80 text-foreground placeholder-zinc-400 focus:outline-none focus:border-blue-500 transition-colors"
//               />
//               <input 
//                 type="email" 
//                 placeholder="Email Address" 
//                 className="w-full px-4 py-3 text-sm rounded-xl bg-white dark:bg-[#070f1a] border border-zinc-200 dark:border-zinc-800/80 text-foreground placeholder-zinc-400 focus:outline-none focus:border-blue-500 transition-colors"
//               />
//             </div>

//             <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//               <input 
//                 type="tel" 
//                 placeholder="Phone Number" 
//                 className="w-full px-4 py-3 text-sm rounded-xl bg-white dark:bg-[#070f1a] border border-zinc-200 dark:border-zinc-800/80 text-foreground placeholder-zinc-400 focus:outline-none focus:border-blue-500 transition-colors"
//               />
//               <input 
//                 type="text" 
//                 placeholder="College / Company" 
//                 className="w-full px-4 py-3 text-sm rounded-xl bg-white dark:bg-[#070f1a] border border-zinc-200 dark:border-zinc-800/80 text-foreground placeholder-zinc-400 focus:outline-none focus:border-blue-500 transition-colors"
//               />
//             </div>

//             <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//               <select className="w-full px-4 py-3 text-sm rounded-xl bg-white dark:bg-[#070f1a] border border-zinc-200 dark:border-zinc-800/80 text-zinc-500 focus:outline-none focus:border-blue-500 transition-colors appearance-none">
//                 <option>Current Qualification</option>
//                 <option>Undergraduate</option>
//                 <option>Graduate</option>
//                 <option>Working Professional</option>
//               </select>
//               <select className="w-full px-4 py-3 text-sm rounded-xl bg-white dark:bg-[#070f1a] border border-zinc-200 dark:border-zinc-800/80 text-zinc-500 focus:outline-none focus:border-blue-500 transition-colors appearance-none">
//                 <option>Skill Level</option>
//                 <option>Absolute Beginner</option>
//                 <option>Intermediate (Knows Basics)</option>
//                 <option>Advanced</option>
//               </select>
//             </div>

//             <textarea 
//               rows={4} 
//               placeholder="Any specific requirements or questions?" 
//               className="w-full px-4 py-3 text-sm rounded-xl bg-white dark:bg-[#070f1a] border border-zinc-200 dark:border-zinc-800/80 text-foreground placeholder-zinc-400 focus:outline-none focus:border-blue-500 transition-colors resize-none"
//             />

//             {/* Checkbox Term panel */}
//             <div className="flex items-center gap-3 pt-2">
//               <input 
//                 type="checkbox" 
//                 id="updates" 
//                 className="w-4 h-4 rounded border-zinc-300 dark:border-zinc-800 text-blue-500 focus:ring-0 cursor-pointer"
//               />
//               <label htmlFor="updates" className="text-zinc-500 dark:text-zinc-400 text-xs cursor-pointer select-none">
//                 I agree to receive course updates and promotional emails.
//               </label>
//             </div>

//             {/* Premium Action trigger */}
//             <button className="w-full py-4 rounded-xl text-sm font-bold bg-gradient-to-r from-[#25a0e2] to-[#4f46e5] text-white shadow-lg shadow-blue-500/10 hover:opacity-95 transition-all duration-200 active:scale-[0.99]">
//               Submit Application
//             </button>
//           </form>

//         </div>
//       </div>

//       {/* ================= PART 2: EVERYTHING YOU NEED TO KNOW (FAQ) ================= */}
//       <div id="curriculum" className="max-w-4xl mx-auto space-y-12">
//         <div className="text-center space-y-3">
//           <span className="inline-block px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-950/50 border border-blue-200 dark:border-blue-900/40 text-[11px] font-bold text-sky-500 uppercase tracking-widest">
//             🔹 Got Questions?
//           </span>
//           <h2 className="text-3xl sm:text-5xl font-black text-zinc-900 dark:text-white tracking-tight">
//             Everything You <span className="text-[#25a0e2]">Need to Know</span>
//           </h2>
//           <p className="text-zinc-500 dark:text-zinc-400 text-sm max-w-xl mx-auto leading-relaxed">
//             Browse through our most commonly asked questions. Can't find your answer? Reach out to us directly — we reply within a few hours.
//           </p>
//         </div>

//         {/* Dynamic Search Shell Panel */}
//         <div className="relative max-w-2xl mx-auto">
//           <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-400" size={18} />
//           <input 
//             type="text"
//             value={searchQuery}
//             onChange={(e) => setSearchQuery(e.target.value)}
//             placeholder="Search questions..."
//             className="w-full pl-12 pr-4 py-3.5 text-sm rounded-xl bg-zinc-50 dark:bg-[#0b1524]/40 border border-zinc-200 dark:border-zinc-800/80 text-foreground placeholder-zinc-400 focus:outline-none focus:border-blue-500/50 transition-colors"
//           />
//         </div>

//         {/* Filter Selection Chips */}
//         <div className="flex flex-wrap justify-center gap-2 max-w-xl mx-auto">
//           {categories.map((cat) => (
//             <button
//               key={cat}
//               onClick={() => setActiveCategory(cat)}
//               className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all duration-200 ${
//                 activeCategory === cat
//                   ? "bg-blue-500 text-white shadow-sm"
//                   : "bg-zinc-100 dark:bg-zinc-900 text-zinc-600 dark:text-zinc-400 hover:bg-zinc-200 dark:hover:bg-zinc-800 border border-zinc-200 dark:border-zinc-800"
//               }`}
//             >
//               {cat}
//             </button>
//           ))}
//         </div>

//         {/* Accordion Block Execution */}
//         <div className="space-y-3 pt-4">
//           {filteredFaqs.map((faq, idx) => {
//             const isOpen = openIndex === idx;
//             return (
//               <div 
//                 key={idx}
//                 className={`rounded-xl border transition-all duration-200 ${
//                   isOpen 
//                     ? "bg-zinc-50 dark:bg-[#0b1524]/60 border-blue-500/40 dark:border-blue-500/30" 
//                     : "bg-zinc-50/50 dark:bg-[#0b1524]/20 border-zinc-200 dark:border-zinc-800/80"
//                 }`}
//               >
//                 <button
//                   onClick={() => setOpenIndex(isOpen ? null : idx)}
//                   className="w-full flex items-center justify-between p-5 text-left font-bold text-sm sm:text-base text-zinc-900 dark:text-zinc-100"
//                 >
//                   <span className={isOpen ? "text-[#25a0e2]" : ""}>{faq.q}</span>
//                   <div className={`w-6 h-6 rounded-full flex items-center justify-center ${isOpen ? "bg-blue-500 text-white" : "bg-zinc-200/60 dark:bg-zinc-800 text-zinc-500"}`}>
//                     {isOpen ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
//                   </div>
//                 </button>
                
//                 {isOpen && (
//                   <div className="px-5 pb-5 text-zinc-600 dark:text-zinc-400 text-xs sm:text-sm leading-relaxed border-t border-zinc-200 dark:border-zinc-800/40 pt-4">
//                     {faq.a}
//                   </div>
//                 )}
//               </div>
//             );
//           })}
//         </div>

//         {/* Bottom Callout box indicator */}
//         <div className="p-8 rounded-2xl bg-zinc-50 dark:bg-[#0b1524]/40 border border-zinc-200 dark:border-zinc-800/80 text-center space-y-4 max-w-xl mx-auto mt-12">
//           <div>
//             <h4 className="text-base font-bold text-zinc-900 dark:text-white">Still have questions?</h4>
//             <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-1">Our team is available Mon–Sat, 9 AM–7 PM IST.</p>
//           </div>
//           <button onClick={() => {
    
    
//       const phoneNumber = "9302374166"; 
//       const message = encodeURIComponent("Hello! I have some questions regarding the MERN Stack Course.");
      
//       // WhatsApp API URL generator
//       const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
      
//       // Naye tab me WhatsApp chat open karne ke liye
//       window.open(whatsappUrl, "_blank");
//     }}className="px-6 py-2.5 rounded-xl text-xs font-bold bg-blue-500 hover:bg-blue-600 text-white shadow-md transition-all active:scale-95">
//             Contact Us Directly
//           </button>
//         </div>

//       </div>

//     </section>
//   );
// }




/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import React, { useState } from "react";
import { Search, ChevronDown, ChevronUp, Sparkles } from "lucide-react";
import { section } from "framer-motion/m";

const categories = ["All", "Course", "Learning", "Placement", "Payment", "Career"];

const faqData = [
  { q: "What exactly is the MERN Stack?", a: "MERN stands for MongoDB, Express.js, React.js, and Node.js...", cat: "Course" },
  { q: "Who is this course designed for?", a: "This course is crafted for absolute beginners...", cat: "Course" }
];

export default function ContactSection() {
  // Form State
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    collegeOrCompany: "",
    qualification: "Current Qualification",
    skillLevel: "Skill Level",
    requirements: ""
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<{ type: "success" | "error" | null; message: string }>({ type: null, message: "" });

  // FAQ states
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ type: null, message: "" });

    // ⚠️ PASTE YOUR GOOGLE DEPLOYMENT WEB APP URL HERE
    const WEB_APP_URL = "https://script.google.com/macros/s/AKfycbzs9HBRGE_2Q9v_GA5cLK-Zbjnhts2TYZ02aCZ9PZw3DiHG_lLLEs77ebbuGY721nTnvw/exec";

    try {
      const response = await fetch(WEB_APP_URL, {
        method: "POST",
      
        headers: { "Content-Type": "text/plain" }, // CORS issue se bachne ke liye text/plain use kiya h
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      if (result.result === "success") {
        setStatus({ type: "success", message: "🎉 Application submitted successfully!" });
        setFormData({
          name: "",
          email: "",
          phone: "",
          collegeOrCompany: "",
          qualification: "Current Qualification",
          skillLevel: "Skill Level",
          requirements: ""
        });
      } else {
        throw new Error();
      }
    } catch (error) {
      setStatus({ type: "error", message: "❌ Something went wrong. Please try again." });
    } finally {
      setLoading(false);
    }
  };

  const filteredFaqs = faqData.filter((faq) => {
    const matchesCategory = activeCategory === "All" || faq.cat === activeCategory;
    const matchesSearch = faq.q.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          faq.a.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="contact" className="bg-background text-foreground py-24 px-4 sm:px-6 lg:px-8 border-t border-zinc-200 dark:border-zinc-900/60 transition-colors duration-300 space-y-32">
      
      {/* ================= PART 1: APPLICATION REGISTRATION FORM ================= */}
      <div id="application-form" className="max-w-4xl mx-auto">
        <div className="relative overflow-hidden rounded-3xl bg-zinc-50 dark:bg-[#0b1524]/50 border border-zinc-200 dark:border-zinc-800/80 p-8 sm:p-12 shadow-xl shadow-blue-500/[0.01]">
          
          <div className="text-center space-y-4 max-w-2xl mx-auto mb-10">
            <span className="inline-block px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-950/50 border border-blue-200 dark:border-blue-900/40 text-[10px] font-bold text-sky-500 uppercase tracking-widest">
              🔒 Secure Your Spot
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-zinc-900 dark:text-white tracking-tight">
              Start Your <span className="text-[#25a0e2]">Journey</span> Today
            </h2>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input 
                type="text" required name="name" value={formData.name} onChange={handleInputChange}
                placeholder="Full Name" 
                className="w-full px-4 py-3 text-sm rounded-xl bg-white dark:bg-[#070f1a] border border-zinc-200 dark:border-zinc-800/80 text-foreground placeholder-zinc-400 focus:outline-none focus:border-blue-500 transition-colors"
              />
              <input 
                type="email" required name="email" value={formData.email} onChange={handleInputChange}
                placeholder="Email Address" 
                className="w-full px-4 py-3 text-sm rounded-xl bg-white dark:bg-[#070f1a] border border-zinc-200 dark:border-zinc-800/80 text-foreground placeholder-zinc-400 focus:outline-none focus:border-blue-500 transition-colors"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input 
                type="tel" required name="phone" value={formData.phone} onChange={handleInputChange}
                placeholder="Phone Number" 
                className="w-full px-4 py-3 text-sm rounded-xl bg-white dark:bg-[#070f1a] border border-zinc-200 dark:border-zinc-800/80 text-foreground placeholder-zinc-400 focus:outline-none focus:border-blue-500 transition-colors"
              />
              <input 
                type="text" required name="collegeOrCompany" value={formData.collegeOrCompany} onChange={handleInputChange}
                placeholder="College / Company" 
                className="w-full px-4 py-3 text-sm rounded-xl bg-white dark:bg-[#070f1a] border border-zinc-200 dark:border-zinc-800/80 text-foreground placeholder-zinc-400 focus:outline-none focus:border-blue-500 transition-colors"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <select name="qualification" value={formData.qualification} onChange={handleInputChange} className="w-full px-4 py-3 text-sm rounded-xl bg-white dark:bg-[#070f1a] border border-zinc-200 dark:border-zinc-800/80 text-zinc-500 focus:outline-none focus:border-blue-500 transition-colors">
                <option disabled>Current Qualification</option>
                <option>Undergraduate</option>
                <option>Graduate</option>
                <option>Working Professional</option>
              </select>
              <select name="skillLevel" value={formData.skillLevel} onChange={handleInputChange} className="w-full px-4 py-3 text-sm rounded-xl bg-white dark:bg-[#070f1a] border border-zinc-200 dark:border-zinc-800/80 text-zinc-500 focus:outline-none focus:border-blue-500 transition-colors">
                <option disabled>Skill Level</option>
                <option>Absolute Beginner</option>
                <option>Intermediate (Knows Basics)</option>
                <option>Advanced</option>
              </select>
            </div>

            <textarea 
              rows={4} name="requirements" value={formData.requirements} onChange={handleInputChange}
              placeholder="Any specific requirements or questions?" 
              className="w-full px-4 py-3 text-sm rounded-xl bg-white dark:bg-[#070f1a] border border-zinc-200 dark:border-zinc-800/80 text-foreground placeholder-zinc-400 focus:outline-none focus:border-blue-500 transition-colors resize-none"
            />

            {status.type && (
              <div className={`p-4 rounded-xl text-sm font-medium ${status.type === "success" ? "bg-emerald-500/10 text-emerald-500" : "bg-rose-500/10 text-rose-500"}`}>
                {status.message}
              </div>
            )}

            <button type="submit" disabled={loading} className="w-full py-4 rounded-xl text-sm font-bold bg-gradient-to-r from-[#25a0e2] to-[#4f46e5] text-white shadow-lg shadow-blue-500/10 hover:opacity-95 transition-all duration-200 active:scale-[0.99] disabled:opacity-50">
              {loading ? "Submitting..." : "Submit Application"}
            </button>
          </form>

        </div>
      </div>

      {/* ================= PART 2: FAQ ================= */}
      <div id="curriculum" className="max-w-4xl mx-auto space-y-12">
        <div className="text-center space-y-3">
         <span className="inline-block px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-950/50 border border-blue-200 dark:border-blue-900/40 text-[11px] font-bold text-sky-500 uppercase tracking-widest">
            🔹 Got Questions?
           </span>
           <h2 className="text-3xl sm:text-5xl font-black text-zinc-900 dark:text-white tracking-tight">
             Everything You <span className="text-[#25a0e2]">Need to Know</span>
           </h2>
           <p className="text-zinc-500 dark:text-zinc-400 text-sm max-w-xl mx-auto leading-relaxed">
             Browse through our most commonly asked questions. Can't find your answer? Reach out to us directly — we reply within a few hours.
           </p>
         </div>

        {/* Dynamic Search Shell Panel */}
         <div className="relative max-w-2xl mx-auto">
           <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-400" size={18} />
         <input 
             type="text"
             value={searchQuery}
             onChange={(e) => setSearchQuery(e.target.value)}
             placeholder="Search questions..."
             className="w-full pl-12 pr-4 py-3.5 text-sm rounded-xl bg-zinc-50 dark:bg-[#0b1524]/40 border border-zinc-200 dark:border-zinc-800/80 text-foreground placeholder-zinc-400 focus:outline-none focus:border-blue-500/50 transition-colors"
           />
         </div>
        {/* Filter Selection Chips */}
         <div className="flex flex-wrap justify-center gap-2 max-w-xl mx-auto">
           {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all duration-200 ${
                activeCategory === cat
                  ? "bg-blue-500 text-white shadow-sm"
                  : "bg-zinc-100 dark:bg-zinc-900 text-zinc-600 dark:text-zinc-400 hover:bg-zinc-200 dark:hover:bg-zinc-800 border border-zinc-200 dark:border-zinc-800"
              }`}
            >
               {cat}
             </button>
          ))}
         </div>

        {/* Accordion Block Execution */}
        <div className="space-y-3 pt-4">
          {filteredFaqs.map((faq, idx) => {
             const isOpen = openIndex === idx;
           return (
              <div 
                key={idx}
                className={`rounded-xl border transition-all duration-200 ${
                  isOpen 
                    ? "bg-zinc-50 dark:bg-[#0b1524]/60 border-blue-500/40 dark:border-blue-500/30" 
                    : "bg-zinc-50/50 dark:bg-[#0b1524]/20 border-zinc-200 dark:border-zinc-800/80"
              }`}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full flex items-center justify-between p-5 text-left font-bold text-sm sm:text-base text-zinc-900 dark:text-zinc-100"
                >
                  <span className={isOpen ? "text-[#25a0e2]" : ""}>{faq.q}</span>
                  <div className={`w-6 h-6 rounded-full flex items-center justify-center ${isOpen ? "bg-blue-500 text-white" : "bg-zinc-200/60 dark:bg-zinc-800 text-zinc-500"}`}>
                    {isOpen ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
                  </div>
                </button>
                
               {isOpen && (
                   <div className="px-5 pb-5 text-zinc-600 dark:text-zinc-400 text-xs sm:text-sm leading-relaxed border-t border-zinc-200 dark:border-zinc-800/40 pt-4">
                    {faq.a}
                   </div>
                )}
              </div>
             );
           })}
         </div>

        {/* Bottom Callout box indicator */}
        <div className="p-8 rounded-2xl bg-zinc-50 dark:bg-[#0b1524]/40 border border-zinc-200 dark:border-zinc-800/80 text-center space-y-4 max-w-xl mx-auto mt-12">
           <div>
             <h4 className="text-base font-bold text-zinc-900 dark:text-white">Still have questions?</h4>
           <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-1">Our team is available Mon–Sat, 9 AM–7 PM IST.</p>
          </div>
          <button onClick={() => {
    
    
      const phoneNumber = "9302374166"; 
      const message = encodeURIComponent("Hello! I have some questions regarding the MERN Stack Course.");
      
      // WhatsApp API URL generator
      const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
      
//       // Naye tab me WhatsApp chat open karne ke liye
      window.open(whatsappUrl, "_blank");
    }}className="px-6 py-2.5 rounded-xl text-xs font-bold bg-blue-500 hover:bg-blue-600 text-white shadow-md transition-all active:scale-95">
            Contact Us Directly
          </button>
        </div> 
      </div>
    </section>
  );
}