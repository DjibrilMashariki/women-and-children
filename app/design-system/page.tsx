import React from "react";
import { HeroSection } from "@/components/ui/HeroSection";
import { GradientButton } from "@/components/ui/GradientButton";
import { GlassCard } from "@/components/ui/GlassCard";

export default function DesignSystemPage() {
    return (
        <main className="min-h-screen bg-surface-light dark:bg-surface-dark">
            <HeroSection />

            <div className="container mx-auto px-4 py-12 space-y-12">
                <section className="space-y-6">
                    <h2 className="text-3xl font-display font-bold text-neutral-900 dark:text-white">Typography & Colors</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="space-y-4">
                            <h1 className="text-5xl font-display font-bold">Display Heading (Outfit)</h1>
                            <h2 className="text-4xl font-display font-bold">Heading 2</h2>
                            <h3 className="text-3xl font-display font-bold">Heading 3</h3>
                            <p className="text-base text-neutral-600 dark:text-neutral-300">
                                Body text (Plus Jakarta Sans). Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            </p>
                        </div>
                        <div className="space-y-4">
                            <div className="h-24 rounded-xl bg-brand-primary flex items-center justify-center text-white font-bold">Brand Primary</div>
                            <div className="h-24 rounded-xl bg-brand-secondary flex items-center justify-center text-white font-bold">Brand Secondary</div>
                            <div className="h-24 rounded-xl bg-brand-accent flex items-center justify-center text-neutral-900 font-bold">Brand Accent</div>
                        </div>
                    </div>
                </section>

                <section className="space-y-6">
                    <h2 className="text-3xl font-display font-bold text-neutral-900 dark:text-white">Components</h2>

                    <div className="space-y-4">
                        <h3 className="text-xl font-semibold">Buttons</h3>
                        <div className="flex flex-wrap gap-4">
                            <GradientButton>Primary Button</GradientButton>
                            <GradientButton variant="secondary">Secondary Button</GradientButton>
                            <GradientButton variant="outline">Outline Button</GradientButton>
                        </div>
                    </div>

                    <div className="space-y-4">
                        <h3 className="text-xl font-semibold">Glass Cards</h3>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <GlassCard className="p-6" hoverEffect>
                                <h4 className="text-lg font-bold mb-2">Card Title</h4>
                                <p className="text-sm text-neutral-600 dark:text-neutral-300">This is a glassmorphism card with hover effect.</p>
                            </GlassCard>
                            <GlassCard className="p-6">
                                <h4 className="text-lg font-bold mb-2">Static Card</h4>
                                <p className="text-sm text-neutral-600 dark:text-neutral-300">This card does not have the hover lift effect.</p>
                            </GlassCard>
                        </div>
                    </div>
                </section>
            </div>
        </main>
    );
}
