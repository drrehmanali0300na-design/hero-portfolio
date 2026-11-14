/**
 * Central profile configuration.
 * Edit every name, link, project and copy string from this single file.
 *
 * NOTE: All demo/repo URLs below are EDITABLE PLACEHOLDERS.
 * Replace them with your real project URLs — do not ship placeholder links.
 */

export const PROFILE = {
  name: "Abdul Rehman",
  firstName: "Abdul",
  lastName: "Rehman",
  role: "Full-Stack Web Developer",
  email: "drrehmanali0300na@gmail.com",
  location: "Faisalabad, Pakistan",
  availability: "Available for Opportunities",
  heroHeading: "Building Digital Experiences That Matter.",
  heroIntro:
    "I'm Abdul Rehman, a Full-Stack Web Developer crafting fast, responsive and reliable web products — from semantic HTML5, CSS3 and Bootstrap 5 frontends to solid Python and Django backends.",
  techChips: ["HTML5", "CSS3", "Bootstrap 5", "JavaScript", "Python", "Django"],
  github: "https://github.com/drrehmanali0300na-design",
  linkedin: "https://www.linkedin.com/in/abdul-rehman-69ba98416/",
  mailto: "mailto:drrehmanali0300na@gmail.com",
  portrait: "/assets/images/about.png",
  aboutImage: "/assets/images/about.png",
} as const;

export const NAV_LINKS = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "services", label: "Services" },
  { id: "contact", label: "Contact" },
] as const;

export type Skill = { name: string; level: number; tile: string };

export const SKILL_GROUPS: { title: string; blurb: string; skills: Skill[] }[] = [
  {
    title: "Frontend",
    blurb: "Semantic markup, modern styling and interactive interfaces.",
    skills: [
      { name: "HTML5", level: 95, tile: "html5" },
      { name: "CSS3", level: 92, tile: "css3" },
      { name: "Bootstrap 5", level: 88, tile: "bootstrap" },
      { name: "JavaScript", level: 85, tile: "javascript" },
    ],
  },
  {
    title: "Backend",
    blurb: "Reliable server-side logic, data models and APIs.",
    skills: [
      { name: "Python", level: 82, tile: "python" },
      { name: "Django", level: 80, tile: "django" },
    ],
  },
  {
    title: "Other",
    blurb: "Workflow and quality practices around every project.",
    skills: [
      { name: "Responsive Web Design", level: 90, tile: "responsive" },
      { name: "Git & GitHub", level: 85, tile: "git" },
      { name: "SEO Fundamentals", level: 75, tile: "seo" },
      { name: "REST API Basics", level: 78, tile: "api" },
    ],
  },
];

export type Project = {
  id: string;
  name: string;
  description: string;
  tech: string[];
  image: string;
  /** Placeholder link — replace with the real live URL. */
  demo: string;
  /** Placeholder link — replace with the real repository URL. */
  repo: string;
};

