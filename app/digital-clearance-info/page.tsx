import Footer from "@/components/Home/Footer";
import Header from "@/components/EditProfile/Header";
import Summary from "@/components/DigitalClearanceInfo/Summary";

export default function DigitalClearanceInfoPage() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      <Header />
      <Summary />
      <Footer />
    </main>
  );
}
