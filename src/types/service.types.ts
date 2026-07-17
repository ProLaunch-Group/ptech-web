export interface ServiceCardData {
  id: string;
  imageUrl: string;
  title: string;
  description: string;
  ctaText: string;
  ctaLink: string;
}

export interface ServiceCardMotionProps {
  children: React.ReactNode;
  index: number;
}
