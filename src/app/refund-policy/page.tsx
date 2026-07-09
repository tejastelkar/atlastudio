import type { Metadata } from "next";

import LegalPage from "@/app/legal-page";

export const metadata: Metadata = {
  title: "Refund Policy | Atlas Studio",
  description:
    "Read the Refund Policy for Atlas Studio, including deposits, milestone payments, cancellations, chargebacks, and India-first service terms.",
};

const effectiveDate = "July 8, 2026";

export default function RefundPolicyPage() {
  return (
    <LegalPage
      eyebrow="Refund Policy"
      title="Refund Policy"
      summary="How refunds, cancellations, milestone payments, deposits, and billing disputes are handled for Atlas Studio service engagements."
      effectiveDate={effectiveDate}
      sections={[
        {
          title: "1. General principle",
          paragraphs: [
            "Most Atlas Studio engagements involve reserved time, custom creative work, consulting, implementation, or technical execution tailored to a specific client. Once work has started or time has been blocked for your project, amounts already earned are generally non-refundable.",
          ],
        },
        {
          title: "2. Advance payments and deposits",
          paragraphs: [
            "Advance payments, deposits, onboarding fees, discovery fees, sprint booking fees, and project reservation amounts are normally non-refundable once your project has been scheduled, resources have been assigned, or work has begun.",
          ],
          bullets: [
            "If you cancel before any work starts and before scheduling or resource allocation has meaningfully occurred, we may review a partial refund request on a case-by-case basis.",
            "If third-party costs have already been incurred for your project, those costs will not be refundable.",
          ],
        },
        {
          title: "3. Milestone payments",
          paragraphs: [
            "Milestone payments are tied to work stages, deliverables, or reserved effort. Once a milestone has been substantially performed, delivered for review, or otherwise earned under the project plan, that milestone payment is non-refundable.",
          ],
          bullets: [
            "Feedback delays or internal client-side pauses do not automatically make an earned milestone refundable.",
            "Partial work completed before cancellation may still be billed on a proportional basis where the payment schedule does not exactly match the effort already performed.",
          ],
        },
        {
          title: "4. Retainers, support blocks, and monthly engagements",
          paragraphs: [
            "For retainers, support plans, or monthly design and development engagements, fees cover access to allocated studio time and capacity during the agreed period. Such fees are generally non-refundable once the service month or support period has started.",
          ],
          bullets: [
            "Unused time does not automatically roll over unless your agreement expressly allows it.",
            "If a retainer is cancelled, services already delivered and time already reserved up to the cancellation date remain payable.",
          ],
        },
        {
          title: "5. Client cancellations",
          paragraphs: [
            "If you decide to stop a project after kickoff, you remain responsible for payment for all work completed, time reserved, approved milestones, and third-party costs committed up to the date of cancellation.",
            "If a project is terminated midway, we may provide work-in-progress materials only after outstanding dues are cleared, and such materials may be provided without any obligation to continue support, polish, or deployment.",
          ],
        },
        {
          title: "6. Situations where we may consider a refund",
          paragraphs: [
            "Although refunds are generally limited for custom service work, Atlas Studio may consider a partial refund in exceptional circumstances where fairness clearly requires it.",
          ],
          bullets: [
            "You were charged twice due to a payment error.",
            "We accepted payment for a service we are unable to start for reasons entirely within our control and no equivalent alternative is agreed.",
            "A refund is otherwise required under applicable law.",
          ],
        },
        {
          title: "7. Non-refundable items",
          paragraphs: [
            "The following are ordinarily non-refundable once incurred, ordered, booked, or delivered:",
          ],
          bullets: [
            "Discovery sessions, strategy calls, audits, consulting time, research, or planning work.",
            "Design concepts, wireframes, UI screens, Figma files, code, theme changes, custom development, and technical implementation already performed.",
            "Third-party subscriptions, apps, themes, plugins, fonts, stock assets, domains, hosting, payment gateway costs, or API usage costs.",
            "Emergency fixes, priority rush work, and reserved sprint capacity.",
          ],
        },
        {
          title: "8. Chargebacks and payment disputes",
          paragraphs: [
            "Before initiating a chargeback or formal payment dispute, please contact us at hello@atlastudio.in so we can try to resolve the issue directly and quickly. Initiating a chargeback without first attempting direct resolution may lead to immediate suspension of ongoing work, access, support, and delivery.",
            "Where a chargeback is raised for legitimately earned service fees, Atlas Studio reserves the right to provide project records, communications, approvals, timesheets, invoices, and delivery evidence to the relevant payment processor or financial institution.",
          ],
        },
        {
          title: "9. Refund process",
          paragraphs: [
            "If a refund is approved, it will usually be processed through the original payment method, subject to payment gateway timelines, banking timelines, and applicable deductions for irreversible processing fees or non-recoverable costs where legally permitted.",
          ],
          bullets: [
            "Refund review may require us to verify project status, payment records, communication history, and work already completed.",
            "Approval of any exception-based refund remains at Atlas Studio's discretion unless a refund is required by law.",
          ],
        },
        {
          title: "10. Governing standard",
          paragraphs: [
            "This Refund Policy is intended to work alongside our Terms of Service and any signed proposal, invoice, or statement of work. If a specific project document contains a different refund or cancellation term agreed in writing, that project term will apply to that engagement.",
          ],
        },
        {
          title: "11. Contact",
          paragraphs: [
            "For refund questions or billing concerns, please contact hello@atlastudio.in before raising a dispute. We will review the matter in good faith and respond within a reasonable time.",
          ],
        },
      ]}
    />
  );
}
