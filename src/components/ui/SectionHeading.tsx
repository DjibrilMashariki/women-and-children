import React from "react";
import { cn } from "@/lib/utils/cn";

interface SectionHeadingProps {
    title: string;
    subtitle?: string;
    centered?: boolean;
    className?: string;
}

export function SectionHeading({
    title,
    subtitle,
    centered = false,
    className,
}: SectionHeadingProps) {
    return (
        <div className={cn("space-y-4 mb-12", centered && "text-center", className)}>
            {subtitle && (
                <span className="inline-block px-4 py-1.5 rounded-full bg-brand-primary/10 text-brand-primary text-sm font-semibold tracking-wide uppercase">
                    {subtitle}
                </span>
            )}
            <h2 className="text-3xl md:text-5xl font-display font-bold text-neutral-900 dark:text-white leading-tight">
                {title.split(" ").map((word, i) => (
                    <span key={i} className={cn(i % 3 === 1 ? "text-orange-600" : "")}>
                        {word}{" "}
                    </span>
                ))}
            </h2>
            <div className={cn("h-1.5 w-24 rounded-full bg-gradient-brand", centered && "mx-auto")} />
        </div>
    );
}
