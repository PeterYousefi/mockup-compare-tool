import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";

import { PlaceholderImage } from "@/components/PlaceholderImage";
import { Reveal } from "@/components/Reveal";
import {
  certifications,
  experience,
  facts,
  navLinks,
  projects,
  stackGroups,
  type Project,
} from "@/lib/portfolio-data";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Peter Yousefi — GenAI & AI Engineer" },
      {
        name: "description",
        content:
          "Peter Yousefi is a Toronto-based AI engineer building agent and LLM systems that are measured, traceable and kept under human control.",
      },
      { property: "og:title", content: "Peter Yousefi — GenAI & AI Engineer" },
      {
        property: "og:description",
        content:
          "Agent and LLM systems that show their work: evaluation, tracing and human approval built in. AZ-900 certified.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function SectionHeading({
  eyebrow,
  title,
  lead,
}: {
  eyebrow: string;
  title: string;
  lead?: string;
}) {
  return (
    <Reveal className="max-w-2xl">
      <p className="eyebrow">{eyebrow}</p>
      <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">{title}</h2>
      {lead ? <p className="mt-4 text-base leading-relaxed text-muted-foreground">{lead}</p> : null}
    </Reveal>
  );
}

function Chip({ children }: { children: string }) {
  return (
    <span className="rounded-full border border-border bg-background px-3 py-1 font-mono text-[0.7rem] text-muted-foreground">
      {children}
    </span>
  );
}

function ProjectLinks({ project }: { project: Project }) {
  return (
    <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2">
      {project.links.map((link) =>
        link.tag ? (
          <span
            key={link.label}
            className="rounded-sm bg-primary/10 px-2 py-1 font-mono text-[0.68rem] tracking-wide text-primary"
          >
            {link.label}
          </span>
        ) : (
          <a
            key={link.label}
            href={link.href}
            target="_blank"
            rel="noreferrer noopener"
            className="group/link inline-flex items-center gap-1.5 text-sm font-medium text-primary underline decoration-primary/30 decoration-1 underline-offset-4 transition-colors hover:decoration-primary"
          >
            {link.label}
            <span aria-hidden className="transition-transform group-hover/link:translate-x-0.5">
              →
            </span>
          </a>
        ),
      )}
    </div>
  );
}

