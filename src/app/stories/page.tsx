"use client";

import { Card, CardDescription, CardTitle } from "@/components/common/Card";
import { Button } from "@/components/common/Button";
import { ROUTES } from "@/lib/utils/constants";
import Link from "next/link";
import { FaArrowRight, FaHeart, FaQuoteLeft } from "react-icons/fa";
import { useState } from "react";
import Image from "next/image";
import { ParticleField } from "@/components/common/DynamicBackground";

const STORIES_DATA = [
  {
    id: 1,
    title: "From Rutshuru to National Impact: The WCV Story",
    excerpt: "Founded in the conflict-affected region of North Kivu, Women and Children's Voice has grown into a national force for peace and empowerment.",
    category: "organization",
    author: "WCV Team",
    date: "Nov 15, 2025",
    image: "/images/hero/hero-new.webp", // Using available image
    featured: true,
    views: 3420,
    quote: "Peace becomes more than an ideal—it is a vital urgency."
  },
  {
    id: 2,
    title: "Empowering Women in Bukavu: A Cooperative's Success",
    excerpt: "How a group of 50 women turned a small agricultural initiative into a thriving business that supports their entire community.",
    category: "women",
    author: "Sarah Chen",
    date: "Nov 10, 2025",
    image: "Story 2", // Placeholder
    featured: false,
    views: 1250,
  },
  {
    id: 3,
    title: "Resilience in Ituri: Education Amidst Conflict",
    excerpt: "Meet the teachers and students who refuse to let violence stop their pursuit of knowledge and a better future.",
    category: "children",
    author: "James Okonkwo",
    date: "Nov 5, 2025",
    image: "Story 3", // Placeholder
    featured: false,
    views: 980,
  },
  {
    id: 4,
    title: "Youth Leadership in Goma",
    excerpt: "Young entrepreneurs are reshaping the local economy and challenging stereotypes through innovation.",
    category: "community",
    author: "Maria Garcia",
    date: "Oct 28, 2025",
    image: "Story 4", // Placeholder
    featured: false,
    views: 2150,
  },
  {
    id: 5,
    title: "Healing Trauma: The NET Approach",
    excerpt: "Restoring dignity and hope for survivors of violence through Narrative Exposure Therapy.",
    category: "health",
    author: "Dr. Aisha Ahmed",
    date: "Oct 20, 2025",
    image: "Story 5", // Placeholder
    featured: false,
    views: 654,
  },
];

