export interface ProjectItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  url: string;
  category: string;
  techStack: string[];
  features: string[];
  accentColor?: string;
}

export interface SkillItem {
  id: string;
  name: string;
  category: string;
  description: string;
  proficiencyLevel: string;
  iconType: 'html' | 'css' | 'js' | 'python' | 'responsive' | 'ai';
}

export interface ContactInfo {
  name: string;
  role: string;
  specialization: string;
  email: string;
  phone: string;
  github: string;
  location: string;
}
