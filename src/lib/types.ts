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
};

export type Differentiator = {
  title: string;
  description: string;
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
