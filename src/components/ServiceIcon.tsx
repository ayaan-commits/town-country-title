import {
  Shield,
  Search,
  Home,
  RefreshCw,
  Lock,
  Building2,
  House,
  FileSearch,
  LucideIcon
} from 'lucide-react';

const iconMap: Record<string, LucideIcon> = {
  'title-insurance': Shield,
  'title-search': Search,
  'closing-services': Home,
  'refinancing-services': RefreshCw,
  'escrow-services': Lock,
  'commercial-title-services': Building2,
  'residential-title-services': House,
  'lien-search-services': FileSearch,
};

interface ServiceIconProps {
  slug: string;
  className?: string;
}

export function ServiceIcon({ slug, className = 'w-6 h-6' }: ServiceIconProps) {
  const Icon = iconMap[slug] || Shield;
  return <Icon className={className} />;
}

export default ServiceIcon;
