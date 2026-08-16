import { ArrowRight, Download, Github, Linkedin, Mail, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { profile } from "@/lib/portfolio-data";
import { Reveal } from "./Reveal";

const focusAreas = [
  "Python",
  "Machine Learning",
  "SQL",
  "Power BI",
  "Tableau",
];

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden hero-gradient">
      <div className="pointer-events-none absolute inset-0 grid-lines opacity-40 [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,black,transparent)]" />
      <div className="relative mx-auto max-w-6xl px-5 pb-20 pt-32 sm:px-8 sm:pb-28 sm:pt-40">
        <div className="grid items-center gap-12 lg:grid-cols-[1.15fr_0.85fr]">
          <div>
            <Reveal>
              <span className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3 py-1.5 text-xs text-muted-foreground">
                <span className="size-1.5 rounded-full bg-primary" />
                Open to entry-level Data Science roles
              </span>
            </Reveal>

            <Reveal delay={80}>
              <h1 className="mt-6 text-4xl font-semibold leading-[1.05] sm:text-6xl">
                <span className="text-gradient">{profile.name}</span>
              </h1>
            </Reveal>

            <Reveal delay={140}>
              <p className="mt-4 font-mono text-sm text-primary sm:text-base">
                {profile.role}
              </p>
            </Reveal>

            <Reveal delay={200}>
              <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
                {profile.intro}
              </p>
            </Reveal>

            <Reveal delay={260}>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button asChild size="lg">
                  <a href="#projects">
                    View My Projects
                    <ArrowRight />
                  </a>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <a href={profile.resume} download>
                    <Download />
                    Download Resume
                  </a>
                </Button>
              </div>
            </Reveal>

            <Reveal delay={320}>
              <div className="mt-8 flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                <a
                  className="inline-flex items-center gap-2 transition-colors hover:text-primary"
                  href={profile.github}
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <Github className="size-4" /> GitHub
                </a>
                <a
                  className="inline-flex items-center gap-2 transition-colors hover:text-primary"
                  href={profile.linkedin}
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <Linkedin className="size-4" /> LinkedIn
                </a>
                <a
                  className="inline-flex items-center gap-2 transition-colors hover:text-primary"
                  href={`mailto:${profile.email}`}
                >
                  <Mail className="size-4" /> Email
                </a>
                <span className="inline-flex items-center gap-2">
                  <MapPin className="size-4" /> {profile.location}
                </span>
              </div>
            </Reveal>
          </div>

          <Reveal delay={220}>
            <div className="surface-card p-5 sm:p-6">
              <div className="flex items-center gap-2 border-b border-border pb-3">
                <span className="size-2.5 rounded-full bg-destructive/70" />
                <span className="size-2.5 rounded-full bg-accent/70" />
                <span className="size-2.5 rounded-full bg-primary/70" />
                <span className="ml-2 font-mono text-xs text-muted-foreground">
                  profile.py
                </span>
              </div>
              <pre className="mt-4 overflow-x-auto font-mono text-[13px] leading-6 text-muted-foreground">
                <code>{`profile = {
  "name": "Jenera Jaani Basha",
  "title": "Data Science Fresher",
  "location": "Tirupur, Tamil Nadu",
  "focus": [
      "Machine Learning",
      "Data Analysis",
      "Data Visualization",
  ],
  "status": "Open to opportunities",
}`}</code>
              </pre>
              <div className="mt-5 flex flex-wrap gap-2 border-t border-border pt-4">
                {focusAreas.map((item) => (
                  <span
                    key={item}
                    className="rounded-full bg-secondary px-3 py-1 font-mono text-xs text-secondary-foreground"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
