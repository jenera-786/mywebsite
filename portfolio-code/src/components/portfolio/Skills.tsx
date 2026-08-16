import { skillGroups } from "@/lib/portfolio-data";
import { Reveal, SectionHeading } from "./Reveal";

export function Skills() {
  return (
    <section
      id="skills"
      className="scroll-mt-24 border-y border-border bg-surface/40 py-20 sm:py-28"
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="02 — Skills"
            title="Technical Skills"
            description="Tools and technologies I use across the data workflow — from analysis and modelling to visualization and delivery."
          />
        </Reveal>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group, i) => (
            <Reveal key={group.title} delay={i * 70}>
              <div className="surface-card h-full p-6 hover:-translate-y-1 hover:border-primary/40">
                <div className="flex items-baseline justify-between">
                  <h3 className="text-lg font-semibold">{group.title}</h3>
                  <span className="font-mono text-xs text-muted-foreground">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <div className="mt-5 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-lg border border-border bg-secondary/50 px-3 py-1.5 text-sm text-secondary-foreground"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