export const PROJECTS: Project[] = [
  {
    id: "01",
    name: "HAULNEX Dispatch",
    description:
      "A professional website for an American truck dispatching business — service pages, load information and a lead-generation flow built to earn trust and convert visitors into clients.",
    tech: ["HTML", "CSS", "JavaScript"],
    image: "/assets/images/projects/project-01-haulnex.jpg",
    demo: "https://example.com/demo/haulnex-dispatch",
    repo: "https://github.com/drrehmanali0300na-design/Haulnex-Dispatching-Website-",
  },
  {
    id: "02",
    name: "SearchGap SEO SaaS",
    description:
      "An SEO opportunity scanner and competitor content-gap analysis platform — it surfaces missing topics, tracks keyword movement and turns raw data into a prioritized content roadmap.",
    tech: ["Next.js", "TypeScript", "PostgreSQL"],
    image: "/assets/images/projects/project-02-searchgap.jpg",
    demo: "https://example.com/demo/searchgap-seo",
    repo: "https://github.com/drrehmanali0300na-design/searchgap-seo",
  },
  {
    id: "03",
    name: "E-Commerce Fashion Store",
    description:
      "A premium fashion e-commerce website with lookbook-style product pages, cart UX and a clean checkout flow — architected for a future Shopify Storefront API integration.",
    tech: ["HTML", "CSS", "JavaScript", "Shopify API"],
    image: "/assets/images/projects/project-03-fashion.jpg",
    demo: "https://example.com/demo/fashion-store",
    repo: "https://github.com/drrehmanali0300na-design/Voltizio-_Store",
  },
  {
    id: "04",
    name: "AI Advisor Platform",
    description:
      "An intelligent AI-powered advisor website with conversational functionality — a Django backend serves the API and session logic behind a fast, responsive chat experience.",
    tech: ["HTML", "CSS", "JavaScript", "Python", "Django"],
    image: "/assets/images/projects/project-04-ai-advisor.jpg",
    demo: "https://example.com/demo/ai-advisor",
    repo: "https://github.com/drrehmanali0300na-design/AI-Agent",
  },
  {
    id: "05",
    name: "Pharmacy Management System",
    description:
      "A pharmacy management and point-of-sale system with inventory tracking, sales, prescriptions and management reporting — powered by Django and a PostgreSQL database.",
    tech: ["Python", "Django", "JavaScript", "PostgreSQL"],
    image: "/assets/images/projects/project-05-pharmacy.jpg",
    demo: "https://example.com/demo/pharmacy-system",
    repo: "https://github.com/drrehmanali0300na-design/Tahir_Pharmacy",
  },
  {
    id: "06",
    name: "Bank Management System",
    description:
      "A Bank Management System built to manage banking records and financial operations with a web-based interface.",
    tech: ["HTML", "CSS", "JavaScript", "Python"],
    image: "/assets/images/projects/project-06-voice-assistant.jpg",
    demo: "https://example.com/demo/ai-voice-assistant",
    repo: "https://github.com/drrehmanali0300na-design/BSMS",
  },
];

export const SERVICES = [
  {
    icon: "layout",
    title: "Frontend Web Development",
    text: "Pixel-perfect, accessible interfaces built with HTML5, CSS3, Bootstrap 5 and modern JavaScript — fast to load and pleasant to use.",
  },
  {
    icon: "server",
    title: "Backend Development",
    text: "Robust Python and Django backends: clean data models, secure views and business logic that scales with your product.",
  },
  {
    icon: "smartphone",
    title: "Responsive Website Development",
    text: "Layouts that adapt beautifully to every screen — mobile, tablet and desktop — and are verified on real devices.",
  },
  {
    icon: "globe",
    title: "Business Website Development",
    text: "Professional websites for companies that need credibility online: clear structure, SEO-friendly markup and easy editing.",
  },
  {
    icon: "cart",
    title: "E-Commerce Development",
    text: "Conversion-focused online stores with product pages, carts and checkout flows — ready for Shopify or fully custom builds.",
  },
  {
    icon: "tool",
    title: "Website Maintenance",
    text: "Updates, security patches, performance tuning and small improvements — keeping your site healthy long after launch.",
  },
] as const;

export const PROCESS = [
  {
    step: "01",
    icon: "clipboard",
    title: "Planning",
    text: "We define goals, audience and scope. Every feature is mapped out before a single line of code is written.",
  },
  {
    step: "02",
    icon: "pen",
    title: "UI/UX Design",
    text: "Wireframes and a clean visual direction focused on clarity, hierarchy and conversion.",
  },
  {
    step: "03",
    icon: "code",
    title: "Development",
    text: "Semantic HTML5, modern CSS3, the Bootstrap 5 grid, JavaScript and a Python/Django backend — built in small, reviewable steps.",
  },
  {
    step: "04",
    icon: "checkCircle",
    title: "Testing & Deployment",
    text: "Cross-browser and responsive testing, performance checks, then a smooth deployment and handover.",
  },
] as const;

export const STATS = [
  { value: 6, suffix: "+", label: "Projects Completed" },
  { value: 3, suffix: "+", label: "Years of Experience" },
  { value: 12, suffix: "", label: "Technologies & Tools" },
  { value: 100, suffix: "%", label: "Responsive Builds" },
] as const;
