import type { Metadata } from "next";
import { ORG_NAME } from "@/lib/utils/constants";
import "@/styles/globals.css";
import { ClientLayout } from "./ClientLayout";

export const metadata: Metadata = {
  title: `${ORG_NAME} - Empowering Lives, Building Futures`,
  description:
    "Women & Children's Voice is an NGO dedicated to empowering women and protecting children through education, health, protection, and economic opportunity programs.",
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
    icon: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-white dark:bg-neutral-950 text-neutral-900 dark:text-neutral-50 transition-colors duration-300">
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
