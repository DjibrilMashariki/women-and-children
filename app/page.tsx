"use client";

import React from "react";
import { HeroSection } from "@/components/ui/HeroSection";
import { ImpactStats } from "@/components/ui/ImpactStats";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ProgramCard } from "@/components/ui/ProgramCard";
import { GlassCard } from "@/components/ui/GlassCard";
import { GradientButton } from "@/components/ui/GradientButton";
import { PartnerLogos } from "@/components/common/PartnerLogos";
import { TrustBadges } from "@/components/common/TrustBadges";
import { ParticleField } from "@/components/common/DynamicBackground";
import { ROUTES } from "@/lib/utils/constants";
import Link from "next/link";
import { GraduationCap, Stethoscope, Shield, Briefcase } from "lucide-react";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-surface-light dark:bg-surface-dark overflow-x-hidden">
      {/* Hero Section */}
      <HeroSection />

      {/* Impact Stats - Floating Overlap */}
      <ImpactStats />

      {/* Our Mission / Introduction */}
      <section className="py-24 container mx-auto px-4 bg-white text-neutral-900">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="flex-1 space-y-6">
            <SectionHeading
              title="We are the voice for the voiceless."
              subtitle="Our Mission"
              className="text-neutral-900"
            />
            <p className="text-lg text-neutral-600 leading-relaxed">
              Women & Children's Voice is a non-profit organization dedicated to empowering the most vulnerable members of our society. We believe that every woman deserves the opportunity to thrive, and every child deserves a safe, nurturing environment to grow.
            </p>
            <p className="text-lg text-neutral-600 leading-relaxed">
              Through our comprehensive programs in education, healthcare, and economic empowerment, we are building a future where equality and dignity are not just ideals, but realities for all.
            </p>
            <div className="pt-4">
              <Link href={ROUTES.ABOUT}>
                <GradientButton variant="outline" className="text-brand-primary border-brand-primary hover:bg-brand-primary/10">Read Our Story</GradientButton>
              </Link>
            </div>
          </div>
          <div className="flex-1 relative">
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl transform rotate-2 hover:rotate-0 transition-transform duration-500">
              <img
                src="/images/programs/MG_2346-scaled.webp"
                alt="Community gathering"
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="absolute -top-4 -left-4 w-full h-full border-2 border-brand-primary/30 rounded-2xl -z-0 transform -rotate-2" />
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="py-24 bg-gradient-radial-dark bg-noise relative overflow-hidden">
        <div className="absolute inset-0 bg-neutral-900/50 mix-blend-multiply" />
        <div className="container mx-auto px-4 relative z-10">
          <SectionHeading
            title="Our Programs"
            subtitle="What We Do"
            centered
            className="mb-16"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <ProgramCard
              title="Education"
              description="Providing scholarships, school supplies, and vocational training to ensure every child has access to quality education."
              imageSrc="/images/programs/IMG_1570-scaled.webp"
              icon={<GraduationCap className="w-8 h-8 text-orange-500" />}
              href={ROUTES.PROGRAMS}
            />
            <ProgramCard
              title="Healthcare"
              description="Delivering essential medical care, maternal health support, and nutrition programs to remote communities."
              imageSrc="/images/programs/MG_2200-scaled.webp"
              icon={<Stethoscope className="w-8 h-8 text-orange-500" />}
              href={ROUTES.PROGRAMS}
            />
            <ProgramCard
              title="Protection"
              description="Creating safe spaces and providing legal advocacy for survivors of gender-based violence and abuse."
              imageSrc="/images/programs/MG_2288-scaled.webp"
              icon={<Shield className="w-8 h-8 text-orange-500" />}
              href={ROUTES.PROGRAMS}
            />
            <ProgramCard
              title="Economic Empowerment"
              description="Supporting women entrepreneurs with microloans, business training, and market access."
              imageSrc="/images/programs/MG_2254-scaled.webp"
              icon={<Briefcase className="w-8 h-8 text-orange-500" />}
              href={ROUTES.PROGRAMS}
            />
          </div>

          <div className="text-center mt-12">
            <Link href={ROUTES.PROGRAMS}>
              <GradientButton variant="secondary">View All Programs</GradientButton>
            </Link>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-neutral-900 z-0 bg-noise">
          <div className="absolute inset-0 bg-[url('/images/hero/hero-background.webp')] bg-cover bg-center opacity-20 mix-blend-overlay" />
          <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/20 to-brand-secondary/20" />
          <ParticleField count={15} className="opacity-50" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <GlassCard className="max-w-4xl mx-auto p-12 text-center bg-neutral-900/60 border-white/10 backdrop-blur-xl">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
              Ready to Make a Difference?
            </h2>
            <p className="text-xl text-neutral-200 mb-8 max-w-2xl mx-auto">
              Your support can change lives. Join us in our mission to empower women and protect children in the DRC.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href={ROUTES.DONATE}>
                <GradientButton size="lg" className="w-full sm:w-auto shadow-orange-glow">
                  Donate Now
                </GradientButton>
              </Link>
              <Link href={ROUTES.GET_INVOLVED}>
                <GradientButton variant="outline" size="lg" className="w-full sm:w-auto border-white text-white hover:bg-white/10">
                  Volunteer With Us
                </GradientButton>
              </Link>
            </div>
          </GlassCard>
        </div>
      </section>

      {/* Partners & Trust */}
      <section className="py-16 bg-white dark:bg-neutral-950">
        <PartnerLogos />
        <TrustBadges />
      </section>
    </main>
  );
}
