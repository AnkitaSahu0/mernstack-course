/* eslint-disable react/jsx-no-undef */
// /* eslint-disable react-hooks/set-state-in-effect */
// // "use client";

// // import React, { useState, useEffect } from "react";
// // import Link from "next/link";
// // import { usePathname } from "next/navigation";
// // import { Menu, X, Sun, Moon } from "lucide-react";

// // type NavLinkItem = {
// //   label: string;
// //   href: string;
// // };

// // const navLinks: NavLinkItem[] = [
// //   { label: "Home", href: "/" },
// //   { label: "About", href: "/about" },
// //   { label: "Course", href: "/course" },
// //   { label: "Features", href: "/features" },
// //   { label: "Curriculum", href: "/curriculum" },
// //   { label: "Testimonials", href: "/testimonials" },
// //   { label: "Pricing", href: "/pricing" },
// //   { label: "Contact", href: "/contact" },
// // ];

// // export default function Navbar() {
// //   const [isOpen, setIsOpen] = useState<boolean>(false);
// //   const [isDark, setIsDark] = useState<boolean>(true); // Screenshot ke mutabik default dark rakha hai
// //   const pathname = usePathname();

// //   useEffect(() => {
// //     // Initial theme setup
// //     const savedTheme = localStorage.getItem("theme");
// //     if (savedTheme === "light") {
// //       setIsDark(false);
// //       document.documentElement.classList.remove("dark");
// //     } else {
// //       setIsDark(true);
// //       document.documentElement.classList.add("dark");
// //     }
// //   }, []);

// //   const toggleTheme = () => {
// //     if (isDark) {
// //       document.documentElement.classList.remove("dark");
// //       localStorage.setItem("theme", "light");
// //       setIsDark(false);
// //     } else {
// //       document.documentElement.classList.add("dark");
// //       localStorage.setItem("theme", "dark");
// //       setIsDark(true);
// //     }
// //   };

// //   return (
// //     <nav className="fixed top-0 left-0 w-full z-50 bg-[#050b14] text-white border-b border-zinc-800/50 backdrop-blur-md transition-colors duration-300">
// //       <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
// //         <div className="flex items-center justify-between h-20">
          
// //           {/* Left Side: Logo & Branding */}
// //           <Link href="/" className="flex items-center gap-3 group">
// //             {/* SVG Logo (Matching the icon in your screenshot) */}
// //             <svg className="w-10 h-10 text-[#25a0e2]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
// //               <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"/>
// //               <path d="M12 6a6 6 0 1 0 0 12 6 6 0 0 0 0-12z" fill="#f97316" className="fill-orange-500"/>
// //               <path d="M12 10v4"/>
// //               <path d="M10 12h4"/>
// //             </svg>
// //             <div className="flex flex-col">
// //               <span className="text-xl font-black tracking-wider leading-none text-[#25a0e2]">
// //                 MERN <span className="text-[#4f46e5]">STACK</span>
// //               </span>
// //               <span className="text-[9px] tracking-[0.25em] text-zinc-400 font-semibold uppercase mt-1">
// //                 Developer Academy
// //               </span>
// //             </div>
// //           </Link>

// //           {/* Center/Right Side: Desktop Navlinks */}
// //           <div className="hidden xl:flex items-center space-x-1">
// //             {navLinks.map((link) => {
// //               // Yahan check hoga konsa link active hai (Default example ke liye agar '/' pe ho to contact highlight na ho, ya testing ke liye matching set ki hai)
// //               const isActive = pathname === link.href || (link.label === "Contact" && pathname === "/"); // Screenshot me Contact active dikh raha hai
              
// //               return (
// //                 <Link
// //                   key={link.label}
// //                   href={link.href}
// //                   className={`relative px-4 py-2 text-[15px] font-medium tracking-wide transition-colors duration-200 ${
// //                     isActive ? "text-[#25a0e2]" : "text-zinc-300 hover:text-white"
// //                   }`}
// //                 >
// //                   {link.label}
// //                   {/* Active Link Bottom Border Line Indicator */}
// //                   {isActive && (
// //                     <span className="absolute bottom-[-22px] left-4 right-4 h-[2px] bg-[#25a0e2] rounded-full" />
// //                   )}
// //                 </Link>
// //               );
// //             })}
// //           </div>

