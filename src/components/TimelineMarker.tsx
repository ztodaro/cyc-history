"use client";

import { useScrollAnimation } from "@/hooks/useScrollAnimation";

interface TimelineMarkerProps {
  years: string;
}

export default function TimelineMarker({ years }: TimelineMarkerProps) {
  const ref = useScrollAnimation<HTMLDivElement>();

  return (
    <div ref={ref} className="reveal-scale flex flex-col items-center gap-1">
      <div className="flex h-5 w-5 items-center justify-center rounded-full border-2 border-gold bg-cream">
        <div className="h-2 w-2 rounded-full bg-gold" />
      </div>
      <span className="text-xs font-semibold text-gold whitespace-nowrap">
        {years}
      </span>
    </div>
  );
}
