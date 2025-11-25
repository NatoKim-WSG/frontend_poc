import Footer from "@/components/Home/Footer";
import Header from "@/components/EditProfile/Header";
import Scheduler from "@/components/ScheduleAppointment/Scheduler";

export default function ScheduleAppointmentPage() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      <Header />
      <Scheduler />
      <Footer />
    </main>
  );
}
