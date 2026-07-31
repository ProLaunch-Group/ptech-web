import type { LucideIcon } from 'lucide-react';

export interface ServiceCardData {
  id: string;
  imageUrl: string;
  title: string;
  description: string;
  outcome: string;
  features: ServiceFeature[];
  ctaText: string;
  ctaLink: string;
}

export interface ServiceCardMotionProps {
  children: React.ReactNode;
  index: number;
}

export interface FooterLink {
  label: string;
  href: string;
}

export interface FooterSection {
  title: string;
  links: FooterLink[];
}

export interface SocialLink {
  platform: string;
  href: string;
  icon: 'Ln' | 'tw' | 'ins' | 'fb';
}

export interface ContactInfo {
  email: string;
  phone: string;
  locations: string;
}

export interface ChallengeCard {
  audience: string;
  title: string;
  description: string;
}

export interface ChallengeCardProps {
  item: ChallengeCard;
  index: number;
}

export interface ServiceFeature {
  label: string;
  iconName?: string;
}

export interface HowWeHelpCardProps {
  service: ServiceCardData;
}

export interface MissionCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

//sectionTitle props
export type VariantType = 'primary' | 'secondary' | 'universal';

export interface SectionTitleProps {
  title: string;
  subtitle?: string;
  description?: string;
  variant?: VariantType;
}

//accordion card types(about/faq)
export interface AccordionItemProps {
  title: string;
  description: string;
  isOpen: boolean;
  onToggle: () => void;
  icon?: React.ReactNode;
}

//our capabilities-aboutpage
export interface ServiceCapability {
  title: string;
  description: string;
}

//testimononials
export interface Testimonial {
  id: string;
  quote: string;
  authorName: string;
  authorRole: string;
  avatarUrl: string;
  companyName: string;
  companyLogoUrl: string;
}

//brand statement
export interface Statement {
  id: string;
  tagline: string;
  headline: string;
  description: string;
}

//why prolaunch (Contact us)
export interface MetricItem {
  value: string;
  title: string;
  description: string;
}

//Services page(services)
export interface ServiceItemProps {
  id: string;
  number: string;
  title: string;
  descriptions: string[];
  gains: string[];
  tagline: string;
  ctaText: string;
  isEven?: boolean;
}

//FAQ
export type FaqCategory =
  | 'General'
  | 'Our Services'
  | 'Security & Compliance'
  | 'Working With Us'
  | 'Getting Started';

export interface FaqItem {
  id: string;
  category: FaqCategory;
  question: string;
  answer: string;
}

export interface FaqGroup {
  category: FaqCategory;
  items: FaqItem[];
}

//Team Section(About us)
export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  image: string; // URL or static import
  socials?: {
    linkedin?: string;
    github?: string;
    twitter?: string;
  };
}
