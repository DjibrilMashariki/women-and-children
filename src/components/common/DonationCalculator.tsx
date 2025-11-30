"use client";

import { useState } from "react";
import Link from "next/link";
import { ROUTES } from "@/lib/utils/constants";

interface DonationImpact {
  amount: number;
  impact: {
    title: string;
    description: string;
    icon: React.ReactNode;
    color: string;
  };
}

const impactLevels: DonationImpact[] = [
  {
    amount: 25,
    impact: {
      title: "School Supplies",
      description: "Provides complete school supplies for 1 child for a full academic year",
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385A7.962 7.962 0 0114.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0014.5 4c-1.255 0-2.443.29-3.5.804V12a1 1 0 11-2 0V4.804z" />
        </svg>
      ),
      color: "from-blue-500 to-indigo-600"
    }
  },
  {
    amount: 50,
    impact: {
      title: "Monthly Child Support",
      description: "Supports 1 child's basic needs (food, healthcare, education) for 1 month",
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
        </svg>
      ),
      color: "from-emerald-500 to-teal-600"
    }
  },
  {
    amount: 100,
    impact: {
      title: "Women's Training Workshop",
      description: "Funds a vocational training workshop for 5 women entrepreneurs",
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
          <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
        </svg>
      ),
      color: "from-orange-500 to-red-600"
    }
  },
  {
    amount: 250,
    impact: {
      title: "Healthcare Package",
      description: "Provides comprehensive healthcare for a family of 4 for 3 months",
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1.323l3.954 1.582 1.599-.8a1 1 0 01.894 1.79l-1.233.616 1.738 5.42a1 1 0 01-.285 1.05A3.989 3.989 0 0115 15a3.989 3.989 0 01-2.667-1.019 1 1 0 01-.285-1.05l1.715-5.349L11 6.477V16h2a1 1 0 110 2H7a1 1 0 110-2h2V6.477L6.237 7.582l1.715 5.349a1 1 0 01-.285 1.05A3.989 3.989 0 015 15a3.989 3.989 0 01-2.667-1.019 1 1 0 01-.285-1.05l1.738-5.42-1.233-.617a1 1 0 01.894-1.788l1.599.799L9 4.323V3a1 1 0 011-1z" clipRule="evenodd" />
        </svg>
      ),
      color: "from-pink-500 to-rose-600"
    }
  },
  {
    amount: 500,
    impact: {
      title: "Microloan Program",
      description: "Seeds a microloan for a woman entrepreneur to start or expand her business",
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
        </svg>
      ),
      color: "from-amber-500 to-yellow-600"
    }
  }
];

