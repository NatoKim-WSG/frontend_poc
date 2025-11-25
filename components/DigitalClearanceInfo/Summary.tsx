import Link from "next/link";

export default function Summary() {
  return (
    <section className="bg-[#F5F7FB] py-10 min-h-screen">
      <div className="max-w-5xl mx-auto px-4 md:px-6 space-y-6">
        <div className="flex items-center justify-between">
          <Link
            href="/user-profile"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#0B2C5A] hover:underline"
          >
            <i className="fas fa-arrow-left text-xs"></i>
            Back to Profile
          </Link>
        </div>
        <div className="bg-white shadow-lg rounded-2xl border border-gray-100 p-6">
          <h2 className="text-2xl font-bold text-[#0B2C5A] mb-2">Digital Clearance Information</h2>
          <p className="text-gray-600 text-sm md:text-base">Confirm your details for your NBI Clearance Digital ID.</p>
        </div>

        <div className="bg-white shadow-lg rounded-2xl border border-gray-100 p-0 overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-100">
            <h3 className="text-lg font-semibold text-gray-800">Summary</h3>
          </div>
          <div className="p-6 space-y-4">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <p className="text-xs uppercase text-gray-500 font-semibold">Recipient</p>
                <p className="text-sm font-semibold text-gray-800">CHRISTIAN JOSE</p>
              </div>
              <div>
                <p className="text-xs uppercase text-gray-500 font-semibold">Email</p>
                <p className="text-sm font-semibold text-gray-800">xtianjose02@gmail.com</p>
              </div>
              <div>
                <p className="text-xs uppercase text-gray-500 font-semibold">Transaction Type</p>
                <p className="text-sm font-semibold text-gray-800">NBI Digital Clearance</p>
              </div>
            </div>

            <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-4 text-sm text-yellow-900 space-y-1">
              <p className="font-semibold">Important Reminders</p>
              <ul className="list-disc list-inside space-y-1 text-gray-700">
                <li>Your Digital NBI Clearance will be generated after payment.</li>
                <li>After confirmation check your app for your digital NBI Clearance.</li>
                <li>For inquiries, contact NBI customer support.</li>
              </ul>
            </div>

            <div className="flex justify-end pt-2">
              <Link
                href="/digital-payment"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-[#0B2C5A] text-white font-semibold hover:bg-[#0d2f63] transition-colors"
              >
                Proceed to Payment <i className="fas fa-arrow-right"></i>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
