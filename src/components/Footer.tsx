export default function Footer() {
  return (
    <footer className="bg-navy px-6 py-12 text-center text-cream/60">
      <div className="mx-auto max-w-3xl">
        <p className="font-heading text-lg font-semibold text-gold">
          Coronado Yacht Club
        </p>
        <p className="mt-1 text-sm">
          1631 Strand Way &middot; Coronado, CA 92118
        </p>
        <p className="mt-4 text-xs text-cream/40">
          This history was compiled from public sources including the CYC
          website, San Diego History Center archives, Port of San Diego records,
          and local news reporting.
        </p>
        <p className="mt-2 text-xs text-cream/30">
          &copy; {new Date().getFullYear()} &middot; Built with care for the
          Coronado community
        </p>
      </div>
    </footer>
  );
}
