"use client";

import Link from "next/link";
import Image from "next/image";
import { ROUTES, PROGRAM_CATEGORIES } from "@/lib/utils/constants";
import { Menu, X, BookOpen, HeartPulse, Scale, Coins, GraduationCap, Stethoscope, Shield, Briefcase, ArrowRight } from "lucide-react";
import { useState, useRef } from "react";
import { usePathname } from "next/navigation";
import { ThemeToggle } from "@/components/common/ThemeToggle";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [showProgramsMega, setShowProgramsMega] = useState(false);
  const closeTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const pathname = usePathname();

  const handleMegaMenuEnter = () => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }
    setShowProgramsMega(true);
  };

  const handleMegaMenuLeave = () => {
    closeTimeoutRef.current = setTimeout(() => {
      setShowProgramsMega(false);
    }, 300); // 300ms delay before closing
  };

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
            <div className="absolute inset-0 bg-gradient-to-br from-brand-400/30 to-brand-600/30 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-all duration-500 scale-110" />

            {/* Logo container */}
            <div className="relative w-full h-full rounded-full overflow-hidden shadow-md group-hover:shadow-orange-glow transition-all duration-300 ring-2 ring-white group-hover:ring-brand-200">
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
              <span className="absolute inset-0 text-brand-600 blur-sm opacity-50">
                Women and Children&apos;s Voice
              </span>
              {/* Main gradient text - Orange theme */}
              <span className="relative text-brand-600 group-hover:text-brand-500 transition-all duration-500">
                Women and Children&apos;s Voice
              </span>

              {/* Shine effect */}
              <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-20 transform -translate-x-full group-hover:translate-x-full transition-all duration-1000 pointer-events-none" />
            </span>

            {/* Animated underline - Orange gradient */}
            <div className="relative mt-1 h-0.5 w-0 group-hover:w-full bg-gradient-to-r from-brand-500 to-brand-600 rounded-full transition-all duration-500 shadow-sm">
              <div className="absolute inset-0 bg-gradient-to-r from-brand-400 to-brand-500 blur-sm opacity-50" />
            </div>
          </div>

          {/* Compact mobile text */}
          <div className="flex xs:hidden flex-col justify-center">
            <span className="font-display font-bold text-sm text-brand-600">
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
                onMouseEnter={() => isProgramsLink && handleMegaMenuEnter()}
                onMouseLeave={() => isProgramsLink && handleMegaMenuLeave()}
              >
                <Link
                  href={item.href}
                  className={`relative px-5 py-2.5 font-medium text-sm transition-all duration-300 flex items-center gap-1 rounded-lg overflow-hidden ${isActive(item.href)
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
                      <div className="text-xs text-neutral-600 group-hover:text-brand-600 whitespace-nowrap font-normal bg-white px-3 py-1 rounded-md shadow-lg border border-neutral-100">
                        {item.desc}
                      </div>
                    </div>
                  )}
                </Link>

                {/* Mega Menu for Programs - Appears on hover */}
                {isProgramsLink && showProgramsMega && (
                  <div className="absolute left-1/2 -translate-x-1/2 top-full mt-4 w-[800px] opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none group-hover:pointer-events-auto z-50">
                    <div className="bg-neutral-950 rounded-2xl shadow-2xl border border-neutral-800 overflow-hidden ring-1 ring-white/10">
                      <div className="grid grid-cols-12">
                        {/* Left Side: Program Categories */}
                        <div className="col-span-8 p-6">
                          <div className="mb-6">
                            <h3 className="text-lg font-bold text-white flex items-center gap-2">
                              <span className="w-1 h-6 bg-brand-600 rounded-full"></span>
                              Our Programs
                            </h3>
                            <p className="text-sm text-neutral-400 mt-1 ml-3">
                              Choose an area of impact that speaks to you
                            </p>
                          </div>

                          <div className="grid grid-cols-2 gap-4">
                            {PROGRAM_CATEGORIES.map((program, idx) => {
                              const icons = [
                                <GraduationCap key="edu" className="w-5 h-5" />,
                                <Stethoscope key="health" className="w-5 h-5" />,
                                <Shield key="protect" className="w-5 h-5" />,
                                <Briefcase key="econ" className="w-5 h-5" />
                              ];

                              return (
                                <Link
                                  key={program.id}
                                  href={ROUTES.PROGRAMS}
                                  className="group/item flex items-start gap-4 p-4 rounded-xl bg-neutral-900/50 border border-neutral-800 hover:border-brand-600/50 hover:bg-neutral-900 transition-all duration-300"
                                >
                                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-neutral-800 group-hover/item:bg-brand-900/30 flex items-center justify-center text-neutral-400 group-hover/item:text-brand-500 transition-colors">
                                    {icons[idx]}
                                  </div>
                                  <div>
                                    <div className="font-semibold text-neutral-200 group-hover/item:text-white transition-colors">
                                      {program.label}
                                    </div>
                                    <div className="text-xs text-neutral-500 group-hover/item:text-neutral-400 mt-1">
                                      {idx === 0 ? "Literacy & training" : idx === 1 ? "Healthcare access" : idx === 2 ? "Legal advocacy" : "Microloans & skills"}
                                    </div>
                                  </div>
                                </Link>
                              );
                            })}
                          </div>
                        </div>

                        {/* Right Side: Featured & Donate */}
                        <div className="col-span-4 bg-neutral-900 p-6 border-l border-neutral-800 flex flex-col">
                          <div className="mb-4">
                            <span className="text-xs font-bold text-brand-500 tracking-wider uppercase">Featured Impact</span>
                          </div>

                          <div className="flex-1 relative group/card overflow-hidden rounded-xl bg-neutral-950 border border-neutral-800 hover:border-brand-600/30 transition-colors">
                            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/80 z-10" />
                            {/* Placeholder for featured image */}
                            <div className="absolute inset-0 bg-neutral-800 group-hover/card:scale-105 transition-transform duration-700" />

                            <div className="absolute bottom-0 left-0 right-0 p-5 z-20">
                              <h4 className="text-lg font-bold text-white mb-1">Women&apos;s Empowerment</h4>
                              <p className="text-xs text-neutral-300 mb-3 line-clamp-2">
                                Transforming lives through economic opportunity and leadership.
                              </p>
                              <Link
                                href={ROUTES.PROGRAMS}
                                className="inline-flex items-center text-xs font-bold text-brand-500 hover:text-brand-400 transition-colors"
                              >
                                Learn More <ArrowRight className="ml-1 w-3 h-3" />
                              </Link>
                            </div>
                          </div>

                          <div className="mt-6 pt-6 border-t border-neutral-800">
                            <Link
                              href={ROUTES.DONATE}
                              className="flex items-center justify-center gap-2 w-full py-3 bg-brand-600 hover:bg-brand-700 text-white font-semibold rounded-lg text-sm transition-all shadow-lg shadow-brand-900/20"
                            >
                              Donate Now
                              <HeartPulse className="w-4 h-4" />
                            </Link>
                          </div>
                        </div>
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
              <div className="absolute inset-0 bg-gradient-to-br from-brand-500 to-brand-600 transition-all duration-300" />

              {/* Darker overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-brand-600 to-brand-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

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
            className="lg:hidden text-white dark:text-neutral-200 hover:text-brand-400 dark:hover:text-brand-400 transition-colors p-2 rounded-lg hover:bg-neutral-800 dark:hover:bg-neutral-900"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
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
                className={`block px-4 py-3 rounded-lg font-medium transition-all duration-300 ${isActive(item.href)
                  ? "bg-gradient-to-r from-brand-500 to-brand-600 text-white shadow-orange-glow"
                  : "text-white hover:bg-neutral-800 hover:text-brand-400 border border-neutral-700 hover:border-brand-500"
                  }`}
                onClick={() => setIsOpen(false)}
              >
                {item.label}
                <span className={`text-xs block font-normal mt-0.5 ${isActive(item.href) ? "text-white/90" : "text-neutral-400"
                  }`}>
                  {item.desc}
                </span>
              </Link>
            ))}
            <Link
              href={ROUTES.DONATE}
              className="relative group block px-4 py-3 mt-4 bg-gradient-to-br from-brand-500 to-brand-600 text-white rounded-lg font-semibold text-center hover:shadow-orange-glow-lg transition-all overflow-hidden"
              onClick={() => setIsOpen(false)}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-brand-600 to-brand-700 opacity-0 group-hover:opacity-100 transition-opacity" />
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
