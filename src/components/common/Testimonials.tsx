"use client";

import React, { useState } from "react";
import { Star, Quote, CheckCircle, ChevronLeft, ChevronRight } from "lucide-react";

interface Testimonial {
  name: string;
  role: string;
  location: string;
  image: string;
  quote: string;
  rating: number;
  verified: boolean;
  category: "donor" | "beneficiary" | "partner";
}

export const Testimonials: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const testimonials: Testimonial[] = [
    {
      name: "Sarah Mitchell",
      role: "Monthly Donor",
      location: "Seattle, USA",
      image: "/images/testimonials/donor1.jpg",
      quote: "Seeing the real-time impact counter and before/after transformations convinced me to become a monthly donor. The transparency is unmatched.",
      rating: 5,
      verified: true,
      category: "donor",
    },
    {
      name: "Marie Kabila",
      role: "Program Beneficiary",
      location: "Goma, DRC",
      image: "/images/testimonials/beneficiary1.jpg",
      quote: "Thanks to WCV's training program, I now run a successful tailoring business supporting my three children. They changed my life.",
      rating: 5,
      verified: true,
      category: "beneficiary",
    },
    {
      name: "Dr. James Chen",
      role: "Healthcare Partner",
      location: "Doctors Without Borders",
      image: "/images/testimonials/partner1.jpg",
      quote: "WCV's collaborative approach and data-driven impact measurement makes them an exceptional partner in the humanitarian space.",
      rating: 5,
      verified: true,
      category: "partner",
    },
    {
      name: "Emily Thompson",
      role: "Corporate Sponsor",
      location: "TechCorp Foundation",
      image: "/images/testimonials/donor2.jpg",
      quote: "We've partnered with many NGOs, but WCV's accountability and measurable outcomes align perfectly with our mission.",
      rating: 5,
      verified: true,
      category: "donor",
    },
    {
      name: "Grace Lumamba",
      role: "Women's Empowerment Graduate",
      location: "Bukavu, DRC",
      image: "/images/testimonials/beneficiary2.jpg",
      quote: "From struggling single mother to business owner. WCV gave me skills, confidence, and hope for my daughters' future.",
      rating: 5,
      verified: true,
      category: "beneficiary",
    },
    {
      name: "Michael Rodriguez",
      role: "Recurring Donor",
      location: "Miami, USA",
      image: "/images/testimonials/donor3.jpg",
      quote: "The donation calculator showed me exactly how my $100/month helps 4 children. That clarity made the decision easy.",
      rating: 5,
      verified: true,
      category: "donor",
    },
  ];

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const activeTestimonial = testimonials[activeIndex];

  const getCategoryBadge = (category: string) => {
    const badges = {
      donor: { label: "Donor", color: "bg-blue-100 text-blue-700" },
      beneficiary: { label: "Beneficiary", color: "bg-emerald-100 text-emerald-700" },
      partner: { label: "Partner", color: "bg-purple-100 text-purple-700" },
    };
    return badges[category as keyof typeof badges];
  };

  return (
    <div className="w-full py-20 bg-gradient-to-b from-white to-neutral-50 dark:from-neutral-900 dark:to-neutral-800">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-sm font-semibold text-orange-600 tracking-wider uppercase mb-2 dark:text-orange-400">
            Testimonials
          </p>
          <h3 className="text-4xl font-bold text-neutral-900 mb-4 dark:text-white">
            Hear From Our Community
          </h3>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto dark:text-neutral-300">
            Real stories from donors, beneficiaries, and partners who&apos;ve experienced our impact firsthand
          </p>
        </div>

        {/* Featured Testimonial Carousel */}
        <div className="relative max-w-5xl mx-auto mb-16">
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-neutral-200 dark:bg-neutral-800 dark:border-neutral-700">
            <div className="grid md:grid-cols-5 gap-8 p-8 md:p-12">
              {/* Left: Image & Profile */}
              <div className="md:col-span-2 flex flex-col items-center text-center">
                {/* Profile Image Placeholder */}
                <div className="w-32 h-32 rounded-full bg-gradient-to-br from-orange-100 to-orange-200 mb-4 flex items-center justify-center">
                  <span className="text-4xl font-bold text-orange-600">
                    {activeTestimonial.name.charAt(0)}
                  </span>
                </div>

                {/* Name & Role */}
                <h4 className="text-xl font-bold text-neutral-900 mb-1 dark:text-white">
                  {activeTestimonial.name}
                </h4>
                <p className="text-sm text-neutral-600 mb-2 dark:text-neutral-400">
                  {activeTestimonial.role}
                </p>
                <p className="text-xs text-neutral-500 mb-4 dark:text-neutral-500">
                  📍 {activeTestimonial.location}
                </p>

                {/* Category Badge */}
                <span className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-semibold ${getCategoryBadge(activeTestimonial.category).color}`}>
                  {getCategoryBadge(activeTestimonial.category).label}
                </span>

                {/* Star Rating */}
                <div className="flex gap-1 mt-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-5 h-5 ${i < activeTestimonial.rating
                          ? "text-amber-400 fill-amber-400"
                          : "text-neutral-300"
                        }`}
                    />
                  ))}
                </div>
              </div>

              {/* Right: Quote */}
              <div className="md:col-span-3 flex flex-col justify-center">
                <Quote className="text-orange-200 dark:text-orange-900 w-12 h-12 mb-4" />
                <blockquote className="text-2xl leading-relaxed text-neutral-800 mb-6 dark:text-neutral-100">
                  &ldquo;{activeTestimonial.quote}&rdquo;
                </blockquote>

                {activeTestimonial.verified && (
                  <div className="flex items-center gap-2 text-emerald-600 dark:text-emerald-400">
                    <CheckCircle className="w-5 h-5" />
                    <span className="text-sm font-semibold">Verified Review</span>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-6 w-12 h-12 bg-white rounded-full shadow-lg border border-neutral-200 flex items-center justify-center hover:bg-orange-50 hover:border-orange-300 transition-all duration-300 dark:bg-neutral-800 dark:border-neutral-700 dark:hover:bg-neutral-700"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="text-neutral-700 dark:text-neutral-300" />
          </button>
          <button
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-6 w-12 h-12 bg-white rounded-full shadow-lg border border-neutral-200 flex items-center justify-center hover:bg-orange-50 hover:border-orange-300 transition-all duration-300 dark:bg-neutral-800 dark:border-neutral-700 dark:hover:bg-neutral-700"
            aria-label="Next testimonial"
          >
            <ChevronRight className="text-neutral-700 dark:text-neutral-300" />
          </button>

          {/* Dots Navigation */}
          <div className="flex justify-center gap-2 mt-6">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${index === activeIndex
                    ? "bg-orange-600 w-8"
                    : "bg-neutral-300 hover:bg-neutral-400"
                  }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          <div className="text-center p-6 bg-white rounded-2xl border border-neutral-200 dark:bg-neutral-800 dark:border-neutral-700">
            <p className="text-4xl font-bold text-orange-600 mb-2 dark:text-orange-400">4.9/5</p>
            <p className="text-sm text-neutral-600 dark:text-neutral-300">Average Rating</p>
          </div>
          <div className="text-center p-6 bg-white rounded-2xl border border-neutral-200 dark:bg-neutral-800 dark:border-neutral-700">
            <p className="text-4xl font-bold text-orange-600 mb-2 dark:text-orange-400">2,400+</p>
            <p className="text-sm text-neutral-600 dark:text-neutral-300">Reviews</p>
          </div>
          <div className="text-center p-6 bg-white rounded-2xl border border-neutral-200 dark:bg-neutral-800 dark:border-neutral-700">
            <p className="text-4xl font-bold text-orange-600 mb-2 dark:text-orange-400">98%</p>
            <p className="text-sm text-neutral-600 dark:text-neutral-300">Recommend Us</p>
          </div>
          <div className="text-center p-6 bg-white rounded-2xl border border-neutral-200 dark:bg-neutral-800 dark:border-neutral-700">
            <p className="text-4xl font-bold text-orange-600 mb-2 dark:text-orange-400">100%</p>
            <p className="text-sm text-neutral-600 dark:text-neutral-300">Verified</p>
          </div>
        </div>
      </div>
    </div>
  );
};
