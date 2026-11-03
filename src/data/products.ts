import { Product } from '../types/products';

export const products: Product[] = [
  {
    id: 'sids',
    name: 'SIDS',
    slug: 'sids',
    shortDescription: 'Student Information & Management',
    description:
      'Manage your educational institution from one centralized platform. Simplify student registrations, course management, fee collection and reporting with an easy-to-use student information system.',
    category: 'Education',
    tagline: 'Student Information Dashboard System',
    audience: 'For tuition centres, private schools, academies and training institutes.',
    thumbnail: 'education',
    accentFrom: 'from-blue-900',
    accentTo: 'to-blue-600',
    isPublished: true,
    primaryCta: 'Book SIDS Demo',
    secondaryCta: 'Request Pricing',
    features: [
      {
        id: 'sids-f1',
        productId: 'sids',
        title: 'Student registration and profile management',
        description: 'Capture and maintain complete student profiles in one place.',
        displayOrder: 1,
      },
      {
        id: 'sids-f2',
        productId: 'sids',
        title: 'Course and programme management',
        description: 'Organise courses, batches and academic programmes with ease.',
        displayOrder: 2,
      },
      {
        id: 'sids-f3',
        productId: 'sids',
        title: 'Student search and records',
        description: 'Find student records quickly with powerful search tools.',
        displayOrder: 3,
      },
      {
        id: 'sids-f4',
        productId: 'sids',
        title: 'Fee collection and payment tracking',
        description: 'Track fees, payments and outstanding balances accurately.',
        displayOrder: 4,
      },
      {
        id: 'sids-f5',
        productId: 'sids',
        title: 'Counsellor management',
        description: 'Assign and manage counsellors across student journeys.',
        displayOrder: 5,
      },
      {
        id: 'sids-f6',
        productId: 'sids',
        title: 'Reports and analytics',
        description: 'Generate actionable reports for admissions, fees and performance.',
        displayOrder: 6,
      },
      {
        id: 'sids-f7',
        productId: 'sids',
        title: 'User management and audit logs',
        description: 'Control access and maintain a clear activity history.',
        displayOrder: 7,
      },
    ],
    benefits: [
      'Centralize student data and reduce paperwork',
      'Improve fee collection visibility and follow-ups',
      'Give staff one system for admissions, courses and counselling',
      'Make better decisions with clear reports',
    ],
    industries: ['Tuition centres', 'Private schools', 'Academies', 'Training institutes'],
    faqs: [
      {
        question: 'Is SIDS suitable for small tuition centres?',
        answer:
          'Yes. SIDS is designed for tuition centres, academies and training institutes that need practical student and fee management without unnecessary complexity.',
      },
      {
        question: 'Can SIDS be customized for our institution?',
        answer:
          'Yes. Implementation, user roles and workflows can be tailored. Use Request Pricing so we can assess your requirements.',
      },
      {
        question: 'Do you provide training and support?',
        answer:
          'Yes. We provide onboarding support and guidance so your team can start using SIDS confidently.',
      },
    ],
  },
  {
    id: 'distribution360',
    name: 'Distribution360',
    slug: 'distribution360',
    shortDescription: 'Distribution & Operations',
    description:
      'Take control of your entire distribution operation with Distribution360. Manage field sales, customer orders, inventory, warehouse operations, deliveries and collections through one connected business platform.',
    category: 'Distribution',
    tagline: 'Distribution Management',
    audience: 'For FMCG, beverage, food and wholesale distribution businesses.',
    thumbnail: 'distribution',
    accentFrom: 'from-emerald-800',
    accentTo: 'to-teal-600',
    isPublished: true,
    primaryCta: 'Book Distribution360 Demo',
    secondaryCta: 'Request a Business Consultation',
    features: [
      {
        id: 'd360-f1',
        productId: 'distribution360',
        title: 'Field sales and GPS-based customer visits',
        description: 'Track field visits and keep sales teams accountable on the ground.',
        displayOrder: 1,
      },
      {
        id: 'd360-f2',
        productId: 'distribution360',
        title: 'Customer and outlet management',
        description: 'Maintain outlet profiles, routes and customer relationships.',
        displayOrder: 2,
      },
      {
        id: 'd360-f3',
        productId: 'distribution360',
        title: 'Sales order management',
        description: 'Create, confirm and process customer orders end to end.',
        displayOrder: 3,
      },
      {
        id: 'd360-f4',
        productId: 'distribution360',
        title: 'Product and inventory management',
        description: 'Keep stock accurate across products and locations.',
        displayOrder: 4,
      },
      {
        id: 'd360-f5',
        productId: 'distribution360',
        title: 'Purchasing and supplier management',
        description: 'Manage suppliers and purchasing alongside distribution operations.',
        displayOrder: 5,
      },
      {
        id: 'd360-f6',
        productId: 'distribution360',
        title: 'Picking, packing and delivery management',
        description: 'Coordinate warehouse processing and outbound deliveries.',
        displayOrder: 6,
      },
      {
        id: 'd360-f7',
        productId: 'distribution360',
        title: 'Invoicing and payment collections',
        description: 'Invoice customers and track collections in one workflow.',
        displayOrder: 7,
      },
      {
        id: 'd360-f8',
        productId: 'distribution360',
        title: 'Returns and financial tracking',
        description: 'Handle returns and keep financial visibility across operations.',
        displayOrder: 8,
      },
      {
        id: 'd360-f9',
        productId: 'distribution360',
        title: 'Reports and AI-powered insights',
        description: 'Monitor performance and uncover operational insights.',
        displayOrder: 9,
      },
    ],
    benefits: [
      'Connect field sales, warehouse and finance in one platform',
      'Reduce order errors and stock mismatches',
      'Improve delivery visibility and collection follow-up',
      'Scale distribution operations with clearer workflows',
    ],
    industries: ['FMCG', 'Beverage', 'Food distribution', 'Wholesale'],
    workflow: [
      {
        step: 1,
        title: 'Field Sales Visit',
        description: 'Sales representative visits a customer.',
      },
      {
        step: 2,
        title: 'Order Creation',
        description: 'Create and submit the customer order.',
      },
      {
        step: 3,
        title: 'Confirmation & Invoice',
        description: 'Confirm order and update stock.',
      },
      {
        step: 4,
        title: 'Warehouse Processing',
        description: 'Picking and packing.',
      },
      {
        step: 5,
        title: 'Delivery',
        description: 'Dispatch and track deliveries.',
      },
      {
        step: 6,
        title: 'Payment Collection',
        description: 'Record customer payments and outstanding balances.',
      },
    ],
    faqs: [
      {
        question: 'Is Distribution360 built for Sri Lankan distributors?',
        answer:
          'Yes. It is designed around practical distribution workflows used by FMCG, beverage, food and wholesale businesses.',
      },
      {
        question: 'Can field teams use Distribution360 on mobile?',
        answer:
          'Field sales workflows are a core part of the product, including customer visits and order creation. We can walk through device support during a demo.',
      },
      {
        question: 'Do you offer implementation support?',
        answer:
          'Yes. Implementation, onboarding and business consultation are available based on your operation size and customization needs.',
      },
    ],
  },
  {
    id: 'crm',
    name: 'INFOBSC CRM',
    slug: 'crm',
    shortDescription: 'Customer & Sales Management',
    description:
      'Build stronger customer relationships and manage your sales process efficiently. INFOBSC CRM helps businesses capture leads, track opportunities, manage follow-ups and convert prospects into customers.',
    category: 'Business',
    tagline: 'Customer Relationship Management',
    audience: 'For SMEs, real estate agencies, vehicle dealers and sales teams.',
    thumbnail: 'crm',
    accentFrom: 'from-indigo-900',
    accentTo: 'to-blue-700',
    isPublished: true,
    primaryCta: 'Book CRM Demo',
    secondaryCta: 'Get Pricing',
    notes: [
      'Positioned as a simpler, mobile-friendly CRM for Sri Lankan SMEs.',
      'Multilingual and WhatsApp-oriented capabilities are part of the product direction and will be promoted as available once fully implemented.',
    ],
    features: [
      {
        id: 'crm-f1',
        productId: 'crm',
        title: 'Lead management',
        description: 'Capture and organize inbound and outbound leads.',
        displayOrder: 1,
      },
      {
        id: 'crm-f2',
        productId: 'crm',
        title: 'Customer and contact management',
        description: 'Keep customer and contact records organized and searchable.',
        displayOrder: 2,
      },
      {
        id: 'crm-f3',
        productId: 'crm',
        title: 'Sales pipeline and deal tracking',
        description: 'Track opportunities through each stage of your sales process.',
        displayOrder: 3,
      },
      {
        id: 'crm-f4',
        productId: 'crm',
        title: 'Follow-up reminders and activities',
        description: 'Never miss a follow-up with clear activity reminders.',
        displayOrder: 4,
      },
      {
        id: 'crm-f5',
        productId: 'crm',
        title: 'Quotations and sales opportunities',
        description: 'Manage quotations alongside active sales opportunities.',
        displayOrder: 5,
      },
      {
        id: 'crm-f6',
        productId: 'crm',
        title: 'Customer communication history',
        description: 'Keep conversation history attached to each customer record.',
        displayOrder: 6,
      },
      {
        id: 'crm-f7',
        productId: 'crm',
        title: 'Sales reports and dashboards',
        description: 'Monitor pipeline health and sales performance at a glance.',
        displayOrder: 7,
      },
    ],
    benefits: [
      'Give sales teams a simple system that is easy to adopt',
      'Improve follow-up consistency and conversion rates',
      'Keep customer conversations and deal progress visible',
      'Support growing SMEs without enterprise CRM complexity',
    ],
    industries: ['SMEs', 'Real estate agencies', 'Vehicle dealers', 'Sales teams'],
    faqs: [
      {
        question: 'Who is INFOBSC CRM best suited for?',
        answer:
          'It is designed for Sri Lankan SMEs, real estate agencies, vehicle dealers and sales teams that need a practical CRM without unnecessary complexity.',
      },
      {
        question: 'Does the CRM include WhatsApp features today?',
        answer:
          'WhatsApp-oriented communication is part of the product direction. We will only promote specific WhatsApp capabilities as available once they are fully implemented. Ask during a demo for the current roadmap.',
      },
      {
        question: 'Is pricing fixed?',
        answer:
          'No fixed public pricing is listed because user count, customization and implementation needs vary. Use Get Pricing for a tailored quote.',
      },
    ],
  },
];

export const getPublishedProducts = (): Product[] =>
  products.filter((product) => product.isPublished);

export const getProductBySlug = (slug: string): Product | undefined =>
  getPublishedProducts().find((product) => product.slug === slug);

export const getProductById = (id: string): Product | undefined =>
  products.find((product) => product.id === id);
