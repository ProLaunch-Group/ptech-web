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
  icon: 'in' | 'tw';
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
export type VariantType = 'primary' | 'secondary';

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
