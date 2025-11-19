import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#082346] text-white">
      <div className="absolute inset-0 opacity-20" style={{ backgroundImage: "radial-gradient(#ffffff40 1px, transparent 1px)", backgroundSize: "40px 40px" }}></div>
      <div className="relative max-w-6xl mx-auto px-4 md:px-6 lg:px-8 py-20 text-center">
        <div className="inline-flex items-center gap-2 bg-yellow-400 text-gray-900 px-5 py-2 rounded-full font-semibold mb-6 shadow-lg">
          <i className="fas fa-location-dot"></i>
          Find Nearby Locations
        </div>
        <h1 className="text-3xl md:text-5xl font-bold mb-6">NBI Branch Locator</h1>
        <p className="text-lg text-gray-200 max-w-3xl mx-auto mb-10">
          Find the nearest NBI office where you can process your clearance and other NBI services. Our branches are
          located nationwide for your convenience.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link
            href="/apply#new"
            className="px-8 py-3 rounded-full bg-yellow-400 text-gray-900 font-semibold hover:bg-yellow-300 transition-colors shadow-lg"
          >
            Schedule an Appointment
          </Link>
          <Link
            href="/faqs"
            className="px-8 py-3 rounded-full border border-white/40 text-white font-semibold hover:bg-white/10 transition-colors"
          >
            Clearance FAQs
          </Link>
        </div>
      </div>
      <div className="absolute bottom-0 w-full h-10 bg-white rounded-t-[60%] translate-y-2"></div>
    </section>
  );
}
