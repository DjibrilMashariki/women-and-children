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
} from "react-icons/fa";

export default function GetInvolvedPage() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] bg-gradient-to-br from-primary-50 via-white to-secondary-50 flex items-center py-20">
        <div className="container-max">
          <div className="max-w-3xl">
            <p className="text-primary-600 font-semibold text-lg uppercase tracking-wide">
              Be Part of Change
            </p>
            <h1 className="text-5xl lg:text-6xl font-display font-bold text-neutral-900 leading-tight mt-4">
              Get Involved with Our Mission
            </h1>
            <p className="text-xl text-neutral-600 mt-6">
              There are many ways to support Women & Children. Choose the path that resonates with you.
            </p>
          </div>
        </div>
      </section>

      {/* Ways to Get Involved */}
      <section className="py-20 bg-white">
        <div className="container-max">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {/* Donate */}
            <Card hover className="flex flex-col">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 rounded-full mb-4">
                <FaHeart className="w-8 h-8 text-primary-600" />
              </div>
              <h3 className="text-2xl font-bold text-neutral-900 mb-3">
                Donate
              </h3>
              <p className="text-neutral-600 mb-6 flex-grow">
                Make a financial contribution to directly fund our programs and create immediate impact in communities.
              </p>
              <Link href={ROUTES.DONATE}>
                <Button variant="outline" size="sm" className="w-full">
                  Donate Now <FaArrowRight className="ml-2" />
                </Button>
              </Link>
            </Card>

            {/* Volunteer */}
            <Card hover className="flex flex-col">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-secondary-100 rounded-full mb-4">
                <FaHandHoldingHeart className="w-8 h-8 text-secondary-600" />
              </div>
              <h3 className="text-2xl font-bold text-neutral-900 mb-3">
                Volunteer
              </h3>
              <p className="text-neutral-600 mb-6 flex-grow">
                Give your time and expertise. We have opportunities for all skill levels and schedules.
              </p>
              <Link href={ROUTES.VOLUNTEERS}>
                <Button variant="outline" size="sm" className="w-full">
                  Learn More <FaArrowRight className="ml-2" />
                </Button>
              </Link>
            </Card>

            {/* Partner */}
            <Card hover className="flex flex-col">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-accent-100 rounded-full mb-4">
                <FaUserTie className="w-8 h-8 text-accent-600" />
              </div>
              <h3 className="text-2xl font-bold text-neutral-900 mb-3">
                Corporate Partnership
              </h3>
              <p className="text-neutral-600 mb-6 flex-grow">
                Organizations can partner with us through corporate sponsorships, employee giving programs, and more.
              </p>
              <Link href={ROUTES.CONTACT}>
                <Button variant="outline" size="sm" className="w-full">
                  Get in Touch <FaArrowRight className="ml-2" />
                </Button>
              </Link>
            </Card>

            {/* Advocate */}
            <Card hover className="flex flex-col">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 rounded-full mb-4">
                <FaUsers className="w-8 h-8 text-primary-600" />
              </div>
              <h3 className="text-2xl font-bold text-neutral-900 mb-3">
                Spread the Word
              </h3>
              <p className="text-neutral-600 mb-6 flex-grow">
                Share our mission with your network and help us reach more supporters who believe in our cause.
              </p>
              <Button variant="outline" size="sm" className="w-full">
                Share Our Mission
              </Button>
            </Card>
          </div>
        </div>
      </section>

      {/* Volunteer Opportunities */}
      <section className="py-20 bg-neutral-50">
        <div className="container-max">
          <h2 className="text-4xl font-display font-bold text-center text-neutral-900 mb-12">
            Volunteer Opportunities
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                role: "Program Assistant",
                commitment: "5-10 hrs/week",
                description:
                  "Support program implementation and community engagement activities.",
              },
              {
                role: "Fundraising Coordinator",
                commitment: "Flexible",
                description:
                  "Help organize events and campaigns to raise awareness and funds.",
              },
              {
                role: "Data Analyst",
                commitment: "10-15 hrs/week",
                description:
                  "Help us track impact and improve our programs through data analysis.",
              },
              {
                role: "Communications Specialist",
                commitment: "5-10 hrs/week",
                description:
                  "Create content for social media, website, and newsletters.",
              },
              {
                role: "Mentorship Program",
                commitment: "Monthly",
                description:
                  "Mentor beneficiaries and share your professional expertise and life skills.",
              },
              {
                role: "Grant Writing",
                commitment: "Project-based",
                description:
                  "Help us secure funding by writing compelling grant proposals.",
              },
            ].map((opp, idx) => (
              <Card key={idx}>
                <h3 className="text-lg font-bold text-neutral-900">{opp.role}</h3>
                <p className="text-primary-600 font-semibold text-sm mt-2">
                  {opp.commitment}
                </p>
                <p className="text-neutral-600 text-sm mt-3">{opp.description}</p>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href={ROUTES.VOLUNTEERS}>
              <Button size="lg">Browse All Opportunities</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Impact Testimonials */}
      <section className="py-20 bg-white">
        <div className="container-max">
          <h2 className="text-4xl font-display font-bold text-center text-neutral-900 mb-12">
            Why People Get Involved
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                name: "Emily Rodriguez",
                role: "Monthly Donor",
                quote:
                  "Every month knowing my donation helps real people is the best feeling. I've been supporting for 2 years now.",
              },
              {
                name: "David Okafor",
                role: "Volunteer",
                quote:
                  "I volunteer 6 hours a month and it's the most fulfilling part of my week. The team is amazing.",
              },
              {
                name: "TechCorp Inc.",
                role: "Corporate Partner",
                quote:
                  "Our employees are passionate about this mission. We're proud to support their volunteer work.",
              },
              {
                name: "Lisa Wong",
                role: "Advocate & Donor",
                quote:
                  "I share their stories with my friends and family. Awareness is the first step to creating change.",
              },
            ].map((testimonial, idx) => (
              <Card key={idx} className="border-l-4 border-l-primary-600">
                <p className="text-neutral-700 italic mb-4">
                  &quot;{testimonial.quote}&quot;
                </p>
                <div className="pt-4 border-t border-neutral-200">
                  <p className="font-semibold text-neutral-900">
                    {testimonial.name}
                  </p>
                  <p className="text-sm text-primary-600">{testimonial.role}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-primary-600 to-secondary-600 text-white">
        <div className="container-max text-center">
          <h2 className="text-4xl font-display font-bold mb-4">
            Ready to Make a Difference?
          </h2>
          <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
            Start your journey with us today. Every contribution, whether time or resources, matters.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href={ROUTES.DONATE}>
              <Button className="bg-white text-primary-600 hover:bg-neutral-100">
                Make a Donation
              </Button>
            </Link>
            <Link href={ROUTES.VOLUNTEERS}>
              <Button variant="outline" className="border-white text-white hover:bg-white/10">
                Volunteer Today
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