function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 bg-background/85 backdrop-blur transition-colors ${
        scrolled ? "border-b border-border" : "border-b border-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <a href="#top" className="font-display text-[1.05rem] font-semibold tracking-tight">
          Peter Yousefi
          <span className="ml-2 hidden font-mono text-[0.68rem] font-normal text-muted-foreground sm:inline">
            /ai·engineering
          </span>
        </a>

        <nav aria-label="Main" className="hidden items-center gap-7 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-mono text-xs uppercase tracking-[0.12em] text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
          <a
            href="/resume.pdf"
            className="rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Résumé
          </a>
        </nav>

        <button
          type="button"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-border md:hidden"
        >
          <span className="relative block h-3 w-4">
            <span
              className={`absolute left-0 h-px w-4 bg-foreground transition-transform ${
                open ? "top-1.5 rotate-45" : "top-0"
              }`}
            />
            <span
              className={`absolute left-0 top-1.5 h-px w-4 bg-foreground transition-opacity ${
                open ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`absolute left-0 h-px w-4 bg-foreground transition-transform ${
                open ? "top-1.5 -rotate-45" : "top-3"
              }`}
            />
          </span>
        </button>
      </div>

      {open ? (
        <div id="mobile-nav" className="border-t border-border bg-background md:hidden">
          <nav aria-label="Mobile" className="mx-auto flex max-w-6xl flex-col px-6 py-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="border-b border-border py-3 font-mono text-xs uppercase tracking-[0.12em] text-muted-foreground"
              >
                {link.label}
              </a>
            ))}
            <a
              href="/resume.pdf"
              onClick={() => setOpen(false)}
              className="mt-4 rounded-md bg-primary px-4 py-2.5 text-center text-sm font-medium text-primary-foreground"
            >
              Résumé PDF
            </a>
          </nav>
        </div>
      ) : null}
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="mx-auto max-w-6xl px-6 pb-20 pt-16 sm:pt-24">
      <div className="grid gap-14 lg:grid-cols-[1.35fr_1fr] lg:gap-16">
        <div>
          <Reveal>
            <p className="eyebrow">AI Engineer · GenAI &amp; Agents · Toronto, ON</p>
          </Reveal>
          <Reveal delay={80}>
            <h1 className="mt-6 max-w-[22ch] text-4xl font-semibold leading-[1.05] sm:text-6xl">
              I build AI systems that show their work.
            </h1>
          </Reveal>
          <Reveal delay={150}>
            <p className="mt-7 max-w-2xl text-lg leading-relaxed text-muted-foreground">
              Computer Science graduate focused on GenAI and AI engineering. Builds agent and LLM systems where every run is recorded, model output is checked before it is trusted, and results are measured rather than claimed. AZ-900 certified, currently studying for the AI-103.
            </p>
          </Reveal>
          <Reveal delay={210}>
            <div className="mt-9 flex flex-wrap items-center gap-3">
              <a
                href="#work"
                className="rounded-md bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
              >
                View work
              </a>
              <a
                href="/resume.pdf"
                className="rounded-md border border-border bg-card px-5 py-2.5 text-sm font-medium transition-colors hover:bg-secondary"
              >
                Résumé PDF
              </a>
            </div>
          </Reveal>
          <Reveal delay={260}>
            <dl className="mt-10 space-y-2 border-l-2 border-primary/30 pl-4 font-mono text-xs text-muted-foreground">
              <div>
                <dt className="sr-only">Availability</dt>
                <dd>
                  <span className="mr-2 inline-block h-1.5 w-1.5 rounded-full bg-primary align-middle" />
                  Open to GenAI and AI engineering roles · Toronto (UTC-5)
                </dd>
              </div>
              <div>
                <dt className="sr-only">Currently</dt>
                <dd>Currently: studying for the AI-103 (Azure AI Apps &amp; Agents)</dd>
              </div>
            </dl>
          </Reveal>
        </div>

        <Reveal delay={200} className="lg:pt-10">
          <div className="rounded-xl border border-border bg-card p-6 shadow-card">
            <p className="eyebrow">Profile</p>
            <p className="mt-3 font-display text-xl font-semibold">Peter Yousefi</p>
            <p className="text-sm text-muted-foreground">AI Engineer — GenAI &amp; Agents</p>

            <dl className="mt-6 space-y-4 text-sm">
              <div>
                <dt className="eyebrow">Core skills</dt>
                <dd className="mt-2 flex flex-wrap gap-1.5">
                  {["Python", "TypeScript", "LLM applications", "Azure"].map((s) => (
                    <Chip key={s}>{s}</Chip>
                  ))}
                </dd>
              </div>
              <div>
                <dt className="eyebrow">Certs</dt>
                <dd className="mt-2 text-muted-foreground">AZ-900 earned · AI-103 in progress</dd>
              </div>
              <div>
                <dt className="eyebrow">Region</dt>
                <dd className="mt-2 text-muted-foreground">Toronto, ON (UTC-5)</dd>
              </div>
              <div>
                <dt className="eyebrow">Availability</dt>
                <dd className="mt-2 text-muted-foreground">
                  Open to GenAI and AI engineering roles
                </dd>
              </div>
            </dl>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Work() {
  const featured = projects[0]!;
  const rest = projects.slice(1);

  return (
    <section id="work" className="rule-top bg-paper py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="Work"
          title="Selected projects"
          lead="Seven projects, each starting from a failure I wanted to prevent. Results are stated as measured, including the weak spots."
        />

        <Reveal className="mt-14">
          <article className="group grid overflow-hidden rounded-xl border border-border bg-card shadow-card transition-shadow hover:shadow-card-hover lg:grid-cols-2">
            <PlaceholderImage
              src={featured.image}
              alt={`${featured.title} — ${featured.tagline}`}
              label="Project image"
              className="aspect-video lg:aspect-auto lg:h-full"
              imgClassName="transition-transform duration-700 group-hover:scale-[1.02]"
            />
            <div className="p-7 sm:p-10">
              <p className="eyebrow">Featured</p>
              <h3 className="mt-3 text-2xl font-semibold sm:text-3xl">{featured.title}</h3>
              <p className="mt-1 text-sm text-primary">{featured.tagline}</p>
              <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
                {featured.description}
              </p>
              <p className="mt-4 border-l-2 border-primary/30 pl-4 text-sm leading-relaxed">
                <span className="eyebrow">Outcome</span>
                <br />
                <span className="text-muted-foreground">{featured.myPart}</span>
              </p>
              <div className="mt-6 flex flex-wrap gap-1.5">
                {featured.stack.map((s) => (
                  <Chip key={s}>{s}</Chip>
                ))}
              </div>
              <ProjectLinks project={featured} />
            </div>
          </article>
        </Reveal>

        <div className="mt-8 grid gap-8 md:grid-cols-2">
          {rest.map((project, i) => (
            <Reveal key={project.slug} delay={(i % 2) * 90}>
              <article className="group flex h-full flex-col overflow-hidden rounded-xl border border-border bg-card shadow-card transition-shadow hover:shadow-card-hover">
                <PlaceholderImage
                  src={project.image}
                  alt={`${project.title} — ${project.tagline}`}
                  label="Project image"
                  className="aspect-video"
                  imgClassName="transition-transform duration-700 group-hover:scale-[1.02]"
                />
                <div className="flex flex-1 flex-col p-7">
                  <h3 className="text-xl font-semibold">{project.title}</h3>
                  <p className="mt-1 text-sm text-primary">{project.tagline}</p>
                  <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                    {project.description}
                  </p>
                  <p className="mt-4 border-l-2 border-primary/30 pl-4 text-sm leading-relaxed">
                    <span className="eyebrow">Outcome</span>
                    <br />
                    <span className="text-muted-foreground">{project.myPart}</span>
                  </p>
                  <div className="mt-6 flex flex-wrap gap-1.5">
                    {project.stack.map((s) => (
                      <Chip key={s}>{s}</Chip>
                    ))}
                  </div>
                  <div className="mt-auto">
                    <ProjectLinks project={project} />
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Stack() {
  return (
    <section id="stack" className="rule-top py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading eyebrow="Stack" title="Tools I work in" />
        <dl className="mt-12 divide-y divide-border">
          {stackGroups.map((group, i) => (
            <Reveal key={group.label} delay={i * 60} as="div">
              <div className="grid gap-4 py-7 sm:grid-cols-[minmax(0,10rem)_1fr] sm:gap-10">
                <dt className="eyebrow pt-1">{group.label}</dt>
                <dd className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <Chip key={item}>{item}</Chip>
                  ))}
                </dd>
              </div>
            </Reveal>
          ))}
        </dl>
      </div>
    </section>
  );
}

function Experience() {
  return (
    <section id="experience" className="rule-top bg-paper py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading eyebrow="Experience" title="Where I've worked" />
        <ol className="mt-12 space-y-10">
          {experience.map((job, i) => (
            <Reveal key={job.org + job.role} delay={i * 70} as="li">
              <div className="grid gap-4 sm:grid-cols-[minmax(0,12rem)_1fr] sm:gap-10">
                <p className="font-mono text-xs text-muted-foreground sm:pt-1.5">{job.period}</p>
                <div>
                  <h3 className="text-xl font-semibold">{job.role}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {job.org} · {job.place}
                  </p>
                  <ul className="mt-4 space-y-2 text-sm leading-relaxed text-muted-foreground">
                    {job.points.map((point) => (
                      <li key={point} className="flex gap-3">
                        <span aria-hidden className="mt-2 h-1 w-1 shrink-0 rounded-full bg-primary" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="rule-top py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-14 lg:grid-cols-[1fr_1.25fr] lg:gap-16">
          <Reveal>
            <PlaceholderImage
              src="/images/peter-photo.jpg"
              alt="Portrait of Peter Yousefi"
              label="Portrait"
              className="aspect-[4/5] w-full rounded-xl border border-border shadow-card"
            />
          </Reveal>

          <div>
            <SectionHeading eyebrow="About" title="Peter Yousefi" />
            <Reveal delay={80}>
              <div className="mt-6 space-y-5 text-base leading-relaxed text-muted-foreground">
                <p>
                  Recent Computer Science graduate who likes turning messy real-world problems into
                  things people can use, then making sure they hold up in production.
                </p>
                <p>
                  Strongest hands-on work started with data — writing SQL against a live HRIS during an ERP migration where a bad record reaches someone's paycheque. That habit shapes the AI projects here: they check model output, record what happened and keep a person in the loop. Built with AI-assisted tooling, with the effort going into design, validation and testing. Passed AZ-900, studying for AI-103.
                </p>
                <p>
                  Before this, coordinated international logistics and led a student society — part
                  of why the focus stays on the person using a system, not just the system itself.
                </p>
              </div>
            </Reveal>

            <Reveal delay={140}>
              <dl className="mt-10 grid gap-x-10 gap-y-5 rounded-xl border border-border bg-card p-6 shadow-card sm:grid-cols-2">
                {facts.map((fact) => (
                  <div key={fact.label}>
                    <dt className="eyebrow">{fact.label}</dt>
                    <dd className="mt-1.5 text-sm">{fact.value}</dd>
                  </div>
                ))}
              </dl>
            </Reveal>

            <Reveal delay={180}>
              <div className="mt-10">
                <p className="eyebrow">Certifications</p>
                <ul className="mt-4 divide-y divide-border">
                  {certifications.map((cert) => (
                    <li
                      key={cert.name}
                      className="flex flex-wrap items-baseline justify-between gap-2 py-3 text-sm"
                    >
                      <span>{cert.name}</span>
                      <span
                        className={`font-mono text-[0.68rem] uppercase tracking-wide ${
                          cert.status === "Earned" ? "text-primary" : "text-muted-foreground"
                        }`}
                      >
                        {cert.status}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="rule-top bg-paper py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal className="max-w-3xl">
          <p className="eyebrow">Contact</p>
          <h2 className="mt-3 text-4xl font-semibold sm:text-5xl">Let's build something.</h2>
          <p className="mt-5 text-base leading-relaxed text-muted-foreground">
            Open to GenAI and AI engineering roles. Email is the fastest way to reach me.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <a
              href="mailto:peter@petery.org"
              className="rounded-md bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
            >
              peter@petery.org
            </a>
            <a
              href="https://www.linkedin.com/in/peteryo"
              target="_blank"
              rel="noreferrer noopener"
              className="rounded-md border border-border bg-card px-5 py-2.5 text-sm font-medium transition-colors hover:bg-secondary"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/PeterYousefi"
              target="_blank"
              rel="noreferrer noopener"
              className="rounded-md border border-border bg-card px-5 py-2.5 text-sm font-medium transition-colors hover:bg-secondary"
            >
              GitHub
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Index() {
  const year = new Date().getFullYear();

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Work />
        <Stack />
        <Experience />
        <About />
        <Contact />
      </main>
      <footer className="rule-top py-10">
        <div className="mx-auto max-w-6xl px-6">
          <p className="font-mono text-xs text-muted-foreground">
            © {year} Peter Yousefi · Toronto, ON (UTC-5)
          </p>
        </div>
      </footer>
    </div>
  );
}
