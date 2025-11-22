"use client";

import React, { useState } from "react";
import { FaChartPie, FaHandHoldingHeart, FaCog, FaBullhorn, FaFileAlt, FaDownload } from "react-icons/fa";

interface FundAllocation {
  category: string;
  percentage: number;
  amount: string;
  color: string;
  icon: React.ReactNode;
  description: string;
}

export const FinancialTransparency: React.FC = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const allocations: FundAllocation[] = [
    {
      category: "Programs & Services",
      percentage: 85,
      amount: "$2.1M",
      color: "bg-emerald-500",
      icon: <FaHandHoldingHeart className="w-6 h-6" />,
      description: "Direct support to children, women, and families in the DRC",
    },
    {
      category: "Administrative",
      percentage: 10,
      amount: "$247K",
      color: "bg-blue-500",
      icon: <FaCog className="w-6 h-6" />,
      description: "Essential operations, legal compliance, and infrastructure",
    },
    {
      category: "Fundraising",
      percentage: 5,
      amount: "$124K",
      color: "bg-orange-500",
      icon: <FaBullhorn className="w-6 h-6" />,
      description: "Donor outreach, campaigns, and community engagement",
    },
  ];

  const totalRevenue = "$2.47M";
  const fiscalYear = "2024";

  return (
    <div className="w-full py-20 bg-white dark:bg-neutral-900">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-sm font-semibold text-orange-600 dark:text-orange-400 tracking-wider uppercase mb-2">
            Financial Transparency
          </p>
          <h3 className="text-4xl font-bold text-neutral-900 dark:text-white mb-4">
            Where Your Money Goes
          </h3>
          <p className="text-xl text-neutral-600 dark:text-neutral-300 max-w-3xl mx-auto">
            Every dollar is tracked, audited, and allocated to maximize impact. 
            See exactly how we invest in lasting change.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Pie Chart Visualization */}
          <div className="relative">
            {/* Pie Chart Container */}
            <div className="relative w-full max-w-md mx-auto aspect-square">
              {/* SVG Pie Chart */}
              <svg viewBox="0 0 200 200" className="w-full h-full transform -rotate-90">
                {/* Programs (85%) - Emerald */}
                <circle
                  cx="100"
                  cy="100"
                  r="80"
                  fill="none"
                  stroke="#10b981"
                  strokeWidth="40"
                  strokeDasharray={`${85 * 5.03} ${(100 - 85) * 5.03}`}
                  className="transition-all duration-300 hover:stroke-emerald-600 cursor-pointer"
                  onMouseEnter={() => setHoveredIndex(0)}
                  onMouseLeave={() => setHoveredIndex(null)}
                />
                
                {/* Administrative (10%) - Blue */}
                <circle
                  cx="100"
                  cy="100"
                  r="80"
                  fill="none"
                  stroke="#3b82f6"
                  strokeWidth="40"
                  strokeDasharray={`${10 * 5.03} ${(100 - 10) * 5.03}`}
                  strokeDashoffset={`${-85 * 5.03}`}
                  className="transition-all duration-300 hover:stroke-blue-600 cursor-pointer"
                  onMouseEnter={() => setHoveredIndex(1)}
                  onMouseLeave={() => setHoveredIndex(null)}
                />
                
                {/* Fundraising (5%) - Orange */}
                <circle
                  cx="100"
                  cy="100"
                  r="80"
                  fill="none"
                  stroke="#f97316"
                  strokeWidth="40"
                  strokeDasharray={`${5 * 5.03} ${(100 - 5) * 5.03}`}
                  strokeDashoffset={`${-(85 + 10) * 5.03}`}
                  className="transition-all duration-300 hover:stroke-orange-600 cursor-pointer"
                  onMouseEnter={() => setHoveredIndex(2)}
                  onMouseLeave={() => setHoveredIndex(null)}
                />
              </svg>

              {/* Center Info */}
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <FaChartPie className="text-neutral-400 dark:text-neutral-600 w-12 h-12 mb-2" />
                <p className="text-4xl font-bold text-neutral-900 dark:text-white">{totalRevenue}</p>
                <p className="text-sm text-neutral-600 dark:text-neutral-400 mt-1">Total Revenue {fiscalYear}</p>
              </div>
            </div>

            {/* Legend */}
            <div className="mt-8 space-y-3">
              {allocations.map((allocation, index) => (
                <div
                  key={index}
                  className={`
                    flex items-center gap-3 p-3 rounded-lg transition-all duration-300 cursor-pointer
                    ${hoveredIndex === index ? 'bg-neutral-50 dark:bg-neutral-700 scale-105' : 'hover:bg-neutral-50 dark:hover:bg-neutral-700'}
                  `}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  <div className={`w-4 h-4 rounded-full ${allocation.color}`} />
                  <span className="font-semibold text-neutral-900 dark:text-white flex-1">
                    {allocation.category}
                  </span>
                  <span className="text-2xl font-bold text-neutral-900 dark:text-white">
                    {allocation.percentage}%
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Detailed Breakdown */}
          <div className="space-y-6">
            {allocations.map((allocation, index) => (
              <div
                key={index}
                className={`
                  group relative overflow-hidden rounded-2xl border-2 p-6
                  transition-all duration-300 cursor-pointer
                  ${hoveredIndex === index 
                    ? 'border-neutral-900 dark:border-orange-400 shadow-xl dark:shadow-2xl scale-105 bg-white dark:bg-neutral-750' 
                    : 'border-neutral-200 dark:border-neutral-700 hover:border-neutral-300 dark:hover:border-neutral-600 hover:shadow-lg dark:hover:shadow-xl bg-white dark:bg-neutral-800'
                  }
                `}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                {/* Icon & Title */}
                <div className="flex items-start gap-4 mb-3">
                  <div className={`${allocation.color} text-white p-3 rounded-xl`}>
                    {allocation.icon}
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl font-bold text-neutral-900 dark:text-white mb-1">
                      {allocation.category}
                    </h4>
                    <p className="text-sm text-neutral-600 dark:text-neutral-400">
                      {allocation.description}
                    </p>
                  </div>
                </div>

                {/* Stats */}
                <div className="flex items-center justify-between mt-4 pt-4 border-t border-neutral-200 dark:border-neutral-700">
                  <div>
                    <p className="text-3xl font-bold text-neutral-900 dark:text-white">
                      {allocation.percentage}%
                    </p>
                    <p className="text-sm text-neutral-600 dark:text-neutral-400">of total budget</p>
                  </div>
                  <div className="text-right">
                    <p className="text-2xl font-bold text-neutral-900 dark:text-white">
                      {allocation.amount}
                    </p>
                    <p className="text-sm text-neutral-600 dark:text-neutral-400">FY {fiscalYear}</p>
                  </div>
                </div>

                {/* Progress Bar */}
                <div className="mt-4 h-2 bg-neutral-100 dark:bg-neutral-700 rounded-full overflow-hidden">
                  <div
                    className={`h-full ${allocation.color} transition-all duration-700`}
                    style={{ width: `${allocation.percentage}%` }}
                  />
                </div>
              </div>
            ))}

            {/* Download Report CTA */}
            <div className="mt-8 p-6 bg-gradient-to-br from-orange-50 to-orange-100 dark:from-neutral-800 dark:to-neutral-850 rounded-2xl border border-orange-200 dark:border-orange-600">
              <div className="flex items-center gap-4">
                <FaFileAlt className="text-orange-600 dark:text-orange-400 w-8 h-8" />
                <div className="flex-1">
                  <h5 className="font-bold text-neutral-900 dark:text-white mb-1">
                    Full Financial Report
                  </h5>
                  <p className="text-sm text-neutral-600 dark:text-neutral-400">
                    Download our complete audited financial statements
                  </p>
                </div>
                <button className="flex items-center gap-2 px-4 py-2 bg-orange-600 hover:bg-orange-700 dark:bg-orange-500 dark:hover:bg-orange-600 text-white rounded-lg transition-colors duration-300">
                  <FaDownload className="w-4 h-4" />
                  <span className="font-semibold">Download</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Trust Footer */}
        <div className="mt-16 text-center p-6 bg-neutral-50 dark:bg-neutral-900 rounded-2xl border border-neutral-200 dark:border-neutral-700">
          <p className="text-neutral-600 dark:text-neutral-300">
            <span className="font-semibold text-neutral-900 dark:text-white">Audited by:</span> 
            {" "}Thompson & Associates, LLP (Independent Certified Public Accountants)
            {" "}•{" "}
            <span className="font-semibold text-neutral-900 dark:text-white">Last Audit:</span> 
            {" "}March 2025
          </p>
        </div>
      </div>
    </div>
  );
};
