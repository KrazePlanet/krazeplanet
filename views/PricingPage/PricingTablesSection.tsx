import React from 'react';
import styled from 'styled-components';
import AutofitGrid from 'components/AutofitGrid';
import PricingCard from 'components/PricingCard';
import SectionTitle from 'components/SectionTitle';

export default function PricingTablesSection() {
  return (
    <Wrapper>
      <SectionTitle>Flexible pricing for agile teams</SectionTitle>
      <AutofitGrid>
        <PricingCard
          title="Pentest Core"
          description="Perfect for SaaS platforms, web apps, and infrastructures with a limited number of APIs or cloud assets."
          benefits={pentest_core}
        >
          {/* $0<span>/month</span> */}
        </PricingCard>
        <PricingCard
          title="Pentest Pro"
          description="Designed for businesses with a primary web app and an additional target, such as a mobile app or API."
          benefits={pentest_pro}
          isOutlined
        >
          {/* $29<span>/month</span> */}
        </PricingCard>
        <PricingCard
          title="Pentest Enterprise"
          description="Ideal for large-scale enterprises with complex and diverse infrastructure."
          benefits={pentest_enterprise}
        >
          {/* $79<span>/month</span> */}
        </PricingCard>
      </AutofitGrid>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  & > *:not(:first-child) {
    margin-top: 8rem;
  }
`;



const pentest_core = [
  "Manual VAPT following OWASP, SANS, PTES.",
  "Bi-annual vulnerability scans and assessments.",
  "Basic cloud configuration review (AWS, GCP, Azure).",
  "API-level penetration testing.",
  "One retest window with mitigation support.",
  "Detailed reports suitable for SOC 2, ISO 27001, HIPAA.",
  "One integration (Slack, Teams, Jira, etc.).",
  "Shared Slack or messaging channel with security experts.",
  "Publicly verifiable certificate of testing."
];


const pentest_pro = [
  "Everything in Starter, plus:",
  "Quarterly scanning & assessments.",
  "Advanced cloud configuration reviews.",
  "Two retest periods.",
  "Unlimited integrations with popular workflow tools.",
  "Dedicated account manager.",
  "Flexible SLAs and payment terms."
];


const pentest_enterprise = [
  "All Pro features, plus:",
  "Unlimited testing targets.",
  "Unlimited retesting and extended mitigation support.",
  "Full compliance-ready reports.",
  "Unlimited integrations.",
  "Shared communication channels with security team.",
  "Custom SLAs and bespoke billing structures."
];
