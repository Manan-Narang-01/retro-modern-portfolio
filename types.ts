export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  link: string;
  featured: boolean;
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  duration: string;
  description: string;
  achievements: string[];
}

export interface Education {
  id: string;
  degree: string;
  institution: string;
  year: string;
  coursework: string[];
}

export interface Certification {
  id: string;
  title: string;
  organization: string;
  year: string;
  link?: string;
}

export interface SocialLink {
  platform: string;
  url: string;
  iconName: string;
}

export interface PortfolioData {
  personalInfo: {
    name: string;
    title: string;
    tagline: string;
    about: string[];
    skills: string[];
    location: string;
    email: string;
  };
  socialLinks: SocialLink[];
  experience: Experience[];
  projects: Project[];
  education: Education[];
  certifications: Certification[];
}

export const SectionType = {
  HOME: 'HOME',
  EXPERIENCE: 'EXPERIENCE',
  PROJECTS: 'PROJECTS',
  EDUCATION: 'EDUCATION',
  CONTACT: 'CONTACT'
} as const;

export type SectionType = typeof SectionType[keyof typeof SectionType];
