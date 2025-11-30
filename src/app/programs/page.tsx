"use client";

import { Card, CardDescription, CardTitle } from "@/components/common/Card";
import { Button } from "@/components/common/Button";
import { ROUTES } from "@/lib/utils/constants";
import Link from "next/link";
import { FaArrowRight, FaGraduationCap, FaMedkit, FaShieldAlt, FaBriefcase } from "react-icons/fa";
import { useState } from "react";

const PROGRAMS_DATA = [
  {
    id: "education",
    title: "Education",
    category: "education",
    description: "Providing scholarships, school supplies, and vocational training to ensure every child has access to quality education.",
    impact: "5,000+ girls enrolled",
    image: "Girl's Education",
    icon: <FaGraduationCap className="w-6 h-6" />,
    featured: true,
  },
  {
    id: "healthcare",
    title: "Healthcare",
    category: "health",
    description: "Delivering essential medical care, maternal health support, and nutrition programs to remote communities.",
    impact: "2,500+ mothers supported",
    image: "Maternal Health",
    icon: <FaMedkit className="w-6 h-6" />,
    featured: true,
  },
  {
    id: "protection",
    title: "Protection",
    category: "protection",
    description: "Creating safe spaces and providing legal advocacy for survivors of gender-based violence and abuse.",
    impact: "1,500+ children protected",
    image: "Child Protection",
    icon: <FaShieldAlt className="w-6 h-6" />,
    featured: true,
  },
  {
    id: "economic-empowerment",
    title: "Economic Empowerment",
    category: "economic",
    description: "Supporting women entrepreneurs with microloans, business training, and market access.",
    impact: "3,000+ women entrepreneurs",
    image: "Women's Enterprise",
    icon: <FaBriefcase className="w-6 h-6" />,
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
      <section className="relative min-h-[60vh] bg-gradient-to-br from-brand-50 via-white to-secondary-50 flex items-center py-20">
        <div className="container-max">
          <div className="max-w-3xl">
            <p className="text-brand-600 font-semibold text-lg uppercase tracking-wide">
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
              className={`px-6 py-2 rounded-lg font-semibold transition-all ${selectedCategory === null
                ? "bg-brand-600 text-white"
                : "bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 hover:bg-neutral-200 dark:hover:bg-neutral-700"
                }`}
            >
              All Programs
            </button>
            {["education", "health", "protection", "economic"].map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-6 py-2 rounded-lg font-semibold transition-all capitalize ${selectedCategory === cat
                  ? "bg-brand-600 text-white"
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
      <section className="py-20 bg-white dark:bg-black">
        <div className="container-max">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredPrograms.map((program) => (
              <Card
                key={program.id}
                className="flex flex-col h-full overflow-hidden bg-white dark:bg-neutral-900 border-neutral-200 dark:border-neutral-800 hover:border-brand-500 dark:hover:border-brand-600 transition-all duration-300 group hover:shadow-xl dark:hover:shadow-2xl dark:hover:shadow-brand-900/20"
              >
                {/* Image Area */}
                <div className="aspect-[4/3] bg-neutral-200 dark:bg-neutral-800 mb-6 rounded-lg relative overflow-hidden group-hover:scale-[1.02] transition-transform duration-300">
                  {/* Placeholder Image Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-br from-neutral-700 to-neutral-900 dark:from-neutral-800 dark:to-black" />

                  {/* Icon Badge */}
                  <div className="absolute top-4 right-4 w-12 h-12 bg-black/90 backdrop-blur-sm rounded-xl flex items-center justify-center text-brand-500 group-hover:text-brand-400 border border-neutral-700 group-hover:border-brand-600 shadow-lg transition-all duration-300 group-hover:scale-110">
                    {program.icon}
                  </div>

                  {/* Image Text Placeholder */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-20">
                    <p className="text-white font-bold text-lg">{program.image}</p>
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 flex flex-col px-1">
                  <h3 className="text-2xl font-bold text-neutral-900 dark:text-white mb-3 group-hover:text-brand-600 dark:group-hover:text-brand-500 transition-colors">
                    {program.title}
                  </h3>
                  <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed mb-6 flex-1">
                    {program.description}
                  </p>

                  <div className="mt-auto pt-4 border-t border-neutral-100 dark:border-neutral-800">
                    <Link href={`${ROUTES.PROGRAMS}/${program.id}`} className="inline-flex items-center text-sm font-bold text-brand-600 dark:text-brand-500 hover:text-brand-700 dark:hover:text-brand-400 transition-colors group/link">
                      Learn More
                      <FaArrowRight className="ml-2 transform transition-transform group-hover/link:translate-x-1" />
                    </Link>
                  </div>
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
                <div className="text-5xl font-bold text-brand-600 dark:text-brand-400 mb-4">{item.step}</div>
                <CardTitle className="text-lg">{item.title}</CardTitle>
                <p className="text-neutral-800 dark:text-neutral-300 text-sm mt-3">{item.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-brand-600 to-secondary-600 text-white">
        <div className="container-max text-center">
          <h2 className="text-4xl font-display font-bold mb-4">
            Support Our Programs
          </h2>
          <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
            Your donation directly funds these transformative programs. Every contribution makes a difference.
          </p>
          <Link href={ROUTES.DONATE}>
            <Button className="bg-white text-brand-600 hover:bg-neutral-100">
              Donate Now
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
