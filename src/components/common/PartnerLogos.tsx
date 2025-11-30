import React from "react";
import {
  Globe,
  Handshake,
  UserRound,
  BriefcaseMedical,
  Baby,
  Heart,
  HeartHandshake,
  Sprout
} from "lucide-react";

interface Partner {
  name: string;
  icon: React.ReactNode;
}

export const PartnerLogos: React.FC = () => {
  const partners: Partner[] = [
    { name: "United Nations", icon: <Globe className="w-12 h-12" /> },
    { name: "USAID", icon: <Handshake className="w-12 h-12" /> },
    { name: "World Health Organization", icon: <UserRound className="w-12 h-12" /> },
    { name: "International Red Cross", icon: <BriefcaseMedical className="w-12 h-12" /> },
    { name: "UNICEF", icon: <Baby className="w-12 h-12" /> },
    { name: "Save the Children", icon: <Heart className="w-12 h-12" /> },
    { name: "Care International", icon: <HeartHandshake className="w-12 h-12" /> },
    { name: "Oxfam", icon: <Sprout className="w-12 h-12" /> },
  ];

  // Duplicate partners for seamless infinite scroll
  const duplicatedPartners = [...partners, ...partners];

  return (
    <div className="w-full overflow-hidden bg-black py-20 border-y border-neutral-800">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-sm font-bold text-brand-600 tracking-widest uppercase mb-3">
            Trusted Partnerships
          </p>
          <h3 className="text-3xl font-display font-bold text-white">
            Working Together for Greater Impact
          </h3>
        </div>

        {/* Logos Container with Auto-Scroll */}
        <div className="relative">
          {/* Fade overlays for seamless edges - using black to match background */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none" />

          {/* Scrolling container */}
          <div className="flex items-center animate-scroll-logos hover:[animation-play-state:paused]">
            {duplicatedPartners.map((partner, index) => (
              <div
                key={`${partner.name}-${index}`}
                className="flex-shrink-0 mx-12 group"
              >
                <div className="flex flex-col items-center gap-4 transition-all duration-300 opacity-50 hover:opacity-100 transform hover:scale-110">
                  {/* Icon */}
                  <div className="text-neutral-400 group-hover:text-brand-500 transition-colors duration-300">
                    {partner.icon}
                  </div>

                  {/* Name */}
                  <span className="text-sm font-medium text-neutral-500 group-hover:text-white transition-colors duration-300 whitespace-nowrap">
                    {partner.name}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Trust Statement */}
        <div className="text-center mt-16">
          <p className="text-neutral-500 max-w-2xl mx-auto">
            Proud to collaborate with leading international organizations and local partners
            to create sustainable change in the DRC.
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
          animation: scroll-logos 60s linear infinite;
        }
      `}</style>
    </div>
  );
};
