export interface Project {
  id: string;
  title: string;
  category: 'AI & Automation' | 'Finance & ERP' | 'Sales & Planning' | 'Operations & Admin';
  description: string;
  technologies: string[];
  impact?: string;
  highlights: string[];
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  bullets: string[];
  isCurrent: boolean;
}

export interface SkillGroup {
  category: string;
  skills: string[];
}

export interface PortfolioData {
  name: string;
  title: string;
  location: string;
  phone: string;
  email: string;
  linkedin: string;
  linkedinUrl: string;
  summary: string;
  skills: SkillGroup[];
  experience: Experience[];
  projects: Project[];
  education: {
    degree: string;
    field: string;
    institution: string;
    period: string;
    score: string;
  };
}
