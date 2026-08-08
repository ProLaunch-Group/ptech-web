import { ChallengeCard } from '../types/service.types';

export const metrics = [
  { label: 'Cloud Nodes', value: '1,247', change: '+12%' },
  { label: 'Deployments', value: '384', change: '+28%' },
  { label: 'Cost Saved', value: '$184K', change: '+41%' },
];

export const services = [
  { name: 'Cloud Migration', status: 'Active', progress: 78 },
  { name: 'DevOps Pipeline', status: 'Running', progress: 95 },
  { name: 'Security Audit', status: 'Complete', progress: 100 },
];

export const logos = [
  {
    name: 'AWS',
    src: '/Home/trustedBy-images/awsimage.png',
    width: 120,
    height: 40,
  },
  {
    name: 'Google Cloud',
    src: '/Home/trustedBy-images/goggleimage.png',
    width: 120,
    height: 40,
  },
  {
    name: 'Microsoft',
    src: '/Home/trustedBy-images/microsoftimage.png',
    width: 130,
    height: 40,
  },
  {
    name: 'Remita',
    src: '/Home/trustedBy-images/remita.png',
    width: 130,
    height: 40,
  },
  {
    name: 'ProLaunch Academy',
    src: '/Home/trustedBy-images/pacademyimage.png',
    width: 140,
    height: 40,
  },
  {
    name: 'ProLaunch Careers',
    src: '/Home/trustedBy-images/pcareersimage.png',
    width: 140,
    height: 40,
  },
  {
    name: 'ProLaunch Group',
    src: '/Home/trustedBy-images/prolaunchimage.png',
    width: 140,
    height: 40,
  },
  {
    name: 'ISO Certified',
    src: '/Home/trustedBy-images/isoimage.png',
    width: 100,
    height: 40,
  },
  {
    name: 'GDPR Compliant',
    src: '/Home/trustedBy-images/gdprimage.png',
    width: 100,
    height: 40,
  },
];

export const navbarLinks = ['Home', 'About', 'Services', 'Contact'];

export const challengesData: ChallengeCard[] = [
  {
    audience: 'For CTOs',
    title: 'Spiraling Cloud Costs & Operational Debt',
    description:
      'Struggling with spiraling cloud costs and mounting operational debt?',
  },
  {
    audience: 'For Founders',
    title: 'Rapid & Reliable Development',
    description:
      "Need a rapid development system that ships products that don't crash?",
  },
  {
    audience: 'For Regulated Industries',
    title: 'Security & Compliance (SOC2/HIPAA)',
    description:
      'Need iron-clad security and compliance (SOC2/HIPAA) without sacrificing speed?',
  },
  {
    audience: 'For Businesses',
    title: 'On-Premise Risk & Software Scale',
    description:
      'Struggling with the risks and downtime associated with moving from on-premise hardware to the cloud? Looking to build and develop custom software applications or company websites?',
  },
];

export const reasons = [
  'Senior engineers on every engagement',
  'Cloud-native architecture',
  'AI-ready software solutions',
  'Transparent communication',
  'Flexible delivery model',
  'Long-term support',
];
