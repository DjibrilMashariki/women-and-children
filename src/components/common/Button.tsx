"use client";

import { cn } from "@/lib/utils/cn";
import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  isLoading?: boolean;
  children: React.ReactNode;
}

export function Button({
  variant = "primary",
  size = "md",
  isLoading = false,
  disabled,
  className,
  children,
  ...props
}: ButtonProps) {
  const baseStyles =
    "font-semibold rounded-lg transition-all duration-200 inline-flex items-center justify-center gap-2 whitespace-nowrap hover:-translate-y-0.5 active:scale-95 active:translate-y-0";

  const variants = {
    primary:
      "bg-gradient-to-r from-brand-600 to-brand-500 text-white hover:shadow-lg hover:from-brand-700 hover:to-brand-600 disabled:opacity-50 disabled:cursor-not-allowed dark:from-brand-600 dark:to-brand-500 dark:hover:from-brand-500 dark:hover:to-brand-400",
    secondary:
      "bg-gradient-to-r from-secondary-600 to-secondary-500 text-white hover:shadow-lg hover:from-secondary-700 hover:to-secondary-600 disabled:opacity-50 disabled:cursor-not-allowed dark:from-secondary-600 dark:to-secondary-500 dark:hover:from-secondary-500 dark:hover:to-secondary-400",
    outline:
      "border-2 border-brand-600 text-brand-600 hover:bg-brand-50 disabled:opacity-50 disabled:cursor-not-allowed dark:border-neutral-600 dark:text-white dark:hover:bg-neutral-800",
    ghost:
      "text-brand-600 hover:bg-brand-50 disabled:opacity-50 disabled:cursor-not-allowed dark:text-white dark:hover:bg-neutral-800",
  };

  const sizes = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-4 py-2 text-base",
    lg: "px-6 py-3 text-lg",
  };

  return (
    <button
      disabled={disabled || isLoading}
      className={cn(baseStyles, variants[variant], sizes[size], className)}
      {...props}
    >
      {isLoading ? (
        <>
          <span className="inline-block w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
          {children}
        </>
      ) : (
        children
      )}
    </button>
  );
}
