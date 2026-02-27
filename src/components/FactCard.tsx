import type { TimelineFact } from "@/data/timeline";

interface FactCardProps {
  facts: TimelineFact[];
}

export default function FactCard({ facts }: FactCardProps) {
  return (
    <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
      {facts.map((fact) => (
        <div
          key={fact.label}
          className="rounded-lg bg-navy/5 px-4 py-3 text-center"
        >
          <div className="font-heading text-xl font-bold text-navy sm:text-2xl">
            {fact.value}
          </div>
          <div className="mt-1 text-xs text-navy/60">{fact.label}</div>
        </div>
      ))}
    </div>
  );
}
