import React from 'react';
import {
  Cloud,
  Server,
  Network,
  GitBranch,
  GitPullRequest,
  Cpu,
  Code,
  Layout,
  Building,
  ShieldCheck,
  Activity,
} from 'lucide-react';

interface ServiceIconProps {
  name?: string;
  className?: string;
}

export default function ServiceIcon({
  name,
  className = 'w-4 h-4 text-amberGold',
}: ServiceIconProps) {
  switch (name) {
    case 'cloud':
      return <Cloud className={className} />;
    case 'server':
      return <Server className={className} />;
    case 'network':
      return <Network className={className} />;
    case 'git-branch':
      return <GitBranch className={className} />;
    case 'git-pull-request':
      return <GitPullRequest className={className} />;
    case 'cpu':
      return <Cpu className={className} />;
    case 'code':
      return <Code className={className} />;
    case 'layout':
      return <Layout className={className} />;
    case 'building':
      return <Building className={className} />;
    case 'shield':
      return <ShieldCheck className={className} />;
    case 'activity':
      return <Activity className={className} />;
    default:
      return <Cloud className={className} />;
  }
}
