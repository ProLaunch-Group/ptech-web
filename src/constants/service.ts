import {
  MissionCardProps,
  ServiceCardData,
  ServiceCapability,
  Testimonial,
  Statement,
  MetricItem,
  ServiceItemProps,
  FaqItem,
  TeamMember,
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
  {
    platform: 'LinkedIn',
    href: 'https://www.linkedin.com/company/prolaunch-tech/',
    icon: 'Ln',
  },
  { platform: 'X (Twitter)', href: 'https://x.com/ProlaunchTech', icon: 'tw' },
  {
    platform: 'Instagram',
    href: 'https://instagram.com/ProlaunchTech',
    icon: 'ins',
  },
  {
    platform: 'Facebook',
    href: 'https://facebook.com/ProlaunchTech',
    icon: 'fb',
  },
];

export const FOOTER_CONTACT: ContactInfo = {
  email: 'tech@prolaunchgroup.org',
  phone: '+234 815 456 3245',
  locations: 'Abuja, Nigeria',
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
  { label: 'Faq', href: '/faq' },
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
    title: 'Our Position',
    description:
      'We do not believe in transactional relationships. We serve as an extension of your team, embedding ourselves into your operations to solve complex challenges.',
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
    id: '2',
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

export const metrics: MetricItem[] = [
  {
    value: '4',
    title: 'Core Service Lines',
    description:
      'Cloud Migrations · DevOps · Custom Software · IT Infrastructure',
  },
  {
    value: '24hr',
    title: 'Response Guarantee',
    description: 'Every message is reviewed within one business day',
  },
  {
    value: 'Pan-Africa',
    title: '& Global Reach',
    description: 'Serving businesses across Nigeria, Africa, and globally',
  },
];

export const servicesData: ServiceItemProps[] = [
  {
    id: 'cloud-migration',
    number: 'SERVICE 01',
    title: 'Cloud Migration & Management',
    descriptions: [
      'Stop overpaying for rigid, unreliable infrastructure. As a core offering, we transition your business to AWS cloud environments that turn hosting from a cost center into a scalability engine, ensuring your systems grow as fast as your revenue does.',
      'Our expert management removes the burden of maintenance, delivering superior uptime and predictable cost efficiency so your team can focus on innovation rather than firefighting.',
    ],
    gains: [
      'Lower infrastructure costs',
      'Improved system reliability and uptime',
      'Enhanced security and compliance',
      'Greater scalability and flexibility',
      'Continuous monitoring and expert support',
    ],
    tagline: 'Lower costs. Better uptime. Zero IT firefighting.',
    ctaText: 'Talk to Us About Cloud Migration',
  },
  {
    id: 'devops-implementation',
    number: 'SERVICE 02',
    title: 'DevOps Implementation',
    descriptions: [
      'Slow release cycles and deployment failures drain resources and damage client trust. We implement high-velocity DevOps pipelines that automate the path to production, significantly reducing time-to-market for your new features.',
      'By streamlining your delivery process, we empower your team to ship faster and break less, ensuring every deployment is a predictable, low-risk event.',
    ],
    gains: [
      'Faster software releases',
      'Reduced deployment failures',
      'Improved team collaboration',
      'Increased operational efficiency',
      'More reliable and predictable systems',
    ],
    tagline: 'Ship more. Break less. Release with confidence.',
    ctaText: 'Talk to Us About DevOps',
  },
  {
    id: 'custom-software',
    number: 'SERVICE 03',
    title: 'Custom Software Development',
    descriptions: [
      'Off-the-shelf software forces you to compromise your business logic. We build bespoke digital solutions designed to optimize your specific workflows, resulting in immediate gains in operational speed and user productivity.',
      'Whether automating complex internal tasks or launching a client-facing platform, we deliver a scalable architecture that provides long-term flexibility and a distinct market edge.',
    ],
    gains: [
      'Solutions designed for your exact requirements',
      'Improved productivity and workflow efficiency',
      'Better user experiences for your team and clients',
      'Scalable software architecture built for growth',
      'Long-term business flexibility',
    ],
    tagline: 'Software built for your process. Not the other way around.',
    ctaText: 'Talk to Us About Custom Software',
  },
  {
    id: 'it-infrastructure',
    number: 'SERVICE 04',
    title: 'IT Infrastructure Solutions',
    descriptions: [
      'As a foundational core offering, we design and manage the resilient technology backbone that your entire operation depends on. We move you from reactive repairs to proactive stability, ensuring business continuity across your entire digital estate.',
      'Our comprehensive networking and security management eliminates downtime risks and hardens your security posture, providing the stability required to scale without disruption.',
    ],
    gains: [
      'Improved performance and reliability',
      'Enhanced security posture',
      'Reduced downtime and disruption',
      'Greater operational visibility',
      'Infrastructure designed and scaled for growth',
    ],
    tagline: 'Resilient infrastructure. Secure by design.',
    ctaText: 'Talk to Us About Infrastructure',
  },
];

//FAQ

export const faqData: FaqItem[] = [
  // ---------------------------------------------------------------------------
  // 1. General
  // ---------------------------------------------------------------------------
  {
    id: 'gen-1',
    category: 'General',
    question: 'What does ProLaunch Technologies do?',
    answer:
      'ProLaunch Technologies helps businesses modernize their technology — migrating to secure cloud infrastructure, automating deployments, and building custom software — so your systems can scale without downtime or spiraling costs.',
  },
  {
    id: 'gen-2',
    category: 'General',
    question: 'Who is ProLaunch Technologies for?',
    answer:
      'We work with growing SMEs, modernizing enterprises, and fast-moving startups across Nigeria and Africa. That includes CTOs facing rising cloud costs, founders who need a reliable development team, regulated businesses that need strict security and compliance, and companies still running on legacy, on-premise infrastructure.',
  },

  // ---------------------------------------------------------------------------
  // 2. Our Services
  // ---------------------------------------------------------------------------
  {
    id: 'srv-1',
    category: 'Our Services',
    question:
      'What is cloud migration and infrastructure management, and do I need it?',
    answer:
      'If your business runs on expensive or unreliable on-premise servers, cloud migration moves your systems onto secure, scalable AWS infrastructure. We handle the full migration and manage it going forward, so you get better uptime, lower costs, and no more IT firefighting.',
  },
  {
    id: 'srv-2',
    category: 'Our Services',
    question: 'What is DevOps, and how does it help my business?',
    answer:
      'DevOps automates your deployment process. Instead of slow, risky software releases, we build pipelines that let your team ship updates faster and with fewer errors — so releases become routine instead of a source of anxiety.',
  },
  {
    id: 'srv-3',
    category: 'Our Services',
    question: 'Can you build custom software for our specific workflow?',
    answer:
      'Yes. Rather than forcing your business to adapt to off-the-shelf tools, we design and build software, apps, and internal platforms tailored exactly to how your business operates.',
  },
  {
    id: 'srv-4',
    category: 'Our Services',
    question: "What's included in your IT infrastructure solutions?",
    answer:
      'We design, deploy, and manage your full technology backbone — networking, security, monitoring, and system reliability — so your infrastructure stays resilient and is secure by design.',
  },

  // ---------------------------------------------------------------------------
  // 3. Security & Compliance
  // ---------------------------------------------------------------------------
  {
    id: 'sec-1',
    category: 'Security & Compliance',
    question:
      'Do you support regulated industries with compliance needs like SOC2 or HIPAA?',
    answer:
      "Yes. We build infrastructure with compliance requirements like SOC2 and HIPAA in mind, so regulated businesses don't have to trade security for speed.",
  },

  // ---------------------------------------------------------------------------
  // 4. Working With Us
  // ---------------------------------------------------------------------------
  {
    id: 'wwu-1',
    category: 'Working With Us',
    question: 'How is ProLaunch different from other tech vendors?',
    answer:
      'We position ourselves as a long-term engineering partner, not a one-off vendor. Most providers hand over a deliverable and disappear — we stay accountable after go-live and measure our success by your reduced costs, improved stability, and business growth.',
  },
  {
    id: 'wwu-2',
    category: 'Working With Us',
    question: 'What results have other clients seen?',
    answer:
      'Results vary by project, but our focus in every engagement is the same: lower costs, stronger uptime, and infrastructure that scales with you.',
  },

  // ---------------------------------------------------------------------------
  // 5. Getting Started
  // ---------------------------------------------------------------------------
  {
    id: 'gst-1',
    category: 'Getting Started',
    question: 'How do I get started?',
    answer:
      'Book a Free Architecture Audit (or Discovery Call). This is where we review your current setup, understand your challenges, and map out how we can help.',
  },
  {
    id: 'gst-2',
    category: 'Getting Started',
    question: 'How long does a project typically take?',
    answer:
      'It depends on the scope — a cloud migration looks different from a custom software build. Your free architecture audit or discovery call is where we scope out a timeline specific to your situation.',
  },
];

//Team Section(About us)
export const TEAM_MEMBERS: TeamMember[] = [
  {
    id: 'mary-queen-uchechukwu',
    name: 'Mary-Queen Uchechukwu',
    role: 'Founder & CEO',
    bio: 'As the Founder of ProLaunch Group and a hands-on Cloud & DevOps Engineer, Mary-Queen bridges the gap between complex infrastructure challenges and clear business strategy. She leads our vision with a commitment to technical precision and a results-led approach, ensuring that technology serves as an accelerator—not a bottleneck—for your business.',
    image: '/about/TeamSection-image/ceo.jpeg',
  },
];

/**
 * 
 * 
 * 
 *  {
    id: 'emmanuel-adenuel',
    name: 'Emmanuel Adenuel',
    role: 'CTO',
    bio: 'As our CTO and a veteran Fullstack Software Developer, Emmanuel leads our technical architecture and software delivery. He ensures every line of code and every infrastructure decision is engineered for performance, reliability, and security, turning ambitious business goals into high-functioning digital reality.',
    image: '/images/team/emmanuel.jpg',
  },
 */
