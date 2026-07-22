import { ServiceCardData } from '@/types/service.types';

import { FooterLink, SocialLink, ContactInfo } from '@/types/service.types';

export const HOW_WE_HELP_SERVICES: ServiceCardData[] = [
  {
    id: 'cloud-migration-infra',
    imageUrl: '/Home/HowWeHelp-images/infrastructure.png',
    title: 'Cloud Migration & Infrastructure Modernization',
    description:
      'We handle the full migration to AWS and manage the infrastructure ongoing to improve system performance and eliminate operational complexity.',
    outcome: 'Lower operational costs and 99.9% uptime.',
    features: [
      { label: 'Cloud Migration', iconName: 'cloud' },
      { label: 'Cloud Management', iconName: 'server' },
      { label: 'IT Infrastructure Solutions', iconName: 'network' },
    ],
    ctaText: 'Learn more',
    ctaLink: '/about#infra',
  },
  {
    id: 'operational-velocity',
    imageUrl: '/Home/HowWeHelp-images/operational.png',
    title: 'Operational Velocity (DevOps)',
    description:
      'Stop the "release cycle anxiety." We automate your deployment pipelines so your team ships features daily, not monthly.',
    outcome: 'Faster time-to-market with zero deployment risk.',
    features: [
      { label: 'DevOps Implementation', iconName: 'git-branch' },
      { label: 'CI/CD Pipelines', iconName: 'git-pull-request' },
      { label: 'Infrastructure Automation', iconName: 'cpu' },
    ],
    ctaText: 'Learn more',
    ctaLink: '/about#devops',
  },
  {
    id: 'product-innovation',
    imageUrl: '/Home/HowWeHelp-images/innovation.png',
    title: 'Product Innovation (Custom Software)',
    description:
      'Stop forcing your process to fit pre-built software. We build bespoke platforms tailored to your unique operational workflow.',
    outcome: 'Technology that drives your efficiency, not hinders it.',
    features: [
      { label: 'Custom Software Development', iconName: 'code' },
      { label: 'Scalable Web Applications', iconName: 'layout' },
      { label: 'Enterprise Solutions', iconName: 'building' },
    ],
    ctaText: 'Learn more',
    ctaLink: '/about#innovation',
  },
  {
    id: 'it-infrastructure-solutions',
    imageUrl: '/Home/HowWeHelp-images/it-solutions.png',
    title: 'IT Infrastructure Solutions',
    description:
      'We design, deploy, and manage the full technology backbone of your organization, from networking to security to monitoring.',
    outcome: 'Resilient infrastructure. Secure by design.',
    features: [
      { label: 'Network Architecture & Design', iconName: 'network' },
      { label: 'Security & Compliance Guardrails', iconName: 'shield' },
      { label: '24/7 Monitoring & Incident Response', iconName: 'activity' },
    ],
    ctaText: 'Learn more',
    ctaLink: '/about#it-solutions',
  },
];
export const FOOTER_TAGLINE =
  'Your trusted technology partner for cloud migration, DevOps, custom software, and IT infrastructure that scales with your ambitions.';

export const FOOTER_SOCIALS: SocialLink[] = [
  { platform: 'LinkedIn', href: 'https://linkedin.com', icon: 'in' },
  { platform: 'X (Twitter)', href: 'https://x.com', icon: 'tw' },
];

export const FOOTER_CONTACT: ContactInfo = {
  email: 'sample@prolaunchtech.com',
  phone: '+234 813 225 0986',
  locations: 'Would be updated',
};

// Plain text array for services
export const FOOTER_SERVICES: string[] = [
  'Cloud Migration & Management',
  'DevOps Implementation',
  'Custom Software Development',
  'IT Infrastructure Solutions',
];

// Explicit link array for company routes
export const FOOTER_COMPANY_LINKS: FooterLink[] = [
  { label: 'About Us', href: '/about' },
  { label: 'Our Services', href: '/services' },
  { label: 'Contact Us', href: '/contact' },
];

// Plain text array for resources
export const FOOTER_RESOURCES: string[] = [
  'Privacy Policy',
  'Terms of Service',
];

export const FOOTER_CERTIFICATIONS: string[] = [
  'Would be updated',
  'would be updated',
];
