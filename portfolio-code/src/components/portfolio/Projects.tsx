import { useState } from "react";
import { Check, Github, Maximize2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { profile, projects, type Project } from "@/lib/portfolio-data";
import { ProjectVisual } from "./ProjectVisual";
import { Reveal, SectionHeading } from "./Reveal";

export function Projects() {
  const [selected, setSelected] = useState<Project | null>(null);

  return (
    <section id="projects" className="mx-auto max-w-6xl scroll-mt-24 px-5 py-20 sm:px-8 sm:py-28">
      <Reveal>
        <SectionHeading
          eyebrow="03 — Projects"
          title="Featured Projects"
          description="End-to-end academic and internship projects across machine learning, analytics, and business intelligence. Previews below are illustrative mockups, not real result data."
        />
      </Reveal>

      <div className="mt-10 grid gap-6 md:grid-cols-2">
        {projects.map((project, i) => (
          <Reveal key={project.name} delay={i * 70} className="h-full">
            <article className="surface-card group flex h-full flex-col p-6 hover:-translate-y-1.5 hover:border-primary/40">
              <ProjectVisual variant={project.visual} />

              <div className="mt-5 flex items-start justify-between gap-3">
                <h3 className="text-xl font-semibold">{project.name}</h3>
                {project.label ? (
                  <span className="shrink-0 rounded-full border border-accent/40 bg-accent/10 px-2.5 py-1 font-mono text-[10px] uppercase tracking-wider text-accent">
                    {project.label}
                  </span>
                ) : null}
              </div>

              <div className="mt-3 flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="rounded-md bg-secondary px-2.5 py-1 font-mono text-xs text-secondary-foreground"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                {project.description}
              </p>

              <ul className="mt-4 grid gap-2 sm:grid-cols-2">
                {project.contributions.slice(0, 4).map((c) => (
                  <li key={c} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <Check className="mt-0.5 size-3.5 shrink-0 text-primary" />
                    {c}
                  </li>
                ))}
              </ul>

              <div className="mt-6 flex flex-wrap gap-2 pt-2">
                <Button variant="secondary" size="sm" onClick={() => setSelected(project)}>
                  <Maximize2 />
                  View Project
                </Button>
              </div>
            </article>
          </Reveal>
        ))}
      </div>

      <Reveal delay={120}>
        <div className="mt-10 flex flex-col items-center gap-3 rounded-2xl border border-dashed border-border p-6 text-center">
          <p className="text-sm text-muted-foreground">
            Project code and notebooks are being published on my GitHub profile.
          </p>
          <Button asChild variant="outline" size="sm">
            <a href={profile.github} target="_blank" rel="noreferrer noopener">
              <Github />
              github.com/{profile.githubHandle}
            </a>
          </Button>
        </div>
      </Reveal>

      <Dialog open={!!selected} onOpenChange={(open) => !open && setSelected(null)}>
        <DialogContent className="max-h-[85vh] overflow-y-auto sm:max-w-lg">
          {selected ? (
            <>
              <DialogHeader>
                <DialogTitle className="text-2xl">{selected.name}</DialogTitle>
                <DialogDescription>{selected.description}</DialogDescription>
              </DialogHeader>
              <div className="mt-2 space-y-5">
                <div className="flex flex-wrap gap-2">
                  {selected.tech.map((t) => (
                    <span
                      key={t}
                      className="rounded-md bg-secondary px-2.5 py-1 font-mono text-xs text-secondary-foreground"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <div>
                  <h4 className="font-mono text-xs uppercase tracking-[0.2em] text-primary">
                    Key Contributions
                  </h4>
                  <ul className="mt-3 space-y-2">
                    {selected.contributions.map((c) => (
                      <li key={c} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <Check className="mt-0.5 size-3.5 shrink-0 text-primary" />
                        {c}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </>
          ) : null}
        </DialogContent>
      </Dialog>
    </section>
  );
}
