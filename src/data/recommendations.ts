export type IndustryId = 'education' | 'distribution' | 'sales' | 'custom';
export type NeedId = 'students' | 'field' | 'leads' | 'build';

export interface FinderOption<T extends string> {
  id: T;
  label: string;
}

export interface SolutionLink {
  label: string;
  href: string;
}

export interface SolutionRecommendation {
  title: string;
  reason: string;
  links: SolutionLink[];
}

export const industryOptions: FinderOption<IndustryId>[] = [
  { id: 'education', label: 'Education' },
  { id: 'distribution', label: 'Distribution' },
  { id: 'sales', label: 'Sales or SME' },
  { id: 'custom', label: 'A custom build' },
];

export const needOptions: FinderOption<NeedId>[] = [
  { id: 'students', label: 'Students and fees' },
  { id: 'field', label: 'Field sales and inventory' },
  { id: 'leads', label: 'Leads and follow-ups' },
  { id: 'build', label: 'Web, mobile, or cloud' },
];

const reasons: Record<NeedId, Record<IndustryId, string>> = {
  students: {
    education:
      'SIDS is built for tuition centres, private schools, academies, and training institutes that need student records, courses, and fee collection in one system.',
    distribution:
      'When the job is student or trainee records and fees, SIDS is the closer fit than a distribution platform.',
    sales:
      'SIDS keeps learner profiles, courses, and fees together when education is part of how you work with people.',
    custom:
      'SIDS is a practical base for student and fee management, and the workflows can be tailored to your institution.',
  },
  field: {
    education:
      'Distribution360 connects field visits, orders, stock, deliveries, and collections when goods movement is the operational problem.',
    distribution:
      'Distribution360 is built for FMCG, beverage, food, and wholesale teams that need field sales, inventory, warehouse processing, and collections together.',
    sales:
      'Distribution360 fits when selling means outlet visits, orders, and stock, rather than a simple lead list.',
    custom:
      'Distribution360 already covers field sales through delivery and payment collection, and implementation can follow your operation.',
  },
  leads: {
    education:
      'INFOBSC CRM keeps enquiries, follow-ups, and conversation history visible when the goal is turning interest into enrolments.',
    distribution:
      'INFOBSC CRM tracks leads, deals, and follow-ups when the priority is the customer relationship rather than the warehouse.',
    sales:
      'INFOBSC CRM gives SMEs, agencies, and sales teams one place for leads, deals, quotations, and follow-ups.',
    custom:
      'INFOBSC CRM is a straightforward starting point for pipeline and follow-ups, with room to match how your team sells.',
  },
  build: {
    education:
      'Web, mobile, and cloud development can extend how an institution works, from portals to apps around the process you already use.',
    distribution:
      'Web, mobile, and cloud development can support distribution work that needs something beyond a ready-made product.',
    sales:
      'Web, mobile, and cloud development can support a sales process that does not fit a standard CRM.',
    custom:
      'We design and build web applications, mobile apps, and cloud systems around the workflow you actually use.',
  },
};

const outcomes: Record<NeedId, { title: string; links: SolutionLink[] }> = {
  students: {
    title: 'SIDS',
    links: [
      { label: 'View SIDS', href: '/products/sids' },
      { label: 'Book a SIDS demo', href: '/book-demo?product=sids' },
    ],
  },
  field: {
    title: 'Distribution360',
    links: [
      { label: 'View Distribution360', href: '/products/distribution360' },
      { label: 'Book a Distribution360 demo', href: '/book-demo?product=distribution360' },
    ],
  },
  leads: {
    title: 'INFOBSC CRM',
    links: [
      { label: 'View INFOBSC CRM', href: '/products/crm' },
      { label: 'Book a CRM demo', href: '/book-demo?product=crm' },
    ],
  },
  build: {
    title: 'Web, mobile, and cloud',
    links: [{ label: 'Contact the team', href: '/#contact' }],
  },
};

export const getRecommendation = (
  industry: IndustryId,
  need: NeedId
): SolutionRecommendation => ({
  title: outcomes[need].title,
  reason: reasons[need][industry],
  links: outcomes[need].links,
});
