import { ProjectItem, SkillItem, ContactInfo } from '../types';

export const CONTACT_INFO: ContactInfo = {
  name: 'Snehil Kashyap',
  role: 'First-Year B.Tech Student',
  specialization: 'Computer Science (Data Science)',
  email: 'kashyapsnehil6@gmail.com',
  phone: '+91 8251036828',
  github: 'https://github.com/Barren142',
  location: 'India',
};

export const SKILLS_LIST: SkillItem[] = [
  {
    id: 'html',
    name: 'HTML',
    category: 'Markup & Structure',
    description: 'Semantic markup, accessibility hierarchy, SEO-friendly document structuring, and modern standards.',
    proficiencyLevel: 'Core Foundation',
    iconType: 'html',
  },
  {
    id: 'css',
    name: 'CSS',
    category: 'Styling & Design',
    description: 'Modern responsive layouts, Flexbox, Grid, custom styling systems, and precise design execution.',
    proficiencyLevel: 'Core Foundation',
    iconType: 'css',
  },
  {
    id: 'javascript',
    name: 'JavaScript',
    category: 'Programming & Logic',
    description: 'Interactive DOM handling, asynchronous operations, event-driven workflows, and modern ES6+ practices.',
    proficiencyLevel: 'Core Foundation',
    iconType: 'js',
  },
  {
    id: 'python',
    name: 'Python',
    category: 'Data & Computation',
    description: 'Algorithmic problem solving, data structures, computational logic, and scripting for data science concepts.',
    proficiencyLevel: 'Core Foundation',
    iconType: 'python',
  },
  {
    id: 'responsive-design',
    name: 'Responsive Web Design',
    category: 'Layout Architecture',
    description: 'Mobile-first viewport engineering, adaptive touch surfaces, fluid typography, and multi-device parity.',
    proficiencyLevel: 'Applied Practice',
    iconType: 'responsive',
  },
  {
    id: 'ai-assisted-dev',
    name: 'AI-Assisted Website Development',
    category: 'Modern Workflows',
    description: 'Augmenting engineering workflows with state-of-the-art AI tooling, rapid iteration, and prompt architecture.',
    proficiencyLevel: 'Applied Practice',
    iconType: 'ai',
  },
];

export const PROJECTS_LIST: ProjectItem[] = [
  {
    id: 'school-website',
    title: 'School Website',
    subtitle: 'Educational Academy Portal',
    category: 'Institutional Web Platform',
    description:
      'A dedicated web platform designed for an educational institution. Organizes academic curriculums, school notices, faculty departments, and clear admissions guidance into a structured, easily navigable interface.',
    url: 'https://school-one-ashy.vercel.app',
    techStack: ['HTML5', 'CSS3', 'JavaScript', 'Responsive UI'],
    features: [
      'Comprehensive academic & notice board sections',
      'Structured admissions information and inquiry routes',
      'Clean navigation hierarchy with mobile-optimized views',
    ],
  },
  {
    id: 'gym-website',
    title: 'Gym Website',
    subtitle: 'High-Performance Fitness Hub',
    category: 'Fitness & Athletics Platform',
    description:
      'A modern fitness web application crafted to showcase training programs, membership options, trainer profiles, and workout regimens with high visual clarity and streamlined member onboarding.',
    url: 'https://gym-sand-one.vercel.app',
    techStack: ['HTML5', 'CSS3', 'Modern Layouts', 'Conversion Design'],
    features: [
      'Membership tier showcases and feature comparisons',
      'Training schedule overviews and workout categories',
      'Clear call-to-actions engineered for user enrollment',
    ],
  },
  {
    id: 'beauty-parlour-website',
    title: 'Beauty Parlour Website',
    subtitle: 'Luxury Wellness & Salon Experience',
    category: 'Boutique Salon & Spa Platform',
    description:
      'An elegant digital storefront designed for a beauty parlour and salon. Features a detailed treatment catalog, stylist showcases, transparent service pricing, and a frictionless booking interface.',
    url: 'https://sk-qwbf.vercel.app',
    techStack: ['HTML5', 'CSS3', 'JavaScript', 'Luxury Styling'],
    features: [
      'Curated service and treatment menus with pricing',
      'Stylist spotlight and studio ambiance showcase',
      'Intuitive consultation and appointment booking flow',
    ],
  },
];
