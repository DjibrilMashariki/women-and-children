"use client";

import { Button } from "@/components/common/Button";
import { Card } from "@/components/common/Card";
import { DONATION_TIERS } from "@/lib/utils/constants";
import { useState } from "react";
import { FaCheck, FaHeart } from "react-icons/fa";

export default function DonatePage() {
  const [selectedAmount, setSelectedAmount] = useState<number | null>(100);
  const [customAmount, setCustomAmount] = useState<string>("");
  const [donorInfo, setDonorInfo] = useState({
    name: "",
    email: "",
    phone: "",
    isAnonymous: false,
    message: "",
  });

  const finalAmount = customAmount ? parseFloat(customAmount) : selectedAmount;

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] bg-gradient-to-br from-primary-50 via-white to-secondary-50 flex items-center py-20">
        <div className="container-max">
          <div className="max-w-3xl">
            <p className="text-primary-600 font-semibold text-lg uppercase tracking-wide">
              Make a Difference
            </p>
            <h1 className="text-5xl lg:text-6xl font-display font-bold text-neutral-900 dark:text-white leading-tight mt-4">
              Your Generosity Creates Change
            </h1>
            <p className="text-xl text-neutral-800 dark:text-neutral-100 mt-6">
              Every donation directly funds programs that transform lives. Choose how you want to support us.
            </p>
          </div>
        </div>
      </section>

      {/* Donation Form */}
      <section className="py-20 bg-neutral-50 dark:bg-neutral-800">
        <div className="container-max">
          <div className="max-w-2xl mx-auto">
            <Card>
              <form className="space-y-8">
                {/* Donation Amount */}
                <div>
                  <h3 className="text-xl font-bold text-neutral-900 mb-6">
                    Select Your Donation Amount
                  </h3>
                  <div className="grid grid-cols-2 md:grid-cols-5 gap-3 mb-6">
                    {DONATION_TIERS.map((tier) => (
                      <button
                        key={tier.amount}
                        type="button"
                        onClick={() => {
                          setSelectedAmount(tier.amount);
                          setCustomAmount("");
                        }}
                        className={`p-4 rounded-lg font-semibold transition-all border-2 ${
                          selectedAmount === tier.amount && !customAmount
                            ? "border-primary-600 bg-primary-50 text-primary-600"
                            : "border-neutral-200 text-neutral-700 hover:border-primary-300"
                        }`}
                      >
                        ${tier.amount}
                      </button>
                    ))}
                  </div>

                  {/* Custom Amount */}
                  <div className="relative">
                    <label className="block text-sm font-semibold text-neutral-700 mb-2">
                      Custom Amount ($)
                    </label>
                    <div className="relative">
                      <span className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-700">
                        $
                      </span>
                      <input
                        type="number"
                        placeholder="Enter custom amount"
                        value={customAmount}
                        onChange={(e) => {
                          setCustomAmount(e.target.value);
                          setSelectedAmount(null);
                        }}
                        className="w-full pl-8 pr-4 py-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      />
                    </div>
                  </div>
                </div>

                {/* Impact Summary */}
                {finalAmount && (
                  <div className="p-4 bg-primary-50 rounded-lg border border-primary-200">
                    <p className="text-sm text-neutral-700 mb-2">
                      <span className="font-semibold">Your ${finalAmount} donation will:</span>
                    </p>
                    <ul className="space-y-2 text-sm text-neutral-800">
                      {finalAmount >= 25 && (
                        <li className="flex items-center gap-2">
                          <FaCheck className="text-primary-600" size={14} />
                          Provide essential supplies for a family
                        </li>
                      )}
                      {finalAmount >= 50 && (
                        <li className="flex items-center gap-2">
                          <FaCheck className="text-primary-600" size={14} />
                          Fund a full skills training session
                        </li>
                      )}
                      {finalAmount >= 100 && (
                        <li className="flex items-center gap-2">
                          <FaCheck className="text-primary-600" size={14} />
                          Support a child&apos;s education for a month
                        </li>
                      )}
                      {finalAmount >= 250 && (
                        <li className="flex items-center gap-2">
                          <FaCheck className="text-primary-600" size={14} />
                          Enable multiple community programs
                        </li>
                      )}
                    </ul>
                  </div>
                )}

                {/* Donor Information */}
                <div className="space-y-4 border-t pt-6">
                  <h3 className="text-lg font-bold text-neutral-900">
                    Donor Information
                  </h3>

                  <div>
                    <label className="block text-sm font-semibold text-neutral-700 mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      required
                      value={donorInfo.name}
                      onChange={(e) =>
                        setDonorInfo({ ...donorInfo, name: e.target.value })
                      }
                      className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold text-neutral-700 mb-2">
                        Email
                      </label>
                      <input
                        type="email"
                        required
                        value={donorInfo.email}
                        onChange={(e) =>
                          setDonorInfo({ ...donorInfo, email: e.target.value })
                        }
                        className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-neutral-700 mb-2">
                        Phone (Optional)
                      </label>
                      <input
                        type="tel"
                        value={donorInfo.phone}
                        onChange={(e) =>
                          setDonorInfo({ ...donorInfo, phone: e.target.value })
                        }
                        className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-neutral-700 mb-2">
                      Message (Optional)
                    </label>
                    <textarea
                      value={donorInfo.message}
                      onChange={(e) =>
                        setDonorInfo({ ...donorInfo, message: e.target.value })
                      }
                      placeholder="Share why you're supporting us..."
                      rows={3}
                      className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent resize-none"
                    />
                  </div>

                  <label className="flex items-center gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={donorInfo.isAnonymous}
                      onChange={(e) =>
                        setDonorInfo({
                          ...donorInfo,
                          isAnonymous: e.target.checked,
                        })
                      }
                      className="w-4 h-4 cursor-pointer"
                    />
                    <span className="text-sm text-neutral-800">
                      Donate anonymously (your name won&apos;t be displayed)
                    </span>
                  </label>
                </div>

                {/* CTA */}
                <Button size="lg" className="w-full">
                  <FaHeart className="mr-2" />
                  Donate ${finalAmount || "0"}
                </Button>

                <p className="text-xs text-neutral-700 text-center">
                  Your donation is secure and 100% goes toward our programs.
                  We&apos;ll send you a tax receipt via email.
                </p>
              </form>
            </Card>
          </div>
        </div>
      </section>

      {/* Other Ways to Give */}
      <section className="py-20 bg-white dark:bg-neutral-900">
        <div className="container-max">
          <h2 className="text-4xl font-display font-bold text-center text-neutral-900 dark:text-white mb-12">
            Other Ways to Support Us
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Monthly Giving",
                description:
                  "Become a sustaining partner with automatic monthly donations. Maximum impact over time.",
              },
              {
                title: "Workplace Giving",
                description:
                  "Donate through your employer's payroll giving program for added tax benefits.",
              },
              {
                title: "Sponsorships",
                description:
                  "Sponsor an individual or program and receive updates on the impact of your support.",
              },
            ].map((way, idx) => (
              <Card key={idx} className="text-center dark:bg-neutral-800">
                <h3 className="text-xl font-bold text-neutral-900 dark:text-white">{way.title}</h3>
                <p className="text-neutral-800 dark:text-neutral-300 text-sm mt-3">{way.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
