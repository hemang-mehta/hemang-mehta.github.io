export type Theme = "light" | "dark";

export type Profile = {
  name: string;
  handle: string;
  headline: string;
  tagline: string;
  about: string;
  location: string;
  email: string;
  resumeUrl: string;
  github: { url: string; label: string; publicRepos: number };
  linkedin: string;
  coreStack: string[];
  contact: { heading: string; blurb: string };
};

export type SiteConfig = {
  theme: Theme;
  url: string;
  title: string;
  description: string;
};

export type Project = {
  slug: string;
  title: string;
  year: string;
  description: string;
  stack: string[];
  repo: string;
  live?: string;
  featured?: boolean;
};

export type TimelineItem = {
  when: string;
  title: string;
  org: string;
  note: string;
};

export type SkillGroup = { label: string; items: string[] };
