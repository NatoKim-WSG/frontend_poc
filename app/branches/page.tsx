import Header from "@/components/Branches/Header";
import Footer from "@/components/Branches/Footer";
import Hero from "@/components/Branches/Hero";
import IntroSection from "@/components/Branches/IntroSection";
import RegionList from "@/components/Branches/RegionList";

export default function BranchesPage() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      <Header />
      <Hero />
      <IntroSection />
      <RegionList />
      <Footer />
    </main>
  );
}
