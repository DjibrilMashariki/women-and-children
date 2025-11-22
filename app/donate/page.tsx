"use client";

import { Card } from "@/components/common/Card";
import { useState } from "react";
import { FaCheck, FaHeart, FaShieldAlt, FaLock, FaCreditCard } from "react-icons/fa";
import { AnimatedCounter, GradientText } from "@/components/common/AnimatedText";
import { DonationThermometer, ProgressChart } from "@/components/common/DataVisualization";
import Image from "next/image";
import { ExpandableContent } from "@/components/common/InteractiveComponents";
import { FinancialTransparency } from "@/components/common/FinancialTransparency";

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
      <section className="relative min-h-[60vh] flex items-center py-20 overflow-hidden">
        {/* Background Image with Gradient Overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/programs/MG_2346-scaled.webp"
            alt="Women and children in our programs"
            fill
            priority
            className="object-cover w-full h-full"
            quality={90}
          />
          {/* Enhanced gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-orange-900/90 via-orange-800/80 to-black/70" />
          
          {/* Decorative corner accent */}
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-br from-orange-500 to-orange-600 opacity-20 blur-3xl pointer-events-none" />
        </div>

        <div className="container-max relative z-10">
          <div className="max-w-3xl">
            <span className="inline-block px-5 py-2.5 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-full text-sm font-bold shadow-lg shadow-orange-500/30 mb-6">
              ✨ Make a Difference Today
            </span>
            <h1 className="text-5xl lg:text-6xl font-display font-black text-white leading-tight">
              Your Generosity Changes Lives
            </h1>
            <p className="text-xl text-orange-100 mt-6 leading-relaxed">
              Every donation directly empowers women and children across the Democratic Republic of Congo. Choose how you want to create impact.
            </p>
            
            {/* Quick Impact Stats */}
            <div className="grid grid-cols-3 gap-4 lg:gap-6 mt-10">
              {[
                { value: 1500, label: "Women Supported", icon: "👩🏾‍🎓", gradient: "from-orange-400 to-orange-600" },
                { value: 800, label: "Children Helped", icon: "👶🏾", gradient: "from-yellow-400 to-orange-500" },
                { value: 95, label: "Transparency Score", icon: "⭐", suffix: "%", gradient: "from-yellow-300 to-yellow-500" },
              ].map((stat) => (
                <div key={stat.label} className="group relative">
                  {/* Glow effect on hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${stat.gradient} rounded-2xl opacity-0 group-hover:opacity-20 blur-xl transition-all duration-500`} />
                  
                  {/* Card */}
                  <div className="relative bg-white/10 backdrop-blur-md rounded-2xl p-4 lg:p-5 border border-white/20 hover:border-white/40 transition-all duration-300 hover:scale-105 hover:-translate-y-1">
                    {/* Icon with animation */}
                    <div className="text-4xl lg:text-5xl mb-3 transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                      {stat.icon}
                    </div>
                    
                    {/* Number with gradient */}
                    <p className={`text-3xl lg:text-4xl xl:text-5xl font-black bg-clip-text text-transparent bg-gradient-to-r ${stat.gradient} tabular-nums mb-1`}>
                      <AnimatedCounter end={stat.value} suffix={stat.suffix || "+"} />
                    </p>
                    
                    {/* Label */}
                    <p className="text-xs lg:text-sm text-white/90 font-bold leading-tight">{stat.label}</p>
                    
                    {/* Decorative shine */}
                    <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-white/20 to-transparent rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Photo Impact Section */}
      <section className="py-16 bg-white border-b border-neutral-200">
        <div className="container-max">
          <div className="text-center mb-10">
            <h2 className="text-3xl lg:text-4xl font-display font-bold text-neutral-900 mb-4">
              See the <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-600">Real Impact</span> of Your Donation
            </h2>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              Your generosity transforms lives every single day. Here&apos;s what&apos;s happening right now in our programs.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              { img: "MG_2360-scaled.webp", title: "Education Programs" },
              { img: "MG_2288-scaled.webp", title: "Community Support" },
              { img: "IMG_1570-scaled.webp", title: "Empowerment Initiatives" },
            ].map((photo, idx) => (
              <div key={idx} className="group relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                <Image
                  src={`/images/programs/${photo.img}`}
                  alt={photo.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                  quality={85}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <h3 className="text-white font-bold text-lg">{photo.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Donation Form */}
      <section className="py-20 bg-neutral-50">
        <div className="container-max">
          <div className="max-w-2xl mx-auto">
            <div className="bg-white rounded-3xl shadow-2xl border-2 border-neutral-100 overflow-hidden">
              <div className="p-8 lg:p-10">
              <form className="space-y-8">
                {/* Donation Amount */}
                <div>
                  <h3 className="text-2xl font-bold text-neutral-900 mb-8">
                    Select Your Donation Amount
                  </h3>
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-8">
                    {[
                      { amount: 25, icon: "📚", impact: "School supplies" },
                      { amount: 50, icon: "💝", impact: "Monthly support" },
                      { amount: 100, icon: "👩🏾‍🏫", impact: "Training workshop" },
                      { amount: 250, icon: "🏥", impact: "Healthcare package" },
                      { amount: 500, icon: "💼", impact: "Microloan program" },
                    ].map((tier) => (
                      <button
                        key={tier.amount}
                        type="button"
                        onClick={() => {
                          setSelectedAmount(tier.amount);
                          setCustomAmount("");
                        }}
                        className={`group relative p-5 rounded-2xl font-bold transition-all duration-300 border-2 overflow-hidden ${
                          selectedAmount === tier.amount && !customAmount
                            ? "border-orange-500 bg-gradient-to-br from-orange-50 to-orange-100 text-orange-700 shadow-lg scale-105"
                            : "border-neutral-200 text-neutral-700 hover:border-orange-300 hover:shadow-md hover:scale-102"
                        }`}
                      >
                        {selectedAmount === tier.amount && !customAmount && (
                          <div className="absolute inset-0 bg-gradient-to-br from-orange-500 to-orange-600 opacity-5" />
                        )}
                        <div className="relative z-10 text-center">
                          <div className="text-3xl mb-2">{tier.icon}</div>
                          <div className="text-2xl font-black mb-1">${tier.amount}</div>
                          <div className="text-xs text-neutral-600 font-normal">{tier.impact}</div>
                        </div>
                      </button>
                    ))}
                  </div>

                  {/* Custom Amount */}
                  <div className="relative">
                    <label className="block text-sm font-semibold text-neutral-700 mb-2">
                      Custom Amount ($)
                    </label>
                    <div className="relative">
                      <span className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-600">
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
                  <div className="p-6 bg-gradient-to-br from-orange-50 to-orange-100 dark:from-orange-950/20 dark:to-orange-900/20 rounded-2xl border-2 border-orange-300 dark:border-orange-700 shadow-xl">
                    <p className="text-base text-neutral-800 dark:text-neutral-200 mb-4">
                      <span className="font-bold text-orange-900 dark:text-orange-400">Your ${finalAmount} donation will:</span>
                    </p>
                    <ul className="space-y-3 text-sm text-neutral-900 dark:text-neutral-100">
                      {finalAmount >= 25 && (
                        <li className="flex items-center gap-2">
                          <FaCheck className="text-orange-600 dark:text-orange-400" size={14} />
                          Provide school supplies for 2 children
                        </li>
                      )}
                      {finalAmount >= 50 && (
                        <li className="flex items-center gap-2">
                          <FaCheck className="text-orange-600 dark:text-orange-400" size={14} />
                          Support 1 woman&apos;s microfinance loan
                        </li>
                      )}
                      {finalAmount >= 100 && (
                        <li className="flex items-center gap-2">
                          <FaCheck className="text-orange-600 dark:text-orange-400" size={14} />
                          Fund 1 month of psychosocial support
                        </li>
                      )}
                      {finalAmount >= 250 && (
                        <li className="flex items-center gap-2">
                          <FaCheck className="text-orange-600 dark:text-orange-400" size={14} />
                          Sponsor an educational workshop for 20 participants
                        </li>
                      )}
                      {finalAmount >= 500 && (
                        <li className="flex items-center gap-2">
                          <FaCheck className="text-orange-600 dark:text-orange-400" size={14} />
                          Provide agricultural tools for 10 farmers
                        </li>
                      )}
                    </ul>
                  </div>
                )}

                {/* Donor Information */}
                <div className="space-y-4 border-t-2 border-neutral-200 pt-8">
                  <h3 className="text-2xl font-bold text-neutral-900 mb-6">
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
                      className="w-full px-4 py-3 border-2 border-neutral-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all duration-200"
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
                    <span className="text-sm text-neutral-700">
                      Donate anonymously (your name won&apos;t be displayed)
                    </span>
                  </label>
                </div>

                {/* CTA */}
                <button 
                  type="submit"
                  className="group relative w-full px-10 py-6 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-2xl shadow-2xl hover:shadow-orange-500/50 transform hover:scale-105 transition-all duration-300 overflow-hidden"
                >
                  {/* Pulsing indicator */}
                  <span className="absolute -top-1 -right-1 flex h-4 w-4 z-10">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-4 w-4 bg-orange-300"></span>
                  </span>
                  
                  {/* Shimmer effect */}
                  <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                  
                  <div className="flex items-center justify-center gap-3 relative z-10">
                    <FaHeart className="w-6 h-6" />
                    <div className="text-left">
                      <div className="text-xl font-bold">Donate ${finalAmount || "0"} Now</div>
                      <div className="text-sm text-orange-100">Make an impact today</div>
                    </div>
                    <svg className="w-5 h-5 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </div>
                </button>

                {/* Trust Signals */}
                <div className="space-y-4 pt-6">
                  <div className="flex items-center justify-center gap-8 text-sm text-neutral-600">
                    <div className="flex items-center gap-2">
                      <FaShieldAlt className="text-emerald-600" />
                      <span className="font-semibold">100% Secure</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <FaLock className="text-blue-600" />
                      <span className="font-semibold">SSL Encrypted</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <FaCreditCard className="text-purple-600" />
                      <span className="font-semibold">All Cards Accepted</span>
                    </div>
                  </div>
                  
                  <p className="text-xs text-neutral-600 text-center leading-relaxed">
                    Your donation is secure and goes directly to our programs in the DRC.<br />
                    We&apos;ll send you a tax receipt via email. 100% tax-deductible.
                  </p>
                  
                  {/* Recent Donors Social Proof */}
                  <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-4 text-center">
                    <div className="flex items-center justify-center gap-2 text-emerald-700">
                      <div className="flex -space-x-2">
                        {[1, 2, 3, 4].map((i) => (
                          <div key={i} className="w-8 h-8 rounded-full bg-gradient-to-br from-emerald-400 to-teal-500 border-2 border-white flex items-center justify-center text-white text-xs font-bold">
                            {String.fromCharCode(65 + i)}
                          </div>
                        ))}
                      </div>
                      <p className="text-sm font-semibold">
                        <span className="text-emerald-900 font-black"><AnimatedCounter end={127} /></span> people donated this week!
                      </p>
                    </div>
                  </div>
                </div>
              </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Campaign Progress Section */}
      <section className="py-20 bg-neutral-50">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-display font-bold text-neutral-900 mb-6">
              Our 2025 Campaign Progress
            </h2>
            <p className="text-lg text-neutral-700 max-w-2xl mx-auto">
              Together, we're working toward ambitious goals to expand our impact. See how close we are to reaching our targets.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <DonationThermometer
              current={87500}
              goal={150000}
              currency="$"
              title="2025 Annual Campaign"
            />
            
            <div className="lg:col-span-2">
              <ProgressChart
                title="Program Reach by Category"
                data={[
                  { label: "Education Programs", value: 15750, max: 20000, color: "bg-orange-500" },
                  { label: "Healthcare Services", value: 32400, max: 40000, color: "bg-orange-500" },
                  { label: "Protection Initiatives", value: 6200, max: 10000, color: "bg-orange-500" },
                  { label: "Economic Empowerment", value: 4250, max: 8000, color: "bg-orange-500" }
                ]}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Financial Transparency Section */}
      <FinancialTransparency />

      {/* Expandable FAQ Section */}
      <section className="py-24 bg-gradient-to-b from-neutral-50 to-white scroll-animate">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-display font-bold text-neutral-900">
              Frequently Asked <GradientText>Questions</GradientText>
            </h2>
            <p className="text-lg text-neutral-800 mt-4 max-w-2xl mx-auto">
              Everything you need to know about our work and how you can help.
            </p>
          </div>
          <div className="max-w-4xl mx-auto space-y-4">
            {[
              {
                title: "How do you ensure donations reach those in need?",
                preview: "Transparency and accountability in every program",
                content: "We maintain rigorous financial oversight with 87% of donations going directly to programs. Our annual reports, third-party audits, and on-ground documentation provide complete transparency. Every donor receives detailed impact reports showing exactly how their contribution made a difference."
              },
              {
                title: "What makes your programs different?",
                preview: "Community-driven, sustainable solutions",
                content: "Our programs are designed with community input and focus on long-term sustainability. We don't just provide aid—we build local capacity, train community leaders, and create systems that continue working long after we leave. This approach has led to a 94% program sustainability rate."
              },
              {
                title: "Can I visit your project sites?",
                preview: "Donor visits and volunteer opportunities available",
                content: "Absolutely! We encourage donor visits and offer structured volunteer programs. Our partnership coordinators can arrange site visits, volunteer placements from 2 weeks to 6 months, and educational trips for families and groups. Contact us to discuss opportunities that match your interests and schedule."
              }
            ].map((faq, idx) => (
              <ExpandableContent
                key={idx}
                title={faq.title}
                preview={faq.preview}
                content={faq.content}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Other Ways to Give */}
      <section className="py-20 bg-white">
        <div className="container-max">
          <h2 className="text-4xl font-display font-bold text-center text-neutral-900 mb-12">
            Other Ways to Support WCV
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Monthly Giving",
                icon: "🔄",
                description:
                  "Become a sustaining partner with automatic monthly donations. Provide consistent support that enables long-term planning and maximum impact.",
              },
              {
                title: "Program Sponsorship",
                icon: "🎯",
                description:
                  "Sponsor a specific program (education, health, microfinance) and receive detailed updates on the direct impact of your contribution.",
              },
              {
                title: "Corporate Partnership",
                icon: "🤝",
                description:
                  "Partner with us through workplace giving programs, matching gifts, or corporate social responsibility initiatives.",
              },
            ].map((way, idx) => (
              <Card key={idx} className="text-center border-2 border-orange-200 hover:border-orange-400 transition-all">
                <div className="text-5xl mb-4">{way.icon}</div>
                <h3 className="text-xl font-bold text-neutral-900">{way.title}</h3>
                <p className="text-neutral-600 text-sm mt-3">{way.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
