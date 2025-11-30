import React, { useState, useEffect } from 'react';
import { useAnimatedCounter } from '@/lib/hooks/useInteractions';

interface ProgressBarProps {
  label: string;
  value: number;
  max: number;
  color?: string;
  showPercentage?: boolean;
}

export function ProgressBar({
  label,
  value,
  max,
  color = 'bg-brand-500',
  showPercentage = true
}: ProgressBarProps) {
  const { count: animatedValue, startAnimation } = useAnimatedCounter(value, 2000);
  const percentage = Math.round((animatedValue / max) * 100);

  useEffect(() => {
    startAnimation();
  }, [startAnimation]);

  return (
    <div className="w-full">
      <div className="flex justify-between items-center mb-2">
        <span className="text-sm font-medium text-gray-700 dark:text-neutral-300">{label}</span>
        {showPercentage && (
          <span className="text-sm text-gray-500 dark:text-neutral-400">{percentage}%</span>
        )}
      </div>
      <div className="w-full bg-gray-200 dark:bg-neutral-700 rounded-full h-3">
        <div
          className={`h-3 rounded-full ${color} dark:bg-orange-500 transition-all duration-1000 ease-out`}
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
}

interface HoverCardProps {
  title: string;
  description: string;
  icon: string;
  details: string[];
  className?: string;
}

export function HoverCard({
  title,
  description,
  icon,
  details,
  className = ''
}: HoverCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div
      className={`relative group cursor-pointer ${className}`}
      onMouseEnter={() => setIsExpanded(true)}
      onMouseLeave={() => setIsExpanded(false)}
    >
      <div className="bg-white dark:bg-neutral-800 rounded-lg p-6 shadow-md dark:shadow-lg transition-all duration-300 group-hover:shadow-xl dark:group-hover:shadow-xl group-hover:-translate-y-2 border border-transparent dark:border-neutral-700 dark:hover:border-orange-400">
        <div className="flex items-center mb-4">
          <span className="text-3xl mr-3">{icon}</span>
          <h3 className="text-xl font-semibold text-gray-800 dark:text-white">{title}</h3>
        </div>
        <p className="text-gray-600 dark:text-neutral-300 mb-4">{description}</p>

        {/* Expandable Details */}
        <div className={`transition-all duration-300 overflow-hidden ${isExpanded ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'
          }`}>
          <div className="border-t border-gray-200 dark:border-neutral-700 pt-4 mt-4">
            <h4 className="font-medium text-gray-800 dark:text-white mb-2">What we provide:</h4>
            <ul className="space-y-1">
              {details.map((detail, index) => (
                <li key={index} className="text-sm text-gray-600 dark:text-neutral-300 flex items-start">
                  <span className="text-brand-500 dark:text-orange-400 mr-2">•</span>
                  {detail}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

interface ImpactMeterProps {
  title: string;
  current: number;
  target: number;
  unit: string;
  color?: string;
}

export function ImpactMeter({
  title,
  current,
  target,
  unit,
  color = 'stroke-brand-500'
}: ImpactMeterProps) {
  const { count: animatedCurrent, startAnimation } = useAnimatedCounter(current, 2000);
  const percentage = Math.min((animatedCurrent / target) * 100, 100);
  const radius = 45;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = isNaN(percentage) ? circumference : circumference - (percentage / 100) * circumference;

  useEffect(() => {
    startAnimation();
  }, [startAnimation]);

  return (
    <div className="text-center">
      <div className="relative inline-flex items-center justify-center">
        <svg className="w-32 h-32 transform -rotate-90" viewBox="0 0 100 100">
          {/* Background circle */}
          <circle
            cx="50"
            cy="50"
            r={radius}
            stroke="currentColor"
            strokeWidth="8"
            fill="transparent"
            className="text-gray-200 dark:text-neutral-700"
          />
          {/* Progress circle */}
          <circle
            cx="50"
            cy="50"
            r={radius}
            stroke="currentColor"
            strokeWidth="8"
            fill="transparent"
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            className={`transition-all duration-2000 ease-out ${color} dark:stroke-orange-500`}
            strokeLinecap="round"
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <div className="text-2xl font-bold text-gray-800 dark:text-white">
              {animatedCurrent.toLocaleString()}
            </div>
            <div className="text-xs text-gray-500 dark:text-neutral-400">{unit}</div>
          </div>
        </div>
      </div>
      <h3 className="mt-4 text-lg font-semibold text-gray-800 dark:text-white">{title}</h3>
      <p className="text-sm text-gray-500 dark:text-neutral-400">
        Goal: {target.toLocaleString()} {unit}
      </p>
    </div>
  );
}

interface ExpandableContentProps {
  title: string;
  preview: string;
  content: string;
  className?: string;
}

export function ExpandableContent({
  title,
  preview,
  content,
  className = ''
}: ExpandableContentProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className={`border border-gray-200 dark:border-neutral-700 rounded-lg overflow-hidden ${className}`}>
      <button
        className="w-full p-4 text-left bg-white dark:bg-neutral-800 hover:bg-gray-50 dark:hover:bg-neutral-750 transition-colors focus:outline-none focus:ring-2 focus:ring-brand-500 dark:focus:ring-orange-400"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <div className="flex justify-between items-center">
          <div>
            <h3 className="font-semibold text-gray-800 dark:text-white">{title}</h3>
            <p className="text-sm text-gray-600 dark:text-neutral-400 mt-1">{preview}</p>
          </div>
          <span className={`text-brand-500 dark:text-orange-400 transform transition-transform ${isExpanded ? 'rotate-180' : ''
            }`}>
            ▼
          </span>
        </div>
      </button>
      <div className={`bg-gray-50 dark:bg-neutral-750 transition-all duration-300 ${isExpanded ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        } overflow-hidden`}>
        <div className="p-4 border-t border-gray-200 dark:border-neutral-700">
          <p className="text-gray-700 dark:text-neutral-300 leading-relaxed">{content}</p>
        </div>
      </div>
    </div>
  );
}