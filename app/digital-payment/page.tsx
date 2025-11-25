import Footer from "@/components/Home/Footer";
import Header from "@/components/EditProfile/Header";
import PaymentPage from "@/components/DigitalPayment/PaymentPage";

export default function DigitalPaymentPage() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      <Header />
      <PaymentPage />
      <Footer />
    </main>
  );
}
