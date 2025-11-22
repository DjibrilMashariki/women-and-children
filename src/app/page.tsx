"use client";

import { Button } from "@/components/common/Button";
import { Card, CardDescription, CardTitle } from "@/components/common/Card";
import { ROUTES, ORG_NAME, PROGRAM_CATEGORIES, DEMO_TESTIMONIALS, DONATION_TIERS } from "@/lib/utils/constants";
import Link from "next/link";
import { FaGraduationCap, FaHeart, FaShieldAlt, FaArrowRight } from "react-icons/fa";

const categoryIcons: Record<string, React.ElementType> = {
  GraduationCap: FaGraduationCap,
  Heart: FaHeart,
  Shield: FaShieldAlt,
  TrendingUp: FaArrowRight,
};

export default function HomePage() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative min-h-screen bg-gradient-to-br from-primary-50 via-white to-secondary-50 flex items-center py-20">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Hero Text */}
            <div className="space-y-6">
              <div className="space-y-2">
                <p className="text-primary-600 font-semibold text-lg uppercase tracking-wide">
                  Welcome to Change
                </p>
                <h1 className="text-5xl lg:text-6xl font-display font-bold text-neutral-900 leading-tight">
                  Empowering Lives,<br />
                  <span className="text-gradient">Building Futures</span>
                </h1>
              </div>
              <p className="text-xl text-neutral-600 leading-relaxed">
                {ORG_NAME} is dedicated to creating lasting impact through education, health, protection, and economic opportunity for women and children in need.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Link href={ROUTES.DONATE}>
                  <Button size="lg">Make a Donation</Button>
                </Link>
                <Link href={ROUTES.GET_INVOLVED}>
                  <Button variant="outline" size="lg">
                    Get Involved
                  </Button>
                </Link>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 pt-8 border-t border-neutral-200">
                <div>
                  <p className="text-3xl font-bold text-primary-600">50K+</p>
                  <p className="text-sm text-neutral-600">Lives Impacted</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-primary-600">15+</p>
                  <p className="text-sm text-neutral-600">Active Programs</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-primary-600">5</p>
                  <p className="text-sm text-neutral-600">Countries</p>
                </div>
              </div>
            </div>

            {/* Hero Image Placeholder */}
            <div className="hidden lg:flex items-center justify-center">
              <div className="relative w-full aspect-square rounded-2xl bg-gradient-to-br from-primary-200 to-secondary-200 overflow-hidden shadow-2xl">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <p className="text-6xl font-display font-bold text-white/50">Impact Hero</p>
                    <p className="text-neutral-100/50">Image Placeholder</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-white">
        <div className="container-max">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Our Mission",
                description:
                  "To empower women and protect children by providing access to education, health, protection, and economic opportunities.",
              },
              {
                title: "Our Vision",
                description:
                  "A world where every woman and child has the opportunity to reach their full potential and live with dignity.",
              },
              {
                title: "Our Values",
                description:
                  "Compassion, integrity, transparency, and accountability guide everything we do. Your trust is our foundation.",
              },
            ].map((item, idx) => (
              <Card key={idx} className="text-center">
                <CardTitle>{item.title}</CardTitle>
                <p className="text-neutral-600 mt-4">{item.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="py-20 bg-neutral-50">
        <div className="container-max">
          <div className="text-center mb-12">
            <p className="text-primary-600 font-semibold text-lg uppercase tracking-wide">
              What We Do
            </p>
            <h2 className="text-4xl font-display font-bold mt-2 text-neutral-900">
              Our Programs
            </h2>
            <p className="text-lg text-neutral-600 mt-4 max-w-2xl mx-auto">
              Comprehensive initiatives designed to create meaningful change in the lives of women and children.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {PROGRAM_CATEGORIES.map((category) => {
              const IconComponent = categoryIcons[category.icon as keyof typeof categoryIcons];
              return (
                <Link key={category.id} href={ROUTES.PROGRAMS}>
                  <Card hover className="h-full">
                    <div className="text-center">
                      <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 rounded-full mb-4">
                        <IconComponent className="w-8 h-8 text-primary-600" />
                      </div>
                      <CardTitle className="text-center">{category.label}</CardTitle>
                      <p className="text-neutral-600 text-sm mt-3">
                        Tailored solutions addressing specific needs in our communities.
                      </p>
                    </div>
                  </Card>
                </Link>
              );
            })}
          </div>

          <div className="text-center mt-12">
            <Link href={ROUTES.PROGRAMS}>
              <Button variant="outline" size="lg">
                Explore All Programs <FaArrowRight className="ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Impact Stories Preview */}
      <section className="py-20 bg-white">
        <div className="container-max">
          <div className="text-center mb-12">
            <p className="text-primary-600 font-semibold text-lg uppercase tracking-wide">
              Real Stories
            </p>
            <h2 className="text-4xl font-display font-bold mt-2 text-neutral-900">
              Stories of Change
            </h2>
            <p className="text-lg text-neutral-600 mt-4 max-w-2xl mx-auto">
              See the real impact we&apos;re making through the stories of those we serve.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {[1, 2, 3].map((item) => (
              <Card key={item} hover className="overflow-hidden">
                <div className="aspect-video bg-gradient-to-br from-primary-200 to-secondary-200 mb-4 rounded-lg flex items-center justify-center">
                  <p className="text-neutral-400">Story Image</p>
                </div>
                <CardTitle>Impact Story {item}</CardTitle>
                <CardDescription>
                  A powerful testimonial of personal transformation and community support.
                </CardDescription>
                <div className="mt-4">
                  <Button variant="ghost" size="sm">
                    Read Story <FaArrowRight className="ml-2" />
                  </Button>
                </div>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Link href={ROUTES.STORIES}>
              <Button variant="outline" size="lg">
                View All Stories <FaArrowRight className="ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-neutral-50">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-display font-bold text-neutral-900">
              What People Say
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {DEMO_TESTIMONIALS.map((testimonial, idx) => (
              <Card key={idx}>
                <div className="flex items-start gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-accent-400">
                      ★
                    </span>
                  ))}
                </div>
                <p className="text-neutral-700 italic mb-4">&quot;{testimonial.content}&quot;</p>
                <div className="border-t border-neutral-200 pt-4">
                  <p className="font-semibold text-neutral-900">{testimonial.name}</p>
                  <p className="text-sm text-neutral-600">{testimonial.role}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Donation Tiers Section */}
      <section className="py-20 bg-white">
        <div className="container-max">
          <div className="text-center mb-12">
            <p className="text-primary-600 font-semibold text-lg uppercase tracking-wide">
              Make a Difference
            </p>
            <h2 className="text-4xl font-display font-bold mt-2 text-neutral-900">
              Ways to Support Us
            </h2>
            <p className="text-lg text-neutral-600 mt-4 max-w-2xl mx-auto">
              Every donation directly funds programs that change lives. Choose a giving level that works for you.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-12">
            {DONATION_TIERS.map((tier) => (
              <Card key={tier.amount} className="text-center relative" hover>
                <div className="text-4xl font-bold text-primary-600 mb-2">
                  ${tier.amount}
                </div>
                <CardTitle className="text-lg">{tier.label}</CardTitle>
                <p className="text-neutral-600 text-sm mt-2">{tier.description}</p>
                <Button className="w-full mt-6">Donate</Button>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Link href={ROUTES.DONATE}>
              <Button size="lg">View All Donation Options</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary-600 to-secondary-600 text-white">
        <div className="container-max text-center">
          <h2 className="text-4xl font-display font-bold mb-4">
            Ready to Make an Impact?
          </h2>
          <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
            Join us in our mission to empower women and protect children. Whether through donations, volunteering, or advocacy, every action counts.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href={ROUTES.DONATE}>
              <Button className="bg-white text-primary-600 hover:bg-neutral-100">
                Donate Now
              </Button>
            </Link>
            <Link href={ROUTES.CONTACT}>
              <Button variant="outline" className="border-white text-white hover:bg-white/10">
                Get in Touch
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
