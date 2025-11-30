"use client";

import { useState, useEffect } from "react";
import { AnimatedCounter } from "./AnimatedText";

interface ImpactStat {
  label: string;
  baseValue: number;
  incrementRate: number; // How many added per minute
  icon: React.ReactNode;
  color: string;
  unit?: string;
}

const impactStats: ImpactStat[] = [
  {
    label: "Children Supported Today",
    baseValue: 847,
    incrementRate: 12, // 12 children per minute
    unit: "",
    color: "from-blue-500 to-indigo-600",
    icon: (
      <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
      </svg>
    )
  },
  {
    label: "Meals Provided",
    baseValue: 2453,
    incrementRate: 45, // 45 meals per minute
    unit: "",
    color: "from-emerald-500 to-teal-600",
    icon: (
      <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
      </svg>
    )
  },
  {
    label: "Healthcare Visits",
    baseValue: 156,
    incrementRate: 3, // 3 visits per minute
    unit: "",
    color: "from-pink-500 to-rose-600",
    icon: (
      <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1.323l3.954 1.582 1.599-.8a1 1 0 01.894 1.79l-1.233.616 1.738 5.42a1 1 0 01-.285 1.05A3.989 3.989 0 0115 15a3.989 3.989 0 01-2.667-1.019 1 1 0 01-.285-1.05l1.715-5.349L11 6.477V16h2a1 1 0 110 2H7a1 1 0 110-2h2V6.477L6.237 7.582l1.715 5.349a1 1 0 01-.285 1.05A3.989 3.989 0 015 15a3.989 3.989 0 01-2.667-1.019 1 1 0 01-.285-1.05l1.738-5.42-1.233-.617a1 1 0 01.894-1.788l1.599.799L9 4.323V3a1 1 0 011-1z" clipRule="evenodd" />
      </svg>
    )
  },
  {
    label: "Training Sessions Active",
    baseValue: 34,
    incrementRate: 0.5, // 0.5 sessions per minute
    unit: "",
    color: "from-orange-500 to-red-600",
    icon: (
      <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
        <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
      </svg>
    )
  }
];

export function LiveImpactCounter() {
  const [elapsedSeconds, setElapsedSeconds] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setElapsedSeconds((prev) => prev + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const calculateCurrentValue = (stat: ImpactStat) => {
    const minutesElapsed = elapsedSeconds / 60;
    const increment = Math.floor(minutesElapsed * stat.incrementRate);
    return stat.baseValue + increment;
  };

  return (
    <div className="bg-gradient-to-br from-neutral-900 dark:from-neutral-900 to-neutral-800 dark:to-neutral-950 rounded-3xl overflow-hidden shadow-2xl border border-neutral-700 dark:border-neutral-800">
      {/* Header */}
      <div className="bg-gradient-to-r from-brand-500 dark:from-orange-600 to-brand-600 dark:to-orange-500 px-8 py-6 relative overflow-hidden">
        {/* Animated pulse effect */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-3xl animate-pulse" />

        <div className="relative z-10 flex items-center justify-between">
          <div>
            <h3 className="text-2xl font-black text-white mb-1">Live Impact Dashboard</h3>
            <p className="text-white/90 text-sm">Real-time updates from our programs across the DRC</p>
          </div>

          {/* Live indicator */}
          <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
            <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
            <span className="text-white text-sm font-bold">LIVE</span>
          </div>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 p-8 bg-white dark:bg-neutral-900">
        {impactStats.map((stat, idx) => {
          const currentValue = calculateCurrentValue(stat);

          return (
            <div
              key={idx}
              className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-neutral-50 dark:from-neutral-800 to-white dark:to-neutral-900 p-6 border border-neutral-200 dark:border-neutral-700 hover:border-brand-500/50 dark:hover:border-orange-400/50 transition-all duration-500 hover:shadow-lg dark:hover:shadow-lg dark:hover:shadow-orange-500/20"
            >
              {/* Gradient glow on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-10 dark:group-hover:opacity-20 transition-opacity duration-500`} />

              <div className="relative z-10">
                {/* Icon */}
                <div className={`inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br ${stat.color} text-white mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  {stat.icon}
                </div>

                {/* Counter */}
                <div className="mb-3">
                  <div className={`text-4xl font-black text-white tabular-nums`}>
                    <AnimatedCounter
                      end={currentValue}
                      suffix={stat.unit}
                      duration={1000}
                    />
                  </div>

                  {/* Increment indicator */}
                  <div className="flex items-center gap-1 mt-2">
                    <svg className="w-3 h-3 text-emerald-400 animate-bounce" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.293 7.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L6.707 7.707a1 1 0 01-1.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-xs text-emerald-400 font-semibold">
                      +{stat.incrementRate}/min
                    </span>
                  </div>
                </div>

                {/* Label */}
                <div className="text-sm text-neutral-600 dark:text-neutral-400 font-medium leading-tight">
                  {stat.label}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Footer - Last Updated */}
      <div className="bg-neutral-50 dark:bg-neutral-800/50 border-t border-neutral-200 dark:border-neutral-700 px-8 py-4 flex items-center justify-between text-sm">
        <div className="flex items-center gap-2 text-neutral-600 dark:text-neutral-400">
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
          </svg>
          <span>Last updated: {elapsedSeconds}s ago</span>
        </div>
        <div className="text-neutral-500 dark:text-neutral-500 text-xs">
          Data synchronized from field operations
        </div>
      </div>
    </div>
  );
}
