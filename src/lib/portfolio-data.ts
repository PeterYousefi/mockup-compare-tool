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
    slug: "agent-flight-recorder",
    title: "Agent Flight Recorder",
    tagline: "An execution control plane for AI agents",
    description:
      "Agent jobs can fail after queuing, spend budget before timing out, or run twice after a crash, and leave no record of why. This control plane stores every attempt, event and cost, so a failed run can be inspected, retried or replayed without losing its history.",
    myPart:
      "Retries with backoff, dead-letter handling and per-run budget limits, with tracing from API to worker. Backed by 195 automated tests across unit, database, API, emulator and browser layers.",
    stack: ["TypeScript", "Fastify", "React", "PostgreSQL", "Azure Service Bus", "OpenTelemetry", "Docker"],
    links: [
      { label: "Live demo", href: "https://agent-recorder-demo.canadacentral.cloudapp.azure.com" },
      { label: "GitHub", href: "https://github.com/PeterYousefi/agent-flight-recorder" },
    ],
    image: "/images/afr.jpg",
    featured: true,
  },
  {
    slug: "crawlops",
    title: "CrawlOps",
    tagline: "Reliability checks for AI web-research agents",
    description:
      "A research agent can return a successful response with an empty, malformed or poorly sourced answer. CrawlOps grades every run against a written contract using seven deterministic checks, then labels it success, partial or failed with a recorded reason.",
    myPart:
      "Failures are classified and retries are bounded. Reliability trends come from stored runs, so reviewing them costs zero API calls.",
    stack: ["TypeScript", "Fastify", "React", "PostgreSQL", "Prisma", "Docker", "Azure Container Apps"],
    links: [
      { label: "Live demo", href: "https://crawlops-web.redfield-5f7e6fbf.canadacentral.azurecontainerapps.io" },
      { label: "GitHub", href: "https://github.com/PeterYousefi/crawlops" },
      { label: "Demo video", href: "https://youtu.be/1shisrFzWMs" },
    ],
    image: "/images/crawlops.jpg",
  },
  {
    slug: "agentdrift",
    title: "AgentDrift",
    tagline: "Detection of risky AI-agent data movement",
    description:
      "Actions that are each permitted can still add up to data exfiltration. AgentDrift combines statistical baselines with a 15-minute window that links reads, staging and sends. Every report cites real events, and a human approves any simulated response.",
    myPart:
      "On 380 held-out synthetic runs, precision rose from 45.5% to 71.4% and false alarms fell from 60% to 20%. Recall stayed at 55.6%, and the results are published as measured.",
    stack: ["Python", "FastAPI", "React", "Azure Table Storage", "pytest"],
    links: [
      { label: "Live demo", href: "https://agentdrift-personal-demo.azurewebsites.net" },
      { label: "GitHub", href: "https://github.com/PeterYousefi/agentdrift" },
    ],
    image: "/images/agentdrift.jpg",
  },
  {
    slug: "aegisops",
    title: "AegisOps",
    tagline: "Human-governed incident response",
    description:
      "Pulls alerts, metrics, logs, deploy history, and runbooks into one place for a simulated Checkout API outage: produces an assessment citing real evidence, proposes a reversible fix, waits for human approval, simulates the action, and logs everything in an append-only audit trail.",
    myPart:
      "AI output is treated as untrusted and validated against strict schemas, with no remediation without explicit approval. Synthetic data only; Azure deployment is design-only (Bicep templates, nothing provisioned) and the AI provider is a deterministic mock by default.",
    stack: ["Next.js", "TypeScript", "FastAPI", "PostgreSQL", "Docker", "GitHub Actions", "Azure Bicep"],
    links: [
      { label: "GitHub", href: "https://github.com/PeterYousefi/AegisOps" },
      { label: "Azure-ready design", tag: true },
    ],
    image: "/images/aegisops.jpg",
  },
  {
    slug: "falsifier",
    title: "Falsifier",
    tagline: "Exoplanet candidate triage",
    description:
      "Runs a vetting pipeline on any Kepler or TESS target — ingest, detrend, period search, seven vetting tests — returning candidate / false positive / ambiguous with a reason. A triage tool, not a detection claim.",
    myPart:
      "Every number shown traces to a committed data artifact, with tests enforcing it, and the README states plainly what is unmeasured or blocked.",
    stack: ["Python", "FastAPI", "React", "Astropy", "pytest", "GitHub Actions"],
    links: [
      { label: "Live app", href: "https://falsifier.vercel.app" },
      { label: "GitHub", href: "https://github.com/PeterYousefi/Falsifier" },
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
      "A review step lets you edit prompts before spending image credits. A Vercel Hobby serverless timeout was fixed by moving image generation to an Edge Function with a 60-second timeout.",
    stack: ["Next.js 14", "TypeScript", "React", "OpenAI API", "Vercel Edge", "Tailwind"],
    links: [
      { label: "Live app", href: "https://continuity-omega.vercel.app" },
      { label: "GitHub", href: "https://github.com/PeterYousefi/Continuity" },
      { label: "Demo video", href: "https://youtu.be/uUA3l0dTKBk" },
    ],
    image: "/images/continuity.jpg",
  },
  {
    slug: "lumina",
    title: "Lumina",
    tagline: "AI campaign generator",
    description:
      "Turns a business description into a ready-to-publish marketing campaign in minutes, with every field owner-editable before going live.",
    myPart: "Output is owner-editable before publishing, with a fallback path for API downtime.",
    stack: ["Python", "Flask", "REST APIs", "IBM watsonx"],
    links: [
      { label: "GitHub", href: "https://github.com/PeterYousefi/Lumina" },
      { label: "Demo video", href: "https://youtu.be/zZhvo4hOvd0" },
      { label: "IBM AI Builders Challenge", tag: true },
    ],
    image: "/images/lumina.jpg",
  },
];

