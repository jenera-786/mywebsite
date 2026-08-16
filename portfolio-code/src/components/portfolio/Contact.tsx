import { Download, Github, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { profile } from "@/lib/portfolio-data";
import { Reveal, SectionHeading } from "./Reveal";

export function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden hero-gradient scroll-mt-24">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
        <Reveal>
          <SectionHeading
            eyebrow="07 — Contact"
            title="Let's Connect"
            description="I am actively looking for entry-level opportunities in Data Science, Data Analytics, Machine Learning, and related data-driven roles."
          />
        </Reveal>

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          <Reveal delay={60}>
            <a
              href={`mailto:${profile.email}`}
              className="surface-card flex h-full items-start gap-4 p-6 hover:-translate-y-1 hover:border-primary/40"
            >
              <Mail className="size-5 shrink-0 text-primary" />
              <span>
                <span className="block text-xs uppercase tracking-wider text-muted-foreground">
                  Email
                </span>
                <span className="mt-1 block break-all text-sm">{profile.email}</span>
              </span>
            </a>
          </Reveal>
          <Reveal delay={130}>
            <a
              href={`tel:${profile.phone}`}
              className="surface-card flex h-full items-start gap-4 p-6 hover:-translate-y-1 hover:border-primary/40"
            >
              <Phone className="size-5 shrink-0 text-primary" />
              <span>
                <span className="block text-xs uppercase tracking-wider text-muted-foreground">
                  Phone
                </span>
                <span className="mt-1 block text-sm">{profile.phone}</span>
              </span>
            </a>
          </Reveal>
          <Reveal delay={200}>
            <div className="surface-card flex h-full items-start gap-4 p-6">
              <MapPin className="size-5 shrink-0 text-primary" />
              <span>
                <span className="block text-xs uppercase tracking-wider text-muted-foreground">
                  Location
                </span>
                <span className="mt-1 block text-sm">{profile.location}</span>
              </span>
            </div>
          </Reveal>
        </div>

        <Reveal delay={260}>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild size="lg">
              <a href={`mailto:${profile.email}`}>
                <Mail />
                Email Me
              </a>
            </Button>
            <Button asChild size="lg" variant="outline">
              <a href={profile.linkedin} target="_blank" rel="noreferrer noopener">
                <Linkedin />
                LinkedIn
              </a>
            </Button>
            <Button asChild size="lg" variant="outline">
              <a href={profile.github} target="_blank" rel="noreferrer noopener">
                <Github />
                GitHub
              </a>
            </Button>
            <Button asChild size="lg" variant="secondary">
              <a href={profile.resume} download>
                <Download />
                Download Resume
              </a>
            </Button>
          </div>
        </Reveal>
      </div>

      <footer className="border-t border-border">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-5 py-6 text-sm text-muted-foreground sm:flex-row sm:px-8">
          <p>© {new Date().getFullYear()} {profile.name}</p>
          <p className="font-mono text-xs">Data Science · Machine Learning · Analytics</p>
        </div>
      </footer>
    </section>
  );
}
