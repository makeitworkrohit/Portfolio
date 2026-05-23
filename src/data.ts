import { Project, Experience, Education, SkillCategory, Certification } from './types';

export const PERSONAL_INFO = {
  name: 'Rohit Kushwaha',
  title: 'AI-Native Engineer',
  subtitle: 'Building AI-integrated systems, robust backend logic, and responsive digital pipelines.',
  location: 'Thane, MH, India',
  email: 'rohitechy@gmail.com',
  phone: '',
  github: 'https://github.com/makeitworkrohit',
  linkedin: 'https://www.linkedin.com/in/rohit-kushwaha-26320a24b/',
  twitter: 'https://x.com/Kushrohit27',
  summary: 'I engineer intelligent workflows, deployable full-stack integrations, and responsive client interfaces. Focused on bridging complex automation pipelines with clean visual hierarchy.'
};

export const PROJECTS: Project[] = [
  {
    id: 'civicassist',
    title: 'CivicAssist',
    tagline: 'Converting citizen spoken feedback into instant civil tickets.',
    period: 'Jan 2026 - Feb 2026',
    githubUrl: 'https://github.com/makeitworkrohit/CivicAssist',
    techStack: ['React', 'FastAPI', 'MongoDB', 'OpenAI API', 'JWT', 'Tailwind', 'Whisper'],
    bullets: [
      'For Common Users: Let citizens easily record a voice note to file complex civic grievances (like water leaks or road cracks) without tedious long forms.',
      'For Developers: Implemented a Whisper speech-to-text decoder coupled with dynamic GPT prompt structuring to classify categories in real-time, backed by FastAPI.',
      'Deployment: Fully containerized docker structure optimized for standard cloud hosts.'
    ],
    category: 'AI / Fullstack',
    metrics: [
      { label: 'Voice Decoding', value: 'Whisper API' },
      { label: 'Grievance Sort', value: 'GPT Automated' },
      { label: 'Server Engine', value: 'FastAPI/NoSQL' }
    ]
  },
  {
    id: 'ast-smart-analyzer',
    title: 'AST Smart Analyzer',
    tagline: 'Digitizing antimicrobial sensitivity analyses for laboratories.',
    period: 'March 2026 - April 2026',
    githubUrl: 'https://github.com/makeitworkrohit/AST-Smart-Analyzer',
    techStack: ['React Native', 'Expo', 'Node.js', 'MongoDB', 'Express.js'],
    bullets: [
      'For Common Users: A smart mobile cataloging app that lets laboratory pathologists view, update, and audit antibacterial culture resistance readings effortlessly.',
      'For Developers: Engineered dynamic mobile scan logs using Expo with precision-guided measurement trackers and instant NoSQL lookup query sets.'
    ],
    category: 'Mobile & Biotech',
    metrics: [
      { label: 'Latency', value: 'Instant' },
      { label: 'Native Stack', value: 'Expo' },
      { label: 'Database Logs', value: 'Document DB' }
    ]
  }
];

export const WORK_EXPERIENCES: Experience[] = [
  {
    id: 'mindsumo',
    role: 'Product Strategist',
    company: 'Mindsumo',
    period: 'Aug 2025 - Dec 2025',
    location: 'Remote',
    bullets: [
      'For Common Users: Drafted hygienic, structured waste workflow solutions considering real-world domestic hurdles and human behaviors.',
      'For Developers: Conducted structural user needs modeling, critical feasibility analyses, and process engineering workflows.'
    ],
    skillsAssociated: ['User-Centered Design', 'Workflow Modeling', 'Feasibility Research', 'System Thinking']
  },
  {
    id: 'freelance-uiux',
    role: 'UI/UX Interaction Architect',
    company: 'Freelance Platforms',
    period: 'Feb 2025 - Jun 2025',
    location: 'Remote',
    bullets: [
      'For Common Users: Redesigned cluttered interfaces into simple, stress-free flows that anyone can understand on the first try.',
      'For Developers: Applied rigorous information architecture, high-fidelity layouts, and active feedback metrics to speed up overall reading times on target content.'
    ],
    skillsAssociated: ['Visual Hierarchy', 'Information Architecture', 'Design Thinking', 'Usability Feedback']
  }
];

export const SKILLS_DATA: SkillCategory[] = [
  {
    categoryName: 'AI & Automation Tools',
    skills: [
      { name: 'Claude', proficiency: 92, subtype: 'LLM Orchestration' },
      { name: 'ChatGPT', proficiency: 95, subtype: 'Prompt Engineering' },
      { name: 'OpenAI API', proficiency: 88, subtype: 'Integrations' },
      { name: 'n8n', proficiency: 85, subtype: 'Workflows' },
      { name: 'Zapier', proficiency: 80, subtype: 'Integrations' }
    ]
  },
  {
    categoryName: 'Databases & APIs',
    skills: [
      { name: 'MongoDB', proficiency: 85, subtype: 'Document Store' },
      { name: 'REST APIs', proficiency: 90, subtype: 'Backend Services' },
      { name: 'JWT Auth', proficiency: 85, subtype: 'Security' },
      { name: 'OpenAI API', proficiency: 88, subtype: 'Inference' }
    ]
  },
  {
    categoryName: 'Programming Languages',
    skills: [
      { name: 'JavaScript', proficiency: 90, subtype: 'ESNext / TypeScript' },
      { name: 'Python', proficiency: 85, subtype: 'FastAPI / Data' },
      { name: 'Java', proficiency: 75, subtype: 'OOP / Enterprise' }
    ]
  },
  {
    categoryName: 'Tools & Cloud',
    skills: [
      { name: 'Git & GitHub', proficiency: 90, subtype: 'Version Control' },
      { name: 'Postman', proficiency: 85, subtype: 'API Testing' },
      { name: 'Vercel', proficiency: 88, subtype: 'Deployment' },
      { name: 'Render', proficiency: 80, subtype: 'Cloud Hosting' }
    ]
  },
  {
    categoryName: 'Soft Skills',
    skills: [
      { name: 'Structured Thinking', proficiency: 95, subtype: 'Analysis' },
      { name: 'Product Documentation', proficiency: 90, subtype: 'Technical Writing' },
      { name: 'Team Collaboration', proficiency: 88, subtype: 'Agile' },
      { name: 'Research', proficiency: 85, subtype: 'Analytical' }
    ]
  }
];

export const CERTIFICATIONS: Certification[] = [
  {
    name: 'Data Structures and Algorithms',
    issuer: 'GeeksforGeeks',
    year: '2025'
  },
  {
    name: 'Intelligence Tools for the Digital Age',
    issuer: 'Coursera',
    year: '2024'
  }
];

export const EDUCATION_INFO: Education = {
  institution: 'Lovely Professional University',
  degree: 'Bachelor of Technology in Computer Science & Engineering',
  period: '2022 - 2026',
  location: 'Punjab, India'
};
