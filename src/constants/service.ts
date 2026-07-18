import { ServiceCardData } from '@/types/service.types';

import { FooterLink, SocialLink, ContactInfo } from '@/types/service.types';

export const HOW_WE_HELP_SERVICES: ServiceCardData[] = [
  {
    id: 'infra-modernization',
    imageUrl: '/Home/HowWeHelp-images/infrastructure.png',
    title: 'Infrastructure Modernization',
    description:
      'Migrate, manage and optimise cloud and on-prem infrastructure for security and savings.',
    ctaText: 'Learn more',
    ctaLink: '/about#infra',
  },
  {
    id: 'op-velocity',
    imageUrl: '/Home/HowWeHelp-images/operational.png',
    title: 'Operational Velocity',
    description:
      'Implement DevOps practices and automation that accelerate delivery and reduce downtime.',
    ctaText: 'Learn more',
    ctaLink: '/about#devops',
  },
  {
    id: 'product-innovation',
    imageUrl: '/Home/HowWeHelp-images/innovation.png',
    title: 'Product Innovation',
    description:
      'Build custom software and digital products that drive growth and create lasting value.',
    ctaText: 'Learn more',
    ctaLink: '/about#innovation',
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
