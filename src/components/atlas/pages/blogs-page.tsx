import { MarketingHero } from "@/components/atlas/heroes/marketing-hero";
import { AtlasPageShell } from "@/components/atlas/layout/atlas-page-shell";
import { ATLAS_CAL_LINK } from "@/lib/atlas-site-data";

const BLOG_FILTERS = [
  "All",
  "Custom Websites",
  "Shopify",
  "SEO",
  "Web Apps",
  "Conversion",
] as const;

const BLOG_POSTS = [
  {
    category: "Custom Websites",
    title: "How to structure a B2B website so sales conversations start faster",
    text: "Messaging hierarchy, homepage structure, service framing, and CTA placement that reduce confusion for serious buyers.",
  },
  {
    category: "Shopify",
    title: "What actually matters before rebuilding a Shopify storefront",
    text: "Not every store needs a redesign first. Sometimes the product flow, collection structure, and speed issues matter more.",
  },
  {
    category: "SEO",
    title: "Why technical SEO should be part of the build process, not an afterthought",
    text: "Indexability, page structure, performance, and content framing are easier to solve during the build than after launch.",
  },
  {
    category: "Web Apps",
    title: "When an internal tool deserves a custom web app instead of another spreadsheet",
    text: "A simple way to judge when a workflow is painful enough to turn into a proper portal, dashboard, or app.",
  },
  {
    category: "Conversion",
    title: "The difference between a good-looking homepage and a homepage that converts",
    text: "Visual polish helps, but structure, offer clarity, trust, and CTA sequencing usually decide what happens next.",
  },
  {
    category: "Custom Websites",
    title: "A cleaner agency alternative for founders who still need serious execution",
    text: "Why some teams are choosing lean, founder-led delivery models with AI support instead of traditional full-agency retainers.",
  },
] as const;

export function BlogsPage() {
  return (
    <AtlasPageShell>
      <MarketingHero
        eyebrow="Atlas Studio Blog"
        firstLine="Insights On Websites,"
        secondLine="Shopify, SEO And Web Apps"
        summary="Practical writing on site structure, ecommerce growth, SEO, and how serious brands can make their digital presence work harder."
        actions={[{ label: "Book A Discovery Call", href: ATLAS_CAL_LINK, variant: "dark" }]}
      />

      <section className="py-10 md:py-16 bg-white">
        <div className="atlas-container">
          <div className="flex flex-wrap items-center gap-4">
            {BLOG_FILTERS.map((filter) => (
              <span key={filter} className={`inline-flex items-center justify-center px-5 py-2.5 rounded-full border text-base font-medium cursor-pointer transition-colors ${filter === "All" ? "bg-black text-white border-black" : "border-atlas-border text-atlas-muted-text hover:text-black hover:bg-atlas-muted-surface"}`}>
                {filter}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-20 md:pb-[120px] bg-white">
        <div className="atlas-container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {BLOG_POSTS.map((post) => (
              <article key={post.title} className="flex flex-col gap-4 p-8 bg-white border border-atlas-border rounded-2xl h-full transition-transform hover:-translate-y-1 hover:shadow-[0_10px_40px_rgba(0,0,0,0.08)] cursor-pointer">
                <div className="text-sm font-medium uppercase tracking-wide text-atlas-muted-text">{post.category}</div>
                <h2 className="text-2xl font-medium tracking-tight leading-[1.3] text-black m-0">{post.title}</h2>
                <p className="text-base leading-[1.6] text-atlas-muted-text m-0">{post.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </AtlasPageShell>
  );
}
