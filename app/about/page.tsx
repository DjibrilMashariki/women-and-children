"use client";

import { Button } from "@/components/common/Button";
import { Card, CardTitle } from "@/components/common/Card";
import { ROUTES } from "@/lib/utils/constants";
import Link from "next/link";
import Image from "next/image";
import { FaArrowRight, FaHandHoldingHeart, FaGlobeAfrica, FaUsers, FaBalanceScale, FaPeace } from "react-icons/fa";
import { GradientText, AnimatedCounter } from "@/components/common/AnimatedText";

export default function AboutPage() {
  return (
    <div className="w-full">
      {/* Hero Section - Visual Upgrade */}
      <section className="relative min-h-[80vh] flex items-center py-20 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/programs/MG_2254-scaled.webp"
            alt="Women of WCV"
            fill
            priority
            className="object-cover w-full h-full"
            quality={90}
          />
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-neutral-900/90 via-neutral-900/70 to-transparent" />
        </div>

        <div className="container-max relative z-10">
          <div className="max-w-3xl">
            <div className="inline-block px-4 py-1.5 bg-orange-600/20 backdrop-blur-md border border-orange-500/30 rounded-full mb-6">
              <span className="text-orange-400 font-bold text-sm uppercase tracking-wider">
                Since 2016
              </span>
            </div>
            <h1 className="text-5xl lg:text-7xl font-display font-black text-white leading-tight mb-6">
              Our Story, <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-yellow-400">
                Vision & Mission
              </span>
            </h1>
            <p className="text-xl text-neutral-200 leading-relaxed max-w-2xl">
              Founded in Rutshuru, North Kivu. Dedicated to defending and promoting the rights of women and children across the Democratic Republic of Congo.
            </p>
            
            <div className="flex flex-wrap gap-4 mt-8">
              <Link href="#our-story">
                <Button size="lg" className="bg-orange-600 hover:bg-orange-700 text-white border-none shadow-lg shadow-orange-600/20">
                  Read Our Story
                </Button>
              </Link>
              <Link href={ROUTES.PROGRAMS}>
                <Button variant="outline" size="lg" className="text-white border-white/30 hover:bg-white/10 backdrop-blur-sm">
                  View Programs
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Our Journey - Organization History */}
      <section id="our-story" className="py-24 bg-white dark:bg-neutral-950 transition-colors duration-300">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-br from-orange-100 to-orange-50 rounded-3xl transform -rotate-2 group-hover:rotate-0 transition-transform duration-500" />
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/programs/MG_2360-scaled.webp"
                  alt="WCV History"
                  fill
                  className="object-cover transform group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-8">
                  <p className="text-white font-bold text-xl">Established in 2016</p>
                  <p className="text-orange-200 text-sm">Rutshuru, North Kivu</p>
                </div>
              </div>
            </div>
            
            <div className="space-y-8">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-12 h-1 bg-orange-600 rounded-full" />
                  <p className="text-orange-600 dark:text-orange-400 font-bold uppercase tracking-wider text-sm">
                    Our History
                  </p>
                </div>
                <h2 className="text-4xl lg:text-5xl font-display font-bold text-neutral-900 dark:text-white leading-tight">
                  From Rutshuru to <br />
                  <span className="text-orange-600">National Impact</span>
                </h2>
              </div>
              
              <div className="space-y-6 text-lg text-neutral-600 dark:text-neutral-300 leading-relaxed">
                <p>
                  Women and Children&apos;s Voice (WCV) ASBL was founded in 2016 in Rutshuru, North Kivu Province, in the heart of the Democratic Republic of Congo. Originally named &quot;Association pour le Soutien des Mères Célibataires et leurs Enfants, FREESIA asbl,&quot; our organization evolved to address the broader challenges faced by women and children in conflict-affected regions.
                </p>
                <p>
                  Born from deep concern over persistent challenges—violence, discrimination, and the devastating consequences of armed conflict—WCV emerged as a beacon of hope. Today, we serve communities across the DRC, from Bukavu to Goma, Ituri to Kinshasa.
                </p>
              </div>

              <div className="flex items-center gap-4 pt-4">
                <Link href={ROUTES.PROGRAMS}>
                  <Button size="lg" className="bg-neutral-900 text-white hover:bg-orange-600 transition-colors duration-300">
                    Explore Our Programs <FaArrowRight className="ml-2" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section - Asymmetric Bento Grid */}
      <section className="relative py-24 bg-gradient-to-b from-neutral-50 via-neutral-100 to-neutral-50 scroll-animate overflow-visible">
        <div className="container-max relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-display font-bold text-neutral-900 leading-tight">
              <GradientText>Our Core Values:</GradientText> <span className="inline-block">What Drives Us Forward</span>
            </h2>
            <p className="text-lg lg:text-xl text-neutral-800 mt-6 max-w-3xl mx-auto leading-relaxed">
              In every community we serve, every program we launch, and every life we touch—these three principles remain unwavering. They&apos;re not just words on a page; they&apos;re the heartbeat of everything we do.
            </p>
          </div>
          
          {/* Asymmetric Bento Grid Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 stagger-animate max-w-6xl mx-auto">
            {/* Card 1: Humanity - Large Featured Card (2 rows) with Blended Image */}
            <div className="mission-card group lg:row-span-2 relative overflow-hidden rounded-3xl border border-neutral-200 hover:border-orange-300 transition-all duration-500 cursor-default bg-white hover:shadow-2xl hover:shadow-orange-500/20 hover:-translate-y-2 isolate">
              {/* Background Image - Blended into design */}
              <div className="absolute inset-0 z-0">
                <Image
                  src="/images/programs/MG_2360-scaled.webp"
                  alt="Community members in our programs"
                  fill
                  className="object-cover opacity-20 group-hover:opacity-25 group-hover:scale-105 transition-all duration-700"
                  quality={85}
                  priority={false}
                />
                {/* Gradient overlay for smooth blend */}
                <div className="absolute inset-0 bg-gradient-to-br from-orange-50/90 via-white/85 to-orange-50/90" />
              </div>
              
              <div className="relative z-20 p-10 h-full flex flex-col">
                {/* Icon Badge with enhanced styling */}
                <div className="mb-8">
                  <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-orange-500 to-orange-600 shadow-lg group-hover:shadow-xl group-hover:shadow-orange-500/50 transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                    <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
                
                {/* Content */}
                <div className="flex-1 flex flex-col">
                  <h3 className="text-3xl lg:text-4xl font-black text-neutral-900 mb-4 group-hover:text-orange-700 transition-colors duration-300">
                    Humanity First
                  </h3>
                  <p className="text-base lg:text-lg text-neutral-800 leading-relaxed mb-6 flex-1">
                    Behind every statistic is a person with dreams, dignity, and potential. We refuse to see numbers—we see mothers, daughters, children, and futures waiting to unfold. Every action we take honors the inherent worth of every human being we serve.
                  </p>
                  
                  {/* Featured Stat with enhanced background */}
                  <div className="pt-6 border-t border-neutral-200 group-hover:border-orange-200 transition-colors duration-300 bg-white/60 backdrop-blur-sm rounded-xl px-4 -mx-4">
                    <div className="flex items-center gap-4">
                      <div className="flex-1">
                        <div className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-600">
                          2,300+
                        </div>
                        <div className="text-sm text-neutral-700 mt-1">Lives Touched</div>
                      </div>
                      <div className="w-16 h-16 rounded-xl bg-orange-100 group-hover:bg-orange-200 flex items-center justify-center transition-colors duration-300 shadow-md">
                        <svg className="w-8 h-8 text-orange-600" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Card 2: Solidarity - Medium Card */}
            <div className="mission-card group relative overflow-hidden rounded-3xl border border-neutral-200 hover:border-emerald-300 transition-all duration-500 cursor-default bg-gradient-to-br from-emerald-50 to-white hover:shadow-2xl hover:shadow-emerald-500/20 hover:-translate-y-2">
              {/* Gradient Background Blob */}
              <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-full blur-3xl opacity-0 group-hover:opacity-10 transition-opacity duration-700" />
              
              <div className="relative p-8 h-full flex flex-col">
                {/* Icon */}
                <div className="mb-6">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-600 shadow-lg group-hover:shadow-xl group-hover:shadow-emerald-500/50 transform group-hover:scale-110 group-hover:-rotate-6 transition-all duration-500">
                    <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
                    </svg>
                  </div>
                </div>
                
                {/* Content */}
                <div className="flex-1 flex flex-col">
                  <h3 className="text-2xl lg:text-3xl font-black text-neutral-900 mb-3 group-hover:text-emerald-700 transition-colors duration-300">
                    Solidarity in Action
                  </h3>
                  <p className="text-base lg:text-lg text-neutral-800 leading-relaxed flex-1">
                    No one builds lasting change alone. We stand shoulder-to-shoulder with communities, local leaders, and global partners—because together, we&apos;re unstoppable in our pursuit of peace, empowerment, and justice.
                  </p>
                  
                  {/* Animated Progress Bar */}
                  <div className="mt-6 pt-4 border-t border-neutral-200 group-hover:border-emerald-200 transition-colors duration-300">
                    <div className="flex items-center justify-between text-xs text-neutral-700 mb-2">
                      <span>Community Partnerships</span>
                      <span className="font-bold">25+</span>
                    </div>
                    <div className="h-2 bg-neutral-200 rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-emerald-500 to-teal-600 rounded-full w-0 group-hover:w-[85%] transition-all duration-1000 ease-out" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Card 3: Transparency - Medium Card */}
            <div className="mission-card group relative overflow-hidden rounded-3xl border border-neutral-200 hover:border-blue-300 transition-all duration-500 cursor-default bg-gradient-to-br from-blue-50 to-white hover:shadow-2xl hover:shadow-blue-500/20 hover:-translate-y-2">
              {/* Gradient Background Blob */}
              <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full blur-3xl opacity-0 group-hover:opacity-10 transition-opacity duration-700" />
              
              <div className="relative p-8 h-full flex flex-col">
                {/* Icon */}
                <div className="mb-6">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-600 shadow-lg group-hover:shadow-xl group-hover:shadow-blue-500/50 transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                    <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
                
                {/* Content */}
                <div className="flex-1 flex flex-col">
                  <h3 className="text-2xl lg:text-3xl font-black text-neutral-900 mb-3 group-hover:text-blue-700 transition-colors duration-300">
                    Radical Transparency
                  </h3>
                  <p className="text-base lg:text-lg text-neutral-800 leading-relaxed flex-1">
                    Your trust is sacred. Every dollar donated, every hour volunteered, every partnership formed—we track it, report it, and honor it with complete openness. No hidden agendas, just honest impact.
                  </p>
                  
                  {/* Trust Badge */}
                  <div className="mt-6 pt-4 border-t border-neutral-200 group-hover:border-blue-200 transition-colors duration-300">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-blue-100 group-hover:bg-blue-200 flex items-center justify-center transition-colors duration-300">
                        <svg className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <div className="flex-1">
                        <div className="text-sm font-bold text-neutral-900">100% Accountability</div>
                        <div className="text-xs text-neutral-700">Full financial reporting</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision Section - Enhanced */}
      <section className="py-24 bg-neutral-50 dark:bg-neutral-900 transition-colors duration-300">
        <div className="container-max">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-display font-bold text-neutral-900 dark:text-white mb-6">
              Our Vision
            </h2>
            <p className="text-xl text-neutral-600 dark:text-neutral-300 leading-relaxed">
              Building a world where every human being lives in <span className="text-orange-600 font-bold">peace</span>, with <span className="text-orange-600 font-bold">dignity</span> and <span className="text-orange-600 font-bold">equity</span>.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Vision Card 1 */}
            <div className="bg-white dark:bg-neutral-800 p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-neutral-100 dark:border-neutral-700 group">
              <div className="w-14 h-14 bg-orange-100 dark:bg-orange-900/30 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <FaPeace className="text-3xl text-orange-600 dark:text-orange-400" />
              </div>
              <h3 className="text-2xl font-bold text-neutral-900 dark:text-white mb-4">Peace</h3>
              <p className="text-neutral-600 dark:text-neutral-300 leading-relaxed">
                Not just the absence of conflict, but a living balance based on mutual respect. In a region marked by war, peace is a vital urgency we strive for daily.
              </p>
            </div>

            {/* Vision Card 2 */}
            <div className="bg-white dark:bg-neutral-800 p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-neutral-100 dark:border-neutral-700 group">
              <div className="w-14 h-14 bg-blue-100 dark:bg-blue-900/30 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <FaBalanceScale className="text-3xl text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-2xl font-bold text-neutral-900 dark:text-white mb-4">Social Justice</h3>
              <p className="text-neutral-600 dark:text-neutral-300 leading-relaxed">
                A Congo where wealth benefits all, not just a minority. Where women have access to land and entrepreneurship, and children find their place in society.
              </p>
            </div>

            {/* Vision Card 3 */}
            <div className="bg-white dark:bg-neutral-800 p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-neutral-100 dark:border-neutral-700 group">
              <div className="w-14 h-14 bg-purple-100 dark:bg-purple-900/30 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <FaUsers className="text-3xl text-purple-600 dark:text-purple-400" />
              </div>
              <h3 className="text-2xl font-bold text-neutral-900 dark:text-white mb-4">Gender Equality</h3>
              <p className="text-neutral-600 dark:text-neutral-300 leading-relaxed">
                Changing mentalities and reforming laws so women participate in decisions and girls are supported as future leaders, not judged incapable.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Statement - Enhanced */}
      <section className="py-24 bg-neutral-900 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#ea580c_1px,transparent_1px)] [background-size:16px_16px]" />
        
        <div className="container-max relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-orange-500 font-bold uppercase tracking-wider mb-4">Our Mission</p>
              <h2 className="text-4xl lg:text-5xl font-display font-bold text-white mb-8 leading-tight">
                Daily Commitment to <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-yellow-400">Empowerment & Justice</span>
              </h2>
              <p className="text-xl text-neutral-300 leading-relaxed mb-8">
                To support, strategically and financially, women&apos;s groups and children&apos;s structures in their struggle for empowerment and equality of gender-related rights.
              </p>
              <Link href={ROUTES.GET_INVOLVED}>
                <Button size="lg" className="bg-white text-neutral-900 hover:bg-orange-500 hover:text-white transition-all duration-300">
                  Join Our Mission
                </Button>
              </Link>
            </div>

            <div className="space-y-6">
              <div className="bg-white/5 backdrop-blur-md border border-white/10 p-8 rounded-2xl hover:bg-white/10 transition-colors duration-300">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-orange-500/20 rounded-lg">
                    <FaHandHoldingHeart className="text-2xl text-orange-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">Supporting Women&apos;s Groups</h3>
                    <p className="text-neutral-400 leading-relaxed">
                      Strengthening capacities, facilitating financing, and providing leadership tools. We believe a well-structured group is an engine of social transformation.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white/5 backdrop-blur-md border border-white/10 p-8 rounded-2xl hover:bg-white/10 transition-colors duration-300">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-blue-500/20 rounded-lg">
                    <FaGlobeAfrica className="text-2xl text-blue-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">Supporting Children&apos;s Structures</h3>
                    <p className="text-neutral-400 leading-relaxed">
                      Ensuring every child has a dignified, secure childhood filled with hope through education, nutrition, and safe environments to learn, play, and heal.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact By Numbers */}
      <section className="py-24 bg-white dark:bg-neutral-950 transition-colors duration-300">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-display font-bold text-neutral-900 dark:text-white">Our Impact</h2>
            <p className="text-xl text-neutral-600 dark:text-neutral-300 mt-4">Real numbers, real change across the DRC</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: 1500, label: "Women Empowered Through Microfinance", suffix: "+" },
              { value: 800, label: "Children Receiving Scholarships", suffix: "+" },
              { value: 600, label: "Violence Survivors Supported", suffix: "+" },
              { value: 10000, label: "Workshop Participants", suffix: "+" },
            ].map((stat, idx) => (
              <div key={idx} className="p-8 bg-orange-50 dark:bg-neutral-800/50 rounded-2xl border border-orange-100 dark:border-neutral-700 hover:border-orange-300 dark:hover:border-orange-500 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg group">
                <p className="text-4xl lg:text-5xl font-black mb-3 text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-orange-400 dark:from-orange-400 dark:to-orange-300 tabular-nums">
                  <AnimatedCounter end={stat.value} suffix={stat.suffix} />
                </p>
                <p className="text-neutral-700 dark:text-neutral-300 font-medium leading-tight">{stat.label}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-neutral-100 dark:bg-neutral-800 rounded-full">
              <span className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
              <p className="text-neutral-600 dark:text-neutral-300 text-lg">
                <strong className="text-neutral-900 dark:text-white">200+ educational workshops</strong> organized across communities
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Geographic Reach */}
      <section className="py-20 bg-neutral-900 transition-colors duration-300">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-display font-bold text-white">
              Our Geographic Reach
            </h2>
            <p className="text-lg text-neutral-300 mt-4">
              Serving communities across the Democratic Republic of Congo
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
            {[
              { name: "Rutshuru", note: "Founded Here" },
              { name: "Bukavu", note: "South Kivu" },
              { name: "Goma", note: "North Kivu" },
              { name: "Ituri", note: "Province" },
              { name: "Kinshasa", note: "Capital" },
              { name: "Kasaï", note: "Region" },
              { name: "Haut-Katanga", note: "Province" },
            ].map((location, idx) => (
              <Card key={idx} className="text-center bg-neutral-800 transition-all duration-300 border-2 border-neutral-800 hover:border-orange-600">
                <p className="font-bold text-lg text-white">{location.name}</p>
                <p className="text-xs text-orange-400 mt-1">{location.note}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Social Media & Contact */}
      <section className="py-20 bg-white dark:bg-neutral-950 transition-colors duration-300">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-display font-bold text-neutral-900 dark:text-white">
              Connect With Us
            </h2>
            <p className="text-lg text-neutral-600 dark:text-neutral-300 mt-4">
              Follow our work and stay updated on our impact
            </p>
          </div>
          <div className="flex justify-center gap-6">
            <a
              href="https://web.facebook.com/profile.php?id=61578058671982"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-8 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
              Facebook
            </a>
            <a
              href="https://www.youtube.com/@WomenandChildrensVoice"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-8 py-4 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
              YouTube
            </a>
            <a
              href="https://www.linkedin.com/company/wcv-asbl-women-and-children-s-voice/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-8 py-4 bg-blue-700 text-white rounded-lg hover:bg-blue-800 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
              LinkedIn
            </a>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white dark:bg-neutral-900 transition-colors duration-300">
        <div className="container-max text-center">
          <h2 className="text-4xl font-display font-bold text-neutral-900 dark:text-white mb-4">
            Join Our Mission
          </h2>
          <p className="text-lg text-neutral-600 dark:text-neutral-300 mb-8 max-w-2xl mx-auto">
            Whether through donations, volunteering, or advocacy, you can be part of our story of transformation and hope.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href={ROUTES.DONATE}>
              <Button size="lg">Make a Donation</Button>
            </Link>
            <Link href={ROUTES.GET_INVOLVED}>
              <Button variant="outline" size="lg">
                Get Involved
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
