import React, { useEffect, useRef } from 'react';
import { useAnimatedCounter } from '@/lib/hooks/useInteractions';

interface AnimatedCounterProps {
  end: number;
  duration?: number;
  suffix?: string;
  className?: string;
}

export function AnimatedCounter({
  end,
  duration = 2000,
  suffix = '',
  className = ''
}: AnimatedCounterProps) {
  const { count, startAnimation, isVisible } = useAnimatedCounter(end, duration);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          startAnimation();
        }
      },
      { threshold: 0.5 }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [startAnimation, isVisible]);

  return (
    <span
      ref={ref}
      className={`inline-block font-bold tabular-nums ${className}`}
    >
      {count.toLocaleString()}{suffix}
    </span>
  );
}

interface GradientTextProps {
  children: React.ReactNode;
  gradient?: string;
  darkGradient?: string;
  className?: string;
}

export function GradientText({
  children,
  gradient = 'from-brand-600 to-secondary-600',
  darkGradient = 'dark:from-orange-400 dark:to-orange-500',
  className = ''
}: GradientTextProps) {
  return (
    <span
      className={`inline-block bg-gradient-to-r ${gradient} ${darkGradient} bg-clip-text text-transparent ${className}`}
    >
      {children}
    </span>
  );
}