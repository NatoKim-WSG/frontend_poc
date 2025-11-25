"use client";

import { useCallback } from "react";

export default function Hero() {
  const handleSelect = useCallback((form: "new" | "existing") => {
    if (typeof window === "undefined") return;
    const nextHash = `#${form}`;
    if (window.location.hash !== nextHash) {
      window.location.hash = nextHash;
    } else {
      // Force state sync when clicking the same option twice
      window.dispatchEvent(new HashChangeEvent("hashchange"));
    }

    const target = document.getElementById(form) ?? document.getElementById("existing");
    target?.scrollIntoView({ behavior: "smooth", block: "start" });
  }, []);

  return (
    <section className="relative overflow-hidden bg-[#082346] text-white">
      <div className="absolute inset-0 opacity-15" style={{ backgroundImage: "radial-gradient(#ffffff30 1px, transparent 1px)", backgroundSize: "36px 36px" }}></div>
      <div className="relative max-w-5xl mx-auto px-4 md:px-6 lg:px-8 py-16 text-center">
        <div className="inline-flex items-center gap-2 bg-yellow-400 text-gray-900 px-5 py-2 rounded-full font-semibold mb-6 shadow-lg">
          <i className="fas fa-id-card"></i>
          Apply for NBI Clearance
        </div>
        <h1 className="text-3xl md:text-5xl font-bold mb-6">NBI Clearance Application Portal</h1>
        <p className="text-lg text-gray-200 mb-8">
          Register as a new user or log in to continue your NBI Clearance application. Complete the process online and
          choose your preferred branch for biometrics.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button
            type="button"
            onClick={() => handleSelect("new")}
            className="bg-yellow-400 text-gray-900 px-8 py-3 rounded-full font-semibold hover:bg-yellow-300 transition-colors shadow-lg"
          >
            New Applicant
          </button>
          <button
            type="button"
            onClick={() => handleSelect("existing")}
            className="border border-white/40 px-8 py-3 rounded-full font-semibold text-white hover:bg-white/10 transition-colors"
          >
            Existing User Login
          </button>
        </div>
      </div>
      <div className="absolute bottom-0 w-full h-10 bg-white rounded-t-[60%] translate-y-2"></div>
    </section>
  );
}
