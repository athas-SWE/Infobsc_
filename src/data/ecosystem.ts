export type EcosystemKind = 'product' | 'service' | 'technology';

export interface EcosystemNode {
  id: string;
  kind: EcosystemKind;
  label: string;
  shortLabel: string;
  description: string;
  href: string;
  cta: string;
}

export interface EcosystemLink {
  from: string;
  to: string;
}

export const ecosystemNodes: EcosystemNode[] = [
  {
    id: 'sids',
    kind: 'product',
    label: 'SIDS',
    shortLabel: 'SIDS',
    description:
      'Student information, courses, fees, and counselling for tuition centres, private schools, academies, and training institutes.',
    href: '/products/sids',
    cta: 'View SIDS',
  },
  {
    id: 'distribution360',
    kind: 'product',
    label: 'Distribution360',
    shortLabel: 'D360',
    description:
      'Field sales, orders, inventory, warehouse processing, deliveries, and collections for FMCG, beverage, food, and wholesale distribution.',
    href: '/products/distribution360',
    cta: 'View Distribution360',
  },
  {
    id: 'crm',
    kind: 'product',
    label: 'INFOBSC CRM',
    shortLabel: 'CRM',
    description:
      'Leads, pipeline, follow-ups, and customer history for SMEs, real estate agencies, vehicle dealers, and sales teams.',
    href: '/products/crm',
    cta: 'View INFOBSC CRM',
  },
  {
    id: 'web',
    kind: 'service',
    label: 'Web Application Development',
    shortLabel: 'Web',
    description:
      'Modern, scalable web solutions, including frontend, backend, and full-stack development.',
    href: '/#contact',
    cta: 'Discuss this service',
  },
  {
    id: 'mobile',
    kind: 'service',
    label: 'Mobile App Development',
    shortLabel: 'Mobile',
    description: 'Native Android and iOS apps, plus cross-platform and mobile-first products.',
    href: '/#contact',
    cta: 'Discuss this service',
  },
  {
    id: 'cloud',
    kind: 'service',
    label: 'Cloud Solutions',
    shortLabel: 'Cloud',
    description:
      'Scalable cloud infrastructure, including cloud-native apps, migration, and DevOps.',
    href: '/#contact',
    cta: 'Discuss this service',
  },
  {
    id: 'desktop',
    kind: 'service',
    label: 'Desktop Applications',
    shortLabel: 'Desktop',
    description:
      'Cross-platform desktop software, custom tools, and modernisation of existing desktop systems.',
    href: '/#contact',
    cta: 'Discuss this service',
  },
  {
    id: 'enterprise',
    kind: 'service',
    label: 'Enterprise Software',
    shortLabel: 'Enterprise',
    description:
      'Large-scale business systems such as ERP, CRM, HRMS, and custom operational workflows.',
    href: '/#contact',
    cta: 'Discuss this service',
  },
  {
    id: 'ai',
    kind: 'service',
    label: 'AI & Automation',
    shortLabel: 'AI',
    description:
      'Intelligent automation, analytics, and workflow tools that support day-to-day operations.',
    href: '/#contact',
    cta: 'Discuss this service',
  },
  {
    id: 'aspnet',
    kind: 'technology',
    label: 'ASP.NET Core',
    shortLabel: 'ASP.NET',
    description:
      'The backend platform behind INFOBSC products and custom systems, including CRM work delivered for clients.',
    href: '/products/crm',
    cta: 'See INFOBSC CRM',
  },
  {
    id: 'react',
    kind: 'technology',
    label: 'React',
    shortLabel: 'React',
    description:
      'The interface layer used for INFOBSC web products and client platforms such as SIDS and CRM.',
    href: '/products/crm',
    cta: 'See INFOBSC CRM',
  },
  {
    id: 'mysql',
    kind: 'technology',
    label: 'MySQL',
    shortLabel: 'MySQL',
    description: 'Relational data storage for student records, operations, and business reporting.',
    href: '/products/sids',
    cta: 'See SIDS',
  },
  {
    id: 'azure',
    kind: 'technology',
    label: 'Azure',
    shortLabel: 'Azure',
    description: 'Cloud hosting and operations for connected distribution and business systems.',
    href: '/products/distribution360',
    cta: 'See Distribution360',
  },
];

export const ecosystemLinks: EcosystemLink[] = [
  { from: 'sids', to: 'web' },
  { from: 'sids', to: 'enterprise' },
  { from: 'sids', to: 'react' },
  { from: 'sids', to: 'mysql' },
  { from: 'distribution360', to: 'mobile' },
  { from: 'distribution360', to: 'cloud' },
  { from: 'distribution360', to: 'azure' },
  { from: 'crm', to: 'web' },
  { from: 'crm', to: 'ai' },
  { from: 'crm', to: 'react' },
  { from: 'crm', to: 'aspnet' },
];

export const ecosystemNodeMap = new Map(ecosystemNodes.map((node) => [node.id, node]));

export const connectedIds = (id: string): string[] => {
  const ids = new Set<string>();
  ecosystemLinks.forEach((link) => {
    if (link.from === id) ids.add(link.to);
    if (link.to === id) ids.add(link.from);
  });
  return ecosystemNodes.filter((node) => ids.has(node.id)).map((node) => node.id);
};
