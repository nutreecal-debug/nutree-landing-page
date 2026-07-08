export type Lang = "en" | "ar";

export interface HeadlineSegment {
  text: string;
  highlight?: boolean;
}

export interface MacroItem {
  emoji: string;
  label: string;
}

export interface FeatureItem {
  icon: "camera" | "mic" | "flame" | "droplets" | "scale" | "bookmark";
  title: string;
}

export interface StepItem {
  number: string;
  title: string;
}

export interface Dictionary {
  lang: Lang;
  meta: {
    title: string;
    description: string;
  };
  header: {
    features: string;
    howItWorks: string;
    pricing: string;
    downloadApp: string;
    switchLabel: string;
    switchHref: string;
  };
  hero: {
    headline: HeadlineSegment[];
    mobileHeadline: string;
    downloadLabel: string;
  };
  macros: {
    title: string;
    items: MacroItem[];
  };
  features: {
    title: string;
    subtitle: string;
    items: FeatureItem[];
  };
  howItWorks: {
    title: string;
    subtitle: string;
    steps: StepItem[];
  };
  pricing: {
    title: string;
    name: string;
    price: string;
    period: string;
    features: string[];
    cta: string;
    note: string;
  };
  download: {
    title: string;
    subtitle: string;
  };
  footer: {
    tagline: string;
    terms: string;
    privacy: string;
    support: string;
    sources: string;
    copyright: string;
  };
}
