export type InquiryType =
  | 'Pricing'
  | 'Features'
  | 'Customization'
  | 'Partnership'
  | 'Other';

export type ProductCategory = 'Education' | 'Distribution' | 'Business';

export interface ProductFeature {
  id: string;
  productId: string;
  title: string;
  description: string;
  displayOrder: number;
}

export interface ProductFaq {
  question: string;
  answer: string;
}

export interface Product {
  id: string;
  name: string;
  slug: string;
  shortDescription: string;
  description: string;
  category: ProductCategory;
  tagline: string;
  audience: string;
  thumbnail: string;
  accentFrom: string;
  accentTo: string;
  demoUrl?: string;
  isPublished: boolean;
  features: ProductFeature[];
  benefits: string[];
  industries: string[];
  workflow?: { step: number; title: string; description: string }[];
  faqs: ProductFaq[];
  primaryCta: string;
  secondaryCta: string;
  notes?: string[];
}