export function DonationCalculator() {
  const [amount, setAmount] = useState(50);
  const [customAmount, setCustomAmount] = useState("");
  const [isCustom, setIsCustom] = useState(false);

  const currentAmount = isCustom ? (parseInt(customAmount) || 0) : amount;

  // Find the impact level that matches or is closest to current amount
  const currentImpact = impactLevels.reduce((prev, curr) => {
    return Math.abs(curr.amount - currentAmount) < Math.abs(prev.amount - currentAmount) ? curr : prev;
  });

  const presetAmounts = [25, 50, 100, 250, 500];

  const handleCustomInput = (value: string) => {
    const numValue = value.replace(/[^0-9]/g, "");
    setCustomAmount(numValue);
  };

  return (
    <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-neutral-200 dark:bg-neutral-800 dark:border-neutral-700">
      {/* Header */}
      <div className="bg-gradient-to-r from-brand-500 to-brand-600 dark:from-brand-600 dark:to-brand-700 px-8 py-6">
        <h3 className="text-2xl font-black text-white mb-2">Donation Impact Calculator</h3>
        <p className="text-white/90 text-sm">See exactly how your generosity transforms lives</p>
      </div>

      <div className="p-8">
        {/* Amount Selection */}
        <div className="mb-8">
          <label className="block text-sm font-semibold text-neutral-700 mb-4 dark:text-neutral-300">Select Amount</label>
          <div className="grid grid-cols-3 gap-3 mb-4">
            {presetAmounts.map((presetAmount) => (
              <button
                key={presetAmount}
                onClick={() => {
                  setAmount(presetAmount);
                  setIsCustom(false);
                }}
                className={`px-6 py-4 rounded-xl font-bold text-lg transition-all duration-300 ${!isCustom && amount === presetAmount
                    ? "bg-gradient-to-br from-brand-500 to-brand-600 text-white shadow-lg shadow-brand-500/30 scale-105 dark:from-brand-600 dark:to-brand-700"
                    : "bg-neutral-100 text-neutral-700 hover:bg-neutral-200 hover:scale-105 dark:bg-neutral-700 dark:text-neutral-300 dark:hover:bg-neutral-600"
                  }`}
              >
                ${presetAmount}
              </button>
            ))}
          </div>

          {/* Custom Amount Input */}
          <div className="relative">
            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-2xl font-bold text-neutral-400 dark:text-neutral-500">$</span>
            <input
              type="text"
              value={isCustom ? customAmount : ""}
              onChange={(e) => {
                handleCustomInput(e.target.value);
                setIsCustom(true);
              }}
              onFocus={() => setIsCustom(true)}
              placeholder="Custom amount"
              className="w-full pl-12 pr-4 py-4 text-2xl font-bold text-neutral-900 bg-neutral-50 border-2 border-neutral-200 rounded-xl focus:border-brand-500 focus:ring-4 focus:ring-brand-500/20 transition-all outline-none dark:text-white dark:bg-neutral-700 dark:border-neutral-600 dark:focus:border-brand-500 dark:placeholder-neutral-500"
            />
          </div>
        </div>

        {/* Impact Display */}
        {currentAmount > 0 && (
          <div className={`relative overflow-hidden rounded-2xl bg-gradient-to-br ${currentImpact.impact.color} p-8 text-white mb-8`}>
            {/* Decorative blobs */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl" />
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full translate-y-1/2 -translate-x-1/2 blur-xl" />

            <div className="relative z-10">
              <div className="flex items-start gap-4 mb-4">
                <div className="flex-shrink-0 w-14 h-14 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
                  {currentImpact.impact.icon}
                </div>
                <div className="flex-1">
                  <div className="text-sm font-semibold text-white/80 mb-1">Your ${currentAmount} donation provides:</div>
                  <h4 className="text-2xl font-black mb-2">{currentImpact.impact.title}</h4>
                  <p className="text-white/90 text-sm leading-relaxed">{currentImpact.impact.description}</p>
                </div>
              </div>

              {/* Additional Impact Metrics */}
              <div className="grid grid-cols-3 gap-4 mt-6 pt-6 border-t border-white/20">
                <div>
                  <div className="text-3xl font-black">{Math.floor(currentAmount / 25)}</div>
                  <div className="text-xs text-white/80 mt-1">Children helped</div>
                </div>
                <div>
                  <div className="text-3xl font-black">{Math.floor(currentAmount / 50)}</div>
                  <div className="text-xs text-white/80 mt-1">Months of support</div>
                </div>
                <div>
                  <div className="text-3xl font-black">{Math.floor(currentAmount / 20)}+</div>
                  <div className="text-xs text-white/80 mt-1">Lives touched</div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* CTA Button */}
        <Link href={ROUTES.DONATE}>
          <button className="w-full relative group px-8 py-5 bg-gradient-to-r from-brand-500 to-brand-600 hover:from-brand-600 hover:to-brand-700 text-white font-bold text-lg rounded-xl transition-all duration-300 shadow-lg hover:shadow-2xl hover:shadow-brand-500/40 overflow-hidden">
            {/* Shimmer effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-20 transform -translate-x-full group-hover:translate-x-full transition-all duration-700" />

            <span className="relative flex items-center justify-center gap-2">
              Donate ${currentAmount} Now
              <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </span>
          </button>
        </Link>

        {/* Trust Signals */}
        <div className="mt-6 pt-6 border-t border-neutral-200 flex items-center justify-center gap-6 text-sm text-neutral-600 dark:border-neutral-700 dark:text-neutral-400">
          <div className="flex items-center gap-2">
            <svg className="w-4 h-4 text-brand-600 dark:text-brand-400" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span>Secure payment</span>
          </div>
          <div className="flex items-center gap-2">
            <svg className="w-4 h-4 text-brand-600 dark:text-brand-400" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span>100% tax-deductible</span>
          </div>
        </div>
      </div>
    </div>
  );
}