export const stackGroups = [
  { label: "Core", items: ["Python", "TypeScript", "JavaScript", "SQL", "Git & GitHub"] },
  {
    label: "AI applied",
    items: [
      "LLM applications",
      "OpenAI API",
      "Azure OpenAI",
      "IBM watsonx",
      "Structured-output validation",
      "Evaluation harnesses",
      "Agent observability",
    ],
  },
  {
    label: "Backend & data",
    items: ["FastAPI", "Fastify", "Flask", "Node.js", "PostgreSQL", "Prisma", "SQLAlchemy", "Pydantic", "SQL reporting & validation"],
  },
  { label: "Web", items: ["React", "Next.js", "Tailwind"] },
  {
    label: "Cloud & testing",
    items: ["Azure", "Docker", "GitHub Actions", "OpenTelemetry", "pytest", "Vitest", "Playwright"],
  },
  { label: "Currently learning", items: ["Azure AI AI-103", "Bicep/Terraform", "Linux & Bash"] },
];

export const experience = [
  {
    org: "Trent University",
    role: "Teaching Assistant",
    place: "Oshawa, ON",
    period: "Sep 2025 — Dec 2025",
    points: [
      "Replaced plain right-or-wrong marking with comments that name the exact concept behind each mistake.",
      "Ran one-on-one debugging sessions that taught students to isolate bugs themselves, and wrote study materials for the topics they found hardest.",
    ],
  },
  {
    org: "Concordia University",
    role: "HRIS Specialist (Intern)",
    place: "Montreal, QC",
    period: "Apr 2022 — Sep 2022",
    points: [
      "Wrote joined SQL queries against the live HR system to produce the employee and payroll reports its built-in tools could not.",
      "Checked data replication during an ERP modernization and corrected discrepancies before they reached payroll.",
    ],
  },
  {
    org: "SCS & ECA, Concordia",
    role: "VP of Social / Social Director",
    place: "Montreal, QC",
    period: "Sep 2021 — Dec 2022",
    points: [
      "Rebuilt the event calendar around member feedback and shared ownership across an 8-person committee, lifting active participation by 40%.",
      "Won Event of the Year twice among 12 societies.",
      "Point of contact for 200+ attendees and a volunteer team.",
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
  { label: "Education", value: "Bachelor of Computer Science, Trent University, 2023 – 2026" },
  { label: "Based in", value: "Toronto, ON" },
  { label: "Focus", value: "GenAI / AI engineering / agents" },
  { label: "Status", value: "Open to opportunities" },
];

export const navLinks = [
  { label: "Work", href: "#work" },
  { label: "Stack", href: "#stack" },
  { label: "Experience", href: "#experience" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];