export default function StoriesPage() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const filteredStories = selectedCategory
    ? STORIES_DATA.filter((s) => s.category === selectedCategory)
    : STORIES_DATA;

  const featuredStory = filteredStories.find((s) => s.featured) || filteredStories[0];
  const otherStories = filteredStories.filter((s) => s.id !== featuredStory.id);

  return (
    <div className="w-full bg-neutral-50 dark:bg-neutral-950">
      {/* Hero Section with Dynamic Background Image Layer */}
      <section className="relative min-h-[60vh] bg-white dark:bg-neutral-900 flex items-center py-20 overflow-hidden">
        {/* Background Image Layer with Particle Effects */}
        <ParticleField
          count={12}
          backgroundImage="/images/hero/stories-hero-v2.webp"
          backgroundOpacity={0.4}
          backgroundBlendMode="overlay"
          className="opacity-40"
        />

        <div className="container-max relative z-10">
          <div className="max-w-3xl">
            <p className="text-brand-600 font-semibold text-lg uppercase tracking-wide">
              Stories of Change
            </p>
            <h1 className="text-5xl lg:text-7xl font-display font-bold text-neutral-900 dark:text-white leading-tight mt-4">
              Real Lives, <br />
              <span className="text-brand-600 dark:text-brand-primary">Real Impact.</span>
            </h1>
            <p className="text-xl text-neutral-800 dark:text-neutral-100 mt-6 max-w-2xl font-light">
              Discover the inspiring stories of people whose lives have been transformed through our programs.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Story - Magazine Style */}
      <section className="py-16">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Image Side */}
            <div className="lg:col-span-7 relative group cursor-pointer">
              <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl relative">
                <Image
                  src={featuredStory.image.startsWith("/") ? featuredStory.image : "/images/hero/hero-new.webp"}
                  alt={featuredStory.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <span className="inline-block px-4 py-1 bg-brand-600 text-white rounded-full text-sm font-bold capitalize mb-3 shadow-lg">
                    {featuredStory.category}
                  </span>
                </div>
              </div>
            </div>

            {/* Content Side */}
            <div className="lg:col-span-5 space-y-8">
              <div className="space-y-4">
                <h2 className="text-4xl md:text-5xl font-display font-bold text-neutral-900 dark:text-white leading-tight hover:text-brand-600 dark:hover:text-brand-primary transition-colors cursor-pointer">
                  {featuredStory.title}
                </h2>
                <p className="text-lg text-neutral-600 dark:text-neutral-300 leading-relaxed border-l-4 border-brand-500 pl-6 italic">
                  {featuredStory.excerpt}
                </p>
              </div>

              {featuredStory.quote && (
                <div className="bg-orange-50 dark:bg-neutral-800 p-6 rounded-2xl relative">
                  <FaQuoteLeft className="text-brand-200 dark:text-brand-primary/20 text-4xl absolute top-4 left-4" />
                  <p className="text-neutral-800 dark:text-neutral-200 font-serif text-xl relative z-10 pt-4">
                    "{featuredStory.quote}"
                  </p>
                </div>
              )}

              <div className="flex items-center justify-between pt-6 border-t border-neutral-200 dark:border-neutral-800">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-neutral-200 dark:bg-neutral-700" />
                  <div className="text-sm">
                    <p className="font-bold text-neutral-900 dark:text-white">{featuredStory.author}</p>
                    <p className="text-neutral-500">{featuredStory.date}</p>
                  </div>
                </div>
                <Link href={`${ROUTES.STORIES}/${featuredStory.id}`}>
                  <Button className="rounded-full px-8">Read Story</Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Filter Bar */}
      <div className="sticky top-20 z-30 bg-white/80 dark:bg-neutral-900/80 backdrop-blur-md border-y border-neutral-200 dark:border-neutral-800 py-4">
        <div className="container-max overflow-x-auto">
          <div className="flex gap-4 min-w-max justify-center">
            <button
              onClick={() => setSelectedCategory(null)}
              className={`px-6 py-2 rounded-full text-sm font-bold transition-all ${selectedCategory === null
                ? "bg-neutral-900 dark:bg-white text-white dark:text-neutral-900"
                : "text-neutral-600 dark:text-neutral-400 hover:bg-neutral-100 dark:hover:bg-neutral-800"
                }`}
            >
              All Stories
            </button>
            {["women", "children", "community", "health", "organization"].map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-6 py-2 rounded-full text-sm font-bold transition-all capitalize ${selectedCategory === cat
                  ? "bg-neutral-900 dark:bg-white text-white dark:text-neutral-900"
                  : "text-neutral-600 dark:text-neutral-400 hover:bg-neutral-100 dark:hover:bg-neutral-800"
                  }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Stories Grid - Masonry Style */}
      <section className="py-20">
        <div className="container-max">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {otherStories.map((story, idx) => (
              <Link key={story.id} href={`${ROUTES.STORIES}/${story.id}`} className="group">
                <article className={`flex flex-col h-full ${idx % 3 === 0 ? 'md:col-span-2 lg:col-span-2' : ''}`}>
                  <div className="relative aspect-video rounded-2xl overflow-hidden mb-6 shadow-md group-hover:shadow-xl transition-all duration-500">
                    <div className="absolute inset-0 bg-neutral-200 dark:bg-neutral-800 flex items-center justify-center">
                      <p className="text-neutral-400">{story.image}</p>
                    </div>
                    {/* Overlay on hover */}
                    <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>

                  <div className="flex flex-col flex-grow">
                    <div className="flex items-center gap-3 mb-3 text-xs font-bold tracking-wider uppercase text-brand-600 dark:text-brand-primary">
                      <span>{story.category}</span>
                      <span className="w-1 h-1 rounded-full bg-neutral-300" />
                      <span className="text-neutral-500">{story.date}</span>
                    </div>

                    <h3 className={`font-display font-bold text-neutral-900 dark:text-white mb-3 group-hover:text-brand-600 dark:group-hover:text-brand-primary transition-colors ${idx % 3 === 0 ? 'text-3xl' : 'text-xl'}`}>
                      {story.title}
                    </h3>

                    <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed mb-4 line-clamp-3">
                      {story.excerpt}
                    </p>

                    <div className="mt-auto flex items-center justify-between pt-4 border-t border-neutral-100 dark:border-neutral-800">
                      <span className="text-sm font-medium text-neutral-900 dark:text-white">
                        Read Article
                      </span>
                      <FaArrowRight className="text-brand-600 dark:text-brand-primary transform group-hover:translate-x-2 transition-transform" />
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-24 bg-neutral-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/pattern.svg')] opacity-5" />
        <div className="container-max relative z-10 text-center max-w-2xl mx-auto">
          <FaQuoteLeft className="text-6xl text-brand-600/30 mx-auto mb-6" />
          <h2 className="text-4xl font-display font-bold mb-6">
            "Every story shared is a step towards understanding, and every voice heard is a victory for dignity."
          </h2>
          <p className="text-neutral-400 mb-8">
            Join our community to receive inspiring stories directly in your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-6 py-3 rounded-full bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-brand-500"
            />
            <Button className="rounded-full px-8 bg-brand-600 hover:bg-brand-700 border-none">
              Subscribe
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
