"use client";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-navy text-cream">
      {/* Background gradient with slow zoom */}
      <div className="hero-bg absolute inset-0 bg-gradient-to-br from-navy via-navy-light to-sea-dark opacity-80" />

      {/* Content */}
      <div className="relative z-10 px-6 text-center">
        <p className="mb-4 text-sm font-medium tracking-[0.3em] uppercase text-gold">
          Est. 1913 &middot; Coronado, California
        </p>
        <h1 className="font-heading text-5xl font-bold leading-tight tracking-tight sm:text-6xl md:text-7xl lg:text-8xl">
          Coronado
          <br />
          Yacht Club
        </h1>
        <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-cream/80 sm:text-xl">
          From six yachtsmen in a boathouse to Olympic champions on Glorietta
          Bay. A story told by the water.
        </p>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <div className="bounce-gentle flex flex-col items-center gap-2 text-cream/60">
          <span className="text-xs tracking-widest uppercase">Scroll</span>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M12 5v14M5 12l7 7 7-7" />
          </svg>
        </div>
      </div>

      {/* Bottom wave divider */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1440 80"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="block w-full"
          preserveAspectRatio="none"
        >
          <path
            d="M0 40C240 80 480 0 720 40C960 80 1200 0 1440 40V80H0V40Z"
            fill="#FDFBF7"
          />
        </svg>
      </div>
    </section>
  );
}
