"use client";

import React from "react";
import { FaStar, FaShieldAlt, FaCertificate, FaAward, FaCheckCircle } from "react-icons/fa";

interface Badge {
  icon: React.ReactNode;
  title: string;
  subtitle: string;
  color: string;
  bgGradient: string;
}

export const TrustBadges: React.FC = () => {
  const badges: Badge[] = [
    {
      icon: <FaStar className="w-8 h-8" />,
      title: "4-Star Rating",
      subtitle: "Charity Navigator",
      color: "text-blue-600",
      bgGradient: "from-blue-50 to-blue-100",
    },
    {
      icon: <FaAward className="w-8 h-8" />,
      title: "Gold Seal",
      subtitle: "GuideStar Transparency",
      color: "text-amber-600",
      bgGradient: "from-amber-50 to-amber-100",
    },
    {
      icon: <FaShieldAlt className="w-8 h-8" />,
      title: "Verified Nonprofit",
      subtitle: "IRS 501(c)(3) Status",
      color: "text-emerald-600",
      bgGradient: "from-emerald-50 to-emerald-100",
    },
    {
      icon: <FaCertificate className="w-8 h-8" />,
      title: "Best NGO 2024",
      subtitle: "DRC Impact Awards",
      color: "text-purple-600",
      bgGradient: "from-purple-50 to-purple-100",
    },
    {
      icon: <FaCheckCircle className="w-8 h-8" />,
      title: "85% to Programs",
      subtitle: "Financial Efficiency",
      color: "text-orange-600",
      bgGradient: "from-orange-50 to-orange-100",
    },
  ];

  return (
    <div className="w-full py-16 bg-gradient-to-b from-neutral-50 to-white dark:from-neutral-900 dark:to-neutral-950">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-12">
          <p className="text-sm font-semibold text-orange-600 dark:text-orange-400 tracking-wider uppercase mb-2">
            Trust & Transparency
          </p>
          <h3 className="text-3xl font-bold text-neutral-900 dark:text-white mb-4">
            Verified. Trusted. Transparent.
          </h3>
          <p className="text-lg text-neutral-600 dark:text-neutral-300 max-w-2xl mx-auto">
            We&apos;re committed to the highest standards of accountability and impact measurement
          </p>
        </div>

        {/* Badges Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {badges.map((badge, index) => (
            <div
              key={index}
              className={`
                group relative overflow-hidden rounded-2xl 
                bg-gradient-to-br ${badge.bgGradient}
                dark:from-neutral-800 dark:to-neutral-750
                border-2 border-transparent hover:border-neutral-200 dark:hover:border-orange-400
                transition-all duration-300 hover:scale-105 hover:shadow-xl dark:hover:shadow-2xl dark:hover:shadow-orange-500/20
                p-6
              `}
            >
              {/* Icon */}
              <div className={`${badge.color} dark:text-orange-400 mb-4 transform transition-transform duration-300 group-hover:scale-110`}>
                {badge.icon}
              </div>

              {/* Title */}
              <h4 className="text-lg font-bold text-neutral-900 dark:text-white mb-1">
                {badge.title}
              </h4>

              {/* Subtitle */}
              <p className="text-sm text-neutral-600 dark:text-neutral-400">
                {badge.subtitle}
              </p>

              {/* Hover Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/50 dark:from-orange-400/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            </div>
          ))}
        </div>

        {/* Additional Trust Info */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-2 bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded-full px-6 py-3 shadow-sm dark:shadow-lg">
            <FaCheckCircle className="text-emerald-600 dark:text-emerald-400 w-5 h-5" />
            <span className="text-sm font-semibold text-neutral-900 dark:text-white">
              Audited annually by independent accounting firms
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
