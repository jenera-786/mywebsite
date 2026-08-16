import { BadgeCheck } from "lucide-react";
import { certifications } from "@/lib/portfolio-data";
import { Reveal, SectionHeading } from "./Reveal";

export function Certifications() {
  return (
    <section
      id="certifications"
      className="scroll-mt-24 border-y border-border bg-surface/40 py-20 sm:py-28"
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <SectionHeading eyebrow="06 — Certifications" title="Certifications" />
        </Reveal>

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {certifications.map((cert, i) => (
            <Reveal key={cert.title} delay={i * 80}>
              <div className="surface-card h-full p-6 hover:-translate-y-1 hover:border-primary/40">
                <BadgeCheck className="size-6 text-primary" />
                <h3 className="mt-4 text-base font-semibold leading-snug">{cert.title}</h3>
                <p className="mt-2 font-mono text-xs uppercase tracking-wider text-muted-foreground">
                  {cert.issuer}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
