import { eras } from "@/data/timeline";
import TimelineEra from "./TimelineEra";

export default function Timeline() {
  return (
    <section className="relative mx-auto max-w-5xl px-6 py-16 md:py-24">
      <div className="space-y-0">
        {eras.map((era, index) => (
          <TimelineEra key={era.id} era={era} index={index} />
        ))}
      </div>
    </section>
  );
}
