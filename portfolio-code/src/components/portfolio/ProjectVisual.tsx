import type { Project } from "@/lib/portfolio-data";

const bars = [42, 68, 34, 80, 56, 72, 48];

export function ProjectVisual({ variant }: { variant: Project["visual"] }) {
  return (
    <div className="relative h-40 overflow-hidden rounded-xl border border-border bg-secondary/40 p-4">
      <div className="pointer-events-none absolute inset-0 grid-lines opacity-30" />
      <div className="relative h-full">
        {variant === "ml" || variant === "fraud" ? <ScatterMock /> : null}
        {variant === "map" ? <HeatMock /> : null}
        {variant === "excel" || variant === "bi" ? <DashboardMock /> : null}
      </div>
      <span className="absolute bottom-2 right-3 font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
        Illustrative preview
      </span>
    </div>
  );
}

function ScatterMock() {
  const points = Array.from({ length: 26 }, (_, i) => ({
    x: (i * 37) % 96,
    y: (i * 53) % 82,
    a: i % 3,
  }));
  return (
    <svg viewBox="0 0 100 80" className="h-full w-full" aria-hidden="true">
      <line x1="6" y1="72" x2="96" y2="72" stroke="currentColor" className="text-border" strokeWidth="0.6" />
      <line x1="6" y1="4" x2="6" y2="72" stroke="currentColor" className="text-border" strokeWidth="0.6" />
      {points.map((p, i) => (
        <circle
          key={i}
          cx={8 + p.x * 0.88}
          cy={8 + p.y * 0.72}
          r={1.8}
          className={p.a === 0 ? "fill-primary/80" : p.a === 1 ? "fill-accent/70" : "fill-muted-foreground/50"}
        />
      ))}
      <path
        d="M8 62 C 30 50, 58 34, 94 14"
        fill="none"
        strokeWidth="1.2"
        className="stroke-primary"
        strokeDasharray="3 2"
      />
    </svg>
  );
}

function HeatMock() {
  const cells = Array.from({ length: 48 }, (_, i) => (i * 7) % 10);
  return (
    <div className="grid h-full grid-cols-12 gap-1">
      {cells.map((v, i) => (
        <span
          key={i}
          className="rounded-[3px] bg-primary"
          style={{ opacity: 0.12 + (v / 10) * 0.7 }}
        />
      ))}
    </div>
  );
}

function DashboardMock() {
  return (
    <div className="flex h-full gap-3">
      <div className="flex w-1/3 flex-col gap-2">
        {[0, 1, 2].map((i) => (
          <div key={i} className="flex-1 rounded-md border border-border bg-card/70 p-2">
            <span className="block h-1.5 w-8 rounded-full bg-muted-foreground/40" />
            <span className="mt-2 block h-2 w-12 rounded-full bg-primary/70" />
          </div>
        ))}
      </div>
      <div className="flex flex-1 items-end gap-1.5 rounded-md border border-border bg-card/70 p-3">
        {bars.map((h, i) => (
          <span
            key={i}
            className={`flex-1 rounded-t-sm ${i % 3 === 0 ? "bg-accent/70" : "bg-primary/70"}`}
            style={{ height: `${h}%` }}
          />
        ))}
      </div>
    </div>
  );
}
