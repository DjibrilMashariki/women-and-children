"use client";

import { Button } from "@/components/common/Button";
import { Card } from "@/components/common/Card";
import { ROUTES } from "@/lib/utils/constants";
import Link from "next/link";
import {
  FaHeart,
  FaHandHoldingHeart,
  FaUserTie,
  FaUsers,
  FaArrowRight,
  FaCheckCircle,
} from "react-icons/fa";
import Image from "next/image";

export default function GetInvolvedPage() {
  return (
    <div className="w-full bg-black relative">
      {/* Hero Section with Fading Background Image */}
      <section className="relative min-h-[70vh] flex items-center py-20 overflow-hidden">
        {/* Background Image with Strong Fade */}
        <div className="absolute inset-0">
          <Image
            src="/images/programs/MG_2368-scaled.webp"
            alt="Background"
            fill
            className="object-cover opacity-30"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/80 to-black" />
        </div>

        <div className="container-max relative z-10">
          <div className="max-w-3xl">
            <p className="text-brand-500 font-semibold text-lg uppercase tracking-wide mb-2">
              Be Part of Change
            </p>
            <h1 className="text-5xl lg:text-7xl font-display font-bold text-white leading-tight mt-4">
              Your Action, <br />
              <span className="text-brand-500">Their Future.</span>
            </h1>
            <p className="text-xl text-neutral-300 mt-6 max-w-2xl font-light">
              Whether you donate, volunteer, or advocate, you are building a world where women and children can thrive.
            </p>
            <div className="flex flex-wrap gap-4 mt-8">
              <Link href={ROUTES.DONATE}>
                <Button size="lg" className="rounded-full px-8 bg-brand-600 hover:bg-brand-700 border-none text-white shadow-lg shadow-brand-900/50">
                  Start Giving
                </Button>
              </Link>
              <Link href="#roadmap">
                <Button variant="outline" size="lg" className="rounded-full px-8 border-neutral-600 text-white hover:bg-white/10 backdrop-blur-sm">
                  See How It Works
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Visual Roadmap Section - Black background */}
      <section id="roadmap" className="py-24 bg-black relative overflow-hidden">
        {/* Subtle background pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, rgb(249, 115, 22) 1px, transparent 0)',
            backgroundSize: '40px 40px'
          }} />
        </div>

        <div className="container-max relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-display font-bold text-white mb-4">
              Your Journey to Impact
            </h2>
            <p className="text-lg text-neutral-400">
              Three simple steps to making a lasting difference.
            </p>
          </div>

          <div className="relative grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Connecting Line (Desktop) */}
            <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-0.5 bg-gradient-to-r from-brand-900 via-brand-600 to-brand-900 z-0" />

            {/* Step 1 */}
            <div className="relative z-10 flex flex-col items-center text-center group">
              <div className="w-24 h-24 rounded-full bg-neutral-900 border-4 border-brand-600/30 flex items-center justify-center mb-6 shadow-xl shadow-brand-900/50 group-hover:scale-110 group-hover:border-brand-500 transition-all duration-500">
                <span className="text-4xl font-display font-bold text-brand-500">1</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">Choose Your Path</h3>
              <p className="text-neutral-400 leading-relaxed">
                Identify how you want to contribute—financially, with your time, or through partnership.
              </p>
            </div>

            {/* Step 2 */}
            <div className="relative z-10 flex flex-col items-center text-center group">
              <div className="w-24 h-24 rounded-full bg-neutral-900 border-4 border-brand-600/30 flex items-center justify-center mb-6 shadow-xl shadow-brand-900/50 group-hover:scale-110 group-hover:border-brand-500 transition-all duration-500 delay-100">
                <span className="text-4xl font-display font-bold text-brand-500">2</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">Take Action</h3>
              <p className="text-neutral-400 leading-relaxed">
                Complete your donation, sign up to volunteer, or contact us for partnership.
              </p>
            </div>

            {/* Step 3 */}
            <div className="relative z-10 flex flex-col items-center text-center group">
              <div className="w-24 h-24 rounded-full bg-neutral-900 border-4 border-brand-600/30 flex items-center justify-center mb-6 shadow-xl shadow-brand-900/50 group-hover:scale-110 group-hover:border-brand-500 transition-all duration-500 delay-200">
                <span className="text-4xl font-display font-bold text-brand-500">3</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">See the Impact</h3>
              <p className="text-neutral-400 leading-relaxed">
                Receive updates and stories showing exactly how your contribution changed lives.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Dynamic CTA Blocks - With background image */}
      <section className="py-24 bg-black relative overflow-hidden">
        {/* Faded background image */}
        <div className="absolute inset-0">
          <Image
            src="/images/programs/MG_2310-scaled.webp"
            alt="Background"
            fill
            className="object-cover opacity-10"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black via-black/95 to-black" />
        </div>

        <div className="container-max relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Donate Block - Featured */}
            <div className="md:col-span-2 relative rounded-3xl overflow-hidden bg-neutral-900/50 backdrop-blur-sm text-white shadow-2xl border border-neutral-800 group hover:border-brand-600/50 transition-all duration-500">
              <div className="absolute inset-0 opacity-20 group-hover:opacity-30 transition-opacity duration-500">
                <Image src="/images/hero/hero-new.webp" alt="Donate" fill className="object-cover" />
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-black via-black/90 to-transparent" />

              <div className="relative z-10 p-8 md:p-12 flex flex-col md:flex-row items-center gap-8">
                <div className="flex-1 space-y-6">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-600/20 border border-brand-500/30 text-brand-400 text-sm font-bold uppercase tracking-wider">
                    <FaHeart /> Most Urgent
                  </div>
                  <h3 className="text-4xl md:text-5xl font-display font-bold leading-tight">
                    Fuel the Mission
                  </h3>
                  <p className="text-lg text-neutral-300 max-w-xl">
                    Your financial support is the fastest way to provide food, education, and protection to those who need it most.
                  </p>
                  <div className="flex flex-wrap gap-4 pt-4">
                    <Link href={ROUTES.DONATE}>
                      <Button size="lg" className="rounded-full bg-brand-600 hover:bg-brand-700 border-none px-8">
                        Donate Now
                      </Button>
                    </Link>
                    <div className="flex items-center gap-2 text-sm text-neutral-400">
                      <FaCheckCircle className="text-green-500" /> Secure Payment
                      <FaCheckCircle className="text-green-500 ml-2" /> Tax Deductible
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Volunteer Block */}
            <Card hover className="flex flex-col bg-neutral-900/80 backdrop-blur-sm border-neutral-800 hover:border-brand-600/50 shadow-xl p-8 h-full transition-all duration-300">
              <div className="w-16 h-16 rounded-2xl bg-blue-900/50 text-blue-400 flex items-center justify-center mb-6 text-3xl border border-blue-800">
                <FaHandHoldingHeart />
              </div>
              <h3 className="text-3xl font-display font-bold text-white mb-4">
                Volunteer
              </h3>
              <p className="text-neutral-400 mb-8 flex-grow leading-relaxed">
                Join our team on the ground or remotely. Your skills can help build schools, mentor youth, or organize community events.
              </p>
              <Link href={ROUTES.VOLUNTEERS}>
                <Button variant="outline" className="w-full rounded-full border-neutral-700 text-white hover:bg-white/10">
                  View Opportunities <FaArrowRight className="ml-2" />
                </Button>
              </Link>
            </Card>

            {/* Partner Block */}
            <Card hover className="flex flex-col bg-neutral-900/80 backdrop-blur-sm border-neutral-800 hover:border-brand-600/50 shadow-xl p-8 h-full transition-all duration-300">
              <div className="w-16 h-16 rounded-2xl bg-purple-900/50 text-purple-400 flex items-center justify-center mb-6 text-3xl border border-purple-800">
                <FaUserTie />
              </div>
              <h3 className="text-3xl font-display font-bold text-white mb-4">
                Partner With Us
              </h3>
              <p className="text-neutral-400 mb-8 flex-grow leading-relaxed">
                Corporate sponsorships, CSR initiatives, and strategic partnerships amplify our impact. Let's build something together.
              </p>
              <Link href={ROUTES.CONTACT}>
                <Button variant="outline" className="w-full rounded-full border-neutral-700 text-white hover:bg-white/10">
                  Contact Partnership Team <FaArrowRight className="ml-2" />
                </Button>
              </Link>
            </Card>
          </div>
        </div>
      </section>

      {/* Volunteer Opportunities Preview - Black background */}
      <section className="py-24 bg-black border-t border-neutral-800 relative">
        <div className="container-max">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div>
              <h2 className="text-4xl font-display font-bold text-white mb-4">
                Open Roles
              </h2>
              <p className="text-lg text-neutral-400 max-w-xl">
                We are currently looking for passionate individuals to fill these key volunteer positions.
              </p>
            </div>
            <Link href={ROUTES.VOLUNTEERS}>
              <Button variant="ghost" className="text-brand-500 hover:bg-brand-900/20">
                View All Roles <FaArrowRight className="ml-2" />
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                role: "Program Assistant",
                commitment: "5-10 hrs/week",
                type: "Remote / On-site",
                description: "Support program implementation and community engagement activities.",
              },
              {
                role: "Fundraising Coordinator",
                commitment: "Flexible",
                type: "Remote",
                description: "Help organize events and campaigns to raise awareness and funds.",
              },
              {
                role: "Data Analyst",
                commitment: "10-15 hrs/week",
                type: "Remote",
                description: "Help us track impact and improve our programs through data analysis.",
              },
            ].map((opp, idx) => (
              <div key={idx} className="group p-6 rounded-2xl bg-neutral-900/50 backdrop-blur-sm border border-neutral-800 hover:border-brand-600/50 transition-all duration-300 hover:shadow-lg hover:shadow-brand-900/20">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold text-white group-hover:text-brand-500 transition-colors">{opp.role}</h3>
                  <span className="text-xs font-bold px-2 py-1 rounded bg-neutral-800 text-neutral-400 border border-neutral-700">
                    {opp.type}
                  </span>
                </div>
                <p className="text-neutral-400 text-sm mb-6 leading-relaxed">
                  {opp.description}
                </p>
                <div className="flex items-center justify-between pt-4 border-t border-neutral-800">
                  <span className="text-xs font-semibold text-neutral-500">
                    {opp.commitment}
                  </span>
                  <span className="text-sm font-bold text-brand-500 cursor-pointer hover:text-brand-400 transition-colors">
                    Apply Now
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
