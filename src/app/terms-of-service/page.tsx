import type { Metadata } from "next";

import LegalPage from "@/app/legal-page";

export const metadata: Metadata = {
  title: "Terms of Service | Atlas Studio",
  description:
    "Read the Terms of Service for Atlas Studio, including project engagement, payments, delivery, IP, liability, and India-first legal terms.",
};

const effectiveDate = "July 8, 2026";

export default function TermsOfServicePage() {
  return (
    <LegalPage
      eyebrow="Terms of Service"
      title="Terms of Service"
      summary="Our working agreement with every client, covering project scope, payments, delivery, intellectual property, and core legal terms."
      effectiveDate={effectiveDate}
      sections={[
        {
          title: "1. Who we are",
          paragraphs: [
            "Atlas Studio is an India-first digital studio operating through atlastudio.in. In these terms, 'Atlas Studio', 'we', 'us', and 'our' refer to the business providing website design, Shopify, ecommerce, development, consulting, and related services.",
            "If you are entering into an order, proposal, statement of work, invoice, or project agreement with us, those commercial documents will work together with these terms. If there is a direct conflict, the signed project document will control for that specific engagement.",
          ],
        },
        {
          title: "2. Services and project scope",
          paragraphs: [
            "Our services may include strategy, discovery, design, development, Shopify work, content implementation, technical consulting, audits, and post-launch support. Every project is limited to the scope, deliverables, timelines, and assumptions stated in the agreed proposal or scope document.",
          ],
          bullets: [
            "Anything outside the approved scope may require a revised quote, timeline extension, or separate written approval.",
            "You are responsible for timely approvals, content, product data, brand assets, access credentials, and any third-party accounts needed for delivery.",
            "Estimated timelines depend on timely feedback and client-side dependencies. Delays in inputs or approvals may shift delivery dates.",
          ],
        },
        {
          title: "3. Pricing, invoices, and payment terms",
          paragraphs: [
            "Fees are quoted in writing and are payable according to the payment schedule mentioned in the proposal, invoice, or statement of work. Unless a different schedule is agreed in writing, invoices are due within the period stated on the invoice.",
          ],
          bullets: [
            "We may require an advance payment, deposit, milestone payment, or full upfront payment before starting work.",
            "Work may be paused if payment becomes overdue, and delivery dates may be revised accordingly.",
            "Taxes, gateway charges, currency conversion charges, bank charges, app subscriptions, plugin fees, hosting costs, and other third-party costs are the client's responsibility unless explicitly included in writing.",
          ],
        },
        {
          title: "4. Client responsibilities",
          paragraphs: [
            "To keep a project on schedule, you agree to provide accurate information, lawful content, and the approvals or access we request. You also confirm that you have the right to use any logos, product data, media, text, code, or brand assets you share with us.",
          ],
          bullets: [
            "You must review deliverables within a reasonable time and provide clear feedback.",
            "You must maintain your own backups for store data, content, customer data, and business systems unless backup management is expressly included in scope.",
            "You must ensure your business complies with all laws applicable to your products, marketing, pricing, fulfilment, and customer communications.",
          ],
        },
        {
          title: "5. Intellectual property",
          paragraphs: [
            "You retain ownership of your pre-existing trademarks, logos, content, product data, and other materials you provide. We retain ownership of our pre-existing tools, frameworks, methods, internal libraries, proposal material, and know-how.",
            "Subject to full payment of the applicable project fees, Atlas Studio grants you the right to use the final approved deliverables created specifically for your project, except for third-party tools, licensed assets, fonts, templates, stock items, apps, or software that remain subject to their own licence terms.",
          ],
          bullets: [
            "We may reuse general ideas, workflows, techniques, non-confidential learnings, and internal components that do not disclose your confidential information.",
            "Unless you ask otherwise in writing, we may display completed work in our portfolio, proposals, and marketing materials as an example of our services.",
          ],
        },
        {
          title: "6. Revisions, pauses, and project closure",
          paragraphs: [
            "Revision rounds are limited to what is included in the approved scope. Excessive changes, conflicting feedback, or repeated redesign requests may be treated as additional work.",
            "If a project remains inactive due to missing client feedback, approvals, or materials for an extended period, we may place it on hold and later reschedule it based on studio availability.",
          ],
          bullets: [
            "We may treat a deliverable as approved if feedback is not received within a reasonable follow-up period after submission.",
            "Reactivation of a paused project may require updated timelines, repricing, or a restart fee if substantial re-planning is needed.",
          ],
        },
        {
          title: "7. Third-party services and platforms",
          paragraphs: [
            "Many projects depend on third-party systems such as Shopify, hosting providers, payment gateways, domains, analytics tools, CRMs, plugins, APIs, or app marketplaces. We are not responsible for third-party outages, platform policy changes, app approvals, account restrictions, or pricing changes imposed by those providers.",
          ],
          bullets: [
            "You remain the account owner for your domain, hosting, Shopify store, payment gateway, and other business-critical services unless explicitly agreed otherwise.",
            "We are not liable for losses caused by third-party app conflicts, code injected by other vendors, hacked credentials, platform takedowns, or unauthorised account access outside our direct control.",
          ],
        },
        {
          title: "8. Confidentiality and data handling",
          paragraphs: [
            "We will treat non-public business information shared by you as confidential and use it only as needed to provide services. You must also protect any confidential methods, proposals, pricing, and internal material we share with you.",
            "Where we process personal data in the course of providing services, both parties will handle such data in accordance with applicable law, including relevant Indian data protection requirements.",
          ],
        },
        {
          title: "9. Warranties and limitation of liability",
          paragraphs: [
            "We provide services with reasonable skill and care, but we do not guarantee uninterrupted availability, guaranteed rankings, guaranteed sales, guaranteed campaign performance, or that any website, store, or system will be entirely free from bugs or third-party issues.",
            "To the maximum extent permitted by law, Atlas Studio will not be liable for indirect, incidental, special, consequential, or loss-of-profit damages, or for business interruption, lost data, or lost revenue arising from use of our services.",
          ],
          bullets: [
            "Our total aggregate liability relating to any engagement will not exceed the fees actually paid to Atlas Studio for the specific project giving rise to the claim.",
            "Nothing in these terms limits liability that cannot be excluded under applicable law.",
          ],
        },
        {
          title: "10. Termination",
          paragraphs: [
            "Either party may terminate a project for material breach if the breach is not cured within a reasonable notice period, or as otherwise stated in the applicable scope document. We may also terminate or suspend work if abusive conduct, unlawful instructions, non-payment, chargebacks, or misuse of our work product occurs.",
            "On termination, you must pay for work completed, time reserved, non-cancellable third-party costs, and approved milestones already performed up to the date of termination.",
          ],
        },
        {
          title: "11. Governing law and disputes",
          paragraphs: [
            "These terms are intended as an India-first agreement and will be governed by the laws of India, without regard to conflict-of-law principles. Any dispute arising from these terms or our services will be subject to the jurisdiction of courts in India having competent jurisdiction over Atlas Studio's principal place of business, unless applicable law requires otherwise.",
          ],
        },
        {
          title: "12. Contact",
          paragraphs: [
            "For any legal, billing, or service-related questions about these terms, please contact hello@atlastudio.in.",
          ],
        },
      ]}
    />
  );
}
