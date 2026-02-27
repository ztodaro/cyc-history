import type { TimelineQuote } from "@/data/timeline";

interface QuoteBlockProps {
  quote: TimelineQuote;
}

export default function QuoteBlock({ quote }: QuoteBlockProps) {
  return (
    <blockquote className="mt-6 border-l-4 border-gold pl-4">
      <p className="text-base italic leading-relaxed text-navy/80">
        &ldquo;{quote.text}&rdquo;
      </p>
      <cite className="mt-2 block text-sm font-medium not-italic text-navy/60">
        {quote.attribution}
      </cite>
    </blockquote>
  );
}
