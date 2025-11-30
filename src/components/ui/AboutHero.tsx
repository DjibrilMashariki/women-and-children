import React from "react";
import { ParticleField } from "../common/DynamicBackground";
import { GradientText } from "../common/AnimatedText";

export function AboutHero() {
    return (
        <section className="relative w-full py-32 lg:py-48 flex items-center justify-center overflow-hidden bg-white dark:bg-neutral-950 transition-colors duration-300">
            {/* Background Layer with Image and Particles */}
            <ParticleField
                count={12}
                backgroundImage="/images/programs/MG_2368-scaled.webp"
                backgroundOpacity={0.35}
                backgroundBlendMode="screen"
            />
            {/* Pure black overlay for better text contrast */}
            <div className="absolute inset-0 bg-black" />

            {/* Content Container */}
            <div className="relative z-10 container mx-auto px-4 text-center">
                <div className="max-w-4xl mx-auto space-y-6 animate-fade-in-up">
                    {/* Label */}
                    <div className="flex items-center justify-center gap-4 mb-4">
                        <div className="h-px w-12 bg-orange-500/50"></div>
                        <span className="inline-block px-4 py-1.5 rounded-full bg-orange-100 dark:bg-orange-900/30 text-white text-sm font-bold tracking-wide uppercase">
                            About Us
                        </span>
                        <div className="h-px w-12 bg-orange-500/50"></div>
                    </div>

                    {/* Main Heading */}
                    <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold text-white leading-tight">
                        Our Story, <br />
                        <span className="text-white">
                            Vision & Mission
                        </span>
                    </h1>

                    {/* Description */}
                    <p className="text-xl md:text-2xl text-white max-w-2xl mx-auto leading-relaxed font-light">
                        Amplifying the voices of women and children in pursuit of peace, empowerment, and social justice.
                    </p>
                </div>
            </div>
        </section>
    );
}
