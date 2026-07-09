import type { Metadata } from "next";

import LegalPage from "@/app/legal-page";

export const metadata: Metadata = {
  title: "Privacy Policy | Atlas Studio",
  description:
    "Read the Privacy Policy for Atlas Studio, including how we collect, use, store, and protect personal data under an India-first approach.",
};

const effectiveDate = "July 8, 2026";

export default function PrivacyPolicyPage() {
  return (
    <LegalPage
      eyebrow="Privacy Policy"
      title="Privacy Policy"
      summary="How Atlas Studio collects, uses, stores, and protects personal information across our website, enquiries, client communication, and delivery workflows."
      effectiveDate={effectiveDate}
      sections={[
        {
          title: "1. Scope of this policy",
          paragraphs: [
            "This Privacy Policy applies to personal data collected through our website, contact forms, booking flows, email conversations, proposal discussions, project onboarding, and service delivery workflows. It covers data relating to clients, prospects, website visitors, and business contacts.",
          ],
        },
        {
          title: "2. What data we collect",
          paragraphs: [
            "Depending on how you interact with us, we may collect identification, communication, technical, and project-related information.",
          ],
          bullets: [
            "Name, email address, phone number, company name, and job title.",
            "Project details, store details, business goals, budgets, timelines, and service requirements you submit to us.",
            "Billing information, transaction references, and invoice-related records.",
            "Technical data such as IP address, browser type, device information, referral source, and website usage information collected through analytics or server logs.",
            "Content, brand assets, credentials, and operational data you share with us to complete a project.",
          ],
        },
        {
          title: "3. How we collect data",
          paragraphs: [
            "We collect data directly from you when you fill out forms, email us, schedule calls, approve proposals, make payments, or share project assets. We may also collect limited technical information automatically through analytics, cookies, log files, and similar technologies used on our website.",
          ],
        },
        {
          title: "4. Why we use your data",
          paragraphs: [
            "We use personal data only for lawful business purposes connected to operating Atlas Studio, responding to enquiries, and delivering our services.",
          ],
          bullets: [
            "To respond to enquiries, qualify leads, and schedule discovery calls.",
            "To prepare proposals, scopes, invoices, and project communication.",
            "To design, build, support, and maintain websites, Shopify stores, and related deliverables.",
            "To improve our website, user experience, conversion flows, and service quality.",
            "To prevent fraud, protect our systems, maintain records, and comply with legal or tax obligations.",
            "To send service-related updates, follow-ups, or relevant business communication. We do not send spam, and you may opt out of non-essential marketing communication.",
          ],
        },
        {
          title: "5. Legal basis and India-first data principles",
          paragraphs: [
            "Where applicable, Atlas Studio processes personal data on the basis of your consent, to take steps at your request before entering into a contract, to perform an agreement with you, to comply with legal obligations, or for legitimate and reasonable business uses permitted by applicable law.",
            "We aim to follow core India-first privacy principles, including collecting only what is reasonably necessary, using data for clearly connected purposes, keeping it secure, and honouring lawful requests relating to access, correction, or deletion.",
          ],
        },
        {
          title: "6. Cookies, analytics, and tracking",
          paragraphs: [
            "Our website may use cookies or similar technologies for basic functionality, analytics, security, and performance measurement. These tools help us understand how visitors use atlastudio.in and improve the site.",
          ],
          bullets: [
            "Some cookies may be essential for the site to function properly.",
            "Analytics or tracking tools may collect aggregated behaviour data such as page visits, device type, and referring source.",
            "You can control cookies through your browser settings, although disabling certain cookies may affect site functionality.",
          ],
        },
        {
          title: "7. Sharing of data",
          paragraphs: [
            "We do not sell your personal data. We may share limited data only where necessary to run our business or deliver services.",
          ],
          bullets: [
            "With payment processors, invoicing tools, hosting providers, analytics tools, email services, scheduling tools, CRM systems, and other vendors that support our operations.",
            "With freelancers, contractors, or specialist collaborators working under confidentiality obligations where needed to deliver your project.",
            "With legal, tax, compliance, or government authorities where disclosure is required by law or necessary to protect rights, prevent fraud, or respond to lawful requests.",
          ],
        },
        {
          title: "8. Data retention",
          paragraphs: [
            "We retain personal data only for as long as reasonably required for the purpose for which it was collected, including lead management, project delivery, legal compliance, accounting, dispute resolution, backup integrity, and internal record-keeping.",
            "Where data is no longer needed, we will delete it, anonymise it, or securely archive it in accordance with reasonable business and legal requirements.",
          ],
        },
        {
          title: "9. Data security",
          paragraphs: [
            "We use reasonable administrative, technical, and organisational safeguards to protect data from unauthorised access, misuse, disclosure, alteration, or loss. However, no website, cloud platform, email system, or internet transmission can be guaranteed as completely secure.",
          ],
          bullets: [
            "Access to project information is limited to people who need it for delivery or operations.",
            "We aim to use reputable tools and service providers with appropriate security controls.",
            "You are responsible for keeping your own passwords, admin credentials, and store access secure.",
          ],
        },
        {
          title: "10. Your rights",
          paragraphs: [
            "Subject to applicable law, you may request access to the personal data we hold about you, ask for correction of inaccurate information, request deletion of data that is no longer necessary, or withdraw consent where processing is based on consent.",
            "We may need to verify your identity before acting on a request, and we may retain certain records where required for legal, tax, security, or dispute-resolution purposes.",
          ],
        },
        {
          title: "11. Cross-border processing",
          paragraphs: [
            "Because Atlas Studio may use international software tools, cloud infrastructure, and service providers, your data may be processed or stored outside India. Where we use such systems, we take reasonable steps to work only with providers suited for business use and to limit unnecessary exposure of personal data.",
          ],
        },
        {
          title: "12. Children's privacy",
          paragraphs: [
            "Our website and services are intended for businesses, founders, teams, and adults acting in a professional capacity. We do not knowingly collect personal data from children through our service offering.",
          ],
        },
        {
          title: "13. Updates to this policy",
          paragraphs: [
            "We may update this Privacy Policy from time to time to reflect operational, legal, or service changes. The latest version will be posted on this page with the updated effective date.",
          ],
        },
        {
          title: "14. Contact and grievance requests",
          paragraphs: [
            "If you have questions, correction requests, deletion requests, or privacy concerns, please contact us at hello@atlastudio.in. We will review and respond within a reasonable time in line with the nature of the request and applicable law.",
          ],
        },
      ]}
    />
  );
}
