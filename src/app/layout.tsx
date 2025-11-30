import type { Metadata } from "next";
import { ORG_NAME } from "@/lib/utils/constants";
import "@/styles/globals.css";
import { Header } from "@/components/common/Header";
import { Footer } from "@/components/common/Footer";

export const metadata: Metadata = {
  title: `${ORG_NAME} - Empowering Lives, Building Futures`,
  description:
    "Women & Children is an NGO dedicated to empowering women and protecting children through education, health, protection, and economic opportunity programs.",
  keywords: [
    "NGO",
    "nonprofit",
    "women empowerment",
    "children protection",
    "education",
    "charity",
    "social impact",
  ],
  viewport: "width=device-width, initial-scale=1",
  icons: {
    icon: "/favicon.ico",
  },
};

import ScrollToTop from "@/components/ui/ScrollToTop";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning>
        <Header />
        <main className="animate-fade-in">{children}</main>
        <Footer />
        <ScrollToTop />
      </body>
    </html>
  );
}
