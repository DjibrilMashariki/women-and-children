"use client";

import { Card } from "@/components/common/Card";
import { Button } from "@/components/common/Button";
import { ROUTES } from "@/lib/utils/constants";
import Link from "next/link";
import { useState } from "react";
import { AnimatedCounter } from "@/components/common/AnimatedText";
import Image from "next/image";

const ARTIFACT_CATEGORIES = [
  { id: "all", label: "All Items", icon: "🎨" },
  { id: "textiles", label: "Textiles & Fabrics", icon: "🧵" },
  { id: "jewelry", label: "Handmade Jewelry", icon: "💍" },
  { id: "home-decor", label: "Home Decor", icon: "🏠" },
  { id: "baskets", label: "Baskets & Woven Goods", icon: "🧺" },
  { id: "clothing", label: "Clothing & Accessories", icon: "👗" },
];

const ARTIFACTS_DATA = [
  {
    id: "traditional-fabric-1",
    name: "Traditional Congolese Fabric",
    artisan: "Women's Cooperative - Bukavu",
    category: "textiles",
    description: "Handwoven traditional fabric featuring vibrant colors and authentic Congolese patterns. Each piece tells a story of cultural heritage.",
    price: 45,
    impact: "Supports 3 women artisans",
    image: "/images/programs/MG_2102-scaled.webp"
  },
  {
    id: "beaded-necklace-1",
    name: "Beaded Statement Necklace",
    artisan: "Marie's Jewelry Group - Goma",
    category: "jewelry",
    description: "Intricate beadwork necklace crafted with locally sourced materials. A unique piece that combines tradition with modern aesthetics.",
    price: 35,
    impact: "Provides 1 week of income",
    image: "/images/programs/MG_2342-scaled.webp"
  },
  {
    id: "woven-basket-1",
    name: "Large Woven Storage Basket",
    artisan: "Rutshuru Artisan Collective",
    category: "baskets",
    description: "Durable hand-woven basket perfect for storage or display. Made using sustainable weaving techniques passed down through generations.",
    price: 55,
    impact: "Supports 2 artisan families",
    image: "/images/programs/MG_2368-scaled.webp"
  },
  {
    id: "embroidered-scarf-1",
    name: "Embroidered Silk Scarf",
    artisan: "Sarah & Sisters - Kinshasa",
    category: "clothing",
    description: "Luxurious silk scarf with hand-embroidered floral patterns. Each stitch represents hours of dedicated craftsmanship.",
    price: 65,
    impact: "Funds 1 month of skills training",
    image: "/images/programs/MG_2185-scaled.webp"
  },
  {
    id: "ceramic-vase-1",
    name: "Hand-Painted Ceramic Vase",
    artisan: "Ituri Women's Pottery Group",
    category: "home-decor",
    description: "Beautiful ceramic vase featuring traditional geometric designs. Handcrafted and painted by skilled women potters.",
    price: 50,
    impact: "Supports pottery workshop",
    image: "/images/programs/MG_2200-scaled.webp"
  },
  {
    id: "wall-hanging-1",
    name: "Macramé Wall Hanging",
    artisan: "Hope Artisans - North Kivu",
    category: "home-decor",
    description: "Intricate macramé wall art perfect for modern or bohemian interiors. Created by women rebuilding their lives through craft.",
    price: 40,
    impact: "Empowers trauma survivor",
    image: "/images/programs/MG_2212-scaled.webp"
  },
  {
    id: "tote-bag-1",
    name: "Handwoven Market Tote",
    artisan: "Kasaï Weavers Collective",
    category: "baskets",
    description: "Sturdy, eco-friendly market tote woven from natural fibers. Perfect for shopping or everyday use.",
    price: 30,
    impact: "Supports sustainable livelihood",
    image: "/images/programs/MG_2267-scaled.webp"
  },
  {
    id: "earrings-1",
    name: "Recycled Bead Earrings",
    artisan: "Upcycle Queens - Bukavu",
    category: "jewelry",
    description: "Colorful earrings made from recycled glass beads. Each pair is unique and environmentally conscious.",
    price: 25,
    impact: "Promotes eco-friendly practices",
    image: "/images/programs/MG_2281-scaled.webp"
  },
  {
    id: "table-runner-1",
    name: "Hand-Embroidered Table Runner",
    artisan: "Goma Embroidery Circle",
    category: "textiles",
    description: "Elegant table runner featuring intricate embroidery work. Adds a touch of African artistry to any dining space.",
    price: 48,
    impact: "Supports 4 women artisans",
    image: "/images/programs/MG_2293-scaled.webp"
  },
];

