"use client";

import { Card, CardTitle } from "@/components/common/Card";
import { Button } from "@/components/common/Button";
import { ROUTES } from "@/lib/utils/constants";
import Link from "next/link";
import { useState } from "react";
import Image from "next/image";
import { AnimatedCounter, GradientText } from "@/components/common/AnimatedText";

const PROGRAMS_DATA = [
  {
    id: "civil-society-support",
    title: "Civil Society Support",
    category: "capacity",
    icon: "🏛️",
    description: "Strengthening civil society organizations through capacity building, helping them diagnose needs, structure operations, and access funding.",
    keyActivities: ["Strategic planning", "Governance training", "Fundraising development", "Partnership facilitation"],
    impact: "50+ organizations strengthened",
    featured: true,
  },
  {
    id: "agriculture-food-security",
    title: "Agriculture & Food Security",
    category: "economic",
    icon: "🌾",
    description: "Empowering communities to achieve food security through sustainable agricultural practices and market access.",
    keyActivities: ["Farmer Field Schools", "Seed distribution", "Agroecology training", "Market access support"],
    impact: "2,000+ farmers trained",
    featured: true,
  },
  {
    id: "legal-protection",
    title: "Legal Protection & Rights",
    category: "protection",
    icon: "⚖️",
    description: "Ensuring vulnerable populations know their rights and can access justice through legal education and advocacy.",
    keyActivities: ["Legal awareness", "Rights protection", "Refugee support", "Legal aid representation"],
    impact: "600+ survivors supported",
    featured: true,
  },
  {
    id: "psychosocial-support",
    title: "Psychosocial Support",
    category: "health",
    icon: "💚",
    description: "Comprehensive psychological support and trauma-informed care for vulnerable populations helping survivors heal.",
    keyActivities: ["Counseling services", "Trauma recovery (NET)", "SGBV support", "Safe healing spaces"],
    impact: "600+ trauma survivors helped",
    featured: true,
  },
  {
    id: "education-gender-equality",
    title: "Education & Gender Equality",
    category: "education",
    icon: "🎓",
    description: "Ensuring equal access to quality education for all children, with special focus on keeping girls in school.",
    keyActivities: ["Scholarships", "Community schools", "Literacy programs", "Dropout prevention"],
    impact: "800+ children receiving scholarships",
    featured: true,
  },
  {
    id: "health-wellness",
    title: "Health & Wellness",
    category: "health",
    icon: "🏥",
    description: "Promoting holistic health and well-being for women and children through preventive care and essential services.",
    keyActivities: ["Maternal health", "HIV/AIDS prevention", "Reproductive health", "Malnutrition treatment"],
    impact: "3,500+ health interventions",
    featured: true,
  },
  {
    id: "governance-civic",
    title: "Governance & Civic Participation",
    category: "capacity",
    icon: "🗳️",
    description: "Empowering women, youth, and marginalized groups to participate actively in decision-making processes.",
    keyActivities: ["Leadership development", "Youth engagement", "Peace-building", "Policy advocacy"],
    impact: "250+ leaders trained",
    featured: true,
  },
  {
    id: "economic-empowerment",
    title: "Economic Empowerment",
    category: "economic",
    icon: "💼",
    description: "Unlocking economic potential through microfinance, vocational training, and entrepreneurship support.",
    keyActivities: ["Microfinance", "Vocational training", "Business skills", "Market linkages"],
    impact: "1,500+ women empowered",
    featured: true,
  },
  {
    id: "trauma-recovery",
    title: "Trauma Recovery & Social Integration",
    category: "protection",
    icon: "🌟",
    description: "Specialized care for survivors of severe traumas—sexual violence, war, and displacement—helping them rebuild.",
    keyActivities: ["NET therapy", "SGBV survivor support", "Skills training", "Social cohesion"],
    impact: "400+ successfully reintegrated",
    featured: true,
  },
];

