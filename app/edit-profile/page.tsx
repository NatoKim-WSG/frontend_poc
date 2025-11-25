import Footer from "@/components/Home/Footer";
import Header from "@/components/EditProfile/Header";
import IntroCard from "@/components/EditProfile/IntroCard";
import ProfileForm from "@/components/EditProfile/ProfileForm";

export default function EditProfilePage() {
  return (
    <main className="min-h-screen bg-[#F4F7FB] text-gray-900">
      <Header />
      <IntroCard />
      <ProfileForm />
      <Footer />
    </main>
  );
}
