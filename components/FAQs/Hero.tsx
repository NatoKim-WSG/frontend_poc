import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#072850] text-white">
      <div className="absolute inset-0 opacity-20" style={{ backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.35) 2px, transparent 2px)", backgroundSize: "40px 40px" }}></div>
      <div className="relative max-w-5xl mx-auto px-4 md:px-6 lg:px-8 py-20 text-center">
        <div className="inline-flex items-center gap-2 bg-yellow-400 text-gray-900 px-5 py-2 rounded-full font-semibold mb-6 shadow-lg">
          <i className="fas fa-circle-question"></i>
          Help Center
        </div>
        <h1 className="text-3xl md:text-5xl font-bold mb-6">Frequently Asked Questions</h1>
        <p className="text-lg text-gray-200 mb-8">
          Find answers to common questions about NBI Clearance applications, renewals, and other services offered by the
          National Bureau of Investigation.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/apply#new"
            className="bg-yellow-400 text-gray-900 px-8 py-3 rounded-full font-semibold hover:bg-yellow-300 transition-colors shadow-lg"
          >
            Apply for Clearance
          </Link>
          <Link
            href="/branches"
            className="border border-white/40 px-8 py-3 rounded-full font-semibold text-white hover:bg-white/10 transition-colors"
          >
            Find Branches
          </Link>
        </div>
      </div>
      <div className="absolute bottom-0 w-full h-10 bg-white rounded-t-[60%] translate-y-2"></div>
    </section>
  );
}