export default function ArtifactsPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const filteredArtifacts = selectedCategory === "all"
    ? ARTIFACTS_DATA
    : ARTIFACTS_DATA.filter((item) => item.category === selectedCategory);

  return (
    <div className="w-full">
      {/* Hero Section - Enhanced */}
      <section className="relative min-h-[70vh] flex items-center py-20 overflow-hidden">
        {/* Background Image with Gradient Overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/programs/MG_2368-scaled.webp"
            alt="Women artisans crafting"
            fill
            priority
            className="object-cover w-full h-full"
            quality={90}
          />
          {/* Enhanced gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-orange-900/90 via-orange-800/80 to-black/60" />

          {/* Decorative corner accent */}
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-br from-orange-500 to-orange-600 opacity-20 blur-3xl pointer-events-none" />
        </div>

        <div className="container-max relative z-10">
          <div className="max-w-3xl">
            <span className="inline-block px-5 py-2.5 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-full text-sm font-bold shadow-lg shadow-orange-500/30 mb-6">
              ✨ Shop with Purpose
            </span>
            <h1 className="text-5xl lg:text-7xl font-display font-black text-white leading-tight">
              Every Purchase <span className="text-orange-600">Empowers</span>
            </h1>
            <p className="text-xl text-orange-100 mt-6 leading-relaxed">
              Discover beautiful handmade items crafted by women in our Economic Empowerment program. Your support helps them achieve financial independence and lift their families out of poverty.
            </p>

            {/* Quick Impact Stats */}
            <div className="grid grid-cols-3 gap-4 lg:gap-6 mt-10">
              {[
                { value: 150, label: "Artisans Supported", icon: "👩🏾‍🎨", gradient: "from-orange-400 to-orange-600" },
                { value: 1200, label: "Items Sold", icon: "🛍️", gradient: "from-yellow-400 to-orange-500" },
                { value: 100, label: "Fair Trade", icon: "🤝", suffix: "%", gradient: "from-yellow-300 to-yellow-500" },
              ].map((stat) => (
                <div key={stat.label} className="group relative">
                  {/* Glow effect on hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${stat.gradient} rounded-2xl opacity-0 group-hover:opacity-20 blur-xl transition-all duration-500`} />

                  {/* Card */}
                  <div className="relative bg-white/10 backdrop-blur-md rounded-2xl p-4 lg:p-5 border border-white/20 hover:border-white/40 transition-all duration-300 hover:scale-105 hover:-translate-y-1">
                    {/* Icon with animation */}
                    <div className="text-4xl lg:text-5xl mb-3 transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                      {stat.icon}
                    </div>

                    {/* Number with gradient */}
                    <p className={`text-3xl lg:text-4xl xl:text-5xl font-black bg-clip-text text-transparent bg-gradient-to-r ${stat.gradient} tabular-nums mb-1`}>
                      <AnimatedCounter end={stat.value} suffix={stat.suffix || "+"} />
                    </p>

                    {/* Label */}
                    <p className="text-xs lg:text-sm text-white/90 font-bold leading-tight">{stat.label}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 mt-10">
              <Button size="lg" className="bg-white text-orange-600 hover:bg-orange-50 border-2 border-transparent hover:border-orange-200 shadow-xl">
                Browse Collection
              </Button>
              <Link href={ROUTES.PROGRAMS}>
                <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10 backdrop-blur-sm">
                  Learn About Our Programs
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-white border-b border-neutral-200 sticky top-0 z-30 shadow-sm backdrop-blur-md bg-white/90">
        <div className="container-max">
          <div className="flex flex-wrap gap-3 justify-center">
            {ARTIFACT_CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-full font-semibold transition-all duration-300 text-sm lg:text-base ${selectedCategory === cat.id
                    ? "bg-orange-600 text-white shadow-lg shadow-orange-500/30 scale-105"
                    : "bg-neutral-100 text-neutral-600 hover:bg-neutral-200 hover:text-neutral-900"
                  }`}
              >
                <span className="text-lg">{cat.icon}</span>
                {cat.label}
              </button>
            ))}
          </div>
          <p className="text-center mt-4 text-neutral-500 text-sm">
            Showing <strong className="text-orange-600">{filteredArtifacts.length}</strong> item{filteredArtifacts.length !== 1 ? 's' : ''}
          </p>
        </div>
      </section>

      {/* Artifacts Grid */}
      <section className="py-20 bg-neutral-50">
        <div className="container-max">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredArtifacts.map((artifact) => {
              const categoryIcon = ARTIFACT_CATEGORIES.find(c => c.id === artifact.category)?.icon || "✨";

              return (
                <Card key={artifact.id} hover className="group flex flex-col h-full border border-neutral-200 hover:border-orange-300 transition-all duration-500 overflow-hidden bg-white shadow-sm hover:shadow-xl">
                  {/* Product Icon/Image Placeholder */}
                  <div className="aspect-[4/3] relative overflow-hidden bg-gradient-to-br from-orange-50 to-orange-100 flex items-center justify-center group-hover:from-orange-100 group-hover:to-orange-200 transition-colors duration-500">
                    <div className="text-8xl transform group-hover:scale-110 transition-transform duration-500 drop-shadow-sm">
                      {categoryIcon}
                    </div>

                    {/* Category Badge */}
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-bold text-neutral-900 uppercase tracking-wider shadow-sm">
                        {ARTIFACT_CATEGORIES.find(c => c.id === artifact.category)?.label}
                      </span>
                    </div>
                  </div>

                  {/* Product Info */}
                  <div className="p-6 flex flex-col flex-grow">
                    <div className="mb-4">
                      <h3 className="text-xl font-bold text-neutral-900 mb-1 group-hover:text-orange-600 transition-colors">
                        {artifact.name}
                      </h3>
                      <p className="text-sm text-orange-600 font-medium flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-orange-500" />
                        By {artifact.artisan}
                      </p>
                    </div>

                    <p className="text-neutral-600 text-sm leading-relaxed mb-6 flex-grow">
                      {artifact.description}
                    </p>

                    {/* Impact Badge */}
                    <div className="p-3 bg-orange-50 rounded-xl border border-orange-100 mb-6">
                      <div className="flex items-start gap-3">
                        <span className="text-lg">❤️</span>
                        <div>
                          <p className="text-xs font-bold text-orange-800 uppercase tracking-wide mb-0.5">Your Impact</p>
                          <p className="text-sm text-orange-700 font-medium">{artifact.impact}</p>
                        </div>
                      </div>
                    </div>

                    {/* Price and Action */}
                    <div className="flex items-center justify-between gap-4 mt-auto pt-4 border-t border-neutral-100">
                      <div>
                        <p className="text-3xl font-black text-neutral-900">
                          ${artifact.price}
                        </p>
                      </div>

                      <Link href={ROUTES.DONATE} className="flex-1">
                        <Button size="sm" className="w-full bg-neutral-900 hover:bg-orange-600 text-white transition-colors duration-300 shadow-lg hover:shadow-orange-500/30">
                          Support Artisan
                        </Button>
                      </Link>
                    </div>
                  </div>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Impact Story Section */}
      <section className="py-24 bg-neutral-900 text-white relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-orange-500 via-neutral-900 to-neutral-900" />

        <div className="container-max relative z-10">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              More Than Just a Product
            </h2>
            <p className="text-xl text-neutral-300 leading-relaxed">
              When you purchase from our artisan shop, you&apos;re not just buying a beautiful object.
              You&apos;re directly funding the economic independence of women rebuilding their lives
              after conflict.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: "🎨",
                title: "Preserving Culture",
                desc: "Traditional techniques passed down through generations are kept alive and celebrated."
              },
              {
                icon: "💰",
                title: "Economic Freedom",
                desc: "100% of proceeds go directly to the artisan cooperatives and their community programs."
              },
              {
                icon: "🌱",
                title: "Sustainable Future",
                desc: "Using locally sourced, eco-friendly materials to create lasting beauty without harm."
              }
            ].map((item, idx) => (
              <div key={idx} className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-2xl hover:bg-white/10 transition-colors duration-300">
                <div className="text-5xl mb-6">{item.icon}</div>
                <h3 className="text-xl font-bold mb-4 text-orange-400">{item.title}</h3>
                <p className="text-neutral-300 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-orange-600 to-orange-700 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/pattern-grid.png')] opacity-10" />
        <div className="container-max text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-8 tracking-tight">
            Ready to Make a Difference?
          </h2>
          <p className="text-xl text-orange-100 mb-10 max-w-2xl mx-auto font-medium">
            Your purchase empowers women, supports families, and rebuilds communities.
            Start your journey of impact today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href={ROUTES.DONATE}>
              <Button size="lg" className="bg-white text-orange-700 hover:bg-neutral-100 px-10 py-6 text-lg shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 font-bold">
                Shop & Support Now
              </Button>
            </Link>
            <Link href={ROUTES.PROGRAMS}>
              <Button variant="outline" size="lg" className="border-2 border-white text-white hover:bg-white/10 px-10 py-6 text-lg font-bold">
                View Our Programs
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
