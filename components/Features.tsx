export default function Features() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#003B7A] inline-block relative pb-3">
            Enhanced Services
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-16 h-1 bg-red-600"></div>
          </h2>
          <p className="text-lg text-gray-600 mt-8 max-w-2xl mx-auto">
            Experience a more convenient way to apply for your NBI Clearance with our modern systems and services.
          </p>
        </div>

        {/* Service Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Online Appointment */}
          <div className="bg-white rounded-2xl shadow-lg overflow-visible hover:shadow-xl hover:-translate-y-2 transition-all duration-300 relative">
            {/* Image placeholder */}
            <div className="relative h-64 bg-gradient-to-br from-red-100 to-pink-50 flex items-center justify-center rounded-t-2xl overflow-hidden">
              <div className="text-center">
                <i className="fas fa-laptop-medical text-6xl text-gray-400 mb-2"></i>
                <p className="text-gray-500 text-sm">People working at laptop</p>
              </div>
              {/* NEW badge */}
              <div className="absolute top-4 right-4 bg-yellow-400 text-gray-900 px-4 py-1.5 rounded-full font-bold text-sm flex items-center gap-1">
                <i className="fas fa-bolt"></i>
                NEW
              </div>
            </div>

            {/* Overlaying Icon */}
            <div className="absolute top-56 left-1/2 -translate-x-1/2 z-10">
              <div className="w-20 h-20 bg-[#003B7A] rounded-full flex items-center justify-center shadow-lg border-4 border-white">
                <i className="fas fa-calendar-check text-white text-3xl"></i>
              </div>
            </div>

            {/* Card Content */}
            <div className="p-6 pt-14">
              <h3 className="text-2xl font-bold text-[#003B7A] mb-3 text-center">Online Appointment</h3>
              <p className="text-gray-600 mb-6 text-center">
                Schedule your biometrics appointment online to avoid long waiting times at NBI branches.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-2 text-gray-700">
                  <i className="fas fa-check text-green-500 mt-1"></i>
                  <span>Choose your preferred date and time</span>
                </li>
                <li className="flex items-start gap-2 text-gray-700">
                  <i className="fas fa-check text-green-500 mt-1"></i>
                  <span>Schedule with the nearest NBI branch</span>
                </li>
              </ul>
              <div className="text-center">
                <button className="px-8 py-3 border-2 border-[#003B7A] text-[#003B7A] rounded-full font-semibold hover:bg-[#003B7A] hover:text-white transition-colors">
                  Schedule Now
                </button>
              </div>
            </div>
          </div>

          {/* Door-to-Door Delivery */}
          <div className="bg-white rounded-2xl shadow-lg overflow-visible hover:shadow-xl hover:-translate-y-2 transition-all duration-300 relative">
            {/* Image placeholder */}
            <div className="relative h-64 bg-gradient-to-br from-blue-100 to-cyan-50 flex items-center justify-center rounded-t-2xl overflow-hidden">
              <div className="text-center">
                <i className="fas fa-id-card text-6xl text-gray-400 mb-2"></i>
                <p className="text-gray-500 text-sm">NBI Clearance Card</p>
              </div>
              {/* NEW badge */}
              <div className="absolute top-4 right-4 bg-yellow-400 text-gray-900 px-4 py-1.5 rounded-full font-bold text-sm flex items-center gap-1">
                <i className="fas fa-bolt"></i>
                NEW
              </div>
            </div>

            {/* Overlaying Icon */}
            <div className="absolute top-56 left-1/2 -translate-x-1/2 z-10">
              <div className="w-20 h-20 bg-[#003B7A] rounded-full flex items-center justify-center shadow-lg border-4 border-white">
                <i className="fas fa-truck text-white text-3xl"></i>
              </div>
            </div>

            {/* Card Content */}
            <div className="p-6 pt-14">
              <h3 className="text-2xl font-bold text-[#003B7A] mb-3 text-center">Door-to-Door Delivery</h3>
              <p className="text-gray-600 mb-6 text-center">
                Have your NBI Clearance delivered straight to your doorstep for maximum convenience.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-2 text-gray-700">
                  <i className="fas fa-check text-green-500 mt-1"></i>
                  <span>Nationwide coverage</span>
                </li>
                <li className="flex items-start gap-2 text-gray-700">
                  <i className="fas fa-check text-green-500 mt-1"></i>
                  <span>Secure packaging</span>
                </li>
                <li className="flex items-start gap-2 text-gray-700">
                  <i className="fas fa-check text-green-500 mt-1"></i>
                  <span>5-7 business days delivery (within Metro Manila)</span>
                </li>
              </ul>
              <div className="text-center">
                <button className="px-8 py-3 border-2 border-[#003B7A] text-[#003B7A] rounded-full font-semibold hover:bg-[#003B7A] hover:text-white transition-colors">
                  Learn More
                </button>
              </div>
            </div>
          </div>

          {/* E-Wallet Payments */}
          <div className="bg-white rounded-2xl shadow-lg overflow-visible hover:shadow-xl hover:-translate-y-2 transition-all duration-300 relative">
            {/* Image placeholder */}
            <div className="relative h-64 bg-gradient-to-br from-purple-100 to-violet-50 flex items-center justify-center rounded-t-2xl overflow-hidden">
              <div className="text-center">
                <i className="fas fa-credit-card text-6xl text-gray-400 mb-2"></i>
                <p className="text-gray-500 text-sm">Person using laptop for payment</p>
              </div>
              {/* NEW badge */}
              <div className="absolute top-4 right-4 bg-yellow-400 text-gray-900 px-4 py-1.5 rounded-full font-bold text-sm flex items-center gap-1">
                <i className="fas fa-bolt"></i>
                NEW
              </div>
            </div>

            {/* Overlaying Icon */}
            <div className="absolute top-56 left-1/2 -translate-x-1/2 z-10">
              <div className="w-20 h-20 bg-[#003B7A] rounded-full flex items-center justify-center shadow-lg border-4 border-white">
                <i className="fas fa-wallet text-white text-3xl"></i>
              </div>
            </div>

            {/* Card Content */}
            <div className="p-6 pt-14">
              <h3 className="text-2xl font-bold text-[#003B7A] mb-3 text-center">E-Wallet Payments</h3>
              <p className="text-gray-600 mb-6 text-center">
                Pay for your NBI Clearance quickly and securely using your preferred e-wallet.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-2 text-gray-700">
                  <i className="fas fa-check text-green-500 mt-1"></i>
                  <span>Multiple e-wallets supported</span>
                </li>
                <li className="flex items-start gap-2 text-gray-700">
                  <i className="fas fa-check text-green-500 mt-1"></i>
                  <span>Instant payment confirmation</span>
                </li>
                <li className="flex items-start gap-2 text-gray-700">
                  <i className="fas fa-check text-green-500 mt-1"></i>
                  <span>Secure transaction</span>
                </li>
                <li className="flex items-start gap-2 text-gray-700">
                  <i className="fas fa-check text-green-500 mt-1"></i>
                  <span>Skip the queue and get your clearance in minutes</span>
                </li>
              </ul>
              <div className="text-center">
                <button className="px-8 py-3 border-2 border-[#003B7A] text-[#003B7A] rounded-full font-semibold hover:bg-[#003B7A] hover:text-white transition-colors">
                  View Payment Options
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
