"use client";

import { Header } from "@/components/common/Header";
import { Footer } from "@/components/common/Footer";
import { MobileNavigation } from "@/components/common/MobileNavigation";
import { ThemeProvider } from "@/lib/context/ThemeContext";

export function ClientLayout({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider>
      <Header />
      <main>{children}</main>
      <Footer />
      <MobileNavigation />
    </ThemeProvider>
  );
}
