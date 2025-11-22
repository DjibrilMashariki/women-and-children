"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";

interface BeforeAfterImage {
  before: string;
  after: string;
  title: string;
  description: string;
  location: string;
}

const transformationStories: BeforeAfterImage[] = [
  {
    before: "/images/hero/4B74F645-0FAE-4E7A-A5BA-F0600D3B50D8.jpeg",
    after: "/images/hero/8CA44AAB-AA35-4F5C-8FE5-D2C3C35FE6EA.jpeg",
    title: "Education Transformation",
    description: "From no formal education to thriving in school with full supplies and support",
    location: "Rutshuru, DRC"
  },
  {
    before: "/images/hero/ADCCDAEB-A461-4E40-B01E-234AB8D12BB9.jpeg",
    after: "/images/hero/D39AF81D-82DF-4BDB-88E9-E5FD9F1E1879.jpeg",
    title: "Community Healthcare",
    description: "Healthcare access improved from crisis response to preventive care programs",
    location: "Goma, DRC"
  },
  {
    before: "/images/hero/F8506FFD-2E92-4137-A278-AAE4737CF4C4.jpeg",
    after: "/images/hero/4B74F645-0FAE-4E7A-A5BA-F0600D3B50D8.jpeg",
    title: "Women's Empowerment",
    description: "From economic dependency to independent artisan business owners",
    location: "Bukavu, DRC"
  }
];

