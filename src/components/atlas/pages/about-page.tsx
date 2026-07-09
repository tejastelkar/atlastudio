import { MarketingHero } from "@/components/atlas/heroes/marketing-hero";
import { AtlasPageShell } from "@/components/atlas/layout/atlas-page-shell";
import { ATLAS_CAL_LINK, ATLAS_WHATSAPP_LINK } from "@/lib/atlas-site-data";

const WORKING_MODEL = [
  {
    title: "Founder-led communication",
    text: "You work directly with the person shaping the work, not through account-management layers.",
  },
  {
    title: "AI-assisted execution",
    text: "Specialised AI agents support research, implementation speed, and iteration quality while keeping the work grounded in real business goals.",
  },
  {
    title: "India-first, globally usable delivery",
    text: "The studio is based in Pune and built to deliver for businesses that need strong websites, stores, and systems regardless of geography.",
  },
] as const;

export function AboutPage() {
  return (
    <AtlasPageShell>
      <MarketingHero
        eyebrow="About Atlas Studio"
        firstLine="A Pune-Based Studio"
        secondLine="For Serious Website Work"
        summary="Atlas Studio is a founder-led digital studio focused on custom websites, Shopify builds, web apps, and SEO-minded execution for teams that need fast, clear delivery."
        actions={[
          { label: "Book A Discovery Call", href: ATLAS_CAL_LINK, variant: "dark" },
          { label: "Chat On WhatsApp", href: ATLAS_WHATSAPP_LINK, variant: "light" },
        ]}
      />

      <section className="py-20 md:py-[120px] bg-white">
        <div className="atlas-container grid grid-cols-1 md:grid-cols-[1fr_300px] gap-12 lg:gap-[120px] items-start">
          <div className="flex flex-col gap-6">
            <div className="text-sm font-medium tracking-wide uppercase text-atlas-muted-text mb-2">The idea behind the studio</div>
            <h2 className="text-[40px] md:text-[56px] leading-[1.1] font-medium tracking-tight text-black mb-6 mt-0">Built so more businesses can access fast, well-designed digital work.</h2>
            <p className="text-lg md:text-xl leading-[1.6] text-atlas-muted-text max-w-[800px] m-0">
              Atlas Studio exists to help businesses launch websites and digital systems that are faster,
              clearer, and more growth-ready without the drag of oversized teams or bloated processes.
            </p>
            <p className="text-lg md:text-xl leading-[1.6] text-atlas-muted-text max-w-[800px] m-0">
              The studio is currently founder-led, supported by multiple AI agents that speed up research,
              execution, and iteration while keeping the actual direction grounded in clear business goals.
            </p>
          </div>
          <div className="bg-atlas-muted-surface p-8 rounded-2xl">
            <div className="text-sm font-medium uppercase tracking-wide text-atlas-muted-text mb-4">Studio principle</div>
            <p className="text-base md:text-lg leading-[1.5] text-black font-ivyoradisplay italic m-0">
              Every ambitious business should be able to get a well-designed, fast, optimised website
              without unnecessary agency overhead.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-[120px] bg-atlas-background">
        <div className="atlas-container">
          <div className="flex flex-col gap-4 mb-12">
            <div className="text-sm font-medium tracking-wide uppercase text-atlas-muted-text">How it works</div>
            <h2 className="text-[32px] md:text-[40px] leading-[1.2] font-medium tracking-tight text-black m-0">The operating model behind Atlas Studio</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {WORKING_MODEL.map((item) => (
              <article key={item.title} className="flex flex-col gap-4 p-8 bg-white border border-atlas-border rounded-2xl h-full">
                <div className="text-xl font-medium tracking-tight text-black">{item.title}</div>
                <p className="text-base leading-[1.6] text-atlas-muted-text m-0">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </AtlasPageShell>
  );
}
