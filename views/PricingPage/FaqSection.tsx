import styled from 'styled-components';
import Accordion from 'components/Accordion';
import SectionTitle from 'components/SectionTitle';

export default function FaqSection() {
  return (
    <Wrapper>
      <SectionTitle>Frequently asked question</SectionTitle>
      <Accordion title="What is penetration testing?">
  A penetration test, or pentest, is a simulated cyber attack against your computer system to check for exploitable vulnerabilities.
  It's a proactive security measure to find and fix security weaknesses before attackers do.
</Accordion>

<Accordion title="How long does a penetration test take?">
  The duration of a pentest depends on the scope and complexity of the target system. A typical test can range from a few days to several weeks.
</Accordion>

<Accordion title="Will a penetration test disrupt my business?">
  We take great care to minimize disruption to your business operations. Our tests are conducted in a controlled manner, and we work with you
  to schedule testing during off-peak hours.
</Accordion>

<Accordion title="How much does a penetration test cost?">
  You can get an instant estimate using our Custom Pricing Calculator above. The final cost depends on the scope and complexity of the
  engagement, including factors like number of IP addresses, web applications, and cloud infrastructure to be tested.
</Accordion>

<Accordion title="What happens after the penetration test?">
  After the test, you'll receive a detailed report outlining our findings, including the vulnerabilities we discovered, the risk they pose,
  and recommendations for remediation. We'll also provide a debriefing call to discuss the results and answer any questions.
</Accordion>

<Accordion title="Can a pentest help with Cyber Essentials / ISO 27001 / SOC 2 compliance?">
  Yes, a penetration test can be a critical component in achieving compliance with standards like Cyber Essentials, ISO 27001, and SOC 2.
  These frameworks often require regular security assessments, and a pentest can help identify vulnerabilities that need to be addressed
  to meet compliance requirements.
</Accordion>

<Accordion title="Are the tests manual, automated, or both?">
  Our penetration tests are a combination of both manual and automated techniques. Automated tools are used to quickly identify known
  vulnerabilities, while manual testing is conducted by our security experts to uncover complex vulnerabilities and assess the real-world
  risk of exploitation.
</Accordion>

<Accordion title="How quickly can you start a penetration test?">
  We can typically begin a penetration test within a few days of finalizing the scope and requirements. Our team works with you to
  schedule the test at a convenient time, ensuring minimal disruption to your business operations.
</Accordion>

    </Wrapper>
  );
}

const Wrapper = styled.div`
  margin-top: 15rem;
  & > *:not(:first-child) {
    margin-top: 3rem;
  }
`;
