import React from "react";
import { cn } from "@/lib/utils/cn";

interface GradientButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
    className?: string;
    variant?: "primary" | "secondary" | "outline";
    size?: "sm" | "md" | "lg";
}

export function GradientButton({
    children,
    className,
    variant = "primary",
    size = "md",
    ...props
}: GradientButtonProps) {
    const variants = {
        primary: "bg-gradient-brand text-white shadow-lg shadow-brand-primary/20 hover:shadow-brand-primary/40 border-transparent",
        secondary: "bg-white dark:bg-neutral-800 text-neutral-900 dark:text-white border-neutral-200 dark:border-neutral-700 hover:bg-neutral-50 dark:hover:bg-neutral-700",
        outline: "bg-transparent border-brand-primary text-brand-primary hover:bg-brand-primary/10",
    };

    const sizes = {
        sm: "px-4 py-2 text-sm",
        md: "px-6 py-3 text-base",
        lg: "px-8 py-4 text-lg",
    };

    return (
        <button
            className={cn(
                "relative inline-flex items-center justify-center font-semibold rounded-xl transition-all duration-300 transform active:scale-95 border",
                "hover:-translate-y-0.5",
                variants[variant],
                sizes[size],
                className
            )}
            {...props}
        >
            {children}
        </button>
    );
}
