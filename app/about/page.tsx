import Header from "@/components/About/Header";
import Footer from "@/components/About/Footer";
import Hero from "@/components/About/Hero";
import HistorySection from "@/components/About/HistorySection";
import MandateSection from "@/components/About/MandateSection";
import EvolutionSection from "@/components/About/EvolutionSection";
import FoundationSection from "@/components/About/FoundationSection";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      <Header />
      <Hero />
      <HistorySection />
      <MandateSection />
      <EvolutionSection />
      <FoundationSection />
      <Footer />
    </main>
  );
}
