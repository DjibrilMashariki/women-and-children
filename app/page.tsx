"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { RippleButton } from "@/components/common/RippleButton";
import { AnimatedCounter, GradientText } from "@/components/common/AnimatedText";
import { ParticleField, ScrollParallax } from "@/components/common/DynamicBackground";
import { SmartCTAManager } from "@/components/common/SmartCTA";
import { LiveImpactCounter } from "@/components/common/LiveImpactCounter";
import { PartnerLogos } from "@/components/common/PartnerLogos";
import { TrustBadges } from "@/components/common/TrustBadges";
import { SkipToContent } from "@/lib/hooks/useAccessibility";
import { ROUTES, PROGRAM_CATEGORIES } from "@/lib/utils/constants";
import { useScrollAnimation, useStaggeredAnimation } from "@/lib/hooks/useScrollAnimation";

export default function HomePage() {
  const [showStickyBar, setShowStickyBar] = useState(false);
  const [barDismissed, setBarDismissed] = useState(false);
  
  useScrollAnimation();
  useStaggeredAnimation('.program-card', 100);

  useEffect(() => {
    const handleScroll = () => {
      if (!barDismissed && window.scrollY > window.innerHeight) {
        setShowStickyBar(true);
      } else if (window.scrollY <= window.innerHeight) {
        setShowStickyBar(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [barDismissed]);

  const handleDonate = () => {
    window.location.href = ROUTES.DONATE;
  };

  return (
    <div className="w-full">
      <SkipToContent />
      <SmartCTAManager 
        onDonate={handleDonate}
        enableExitIntent={true}
        enableStickyBar={true}
      />
      {/* Hero Section - Modern & Minimal */}
  <section className="relative min-h-[75vh] bg-gradient-to-br from-primary-50 via-white to-secondary-50 dark:from-neutral-900 dark:via-neutral-950 dark:to-black flex items-center py-16 lg:py-20 overflow-hidden transition-colors duration-300 isolate">
        <ParticleField count={12} className="opacity-30 z-0" />
        <ScrollParallax speed={0.3} className="absolute inset-0 z-0">
          <div className="absolute top-20 right-10 w-72 h-72 bg-primary-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob" />
          <div className="absolute -bottom-8 left-20 w-72 h-72 bg-secondary-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000" />
          <div className="absolute top-40 left-40 w-72 h-72 bg-accent-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000" />
        </ScrollParallax>

        <div className="container-max relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-fadeInUp">
              <div className="space-y-4">
                <span className="inline-block px-5 py-2.5 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-full text-sm font-bold shadow-lg shadow-orange-500/30">
                   ✨ Founded 2016 in Rutshuru, North Kivu, DRC
                </span>
                <div className="space-y-2">
                  <h1 className="text-5xl lg:text-7xl font-display font-black leading-tight text-neutral-900 dark:text-white">
                    Amplifying Voices for
                  </h1>
                  <h2 className="text-5xl lg:text-7xl font-display font-black leading-tight bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-orange-600 dark:from-yellow-400 dark:to-yellow-400">
                    Women & Children
                  </h2>
                  <p className="text-2xl lg:text-4xl text-neutral-800 dark:text-white font-normal leading-tight pt-2">
                    in the Democratic Republic of Congo
                  </p>
                </div>
              </div>
              
              <p className="text-xl lg:text-2xl text-neutral-800 dark:text-white max-w-lg leading-relaxed font-light">
                Empowering women and children across the Democratic Republic of Congo through education, legal protection, psychosocial support, and economic opportunity—placing women at the center of everything we do.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 pt-6">
                <Link href={ROUTES.DONATE}>
                  <button className="group relative px-10 py-6 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-2xl shadow-2xl hover:shadow-orange-glow-lg transform hover:scale-105 transition-all duration-300 overflow-hidden">
                    {/* Pulsing indicator */}
                    <span className="absolute -top-1 -right-1 flex h-4 w-4 z-10">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-4 w-4 bg-orange-300"></span>
                    </span>
                    
                    {/* Shimmer effect */}
                    <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                    
                    <div className="flex items-center gap-3 relative z-10">
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                      </svg>
                      <div className="text-left">
                        <div className="text-xl font-bold">Donate Now</div>
                        <div className="text-sm text-orange-100">$50 supports a child for 1 month</div>
                      </div>
                      <svg className="w-5 h-5 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </div>
                  </button>
                </Link>
                
                <Link href={ROUTES.PROGRAMS}>
                  <button className="group px-8 py-6 bg-white dark:bg-neutral-900 border-2 border-neutral-900 dark:border-orange-300 text-neutral-900 dark:text-yellow-300 rounded-2xl hover:bg-neutral-900 dark:hover:bg-yellow-400 hover:text-white dark:hover:text-neutral-900 transition-all duration-300 shadow-lg">
                    <div className="flex items-center gap-3">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                      </svg>
                      <span className="text-lg font-semibold">Watch Our Impact</span>
                    </div>
                  </button>
                </Link>
              </div>

              <div className="grid grid-cols-3 gap-6 pt-10 mt-4 border-t-2 border-neutral-200">
                {[
                  { value: 1500, label: "Women Empowered", suffix: "+", icon: "👩🏾‍🎓" },
                  { value: 800, label: "Children Supported", suffix: "+", icon: "👶🏾" },
                  { value: 10000, label: "Workshop Participants", suffix: "+", icon: "📚" },
                ].map((stat) => (
                  <div key={stat.label} className="group cursor-default text-center relative">
                    {/* Background glow on hover */}
                    <div className="absolute inset-0 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl opacity-0 group-hover:opacity-10 blur-xl transition-opacity" />
                    
                    <div className="relative">
                      {/* Icon */}
                      <div className="text-3xl mb-2 group-hover:scale-110 transition-transform">{stat.icon}</div>
                      
                      {/* Number */}
                      <p className="text-4xl lg:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-600 group-hover:from-orange-600 group-hover:to-orange-700 transition-all tabular-nums">
                        <AnimatedCounter end={stat.value} suffix={stat.suffix} />
                      </p>
                      
                      {/* Label */}
                      <p className="text-sm lg:text-base text-neutral-700 mt-2 font-semibold">{stat.label}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Hero Visual - Real Image Background with Floating Impact Cards */}
            <div className="relative h-[500px] lg:h-[600px] flex items-center justify-center">
              {/* Image Background with Video Fallback */}
              <div className="absolute inset-0 rounded-3xl overflow-hidden shadow-2xl">
                {/* Primary: Real Photo Background */}
                <Image
                  src="/images/programs/MG_2346-scaled.webp"
                  alt="Women and children in our programs"
                  fill
                  priority
                  className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-700"
                  quality={90}
                />
                
                {/* Fallback: Video for browsers that support it */}
                <video 
                  autoPlay 
                  muted 
                  loop 
                  playsInline
                  className="absolute inset-0 w-full h-full object-cover opacity-0"
                >
                  <source src="/videos/wcv artisan shop.mp4" type="video/mp4" />
                </video>
                
                {/* Enhanced gradient overlay - more dramatic */}
                <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/40 to-orange-900/50 hover:from-black/50 hover:via-black/30 hover:to-orange-900/40 transition-all duration-500" />
                
                {/* Decorative corner accent */}
                <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-br from-orange-500 to-orange-600 opacity-5 blur-3xl pointer-events-none" />
              </div>
              
              {/* Floating Impact Cards - Bottom Side by Side Layout */}
              <div className="absolute bottom-6 left-6 right-6 z-20 flex flex-col lg:flex-row gap-3 lg:gap-4">
                {/* Card 1: Women Empowered */}
                <div className="group flex-1 bg-white/95 backdrop-blur-md rounded-2xl p-4 shadow-lg border border-orange-100 hover:border-orange-300 hover:shadow-lg transition-all duration-300 hover:scale-105 transform animate-fadeInUp" style={{animationDelay: '0.3s'}}>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center flex-shrink-0 shadow-md group-hover:shadow-lg group-hover:shadow-orange-500/50 transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-500">
                      <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
                      </svg>
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-600 tabular-nums group-hover:from-orange-600 group-hover:to-orange-700 transition-all duration-300">
                        <AnimatedCounter end={1500} />+
                      </div>
                      <div className="text-xs text-neutral-800 font-bold group-hover:text-neutral-900 transition-colors duration-300">Women Empowered</div>
                    </div>
                  </div>
                </div>
                
                {/* Card 2: Active Programs */}
                <div className="group flex-1 bg-white/95 backdrop-blur-md rounded-2xl p-4 shadow-lg border border-emerald-100 hover:border-emerald-300 hover:shadow-lg transition-all duration-300 hover:scale-105 transform animate-fadeInUp" style={{animationDelay: '0.4s'}}>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center flex-shrink-0 shadow-md group-hover:shadow-lg group-hover:shadow-emerald-500/50 transform group-hover:scale-110 group-hover:-rotate-12 transition-all duration-500">
                      <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
                      </svg>
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-teal-600 tabular-nums group-hover:from-emerald-600 group-hover:to-teal-700 transition-all duration-300">
                        <AnimatedCounter end={15} />+
                      </div>
                      <div className="text-xs text-neutral-800 font-bold group-hover:text-neutral-900 transition-colors duration-300">Active Programs</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Actions - Redesigned */}
      <section className="py-12 -mt-16 lg:-mt-20 relative z-10">
        <div className="container-max grid grid-cols-1 sm:grid-cols-3 gap-6">
          {[
            { 
              title: "Donate", 
              desc: "Fuel urgent programs", 
              href: ROUTES.DONATE, 
              gradient: "from-orange-500 to-orange-600",
              icon: (
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                </svg>
              ),
              highlight: true
            },
            { 
              title: "Volunteer", 
              desc: "Give time & talent", 
              href: ROUTES.GET_INVOLVED, 
              gradient: "from-emerald-600 to-teal-600",
              icon: (
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
                </svg>
              )
            },
            { 
              title: "Our Work", 
              desc: "See impact areas", 
              href: ROUTES.PROGRAMS, 
              gradient: "from-blue-600 to-indigo-600",
              icon: (
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
                  <path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd" />
                </svg>
              )
            },
          ].map((item) => (
            <Link key={item.title} href={item.href} className="group">
              <div className={`relative p-8 rounded-3xl bg-white shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden border-2 ${item.highlight ? 'border-orange-200' : 'border-neutral-100'} group-hover:border-transparent`}>
                {/* Gradient overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                
                {/* Pulse effect for highlighted card */}
                {item.highlight && (
                  <div className="absolute -inset-1 bg-gradient-to-r from-orange-500 to-orange-600 rounded-3xl blur-lg opacity-30 group-hover:opacity-50 animate-pulse" />
                )}
                
                {/* Content */}
                <div className="relative z-10">
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${item.gradient} text-white mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg`}>
                    {item.icon}
                  </div>
                  
                  <h3 className="text-2xl font-bold text-neutral-900 group-hover:text-white transition-colors duration-300 mb-2">
                    {item.title}
                  </h3>
                  
                  <p className="text-neutral-700 group-hover:text-white/90 transition-colors duration-300 mb-4">
                    {item.desc}
                  </p>
                  
                  {/* Arrow */}
                  <div className="flex items-center gap-2 text-neutral-400 group-hover:text-white transition-colors duration-300">
                    <span className="text-sm font-semibold">Learn more</span>
                    <svg className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Core Values Section - Asymmetric Bento Grid */}
      {/* Moved to About Page */}

      {/* Programs Section - Image-First Cards */}
      <section className="py-24 bg-neutral-50 scroll-animate">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-display font-bold text-neutral-900">
              <GradientText>Our Programs:</GradientText> Where Your Impact Comes to Life
            </h2>
            <p className="text-lg lg:text-xl text-neutral-800 mt-6 max-w-3xl mx-auto leading-relaxed">
              From classrooms buzzing with possibility to healthcare clinics saving lives—every program is designed with one goal: creating lasting, measurable change in the communities that need it most.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 stagger-animate">
            {PROGRAM_CATEGORIES.map((cat, idx) => {
              // Professional SVG icons for each category
              const iconSvgs = [
                // Education - Book/Graduation
                <svg key="education" className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
                </svg>,
                // Health - Heart/Medical
                <svg key="health" className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                </svg>,
                // Protection - Shield
                <svg key="protection" className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>,
                // Economic - Currency/Chart
                <svg key="economic" className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z" />
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z" clipRule="evenodd" />
                </svg>
              ];
              
              // Map authentic images to programs
              const images = [
                "/images/programs/IMG_1570-scaled.webp", // Education
                "/images/programs/MG_2200-scaled.webp", // Health
                "/images/programs/MG_2288-scaled.webp", // Protection
                "/images/programs/MG_2254-scaled.webp"  // Economic
              ];
              
              const colors = [
                "from-blue-500 to-indigo-600",
                "from-emerald-500 to-teal-600", 
                "from-orange-500 to-red-600",
                "from-amber-500 to-yellow-600"
              ];
              
              // Specific descriptions for each program
              const descriptions = [
                "Building brighter futures through literacy, vocational training, and scholarships for girls who dare to dream big.",
                "Bringing life-saving healthcare, maternal support, and nutrition programs to mothers and children in crisis zones.",
                "Creating safe havens and legal advocacy for women and children escaping violence, abuse, and exploitation.",
                "Empowering women entrepreneurs with microloans, business training, and market access to break cycles of poverty."
              ];
              
              return (
                <Link key={cat.id} href={ROUTES.PROGRAMS}>
                  <div className="program-card group cursor-pointer h-full rounded-3xl border border-neutral-200 bg-white hover:border-primary-300 transition-all duration-500 hover:shadow-2xl hover:-translate-y-3 transform overflow-hidden">
                    {/* Image Section with Gradient Overlay */}
                    <div className="relative h-48 overflow-hidden">
                      <Image
                        src={images[idx]}
                        alt={cat.label}
                        width={400}
                        height={300}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      {/* Dark gradient overlay */}
                      <div className={`absolute inset-0 bg-gradient-to-br ${colors[idx]} opacity-60 group-hover:opacity-40 transition-opacity duration-500`} />
                      
                      {/* Floating Icon Badge */}
                      <div className="absolute top-4 right-4 w-12 h-12 rounded-xl bg-white/20 backdrop-blur-md border border-white/40 flex items-center justify-center group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 shadow-lg">
                        {iconSvgs[idx]}
                      </div>
                      
                      {/* Category Tag */}
                      <div className="absolute bottom-4 left-4">
                        <span className="px-3 py-1 rounded-full bg-white/90 backdrop-blur-sm text-xs font-bold text-neutral-900">
                          {idx === 0 ? "Education" : idx === 1 ? "Health" : idx === 2 ? "Protection" : "Economic"}
                        </span>
                      </div>
                    </div>
                    
                    {/* Content Section */}
                    <div className="p-6">
                      <h3 className="text-xl font-black text-neutral-900 mb-3 group-hover:text-primary-700 transition-colors duration-300">
                        {cat.label}
                      </h3>
                      <p className="text-neutral-800 text-sm lg:text-base leading-relaxed mb-4 group-hover:text-neutral-700 transition-colors duration-300">
                        {descriptions[idx]}
                      </p>
                      
                      {/* Call to Action */}
                      <div className="flex items-center text-primary-600 font-semibold text-sm opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-x-2 group-hover:translate-x-0">
                        Explore program
                        <svg className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Impact Metrics Section - Enhanced */}
      {/* Moved to Programs Page */}

      {/* Live Impact Counter Section */}

      {/* Live Impact Counter Section */}
      <section className="py-24 bg-gradient-to-b from-white to-neutral-50 scroll-animate">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-display font-bold text-neutral-900">
              <GradientText>Live Impact:</GradientText> Changes Happening Right Now
            </h2>
            <p className="text-lg lg:text-xl text-neutral-800 mt-6 max-w-3xl mx-auto leading-relaxed">
              Watch as lives change in real-time. These numbers update every minute, showing the ongoing work your support makes possible across the Democratic Republic of Congo.
            </p>
          </div>
          <LiveImpactCounter />
        </div>
      </section>

      {/* Expandable FAQ Section */}
      {/* Moved to Donate Page */}

      {/* Partner Logos Section */}
      <PartnerLogos />

      {/* Trust Badges Section */}
      <TrustBadges />

      {/* Financial Transparency Section */}
      {/* Moved to Donate Page */}

      {/* Testimonials Section */}
      {/* Moved to Stories Page */}

      {/* Final CTA Section */}
      <section className="py-24 bg-neutral-900 text-white relative overflow-hidden">
        <div className="container-max relative z-10 text-center">
          <h2 className="text-4xl lg:text-5xl font-display font-bold mb-8">
            Ready to Make a Difference?
          </h2>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Link href={ROUTES.DONATE}>
              <RippleButton className="px-10 py-5 text-lg bg-white text-primary-600 hover:bg-neutral-50 shadow-2xl">
                Donate Now
                <svg className="w-5 h-5 ml-2 inline transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </RippleButton>
            </Link>
            <Link href={ROUTES.GET_INVOLVED}>
              <RippleButton variant="outline" className="px-10 py-5 text-lg border-white text-white hover:bg-white/20 backdrop-blur">
                Volunteer With Us
                <svg className="w-5 h-5 ml-2 inline transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </RippleButton>
            </Link>
          </div>
        </div>
      </section>

      {/* Sticky Donation Bar - Appears on scroll */}
      <div className={`fixed bottom-0 left-0 right-0 z-40 transform transition-transform duration-500 group ${
        showStickyBar && !barDismissed ? 'translate-y-0' : 'translate-y-full'
      } hover:translate-y-0`} id="sticky-donate-bar">
        <div className="bg-gradient-to-r from-orange-500 via-orange-600 to-orange-700 text-white py-4 shadow-2xl border-t-4 border-orange-400">
          <div className="container-max flex flex-col sm:flex-row items-center justify-between gap-4">
            {/* Left: Message */}
            <div className="flex items-center gap-3 flex-1">
              <div className="hidden sm:block w-12 h-12 rounded-full bg-white/20 flex items-center justify-center animate-pulse">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                </svg>
              </div>
              <div>
                <div className="text-base sm:text-lg font-bold text-white">Help Change a Life Today</div>
                <div className="text-xs sm:text-sm text-orange-100">Every contribution makes a real, measurable difference</div>
              </div>
            </div>
            
            {/* Center: Quick donation amounts */}
            <div className="flex items-center gap-2 sm:gap-3 flex-wrap sm:flex-nowrap justify-center">
              {[25, 50, 100, 250].map(amount => (
                <Link key={amount} href={`${ROUTES.DONATE}?amount=${amount}`}>
                  <button className="px-3 sm:px-4 py-1.5 sm:py-2 bg-white/20 hover:bg-white text-white hover:text-orange-600 rounded-lg font-bold transition-all duration-300 border border-white/30 hover:border-white text-sm sm:text-base">
                    ${amount}
                  </button>
                </Link>
              ))}
            </div>
            
            {/* Right: CTA & Close */}
            <div className="flex items-center gap-3">
              <Link href={ROUTES.DONATE}>
                <button className="hidden sm:block px-6 py-2 bg-white text-orange-600 font-bold rounded-lg hover:bg-orange-50 transition-all duration-300 shadow-lg">
                  Donate →
                </button>
              </Link>
              <button 
                onClick={() => setBarDismissed(true)}
                className="text-white/80 hover:text-white text-xl font-bold transition-colors"
              >
                ✕
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Sticky bar now controlled by React state - no inline script needed */}
      {/* The useEffect hook above handles scroll detection */}
    </div>
  );
}
