"use client";

import Link from "next/link";
import Image from "next/image";
import { ROUTES, ORG_NAME, ORG_EMAIL, ORG_PHONE, SOCIAL_LINKS } from "@/lib/utils/constants";
import { Facebook, Twitter, Instagram, Linkedin, Heart } from "lucide-react";

const SocialIcon = ({ icon: Icon, href }: { icon: React.ElementType; href: string }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="text-white hover:text-brand-500 transition-colors"
    aria-label="Social link"
  >
    <Icon size={20} />
  </a>
);

export function Footer() {
  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: "Quick Links",
      links: [
        { label: "About", href: ROUTES.ABOUT },
        { label: "Programs", href: ROUTES.PROGRAMS },
        { label: "Stories", href: ROUTES.STORIES },
        { label: "Team", href: ROUTES.TEAM },
      ],
    },
    {
      title: "Get Involved",
      links: [
        { label: "Donate", href: ROUTES.DONATE },
        { label: "Volunteer", href: ROUTES.VOLUNTEERS },
        { label: "Partnerships", href: ROUTES.CONTACT },
        { label: "Newsletter", href: "#" },
      ],
    },
    {
      title: "Resources",
      links: [
        { label: "Annual Report", href: "#" },
        { label: "Impact Stories", href: ROUTES.STORIES },
        { label: "Privacy Policy", href: ROUTES.PRIVACY },
        { label: "Terms of Service", href: ROUTES.TERMS },
      ],
    },
  ];

  return (
    <footer className="bg-black text-neutral-100 mt-16">
      <div className="container-max py-12">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <Link href={ROUTES.HOME} className="flex items-center gap-3 mb-4 group">
              <div className="w-10 h-10 rounded-full overflow-hidden bg-white flex items-center justify-center">
                <Image src="/logo.svg" alt={ORG_NAME} width={40} height={40} className="w-full h-full object-contain group-hover:scale-110 transition-transform" />
              </div>
              <div className="flex flex-col">
                <span className="font-display font-bold text-base text-white">
                  Women &amp; Children&apos;s
                </span>
                <span className="font-display font-bold text-lg text-white leading-tight -mt-0.5">
                  Voice
                </span>
              </div>
            </Link>
            <p className="text-neutral-400 text-sm leading-relaxed mb-4">
              Empowering lives, building futures. Together, we create lasting change for women and children in need.
            </p>
            <div className="flex gap-4">
              <SocialIcon icon={Facebook} href={SOCIAL_LINKS.facebook} />
              <SocialIcon icon={Twitter} href={SOCIAL_LINKS.twitter} />
              <SocialIcon icon={Instagram} href={SOCIAL_LINKS.instagram} />
              <SocialIcon icon={Linkedin} href={SOCIAL_LINKS.linkedin} />
            </div>
          </div>

          {/* Link Sections */}
          {footerSections.map((section) => (
            <div key={section.title}>
              <h3 className="font-semibold text-white mb-4 text-sm uppercase tracking-wide">
                {section.title}
              </h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-brand-500 hover:text-brand-400 transition-colors text-sm"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Contact Bar */}
        <div className="border-t border-neutral-800 pt-8 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <p className="text-neutral-400 text-xs uppercase tracking-wide mb-1">Email</p>
              <a
                href={`mailto:${ORG_EMAIL}`}
                className="text-brand-500 hover:text-brand-400 transition-colors font-medium"
              >
                {ORG_EMAIL}
              </a>
            </div>
            <div>
              <p className="text-neutral-400 text-xs uppercase tracking-wide mb-1">Phone</p>
              <a
                href={`tel:${ORG_PHONE}`}
                className="text-brand-500 hover:text-brand-400 transition-colors font-medium"
              >
                {ORG_PHONE}
              </a>
            </div>
            <div className="md:text-right">
              <p className="text-neutral-400 text-xs uppercase tracking-wide mb-1">
                Registered Nonprofit 501(c)(3)
              </p>
              <p className="text-white font-medium">EIN: 12-3456789</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-neutral-800 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-neutral-400 text-sm">
            © {currentYear} {ORG_NAME}. All rights reserved.
          </p>
          <div className="flex items-center gap-2 text-sm text-neutral-400">
            <span>Made with</span>
            <Heart size={16} className="text-brand-500" />
            <span>for those who need it most</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
