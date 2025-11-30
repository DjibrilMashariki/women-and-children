import React from 'react';
import Image from 'next/image';
import { cn } from '@/lib/utils/cn';

interface HeroProps {
    title: string;
    subtitle?: string;
    badge?: string;
    backgroundImage: string;
    height?: string;
    children?: React.ReactNode;
    className?: string;
    overlayOpacity?: number;
    align?: 'left' | 'center';
    titleClassName?: string;
}

const Hero = ({
    title,
    subtitle,
    badge,
    backgroundImage,
    height = 'min-h-[60vh]',
    children,
    className,
    overlayOpacity = 0.5,
    align = 'center',
    titleClassName,
}: HeroProps) => {
    return (
        <section className={cn('relative w-full flex items-center overflow-hidden', height, className)}>
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <Image
                    src={backgroundImage}
                    alt={title}
                    fill
                    className="object-cover object-center"
                    priority
                />
                {/* Overlay */}
                <div
                    className="absolute inset-0 bg-black"
                    style={{ opacity: overlayOpacity }}
                />
            </div>

            {/* Content */}
            <div className={cn(
                "relative z-10 container mx-auto px-6 sm:px-6 lg:px-8 text-white",
                align === 'center' ? 'text-center' : 'text-left'
            )}>
                <div className={cn(
                    "space-y-6",
                    align === 'center' ? 'mx-auto max-w-4xl' : 'max-w-3xl'
                )}>
                    {badge && (
                        <div className="inline-block">
                            <span className="px-4 py-2 bg-brand-600/20 border border-brand-600 text-brand-500 text-sm font-semibold uppercase tracking-wider rounded-full">
                                {badge}
                            </span>
                        </div>
                    )}

                    {subtitle && (
                        <p className="text-lg md:text-xl font-medium text-brand-100 uppercase tracking-wider animate-fade-in-up">
                            {subtitle}
                        </p>
                    )}

                    <h1 className={cn(
                        "text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight animate-fade-in-up delay-100",
                        titleClassName
                    )}>
                        {title}
                    </h1>

                    {children && (
                        <div className="mt-8 animate-fade-in-up delay-200">
                            {children}
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
};

export default Hero;
