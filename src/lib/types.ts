import type { ImageMetadata } from "astro";

export type NavItem = {
  label: string;
  href: string;
};

export type Cta = {
  label: string;
  href: string;
};

export type Service = {
  id: "erp" | "crm" | "landing";
  name: string;
  description: string;
};

export type PortfolioItem = {
  project: string;
  client: string;
  category: "erp" | "crm" | "landing";
  technologies: string[];
  description: string;
  href?: string;
  image?: ImageMetadata;
  imageAlt?: string;
};

export type CaseStudyCover = {
  src: ImageMetadata;
  alt: string;
};

export type CaseContrast = {
  labels: { before: string; after: string };
  rows: { before: string; after: string }[];
};

export type CaseStudy = {
  slug: string;
  seo: { title: string; description: string };
  eyebrow: string;
  title: string;
  client: string;
  location: string;
  category: string;
  technologies: string[];
  gallery?: CaseStudyCover[];
  problem: { eyebrow: string; title: string; body: string[] };
  // Con contraste, `problem.body` es solo la entrada (1 o 2 frases) y el resto
  // del desafío se cuenta en la tabla de antes y después.
  contrast?: CaseContrast;
  solution: {
    eyebrow: string;
    title: string;
    features: { title: string; description: string }[];
  };
  results: {
    eyebrow: string;
    title: string;
    metrics: { value: string; unit: string; label: string }[];
  };
  cta: { eyebrow: string; title: string; label: string; href: string };
};

export type Differentiator = {
  title: string;
  description: string;
};

export type ProblemSection = {
  eyebrow: string;
  title: string;
  bullets: string[];
  caseNote: {
    text: string;
    cta: Cta;
  };
};

export type FaqItem = {
  question: string;
  answer: string;
};

export type ForWhoSection = {
  eyebrow: string;
  title: string;
  yes: { label: string; items: string[] };
  no: { label: string; items: string[] };
};

export type ContactInfo = {
  eyebrow: string;
  title: string;
  description: string;
  email: string;
  locationItems: { label: string; value: string }[];
  socials: { label: string; url: string; displayLabel?: string }[];
};
