import { ServiceCardData } from '@/types/service.types';

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
