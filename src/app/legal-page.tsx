import { LegalHero } from "@/components/atlas/heroes/legal-hero";
import { AtlasPageShell } from "@/components/atlas/layout/atlas-page-shell";
import {
  LegalContent,
  type AtlasLegalSection,
} from "@/components/atlas/sections/legal-content";

type LegalPageProps = {
  eyebrow: string;
  title: string;
  summary: string;
  effectiveDate: string;
  sections: AtlasLegalSection[];
};

export default async function LegalPage({
  eyebrow,
  title,
  summary,
  effectiveDate,
  sections,
}: LegalPageProps) {
  return (
    <AtlasPageShell>
      <LegalHero
        eyebrow={eyebrow}
        title={title}
        summary={summary}
        effectiveDate={effectiveDate}
      />
      <LegalContent sections={sections} />
    </AtlasPageShell>
  );
}
