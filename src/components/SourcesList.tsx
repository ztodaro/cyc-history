"use client";

import { useState } from "react";
import { sources } from "@/data/timeline";

export default function SourcesList() {
  const [open, setOpen] = useState(false);

  return (
    <section className="mx-auto max-w-3xl px-6 py-12">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-2 text-sm font-medium text-navy/60 transition-colors hover:text-navy"
      >
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={`transition-transform ${open ? "rotate-90" : ""}`}
        >
          <path d="M9 18l6-6-6-6" />
        </svg>
        Sources &amp; Bibliography ({sources.length})
      </button>

      {open && (
        <ol className="mt-4 space-y-2 pl-6 text-sm text-navy/60">
          {sources.map((source, i) => (
            <li key={i} className="list-decimal">
              {source.url ? (
                <a
                  href={source.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline decoration-gold/40 underline-offset-2 transition-colors hover:text-navy"
                >
                  {source.label}
                </a>
              ) : (
                source.label
              )}
            </li>
          ))}
        </ol>
      )}
    </section>
  );
}
