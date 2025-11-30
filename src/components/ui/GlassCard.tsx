import React from "react";
import { cn } from "@/lib/utils/cn";

interface GlassCardProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
    className?: string;
    hoverEffect?: boolean;
}

export function GlassCard({
    children,
    className,
    hoverEffect = false,
    ...props
}: GlassCardProps) {
    return (
        <div
            className={cn(
                "relative overflow-hidden rounded-2xl border border-white/20 bg-white/70 dark:bg-neutral-900/60 backdrop-blur-md shadow-sm transition-all duration-300",
                hoverEffect && "hover:shadow-lg hover:-translate-y-1 hover:bg-white/80 dark:hover:bg-neutral-900/80",
                className
            )}
            {...props}
        >
            {/* Gradient Glow Effect (Subtle) */}
            <div className="absolute -top-24 -right-24 w-48 h-48 bg-brand-primary/5 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-brand-secondary/5 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10">{children}</div>
        </div>
    );
}
