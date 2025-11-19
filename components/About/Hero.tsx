import Link from "next/link";

const stats = [
  { label: "Years of Service", value: "88+" },
  { label: "Regional Offices", value: "18" },
  { label: "Field Units Nationwide", value: "63" },
];

export default function Hero() {
  return (
    <section className="relative bg-[#0E3A68] text-white overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "linear-gradient(120deg, rgba(11,31,63,0.92), rgba(12,74,110,0.85)), url('https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?auto=format&fit=crop&w=1600&q=60')",
        }}
      ></div>

      <div className="relative max-w-6xl mx-auto px-4 md:px-6 lg:px-8 pt-24 pb-28 text-center">
        <div className="inline-flex items-center gap-2 bg-yellow-400 text-gray-900 px-5 py-2 rounded-full font-semibold mb-8 shadow-lg">
          <i className="fas fa-building-shield"></i>
          About Our Organization
        </div>

        <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
          National Bureau of Investigation
        </h1>
        <p className="text-lg md:text-xl text-gray-100 max-w-3xl mx-auto mb-10">
          Learn about the premier investigative agency of the Philippines responsible for handling and solving
          major high-profile cases that matter to the Filipino people.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link
            href="/apply#new"
            className="bg-yellow-400 text-gray-900 px-8 py-3 rounded-full font-semibold text-lg hover:bg-yellow-300 transition-colors shadow-lg"
          >
            Apply for Clearance
          </Link>
          <Link
            href="/branches"
            className="flex items-center gap-2 border border-white/40 px-6 py-3 rounded-full hover:bg-white/10 transition-colors"
          >
            <i className="fas fa-map-marker-alt"></i>
            Locate Branches
          </Link>
        </div>

        <div className="grid sm:grid-cols-3 gap-6 mt-14">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="bg-white/10 rounded-2xl px-6 py-5 backdrop-blur shadow-lg border border-white/10"
            >
              <p className="text-3xl font-bold">{stat.value}</p>
              <p className="uppercase tracking-wide text-sm text-gray-200">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-12 bg-white rounded-t-[60%] translate-y-1"></div>
    </section>
  );
}
