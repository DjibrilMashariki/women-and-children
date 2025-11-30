"use client";

import { Button } from "@/components/common/Button";
import { Card } from "@/components/common/Card";
import { CONTACT_TYPES, ORG_EMAIL, ORG_PHONE, ORG_ADDRESS } from "@/lib/utils/constants";
import { useState } from "react";
import Image from "next/image";
import { Phone, Mail, MapPin, Send } from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    type: "general",
    subject: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    setTimeout(() => {
      setIsSubmitted(true);
      setIsLoading(false);
      setFormData({
        name: "",
        email: "",
        phone: "",
        type: "general",
        subject: "",
        message: "",
      });

      setTimeout(() => setIsSubmitted(false), 3000);
    }, 1500);
  };

  return (
    <div className="w-full">
      {/* Hero Section - Standardized */}
      <section className="relative min-h-[60vh] flex items-center py-20 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/programs/MG_2304-scaled.webp"
            alt="Contact Us"
            fill
            priority
            className="object-cover w-full h-full"
            quality={90}
          />
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-neutral-900/90 via-neutral-900/70 to-transparent" />
        </div>

        <div className="container-max relative z-10">
          <div className="max-w-3xl">
            <div className="inline-block px-4 py-1.5 bg-orange-600/20 backdrop-blur-md border border-orange-500/30 rounded-full mb-6">
              <span className="text-orange-400 font-bold text-sm uppercase tracking-wider">
                Get in Touch
              </span>
            </div>
            <h1 className="text-5xl lg:text-7xl font-display font-black text-white leading-tight mb-6">
              Contact Us
            </h1>
            <p className="text-xl text-neutral-200 leading-relaxed max-w-2xl">
              Have questions, want to partner with us, or support our work? We&apos;d love to hear from you.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Grid */}
      <section className="py-20 bg-neutral-50">
        <div className="container-max">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <Card className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 rounded-full mb-4">
                <Phone className="w-8 h-8 text-primary-600" />
              </div>
              <h3 className="text-lg font-bold text-neutral-900 mb-2">Phone</h3>
              <a
                href={`tel:${ORG_PHONE}`}
                className="text-primary-600 hover:text-primary-700 font-semibold"
              >
                {ORG_PHONE}
              </a>
              <p className="text-neutral-600 text-sm mt-2">
                Mon - Fri, 9am to 5pm EST
              </p>
            </Card>

            <Card className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 rounded-full mb-4">
                <Mail className="w-8 h-8 text-primary-600" />
              </div>
              <h3 className="text-lg font-bold text-neutral-900 mb-2">Email</h3>
              <a
                href={`mailto:${ORG_EMAIL}`}
                className="text-primary-600 hover:text-primary-700 font-semibold break-all"
              >
                {ORG_EMAIL}
              </a>
              <p className="text-neutral-600 text-sm mt-2">
                We&apos;ll respond within 24 hours
              </p>
            </Card>

            <Card className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 rounded-full mb-4">
                <MapPin className="w-8 h-8 text-primary-600" />
              </div>
              <h3 className="text-lg font-bold text-neutral-900 mb-2">Address</h3>
              <p className="text-primary-600 font-semibold text-sm">
                {ORG_ADDRESS}
              </p>
              <p className="text-neutral-600 text-sm mt-2">
                Visit us for a tour
              </p>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="max-w-2xl mx-auto">
            <Card>
              <h2 className="text-2xl font-bold text-neutral-900 mb-6">
                Send us a Message
              </h2>

              {isSubmitted && (
                <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg">
                  <p className="text-green-800 font-semibold flex items-center gap-2">
                    <span>✓</span> Thank you! We&apos;ve received your message and will get back to you soon.
                  </p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-neutral-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-neutral-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-neutral-700 mb-2">
                    Phone (Optional)
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    placeholder="Your phone number"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-neutral-700 mb-2">
                      Contact Type *
                    </label>
                    <select
                      name="type"
                      required
                      value={formData.type}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    >
                      {CONTACT_TYPES.map((type) => (
                        <option key={type.id} value={type.id}>
                          {type.label}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-neutral-700 mb-2">
                      Subject *
                    </label>
                    <input
                      type="text"
                      name="subject"
                      required
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      placeholder="Subject of your inquiry"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-neutral-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent resize-none"
                    placeholder="Tell us more about your inquiry..."
                  />
                </div>

                <Button
                  size="lg"
                  className="w-full"
                  isLoading={isLoading}
                  disabled={isLoading}
                >
                  <Send className="mr-2" />
                  Send Message
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="container-max">
          <h2 className="text-4xl font-display font-bold text-center text-neutral-900 mb-12">
            Frequently Asked Questions
          </h2>
          <div className="max-w-2xl mx-auto space-y-6">
            {[
              {
                q: "What are the main challenges women and children face in DRC?",
                a: "In DRC, women and children are often victims of sexual violence, discrimination, and social exclusion. Armed conflicts exacerbate these problems, causing human losses and violations of fundamental rights.",
              },
              {
                q: "How does WCV contribute to promoting women's and children's rights?",
                a: "We conduct awareness campaigns, educational workshops, and distribute educational resources to strengthen understanding of rights within communities. We also provide legal aid and psychological support.",
              },
              {
                q: "What initiatives does WCV offer for women's empowerment?",
                a: "Our microfinance programs provide low-interest loans and financial management training. We also offer vocational training in artisanal trades for socioeconomic integration.",
              },
              {
                q: "How can I support WCV?",
                a: "You can support us through donations, volunteering, partnerships, or advocacy. Visit our Donate or Get Involved pages to learn more.",
              },
            ].map((faq, idx) => (
              <div key={idx} className="p-6 bg-orange-50 rounded-lg border border-orange-200">
                <h3 className="font-bold text-neutral-900 mb-2">{faq.q}</h3>
                <p className="text-neutral-600">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Media & Events */}
      <section className="py-20 bg-neutral-50">
        <div className="container-max">
          <h2 className="text-4xl font-display font-bold text-center text-neutral-900 mb-4">
            Connect With Us
          </h2>
          <p className="text-center text-neutral-600 mb-12 max-w-2xl mx-auto">
            Follow our work and stay updated on events, impact stories, and opportunities to get involved
          </p>

          <div className="flex flex-wrap justify-center gap-6 mb-16">
            <a
              href="https://web.facebook.com/profile.php?id=61578058671982"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-8 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" /></svg>
              Facebook
            </a>
            <a
              href="https://www.youtube.com/@WomenandChildrensVoice"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-8 py-4 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" /></svg>
              YouTube
            </a>
            <a
              href="https://www.linkedin.com/company/wcv-asbl-women-and-children-s-voice/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-8 py-4 bg-blue-700 text-white rounded-lg hover:bg-blue-800 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>
              LinkedIn
            </a>
          </div>

          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-neutral-900 mb-6 text-center">Upcoming Events</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="border-2 border-orange-200 hover:border-orange-400 transition-all">
                <div className="flex items-start gap-4">
                  <div className="text-4xl">📅</div>
                  <div>
                    <h4 className="font-bold text-lg text-neutral-900 mb-2">International Women&apos;s Day Celebration</h4>
                    <p className="text-sm text-neutral-600">Join us for workshops, inspiring speeches, and community activities celebrating women&apos;s equality and rights.</p>
                  </div>
                </div>
              </Card>
              <Card className="border-2 border-orange-200 hover:border-orange-400 transition-all">
                <div className="flex items-start gap-4">
                  <div className="text-4xl">🎤</div>
                  <div>
                    <h4 className="font-bold text-lg text-neutral-900 mb-2">Children&apos;s Rights Forum</h4>
                    <p className="text-sm text-neutral-600">Annual forum with experts, activists, and community members discussing challenges facing children in DRC.</p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