// //           {/* Right Side: Theme Toggle & Hamburger */}
// //           <div className="flex items-center gap-3">
// //             {/* Circular Theme Button matching the screenshot */}
// //             <button
// //               onClick={toggleTheme}
// //               className="p-3 rounded-full bg-zinc-900 border border-zinc-800 text-[#25a0e2] hover:bg-zinc-800/80 transition-all duration-200"
// //               aria-label="Toggle Theme"
// //             >
// //               {isDark ? <Moon size={20} className="stroke-[1.5]" /> : <Sun size={20} />}
// //             </button>

// //             {/* Hamburger Button for Mobile screens */}
// //             <button
// //               onClick={() => setIsOpen(!isOpen)}
// //               className="xl:hidden p-3 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-300 hover:text-white transition-colors"
// //             >
// //               {isOpen ? <X size={20} /> : <Menu size={20} />}
// //             </button>
// //           </div>

// //         </div>
// //       </div>

// //       {/* Mobile Dropdown Menu Drawer */}
// //       <div
// //         className={`xl:hidden absolute top-20 left-0 w-full bg-[#050b14] border-b border-zinc-800/80 px-6 py-6 space-y-2 shadow-2xl transition-all duration-300 ease-in-out ${
// //           isOpen ? "opacity-100 translate-y-0 visible" : "opacity-0 -translate-y-4 invisible"
// //         }`}
// //       >
// //         {navLinks.map((link) => {
// //           const isActive = pathname === link.href;
// //           return (
// //             <Link
// //               key={link.label}
// //               href={link.href}
// //               onClick={() => setIsOpen(false)}
// //               className={`block px-4 py-3 rounded-xl text-base font-medium transition-all ${
// //                 isActive
// //                   ? "bg-zinc-900 text-[#25a0e2] border-l-2 border-[#25a0e2]"
// //                   : "text-zinc-400 hover:bg-zinc-900/50 hover:text-white"
// //               }`}
// //             >
// //               {link.label}
// //             </Link>
// //           );
// //         })}
// //       </div>
// //     </nav>
// //   );
// // }


// "use client";

// import React, { useState, useEffect } from "react";
// import Link from "next/link";
// import { usePathname } from "next/navigation";
// import { Menu, X, Sun, Moon } from "lucide-react";

// const navLinks = [
//   { label: "Home", href: "/" , id: "home" },
//   { label: "About", href: "/about" },
//   { label: "Course", href: "/course" },
//   { label: "Features", href: "/features" },
//   { label: "Curriculum", href: "/curriculum" },
//   { label: "Testimonials", href: "/testimonials" },
//   { label: "Pricing", href: "/pricing" },
//   { label: "Contact", href: "/contact" },
// ];

// export default function Navbar() {
//   const [isOpen, setIsOpen] = useState<boolean>(false);
//   const [isDark, setIsDark] = useState<boolean>(true); // Default dark setup
//   const [mounted, setMounted] = useState<boolean>(false); // Hydration mismatch se bachne ke liye
//   const pathname = usePathname();

 
//   useEffect(() => {
//     setMounted(true);
//     const savedTheme = localStorage.getItem("theme");
    
   
//     if (savedTheme === "light") {
//       setIsDark(false);
//       document.documentElement.classList.remove("dark");
//     } else {
//       setIsDark(true);
//       document.documentElement.classList.add("dark");
//     }
//   }, []);

//   const toggleTheme = () => {
//     if (isDark) {
//       document.documentElement.classList.remove("dark");
//       localStorage.setItem("theme", "light");
//       setIsDark(false);
//     } else {
//       document.documentElement.classList.add("dark");
//       localStorage.setItem("theme", "dark");
//       setIsDark(true);
//     }
//   };


