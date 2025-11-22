'use client';

import React, { useEffect, useState } from 'react';

interface FloatingShapeProps {
  size?: number;
  color?: string;
  duration?: number;
  delay?: number;
  shape?: 'circle' | 'square' | 'triangle';
  index?: number;
}

export function FloatingShape({ 
  size = 40, 
  color = 'bg-primary-200', 
  duration = 8, 
  delay = 0,
  shape = 'circle',
  index = 0,
}: FloatingShapeProps) {
  const [mounted, setMounted] = useState(false);
  
  // Use deterministic positioning based on index to avoid hydration mismatches
  const [position] = useState(() => {
    if (typeof window === 'undefined') {
      return { x: 0, y: 0 };
    }
    // Use golden angle for even distribution
    const seed = index * 137.508; // Golden angle in degrees
    const x = (Math.sin(seed) * 0.5 + 0.5) * (window.innerWidth - size);
    const y = (Math.cos(seed) * 0.5 + 0.5) * (window.innerHeight - size);
    return { x, y };
  });

  useEffect(() => {
    setMounted(true);
  }, []);

  const shapeClasses = {
    circle: 'rounded-full',
    square: 'rounded-lg rotate-45',
    triangle: 'rounded-sm'
  };

  // Dark mode color mappings
  const darkColorMap: { [key: string]: string } = {
    'bg-primary-200': 'dark:bg-primary-900',
    'bg-secondary-200': 'dark:bg-secondary-900',
    'bg-accent-200': 'dark:bg-accent-900'
  };

  // Suppress hydration warning for this element since content differs server/client
  return (
    <div
      suppressHydrationWarning
      className={`absolute ${color} ${darkColorMap[color] || 'dark:bg-neutral-800'} ${shapeClasses[shape]} opacity-10 dark:opacity-5 pointer-events-none ${mounted ? 'animate-float' : ''}`}
      style={{
        width: size,
        height: size,
        left: mounted ? position.x : 0,
        top: mounted ? position.y : 0,
        animationDuration: `${duration}s`,
        animationDelay: `${delay}s`,
      }}
    />
  );
}

interface ParticleFieldProps {
  count?: number;
  className?: string;
  backgroundImage?: string;
  backgroundOpacity?: number;
  backgroundBlendMode?: 'multiply' | 'screen' | 'overlay' | 'darken' | 'lighten';
}

export function ParticleField({ 
  count = 15, 
  className = '',
  backgroundImage,
  backgroundOpacity = 0.3,
  backgroundBlendMode = 'overlay'
}: ParticleFieldProps) {
  const [mounted, setMounted] = useState(false);
  
  // Use deterministic particles based on count to avoid hydration mismatches
  const [particles] = useState(() => {
    const shapes = ['circle', 'square', 'triangle'] as const;
    const colors = ['bg-primary-200', 'bg-secondary-200', 'bg-accent-200'];
    
    // Create a simple seeded random function
    const seededRandom = (seed: number) => {
      const x = Math.sin(seed) * 10000;
      return x - Math.floor(x);
    };
    
    return Array.from({ length: count }, (_, i) => {
      const seed = i * 2654435761; // Large prime for good distribution
      return {
        size: 20 + seededRandom(seed) * 60,
        color: colors[Math.floor(seededRandom(seed + 1) * colors.length)],
        duration: 6 + seededRandom(seed + 2) * 8,
        delay: seededRandom(seed + 3) * 5,
        shape: shapes[Math.floor(seededRandom(seed + 4) * shapes.length)]
      };
    });
  });

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div suppressHydrationWarning className={`absolute inset-0 overflow-hidden ${className}`}>
      {/* Background Image Layer */}
      {backgroundImage && (
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(${backgroundImage})`,
            opacity: backgroundOpacity,
            mixBlendMode: backgroundBlendMode as any,
          }}
        />
      )}
      
      {/* Particles Layer - renders on top of background */}
      {mounted && particles.map((particle, i) => (
        <FloatingShape
          key={i}
          index={i}
          size={particle.size}
          color={particle.color}
          duration={particle.duration}
          delay={particle.delay}
          shape={particle.shape}
        />
      ))}
    </div>
  );
}

export function ScrollParallax({ 
  children, 
  speed = 0.5, 
  className = '' 
}: { 
  children: React.ReactNode; 
  speed?: number; 
  className?: string; 
}) {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setOffset(window.pageYOffset * speed);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [speed]);

  return (
    <div
      className={`relative ${className}`}
      style={{ transform: `translateY(${offset}px)` }}
    >
      {children}
    </div>
  );
}