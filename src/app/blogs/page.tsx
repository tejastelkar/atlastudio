import type { Metadata } from "next";

import { BlogsPage as AtlasBlogsPage } from "@/components/atlas/pages/blogs-page";

export const metadata: Metadata = {
  title: "Blogs | Atlas Studio",
  description:
    "Read Atlas Studio insights on custom websites, Shopify, SEO, conversion, and web apps.",
};

export default function BlogsPage() {
  return <AtlasBlogsPage />;
}
