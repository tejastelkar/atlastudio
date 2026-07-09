import type { Metadata } from "next";
import "./globals.css";

import { CaseStudiesMegaMenu, BlogMegaMenu, PricingMegaMenu } from "@/app/content-mega-menu";
import ServicesMegaMenu from "@/app/services-mega-menu";

export const metadata: Metadata = {
  title: "Atlas Studio",
  description:
    "Atlas Studio builds custom websites, Shopify storefronts, focused web apps, and SEO-ready digital experiences for SaaS, ecommerce, and B2B brands.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full bg-white text-black">
        <ServicesMegaMenu />
        <CaseStudiesMegaMenu />
        <PricingMegaMenu />
        <BlogMegaMenu />
        {children}
      </body>
    </html>
  );
}
