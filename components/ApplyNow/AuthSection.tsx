"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

const infoCards = [
  {
    title: "Fast Processing",
    description: "Set an appointment online and choose your preferred branch for biometrics capture.",
    icon: "fa-clock",
  },
  {
    title: "Secure Portal",
    description: "All personal information is encrypted. Please review our privacy policy before proceeding.",
    icon: "fa-shield-halved",
  },
  {
    title: "Nationwide Coverage",
    description: "Select from multiple branches across the Philippines for convenient processing.",
    icon: "fa-map-location-dot",
  },
];

type ActiveForm = "none" | "existing" | "new";

export default function AuthSection() {
  const [activeForm, setActiveForm] = useState<ActiveForm>("none");
  const [showForgot, setShowForgot] = useState(false);

  useEffect(() => {
    const syncFromHash = () => {
      if (typeof window === "undefined") return;
      const hash = window.location.hash.replace("#", "").toLowerCase();
      if (hash === "existing" || hash === "existing-user") {
        setActiveForm("existing");
      } else if (hash === "new") {
        setActiveForm("new");
      } else {
        setActiveForm("none");
      }
    };

    syncFromHash();
    window.addEventListener("hashchange", syncFromHash);
    return () => window.removeEventListener("hashchange", syncFromHash);
  }, []);

  const ExistingForm = () => (
    <div className="bg-white border border-gray-100 rounded-3xl shadow-lg p-8">
      <h2 className="text-2xl font-bold text-[#0B2C5A] mb-6">Existing User</h2>
      <form className="space-y-5 transition-all duration-300">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
          <input
            type="email"
            placeholder="Enter your email address"
            className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:border-[#0B2C5A] focus:ring-2 focus:ring-[#0B2C5A]/20 outline-none"
          />
        </div>
        <div>
          <div className="flex items-center justify-between mb-2">
            <label className="block text-sm font-medium text-gray-700">Password</label>
            <button
              type="button"
              onClick={() => setShowForgot(true)}
              className="text-sm text-[#0B2C5A] hover:underline font-semibold"
            >
              Forgot Password?
            </button>
          </div>
          <input
            type="password"
            placeholder="Enter your password"
            className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:border-[#0B2C5A] focus:ring-2 focus:ring-[#0B2C5A]/20 outline-none"
          />
        </div>
        <Link
          href="/user-profile"
          className="w-full bg-[#0B2C5A] text-white py-3 rounded-xl font-semibold hover:bg-[#0d2f63] transition-colors text-center inline-flex items-center justify-center"
        >
          Login
        </Link>
      </form>
    </div>
  );

  const NewUserForm = () => {
    const [hasOldClearance, setHasOldClearance] = useState(false);
    return (
    <div className="bg-white border border-gray-100 rounded-3xl shadow-lg p-8">
      <h2 className="text-2xl font-bold text-[#0B2C5A] mb-6">New User</h2>
      <form className="space-y-5 transition-all duration-300">
        <div>
          <p className="text-sm font-medium text-gray-700 mb-2">Do you have NBI Clearance?</p>
          <div className="flex gap-4 text-sm">
            <label className="flex items-center gap-2">
              <input
                type="radio"
                name="clearance"
                className="text-[#0B2C5A]"
                checked={hasOldClearance}
                onChange={() => setHasOldClearance(true)}
              />
              Yes
            </label>
            <label className="flex items-center gap-2">
              <input
                type="radio"
                name="clearance"
                className="text-[#0B2C5A]"
                checked={!hasOldClearance}
                onChange={() => setHasOldClearance(false)}
              />
              No, First time applying
            </label>
          </div>
        </div>

        {hasOldClearance && (
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">NBI ID No.</label>
            <input
              type="text"
              placeholder="Enter your NBI ID number"
              className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:border-[#0B2C5A] focus:ring-2 focus:ring-[#0B2C5A]/20 outline-none"
            />
          </div>
        )}

        <div className="grid sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
            <input
              type="text"
              placeholder="Enter your first name"
              className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:border-[#0B2C5A] focus:ring-2 focus:ring-[#0B2C5A]/20 outline-none"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
            <input
              type="text"
              placeholder="Enter your last name"
              className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:border-[#0B2C5A] focus:ring-2 focus:ring-[#0B2C5A]/20 outline-none"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Date of Birth (YYYY-MM-DD)</label>
          <input
            type="text"
            placeholder="YYYY-MM-DD"
            className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:border-[#0B2C5A] focus:ring-2 focus:ring-[#0B2C5A]/20 outline-none"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
          <input
            type="email"
            placeholder="Enter your email address"
            className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:border-[#0B2C5A] focus:ring-2 focus:ring-[#0B2C5A]/20 outline-none"
          />
        </div>

        <div className="grid sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Password</label>
            <input
              type="password"
              placeholder="Create a password"
              className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:border-[#0B2C5A] focus:ring-2 focus:ring-[#0B2C5A]/20 outline-none"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Confirm Password</label>
            <input
              type="password"
              placeholder="Confirm your password"
              className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:border-[#0B2C5A] focus:ring-2 focus:ring-[#0B2C5A]/20 outline-none"
            />
          </div>
        </div>

        <label className="flex items-start gap-2 text-sm text-gray-600">
          <input type="checkbox" className="mt-1" /> I agree to the{" "}
          <a href="/terms" className="text-[#0B2C5A] font-semibold hover:underline">
            Terms and Conditions
          </a>{" "}
          and{" "}
          <a href="/privacy" className="text-[#0B2C5A] font-semibold hover:underline">
            Privacy Policy
          </a>
          .
        </label>

        <Link
          href="/edit-profile"
          className="w-full bg-[#0B2C5A] text-white py-3 rounded-xl font-semibold hover:bg-[#0d2f63] transition-colors text-center block"
        >
          Register
        </Link>
      </form>
    </div>
    );
  };

  return (
    <section className="py-16 bg-[#F4F7FB] relative">
      <div id="existing" className="h-0 scroll-mt-32"></div>
      <div id="new" className="h-0 scroll-mt-32"></div>
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        {activeForm === "none" && (
          <div className="bg-white border border-gray-100 rounded-3xl shadow-lg p-8 text-center text-gray-600">
            <p className="font-semibold text-[#0B2C5A] mb-2">Select an option above to get started</p>
            <p>
              Choose <strong>New Applicant</strong> if this is your first time, or <strong>Existing User Login</strong>{" "}
              to resume an application.
            </p>
          </div>
        )}

        {activeForm === "existing" && <ExistingForm />}
        {activeForm === "new" && <NewUserForm />}

        <div className="grid md:grid-cols-3 gap-6 mt-10">
          {infoCards.map((card) => (
            <div key={card.title} className="bg-white rounded-2xl shadow border border-gray-100 p-6 text-center">
              <div className="w-12 h-12 bg-[#0B2C5A] text-white rounded-full flex items-center justify-center mx-auto mb-4">
                <i className={`fas ${card.icon}`}></i>
              </div>
              <h3 className="text-lg font-semibold text-[#0B2C5A] mb-2">{card.title}</h3>
              <p className="text-sm text-gray-600">{card.description}</p>
            </div>
          ))}
        </div>
      </div>

      {showForgot && (
        <div className="fixed inset-0 z-50">
          <div
            className="absolute inset-0 bg-black/20 backdrop-blur-sm"
            aria-hidden="true"
            onClick={() => setShowForgot(false)}
          />
          <div className="sticky top-20 md:top-24 flex justify-center px-4 py-8 pointer-events-none">
            <div
              className="pointer-events-auto relative w-full max-w-md bg-white rounded-2xl shadow-2xl border border-gray-100 p-6 max-h-[80vh] overflow-y-auto"
              onClick={(event) => event.stopPropagation()}
            >
              <button
                type="button"
                onClick={() => setShowForgot(false)}
                className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
                aria-label="Close forgot password"
              >
                <i className="fas fa-times"></i>
              </button>
              <h3 className="text-xl font-semibold text-[#0B2C5A] mb-2">Forgot Password</h3>
              <p className="text-sm text-gray-600 mb-4">
                Enter the email associated with your account and we&apos;ll send you a reset link.
              </p>
              <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
              <input
                type="email"
                placeholder="name@email.com"
                className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:border-[#0B2C5A] focus:ring-2 focus:ring-[#0B2C5A]/20 outline-none mb-4"
              />
              <div className="flex items-center justify-end gap-3">
                <button
                  type="button"
                  onClick={() => setShowForgot(false)}
                  className="px-4 py-2 text-sm font-semibold text-gray-600 hover:text-gray-800"
                >
                  Cancel
                </button>
                <button
                  type="button"
                  className="px-4 py-2 rounded-lg text-sm font-semibold bg-[#0B2C5A] text-white hover:bg-[#0d2f63] transition-colors"
                  onClick={() => setShowForgot(false)}
                >
                  Send Reset Link
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
