// Central portfolio data — edit this file to update all content across the site.

export const profile = {
  name: 'Boualem BENYAHIA',
  titles: [
  'Software Engineer',
  'Full Stack Developer',
  'Frontend Developer',
  'Backend Developer',
  'React Developer',
  'MERN Stack Developer',
  'JavaScript Developer',
  'Data Science Enthusiast',
  'Machine Learning Enthusiast',
  'AI Enthusiast',
  'Problem Solver',
  'Tech Explorer',
  'Open Source Learner',
  'Continuous Learner',
  'BioInformatics student'
],
  shortIntro:
  'Software Engineering graduate passionate about Full Stack Development, Maching Learning, and Data Science, focused on creating modern, reliable, and user-centered applications',
  location: 'Medea, Algeria',
  email: 'benyahia.boualem@yahoo.com',
  phone: '+213 673 128 102',
  cvUrl: '#',
  avatarText: 'BB',
  avatarImage: '/public/MyPic.jpeg',
  social: {
    github: 'https://github.com/B3LM0',
    linkedin: 'https://www.linkedin.com/in/boualem-benyahia-6332a0321?utm_source=share_via&utm_content=profile&utm_medium=member_android',
    email: 'mailto:benyahia.boualem@yahoo.com',
  },
};

export const about = {
  description:
    'A fresh Software Engineering graduate with a strong foundation in Full Stack Web Development and a growing specialization in Data Science and Machine Learning. I enjoy building scalable applications, solving real-world problems, and continuously exploring AI-driven technologies',
  highlights: [
  'Fresh Software Engineering graduate',
  'Experienced in Full Stack Web Development',
  'Passionate about Data Science, Machine Learning & AI',
  'Always learning new technologies and solving real-world problems',
],
};

export const education = [
  {
    id: 'edu-1',
    degree: "Bachelor's Degree in Information Systems",
    institution: 'Higher Institute of Sciences (HIS)',
    year: '2022 - 2025',
    grade: 'Excellent',
    description:
      'Comprehensive study of software engineering, information systems, databases, and modern web technologies with a strong focus on practical problem solving',
  },
  {
    id: 'edu-2',
    degree: "Master's Degree in BioInformatics",
    institution: 'University of sciences and technologies Houarie Boumediane (USTHB)',
    year: '2025 - present',
    grade: '',
    description:
      'In Progress',
  },
];

export type Skill = { name: string; level: number };
export type SkillCategory = { id: string; label: string; icon: string; skills: Skill[] };

export const skillCategories: SkillCategory[] = [
  {
    id: 'frontend',
    label: 'Frontend',
    icon: 'Layout',
    skills: [
      { name: 'React', level: 90 },
      { name: 'TypeScript', level: 85 },
      { name: 'JavaScript', level: 90 },
      { name: 'HTML', level: 95 },
      { name: 'CSS', level: 90 },
      { name: 'Tailwind CSS', level: 88 },
      { name: 'Bootstrap', level: 80 },
    ],
  },
  {
    id: 'backend',
    label: 'Backend',
    icon: 'Server',
    skills: [
      { name: 'Node.js', level: 85 },
      { name: 'Express', level: 82 },
      { name: 'REST API', level: 85 },
    ],
  },
  {
    id: 'database',
    label: 'Database',
    icon: 'Database',
    skills: [
      { name: 'MySQL', level: 80 },
      { name: 'Firebase Firestore', level: 85 },
    ],
  },
  {
    id: 'languages',
    label: 'Programming Languages',
    icon: 'Code2',
    skills: [
      { name: 'Java', level: 80 },
      { name: 'Python', level: 78 },
      { name: 'C', level: 75 },
      { name: 'SQL', level: 82 },
    ],
  },
  {
    id: 'tools',
    label: 'Tools',
    icon: 'Wrench',
    skills: [
      { name: 'Git', level: 88 },
      { name: 'GitHub', level: 88 },
      { name: 'VS Code', level: 92 },
      { name: 'Postman', level: 85 },
      { name: 'Figma', level: 75 },
    ],
  },
  {
    id: 'other',
    label: 'Other',
    icon: 'Sparkles',
    skills: [
      { name: 'Responsive Design', level: 88 },
      { name: 'Problem Solving', level: 85 },
      { name: 'Object-Oriented Programming', level: 82 },
      { name: 'Agile Basics', level: 75 },
    ],
  },
];

