import { AtlasPageShell } from "@/components/atlas/layout/atlas-page-shell";
import { WebflowHero } from "@/components/atlas/sections/services/webflow/WebflowHero";
import WebflowLogoTicker from "@/components/atlas/sections/services/webflow/WebflowLogoTicker";
import WebflowOverview from "@/components/atlas/sections/services/webflow/WebflowOverview";
import WebflowProcess from "@/components/atlas/sections/services/webflow/WebflowProcess";
import WebflowServicesGrid from "@/components/atlas/sections/services/webflow/WebflowServicesGrid";
import WebflowStats from "@/components/atlas/sections/services/webflow/WebflowStats";
import { ATLAS_WEBFLOW_PAGE_DATA } from "@/lib/atlas-webflow-page-data";

export default function WebflowExpertAgencyPage() {
  return (
    <AtlasPageShell>
      <main className="w-full flex flex-col">
        <WebflowHero data={ATLAS_WEBFLOW_PAGE_DATA.hero} />
        <WebflowLogoTicker />
        <WebflowOverview />
        <WebflowStats />
        <WebflowServicesGrid />
        <WebflowProcess />
      </main>
    </AtlasPageShell>
  );
}
