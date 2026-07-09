import { MarketingHero } from "@/components/atlas/heroes/marketing-hero";
import { AtlasPageShell } from "@/components/atlas/layout/atlas-page-shell";
import { ATLAS_CAL_LINK, ATLAS_WHATSAPP_LINK } from "@/lib/atlas-site-data";

type ServicePageTemplateProps = {
  eyebrow: string;
  firstLine: string;
  secondLine: string;
  summary: string;
  audience: string;
  deliverables: string[];
  process: Array<{ title: string; text: string }>;
  outcomes: Array<{ title: string; text: string }>;
};

export function ServicePageTemplate({
  eyebrow,
  firstLine,
  secondLine,
  summary,
  audience,
  deliverables,
  process,
  outcomes,
}: ServicePageTemplateProps) {
  return (
    <AtlasPageShell>
      <MarketingHero
        eyebrow={eyebrow}
        firstLine={firstLine}
        secondLine={secondLine}
        summary={summary}
        actions={[
          { label: "Book A Discovery Call", href: ATLAS_CAL_LINK, variant: "dark" },
          { label: "Chat On WhatsApp", href: ATLAS_WHATSAPP_LINK, variant: "light" },
        ]}
      />

      <section className="py-10 md:py-16 bg-white">
        <div className="atlas-container bg-black text-white p-8 md:p-12 rounded-2xl flex flex-col md:flex-row gap-6 md:gap-12 items-start md:items-center">
          <div className="text-sm font-medium uppercase tracking-wide opacity-70 shrink-0">Best fit</div>
          <p className="text-xl md:text-2xl leading-[1.5] font-ivyoradisplay italic m-0">{audience}</p>
        </div>
      </section>

      <section className="py-20 md:py-[120px] bg-white">
        <div className="atlas-container">
          <div className="flex flex-col gap-4 mb-12">
            <div className="text-sm font-medium tracking-wide uppercase text-atlas-muted-text m-0">What we handle</div>
            <h2 className="text-[32px] md:text-[40px] leading-[1.2] font-medium tracking-tight text-black m-0">Deliverables and build focus</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {deliverables.map((item) => (
              <div key={item} className="p-8 bg-atlas-muted-surface rounded-2xl">
                <div className="text-xl font-medium tracking-tight text-black m-0">{item}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-[120px] bg-white">
        <div className="atlas-container">
          <div className="flex flex-col gap-4 mb-12">
            <div className="text-sm font-medium tracking-wide uppercase text-atlas-muted-text m-0">How we work</div>
            <h2 className="text-[32px] md:text-[40px] leading-[1.2] font-medium tracking-tight text-black m-0">A clean process from scope to launch</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {process.map((item) => (
              <div key={item.title} className="flex flex-col gap-4 p-8 bg-white border border-atlas-border rounded-2xl h-full">
                <div className="text-xl font-medium tracking-tight text-black">{item.title}</div>
                <p className="text-base leading-[1.6] text-atlas-muted-text m-0">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-[120px] bg-white">
        <div className="atlas-container">
          <div className="flex flex-col gap-4 mb-12">
            <div className="text-sm font-medium tracking-wide uppercase text-atlas-muted-text m-0">Why Atlas Studio</div>
            <h2 className="text-[32px] md:text-[40px] leading-[1.2] font-medium tracking-tight text-black m-0">What clients get from the working model</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {outcomes.map((item) => (
              <div key={item.title} className="flex flex-col gap-4 p-8 bg-white border border-atlas-border rounded-2xl h-full">
                <div className="text-xl font-medium tracking-tight text-black">{item.title}</div>
                <p className="text-base leading-[1.6] text-atlas-muted-text m-0">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-10 md:py-16 bg-white">
        <div className="atlas-container">
          <div className="bg-[#e9eaf0] p-10 md:p-16 rounded-[32px] flex flex-col md:flex-row items-start md:items-center justify-between gap-10">
            <div>
              <div className="text-sm font-medium tracking-wide uppercase text-atlas-muted-text m-0">Ready when you are</div>
              <h2 className="text-[40px] md:text-[56px] leading-[1.1] font-medium tracking-tight text-black m-0 mt-4">Let’s scope the right next build.</h2>
            </div>
            <div className="flex flex-wrap items-center gap-4">
              <a href={ATLAS_CAL_LINK} target="_blank" rel="noreferrer" className="atlas-button atlas-button--dark">
                Book A Discovery Call
              </a>
              <a href={ATLAS_WHATSAPP_LINK} target="_blank" rel="noreferrer" className="atlas-button atlas-button--light">
                WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      </section>
    </AtlasPageShell>
  );
}