export type Project = {
  id: string;
  title: string;
  description: string;
  features: string[];
  technologies: string[];
  githubUrl: string;
  liveUrl: string;
  accent: string;
};

export const projects: Project[] = [
  {
    id: 'alfirma',
    title: 'AL FIRMA',
    description:
      'Agricultural platform connecting farmers, veterinarians, suppliers, transporters, and service providers in one unified ecosystem',
    features: [
      'Marketplace',
      'AI plant disease detection',
      'Recommendation system',
      'Chat system',
      'Equipment rental',
      'Product management',
    ],
    technologies: ['React','Flutter', 'Firebase', 'AI (Image Classification)'],
    githubUrl: 'https://github.com/B3LM0/AlFirma-App',
    liveUrl: 'https://al-firma.vercel.app/',
    accent: 'from-emerald-500 to-green-600',
  },
  {
  id: 'sidoushop26',
  title: 'SidouShop26',
  description:
    'A modern e-commerce platform designed for online accessory sellers, providing a seamless shopping experience, efficient order management ',
  features: [
    'Product catalog',
    'Shopping cart & checkout',
    'Order management',
    'Customer management',
    'Automatic shipping cost calculation',
    'Wilaya & commune selection',
    'Home & stop-desk delivery options',
    'Responsive design',
  ],
  technologies: [
    'React',
    'Vite',
    'Tailwind CSS',
    'Firebase',
    'Cloudinary',
  ],
  githubUrl: 'https://github.com/B3LM0/SidouShop26',
  liveUrl: 'https://sidoushop26.vercel.app/',
  accent: 'from-orange-500 to-red-600',
},
  {
    id: 'vet-platform',
    title: 'VetoStane',
    description:
      'A web application that combines veterinary clinic management with an integrated e-commerce system for pet products',
    features: [
      'Product catalog',
      'Appointment management (Not yet)',
      'Customer management',
      'Orders',
      'Inventory',
    ],
    technologies: ['React','NodeJS', 'Firebase'],
    githubUrl: 'https://github.com/B3LM0/Veto-Stane',
    liveUrl: 'https://veto-stane.vercel.app/',
    accent: 'from-cyan-500 to-blue-600',
  },
  {
  id: 'thinkboard',
  title: 'ThinkBoard',
  description:
    'A collaborative task management platform built with the MERN stack, enabling teams to organize projects, track progress, and manage tasks through an intuitive dashboard',
  features: [
    'User authentication',
    'Project & task management',
    'Drag-and-drop task organization',
    'Team collaboration',
    'Progress tracking',
    'Responsive dashboard',
  ],
  technologies: [
    'MongoDB',
    'Express.js',
    'React',
    'Node.js',
    'JWT',
    'Tailwind CSS',
  ],
  githubUrl: 'https://github.com/B3LM0/MERN---ThinkBoard',
  liveUrl: '#',
  accent: 'from-violet-500 to-purple-600',
},
{
  id: 'dna-sequence-analyzer',
  title: 'DNA Sequence Analyzer',
  description:
    'A bioinformatics application for analyzing DNA sequences, validating genetic data, and performing sequence pattern matching through an intuitive interface',
  features: [
    'DNA sequence validation',
    'Pattern matching',
    'Sequence analysis',
    'Nucleotide statistics',
    'Bioinformatics algorithms',
    'Interactive interface',
  ],
  technologies: [
    'Python',
    'React',
    'Bioinformatics',
  ],
  githubUrl: 'https://github.com/B3LM0/DNA-Sequence-Analysis-Mutation-Detection',
  liveUrl: 'https://dna-sequence-analysis-mutation-dete.vercel.app/',
  accent: 'from-emerald-500 to-teal-600',
},
{
  id: 'pandas cheatsheet',
  title: 'Pandas CheatSheet',
  description:
    'An interactive reference platform that provides practical Pandas and SQL examples, helping developers and data analysts quickly find syntax, queries, and code snippets',
  features: [
    'Searchable references',
    'SQL query examples',
    'Pandas code snippets',
    'Copy-to-clipboard',
    'Responsive interface',
    'Organized learning resources',
  ],
  technologies: [
    'React',
    'JavaScript',
    'Tailwind CSS',
  ],
  githubUrl: 'https://github.com/B3LM0/My-pandas-cheatsheet.git',
  liveUrl: 'https://my-pandas-cheatsheet.vercel.app/',
  accent: 'from-blue-500 to-cyan-600',
},
];

