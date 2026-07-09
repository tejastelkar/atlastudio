import { SplitHeroTitle } from "@/components/atlas/heroes/split-hero-title";

type HeroAction = {
  label: string;
  href: string;
  variant?: "dark" | "light";
};

type MarketingHeroProps = {
  eyebrow?: string;
  firstLine: string;
  secondLine: string;
  summary: string;
  actions: HeroAction[];
  align?: "left" | "center";
};

export function MarketingHero({
  eyebrow,
  firstLine,
  secondLine,
  summary,
  actions,
  align = "center",
}: MarketingHeroProps) {
  const alignClass = align === "center" ? "items-center text-center" : "items-start text-left";
  
  return (
    <section className="pt-24 pb-16 md:pt-32 md:pb-24 bg-white">
      <div className={`atlas-container flex flex-col gap-6 ${alignClass}`}>
        {eyebrow ? (
          <div className="text-sm font-semibold tracking-widest uppercase text-atlas-muted-text">
            {eyebrow}
          </div>
        ) : null}
        <SplitHeroTitle firstLine={firstLine} secondLine={secondLine} align={align} />
        <p className="max-w-[620px] text-lg leading-[1.5] text-atlas-muted-text m-0">
          {summary}
        </p>
        <div className="flex flex-wrap items-center gap-4 mt-2">
          {actions.map((action) => (
            <a
              key={`${action.href}-${action.label}`}
              href={action.href}
              target={action.href.startsWith("http") ? "_blank" : undefined}
              rel={action.href.startsWith("http") ? "noreferrer" : undefined}
              className={`inline-flex items-center justify-center min-h-[50px] px-8 rounded-full text-base font-medium transition-colors no-underline ${
                action.variant === "light"
                  ? "bg-white text-black border border-black/10 hover:bg-black/5"
                  : "bg-[#090909] text-white hover:bg-black/80"
              }`}
            >
              {action.label}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
