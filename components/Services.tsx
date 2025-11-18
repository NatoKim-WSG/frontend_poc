import Link from "next/link";

export default function Services() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Nationwide Coverage */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Nationwide Coverage
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              With offices across the Philippines, getting your NBI clearance has never been more accessible
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-building text-blue-600 text-2xl"></i>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">Main Office</h3>
              <p className="text-gray-600 mb-4">NBI Building, Taft Avenue, Ermita, Manila</p>
              <Link href="/branches#main" className="text-blue-600 hover:text-blue-700 font-medium">
                Learn More <i className="fas fa-arrow-right ml-1"></i>
              </Link>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-map-marker-alt text-blue-600 text-2xl"></i>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">Regional Offices</h3>
              <p className="text-gray-600 mb-4">Multiple locations across Luzon, Visayas, and Mindanao</p>
              <Link href="/branches" className="text-blue-600 hover:text-blue-700 font-medium">
                Find Branches <i className="fas fa-arrow-right ml-1"></i>
              </Link>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-calendar-check text-blue-600 text-2xl"></i>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">Online Booking</h3>
              <p className="text-gray-600 mb-4">Schedule your appointment at your preferred location</p>
              <Link href="/authenticate" className="text-blue-600 hover:text-blue-700 font-medium">
                Schedule Now <i className="fas fa-arrow-right ml-1"></i>
              </Link>
            </div>
          </div>
        </div>

        {/* Overseas Services */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-2xl p-8 md:p-12">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-4">
                  <i className="fas fa-globe text-3xl"></i>
                  <h2 className="text-3xl font-bold">Special Services for Overseas Filipinos</h2>
                </div>
                <p className="text-blue-100 mb-6 text-lg">
                  We understand the needs of our kababayans abroad. Apply for your NBI clearance online
                  and have it delivered wherever you are.
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center gap-3">
                    <i className="fas fa-check-circle text-green-300"></i>
                    <span>Online application and payment</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <i className="fas fa-check-circle text-green-300"></i>
                    <span>International delivery options</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <i className="fas fa-check-circle text-green-300"></i>
                    <span>24/7 customer support</span>
                  </li>
                </ul>
                <Link
                  href="/authenticate#international"
                  className="inline-block bg-white text-blue-600 px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors font-semibold"
                >
                  Apply as OFW <i className="fas fa-arrow-right ml-2"></i>
                </Link>
              </div>
              <div className="flex-shrink-0">
                <div className="w-48 h-48 bg-white bg-opacity-10 rounded-full flex items-center justify-center backdrop-blur-sm">
                  <i className="fas fa-plane-departure text-6xl"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
