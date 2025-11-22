"use client";

import Link from "next/link";
import Image from "next/image";
import { ROUTES, PROGRAM_CATEGORIES } from "@/lib/utils/constants";
import { FaBars, FaTimes } from "react-icons/fa";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { ThemeToggle } from "@/components/common/ThemeToggle";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [showProgramsMega, setShowProgramsMega] = useState(false);
  const pathname = usePathname();

  const navItems = [
    { label: "Our Work", href: ROUTES.PROGRAMS, desc: "Programs & Impact" },
    { label: "About Us", href: ROUTES.ABOUT, desc: "Our Story & Mission" },
    { label: "Artisan Shop", href: "/artifacts", desc: "Support Women Artisans" },
    { label: "Stories", href: ROUTES.STORIES, desc: "Real Impact" },
    { label: "Get Involved", href: ROUTES.GET_INVOLVED, desc: "Join Us" },
    { label: "Contact", href: ROUTES.CONTACT, desc: "Get in Touch" },
  ];

  const isActive = (href: string) => pathname === href;

  return (
    <header className="sticky top-0 z-50 bg-neutral-900 dark:bg-black border-b border-neutral-800 dark:border-neutral-800 shadow-sm transition-colors duration-300">
      <nav className="container-max flex items-center justify-between py-2 px-4 lg:px-0">
        {/* Logo & Organization Name - Left Side */}
        <Link 
          href={ROUTES.HOME} 
          className="flex items-center gap-3 group flex-shrink-0"
        >
          {/* Logo with Orange Glow */}
          <div className="relative w-12 h-12 lg:w-14 lg:h-14 flex-shrink-0">
            {/* Orange glow effect on hover */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary-400/30 to-primary-600/30 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-all duration-500 scale-110" />
            
            {/* Logo container */}
            <div className="relative w-full h-full rounded-full overflow-hidden shadow-md group-hover:shadow-orange-glow transition-all duration-300 ring-2 ring-white group-hover:ring-primary-200">
              <Image
                src="/logo-new.svg"
                alt="Women & Children's Voice - Mother and Child Logo"
                width={56}
                height={56}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                priority
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = '/logo.svg';
                }}
              />
            </div>
          </div>
          
          {/* Enhanced Organization Name - Orange Theme */}
          <div className="hidden xs:flex flex-col justify-center py-1">
            <span className="font-display font-bold text-base sm:text-lg lg:text-xl leading-tight relative whitespace-nowrap">
              {/* Subtle blur shadow */}
              <span className="absolute inset-0 text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-primary-600 blur-sm opacity-50">
                Women and Children&apos;s Voice
              </span>
              {/* Main gradient text - Orange theme */}
              <span className="relative text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-primary-700 group-hover:from-primary-500 group-hover:to-primary-600 transition-all duration-500">
                Women and Children&apos;s Voice
              </span>
              
              {/* Shine effect */}
              <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-20 transform -translate-x-full group-hover:translate-x-full transition-all duration-1000 pointer-events-none" />
            </span>
            
            {/* Animated underline - Orange gradient */}
            <div className="relative mt-1 h-0.5 w-0 group-hover:w-full bg-gradient-to-r from-primary-500 to-primary-600 rounded-full transition-all duration-500 shadow-sm">
              <div className="absolute inset-0 bg-gradient-to-r from-primary-400 to-primary-500 blur-sm opacity-50" />
            </div>
          </div>
          
          {/* Compact mobile text */}
          <div className="flex xs:hidden flex-col justify-center">
            <span className="font-display font-bold text-sm text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-primary-700">
              WCV
            </span>
          </div>
        </Link>

        {/* Desktop Navigation - Center with Mega Menu for Programs */}
        <div className="hidden lg:flex items-center gap-1 flex-1 justify-center mx-8">
          {navItems.map((item) => {
            const isProgramsLink = item.href === ROUTES.PROGRAMS;
            
            return (
              <div
                key={item.href}
                className="relative group"
                onMouseEnter={() => isProgramsLink && setShowProgramsMega(true)}
                onMouseLeave={() => isProgramsLink && setShowProgramsMega(false)}
              >
                <Link
                  href={item.href}
                  className={`relative px-5 py-2.5 font-medium text-sm transition-all duration-300 flex items-center gap-1 rounded-lg overflow-hidden ${
                    isActive(item.href)
                      ? "text-white bg-orange-600"
                      : "text-neutral-200 hover:text-white hover:bg-neutral-800"
                  }`}
                >
                  {/* Label with subtle scale on hover */}
                  <span className="relative inline-block group-hover:scale-105 transition-transform duration-200">
                    {item.label}
                  </span>
                  
                  {/* Dropdown arrow for Programs */}
                  {isProgramsLink && (
                    <svg className="w-3 h-3 transition-transform duration-200 group-hover:rotate-180" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  )}
                  
                  {/* Description appears below on hover - Only for non-Programs items */}
                  {!isProgramsLink && (
                    <div className="absolute left-1/2 -translate-x-1/2 top-full mt-2 opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none">
                      <div className="text-xs text-neutral-600 group-hover:text-primary-600 whitespace-nowrap font-normal bg-white px-3 py-1 rounded-md shadow-lg border border-neutral-100">
                        {item.desc}
                      </div>
                    </div>
                  )}
                </Link>
                
                {/* Mega Menu for Programs - Appears on hover */}
                {isProgramsLink && showProgramsMega && (
                  <div className="absolute left-1/2 -translate-x-1/2 top-full mt-2 w-[720px] opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none group-hover:pointer-events-auto z-50">
                    <div className="bg-white dark:bg-neutral-900 rounded-2xl shadow-2xl border border-neutral-200 dark:border-neutral-800 overflow-hidden">
                      {/* Enhanced Header with Gradient Animation */}
                      <div className="bg-gradient-to-r from-primary-500 via-orange-500 to-primary-600 dark:from-neutral-800 dark:via-neutral-800 dark:to-neutral-900 px-6 py-5 relative overflow-hidden">
                        {/* Animated gradient overlay */}
                        <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/5 to-white/0 animate-pulse" />
                        
                        <div className="relative z-10">
                          <h3 className="text-lg font-bold text-white dark:text-white">Our Programs</h3>
                          <p className="text-sm text-white/90 dark:text-neutral-300 mt-1">Choose an area of impact that speaks to you</p>
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-2 gap-6 p-6">
                        {/* Program Categories */}
                        <div className="space-y-3">
                          {PROGRAM_CATEGORIES.map((program, idx) => {
                            const icons = [
                              // Education
                              <svg key="edu" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3z" />
                              </svg>,
                              // Health
                              <svg key="health" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                              </svg>,
                              // Protection
                              <svg key="protect" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                              </svg>,
                              // Economic
                              <svg key="econ" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z" clipRule="evenodd" />
                              </svg>
                            ];
                            
                            const colors = [
                              "text-blue-600 bg-blue-50 dark:text-blue-300 dark:bg-blue-950/30 hover:bg-blue-100 dark:hover:bg-blue-900/50",
                              "text-emerald-600 bg-emerald-50 dark:text-emerald-300 dark:bg-emerald-950/30 hover:bg-emerald-100 dark:hover:bg-emerald-900/50",
                              "text-orange-600 bg-orange-50 dark:text-orange-300 dark:bg-orange-950/30 hover:bg-orange-100 dark:hover:bg-orange-900/50",
                              "text-amber-600 bg-amber-50 dark:text-amber-300 dark:bg-amber-950/30 hover:bg-amber-100 dark:hover:bg-amber-900/50"
                            ];
                            
                            return (
                              <Link
                                key={program.id}
                                href={ROUTES.PROGRAMS}
                                className={`flex items-start gap-3 p-4 rounded-xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 border border-transparent ${colors[idx]} dark:border-neutral-700/50 hover:dark:border-neutral-600 shadow-sm hover:shadow-lg dark:shadow-lg group/item`}
                              >
                                <div className={`flex-shrink-0 w-11 h-11 rounded-lg flex items-center justify-center shadow-md transition-all duration-300 group-hover/item:scale-110 group-hover/item:rotate-6 ${colors[idx].split(' ')[1]} dark:${colors[idx].split(' ')[2]}`}>
                                  {icons[idx]}
                                </div>
                                <div className="flex-1 min-w-0">
                                  <div className="font-semibold text-neutral-900 dark:text-white text-sm group-hover/item:text-primary-700 dark:group-hover/item:text-orange-400 transition-colors">
                                    {program.label}
                                  </div>
                                  <div className="text-xs text-neutral-600 dark:text-neutral-400 mt-0.5">
                                    {idx === 0 ? "Literacy & training" : idx === 1 ? "Healthcare access" : idx === 2 ? "Legal advocacy" : "Microloans & skills"}
                                  </div>
                                </div>
                                <svg className="w-4 h-4 text-neutral-400 dark:text-neutral-500 group-hover/item:text-primary-600 dark:group-hover/item:text-orange-400 transition-all transform group-hover/item:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                              </Link>
                            );
                          })}
                        </div>
                        
                        {/* Featured Section - Right Side */}
                        <div className="bg-gradient-to-br from-orange-50 to-orange-100 dark:from-neutral-800 dark:to-neutral-900 rounded-xl p-6 flex flex-col border border-orange-200 dark:border-neutral-700 shadow-lg hover:shadow-xl transition-all duration-300">
                          <div className="inline-flex items-center gap-2 mb-3">
                            <span className="px-3 py-1.5 bg-gradient-to-r from-orange-600 to-orange-500 dark:from-orange-500 dark:to-orange-600 text-white text-xs font-bold rounded-full shadow-md animate-pulse">
                              ⭐ FEATURED
                            </span>
                          </div>
                          <h4 className="text-xl font-black text-neutral-900 dark:text-white mb-2">
                            Women&apos;s Empowerment
                          </h4>
                          <p className="text-sm text-neutral-700 dark:text-neutral-300 mb-4 flex-1">
                            Transforming lives through education, economic opportunity, and leadership development in conflict-affected communities.
                          </p>
                          <div className="space-y-3">
                            <div className="flex items-center gap-2 text-sm">
                              <svg className="w-4 h-4 text-orange-600 dark:text-orange-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                              </svg>
                              <span className="text-neutral-700 dark:text-neutral-300">1,500+ women empowered</span>
                            </div>
                            <div className="flex items-center gap-2 text-sm">
                              <svg className="w-4 h-4 text-orange-600 dark:text-orange-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                              </svg>
                              <span className="text-neutral-700 dark:text-neutral-300">800+ children supported</span>
                            </div>
                            <Link
                              href={ROUTES.PROGRAMS}
                              className="inline-flex items-center gap-2 mt-4 px-4 py-2 bg-orange-600 dark:bg-orange-600 hover:bg-orange-700 dark:hover:bg-orange-500 text-white text-sm font-semibold rounded-lg transition-all duration-300 shadow-md hover:shadow-lg hover:scale-105"
                            >
                              View All Programs
                              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                              </svg>
                            </Link>
                          </div>
                        </div>
                      </div>
                      
                      {/* Quick Donate Footer with Enhanced Styling */}
                      <div className="bg-neutral-50 dark:bg-neutral-800 border-t border-neutral-200 dark:border-neutral-700 px-6 py-4 flex items-center justify-between hover:bg-neutral-100 dark:hover:bg-neutral-700/50 transition-colors">
                        <div>
                          <div className="text-sm font-semibold text-neutral-900 dark:text-white">Want to make an immediate impact?</div>
                          <div className="text-xs text-neutral-600 dark:text-neutral-400 mt-0.5">Your donation goes directly to programs</div>
                        </div>
                        <Link
                          href={ROUTES.DONATE}
                          className="px-5 py-2 bg-gradient-to-r from-primary-500 to-primary-600 dark:from-primary-600 dark:to-orange-600 hover:from-primary-600 hover:to-primary-700 dark:hover:from-primary-500 dark:hover:to-orange-500 text-white font-semibold rounded-lg text-sm transition-all duration-300 shadow-md hover:shadow-lg hover:scale-105"
                        >
                          Donate Now
                        </Link>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Donate Button - Right Side with Enhanced Orange Theme */}
        <div className="flex items-center gap-3 flex-shrink-0">
          {/* Theme Toggle */}
          <ThemeToggle />
          
          <Link href={ROUTES.DONATE}>
            <button className="relative group px-6 py-2.5 font-semibold text-white transition-all duration-300 overflow-hidden rounded-lg shadow-md hover:shadow-orange-glow-lg">
              {/* Orange gradient background */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary-500 to-primary-600 transition-all duration-300" />
              
              {/* Darker overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary-600 to-primary-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              {/* Shimmer effect on hover */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-30 transform -translate-x-full group-hover:translate-x-full transition-all duration-700 pointer-events-none" />
              
              {/* Text with scale animation */}
              <span className="relative flex items-center justify-center gap-1.5 transform transition-transform duration-300 group-hover:scale-105">
                Donate Now
                <svg className="w-4 h-4 transform group-hover:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 4.5v15m7.5-7.5h-15" />
                </svg>
              </span>
            </button>
          </Link>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-white dark:text-neutral-200 hover:text-primary-400 dark:hover:text-primary-400 transition-colors p-2 rounded-lg hover:bg-neutral-800 dark:hover:bg-neutral-900"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
          </button>
        </div>
      </nav>

      {/* Mobile Navigation - Orange Theme */}
      {isOpen && (
        <div className="lg:hidden border-t border-neutral-800 dark:border-neutral-800 bg-neutral-900 dark:bg-black animate-slide-down transition-colors duration-300">
          <div className="container-max py-4 space-y-2">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`block px-4 py-3 rounded-lg font-medium transition-all duration-300 ${
                  isActive(item.href)
                    ? "bg-gradient-to-r from-primary-500 to-primary-600 text-white shadow-orange-glow"
                    : "text-white hover:bg-neutral-800 hover:text-primary-400 border border-neutral-700 hover:border-primary-500"
                }`}
                onClick={() => setIsOpen(false)}
              >
                {item.label}
                <span className={`text-xs block font-normal mt-0.5 ${
                  isActive(item.href) ? "text-white/90" : "text-neutral-400"
                }`}>
                  {item.desc}
                </span>
              </Link>
            ))}
            <Link
              href={ROUTES.DONATE}
              className="relative group block px-4 py-3 mt-4 bg-gradient-to-br from-primary-500 to-primary-600 text-white rounded-lg font-semibold text-center hover:shadow-orange-glow-lg transition-all overflow-hidden"
              onClick={() => setIsOpen(false)}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary-600 to-primary-700 opacity-0 group-hover:opacity-100 transition-opacity" />
              <span className="relative flex items-center justify-center gap-1.5">
                Donate Now
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 4.5v15m7.5-7.5h-15" />
                </svg>
              </span>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
