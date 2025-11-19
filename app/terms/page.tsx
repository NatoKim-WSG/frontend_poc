import Header from "@/components/Terms/Header";
import Hero from "@/components/Terms/Hero";
import TermsContent from "@/components/Terms/TermsContent";
import Footer from "@/components/Home/Footer";

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      <Header />
      <Hero />
      <TermsContent />
      <Footer />
    </main>
  );
}
