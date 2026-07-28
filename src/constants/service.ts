import {
  MissionCardProps,
  ServiceCardData,
  ServiceCapability,
  Testimonial,
  Statement,
} from '@/types/service.types';

import { FooterLink, SocialLink, ContactInfo } from '@/types/service.types';
import {
  Compass,
  HandshakeIcon,
  ShieldCheck,
  Lightbulb,
  Target,
  Users,
  Heart,
  Gem,
} from 'lucide-react';

export const HOW_WE_HELP_SERVICES: ServiceCardData[] = [
  {
    id: 'cloud-migration-infra',
    imageUrl: '/Home/HowWeHelp-images/operational.png',
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
    imageUrl: '/Home/HowWeHelp-images/infrastructure.png',
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
    imageUrl: '',
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
  'FAQ',
];

export const FOOTER_CERTIFICATIONS: string[] = [
  'Would be updated',
  'would be updated',
];

// Mission cards for WHo We Are section for the About page
export const cards: MissionCardProps[] = [
  {
    icon: Compass,
    title: 'Our Mission',
    description:
      'To deliver enterprise-grade technology solutions that transform how businesses operate, scale, and compete in the digital economy- positioning technology as a growth driver, not a cost center',
  },
  {
    icon: Target,
    title: 'Our Position (A Partner, Not a Vendor)',
    description:
      'We do not believe in transactional relationships. we serrve as an extension of your team, embedding ourselves into your operations to solve complex challenges.',
  },
  {
    icon: HandshakeIcon,
    title: 'Our Promise',
    description:
      'Every solution is built with quality, transparency, innovation and a commitment to long-term success.',
  },
];

export const principles = [
  {
    icon: ShieldCheck,
    title: 'Precision',
    description:
      'Every solution we engineered to exact requirements. We do not approximate, we execute',
  },
  {
    icon: Lightbulb,
    title: 'Innovation',
    description:
      'We stay ahead of the curve so you never have to. We build for where your business is going.',
  },
  {
    icon: Target,
    title: 'Partnership',
    description:
      'We embed into your operations as a long-term partner. Success is built through real, ongoing collaboration.',
  },
  {
    icon: Users,
    title: 'Reliability',
    description:
      'Our clients sleep well because their systems do not go down on our watch. We build for uptime.',
  },
  {
    icon: Heart,
    title: 'Results',
    description:
      'Every engagement is measured by what changes: your efficiency, your reliability, and your growth.',
  },
  {
    icon: Gem,
    title: 'Accountability',
    description:
      'We own the final outcome. If it does not work for your business. It does not work for us.',
  },
];

export const team = [
  {
    name: 'Sarah Reed',
    role: 'CEO',
    image: '/About/TeamSection-image/leader-1.png',
  },
  {
    name: 'David Kim',
    role: 'Lead Engineer',
    image: '/About/TeamSection-image/leader-2.png',
  },
  {
    name: 'Alex Morgan',
    role: 'Software Engineer',
    image: '/About/TeamSection-image/leader-3.png',
  },
  {
    name: 'Olivia Lee',
    role: 'Product Manager',
    image: '/About/TeamSection-image/leader-4.png',
  },
];

export const whyUs: ServiceCapability[] = [
  {
    title: 'Cloud Migration & Management',
    description:
      'Moving you from costly on-premise infrastructure to scalable, secure cloud environments (AWS).',
  },
  {
    title: 'DevOps Implementation',
    description:
      'Building automated CI/CD pipelines so your team ships faster, breaks less, and releases with confidence.',
  },
  {
    title: 'Custom Software Development',
    description:
      'Engineering bespoke applications, internal platforms, and secure APIs tailored to your exact business processes.',
  },
  {
    title: 'IT Infrastructure Solutions',
    description:
      'Designing and managing the full technology backbone of your organization—from networking and security to continuous monitoring.',
  },
];

export const testimonials: Testimonial[] = [
  {
    id: '1',
    quote:
      "I've used quite a number of enterprise platforms, but ProLaunch is amazing! They're truly interested in your infrastructure stability and constantly tuning your pipelines. Highly recommended!",
    authorName: 'Steve Harris',
    authorRole: 'Business Accelerator & Coach',
    avatarUrl:
      'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=250',
    companyName: 'Selar',
    companyLogoUrl:
      'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=120',
  },
  {
    id: '2',
    quote:
      'Migrating our AWS infrastructure with zero downtime seemed impossible until we engaged ProLaunch. Their engineering team owned outcomes, not just deliverables.',
    authorName: 'Amina Bello',
    authorRole: 'Head of Product, Fintech Solutions',
    avatarUrl:
      'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=250',
    companyName: 'PayStack',
    companyLogoUrl:
      'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=120',
  },
  {
    id: '3',
    quote:
      'DevOps automation eliminated hours of late-night release bugs. We can ship features twice as fast now without breaking production.',
    authorName: 'David Chen',
    authorRole: 'CTO, Global Logistics',
    avatarUrl:
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=250',
    companyName: 'LogiTech',
    companyLogoUrl:
      'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=120',
  },
];

export const brandStatements: Statement[] = [
  {
    id: '1',
    tagline: 'OUR CORE DRIVER',
    headline: 'Engineering Scalable Systems with Zero Compromise',
    description:
      'We believe infrastructure should empower growth, not throttle it. Our modern cloud architectures guarantee resilience, security, and peak performance.',
  },
  {
    id: '2',
    tagline: 'PRECISION & TRUST',
    headline: 'Transforming Tech Stack Complexity into Competitive Advantage',
    description:
      'We own outcomes—not just deliverables. We align legacy systems with cutting-edge cloud-native pipelines so your operations remain uninterrupted.',
  },
  {
    id: '3',
    tagline: 'FORWARD MOMENTUM',
    headline: 'Automating the Path from Idea to Enterprise Scale',
    description:
      'Eliminate deployment bottlenecks and manual server management. We build automated continuous integration workflows built for high-velocity teams.',
  },
];
