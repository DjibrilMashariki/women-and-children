"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, Heart, HeartHandshake, Mail } from "lucide-react";

interface NavItem {
  label: string;
  href: string;
  icon: React.ReactNode;
}

export const MobileNavigation: React.FC = () => {
  const pathname = usePathname();

  const navItems: NavItem[] = [
    {
      label: "Home",
      href: "/",
      icon: <Home className="w-6 h-6" />,
    },
    {
      label: "Donate",
      href: "/donate",
      icon: <Heart className="w-6 h-6" />,
    },
    {
      label: "Programs",
      href: "/programs",
      icon: <HeartHandshake className="w-6 h-6" />,
    },
    {
      label: "Contact",
      href: "/contact",
      icon: <Mail className="w-6 h-6" />,
    },
  ];

  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }
    return pathname.startsWith(href);
  };

  return (
    <>
      {/* Mobile Bottom Navigation - Only visible on mobile */}
      <nav
        className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-white dark:bg-neutral-900 border-t-2 border-neutral-200 dark:border-neutral-800 shadow-lg dark:shadow-2xl dark:shadow-orange-500/10"
        role="navigation"
        aria-label="Mobile navigation"
      >
        <div className="grid grid-cols-4 h-20">
          {navItems.map((item) => {
            const active = isActive(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`
                  flex flex-col items-center justify-center gap-1
                  transition-all duration-300
                  min-h-[48px] min-w-[48px]
                  ${active
                    ? "text-orange-600 dark:text-orange-400 bg-orange-50 dark:bg-neutral-800"
                    : "text-neutral-600 dark:text-neutral-400 hover:text-orange-500 dark:hover:text-orange-400 hover:bg-neutral-50 dark:hover:bg-neutral-800"
                  }
                `}
                aria-label={item.label}
                aria-current={active ? "page" : undefined}
              >
                {/* Icon with active state */}
                <div
                  className={`
                  transition-transform duration-300
                  ${active ? "scale-110" : "scale-100"}
                `}
                >
                  {item.icon}
                </div>

                {/* Label */}
                <span
                  className={`
                  text-xs font-semibold
                  ${active ? "text-orange-600 dark:text-orange-400" : "text-neutral-600 dark:text-neutral-400"}
                `}
                >
                  {item.label}
                </span>

                {/* Active Indicator */}
                {active && (
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-12 h-1 bg-orange-600 dark:bg-orange-400 rounded-b-full" />
                )}
              </Link>
            );
          })}
        </div>

        {/* Safe Area Padding for devices with notch/home indicator */}
        <div className="h-safe-area-inset-bottom bg-white" />
      </nav>

      {/* Spacer to prevent content from being hidden behind fixed nav */}
      <div className="md:hidden h-20" aria-hidden="true" />
    </>
  );
};
