// Projects shown in the "Projects" section. Each project appears as a mini card;
// clicking it opens a window with the full details and the screenshots.
// Screenshots live in public/projects/<id>/ (JPEG, max 1600px wide).

export type ProjectCategory = 'Desktop' | 'Web' | 'Mobile' | 'Data';

export type Screenshot = {
  src: string;
  caption: string;
};

export type Project = {
  id: string;
  title: string;
  /** One line shown on the mini card. */
  tagline: string;
  category: ProjectCategory;
  year: string;
  /** Where the project comes from: personal product, client, university... */
  context: string;
  /** Full description shown in the details window. */
  description: string;
  features: string[];
  /** Technical points worth discussing (architecture, challenges, choices). */
  highlights: string[];
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  liveLabel?: string;
  /** Shown instead of the code button when the repository is private. */
  privateCodeNote?: string;
  screenshots: Screenshot[];
  accent: string;
  logo?: string;
};

export const projects: Project[] = [
  {
    id: 'vetostane',
    title: 'VetoStane',
    tagline: 'Offline management software for veterinary clinics in Algeria',
    category: 'Desktop',
    year: '2026',
    context: 'Personal product · Release candidate 1.0.0-rc.2',
    description:
      'VetoStane is a complete clinic management system (ERP) for veterinarians. It runs on the clinic PC without internet: clients and their animals, consultations, prescriptions, medicine stock with batches and expiry dates, distributors and purchase orders, invoices, payments and unpaid balances, reports and backups. The interface is available in French, Arabic (right-to-left) and English, with Algerian dinar formatting.',
    features: [
      'Client and animal records with photos',
      'Consultations and printable A5 prescriptions with QR code',
      'Medicine stock by batch, expiry warnings, FEFO order',
      'Purchase orders and deliveries from distributors',
      'Invoices, partial payments and debt tracking',
      'Financial dashboard, reports and CSV / Excel / PDF exports',
      'Users, roles and permissions (Administrator, Veterinarian, Assistant)',
      'Automatic and manual backups with safe restore',
      'French, Arabic (RTL) and English interface',
    ],
    highlights: [
      'Layered architecture: React UI → secure preload bridge → IPC handlers → services → repositories → SQLite',
      'Electron hardened: context isolation, sandbox, strict Content Security Policy, permission checks in the main process',
      'Every input validated with Zod schemas shared by the UI and the backend',
      'Money stored as integer minor units to avoid rounding errors; stock changes and their ledger written in one transaction',
      'Versioned database migrations and crash-safe startup that never deletes a damaged database',
      '140+ automated test files (Vitest + Testing Library)',
    ],
    technologies: [
      'Electron',
      'React',
      'Vite',
      'JavaScript',
      'SQLite',
      'Zod',
      'React Hook Form',
      'Vitest',
      'Astro (website)',
    ],
    liveUrl: 'https://vetostane.vercel.app',
    liveLabel: 'Product website',
    privateCodeNote: 'Commercial product: code available on request',
    screenshots: [
      { src: '/projects/vetostane/01-dashboard.jpg', caption: 'Dashboard in Arabic, right-to-left layout' },
      { src: '/projects/vetostane/02-client.jpg', caption: 'Client record' },
      { src: '/projects/vetostane/03-consultation.jpg', caption: 'Consultation' },
      { src: '/projects/vetostane/04-invoice.jpg', caption: 'Invoice' },
      { src: '/projects/vetostane/05-stock.jpg', caption: 'Stock by batch with expiry status' },
      { src: '/projects/vetostane/06-debts.jpg', caption: 'Unpaid balances' },
      { src: '/projects/vetostane/07-website.jpg', caption: 'Product website (Astro)' },
      { src: '/projects/vetostane/08-website-mobile.jpg', caption: 'Product website on mobile' },
    ],
    accent: 'from-emerald-500 to-teal-700',
    logo: '/projects/vetostane/logo.svg',
  },
  {
    id: 'alfirma',
    title: 'AL FIRMA',
    tagline: 'Mobile marketplace for farmers with AI plant disease detection',
    category: 'Mobile',
    year: '2024 – 2025',
    context: 'Team project (4 developers) · University',
    description:
      'AL FIRMA connects the Algerian agricultural community: farmers, merchants, workers, transporters, experts and veterinarians. Users publish products, offer or hire services, chat in real time and check their crops with an AI model that runs directly on the phone. The app is available in Arabic, French and English.',
    features: [
      'Marketplace: publish, search and filter products',
      'Services: consultation, expertise, workers, equipment rental, repairs, transport',
      'AI plant disease detection from a leaf photo (31 classes, 8 crops)',
      'Real-time chat with read status',
      'Push notifications for messages, likes, comments, offers and follows',
      'User roles validated by an admin',
      'Google Sign-In, light and dark theme',
      'Arabic, French and English',
    ],
    highlights: [
      'On-device inference with TensorFlow Lite: the diagnosis works without a server',
      'Firebase Cloud Functions triggered by Firestore changes send the notifications',
      'Provider for state management, ARB files for localization',
      'Landing website built with React',
    ],
    technologies: [
      'Flutter',
      'Dart',
      'Firebase',
      'Cloud Firestore',
      'Cloud Functions',
      'FCM',
      'TensorFlow Lite',
      'React (website)',
    ],
    githubUrl: 'https://github.com/B3LM0/AlFirma-App',
    liveUrl: 'https://al-firma.vercel.app/',
    liveLabel: 'Website',
    screenshots: [
      { src: '/projects/alfirma/app-01-home.jpg', caption: 'App home: AI scanner and featured products' },
      { src: '/projects/alfirma/app-02-services.jpg', caption: 'Services: rent, repairs, consultation, workers, transport, expertise' },
      { src: '/projects/alfirma/app-03-profile.jpg', caption: 'User profile with published products' },
      { src: '/projects/alfirma/app-04-roles.jpg', caption: 'Choosing a role: farmer, breeder, expert, veterinarian…' },
      { src: '/projects/alfirma/01-website.jpg', caption: 'Landing website' },
      { src: '/projects/alfirma/02-website-mobile.jpg', caption: 'Landing website on mobile' },
    ],
    accent: 'from-green-500 to-emerald-700',
    logo: '/projects/alfirma.png',
  },
  {
    id: 'sidoushop',
    title: 'SidouShop',
    tagline: 'Mobile-first e-commerce store for the Algerian market',
    category: 'Web',
    year: '2025 – 2026',
    context: 'Real online store',
    description:
      'SidouShop is an online accessories store built for traffic coming from TikTok and Instagram: a visitor sees a product, orders it in a few taps without creating an account, and pays cash on delivery. The first version used React and Firebase; the second version was rebuilt as a full-stack Node.js / MongoDB application with an admin dashboard.',
    features: [
      'Mobile-first catalog, product pages and cart',
      'Order form without registration, cash on delivery',
      'Wilaya and commune selection with automatic shipping cost',
      'Home or stop-desk delivery',
      'Tracking of the marketing source of every order (TikTok, Instagram…)',
      'Admin dashboard: orders, products, images and store settings',
      'Telegram notification for every new order',
    ],
    highlights: [
      'v2: Express REST API is the only layer that talks to MongoDB, Cloudinary and Telegram',
      'Algerian phone numbers and wilayas validated on the server',
      'Store texts, promo bar and social links editable from the admin, never hard-coded',
    ],
    technologies: [
      'React',
      'Vite',
      'Tailwind CSS',
      'Node.js',
      'Express',
      'MongoDB',
      'Firebase (v1)',
      'Cloudinary',
      'Telegram Bot API',
    ],
    githubUrl: 'https://github.com/B3LM0/SidouShop26',
    liveUrl: 'https://sidoushop26.vercel.app/',
    screenshots: [
      { src: '/projects/sidoushop/01-store.jpg', caption: 'Storefront' },
      { src: '/projects/sidoushop/02-store-mobile.jpg', caption: 'Storefront on mobile' },
    ],
    accent: 'from-orange-500 to-red-600',
    logo: '/projects/sidoushop.jpeg',
  },
  {
    id: 'veto-stane-store',
    title: 'Veto-Stane Store',
    tagline: 'Veterinary practice website with two online stores and an admin panel',
    category: 'Web',
    year: '2026',
    context: 'Personal project · First web version of VetoStane',
    description:
      'A MERN web application that combines a veterinary practice with two online stores: livestock supplies (feed, supplements, equipment) and dog and cat products. Customers create an account, fill a cart and place orders; the admin panel manages products and orders, and also the practice itself: clients, their animals, visits and printable prescriptions.',
    features: [
      'Two product catalogs: livestock and pets',
      'Customer sign-up and login',
      'Cart and orders with delivery status (pending, on the way, delivered)',
      'Admin panel: products with image upload, orders',
      'Practice management: clients, animals and visit history',
      'Prescriptions generated as PDF',
      'Arabic interface',
    ],
    highlights: [
      'Three apps: customer frontend, admin panel and Express REST API',
      'JWT authentication with bcrypt-hashed passwords',
      'Image uploads with Multer, PDF generation with jsPDF',
      'This project led to VetoStane, the offline desktop version for clinics',
    ],
    technologies: [
      'React',
      'Node.js',
      'Express',
      'MongoDB',
      'Mongoose',
      'JWT',
      'Tailwind CSS',
      'jsPDF',
    ],
    liveUrl: 'https://veto-stane.vercel.app/',
    privateCodeNote: 'Private repository',
    screenshots: [{ src: '/projects/veto-stane-store/01-home.jpg', caption: 'Home page' }],
    accent: 'from-cyan-500 to-blue-600',
    logo: '/projects/veto-stane.jpeg',
  },
  {
    id: 'lantica',
    title: "L'Antica",
    tagline: 'Restaurant website with a full digital menu',
    category: 'Web',
    year: '2026',
    context: 'Freelance · Client: L’Antica Forno, Médéa',
    description:
      'Website for the L’Antica restaurant: the complete menu (pizzas, pasta, burgers, salads, desserts and drinks), delivery zones and prices, and ordering by phone. Designed first for customers on their phones.',
    features: [
      'Full digital menu by category',
      'Search and filters',
      'Dish details with ingredients and allergens',
      'Delivery zones and rates',
      'Order by phone in one tap',
      'Responsive design',
    ],
    highlights: [
      'Menu stored as data, so the client’s dishes and prices are easy to update',
      'Built and delivered for a real client',
    ],
    technologies: ['React', 'Vite', 'Tailwind CSS', 'Lucide React'],
    githubUrl: 'https://github.com/B3LM0/lantica',
    liveUrl: 'https://lanticaforno.vercel.app/',
    screenshots: [
      { src: '/projects/lantica/01-home.jpg', caption: 'Home page' },
      { src: '/projects/lantica/02-home-mobile.jpg', caption: 'Home page on mobile' },
    ],
    accent: 'from-red-500 to-rose-700',
    logo: '/projects/lantica.jpeg',
  },
  {
    id: 'sadouki',
    title: 'Pizzeria Sadouki',
    tagline: 'Restaurant website with menu and delivery zones',
    category: 'Web',
    year: '2026',
    context: 'Freelance · Client: Pizzeria Sadouki, Algiers',
    description:
      'Website for Pizzeria Sadouki: artisanal pizzas, burgers and sandwiches, with a searchable menu, delivery zones with their rates across Algiers, and ordering by phone.',
    features: [
      'Full digital menu by category',
      'Search and filters',
      'Dish details with ingredients and allergens',
      'Delivery zone search with rates',
      'Order by phone in one tap',
      'Responsive design',
    ],
    highlights: [
      'Built and delivered for a real client',
      'Reusable menu structure shared with the L’Antica website',
    ],
    technologies: ['React', 'Vite', 'Tailwind CSS', 'Lucide React'],
    githubUrl: 'https://github.com/B3LM0/pizzeria-sadouki',
    liveUrl: 'https://pizzeria-sadouki.vercel.app/',
    screenshots: [
      { src: '/projects/sadouki/01-home.jpg', caption: 'Home page' },
      { src: '/projects/sadouki/02-home-mobile.jpg', caption: 'Home page on mobile' },
    ],
    accent: 'from-yellow-500 to-amber-600',
    logo: '/projects/sadouki.jpeg',
  },
  {
    id: 'dna-sequence-analyzer',
    title: 'DNA Sequence Analyzer',
    tagline: 'Analyse DNA sequences and detect mutations between two sequences',
    category: 'Data',
    year: '2026',
    context: 'University project · Bioinformatics',
    description:
      'A web application that analyses DNA sequences in FASTA format. It computes statistics on one sequence, translates it into protein, and compares two sequences to find and classify mutations, with a colour-coded visual alignment.',
    features: [
      'FASTA input by text or file upload, with validation',
      'Length, nucleotide counts, GC% and AT%',
      'Reverse complement, codons, start and stop codons',
      'Open reading frame (ORF) detection',
      'DNA to protein translation',
      'Mutation detection: substitutions, insertions, deletions',
      'Colour-coded alignment and protein comparison',
    ],
    highlights: [
      'Python FastAPI backend with the analysis algorithms, React + TypeScript frontend',
      'No database: every analysis is computed on request',
    ],
    technologies: ['Python', 'FastAPI', 'React', 'TypeScript', 'Tailwind CSS'],
    githubUrl: 'https://github.com/B3LM0/DNA-Sequence-Analysis-Mutation-Detection',
    liveUrl: 'https://dna-sequence-analysis-mutation-dete.vercel.app/',
    screenshots: [{ src: '/projects/dna/01-analysis.jpg', caption: 'Single sequence analysis' }],
    accent: 'from-indigo-500 to-violet-700',
  },
  {
    id: 'pandas-cheatsheet',
    title: 'Pandas CheatSheet',
    tagline: 'Searchable Pandas and SQL snippets for data analysts',
    category: 'Data',
    year: '2026',
    context: 'Personal tool',
    description:
      'An interactive reference of practical Pandas and SQL examples, organised by topic (loading, cleaning, filtering, grouping, merging, visualisation), to quickly find and copy the right syntax.',
    features: [
      'Snippets organised by category',
      'Instant search',
      'Copy to clipboard',
      'Favourites',
      'Dark mode',
      'Responsive layout',
    ],
    highlights: ['Content kept as structured data, separate from the UI components'],
    technologies: ['React', 'TypeScript', 'Tailwind CSS'],
    githubUrl: 'https://github.com/B3LM0/My-pandas-cheatsheet',
    liveUrl: 'https://my-pandas-cheatsheet.vercel.app/',
    screenshots: [
      { src: '/projects/pandas/01-snippets.jpg', caption: 'Snippets by category' },
      { src: '/projects/pandas/02-snippets-mobile.jpg', caption: 'On mobile' },
    ],
    accent: 'from-blue-500 to-cyan-600',
  },
];
