export interface LegalSection {
  heading: string;
  paragraphs?: string[];
  list?: string[];
}

export interface LegalPageContent {
  title: string;
  lastUpdated: string;
  intro?: string;
  sections: LegalSection[];
}

export interface FaqItem {
  q: string;
  a: string;
}

export interface FaqCategory {
  icon: string;
  title: string;
  items: FaqItem[];
}

export interface TipItem {
  icon: string;
  title: string;
  text: string;
}

export interface SupportContent {
  title: string;
  subtitle: string;
  categories: FaqCategory[];
  tipsTitle: string;
  tips: TipItem[];
}
