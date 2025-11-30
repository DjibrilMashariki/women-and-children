import React from "react";
import Image from "next/image";
import { GradientButton } from "./GradientButton";
import { GlassCard } from "./GlassCard";
import { ParticleField } from "../common/DynamicBackground";

export function HeroSection() {
    return (
        <section className="relative w-full min-h-[90vh] flex items-center justify-center overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/images/hero/hero-new.webp"
                    alt="Women and Children's Voice Hero"
                    fill
                    className="object-cover"
                    priority
                />
                {/* Gradient Overlay for Readability */}
                <div className="absolute inset-0 bg-gradient-to-r from-neutral-900/90 via-neutral-900/60 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-transparent to-transparent" />
                <ParticleField count={20} className="z-10" />
            </div>

            {/* Content Container */}
            <div className="relative z-10 container mx-auto px-4 md:px-6 flex flex-col md:flex-row items-center gap-12">

                {/* Text Content */}
                <div className="flex-1 text-white space-y-8 animate-fade-in-up text-center md:text-left">
                    <div className="space-y-4">
                        <span className="inline-block px-4 py-1.5 rounded-full bg-brand-primary/20 border border-brand-primary/30 text-white text-sm font-medium backdrop-blur-sm">
                            <span className="text-brand-primary">We are the voice for the voiceless.</span>
                        </span>
                        <h1 className="text-5xl md:text-7xl font-display font-bold leading-tight tracking-tight">
                            Amplifying the voices of <br />
                            <span className="text-brand-primary drop-shadow-md">
                                women and children.
                            </span>
                        </h1>
                        <p className="text-lg md:text-xl text-neutral-200 max-w-xl font-light leading-relaxed">
                            In pursuit of peace, empowerment, and social justice. Join us in making a lasting difference.
                        </p>
                    </div>

                    <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                        <GradientButton size="lg" className="shadow-orange-glow">
                            Donate Now
                        </GradientButton>
                        <GradientButton variant="secondary" size="lg" className="bg-white/10 border-white/20 text-white hover:bg-white/20 backdrop-blur-sm">
                            Our Programs
                        </GradientButton>
                    </div>

                    <div className="flex items-center gap-8 pt-8 border-t border-white/10 justify-center md:justify-start">
                        <div>
                            <p className="text-3xl font-bold font-display">10k+</p>
                            <p className="text-sm text-neutral-400">Lives Impacted</p>
                        </div>
                        <div>
                            <p className="text-3xl font-bold font-display">50+</p>
                            <p className="text-sm text-neutral-400">Communities Served</p>
                        </div>
                        <div>
                            <p className="text-3xl font-bold font-display">100%</p>
                            <p className="text-sm text-neutral-400">Commitment</p>
                        </div>
                    </div>
                </div>

                {/* Floating Card (Visual Interest) - Redesigned for Subtlety */}
                <div className="hidden md:block w-1/3 animate-float">
                    <GlassCard className="p-6 max-w-sm mx-auto transform rotate-3 hover:rotate-0 transition-transform duration-500 border border-white/10 bg-black/20 backdrop-blur-md">
                        <div className="space-y-4">
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-full bg-brand-primary/10 flex items-center justify-center text-brand-primary border border-brand-primary/20">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="font-bold text-white text-lg">Urgent Cause</h3>
                                    <p className="text-xs text-neutral-400 font-light">Education for All</p>
                                </div>
                            </div>
                            <p className="text-sm text-neutral-300 font-light leading-relaxed">
                                Help us provide school supplies to 500 children in need this month. Every donation counts.
                            </p>
                            <div className="w-full bg-neutral-800 rounded-full h-1.5 overflow-hidden">
                                <div className="bg-brand-primary h-full w-[75%]" />
                            </div>
                            <div className="flex justify-between text-xs text-neutral-400">
                                <span>Raised: $7,500</span>
                                <span>Goal: $10,000</span>
                            </div>
                            <GradientButton size="sm" className="w-full bg-brand-primary/90 hover:bg-brand-primary text-white border-none shadow-none">
                                Support This Cause
                            </GradientButton>
                        </div>
                    </GlassCard>
                </div>
            </div>
        </section>
    );
}
