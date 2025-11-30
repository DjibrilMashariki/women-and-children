import React, { useState, useEffect } from 'react';
import { useAnimatedCounter } from '@/lib/hooks/useInteractions';

interface DonationThermometerProps {
  current: number;
  goal: number;
  currency?: string;
  title?: string;
}

export function DonationThermometer({
  current,
  goal,
  currency = '$',
  title = 'Campaign Goal'
}: DonationThermometerProps) {
  const { count: animatedCurrent, startAnimation } = useAnimatedCounter(current, 2000);
  const percentage = Math.min((animatedCurrent / goal) * 100, 100);

  useEffect(() => {
    startAnimation();
  }, [startAnimation]);

  return (
    <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200 dark:bg-neutral-800 dark:border-neutral-700">
      <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center dark:text-white">{title}</h3>

      <div className="relative">
        {/* Thermometer Container */}
        <div className="relative w-20 h-64 mx-auto bg-neutral-900 rounded-full overflow-hidden border-2 border-neutral-800 dark:bg-neutral-700 dark:border-neutral-600">
          {/* Mercury Fill - Orange Gradient */}
          <div
            className="absolute bottom-0 w-full bg-gradient-to-t from-orange-600 via-orange-500 to-orange-400 rounded-full transition-all duration-2000 ease-out"
            style={{ height: `${percentage}%` }}
          >
            {/* Animated Bubbles */}
            <div className="absolute inset-0 flex flex-col justify-around items-center py-4">
              {[...Array(5)].map((_, i) => (
                <div
                  key={i}
                  className="w-3 h-3 bg-white/30 rounded-full animate-pulse"
                  style={{ animationDelay: `${i * 0.2}s` }}
                />
              ))}
            </div>
          </div>

          {/* Percentage Label Inside */}
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-white font-bold text-lg drop-shadow-lg z-10">
              {Math.round(percentage)}%
            </span>
          </div>
        </div>

        {/* Bulb at bottom - Orange */}
        <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full shadow-lg border-4 border-white" />
      </div>

      {/* Stats */}
      <div className="mt-12 space-y-3">
        <div className="flex justify-between items-center">
          <span className="text-gray-600 dark:text-neutral-400">Raised:</span>
          <span className="text-2xl font-bold text-orange-600 dark:text-orange-400">
            {currency}{animatedCurrent.toLocaleString()}
          </span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-gray-600 dark:text-neutral-400">Goal:</span>
          <span className="text-xl font-semibold text-gray-800 dark:text-white">
            {currency}{goal.toLocaleString()}
          </span>
        </div>
        <div className="pt-3 border-t border-gray-200 dark:border-neutral-700">
          <span className="text-sm text-gray-500 dark:text-neutral-400">
            {currency}{(goal - animatedCurrent).toLocaleString()} to go!
          </span>
        </div>
      </div>
    </div>
  );
}

interface StatCardProps {
  icon: string;
  value: number;
  label: string;
  suffix?: string;
  trend?: 'up' | 'down';
  trendValue?: number;
  color?: string;
}

export function StatCard({
  icon,
  value,
  label,
  suffix = '',
  trend,
  trendValue,
  color = 'from-brand-500 to-brand-600'
}: StatCardProps) {
  const { count: animatedValue, startAnimation } = useAnimatedCounter(value, 1500);

  useEffect(() => {
    startAnimation();
  }, [startAnimation]);

  return (
    <div className="bg-white rounded-xl p-6 shadow-md border border-gray-200 hover:shadow-xl transition-shadow duration-300 dark:bg-neutral-800 dark:border-neutral-700">
      <div className="flex items-start justify-between mb-4">
        <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${color} flex items-center justify-center text-2xl shadow-lg`}>
          {icon}
        </div>
        {trend && trendValue && (
          <div className={`flex items-center space-x-1 text-sm font-semibold ${trend === 'up' ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400'
            }`}>
            <span>{trend === 'up' ? '↑' : '↓'}</span>
            <span>{trendValue}%</span>
          </div>
        )}
      </div>
      <div className="space-y-1">
        <div className="text-3xl font-bold text-gray-800 dark:text-white">
          {animatedValue.toLocaleString()}{suffix}
        </div>
        <div className="text-sm text-gray-600 dark:text-neutral-400">{label}</div>
      </div>
    </div>
  );
}

interface ProgressChartProps {
  data: Array<{ label: string; value: number; max: number; color?: string }>;
  title?: string;
}

interface ProgressBarRowProps {
  label: string;
  value: number;
  max: number;
  color: string;
  index: number;
}

function ProgressBarRow({ label, value, max, color, index }: ProgressBarRowProps) {
  const { count: animatedValue, startAnimation } = useAnimatedCounter(value, 2000);
  const percentage = Math.min((animatedValue / max) * 100, 100);

  useEffect(() => {
    const timer = setTimeout(() => startAnimation(), index * 100);
    return () => clearTimeout(timer);
  }, [startAnimation, index]);

  return (
    <div className="space-y-2">
      <div className="flex justify-between items-center">
        <span className="text-sm font-medium text-gray-700 dark:text-neutral-300">{label}</span>
        <span className="text-sm font-semibold text-gray-800 dark:text-white">
          {animatedValue.toLocaleString()} / {max.toLocaleString()}
        </span>
      </div>
      <div className="relative w-full h-3 bg-gray-200 dark:bg-neutral-700 rounded-full overflow-hidden">
        <div
          className={`absolute left-0 top-0 h-full ${color} rounded-full transition-all duration-2000 ease-out`}
          style={{ width: `${percentage}%` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer" />
        </div>
      </div>
    </div>
  );
}

export function ProgressChart({ data, title }: ProgressChartProps) {
  return (
    <div className="bg-white rounded-xl p-6 shadow-md border border-gray-200 dark:bg-neutral-800 dark:border-neutral-700">
      {title && <h3 className="text-xl font-bold text-gray-800 mb-6 dark:text-white">{title}</h3>}
      <div className="space-y-4">
        {data.map((item, index) => (
          <ProgressBarRow
            key={index}
            label={item.label}
            value={item.value}
            max={item.max}
            color={item.color || 'bg-brand-500'}
            index={index}
          />
        ))}
      </div>
    </div>
  );
}

interface LiveCounterProps {
  startValue: number;
  increment: number;
  interval?: number;
  label: string;
  icon?: string;
}

export function LiveCounter({
  startValue,
  increment,
  interval = 5000,
  label,
  icon = '🎯'
}: LiveCounterProps) {
  const [count, setCount] = useState(startValue);

  useEffect(() => {
    const timer = setInterval(() => {
      setCount(prev => prev + increment);
    }, interval);

    return () => clearInterval(timer);
  }, [increment, interval]);

  return (
    <div className="inline-flex items-center space-x-3 bg-gradient-to-r from-brand-50 to-secondary-50 dark:from-neutral-800 dark:to-neutral-700 px-6 py-3 rounded-full border border-brand-200 dark:border-neutral-700 shadow-sm">
      <span className="text-2xl">{icon}</span>
      <div>
        <div className="text-2xl font-bold text-gray-800 dark:text-white">
          {count.toLocaleString()}
        </div>
        <div className="text-xs text-gray-600 dark:text-neutral-400">{label}</div>
      </div>
      <span className="w-2 h-2 bg-green-500 dark:bg-green-400 rounded-full animate-pulse" />
    </div>
  );
}
