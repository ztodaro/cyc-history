import Hero from "@/components/Hero";
import ScrollProgress from "@/components/ScrollProgress";
import Timeline from "@/components/Timeline";
import SourcesList from "@/components/SourcesList";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <ScrollProgress />
      <main>
        <Hero />
        <Timeline />
        <SourcesList />
      </main>
      <Footer />
    </>
  );
}
