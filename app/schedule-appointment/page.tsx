import Footer from "@/components/Home/Footer";
import Header from "@/components/EditProfile/Header";
import Scheduler from "@/components/ScheduleAppointment/Scheduler";
import Link from "next/link";

export default function ScheduleAppointmentPage() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      <Header />
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        <div className="py-4">
          <Link
            href="/user-profile"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#0B2C5A] hover:underline"
          >
            <i className="fas fa-arrow-left text-xs"></i>
            Back to Profile
          </Link>
        </div>
      </div>
      <Scheduler />
      <Footer />
    </main>
  );
}