export type Experience = {
  id: string;
  role: string;
  organization: string;
  period: string;
  description: string;
  icon: string;
};

export const experiences: Experience[] = [
  {
    id: 'freelance',
    role: 'Freelance Projects',
    organization: 'Self-employed',
    period: '2024 — Present',
    description:
      'Built and delivered web applications for clients using React, Firebase, and Tailwind CSS. Handled end-to-end development from requirements to deployment.',
    icon: 'Briefcase',
  },
  {
    id: 'academic',
    role: 'Academic Projects',
    organization: 'Higher Institute of Sciences',
    period: '2023 — 2026',
    description:
      'Developed full-stack projects as part of the Software Engineering curriculum, including the AL FIRMA agricultural platform and a veterinary management system.',
    icon: 'GraduationCap',
  },
  {
    id: 'opensource',
    role: 'Open Source Contributions',
    organization: 'GitHub',
    period: 'Ongoing',
    description:
      'Contributing to open source projects, sharing reusable components, and collaborating with the developer community. (Placeholder — add your contributions here.)',
    icon: 'Github',
  },
];

export type Certification = {
  id: string;
  title: string;
  issuer: string;
  year: string;
  icon: string;
};

export const certifications: Certification[] = [
  {
    id: 'azure-fundamentals',
    title: 'Microsoft Azure Fundamentals',
    issuer: 'Microsoft',
    year: '2025',
    icon: 'Cloud',
  },
  {
    id: 'aws-cloud-practitioner',
    title: 'AWS Cloud Practitioner',
    issuer: 'Amazon Web Services',
    year: '2025',
    icon: 'Cloud',
  },
  {
    id: 'other-certs',
    title: 'Other Certifications',
    issuer: 'Various',
    year: '—',
    icon: 'Award',
  },
];

export type Language = { name: string; level: string; proficiency: number };

export const languages: Language[] = [
  { name: 'Arabic', level: 'Native', proficiency: 100 },
  { name: 'English', level: 'Upper Intermediate - B2', proficiency: 80 },
  { name: 'French', level: 'Intermediate - B1', proficiency: 60 },
];

export const interests = [
  'Full Stack Development',
  'Data Science',
  'Machine Learning',
  'Artificial Intelligence',
  'Bioinformatics',
  'Open Source',
  'Problem Solving',
];

export type Testimonial = {
  id: string;
  name: string;
  role: string;
  quote: string;
  avatarText: string;
};

export const testimonials: Testimonial[] = [
  {
    id: 't1',
    name: 'Project Supervisor',
    role: 'Higher Institute of Sciences',
    quote:
      'Boualem delivered a complex full-stack project with great attention to detail and a strong sense of ownership. One of the most dedicated students I have supervised.',
    avatarText: 'PS',
  },
  {
    id: 't2',
    name: 'Freelance Client',
    role: 'Startup Founder',
    quote:
      'Reliable, communicative, and technically sharp. Boualem turned our idea into a polished product faster than we expected.',
    avatarText: 'FC',
  },
];

export const stats = [
  { label: 'Projects', value: 10, suffix: '+' },
  { label: 'Technologies', value: 20, suffix: '+' },
  { label: 'Certifications', value: 3, suffix: '+' },
  { label: 'GitHub Contributions', value: 150, suffix: '+' },
];

export const navLinks = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'education', label: 'Education' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  //{ id: 'experience', label: 'Experience' },
  //{ id: 'certifications', label: 'Certifications' },
  { id: 'contact', label: 'Contact' },
];
