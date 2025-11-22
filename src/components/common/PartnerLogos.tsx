"use client";

import React from "react";

interface Partner {
  name: string;
  logo: string;
  width: number;
  height: number;
}

export const PartnerLogos: React.FC = () => {
  const partners: Partner[] = [
    { name: "United Nations", logo: "/images/partners/un.svg", width: 120, height: 60 },
    { name: "USAID", logo: "/images/partners/usaid.svg", width: 140, height: 60 },
    { name: "World Health Organization", logo: "/images/partners/who.svg", width: 100, height: 60 },
    { name: "International Red Cross", logo: "/images/partners/redcross.svg", width: 110, height: 60 },
    { name: "UNICEF", logo: "/images/partners/unicef.svg", width: 130, height: 60 },
    { name: "Save the Children", logo: "/images/partners/savechildren.svg", width: 140, height: 60 },
    { name: "Care International", logo: "/images/partners/care.svg", width: 100, height: 60 },
    { name: "Oxfam", logo: "/images/partners/oxfam.svg", width: 120, height: 60 },
  ];

  // Duplicate partners for seamless infinite scroll
  const duplicatedPartners = [...partners, ...partners];

  return (
    <div className="w-full overflow-hidden bg-white dark:bg-neutral-900 py-12 border-y border-neutral-200 dark:border-neutral-800">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-10">
          <p className="text-sm font-semibold text-orange-600 dark:text-orange-400 tracking-wider uppercase mb-2">
            Trusted Partnerships
          </p>
          <h3 className="text-2xl font-bold text-neutral-900 dark:text-white">
            Working Together for Greater Impact
          </h3>
        </div>

        {/* Logos Container with Auto-Scroll */}
        <div className="relative">
          {/* Fade overlays for seamless edges */}
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-white dark:from-neutral-900 to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white dark:from-neutral-900 to-transparent z-10 pointer-events-none" />

          {/* Scrolling container */}
          <div className="flex items-center animate-scroll-logos hover:[animation-play-state:paused]">
            {duplicatedPartners.map((partner, index) => (
              <div
                key={`${partner.name}-${index}`}
                className="flex-shrink-0 mx-8 group"
              >
                <div className="relative transition-all duration-300 grayscale hover:grayscale-0 opacity-60 hover:opacity-100">
                  {/* Placeholder for partner logo */}
                  <div 
                    className="flex items-center justify-center bg-neutral-100 dark:bg-neutral-800 rounded-lg p-4"
                    style={{ width: partner.width, height: partner.height }}
                  >
                    <span className="text-xs font-semibold text-neutral-400 dark:text-neutral-500 text-center">
                      {partner.name}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Trust Statement */}
        <div className="text-center mt-10">
          <p className="text-sm text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
            Proud to collaborate with leading international organizations and local partners 
            to create sustainable change in the DRC
          </p>
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll-logos {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-scroll-logos {
          animation: scroll-logos 40s linear infinite;
        }
      `}</style>
    </div>
  );
};
