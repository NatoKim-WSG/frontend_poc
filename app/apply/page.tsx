import Header from "@/components/ApplyNow/Header";
import Footer from "@/components/Home/Footer";
import Hero from "@/components/ApplyNow/Hero";
import AuthSection from "@/components/ApplyNow/AuthSection";
import StepsSection from "@/components/ApplyNow/StepsSection";

export default function ApplyPage() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      <Header />
      <Hero />
      <AuthSection />
      <StepsSection />
      <Footer />
    </main>
  );
}