export function BeforeAfterSlider() {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const activeStory = transformationStories[activeIndex];

  // Handle mouse drag
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDragging) return;
    
    const rect = e.currentTarget.getBoundingClientRect();
    const x = Math.max(0, Math.min(e.clientX - rect.left, rect.width));
    const percent = Math.max(0, Math.min((x / rect.width) * 100, 100));
    setSliderPosition(percent);
  };

  // Handle touch drag
  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    if (!isDragging) return;
    
    const rect = e.currentTarget.getBoundingClientRect();
    const x = Math.max(0, Math.min(e.touches[0].clientX - rect.left, rect.width));
    const percent = Math.max(0, Math.min((x / rect.width) * 100, 100));
    setSliderPosition(percent);
  };

  // Mobile swipe gesture detection
  useEffect(() => {
    let startX = 0;

    const handleTouchStart = (e: TouchEvent) => {
      startX = e.touches[0].clientX;
    };

    const handleTouchEnd = (e: TouchEvent) => {
      const endX = e.changedTouches[0].clientX;
      const diff = startX - endX;

      // Swipe threshold: 50px
      if (Math.abs(diff) > 50) {
        if (diff > 0 && activeIndex < transformationStories.length - 1) {
          // Swipe left - next story
          setActiveIndex(activeIndex + 1);
          setSliderPosition(50);
        } else if (diff < 0 && activeIndex > 0) {
          // Swipe right - previous story
          setActiveIndex(activeIndex - 1);
          setSliderPosition(50);
        }
      }
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener('touchstart', handleTouchStart);
      container.addEventListener('touchend', handleTouchEnd);
    }

    return () => {
      if (container) {
        container.removeEventListener('touchstart', handleTouchStart);
        container.removeEventListener('touchend', handleTouchEnd);
      }
    };
  }, [activeIndex]);

  return (
    <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-neutral-200 dark:bg-neutral-800 dark:border-neutral-700">
      {/* Header */}
      <div className="bg-gradient-to-r from-primary-500 to-primary-600 dark:from-primary-600 dark:to-primary-700 px-8 py-6">
        <h3 className="text-2xl font-black text-white mb-2">Transformation Stories</h3>
        <p className="text-white/90 text-sm">
          <span className="hidden md:inline">Drag the slider to see the impact of your support</span>
          <span className="md:hidden">Swipe between stories • Drag slider to compare</span>
        </p>
      </div>

      <div className="p-4 md:p-8">
        {/* Story Selector - Scrollable on mobile */}
        <div className="flex gap-2 md:gap-3 mb-6 overflow-x-auto pb-2 -mx-4 px-4 md:mx-0 md:px-0">
          {transformationStories.map((story, idx) => (
            <button
              key={idx}
              onClick={() => {
                setActiveIndex(idx);
                setSliderPosition(50);
              }}
              className={`
                flex-shrink-0 px-4 md:px-6 py-2 md:py-3 rounded-xl 
                font-semibold text-xs md:text-sm transition-all duration-300
                min-h-[48px] min-w-[120px]
                ${
                activeIndex === idx
                  ? "bg-gradient-to-r from-primary-500 to-primary-600 text-white shadow-lg scale-105 dark:from-primary-600 dark:to-primary-700"
                  : "bg-neutral-100 text-neutral-700 hover:bg-neutral-200 dark:bg-neutral-700 dark:text-neutral-300 dark:hover:bg-neutral-600"
              }`}
            >
              {story.title}
            </button>
          ))}
        </div>

        {/* Before/After Slider Container */}
        <div
          ref={containerRef}
          className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden cursor-ew-resize select-none shadow-xl touch-none"
          onMouseMove={handleMouseMove}
          onMouseDown={() => setIsDragging(true)}
          onMouseUp={() => setIsDragging(false)}
          onMouseLeave={() => setIsDragging(false)}
          onTouchMove={handleTouchMove}
          onTouchStart={() => setIsDragging(true)}
          onTouchEnd={() => setIsDragging(false)}
        >
          {/* After Image (Full Width) */}
          <div className="absolute inset-0">
            <Image
              src={activeStory.after}
              alt={`${activeStory.title} - After`}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 800px"
            />
            {/* After Label */}
            <div className="absolute top-4 right-4 px-4 py-2 bg-emerald-500 text-white text-sm font-bold rounded-full shadow-lg">
              AFTER
            </div>
          </div>

          {/* Before Image (Clipped by slider position) */}
          <div
            className="absolute inset-0 overflow-hidden"
            style={{ width: `${sliderPosition}%` }}
          >
            <Image
              src={activeStory.before}
              alt={`${activeStory.title} - Before`}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 800px"
            />
            {/* Before Label */}
            <div className="absolute top-4 left-4 px-4 py-2 bg-neutral-700 text-white text-sm font-bold rounded-full shadow-lg">
              BEFORE
            </div>
          </div>

          {/* Slider Handle - Larger for mobile (48px touch target) */}
          <div
            className="absolute top-0 bottom-0 w-1 bg-white shadow-2xl"
            style={{ left: `${sliderPosition}%` }}
          >
            {/* Handle Circle - 48px min for mobile */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 md:w-14 md:h-14 bg-white rounded-full shadow-2xl border-4 border-primary-500 flex items-center justify-center cursor-grab active:cursor-grabbing">
              {/* Arrows */}
              <div className="flex gap-0.5">
                <svg className="w-4 h-4 md:w-3 md:h-3 text-primary-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <svg className="w-4 h-4 md:w-3 md:h-3 text-primary-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Story Details */}
        <div className="mt-6 p-4 md:p-6 bg-gradient-to-br from-orange-50 to-orange-100 dark:from-orange-950 dark:to-orange-900 rounded-2xl">
          <div className="flex items-start justify-between mb-3">
            <div>
              <h4 className="text-xl font-black text-neutral-900 mb-1 dark:text-white">{activeStory.title}</h4>
              <div className="flex items-center gap-2 text-sm text-neutral-600 dark:text-neutral-400">
                <svg className="w-4 h-4 text-orange-600 dark:text-orange-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
                <span>{activeStory.location}</span>
              </div>
            </div>
            <div className="flex items-center gap-1">
              <svg className="w-5 h-5 text-orange-600 dark:text-orange-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="text-sm font-bold text-orange-600 dark:text-orange-400">Verified Impact</span>
            </div>
          </div>
          <p className="text-neutral-700 leading-relaxed dark:text-neutral-300">{activeStory.description}</p>
        </div>

        {/* Instructions */}
        <div className="mt-6 flex items-center justify-center gap-2 text-sm text-neutral-500 dark:text-neutral-400">
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
          </svg>
          <span>Drag the slider or use touch to compare before & after</span>
        </div>
      </div>
    </div>
  );
}
