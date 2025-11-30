"use client";

import { Button } from "@/components/common/Button";
import { Card } from "@/components/common/Card";
import { CONTACT_TYPES, ORG_EMAIL, ORG_PHONE, ORG_ADDRESS } from "@/lib/utils/constants";
import { useState } from "react";
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaPaperPlane } from "react-icons/fa";

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

    // Simulate API call
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

      // Reset after 3 seconds
      setTimeout(() => setIsSubmitted(false), 3000);
    }, 1500);
  };

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] bg-gradient-to-br from-brand-50 via-white to-secondary-50 flex items-center py-20">
        <div className="container-max">
          <div className="max-w-3xl">
            <p className="text-brand-600 font-semibold text-lg uppercase tracking-wide">
              Get in Touch
            </p>
            <h1 className="text-5xl lg:text-6xl font-display font-bold text-neutral-900 dark:text-white leading-tight mt-4">
              We&apos;d Love to Hear from You
            </h1>
            <p className="text-xl text-neutral-800 dark:text-neutral-100 mt-6">
              Have questions, feedback, or want to partner with us? Reach out and let&apos;s start a conversation.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Grid */}
      <section className="py-20 bg-neutral-50 dark:bg-neutral-800">
        <div className="container-max">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <Card className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-brand-100 rounded-full mb-4">
                <FaPhone className="w-8 h-8 text-brand-600" />
              </div>
              <h3 className="text-lg font-bold text-neutral-900 mb-2">Phone</h3>
              <a
                href={`tel:${ORG_PHONE}`}
                className="text-brand-600 hover:text-brand-700 font-semibold"
              >
                {ORG_PHONE}
              </a>
              <p className="text-neutral-700 text-sm mt-2">
                Mon - Fri, 9am to 5pm EST
              </p>
            </Card>

            <Card className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-brand-100 rounded-full mb-4">
                <FaEnvelope className="w-8 h-8 text-brand-600" />
              </div>
              <h3 className="text-lg font-bold text-neutral-900 mb-2">Email</h3>
              <a
                href={`mailto:${ORG_EMAIL}`}
                className="text-brand-600 hover:text-brand-700 font-semibold break-all"
              >
                {ORG_EMAIL}
              </a>
              <p className="text-neutral-700 text-sm mt-2">
                We&apos;ll respond within 24 hours
              </p>
            </Card>

            <Card className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-brand-100 rounded-full mb-4">
                <FaMapMarkerAlt className="w-8 h-8 text-brand-600" />
              </div>
              <h3 className="text-lg font-bold text-neutral-900 mb-2">Address</h3>
              <p className="text-brand-600 font-semibold text-sm">
                {ORG_ADDRESS}
              </p>
              <p className="text-neutral-700 text-sm mt-2">
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
                      className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-transparent"
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
                      className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-transparent"
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
                    className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-transparent"
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
                      className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-transparent"
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
                      className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-transparent"
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
                    className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-transparent resize-none"
                    placeholder="Tell us more about your inquiry..."
                  />
                </div>

                <Button
                  size="lg"
                  className="w-full"
                  isLoading={isLoading}
                  disabled={isLoading}
                >
                  <FaPaperPlane className="mr-2" />
                  Send Message
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white dark:bg-neutral-900">
        <div className="container-max">
          <h2 className="text-4xl font-display font-bold text-center text-neutral-900 dark:text-white mb-12">
            Frequently Asked Questions
          </h2>
          <div className="max-w-2xl mx-auto space-y-6">
            {[
              {
                q: "How can I make a donation?",
                a: "Visit our Donate page to make a one-time or monthly donation. We accept all major credit cards and bank transfers.",
              },
              {
                q: "Is my donation tax-deductible?",
                a: "Yes! We are a registered 501(c)(3) nonprofit. You'll receive a tax receipt for your records.",
              },
              {
                q: "How can I volunteer?",
                a: "We have volunteer opportunities available year-round. Visit our Volunteers page to learn more and apply.",
              },
              {
                q: "How do you use donations?",
                a: "85% of donations directly fund our programs. The remaining 15% covers administrative costs and fundraising.",
              },
            ].map((faq, idx) => (
              <div key={idx} className="p-6 bg-neutral-50 dark:bg-neutral-800 rounded-lg">
                <h3 className="font-bold text-neutral-900 dark:text-white mb-2">{faq.q}</h3>
                <p className="text-neutral-800 dark:text-neutral-300">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
