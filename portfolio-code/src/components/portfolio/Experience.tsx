import { Briefcase, GraduationCap, Sparkles } from "lucide-react";
import { education, experience, highlights } from "@/lib/portfolio-data";
import { Reveal, SectionHeading } from "./Reveal";

export function Experience() {
  return (
    <section
      id="experience"
      className="scroll-mt-24 border-y border-border bg-surface/40 py-20 sm:py-28"
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="04 — Experience"
            title="Internships"
            description="Hands-on internship experience working with real-world datasets and machine learning workflows."
          />
        </Reveal>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {experience.map((item, i) => (
            <Reveal key={item.org} delay={i * 90}>
              <div className="surface-card relative h-full p-6 pl-14 hover:-translate-y-1 hover:border-primary/40">
                <span className="absolute left-6 top-7 flex size-8 items-center justify-center rounded-full bg-primary/15 text-primary">
                  <Briefcase className="size-4" />
                </span>
                <h3 className="text-lg font-semibold">{item.role}</h3>
                <p className="mt-1 text-sm text-primary">{item.org}</p>
                {item.duration ? (
                  <p className="mt-1 font-mono text-xs text-muted-foreground">
                    {item.duration}
                  </p>
                ) : null}
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                  {item.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Education() {
  return (
    <section id="education" className="mx-auto max-w-6xl scroll-mt-24 px-5 py-20 sm:px-8 sm:py-28">
      <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr]">
        <div>
          <Reveal>
            <SectionHeading eyebrow="05 — Education" title="Education" />
          </Reveal>

          <ol className="mt-10 relative space-y-8 border-l border-border pl-8">
            {education.map((item, i) => (
              <Reveal key={item.degree} delay={i * 80}>
                <li className="relative">
                  <span className="absolute -left-[2.31rem] top-1.5 flex size-6 items-center justify-center rounded-full border border-border bg-background">
                    <GraduationCap className="size-3 text-primary" />
                  </span>
                  <div className="flex flex-wrap items-center gap-3">
                    <h3 className="text-lg font-semibold">{item.degree}</h3>
                    <span className="rounded-full bg-primary/12 px-2.5 py-0.5 font-mono text-xs text-primary">
                      {item.score}
                    </span>
                  </div>
                  <p className="mt-1 text-sm text-muted-foreground">{item.school}</p>
                  <p className="mt-1 font-mono text-xs text-muted-foreground">{item.years}</p>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>

        <div>
          <Reveal>
            <SectionHeading eyebrow="Highlights" title="Key Highlights" />
          </Reveal>
          <ul className="mt-10 space-y-3">
            {highlights.map((item, i) => (
              <Reveal key={item} delay={i * 60}>
                <li className="surface-card flex items-start gap-3 p-4 text-sm leading-relaxed text-muted-foreground hover:border-primary/40">
                  <Sparkles className="mt-0.5 size-4 shrink-0 text-accent" />
                  {item}
                </li>
              </Reveal>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
