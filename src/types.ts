export interface Project {
  id: string;
  title: string;
  tagline: string;
  period: string;
  githubUrl: string;
  demoUrl?: string; // Optional if none, but let's provide visual sandbox interaction!
  techStack: string[];
  bullets: string[];
  category: 'AI / Fullstack' | 'Mobile & Biotech' | 'UI/UX Design';
  metrics?: { label: string; value: string }[];
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  period: string;
  location: string;
  bullets: string[];
  skillsAssociated: string[];
}

export interface Education {
  institution: string;
  degree: string;
  period: string;
  location: string;
}

export interface SkillCategory {
  categoryName: string;
  skills: { name: string; proficiency: number; subtype?: string }[];
}

export interface Certification {
  name: string;
  issuer: string;
  year?: string;
}
