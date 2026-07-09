import type { Metadata } from "next";

import { ServicePageTemplate } from "@/components/atlas/pages/service-page-template";

export const metadata: Metadata = {
  title: "Custom Web Apps | Atlas Studio",
  description:
    "Atlas Studio builds focused custom web apps, internal tools, dashboards, and client portals for teams that need cleaner workflows and dependable execution.",
};

export default function MvpDevelopmentPage() {
  return (
    <ServicePageTemplate
      eyebrow="Custom Web Apps"
      firstLine="Focused Web Apps"
      secondLine="Built Fast And Clearly"
      summary="Atlas Studio builds internal tools, client portals, dashboards, and focused web apps for businesses that need cleaner workflows and dependable execution."
      audience="Best for teams that need a real operational tool, portal, or web product and want the scope kept practical from the beginning."
      deliverables={[
        "Workflow and scope definition",
        "Dashboard and portal interfaces",
        "Admin and client-facing views",
        "Frontend implementation",
        "Product logic and UX refinement",
        "Launch support and iteration",
      ]}
      process={[
        {
          title: "Scope the right product",
          text: "We keep the first version focused on the workflow that actually matters so the build stays realistic and useful.",
        },
        {
          title: "Design the user flow",
          text: "The app is mapped around how the team or user needs to move through the workflow, not around unnecessary feature bloat.",
        },
        {
          title: "Ship a working system",
          text: "The build is executed to be practical, stable, and ready for actual use rather than just looking like a concept.",
        },
      ]}
      outcomes={[
        {
          title: "Less operational friction",
          text: "The finished app reduces repeat manual work, confusion, or patchy spreadsheet-driven processes.",
        },
        {
          title: "Clear product direction",
          text: "You avoid wasting time building too much too early because the app starts from a sharp scope.",
        },
        {
          title: "Fast founder-level delivery",
          text: "The process stays direct, practical, and execution-heavy so the project keeps moving instead of getting stuck in layers.",
        },
      ]}
    />
  );
}