export default function ProgramsPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const filteredPrograms = selectedCategory === "all"
    ? PROGRAMS_DATA
    : PROGRAMS_DATA.filter((p) => p.category === selectedCategory);

  return (
    <div className="w-full">
      {/* Hero Section - Enhanced with Background Image */}
      <section className="relative min-h-[70vh] bg-gradient-to-br from-orange-50 via-white to-orange-100 dark:from-neutral-900 dark:via-neutral-950 dark:to-black flex items-center py-20 overflow-hidden transition-colors duration-300">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 opacity-15 mix-blend-overlay">
          <Image
            src="/images/programs/MG_2360-scaled.webp"
            alt="Background"
            fill
            className="object-cover"
            quality={50}
          />
        </div>
        
        {/* Animated Gradient Blobs */}
        <div className="absolute top-20 right-10 w-96 h-96 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full blur-3xl opacity-10 animate-pulse" />
        <div className="absolute -bottom-20 left-10 w-96 h-96 bg-gradient-to-br from-amber-400 to-orange-500 rounded-full blur-3xl opacity-10 animate-pulse" style={{animationDelay: '1s'}} />
        
        <div className="container-max relative z-10">
          <div className="max-w-4xl">
            <div className="inline-block mb-6 px-4 py-2 bg-orange-100 border border-orange-300 rounded-full">
              <p className="text-orange-700 font-bold text-sm uppercase tracking-widest">
                Our Impact Areas
              </p>
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-display font-black text-neutral-900 dark:text-white leading-tight mt-4 mb-6">
              Nine <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-600 dark:from-orange-400 dark:to-orange-500">Pathways</span> to Transformation
            </h1>
            
            <p className="text-xl lg:text-2xl text-neutral-700 dark:text-neutral-300 mt-6 leading-relaxed max-w-3xl">
              Comprehensive service areas empowering women and children across the Democratic Republic of Congo. Every program addresses critical needs while building long-term community resilience.
            </p>
            
            {/* Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mt-12 pt-12 border-t border-neutral-300">
              <div>
                <div className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-600">
                  <AnimatedCounter end={9} />
                </div>
                <p className="text-neutral-600 dark:text-neutral-400 font-semibold mt-2">Active Programs</p>
              </div>
              <div>
                <div className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-teal-600">
                  <AnimatedCounter end={15} suffix="+" />
                </div>
                <p className="text-neutral-600 dark:text-neutral-400 font-semibold mt-2">Service Areas</p>
              </div>
              <div>
                <div className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-indigo-600">
                  <AnimatedCounter end={50} suffix="+" />
                </div>
                <p className="text-neutral-600 dark:text-neutral-400 font-semibold mt-2">Communities</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-12 bg-white dark:bg-neutral-950 border-b border-neutral-200 dark:border-neutral-800 transition-colors duration-300">
        <div className="container-max">
          <div className="flex flex-wrap gap-3 justify-center">
            <button
              onClick={() => setSelectedCategory("all")}
              className={`px-6 py-2 rounded-lg font-semibold transition-all ${
                selectedCategory === "all"
                  ? "bg-orange-600 text-white"
                  : "bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-300 hover:bg-neutral-200 dark:hover:bg-neutral-700"
              }`}
            >
              All Programs
            </button>
            {["education", "health", "protection", "economic", "capacity"].map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-6 py-2 rounded-lg font-semibold transition-all capitalize ${
                  selectedCategory === cat
                    ? "bg-orange-600 text-white"
                    : "bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-300 hover:bg-neutral-200 dark:hover:bg-neutral-700"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
          <p className="text-center mt-4 text-neutral-600 dark:text-neutral-400">
            Showing <strong className="text-orange-600 dark:text-orange-400">{filteredPrograms.length}</strong> program{filteredPrograms.length !== 1 ? 's' : ''}
          </p>
        </div>
      </section>

      {/* Programs Grid - Enhanced */}
      <section className="py-24 bg-gradient-to-b from-neutral-50 via-white to-neutral-50 dark:from-neutral-900 dark:via-neutral-950 dark:to-neutral-900 transition-colors duration-300">
        <div className="container-max">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPrograms.map((program, idx) => {
              // Map images to programs
              const images = [
                "/images/programs/IMG_1570-scaled.webp",
                "/images/programs/MG_2185-scaled.webp",
                "/images/programs/MG_2200-scaled.webp",
                "/images/programs/MG_2212-scaled.webp",
                "/images/programs/MG_2254-scaled.webp",
                "/images/programs/MG_2267-scaled.webp",
                "/images/programs/MG_2281-scaled.webp",
                "/images/programs/MG_2288-scaled.webp",
                "/images/programs/MG_2293-scaled.webp",
              ];
              
              const colors = [
                "from-blue-500 to-indigo-600",
                "from-emerald-500 to-teal-600",
                "from-orange-500 to-red-600",
                "from-amber-500 to-yellow-600",
                "from-pink-500 to-rose-600",
                "from-violet-500 to-purple-600",
                "from-cyan-500 to-blue-600",
                "from-green-500 to-emerald-600",
                "from-fuchsia-500 to-pink-600"
              ];
              
              return (
                <div 
                  key={program.id} 
                  className="group relative overflow-hidden rounded-3xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 hover:border-orange-300 dark:hover:border-orange-500 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 transform cursor-default flex flex-col h-full"
                >
                  {/* Image Section */}
                  <div className="relative h-56 overflow-hidden bg-gradient-to-br from-neutral-200 to-neutral-300">
                    <Image
                      src={images[idx % images.length]}
                      alt={program.title}
                      fill
                      className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-700"
                      quality={80}
                    />
                    {/* Gradient overlay */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${colors[idx]} opacity-60 group-hover:opacity-40 transition-opacity duration-500`} />
                    
                    {/* Icon Badge */}
                    <div className="absolute top-4 right-4 w-14 h-14 rounded-2xl bg-white/90 backdrop-blur-md flex items-center justify-center text-4xl shadow-lg group-hover:shadow-xl transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-500">
                      {program.icon}
                    </div>
                    
                    {/* Category Tag */}
                    <div className="absolute bottom-4 left-4">
                      <span className="px-4 py-1 rounded-full bg-white/95 backdrop-blur-sm text-xs font-bold text-neutral-900 uppercase">
                        {program.category}
                      </span>
                    </div>
                  </div>
                  
                  {/* Content Section */}
                  <div className="p-7 flex flex-col flex-1">
                    <h3 className="text-2xl font-black text-neutral-900 dark:text-white mb-3 group-hover:text-orange-600 dark:group-hover:text-orange-400 transition-colors duration-300 line-clamp-2">
                      {program.title}
                    </h3>
                    
                    <p className="text-neutral-600 dark:text-neutral-300 text-base leading-relaxed mb-6 flex-grow group-hover:text-neutral-700 dark:group-hover:text-neutral-200 transition-colors duration-300">
                      {program.description}
                    </p>
                    
                    <div className="mb-6">
                      <p className="font-bold text-sm text-neutral-900 dark:text-white mb-3 uppercase tracking-wide">Key Activities:</p>
                      <ul className="grid grid-cols-2 gap-2">
                        {program.keyActivities.map((activity, jdx) => (
                          <li key={jdx} className="flex items-start gap-2 text-xs text-neutral-600 dark:text-neutral-400">
                            <span className={`text-sm font-bold flex-shrink-0 text-transparent bg-clip-text bg-gradient-to-r ${colors[idx]}`}>✓</span>
                            <span>{activity}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    {/* Impact Badge - Floating */}
                    <div className="p-4 bg-gradient-to-br from-orange-50 to-amber-50 dark:from-orange-900/20 dark:to-amber-900/20 rounded-xl border-2 border-orange-200 dark:border-orange-900 group-hover:border-orange-400 dark:group-hover:border-orange-600 group-hover:shadow-lg transition-all duration-300">
                      <p className="text-sm text-neutral-700 dark:text-neutral-300">
                        <span className="font-bold text-orange-600 dark:text-orange-400">📊 Impact: </span>
                        <span className="font-semibold">{program.impact}</span>
                      </p>
                    </div>
                    
                    {/* CTA - Revealed on hover */}
                    <button className="mt-6 w-full py-3 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-bold rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0 shadow-lg hover:shadow-orange-glow-lg">
                      Learn More →
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Impact Metrics Section - Enhanced */}
      <section className="py-24 bg-gradient-to-b from-neutral-100 via-neutral-50 to-neutral-100 scroll-animate">
        <div className="container-max">
          <div className="text-center mb-20">
            <h2 className="text-4xl lg:text-5xl font-display font-bold text-neutral-900">
              <GradientText>Measurable Progress</GradientText> You Can See & Trust
            </h2>
            <p className="text-lg lg:text-xl text-neutral-800 mt-6 max-w-3xl mx-auto leading-relaxed">
              Numbers don&apos;t lie—and neither do we. Track our real-time progress as we work toward ambitious goals that transform lives across the Democratic Republic of Congo.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 stagger-animate">
            {/* Metric Cards with Enhanced Styling */}
            {[
              {
                title: "Children Educated",
                current: 15750,
                target: 20000,
                unit: "children",
                icon: "🎓",
                color: "from-blue-500 to-indigo-600",
                lightColor: "from-blue-50 to-indigo-50"
              },
              {
                title: "Healthcare Visits",
                current: 32400,
                target: 40000,
                unit: "visits",
                icon: "🏥",
                color: "from-emerald-500 to-teal-600",
                lightColor: "from-emerald-50 to-teal-50"
              },
              {
                title: "Families Supported",
                current: 8920,
                target: 12000,
                unit: "families",
                icon: "👨🏾‍👩🏾‍👧🏾‍👦🏾",
                color: "from-orange-500 to-orange-600",
                lightColor: "from-orange-50 to-orange-100"
              }
            ].map((metric, idx) => {
              const percentage = (metric.current / metric.target) * 100;
              return (
                <div key={idx} className={`group relative p-8 rounded-3xl border border-neutral-200 bg-gradient-to-br ${metric.lightColor} hover:border-orange-300 hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 cursor-default`}>
                  {/* Icon */}
                  <div className="text-4xl mb-4 group-hover:scale-125 transition-transform duration-500">{metric.icon}</div>
                  
                  {/* Title */}
                  <h3 className="text-2xl font-bold text-neutral-900 mb-6 group-hover:text-orange-600 transition-colors duration-300">
                    {metric.title}
                  </h3>
                  
                  {/* Progress Bar */}
                  <div className="mb-6">
                    <div className="flex justify-between items-center mb-3">
                      <div>
                        <div className={`text-4xl font-black bg-clip-text text-transparent bg-gradient-to-r ${metric.color}`}>
                          {metric.current.toLocaleString()}
                        </div>
                        <div className="text-sm text-neutral-700 mt-1">{metric.unit}</div>
                      </div>
                      <div className="text-right">
                        <div className="text-sm font-semibold text-neutral-700">of {metric.target.toLocaleString()}</div>
                        <div className="text-3xl font-black text-neutral-900 group-hover:text-orange-600 transition-colors duration-300">
                          {Math.round(percentage)}%
                        </div>
                      </div>
                    </div>
                    
                    {/* Animated Progress Bar */}
                    <div className="h-3 bg-neutral-200 rounded-full overflow-hidden">
                      <div 
                        className={`h-full bg-gradient-to-r ${metric.color} rounded-full transition-all duration-1000 ease-out`}
                        style={{ width: `${percentage}%` }}
                      />
                    </div>
                  </div>
                  
                  {/* Growth indicator */}
                  <div className="pt-6 border-t border-neutral-200 group-hover:border-orange-200 transition-colors duration-300">
                    <div className="flex items-center gap-2 text-sm text-emerald-600 font-semibold">
                      <span>↑</span>
                      <span>+24% growth this year</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* How We Work */}
      <section className="py-20 bg-white dark:bg-neutral-950 transition-colors duration-300">
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
                <CardTitle className="text-lg dark:text-white">{item.title}</CardTitle>
                <p className="text-neutral-600 dark:text-neutral-300 text-sm mt-3">{item.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-orange-500 to-orange-600 text-white">
        <div className="container-max text-center">
          <h2 className="text-4xl font-display font-bold mb-4">
            Support Our Programs
          </h2>
          <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
            Your donation directly funds these transformative programs. Every contribution creates ripples of change across communities in the DRC.
          </p>
          <Link href={ROUTES.DONATE}>
            <Button className="bg-white text-orange-600 hover:bg-neutral-100">
              Donate Now
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
