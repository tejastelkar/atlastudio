import { SplitHeroTitle } from "@/components/atlas/heroes/split-hero-title";

type LegalHeroProps = {
  eyebrow: string;
  title: string;
  summary: string;
  effectiveDate: string;
};

export function LegalHero({
  eyebrow,
  title,
  summary,
  effectiveDate,
}: LegalHeroProps) {
  const words = title.split(" ");
  const splitIndex = Math.max(1, Math.ceil(words.length / 2));
  const firstLine = words.slice(0, splitIndex).join(" ");
  const secondLine = words.slice(splitIndex).join(" ");

  return (
    <section className="pt-24 pb-16 md:pt-32 md:pb-24 bg-white border-b border-black/5">
      <div className="atlas-container grid grid-cols-1 lg:grid-cols-[1fr_280px] gap-12 lg:gap-24 items-start">
        <div className="flex flex-col items-start gap-6">
          <div className="text-sm font-semibold tracking-widest uppercase text-atlas-muted-text">{eyebrow}</div>
          <SplitHeroTitle
            firstLine={firstLine}
            secondLine={secondLine}
            align="left"
            className="text-left"
          />
          <p className="max-w-[620px] text-lg leading-[1.5] text-atlas-muted-text m-0">{summary}</p>
        </div>

        <div className="flex flex-col gap-4 p-6 bg-atlas-muted-surface rounded-xl border border-black/5 text-sm text-atlas-muted-text">
          <div><strong className="text-atlas-text">Effective Date:</strong> {effectiveDate}</div>
          <div><strong className="text-atlas-text">Last Updated:</strong> {effectiveDate}</div>
        </div>
      </div>
    </section>
  );
}
