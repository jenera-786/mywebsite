import { BarChart3, Braces, Brain, Database, LineChart } from "lucide-react";
import { profile } from "@/lib/portfolio-data";
import { Reveal, SectionHeading } from "./Reveal";

const foundations = [
  { icon: Braces, label: "Python" },
  { icon: Brain, label: "Machine Learning" },
  { icon: LineChart, label: "Data Analysis" },
  { icon: BarChart3, label: "Data Visualization" },
  { icon: Database, label: "SQL" },
];

export function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl scroll-mt-24 px-5 py-20 sm:px-8 sm:py-28">
      <Reveal>
        <SectionHeading eyebrow="01 — About" title="About Me" />
      </Reveal>

      <div className="mt-10 grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
        <Reveal delay={80}>
          <div className="space-y-5 text-base leading-relaxed text-muted-foreground">
            <p>
              I am a Data Science fresher with a strong foundation in Python, machine
              learning, data analysis, data visualization, and SQL. My focus is on turning
              raw datasets into clear, decision-ready insights through careful preparation,
              modelling, and visual storytelling.
            </p>
            <p>{profile.objective}</p>
            <p>
              Through academic projects and internships, I have worked on end-to-end
              workflows — from data cleaning and feature engineering to model training,
              evaluation, and dashboard development in Power BI and Tableau.
            </p>
          </div>
        </Reveal>

        <Reveal delay={160}>
          <div className="surface-card p-6">
            <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-primary">
              Core Foundation
            </h3>
            <ul className="mt-5 space-y-3">
              {foundations.map(({ icon: Icon, label }) => (
                <li
                  key={label}
                  className="flex items-center gap-3 rounded-xl border border-border bg-secondary/40 px-4 py-3 text-sm"
                >
                  <Icon className="size-4 text-primary" />
                  {label}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
