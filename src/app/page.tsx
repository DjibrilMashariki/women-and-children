import { Button } from "@/components/common/Button";
import { Card, CardDescription, CardTitle } from "@/components/common/Card";
import { ROUTES, ORG_NAME, PROGRAM_CATEGORIES, DEMO_TESTIMONIALS, DONATION_TIERS } from "@/lib/utils/constants";
import Link from "next/link";
import Image from "next/image";
import { FaGraduationCap, FaHeart, FaShieldAlt, FaArrowRight } from "react-icons/fa";
import { HeroSection } from "@/components/ui/HeroSection";
import { TrustBadges } from "@/components/common/TrustBadges";
import { PartnerLogos } from "@/components/common/PartnerLogos";

const categoryIcons: Record<string, React.ElementType> = {
  GraduationCap: FaGraduationCap,
  Heart: FaHeart,
  Shield: FaShieldAlt,
  TrendingUp: FaArrowRight,
};

export default function HomePage() {
  return (
    <div className="w-full">
      {/* Hero Section - Polished & Reinvented */}
      <HeroSection />

      {/* Working Together Section - Realistic Imagery & Partners */}
      <section className="py-20 bg-neutral-900">
        <div className="container-max">
          <div className="text-center mb-12">
            <p className="text-brand-primary font-semibold text-lg uppercase tracking-wide">
              Community First
            </p>
            <h2 className="text-4xl font-display font-bold mt-2 text-white">
              Working Together
            </h2>
            <p className="text-lg text-neutral-300 mt-4 max-w-2xl mx-auto">
              Real connection, real impact. We work hand-in-hand with local communities to build sustainable solutions.
            </p>
          </div>

          {/* Realistic Imagery Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {/* Image 1 */}
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden group shadow-lg">
              <Image
                src="/images/hero/hero-new.webp" // Using the hero image as one, need more but for now reusing or placeholders if I can't copy all
                alt="Community gathering"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-80" />
              <div className="absolute bottom-0 left-0 p-6">
                <p className="text-white font-bold text-lg">Community Led</p>
                <p className="text-white/80 text-sm">Solutions that start from within.</p>
              </div>
            </div>
            {/* Image 2 - Placeholder for now as I only copied one, but structure is ready */}
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden group shadow-lg">
              <div className="absolute inset-0 bg-neutral-200 dark:bg-neutral-800 flex items-center justify-center">
                <p className="text-neutral-500">Image: Women's Group</p>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-80" />
              <div className="absolute bottom-0 left-0 p-6">
                <p className="text-white font-bold text-lg">Women's Empowerment</p>
                <p className="text-white/80 text-sm">Building economic independence.</p>
              </div>
            </div>
            {/* Image 3 */}
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden group shadow-lg md:col-span-2 lg:col-span-1">
              <div className="absolute inset-0 bg-neutral-200 dark:bg-neutral-800 flex items-center justify-center">
                <p className="text-neutral-500">Image: Child Education</p>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-80" />
              <div className="absolute bottom-0 left-0 p-6">
                <p className="text-white font-bold text-lg">Child Protection</p>
                <p className="text-white/80 text-sm">Ensuring a safe future for every child.</p>
              </div>
            </div>
          </div>

          {/* Partner Logos */}
          <PartnerLogos />
        </div>
      </section>

      {/* Trust & Transparency Section */}
      <TrustBadges />

      {/* Programs Section */}
      <section className="py-20 bg-neutral-50 dark:bg-neutral-900/50">
        <div className="container-max">
          <div className="text-center mb-12">
            <p className="text-brand-600 dark:text-brand-primary font-semibold text-lg uppercase tracking-wide">
              What We Do
            </p>
            <h2 className="text-4xl font-display font-bold mt-3 text-brand-primary">
              Our Impact
            </h2>
            <p className="text-lg text-neutral-600 dark:text-neutral-300 mt-4 max-w-2xl mx-auto">
              Comprehensive initiatives designed to create meaningful change in the lives of women and children.
            </p>
          </div>

          <div className="text-center mt-12">
            <Link href={ROUTES.PROGRAMS}>
              <Button variant="outline" size="lg" className="dark:text-white dark:border-neutral-600 dark:hover:bg-neutral-800">
                Explore All Programs <FaArrowRight className="ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Impact Stories Preview */}
      <section className="py-20 bg-white dark:bg-neutral-900">
        <div className="container-max">
          <div className="text-center mb-12">
            <p className="text-brand-600 dark:text-brand-primary font-semibold text-lg uppercase tracking-wide">
              Real Stories
            </p>
            <h2 className="text-4xl font-display font-bold mt-3 text-neutral-900 dark:text-brand-primary">
              Stories of Change
            </h2>
            <p className="text-lg text-neutral-600 dark:text-neutral-300 mt-4 max-w-2xl mx-auto">
              See the real impact we&apos;re making through the stories of those we serve.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {[1, 2, 3].map((item) => (
              <Card key={item} hover className="overflow-hidden border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-800">
                <div className="aspect-video bg-gradient-to-br from-brand-200 to-secondary-200 dark:from-brand-900/50 dark:to-secondary-900/50 mb-4 rounded-lg flex items-center justify-center">
                  <p className="text-neutral-400 dark:text-neutral-500">Story Image</p>
                </div>
                <CardTitle>Impact Story {item}</CardTitle>
                <CardDescription>
                  A powerful testimonial of personal transformation and community support.
                </CardDescription>
                <div className="mt-4">
                  <Button variant="ghost" size="sm" className="dark:text-brand-primary dark:hover:bg-neutral-700">
                    Read Story <FaArrowRight className="ml-2" />
                  </Button>
                </div>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Link href={ROUTES.STORIES}>
              <Button variant="outline" size="lg" className="dark:text-white dark:border-neutral-600 dark:hover:bg-neutral-800">
                View All Stories <FaArrowRight className="ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-neutral-50 dark:bg-neutral-900/50">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-display font-bold text-neutral-900 dark:text-brand-primary">
              What People Say
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {DEMO_TESTIMONIALS.map((testimonial, idx) => (
              <Card key={idx} className="border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-800">
                <div className="flex items-start gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-brand-400 dark:text-brand-300">
                      ★
                    </span>
                  ))}
                </div>
                <p className="text-neutral-700 dark:text-neutral-300 italic mb-4">&quot;{testimonial.content}&quot;</p>
                <div className="border-t border-neutral-200 dark:border-neutral-700 pt-4">
                  <p className="font-semibold text-neutral-900 dark:text-white">{testimonial.name}</p>
                  <p className="text-sm text-neutral-600 dark:text-neutral-400">{testimonial.role}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Donation Tiers Section */}
      <section className="py-20 bg-white dark:bg-neutral-900">
        <div className="container-max">
          <div className="text-center mb-12">
            <p className="text-brand-600 dark:text-brand-primary font-semibold text-lg uppercase tracking-wide">
              Make a Difference
            </p>
            <h2 className="text-4xl font-display font-bold mt-2 text-neutral-900 dark:text-brand-primary">
              Ways to Support Us
            </h2>
            <p className="text-lg text-neutral-600 dark:text-neutral-300 mt-4 max-w-2xl mx-auto">
              Every donation directly funds programs that change lives. Choose a giving level that works for you.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-12">
            {DONATION_TIERS.map((tier) => (
              <Card key={tier.amount} className="text-center relative border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-800" hover>
                <div className="text-4xl font-bold text-brand-600 dark:text-brand-primary mb-2">
                  ${tier.amount}
                </div>
                <CardTitle className="text-lg">{tier.label}</CardTitle>
                <p className="text-neutral-600 dark:text-neutral-300 text-sm mt-2">{tier.description}</p>
                <Button className="w-full mt-6 bg-brand-600 hover:bg-brand-700 text-white border-none">Donate</Button>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Link href={ROUTES.DONATE}>
              <Button size="lg" className="bg-brand-600 hover:bg-brand-700 text-white border-none">View All Donation Options</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-brand-600 to-secondary-600 dark:from-brand-900 dark:to-secondary-900 text-white">
        <div className="container-max text-center">
          <h2 className="text-4xl font-display font-bold mb-4 text-white">
            Ready to Make an Impact?
          </h2>
          <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
            Join us in our mission to empower women and protect children. Whether through donations, volunteering, or advocacy, every action counts.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href={ROUTES.DONATE}>
              <Button className="bg-white text-brand-600 hover:bg-neutral-100 border-none">
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
