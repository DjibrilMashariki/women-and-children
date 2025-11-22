/**
 * Performance Optimization Utilities
 * Lazy loading, code splitting, and animation performance helpers
 */

import { useEffect, useState } from 'react';

/**
 * Hook for lazy loading components on intersection
 */
export function useLazyLoad(threshold = 0.1) {
  const [isInView, setIsInView] = useState(false);
  const [node, setNode] = useState<Element | null>(null);

  useEffect(() => {
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { threshold }
    );

    observer.observe(node);

    return () => observer.disconnect();
  }, [node, threshold]);

  return [setNode, isInView] as const;
}

/**
 * Debounce function for performance optimization
 */
export function debounce<T extends (...args: any[]) => any>(
  func: T,
  wait: number
): (...args: Parameters<T>) => void {
  let timeout: NodeJS.Timeout;

  return function executedFunction(...args: Parameters<T>) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };

    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

/**
 * Throttle function for scroll/resize events
 */
export function throttle<T extends (...args: any[]) => any>(
  func: T,
  limit: number
): (...args: Parameters<T>) => void {
  let inThrottle: boolean;

  return function executedFunction(...args: Parameters<T>) {
    if (!inThrottle) {
      func(...args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
}

/**
 * Request Animation Frame wrapper for smooth 60fps animations
 */
export function rafThrottle<T extends (...args: any[]) => any>(
  callback: T
): (...args: Parameters<T>) => void {
  let rafId: number | null = null;

  return function throttled(...args: Parameters<T>) {
    if (rafId) return;

    rafId = requestAnimationFrame(() => {
      callback(...args);
      rafId = null;
    });
  };
}

/**
 * Image preloader for performance
 */
export function preloadImage(src: string): Promise<void> {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve();
    img.onerror = reject;
    img.src = src;
  });
}

/**
 * Batch multiple images preload
 */
export async function preloadImages(sources: string[]): Promise<void[]> {
  return Promise.all(sources.map(preloadImage));
}

/**
 * Hook to detect if device prefers reduced data usage
 */
export function useSaveData(): boolean {
  const [saveData, setSaveData] = useState(false);

  useEffect(() => {
    if ('connection' in navigator) {
      const connection = (navigator as any).connection;
      setSaveData(connection?.saveData || false);
    }
  }, []);

  return saveData;
}

/**
 * Get optimal image quality based on connection
 */
export function getOptimalImageQuality(): 'low' | 'medium' | 'high' {
  if (typeof navigator === 'undefined') return 'high';

  const connection = (navigator as any).connection;

  if (!connection) return 'high';

  const effectiveType = connection.effectiveType;

  if (effectiveType === '4g') return 'high';
  if (effectiveType === '3g') return 'medium';
  return 'low';
}

/**
 * Measure component render performance
 */
export function measurePerformance(componentName: string, callback: () => void) {
  const startTime = performance.now();
  callback();
  const endTime = performance.now();
  
  if (process.env.NODE_ENV === 'development') {
    console.log(`[Performance] ${componentName}: ${(endTime - startTime).toFixed(2)}ms`);
  }
}

/**
 * Hook for detecting slow network conditions
 */
export function useSlowConnection(): boolean {
  const [isSlowConnection, setIsSlowConnection] = useState(false);

  useEffect(() => {
    if ('connection' in navigator) {
      const connection = (navigator as any).connection;
      const effectiveType = connection?.effectiveType;
      
      setIsSlowConnection(
        effectiveType === 'slow-2g' || 
        effectiveType === '2g' || 
        connection?.downlink < 1
      );

      const handleChange = () => {
        setIsSlowConnection(
          connection.effectiveType === 'slow-2g' ||
          connection.effectiveType === '2g' ||
          connection.downlink < 1
        );
      };

      connection?.addEventListener('change', handleChange);
      return () => connection?.removeEventListener('change', handleChange);
    }
  }, []);

  return isSlowConnection;
}
