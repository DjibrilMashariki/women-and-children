"use client";

import React from "react";
import { Star, Shield, FileBadge, Award, CheckCircle } from "lucide-react";

interface Badge {
  icon: React.ReactNode;
  title: string;
  subtitle: string;
}

export const TrustBadges: React.FC = () => {
  const badges = [
    {
      icon: <Star className="w-8 h-8" />,
      title: "4-Star Rating",
      subtitle: "Charity Navigator",
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Gold Seal",
      subtitle: "GuideStar Transparency",
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Verified Nonprofit",
      subtitle: "IRS 501(c)(3) Status",
    },
    {
      icon: <FileBadge className="w-8 h-8" />,
      title: "Best NGO 2024",
      subtitle: "DRC Impact Awards",
    },
    {
      icon: <CheckCircle className="w-8 h-8" />,
      title: "85% to Programs",
      subtitle: "Financial Efficiency",
    },
  ];

  return (
    <div className="w-full py-20 bg-black">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-sm font-bold text-brand-600 tracking-widest uppercase mb-3">
            Trust & Transparency
          </p>
          <h3 className="text-4xl font-display font-bold text-white mb-6">
            Verified. Trusted. Transparent.
          </h3>
          <p className="text-lg text-neutral-400 max-w-2xl mx-auto leading-relaxed">
            We&apos;re committed to the highest standards of accountability and impact measurement.
          </p>
        </div>

        {/* Badges Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {badges.map((badge, index) => (
            <div
              key={index}
              className="
                group relative overflow-hidden rounded-2xl 
                bg-neutral-900/50 backdrop-blur-sm
                border border-neutral-800 hover:border-brand-600/50
                transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl hover:shadow-brand-900/20
                p-8 flex flex-col items-center text-center
              "
            >
              {/* Icon */}
              <div className="text-brand-600 mb-6 transform transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3">
                {badge.icon}
              </div>

              {/* Title */}
              <h4 className="text-lg font-bold text-white group-hover:text-brand-500 transition-colors duration-300 mb-2">
                {badge.title}
              </h4>

              {/* Subtitle */}
              <p className="text-sm text-neutral-500 font-medium group-hover:text-neutral-400 transition-colors duration-300">
                {badge.subtitle}
              </p>

              {/* Hover Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-brand-600/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            </div>
          ))}
        </div>

        {/* Additional Trust Info */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-3 bg-neutral-900 border border-neutral-800 rounded-full px-8 py-4 shadow-lg">
            <CheckCircle className="text-brand-600 w-5 h-5" />
            <span className="text-sm font-semibold text-neutral-300">
              Audited annually by independent accounting firms
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
