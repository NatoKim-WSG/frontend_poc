import Footer from "@/components/Home/Footer";
import Header from "@/components/EditProfile/Header";
import Dashboard from "@/components/UserProfile/Dashboard";

export default function UserProfilePage() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      <Header />
      <Dashboard />
      <Footer />
    </main>
  );
}
