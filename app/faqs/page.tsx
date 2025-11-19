import Header from "@/components/FAQs/Header";
import Footer from "@/components/FAQs/Footer";
import Hero from "@/components/FAQs/Hero";
import FAQSections from "@/components/FAQs/FAQSections";
import ContactSection from "@/components/FAQs/ContactSection";
import MessageSection from "@/components/FAQs/MessageSection";

export default function FAQPage() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      <Header />
      <Hero />
      <FAQSections />
      <ContactSection />
      <MessageSection />
      <Footer />
    </main>
  );
}
