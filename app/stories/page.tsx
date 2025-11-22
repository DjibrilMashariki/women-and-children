"use client";

import { Card, CardDescription, CardTitle } from "@/components/common/Card";
import { Button } from "@/components/common/Button";
import { ROUTES } from "@/lib/utils/constants";
import Link from "next/link";
import { FaArrowRight, FaHeart } from "react-icons/fa";
import { useState } from "react";
import { Testimonials } from "@/components/common/Testimonials";

const STORIES_DATA = [
  {
    id: 1,
    title: "From Struggle to Success: Amara's Journey",
    excerpt: "How education transformed a young girl's future and her entire family.",
    category: "women",
    author: "Sarah Chen",
    date: "Nov 5, 2025",
    image: "Story 1",
    featured: true,
    views: 1250,
  },
  {
    id: 2,
    title: "Second Chances: A Child's New Beginning",
    excerpt: "Protecting children from harm and helping them rebuild their lives.",
    category: "children",
    author: "James Okonkwo",
    date: "Nov 3, 2025",
    image: "Story 2",
    featured: true,
    views: 980,
  },
  {
    id: 3,
    title: "Community Power: When Women Lead",
    excerpt: "How a women's cooperative transformed an entire village.",
    category: "community",
    author: "Maria Garcia",
    date: "Oct 28, 2025",
    image: "Story 3",
    featured: true,
    views: 2150,
  },
  {
    id: 4,
    title: "Health & Hope: Saving Lives",
    excerpt: "Maternal health programs bringing safe delivery care to remote communities.",
    category: "women",
    author: "Dr. Aisha Ahmed",
    date: "Oct 20, 2025",
    image: "Story 4",
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
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] bg-gradient-to-br from-primary-50 via-white to-secondary-50 dark:from-neutral-900 dark:via-neutral-950 dark:to-black flex items-center py-20 transition-colors duration-300">
        <div className="container-max">
          <div className="max-w-3xl">
            <p className="text-primary-600 dark:text-orange-400 font-semibold text-lg uppercase tracking-wide">
              Stories of Change
            </p>
            <h1 className="text-5xl lg:text-6xl font-display font-bold text-neutral-900 dark:text-white leading-tight mt-4">
              Real Lives, Real Impact
            </h1>
            <p className="text-xl text-neutral-600 dark:text-neutral-300 mt-6">
              Discover the inspiring stories of people whose lives have been transformed through our programs.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Story */}
      <section className="py-20 bg-white dark:bg-neutral-950 transition-colors duration-300">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">
            <div className="aspect-square lg:aspect-auto bg-gradient-to-br from-primary-200 to-secondary-200 dark:from-orange-900 dark:to-orange-800 rounded-2xl flex items-center justify-center shadow-lg overflow-hidden">
              <p className="text-neutral-400 dark:text-neutral-500">{featuredStory.image}</p>
            </div>
            <div className="flex flex-col justify-center space-y-6">
              <div>
                <span className="inline-block px-4 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 rounded-full text-sm font-semibold capitalize mb-4">
                  {featuredStory.category}
                </span>
                <h2 className="text-4xl font-display font-bold text-neutral-900 dark:text-white">
                  {featuredStory.title}
                </h2>
              </div>
              <p className="text-lg text-neutral-600 dark:text-neutral-300 leading-relaxed">
                {featuredStory.excerpt}
              </p>
              <div className="flex items-center gap-4 text-sm text-neutral-600 dark:text-neutral-400">
                <span>By {featuredStory.author}</span>
                <span>•</span>
                <span>{featuredStory.date}</span>
                <span>•</span>
                <span>{featuredStory.views} views</span>
              </div>
              <Link href={`${ROUTES.STORIES}/${featuredStory.id}`}>
                <Button size="lg">
                  Read Full Story <FaArrowRight className="ml-2" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-12 bg-neutral-50 dark:bg-neutral-900 border-b border-neutral-200 dark:border-neutral-800 transition-colors duration-300">
        <div className="container-max">
          <div className="flex flex-wrap gap-3 justify-center">
            <button
              onClick={() => setSelectedCategory(null)}
              className={`px-6 py-2 rounded-lg font-semibold transition-all ${
                selectedCategory === null
                  ? "bg-primary-600 text-white"
                  : "bg-white dark:bg-neutral-800 text-neutral-600 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-700"
              }`}
            >
              All Stories
            </button>
            {["women", "children", "community"].map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-6 py-2 rounded-lg font-semibold transition-all capitalize ${
                  selectedCategory === cat
                    ? "bg-primary-600 text-white"
                    : "bg-white dark:bg-neutral-800 text-neutral-600 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-700"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Stories Grid */}
      <section className="py-20 bg-neutral-50 dark:bg-neutral-900 transition-colors duration-300">
        <div className="container-max">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {otherStories.map((story) => (
              <Link key={story.id} href={`${ROUTES.STORIES}/${story.id}`}>
                <Card hover className="h-full flex flex-col dark:bg-neutral-800">
                  <div className="aspect-video bg-gradient-to-br from-primary-200 to-secondary-200 dark:from-orange-900 dark:to-orange-800 mb-4 rounded-lg flex items-center justify-center">
                    <p className="text-neutral-400 dark:text-neutral-500">{story.image}</p>
                  </div>
                  <span className="inline-block px-3 py-1 bg-accent-100 dark:bg-accent-900/30 text-accent-700 dark:text-accent-300 rounded-full text-xs font-semibold capitalize w-fit mb-2">
                    {story.category}
                  </span>
                  <CardTitle className="line-clamp-2 dark:text-white">{story.title}</CardTitle>
                  <CardDescription className="mt-2 line-clamp-2 dark:text-neutral-300">
                    {story.excerpt}
                  </CardDescription>
                  <div className="mt-auto pt-4 border-t border-neutral-200 dark:border-neutral-700 flex items-center justify-between text-xs text-neutral-600 dark:text-neutral-400">
                    <span>{story.author}</span>
                    <span className="flex items-center gap-1">
                      <FaHeart size={14} className="text-primary-500" />
                      {story.views}
                    </span>
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <Testimonials />

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-primary-600 to-secondary-600 text-white">
        <div className="container-max text-center">
          <h2 className="text-4xl font-display font-bold mb-4">
            Share Your Story
          </h2>
          <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
            Have you been impacted by our programs? We&apos;d love to hear your story and share it with our community.
          </p>
          <Button className="bg-white text-primary-600 hover:bg-neutral-100">
            Submit Your Story
          </Button>
        </div>
      </section>
    </div>
  );
}
