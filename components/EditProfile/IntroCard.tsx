import Link from "next/link";

export default function IntroCard() {
  return (
    <section className="mt-8">
      <div className="max-w-6xl mx-auto px-4 md:px-6 space-y-3">
        <div>
          <Link
            href="/user-profile"
            className="inline-flex items-center gap-2 px-3 py-2 bg-white border border-gray-200 rounded-lg shadow-sm text-sm font-semibold text-[#0B2C5A] hover:bg-blue-50 transition-colors"
          >
            <i className="fas fa-chevron-left text-xs"></i>
            Go Back
          </Link>
        </div>
        <div className="bg-white shadow-lg rounded-2xl border border-gray-100 p-6">
          <h2 className="text-2xl font-bold text-[#0B2C5A] mb-2">Edit Your Profile</h2>
          <p className="text-gray-600 text-sm md:text-base">
            Update or review your details below. This information will be used for your NBI Clearance application.
          </p>
        </div>
      </div>
    </section>
  );
}
