import React from 'react';
import styled from 'styled-components';
import AutofitGrid from 'components/AutofitGrid';
import BasicCard from 'components/BasicCard';
import Container from 'components/Container';
import { media } from 'utils/media';

const FEATURES = [
  {
    imageUrl: '/grid-icons/asset-1.svg',
    title: 'Web Application Pentesting',
    description:
      'Identify and remediate vulnerabilities in your web applications.',
  },
  {
    imageUrl: '/grid-icons/asset-2.svg',
    title: 'Mobile Application Pentesting',
    description:
      'Secure your iOS and Android applications against mobile-specific threats.',
  },
  {
    imageUrl: '/grid-icons/asset-3.svg',
    title: 'Cloud & Kubernetes Pentesting',
    description:
      'Assess the security of your cloud environments (AWS, Azure, GCP) and Kubernetes clusters.',
  },
  {
    imageUrl: '/grid-icons/asset-4.svg',
    title: 'API Penetration Testing',
    description:
      'Secure your APIs against modern threats and vulnerabilities.',
  },
  {
    imageUrl: '/grid-icons/asset-5.svg',
    title: 'Network Penetration Testing',
    description:
      'Identify and exploit vulnerabilities in your internal and external networks.',
  },
  {
    imageUrl: '/grid-icons/asset-6.svg',
    title: 'Vulnerability Assessment',
    description:
      'Detects outdated software, misconfigurations, and weak points.',
  },
  {
    imageUrl: '/grid-icons/asset-7.svg',
    title: 'Security Audits & Compliance',
    description:
      'Review policies, configurations, and procedures.',
  },
  {
    imageUrl: '/grid-icons/asset-8.svg',
    title: 'Security Awareness Training',
    description:
      'Gives training sessions, phishing simulations, and workshops for client employees.',
  },
  {
    imageUrl: '/grid-icons/asset-9.svg',
    title: 'Movie Piracy',
    description:
      'Movie piracy threatens the entertainment industry, causing revenue loss and copyright risks.',
  },
];

export default function Features() {
  return (
    <Container>
      <CustomAutofitGrid>
        {FEATURES.map((singleFeature, idx) => (
          <BasicCard key={singleFeature.title} {...singleFeature} />
        ))}
      </CustomAutofitGrid>
    </Container>
  );
}

const CustomAutofitGrid = styled(AutofitGrid)`
  --autofit-grid-item-size: 40rem;

  ${media('<=tablet')} {
    --autofit-grid-item-size: 30rem;
  }

  ${media('<=phone')} {
    --autofit-grid-item-size: 100%;
  }
`;