//   if (!mounted) return null;

//   return (
//     // <nav className="fixed top-0 left-0 w-full z-50 bg-[#050b14] dark:bg-[#111d31]  text-white border-b border-zinc-800/50 backdrop-blur-md transition-colors duration-300">
// <nav className="fixed top-0 left-0 w-full z-50 bg-background/80 text-zinc-900 dark:text-white border-b border-zinc-200 dark:border-zinc-800/50 backdrop-blur-md transition-colors duration-300">
//       <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex items-center justify-between h-20">
          
//           {/* Logo Branding */}
//           <Link href="/" className="flex items-center gap-3">
//             <svg className="w-10 h-10 text-[#25a0e2]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
//               <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"/>
//               <path d="M12 6a6 6 0 1 0 0 12 6 6 0 0 0 0-12z" fill="#f97316"/>
//             </svg>
//             <div className="flex flex-col">
//               <span className="text-xl font-black tracking-wider leading-none text-[#25a0e2]">
//                 MERN <span className="text-[#4f46e5]">STACK</span>
//               </span>
//               <span className="text-[9px] tracking-[0.25em] text-zinc-400 font-semibold uppercase mt-1">
//                 Developer Academy
//               </span>
//             </div>
//           </Link>

//           {/* Desktop Navlinks */}
//           <div className="hidden xl:flex items-center space-x-1">
//             {navLinks.map((link) => {
//               const isActive = pathname === link.href;
//               return (
//                 <Link
//                   key={link.label}
//                   href={link.href}
//                   className={`relative px-4 py-2 text-[15px] font-medium tracking-wide transition-colors duration-200 ${
//                     isActive ? "text-[#25a0e2]" : "text-zinc-300 hover:text-white"
//                   }`}
//                 >
//                   {link.label}
//                   {isActive && (
//                     <span className="absolute bottom-[-22px] left-4 right-4 h-[2px] bg-[#25a0e2] rounded-full" />
//                   )}
//                 </Link>
//               );
//             })}
//           </div>

//           {/* Actions: Theme Toggle & Hamburger */}
//           <div className="flex items-center gap-3">
//             <button
//               onClick={toggleTheme}
//               className="p-3 rounded-full bg-zinc-900 border border-zinc-800 text-[#25a0e2] hover:bg-zinc-800/80 transition-all duration-200"
//               aria-label="Toggle Theme"
//             >
//               {isDark ? <Moon size={20} /> : <Sun size={20} />}
//             </button>

//             <button
//               onClick={() => setIsOpen(!isOpen)}
//               className="xl:hidden p-3 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-300 hover:text-white transition-colors"
//             >
//               {isOpen ? <X size={20} /> : <Menu size={20} />}
//             </button>
//           </div>

//         </div>
//       </div>

//       {/* Mobile Menu */}
//       <div
//         className={`xl:hidden absolute top-20 left-0 w-full bg-[#050b14] border-b border-zinc-800/80 px-6 py-6 space-y-2 shadow-2xl transition-all duration-300 ease-in-out ${
//           isOpen ? "opacity-100 translate-y-0 visible" : "opacity-0 -translate-y-4 invisible"
//         }`}
//       >
//         {navLinks.map((link) => {
//           const isActive = pathname === link.href;
//           return (
//             <Link
//               key={link.label}
//               href={link.href}
//               onClick={() => setIsOpen(false)}
//               className={`block px-4 py-3 rounded-xl text-base font-medium transition-all ${
//                 isActive
//                   ? "bg-zinc-900 text-[#25a0e2] border-l-2 border-[#25a0e2]"
//                   : "text-zinc-400 hover:bg-zinc-900/50 hover:text-white"
//               }`}
//             >
//               {link.label}
//             </Link>
//           );
//         })}
//       </div>
//     </nav>
//   );
// }


"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Sun, Moon } from "lucide-react";

