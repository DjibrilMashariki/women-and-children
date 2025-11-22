"use client";

import { Button } from "@/components/common/Button";
import { Card, CardTitle } from "@/components/common/Card";
import { ParticleField } from "@/components/common/DynamicBackground";
import { ROUTES, TEAM_DATA } from "@/lib/utils/constants";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

export default function AboutPage() {
  return (
    <div className="w-full">
      {/* Hero Section with Dynamic Background Image Layer */}
      <section className="relative min-h-[60vh] bg-white dark:bg-neutral-900 flex items-center py-20 overflow-hidden">
        {/* Background Image Layer with Particle Effects */}
        <ParticleField 
          count={12}
          backgroundImage="/Additionals/webview/photos/MG_2368-scaled.webp"
          backgroundOpacity={0.25}
          backgroundBlendMode="overlay"
          className="opacity-30"
        />

        {/* Content Layer */}
        <div className="container-max relative z-10">
          <div className="max-w-3xl">
            <p className="text-primary-600 font-semibold text-lg uppercase tracking-wide">
              About Us
            </p>
            <h1 className="text-5xl lg:text-6xl font-display font-bold text-neutral-900 dark:text-white leading-tight mt-4">
              Our Story, Vision & Mission
            </h1>
            <p className="text-xl text-neutral-800 dark:text-neutral-100 mt-6">
              Since our founding, Women & Children has been dedicated to creating meaningful, lasting change in the lives of those most vulnerable in our communities.
            </p>
          </div>
        </div>
      </section>

      {/* Our Journey */}
      <section className="py-20 bg-white dark:bg-neutral-900">
        <div className="container-max">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="aspect-video bg-gradient-to-br from-primary-200 to-secondary-200 rounded-2xl shadow-lg flex items-center justify-center">
              <p className="text-neutral-400">Our Story Image</p>
            </div>
            <div className="space-y-6">
              <div>
                <p className="text-primary-600 font-semibold uppercase tracking-wide mb-2">
                  Our Journey
                </p>
                <h2 className="text-4xl font-display font-bold text-neutral-900 dark:text-white mb-4">
                  Founded with Purpose
                </h2>
              </div>
              <p className="text-lg text-neutral-800 dark:text-neutral-100 leading-relaxed">
                Women & Children was established by a group of passionate advocates who witnessed firsthand the transformative power of education, health services, and economic support. What started as a small community initiative has grown into a comprehensive organization serving thousands across multiple countries.
              </p>
              <p className="text-lg text-neutral-800 dark:text-neutral-100 leading-relaxed">
                Today, we operate multiple programs targeting education, healthcare, child protection, and women&apos;s economic empowerment. Our success is built on partnerships, community engagement, and an unwavering commitment to transparency and impact.
              </p>
              <Link href={ROUTES.PROGRAMS}>
                <Button size="lg">
                  Explore Our Programs <FaArrowRight className="ml-2" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-neutral-50 dark:bg-neutral-800">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-display font-bold text-neutral-900 dark:text-white">
              Our Core Values
            </h2>
            <p className="text-lg text-neutral-800 dark:text-neutral-100 mt-4 max-w-2xl mx-auto">
              These principles guide everything we do and define our organizational culture.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Compassion",
                description:
                  "We act with empathy and genuine care for every individual we serve, understanding their unique circumstances and challenges.",
              },
              {
                title: "Integrity",
                description:
                  "We maintain highest ethical standards in all our operations, decisions, and relationships with stakeholders.",
              },
              {
                title: "Transparency",
                description:
                  "We openly communicate our impacts, finances, and operations to ensure accountability to our donors and community.",
              },
              {
                title: "Sustainability",
                description:
                  "We create long-term solutions that empower communities to achieve self-sufficiency and lasting change.",
              },
            ].map((value, idx) => (
              <Card key={idx}>
                <CardTitle className="text-center">{value.title}</CardTitle>
                <p className="text-neutral-800 dark:text-neutral-300 text-sm mt-4">{value.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white dark:bg-neutral-900">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-display font-bold text-neutral-900 dark:text-white">
              Our Leadership Team
            </h2>
            <p className="text-lg text-neutral-800 dark:text-neutral-100 mt-4 max-w-2xl mx-auto">
              Experienced professionals dedicated to our mission of creating lasting impact.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {TEAM_DATA.map((member, idx) => (
              <Card key={idx} className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-primary-300 to-secondary-300 rounded-full mx-auto mb-4 flex items-center justify-center text-white font-bold text-2xl">
                  {member.initials}
                </div>
                <CardTitle>{member.name}</CardTitle>
                <p className="text-primary-600 font-semibold text-sm mt-1">{member.role}</p>
                <p className="text-neutral-800 dark:text-neutral-300 text-sm mt-3">{member.bio}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Impact By Numbers */}
      <section className="py-20 bg-gradient-to-r from-primary-600 to-secondary-600 text-white">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-display font-bold">Our Impact</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: "50K+", label: "Lives Impacted" },
              { value: "15+", label: "Active Programs" },
              { value: "5", label: "Countries Served" },
              { value: "100+", label: "Team Members" },
            ].map((stat, idx) => (
              <div key={idx}>
                <p className="text-5xl font-bold mb-2">{stat.value}</p>
                <p className="text-white/80">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white dark:bg-neutral-900">
        <div className="container-max text-center">
          <h2 className="text-4xl font-display font-bold text-neutral-900 dark:text-white mb-4">
            Join Our Mission
          </h2>
          <p className="text-lg text-neutral-800 dark:text-neutral-100 mb-8 max-w-2xl mx-auto">
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
