import React from "react";
import Image from "next/image";
import { GlassCard } from "./GlassCard";
import { GradientButton } from "./GradientButton";

interface ProgramCardProps {
    title: string;
    description: string;
    imageSrc: string;
    icon?: React.ReactNode;
    href?: string;
}

export function ProgramCard({
    title,
    description,
    imageSrc,
    icon,
    href = "#",
}: ProgramCardProps) {
    return (
        <GlassCard className="h-full flex flex-col group" hoverEffect>
            <div className="relative h-48 overflow-hidden">
                <Image
                    src={imageSrc}
                    alt={title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/80 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-300" />

                {icon && (
                    <div className="absolute top-4 right-4 w-12 h-12 rounded-xl bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center text-white shadow-lg">
                        {icon}
                    </div>
                )}
            </div>

            <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-xl font-display font-bold text-neutral-900 dark:text-white mb-3 group-hover:text-brand-primary transition-colors">
                    {title}
                </h3>
                <p className="text-neutral-600 dark:text-neutral-300 text-sm leading-relaxed mb-6 flex-1">
                    {description}
                </p>

                <div className="mt-auto">
                    <span className="text-brand-primary font-semibold text-sm flex items-center gap-2 group-hover:translate-x-2 transition-transform">
                        Learn More
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </span>
                </div>
            </div>
        </GlassCard>
    );
}
