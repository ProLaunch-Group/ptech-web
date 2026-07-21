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
    name: 'Paystack',
    src: '/Home/trustedBy-images/paystack.png',
    width: 130,
    height: 35,
  },
  {
    name: 'Moniepoint',
    src: '/Home/trustedBy-images/moniepoint.png',
    width: 140,
    height: 35,
  },
  {
    name: 'Flutterwave',
    src: '/Home/trustedBy-images/flutterwave.png',
    width: 140,
    height: 35,
  },
  {
    name: 'Interswitch',
    src: '/Home/trustedBy-images/interswitch.png',
    width: 140,
    height: 35,
  },
  {
    name: 'aws',
    src: '/Home/trustedBy-images/awsimage.png',
    width: 120,
    height: 10,
  },
  {
    name: 'google',
    src: '/Home/trustedBy-images/goggleimage.png',
    width: 120,
    height: 10,
  },
  {
    name: 'gdpr',
    src: '/Home/trustedBy-images/gdprimage.png',
    width: 120,
    height: 10,
  },
  {
    name: 'iso',
    src: '/Home/trustedBy-images/isoimage.png',
    width: 120,
    height: 10,
  },
  {
    name: 'microsoft',
    src: '/Home/trustedBy-images/microsoftimage.png',
    width: 120,
    height: 10,
  },
];

export const navbarLinks = ['Home', 'About', 'Services', 'Contact'];

export const challengesData: ChallengeCard[] = [
  {
    audience: 'CTOs',
    title: 'Cloud bills keep climbing',
    description:
      'Struggling with spiraling cloud costs and mounting operational debt.',
  },
  {
    audience: 'Founders',
    title: 'Product development bottlenecks',
    description:
      "Need a rapid development team that understands how to ship products that don't crash.",
  },
  {
    audience: 'Regulated Industries',
    title: 'Security & compliance gaps',
    description:
      'Need iron-clad security and compliance (SOC2/HIPAA) without sacrificing speed.',
  },
  {
    audience: 'Businesses on Legacy Infrastructure',
    title: 'Legacy infrastructure challenges',
    description:
      'Struggling with the risks and downtime associated with moving from on-premise hardware to the cloud.',
  },
];