// const navLinks = [
//   { label: "Home", href: "/" },
//   { label: "About", href: "/about" , id: "about" },
//   { label: "Course", href: "/course" },
//   { label: "Features", href: "/features" },
//   { label: "Curriculum", href: "/curriculum" },
//   { label: "Testimonials", href: "/testimonials" },
//   { label: "Pricing", href: "/pricing" },
//   { label: "Contact", href: "/contact" },
// ];
const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Course", href: "#course" },
  { label: "Features", href: "#features" },
  { label: "Curriculum", href: "#curriculum" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Pricing", href: "#pricing" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isDark, setIsDark] = useState<boolean>(true);
  const [mounted, setMounted] = useState<boolean>(false);
  const pathname = usePathname();

  useEffect(() => {
    setMounted(true);
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "light") {
      setIsDark(false);
      document.documentElement.classList.remove("dark");
    } else {
      setIsDark(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

  const toggleTheme = () => {
    if (isDark) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setIsDark(false);
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setIsDark(true);
    }
  };

  if (!mounted) return null;

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-background/80 text-foreground border-b border-zinc-200 dark:border-zinc-800/50 backdrop-blur-md transition-colors duration-300">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-14">
        <div className="flex items-center justify-between h-20">
{/* Logo Branding Link */}
    <Link href="/" className="flex items-center group select-none">
      <div className="relative h-12 w-auto min-w-[140px] sm:h-14 transition-transform duration-200 group-hover:scale-[1.02]">
       <img
          src="/logo.png" // Direct browser routing path trigger
          alt="BeanGate IT Solutions Pvt. Ltd."
          className="h-full w-auto object-contain object-left dark:brightness-110"
          loading="eager" // Browser ko immediate bina delay load karne ka signal deta hai
        />
      </div>
    </Link>


          {/* Desktop Navlinks (MAIN FIX HERE) */}
          <div className="hidden xl:flex items-center space-x-1">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.label}
                  href={link.href}
                  /* 
                    FIX: text-zinc-700 (Light mode me dark grey)
                         hover:text-black (Light mode hover me full black)
                         dark:text-zinc-300 (Dark mode me light grey)
                         dark:hover:text-white (Dark mode hover me full white)
                  */
                  className={`relative px-4 py-2 text-[15px] font-medium tracking-wide transition-colors duration-200 ${
                    isActive 
                      ? "text-[#25a0e2]" 
                      : "text-zinc-700 hover:text-black dark:text-zinc-300 dark:hover:text-white"
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-[-22px] left-4 right-4 h-[2px] bg-[#25a0e2] rounded-full" />
                  )}
                </Link>
              );
            })}
          </div>

          {/* Actions: Theme Toggle & Hamburger */}
          <div className="flex items-center gap-3">
            <button
              onClick={toggleTheme}
              className="p-3 rounded-full bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-[#25a0e2] hover:bg-zinc-200 dark:hover:bg-zinc-800/80 transition-all duration-200"
              aria-label="Toggle Theme"
            >
              {isDark ? <Moon size={20} /> : <Sun size={20} />}
            </button>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="xl:hidden p-3 rounded-full bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-zinc-800 dark:text-zinc-200 hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-colors"
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <div
        className={`xl:hidden absolute top-20 left-0 w-full bg-background border-b border-zinc-200 dark:border-zinc-800/80 px-6 py-6 space-y-2 shadow-2xl transition-all duration-300 ease-in-out ${
          isOpen ? "opacity-100 translate-y-0 visible" : "opacity-0 -translate-y-4 invisible"
        }`}
      >
        {navLinks.map((link) => {
          const isActive = pathname === link.href;
          return (
            <Link
              key={link.label}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className={`block px-4 py-3 rounded-xl text-base font-medium transition-all ${
                isActive
                  ? "bg-zinc-100 dark:bg-zinc-900 text-[#25a0e2] border-l-2 border-[#25a0e2]"
                  : "text-zinc-800 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-900/50 hover:text-black dark:hover:text-white"
              }`}
            >
              {link.label}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}