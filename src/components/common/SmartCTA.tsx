'use client';

import React, { useState, useEffect } from 'react';
import { RippleButton } from './RippleButton';

interface ExitIntentModalProps {
  onClose: () => void;
  onDonate: () => void;
}

export function ExitIntentModal({ onClose, onDonate }: ExitIntentModalProps) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 dark:bg-black/70 backdrop-blur-sm animate-fadeIn">
      <div className="relative bg-white dark:bg-neutral-800 rounded-2xl shadow-2xl dark:shadow-2xl dark:shadow-orange-500/20 max-w-md w-full mx-4 animate-slideUp border border-transparent dark:border-neutral-700">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-8 h-8 rounded-full bg-gray-100 dark:bg-neutral-700 hover:bg-gray-200 dark:hover:bg-neutral-600 flex items-center justify-center text-gray-600 dark:text-neutral-300 hover:text-gray-800 dark:hover:text-white transition-colors"
          aria-label="Close"
        >
          ✕
        </button>

        <div className="p-8">
          <div className="text-center mb-6">
            <div className="text-6xl mb-4">🤲</div>
            <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">
              Before You Go...
            </h3>
            <p className="text-gray-600 dark:text-neutral-300">
              Your donation today could change a child&apos;s life forever. Even $10 provides a week of meals for a family in need.
            </p>
          </div>

          <div className="space-y-3">
            <RippleButton
              variant="primary"
              className="w-full py-4 text-lg"
              onClick={onDonate}
            >
              💝 Make a Difference Now
            </RippleButton>
            <button
              onClick={onClose}
              className="w-full py-3 text-gray-600 dark:text-neutral-400 hover:text-gray-800 dark:hover:text-white transition-colors"
            >
              Maybe later
            </button>
          </div>

          <div className="mt-6 pt-6 border-t border-gray-200 dark:border-neutral-700">
            <p className="text-xs text-gray-500 dark:text-neutral-400 text-center">
              ✅ Tax-deductible • 🔒 Secure payment • 📊 100% transparent
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

interface StickyDonationBarProps {
  onDonate: () => void;
}

export function StickyDonationBar({ onDonate }: StickyDonationBarProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show after scrolling 50% of page
      const scrollPercentage = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
      setIsVisible(scrollPercentage > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 bg-gradient-to-r from-brand-600 dark:from-orange-600 to-secondary-600 dark:to-orange-500 shadow-2xl dark:shadow-2xl dark:shadow-orange-500/30 animate-slideUp border-t border-transparent dark:border-orange-400/20">
      <div className="container-max py-2">
        <div className="flex items-center justify-between gap-4">
          <div className="text-white flex-1 min-w-0">
            <p className="font-semibold text-sm">💝 Love what we do?</p>
            <p className="text-xs text-white/80">Your support powers our mission</p>
          </div>
          <RippleButton
            variant="secondary"
            className="bg-white dark:bg-neutral-100 text-brand-600 dark:text-neutral-900 hover:bg-gray-50 dark:hover:bg-white shadow-lg px-4 py-1.5 text-sm flex-shrink-0"
            onClick={onDonate}
          >
            Donate Now
          </RippleButton>
        </div>
      </div>
    </div>
  );
}

interface ContextualCTAProps {
  message: string;
  buttonText: string;
  onAction: () => void;
  icon?: string;
  variant?: 'primary' | 'secondary' | 'accent';
}

export function ContextualCTA({
  message,
  buttonText,
  onAction,
  icon = '💡',
  variant = 'primary'
}: ContextualCTAProps) {
  const [isDismissed, setIsDismissed] = useState(false);

  if (isDismissed) return null;

  const bgColors = {
    primary: 'from-brand-50 dark:from-neutral-800 to-brand-100 dark:to-neutral-750 border-brand-300 dark:border-orange-600/30',
    secondary: 'from-secondary-50 dark:from-neutral-800 to-secondary-100 dark:to-neutral-750 border-secondary-300 dark:border-orange-600/30',
    accent: 'from-accent-50 dark:from-neutral-800 to-accent-100 dark:to-neutral-750 border-accent-300 dark:border-orange-600/30'
  };

  return (
    <div className={`relative bg-gradient-to-r ${bgColors[variant]} border rounded-xl p-6 shadow-md dark:shadow-lg animate-slideUp`}>
      <button
        onClick={() => setIsDismissed(true)}
        className="absolute top-3 right-3 w-6 h-6 rounded-full bg-white/50 dark:bg-neutral-700/50 hover:bg-white dark:hover:bg-neutral-600 flex items-center justify-center text-gray-600 dark:text-neutral-300 text-sm"
        aria-label="Dismiss"
      >
        ✕
      </button>

      <div className="flex items-start space-x-4">
        <span className="text-4xl">{icon}</span>
        <div className="flex-1">
          <p className="text-gray-800 dark:text-white font-medium mb-3">{message}</p>
          <RippleButton
            variant="primary"
            className="px-6 py-2"
            onClick={onAction}
          >
            {buttonText}
          </RippleButton>
        </div>
      </div>
    </div>
  );
}

interface SmartCTAManagerProps {
  onDonate: () => void;
  enableExitIntent?: boolean;
  enableStickyBar?: boolean;
}

export function SmartCTAManager({
  onDonate,
  enableExitIntent = true,
  enableStickyBar = true
}: SmartCTAManagerProps) {
  const [showExitIntent, setShowExitIntent] = useState(false);
  const [exitIntentShown, setExitIntentShown] = useState(false);

  useEffect(() => {
    if (!enableExitIntent || exitIntentShown) return;

    const handleMouseLeave = (e: MouseEvent) => {
      // Trigger when mouse leaves top of viewport
      if (e.clientY < 10 && !exitIntentShown) {
        setShowExitIntent(true);
        setExitIntentShown(true);
      }
    };

    document.addEventListener('mouseleave', handleMouseLeave);
    return () => document.removeEventListener('mouseleave', handleMouseLeave);
  }, [enableExitIntent, exitIntentShown]);

  const handleDonate = () => {
    setShowExitIntent(false);
    onDonate();
  };

  return (
    <>
      {showExitIntent && (
        <ExitIntentModal
          onClose={() => setShowExitIntent(false)}
          onDonate={handleDonate}
        />
      )}
      {enableStickyBar && <StickyDonationBar onDonate={onDonate} />}
    </>
  );
}
