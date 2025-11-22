import { useEffect } from 'react';

export function useScrollAnimation() {
  useEffect(() => {
    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fadeInUp');
          entry.target.classList.remove('opacity-0', 'translate-y-8');
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, {
      threshold: 0.05, // Trigger earlier (was 0.1)
      rootMargin: '50px 0px -30px 0px' // Start animation sooner
    });

    // Observe all sections
    const sections = document.querySelectorAll('.scroll-animate');
    sections.forEach((section) => {
      // Don't hide section headers/titles
      const header = section.querySelector('.text-center');
      if (header) {
        header.classList.remove('opacity-0', 'translate-y-8');
      }
      
      section.classList.add('opacity-0', 'translate-y-8', 'transition-all', 'duration-700');
      observer.observe(section);
    });

    // Cleanup
    return () => {
      sections.forEach((section) => {
        observer.unobserve(section);
      });
    };
  }, []);
}

export function useStaggeredAnimation(selector: string, delay: number = 100) {
  useEffect(() => {
    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const children = entry.target.querySelectorAll(selector);
          children.forEach((child, index) => {
            setTimeout(() => {
              child.classList.add('animate-fadeInUp');
              child.classList.remove('opacity-0', 'translate-y-4');
            }, index * delay);
          });
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, {
      threshold: 0.1,
      rootMargin: '0px 0px -30px 0px'
    });

    const containers = document.querySelectorAll('.stagger-animate');
    containers.forEach((container) => {
      const children = container.querySelectorAll(selector);
      children.forEach((child) => {
        child.classList.add('opacity-0', 'translate-y-4', 'transition-all', 'duration-500');
      });
      observer.observe(container);
    });

    return () => {
      containers.forEach((container) => {
        observer.unobserve(container);
      });
    };
  }, [selector, delay]);
}