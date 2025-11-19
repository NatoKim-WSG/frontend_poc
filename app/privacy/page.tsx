import Header from "@/components/Privacy/Header";
import Hero from "@/components/Privacy/Hero";
import PolicyContent from "@/components/Privacy/PolicyContent";
import Footer from "@/components/Home/Footer";

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      <Header />
      <Hero />
      <PolicyContent />
      <Footer />
    </main>
  );
}
