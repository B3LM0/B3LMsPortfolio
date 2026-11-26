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
  location: 'Algiers, Algeria',
  email: 'benyahia.boualem@yahoo.com',
  phone: '+213 673 128 102',
  cvUrl: '/CV_BoualemBENYAHIA.pdf',
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
    degree: "Master's Degree in Bioinformatics",
    institution: 'University of Science and Technology Houari Boumediene (USTHB)',
    year: '2025 - present',
    grade: 'In progress',
    description:
      'Combining computer science, data analysis and biology: algorithms for biological sequences, data processing and machine learning applied to life sciences.',
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

export { projects, type Project } from './projects';

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
