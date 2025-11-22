"use client";

import { cn } from "@/lib/utils/cn";
import React from "react";

interface CardProps {
  className?: string;
  children: React.ReactNode;
  hover?: boolean;
}

export function Card({ className, children, hover = false }: CardProps) {
  return (
    <div
      className={cn(
        "bg-white rounded-lg border border-neutral-200 p-6 dark:bg-neutral-800 dark:border-neutral-700",
        hover && "hover:shadow-lg transition-shadow duration-200 cursor-pointer dark:hover:shadow-xl dark:hover:border-neutral-600",
        className
      )}
    >
      {children}
    </div>
  );
}

interface CardHeaderProps {
  className?: string;
  children: React.ReactNode;
}

export function CardHeader({ className, children }: CardHeaderProps) {
  return <div className={cn("mb-4", className)}>{children}</div>;
}

interface CardTitleProps {
  className?: string;
  children: React.ReactNode;
}

export function CardTitle({ className, children }: CardTitleProps) {
  return <h3 className={cn("text-xl font-bold text-neutral-900 dark:text-white", className)}>{children}</h3>;
}

interface CardDescriptionProps {
  className?: string;
  children: React.ReactNode;
}

export function CardDescription({ className, children }: CardDescriptionProps) {
  return <p className={cn("text-neutral-600 text-sm mt-1 dark:text-neutral-300", className)}>{children}</p>;
}

interface CardContentProps {
  className?: string;
  children: React.ReactNode;
}

export function CardContent({ className, children }: CardContentProps) {
  return <div className={cn("", className)}>{children}</div>;
}

interface CardFooterProps {
  className?: string;
  children: React.ReactNode;
}

export function CardFooter({ className, children }: CardFooterProps) {
  return (
    <div className={cn("flex items-center gap-4 mt-6 pt-6 border-t border-neutral-200 dark:border-neutral-700", className)}>
      {children}
    </div>
  );
}
