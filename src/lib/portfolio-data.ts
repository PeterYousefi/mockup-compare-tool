export type ProjectLink = { label: string; href?: string; tag?: boolean };

export type Project = {
  slug: string;
  title: string;
  tagline: string;
  description: string;
  myPart: string;
  stack: string[];
  links: ProjectLink[];
  image: string;
  featured?: boolean;
};

export const projects: Project[] = [
  {
    slug: "aegisops",
    title: "AegisOps",
    tagline: "Human-governed incident response",
    description:
      "Pulls alerts, metrics, logs, deploy history, and runbooks into one place for a simulated Checkout API outage: produces an assessment citing real evidence, proposes a reversible fix, waits for human approval, simulates the action, and logs everything in an append-only audit trail.",
    myPart:
      "Set the safety model — synthetic data only, AI output treated as untrusted and validated against strict schemas, no remediation without explicit approval. Azure deployment is design-only (Bicep templates, nothing provisioned); AI provider is a deterministic mock by default.",
    stack: ["Next.js", "TypeScript", "FastAPI", "PostgreSQL", "Docker", "GitHub Actions", "Azure Bicep"],
    links: [
      { label: "GitHub", href: "https://github.com/" },
      { label: "Azure-ready design", tag: true },
    ],
    image: "/images/aegisops.jpg",
    featured: true,
  },
  {
    slug: "falsifier",
    title: "Falsifier",
    tagline: "Exoplanet candidate triage",
    description:
      "Runs a vetting pipeline on any Kepler or TESS target — ingest, detrend, period search, seven vetting tests — returning candidate / false positive / ambiguous with a reason. A triage tool, not a detection claim.",
    myPart:
      "Set the rule that every number shown must trace to a committed data artifact, with tests enforcing it; README states plainly what's unmeasured or blocked.",
    stack: ["Python", "FastAPI", "React", "Astropy", "pytest", "GitHub Actions"],
    links: [
      { label: "Live app", href: "https://example.com" },
      { label: "GitHub", href: "https://github.com/" },
      { label: "IBM AI Builders Challenge", tag: true },
    ],
    image: "/images/falsifier.jpg",
  },
  {
    slug: "continuity",
    title: "Continuity",
    tagline: "AI storyboard generator",
    description:
      "Takes a story, style guide, and character sheet; uses GPT to split the story into scenes, then builds each image prompt from all three so the same character stays consistent across the sequence. Includes a toggle to regenerate scenes without the character sheet for comparison.",
    myPart:
      "Designed the three-document approach and added a review step to edit prompts before spending image credits. Solved a Vercel Hobby serverless timeout issue by moving image generation to an Edge Function with a 60-second timeout.",
    stack: ["Next.js 14", "TypeScript", "React", "OpenAI API", "Vercel Edge", "Tailwind"],
    links: [
      { label: "Live app", href: "https://example.com" },
      { label: "GitHub", href: "https://github.com/" },
      { label: "Demo video", href: "https://example.com" },
    ],
    image: "/images/continuity.jpg",
  },
  {
    slug: "lumina",
    title: "Lumina",
    tagline: "AI campaign generator",
    description:
      "Turns a business description into a ready-to-publish marketing campaign in minutes, with every field owner-editable before going live.",
    myPart: "Scoped the problem and defined owner-editable output plus a fallback path for API downtime.",
    stack: ["Python", "Flask", "REST APIs", "IBM watsonx"],
    links: [
      { label: "GitHub", href: "https://github.com/" },
      { label: "Demo video", href: "https://example.com" },
      { label: "IBM AI Builders Challenge", tag: true },
    ],
    image: "/images/lumina.jpg",
  },
  {
    slug: "sharp",
    title: "Sharp",
    tagline: "Betting picks dashboard",
    description:
      "Pulls live NFL odds, scores, and player props into one dashboard with a bet-slip tracker, automatic P&L/ROI, and a responsible-gambling age gate on by default.",
    myPart: "Specified the dashboard, bet-slip tracking, and the default-on age gate.",
    stack: ["SQLite", "IBM watsonx", "React", "Node/Express"],
    links: [{ label: "GitHub", href: "https://github.com/" }],
    image: "/images/sharp.jpg",
  },
  {
    slug: "geoshield",
    title: "GeoShield",
    tagline: "Civic notification tool",
    description:
      "Collapses the process of identifying which municipality a boundary touches, finding officials' contacts, and drafting a notice into a single run with a calm, professional draft.",
    myPart:
      "Defined the notification chain and required a human-in-the-loop step flagging unverified contacts before anything sends.",
    stack: [".NET", "IBM watsonx", "Llama 3.3", "GIS"],
    links: [
      { label: "GitHub", href: "https://github.com/" },
      { label: "IBM AI Builders Challenge", tag: true },
    ],
    image: "/images/geoshield.jpg",
  },
];

export const stackGroups = [
  { label: "Core", items: ["Python", "SQL", "Git & GitHub"] },
  { label: "Data", items: ["SQL reporting & validation", "Production HRIS", "Databricks"] },
  {
    label: "AI applied",
    items: ["Prompt engineering", "LLM tooling", "IBM watsonx", "OpenAI API"],
  },
  { label: "Web & deploy", items: ["Next.js", "TypeScript", "React", "Vercel"] },
  {
    label: "Currently learning",
    items: [
      "Azure AI AI-103",
      "Flask",
      "REST APIs",
      "Bicep/Terraform",
      "GitHub Actions",
      "Docker",
      "Linux & Bash",
    ],
  },
];

export const experience = [
  {
    org: "Trent University",
    role: "Grader",
    place: "Oshawa, ON",
    period: "Sep 2025 — Dec 2025",
    points: [
      "Gave specific feedback tied to the exact concept behind each mistake.",
      "Ran one-on-one debugging sessions teaching students to isolate bugs themselves.",
    ],
  },
  {
    org: "Concordia University",
    role: "HRIS Intern",
    place: "Montreal, QC",
    period: "Apr 2022 — Sep 2022",
    points: [
      "Wrote SQL queries against the university's HRIS for payroll and employee reports.",
      "Monitored data replication during an ERP modernization.",
      "Translated HR requests into precise query criteria.",
    ],
  },
  {
    org: "SCS & ECA, Concordia",
    role: "VP of Social / Social Director",
    place: "Montreal, QC",
    period: "Sep 2021 — Dec 2022",
    points: [
      "Rebuilt the event calendar around member feedback and grew participation 40%.",
      "Won Event of the Year twice out of 12 societies.",
      "Point of contact for 200 attendees and a volunteer team.",
    ],
  },
];

export const certifications = [
  { name: "Microsoft Azure Fundamentals (AZ-900)", status: "Earned" },
  { name: "Azure AI Apps & Agents Developer Associate (AI-103)", status: "In progress" },
  { name: "AWS & Databricks Cloud Integrations", status: "Earned" },
  { name: "Python 101 for Data Science", status: "Earned" },
  { name: "Data Workshop Level 2", status: "Earned" },
];

export const facts = [
  { label: "Education", value: "B.Sc. Computer Science, Trent University 2026" },
  { label: "Based in", value: "Toronto, ON" },
  { label: "Focus", value: "Backend / Data / Python" },
  { label: "Status", value: "Open to opportunities" },
];

export const navLinks = [
  { label: "Work", href: "#work" },
  { label: "Stack", href: "#stack" },
  { label: "Experience", href: "#experience" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];
