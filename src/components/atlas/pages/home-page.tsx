import { AtlasPageShell } from "@/components/atlas/layout/atlas-page-shell";
import { AtlasCaseStudiesSection } from "@/components/atlas/sections/home/atlas-case-studies-section";
import { AtlasHomeHero } from "@/components/atlas/sections/home/atlas-home-hero";
import { AtlasLogoStrip } from "@/components/atlas/sections/home/atlas-logo-strip";
import { AtlasServicesTrack } from "@/components/atlas/sections/home/atlas-services-track";
import { AtlasTrustedSection } from "@/components/atlas/sections/home/atlas-trusted-section";
import { AtlasWorkflowSection } from "@/components/atlas/sections/home/atlas-workflow-section";
import { AtlasReviewsSection } from "@/components/atlas/sections/home/atlas-reviews-section";
import { AtlasBlogSection } from "@/components/atlas/sections/home/atlas-blog-section";
import { AtlasMembershipBenefitsSection } from "@/components/atlas/sections/home/atlas-membership-benefits-section";

export function HomePage() {
  return (
    <AtlasPageShell>
      <AtlasHomeHero />
      <AtlasLogoStrip />
      <AtlasTrustedSection />
      <AtlasCaseStudiesSection />
      <AtlasServicesTrack />
      <AtlasWorkflowSection />
      <AtlasReviewsSection />
      <AtlasBlogSection />
      <AtlasMembershipBenefitsSection />
    </AtlasPageShell>
  );
}
