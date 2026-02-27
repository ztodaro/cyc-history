"use client";

import Image from "next/image";
import type { TimelineEra as TimelineEraType } from "@/data/timeline";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import FactCard from "./FactCard";
import QuoteBlock from "./QuoteBlock";

interface TimelineEraProps {
  era: TimelineEraType;
  index: number;
}

export default function TimelineEra({ era, index }: TimelineEraProps) {
  const isEven = index % 2 === 0;

  return (
    <div className="relative grid grid-cols-[24px_1fr] gap-4 md:grid-cols-[1fr_48px_1fr] md:gap-8">
      {/* Desktop: Left column */}
      <div className="hidden md:block">
        {isEven ? <EraContent era={era} /> : null}
      </div>

      {/* Desktop: Center line + marker */}
      <div className="relative hidden items-start justify-center md:flex">
        <div className="absolute inset-y-0 left-1/2 w-px -translate-x-1/2 bg-gold/30" />
        <div className="relative z-10 mt-2 flex h-6 w-6 items-center justify-center rounded-full border-2 border-gold bg-cream">
          <div className="h-2.5 w-2.5 rounded-full bg-gold" />
        </div>
      </div>

      {/* Desktop: Right column */}
      <div className="hidden md:block">
        {!isEven ? <EraContent era={era} /> : null}
      </div>

      {/* Mobile: line on left */}
      <div className="relative flex justify-center md:hidden">
        <div className="absolute inset-y-0 left-1/2 w-px -translate-x-1/2 bg-gold/30" />
        <div className="relative z-10 mt-2 flex h-5 w-5 items-center justify-center rounded-full border-2 border-gold bg-cream">
          <div className="h-2 w-2 rounded-full bg-gold" />
        </div>
      </div>

      {/* Mobile: content on right */}
      <div className="md:hidden">
        <EraContent era={era} />
      </div>
    </div>
  );
}

interface EraContentProps {
  era: TimelineEraType;
}

function EraContent({ era }: EraContentProps) {
  const ref = useScrollAnimation<HTMLElement>();

  return (
    <article
      ref={ref}
      className="reveal pb-12"
    >
      {/* Era gradient banner */}
      <div
        className="mb-4 h-2 w-16 rounded-full md:w-24"
        style={{
          background: `linear-gradient(to right, ${era.gradientFrom}, ${era.gradientTo})`,
        }}
      />

      <time className="text-sm font-semibold tracking-wider text-gold">
        {era.years}
      </time>

      <h2 className="font-heading mt-1 text-2xl font-bold text-navy sm:text-3xl">
        {era.title}
      </h2>

      <p className="mt-3 text-base font-medium leading-relaxed text-navy/70">
        {era.summary}
      </p>

      {era.image && (
        <figure className="mt-6 overflow-hidden rounded-lg">
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg bg-navy/5">
            <Image
              src={era.image.src}
              alt={era.image.alt}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
              loading="lazy"
            />
          </div>
          <figcaption className="mt-2 text-xs leading-relaxed text-navy/50">
            {era.image.caption}
            {era.image.credit && (
              <span className="block mt-0.5 text-navy/30">
                Photo: {era.image.credit}
              </span>
            )}
          </figcaption>
        </figure>
      )}

      <div className="mt-4 space-y-3">
        {era.paragraphs.map((p, i) => (
          <p key={i} className="text-sm leading-relaxed text-navy/80 sm:text-base">
            {p}
          </p>
        ))}
      </div>

      {era.quote && <QuoteBlock quote={era.quote} />}
      {era.facts && <FactCard facts={era.facts} />}
    </article>
  );
}
