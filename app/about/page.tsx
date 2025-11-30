"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { GradientText, AnimatedCounter } from "@/components/common/AnimatedText";
import { Button } from "@/components/common/Button";
import { ROUTES } from "@/lib/utils/constants";
import { Users, Heart, Shield, Globe } from "lucide-react";
import { Card } from "@/components/common/Card";
import { AboutHero } from "@/components/ui/AboutHero";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-neutral-950 text-neutral-900 dark:text-neutral-50 transition-colors duration-300">
      <AboutHero />

      {/* Core Values Section - Asymmetric Bento Grid */}
      <section className="relative py-24 bg-neutral-50 dark:bg-black scroll-animate overflow-visible">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#ea580c_1px,transparent_1px)] [background-size:16px_16px] dark:block hidden" />

        <div className="container-max relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-display font-bold text-neutral-900 dark:text-white leading-tight">
              <span className="inline-block bg-gradient-to-r from-orange-500 to-orange-600 dark:from-orange-400 dark:to-orange-500 bg-clip-text text-transparent">Our Core Values:</span> <span className="inline-block">What Drives Us Forward</span>
            </h2>
            <p className="text-lg lg:text-xl text-neutral-600 dark:text-neutral-300 mt-6 max-w-3xl mx-auto leading-relaxed">
              In every community we serve, every program we launch, and every life we touch—these three principles remain unwavering.
            </p>
          </div>

          {/* Asymmetric Bento Grid Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 stagger-animate max-w-6xl mx-auto">
            {/* Card 1: Humanity - Large Featured Card */}
            <div className="mission-card group lg:row-span-2 relative overflow-hidden rounded-3xl border border-neutral-200 dark:border-neutral-800 hover:border-orange-300 dark:hover:border-orange-700 transition-all duration-500 cursor-default bg-white dark:bg-neutral-800 hover:shadow-2xl hover:shadow-orange-500/10 hover:-translate-y-1">
              <div className="relative p-8 lg:p-10 h-full flex flex-col">
                <div className="mb-8">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400 group-hover:scale-110 transition-transform duration-500">
                    <Heart className="w-8 h-8" />
                  </div>
                </div>

                <div className="flex-1 flex flex-col">
                  <h3 className="text-3xl font-bold text-neutral-900 dark:text-white mb-4 group-hover:text-orange-600 dark:group-hover:text-orange-400 transition-colors">
                    Humanity First
                  </h3>
                  <p className="text-lg text-neutral-600 dark:text-neutral-300 leading-relaxed flex-1">
                    Behind every statistic is a person with dreams, dignity, and potential. We refuse to see numbers—we see mothers, daughters, children, and futures waiting to unfold. Every action we take honors the inherent worth of every human being we serve.
                  </p>
                </div>
              </div>
            </div>

            {/* Card 2: Solidarity */}
            <div className="mission-card group relative overflow-hidden rounded-3xl border border-neutral-200 dark:border-neutral-800 hover:border-emerald-300 dark:hover:border-emerald-700 transition-all duration-500 cursor-default bg-white dark:bg-neutral-800 hover:shadow-xl hover:shadow-emerald-500/10 hover:-translate-y-1">
              <div className="relative p-8 h-full flex flex-col">
                <div className="mb-6">
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 group-hover:scale-110 transition-transform duration-500">
                    <Users className="w-7 h-7" />
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-neutral-900 dark:text-white mb-3 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                  Solidarity in Action
                </h3>
                <p className="text-neutral-600 dark:text-neutral-300 leading-relaxed">
                  No one builds lasting change alone. We stand shoulder-to-shoulder with communities, local leaders, and global partners.
                </p>
              </div>
            </div>

            {/* Card 3: Transparency */}
            <div className="mission-card group relative overflow-hidden rounded-3xl border border-neutral-200 dark:border-neutral-800 hover:border-blue-300 dark:hover:border-blue-700 transition-all duration-500 cursor-default bg-white dark:bg-neutral-800 hover:shadow-xl hover:shadow-blue-500/10 hover:-translate-y-1">
              <div className="relative p-8 h-full flex flex-col">
                <div className="mb-6">
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 group-hover:scale-110 transition-transform duration-500">
                    <Shield className="w-7 h-7" />
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-neutral-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  Radical Transparency
                </h3>
                <p className="text-neutral-600 dark:text-neutral-300 leading-relaxed">
                  Your trust is sacred. Every dollar donated, every hour volunteered—we track it, report it, and honor it with complete openness. No hidden agendas, just honest impact.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-24 bg-white dark:bg-neutral-950 transition-colors duration-300">
        <div className="container-max">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-display font-bold mb-6">
              <span className="inline-block bg-gradient-to-r from-orange-500 to-orange-600 dark:from-orange-400 dark:to-orange-500 bg-clip-text text-transparent">Our Vision</span>
            </h2>
            <p className="text-2xl text-neutral-600 dark:text-neutral-300 leading-relaxed font-light">
              Building a world where every human being lives in <span className="text-orange-600 font-medium">peace</span>, with <span className="text-orange-600 font-medium">dignity</span> and <span className="text-orange-600 font-medium">equity</span>.
            </p>
          </div>

          <div className="bg-neutral-50 dark:bg-neutral-900 p-10 rounded-3xl border border-neutral-100 dark:border-neutral-800 max-w-3xl mx-auto text-center">
            <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900/30 rounded-2xl flex items-center justify-center mx-auto mb-6 text-purple-600 dark:text-purple-400">
              <Globe className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold text-neutral-900 dark:text-white mb-4">A Future of Equality</h3>
            <p className="text-lg text-neutral-600 dark:text-neutral-300 leading-relaxed">
              "Changing mentalities and reforming laws so women participate in decisions and girls are supported as future leaders, not judged incapable."
            </p>
          </div>
        </div>
      </section>

      {/* Mission Statement - Enhanced Visual */}
      <section className="py-24 bg-neutral-900 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#ea580c_1px,transparent_1px)] [background-size:16px_16px]" />

        <div className="container-max relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-neutral-800 group">
                <Image
                  src="/images/programs/MG_2360-scaled.webp"
                  alt="Women and Children's Voice Mission"
                  width={800}
                  height={600}
                  className="object-cover w-full h-[500px] transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/80 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 p-8">
                  <p className="text-white font-bold text-xl">Empowering Communities</p>
                  <p className="text-neutral-300 text-sm">One voice at a time</p>
                </div>
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <p className="text-orange-500 font-bold uppercase tracking-wider mb-4">Our Mission</p>
              <h2 className="text-4xl lg:text-5xl font-display font-bold mb-8 leading-tight">
                <span className="text-white">Daily Commitment to</span> <br />
                <span className="text-orange-600">Empowerment &amp; Justice</span>
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
          </div>
        </div>
      </section>

      {/* Impact By Numbers */}
      <section className="py-24 bg-white dark:bg-neutral-950 transition-colors duration-300">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-display font-bold"><span className="inline-block bg-gradient-to-r from-orange-500 to-orange-600 dark:from-orange-400 dark:to-orange-500 bg-clip-text text-transparent">Our Impact</span></h2>
            <p className="text-xl text-neutral-600 dark:text-neutral-300 mt-4">Real numbers, real change across the DRC</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { value: 1500, label: "Women Empowered", suffix: "+" },
              { value: 800, label: "Scholarships Given", suffix: "+" },
              { value: 600, label: "Survivors Supported", suffix: "+" },
              { value: 10000, label: "Lives Touched", suffix: "+" },
            ].map((stat, idx) => (
              <div key={idx} className="p-8 bg-orange-50 dark:bg-neutral-900 rounded-3xl border border-orange-100 dark:border-neutral-800 text-center group hover:border-orange-200 dark:hover:border-orange-900 transition-colors">
                <p className="text-4xl lg:text-5xl font-black mb-2 text-orange-600 dark:text-orange-500 tabular-nums">
                  <AnimatedCounter end={stat.value} suffix={stat.suffix} />
                </p>
                <p className="text-neutral-600 dark:text-neutral-400 font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Geographic Reach */}
      <section className="py-24 bg-neutral-50 dark:bg-neutral-900 transition-colors duration-300 overflow-hidden">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-display font-bold">
              <span className="inline-block bg-gradient-to-r from-orange-500 to-orange-600 dark:from-orange-400 dark:to-orange-500 bg-clip-text text-transparent">Our Geographic Reach</span>
            </h2>
            <p className="text-lg text-neutral-600 dark:text-neutral-300 mt-4">
              Serving communities across the Democratic Republic of Congo
            </p>
          </div>

          {/* Horizontal Scroll Container for Cards */}
          <div className="flex flex-nowrap gap-4 overflow-x-auto pb-8 -mx-4 px-4 scrollbar-hide justify-start lg:justify-center">
            {[
              { name: "Rutshuru", note: "Founded Here" },
              { name: "Bukavu", note: "South Kivu" },
              { name: "Goma", note: "North Kivu" },
              { name: "Ituri", note: "Province" },
              { name: "Kinshasa", note: "Capital" },
              { name: "Kasaï", note: "Region" },
              { name: "Haut-Katanga", note: "Province" },
            ].map((location, idx) => (
              <div key={idx} className="flex-none w-48 px-6 py-6 bg-white dark:bg-neutral-800 rounded-2xl shadow-sm border border-neutral-100 dark:border-neutral-700 hover:border-orange-500 dark:hover:border-orange-500 transition-all duration-300 hover:-translate-y-1 cursor-default group">
                <div className="w-8 h-8 rounded-full bg-orange-100 dark:bg-orange-900/30 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                  <Globe className="w-4 h-4 text-orange-600 dark:text-orange-400" />
                </div>
                <p className="font-bold text-lg text-neutral-900 dark:text-white mb-1">{location.name}</p>
                <p className="text-xs text-neutral-500 dark:text-neutral-400 uppercase tracking-wide">{location.note}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Media & Contact */}
      <section className="py-24 bg-white dark:bg-neutral-950 transition-colors duration-300">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-display font-bold text-neutral-900 dark:text-white">
              Connect With Us
            </h2>
          </div>
          <div className="flex flex-wrap justify-center gap-6">
            <a
              href="https://web.facebook.com/profile.php?id=61578058671982"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-8 py-4 bg-[#1877F2] text-white rounded-xl hover:bg-[#1877F2]/90 transition-all shadow-lg hover:shadow-xl hover:-translate-y-1"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" /></svg>
              <span className="font-bold">Facebook</span>
            </a>
            <a
              href="https://www.youtube.com/@WomenandChildrensVoice"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-8 py-4 bg-[#FF0000] text-white rounded-xl hover:bg-[#FF0000]/90 transition-all shadow-lg hover:shadow-xl hover:-translate-y-1"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" /></svg>
              <span className="font-bold">YouTube</span>
            </a>
            <a
              href="https://www.linkedin.com/company/wcv-asbl-women-and-children-s-voice/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-8 py-4 bg-[#0A66C2] text-white rounded-xl hover:bg-[#0A66C2]/90 transition-all shadow-lg hover:shadow-xl hover:-translate-y-1"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>
              <span className="font-bold">LinkedIn</span>
            </a>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-neutral-50 dark:bg-neutral-900 transition-colors duration-300">
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
