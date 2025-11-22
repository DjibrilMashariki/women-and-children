"use client";

import { Card, CardDescription, CardTitle } from "@/components/common/Card";
import { Button } from "@/components/common/Button";
import { ROUTES } from "@/lib/utils/constants";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import { useState } from "react";

const PROGRAMS_DATA = [
  {
    id: "education-girls",
    title: "Girls' Education Initiative",
    category: "education",
    description: "Providing quality education and skills training for girls in underserved communities.",
    impact: "5,000+ girls enrolled",
    image: "Girl's Education",
    featured: true,
  },
  {
    id: "maternal-health",
    title: "Maternal Health & Wellness",
    category: "health",
    description: "Ensuring access to prenatal care, safe delivery services, and postpartum support.",
    impact: "2,500+ mothers supported",
    image: "Maternal Health",
    featured: true,
  },
  {
    id: "child-protection",
    title: "Child Protection & Advocacy",
    category: "protection",
    description: "Safeguarding children from abuse, exploitation, and providing legal assistance.",
    impact: "1,500+ children protected",
    image: "Child Protection",
    featured: true,
  },
  {
    id: "womens-enterprise",
    title: "Women's Enterprise Program",
    category: "economic",
    description: "Microfinance and business training enabling women to start and grow businesses.",
    impact: "3,000+ women entrepreneurs",
    image: "Women's Enterprise",
    featured: true,
  },
];

export default function ProgramsPage() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const filteredPrograms = selectedCategory
    ? PROGRAMS_DATA.filter((p) => p.category === selectedCategory)
    : PROGRAMS_DATA;

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] bg-gradient-to-br from-primary-50 via-white to-secondary-50 flex items-center py-20">
        <div className="container-max">
          <div className="max-w-3xl">
            <p className="text-primary-600 font-semibold text-lg uppercase tracking-wide">
              What We Do
            </p>
            <h1 className="text-5xl lg:text-6xl font-display font-bold text-neutral-900 dark:text-white leading-tight mt-4">
              Our Programs
            </h1>
            <p className="text-xl text-neutral-800 dark:text-neutral-100 mt-6">
              Comprehensive initiatives designed to create meaningful change in the lives of women and children across multiple dimensions.
            </p>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-12 bg-white dark:bg-neutral-900 border-b border-neutral-200 dark:border-neutral-800">
        <div className="container-max">
          <div className="flex flex-wrap gap-3 justify-start">
            <button
              onClick={() => setSelectedCategory(null)}
              className={`px-6 py-2 rounded-lg font-semibold transition-all ${
                selectedCategory === null
                  ? "bg-primary-600 text-white"
                  : "bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 hover:bg-neutral-200 dark:hover:bg-neutral-700"
              }`}
            >
              All Programs
            </button>
            {["education", "health", "protection", "economic"].map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-6 py-2 rounded-lg font-semibold transition-all capitalize ${
                  selectedCategory === cat
                    ? "bg-primary-600 text-white"
                    : "bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 hover:bg-neutral-200 dark:hover:bg-neutral-700"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Programs Grid */}
      <section className="py-20 bg-neutral-50 dark:bg-neutral-800">
        <div className="container-max">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {filteredPrograms.map((program) => (
              <Card key={program.id} hover className="flex flex-col h-full overflow-hidden">
                <div className="aspect-video bg-gradient-to-br from-primary-200 to-secondary-200 mb-4 rounded-lg flex items-center justify-center">
                  <p className="text-neutral-400">{program.image}</p>
                </div>
                <CardTitle>{program.title}</CardTitle>
                <CardDescription className="mt-2">{program.description}</CardDescription>
                <div className="mt-4 p-4 bg-primary-50 dark:bg-primary-950/30 rounded-lg">
                  <p className="text-sm text-neutral-700 dark:text-neutral-300">
                    <span className="font-semibold text-primary-600 dark:text-primary-400">Impact: </span>
                    {program.impact}
                  </p>
                </div>
                <div className="mt-auto pt-4">
                  <Link href={`${ROUTES.PROGRAMS}/${program.id}`}>
                    <Button variant="ghost" size="sm" className="w-full">
                      Learn More <FaArrowRight className="ml-2" />
                    </Button>
                  </Link>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How We Work */}
      <section className="py-20 bg-white dark:bg-neutral-900">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-display font-bold text-neutral-900 dark:text-white">
              How We Work
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Assess",
                description: "We conduct thorough community needs assessments to understand local challenges.",
              },
              {
                step: "02",
                title: "Design",
                description: "We develop culturally-appropriate, evidence-based program solutions.",
              },
              {
                step: "03",
                title: "Implement",
                description: "We partner with local organizations to deliver programs with community buy-in.",
              },
              {
                step: "04",
                title: "Measure",
                description: "We track outcomes and continuously improve based on results.",
              },
            ].map((item, idx) => (
              <Card key={idx} className="text-center dark:bg-neutral-800">
                <div className="text-5xl font-bold text-primary-600 dark:text-primary-400 mb-4">{item.step}</div>
                <CardTitle className="text-lg">{item.title}</CardTitle>
                <p className="text-neutral-800 dark:text-neutral-300 text-sm mt-3">{item.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-primary-600 to-secondary-600 text-white">
        <div className="container-max text-center">
          <h2 className="text-4xl font-display font-bold mb-4">
            Support Our Programs
          </h2>
          <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
            Your donation directly funds these transformative programs. Every contribution makes a difference.
          </p>
          <Link href={ROUTES.DONATE}>
            <Button className="bg-white text-primary-600 hover:bg-neutral-100">
              Donate Now
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
