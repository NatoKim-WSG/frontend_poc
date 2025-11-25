'use client';

import Link from "next/link";
import { useRef, useState, useEffect } from "react";

const InfoRow = ({ label, value }: { label: string; value: string }) => (
  <div className="text-sm text-gray-700">
    <p className="text-gray-500">{label}</p>
    <p className="font-semibold">{value}</p>
  </div>
);

export default function Dashboard() {
  const [showTransactions, setShowTransactions] = useState(false);
  const [showNewApplication, setShowNewApplication] = useState(false);
  const [showRenewal, setShowRenewal] = useState(false);
  const [showDelivery, setShowDelivery] = useState(false);
  const [showDigitalId, setShowDigitalId] = useState(false);
  const [digitalStatus, setDigitalStatus] = useState<"checking" | "nohit">("checking");
  const digitalTimerRef = useRef<NodeJS.Timeout | null>(null);

  const openTransactions = () => setShowTransactions(true);
  const closeTransactions = () => setShowTransactions(false);
  const openDigitalId = () => {
    setDigitalStatus("checking");
    setShowDigitalId(true);
  };
  const closeDigitalId = () => {
    if (digitalTimerRef.current) {
      clearTimeout(digitalTimerRef.current);
      digitalTimerRef.current = null;
    }
    setShowDigitalId(false);
  };

  useEffect(() => {
    if (!showDigitalId) return;
    digitalTimerRef.current = setTimeout(() => setDigitalStatus("nohit"), 1300);
    return () => {
      if (digitalTimerRef.current) {
        clearTimeout(digitalTimerRef.current);
        digitalTimerRef.current = null;
      }
    };
  }, [showDigitalId]);

  return (
    <section className="bg-[#F5F7FB] py-10 relative">
      <div className="max-w-6xl mx-auto px-4 md:px-6 space-y-8">
        <div className="bg-[#0A3A74] text-white rounded-2xl shadow-md p-6 flex flex-col md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-sm text-blue-100">What would you like to do today?</p>
            <h2 className="text-2xl md:text-3xl font-bold mt-1">Welcome back, CHRISTIAN!</h2>
          </div>
          <div className="text-right text-sm text-blue-100 mt-4 md:mt-0">
            <p>Today is Tuesday, November 25, 2025</p>
          </div>
        </div>

        <div className="grid lg:grid-cols-[1.1fr_1.2fr] gap-6">
          <div className="bg-white rounded-2xl shadow border border-gray-100 p-6 space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-[#0B2C5A] text-white flex items-center justify-center font-semibold">
                CJ
              </div>
              <div>
                <p className="text-sm text-gray-500">Your Information</p>
                <h3 className="text-lg font-bold text-gray-900">CHRISTIAN JOSE</h3>
                <p className="text-sm text-gray-600">xtianjose02@gmail.com</p>
              </div>
            </div>

            <div className="space-y-3">
              <InfoRow label="Mobile Number" value="+6390763621499" />
              <InfoRow label="Date of Birth" value="APR 28, 2002" />
            </div>

            <div>
              <Link
                href="/edit-profile"
                className="inline-flex items-center gap-2 px-3 py-2 rounded-md border border-gray-300 text-sm font-medium text-[#0B2C5A] hover:bg-[#0B2C5A] hover:text-white transition-colors"
              >
                <i className="fas fa-pen"></i>
                Edit Profile
              </Link>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow border border-gray-100 p-6 space-y-6">
            <h3 className="text-lg font-bold text-gray-900 flex items-center gap-2">
              <i className="fas fa-concierge-bell text-[#0B2C5A]"></i>
              Services
            </h3>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-[#0B2C5A] text-white rounded-xl p-4 shadow">
                <h4 className="font-semibold mb-2">Visit Your Local NBI Office</h4>
                <p className="text-sm text-blue-100 mb-4">Apply for new NBI Clearance or renew an existing one</p>
                <div className="space-y-2">
                  <button
                    type="button"
                    onClick={() => setShowNewApplication(true)}
                    className="block w-full bg-white text-[#0B2C5A] font-semibold py-2 rounded-md text-center hover:bg-blue-50 transition-colors"
                  >
                    New Application
                  </button>
                  <button
                    type="button"
                    onClick={() => setShowRenewal(true)}
                    className="block w-full bg-transparent border border-white text-white font-semibold py-2 rounded-md text-center hover:bg-white hover:text-[#0B2C5A] transition-colors"
                  >
                    Renewal
                  </button>
                </div>
              </div>

              <div className="bg-gradient-to-br from-[#0B2C5A] to-[#0D4EA3] text-white rounded-xl p-4 shadow relative overflow-hidden">
                <h4 className="font-semibold mb-2">Online Service</h4>
                <p className="text-sm text-blue-100 mb-4">Get your NBI Clearance at the comfort of your home</p>
                <div className="space-y-2">
                  <button
                    type="button"
                    onClick={() => setShowDelivery(true)}
                    className="block w-full bg-white text-[#0B2C5A] font-semibold py-2 rounded-md text-center hover:bg-blue-50 transition-colors"
                  >
                    Door-to-Door Delivery
                  </button>
                  <Link
                    href="/apply#digital-id"
                    onClick={(e) => {
                      e.preventDefault();
                      openDigitalId();
                    }}
                    className="block w-full bg-transparent border border-white text-white font-semibold py-2 rounded-md text-center hover:bg-white hover:text-[#0B2C5A] transition-colors"
                  >
                    Apply for Digital ID
                  </Link>
                </div>
                <span className="absolute top-3 right-3 bg-orange-500 text-white text-[10px] font-bold px-2 py-0.5 rounded">
                  Most Convenient
                </span>
              </div>
            </div>

            <div>
              <h4 className="text-base font-semibold text-gray-800 mb-3">Latest Transactions</h4>
              <div className="border border-gray-200 rounded-lg overflow-hidden">
                <div className="grid grid-cols-3 bg-gray-50 text-sm font-semibold text-gray-600 px-4 py-3">
                  <span>Item</span>
                  <span>Created</span>
                  <span>Payment</span>
                </div>
                <div className="px-4 py-6 text-center text-sm text-gray-500">No transactions found</div>
              </div>
              <div className="text-right mt-3">
                <button
                  type="button"
                  onClick={openTransactions}
                  className="text-sm font-semibold text-[#0B2C5A] hover:underline"
                >
                  View All Transactions
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {showTransactions && (
        <div className="absolute inset-0 z-50">
          <div className="absolute inset-0 bg-black/20 backdrop-blur-sm" aria-hidden="true" onClick={closeTransactions} />
          <div className="sticky top-20 md:top-24 flex justify-center px-4 py-8 pointer-events-none">
            <div
              className="pointer-events-auto relative bg-white rounded-2xl shadow-2xl border border-gray-100 max-w-3xl w-full max-h-[80vh] overflow-y-auto p-6"
              onClick={(event) => event.stopPropagation()}
            >
              <div className="flex items-center justify-between mb-4 sticky top-0 bg-white pt-1 pb-3">
                <h3 className="text-lg font-semibold text-gray-800">All Transactions</h3>
                <button type="button" onClick={closeTransactions} className="text-gray-500 hover:text-gray-800">
                  <i className="fas fa-times"></i>
                </button>
              </div>
              <div className="bg-gray-50 border border-dashed border-gray-200 rounded-xl p-8 text-center">
                <p className="text-base font-semibold text-gray-700">No Transactions Found</p>
                <p className="text-sm text-gray-500 mt-1">You don&apos;t have any transactions yet.</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {showNewApplication && (
        <div className="absolute inset-0 z-50">
          <div className="absolute inset-0 bg-black/20 backdrop-blur-sm" aria-hidden="true" onClick={() => setShowNewApplication(false)} />
          <div className="sticky top-20 md:top-24 flex justify-center px-4 py-8 pointer-events-none">
            <div
              className="pointer-events-auto relative bg-white rounded-2xl shadow-2xl border border-gray-100 max-w-xl w-full max-h-[80vh] overflow-y-auto p-6"
              onClick={(event) => event.stopPropagation()}
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-gray-800">New NBI Clearance Application</h3>
                <button
                  type="button"
                  onClick={() => setShowNewApplication(false)}
                  className="text-gray-500 hover:text-gray-800"
                >
                  <i className="fas fa-times"></i>
                </button>
              </div>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1">
                    Purpose of Clearance <span className="text-red-500">*</span>
                  </label>
                  <select className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#0B2C5A]/30">
                    <option value="">Select Purpose</option>
                    <option value="employment-local">Employment (Local)</option>
                    <option value="employment-abroad">Employment (Abroad)</option>
                    <option value="travel">Travel</option>
                    <option value="visa">Visa Application</option>
                  </select>
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1">
                      ID Type <span className="text-red-500">*</span>
                    </label>
                    <select className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#0B2C5A]/30">
                      <option value="">Select ID Type</option>
                      <option value="drivers-license">Driver&apos;s License</option>
                      <option value="postal-id">Postal ID</option>
                      <option value="passport">Philippine Passport</option>
                      <option value="philsys-id">PhilSys ID (National ID)</option>
                      <option value="sss-umid">SSS ID/UMID</option>
                      <option value="gsis-umid">GSIS ID/UMID</option>
                      <option value="voters-id">Voter&apos;s ID</option>
                      <option value="prc-id">PRC ID</option>
                      <option value="philhealth-id">PhilHealth ID</option>
                      <option value="pagibig-id">Pag-IBIG ID</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1">
                      ID Number <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#0B2C5A]/30"
                      placeholder="Enter your ID number"
                    />
                  </div>
                </div>
                <div className="flex items-center justify-end gap-3 pt-2">
                  <button
                    type="button"
                    onClick={() => setShowNewApplication(false)}
                    className="px-4 py-2 rounded-md border border-gray-300 text-sm font-semibold text-gray-700 hover:bg-gray-50"
                  >
                    Cancel
                  </button>
                  <Link
                    href="/schedule-appointment"
                    className="px-5 py-2 rounded-md bg-[#0B2C5A] text-white text-sm font-semibold hover:bg-[#0d2f63]"
                    onClick={() => setShowNewApplication(false)}
                  >
                    Continue
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {showRenewal && (
        <div className="absolute inset-0 z-50">
          <div className="absolute inset-0 bg-black/20 backdrop-blur-sm" aria-hidden="true" onClick={() => setShowRenewal(false)} />
          <div className="sticky top-20 md:top-24 flex justify-center px-4 py-8 pointer-events-none">
            <div
              className="pointer-events-auto relative bg-white rounded-2xl shadow-2xl border border-gray-100 max-w-lg w-full max-h-[80vh] overflow-y-auto p-6"
              onClick={(event) => event.stopPropagation()}
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-gray-800">Renew NBI Clearance</h3>
                <button
                  type="button"
                  onClick={() => setShowRenewal(false)}
                  className="text-gray-500 hover:text-gray-800"
                >
                  <i className="fas fa-times"></i>
                </button>
              </div>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1">
                    NBI ID Number <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#0B2C5A]/30"
                    placeholder="Enter your NBI ID number"
                  />
                  <p className="text-xs text-gray-500 mt-1">
                    Your NBI ID number can be found on your previous NBI Clearance certificate.
                  </p>
                </div>
                <div className="flex items-center justify-end gap-3 pt-2">
                  <button
                    type="button"
                    onClick={() => setShowRenewal(false)}
                    className="px-4 py-2 rounded-md border border-gray-300 text-sm font-semibold text-gray-700 hover:bg-gray-50"
                  >
                    Cancel
                  </button>
                  <button
                    type="button"
                    className="px-5 py-2 rounded-md bg-[#0B2C5A] text-white text-sm font-semibold hover:bg-[#0d2f63]"
                  >
                    Continue
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {showDelivery && (
        <div className="absolute inset-0 z-50">
          <div className="absolute inset-0 bg-black/20 backdrop-blur-sm" aria-hidden="true" onClick={() => setShowDelivery(false)} />
          <div className="sticky top-20 md:top-24 flex justify-center px-4 py-8 pointer-events-none">
            <div
              className="pointer-events-auto relative bg-white rounded-2xl shadow-2xl border border-gray-100 max-w-lg w-full max-h-[80vh] overflow-y-auto p-6"
              onClick={(event) => event.stopPropagation()}
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-gray-800">NBI Clearance Online Delivery</h3>
                <button
                  type="button"
                  onClick={() => setShowDelivery(false)}
                  className="text-gray-500 hover:text-gray-800"
                >
                  <i className="fas fa-times"></i>
                </button>
              </div>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1">
                    NBI ID Number <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#0B2C5A]/30"
                    placeholder="Enter your NBI ID number"
                  />
                  <p className="text-xs text-gray-500 mt-1">
                    Your NBI ID number can be found on your previous NBI Clearance certificate.
                  </p>
                </div>
                <div className="bg-blue-50 border border-blue-100 text-blue-900 text-sm rounded-xl p-3 flex gap-2">
                  <i className="fas fa-info-circle mt-0.5"></i>
                  <p>
                    The Online Delivery service allows you to have your NBI Clearance delivered to your doorstep. You must
                    have a previous NBI Clearance to use this service.
                  </p>
                </div>
                <div className="flex items-center justify-end gap-3 pt-2">
                  <button
                    type="button"
                    onClick={() => setShowDelivery(false)}
                    className="px-4 py-2 rounded-md border border-gray-300 text-sm font-semibold text-gray-700 hover:bg-gray-50"
                  >
                    Cancel
                  </button>
                  <button
                    type="button"
                    className="px-5 py-2 rounded-md bg-[#0B2C5A] text-white text-sm font-semibold hover:bg-[#0d2f63]"
                  >
                    Continue
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {showDigitalId && (
        <div className="absolute inset-0 z-50">
          <div className="absolute inset-0 bg-black/20 backdrop-blur-sm" aria-hidden="true" onClick={closeDigitalId} />
          <div className="sticky top-20 md:top-24 flex justify-center px-4 py-8 pointer-events-none">
            <div
              className="pointer-events-auto relative bg-white rounded-2xl shadow-2xl border border-gray-100 max-w-sm w-full max-h-[80vh] overflow-y-auto p-6"
              onClick={(event) => event.stopPropagation()}
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-gray-800">NBI Clearance Digital ID</h3>
                <button
                  type="button"
                  onClick={closeDigitalId}
                  className="text-gray-500 hover:text-gray-800"
                >
                  <i className="fas fa-times"></i>
                </button>
              </div>

              {digitalStatus === "checking" && (
                <div className="flex flex-col items-center justify-center py-8 space-y-5">
                  <div className="relative">
                    <div className="absolute inset-0 rounded-full bg-yellow-200/50 animate-ping"></div>
                    <div className="w-16 h-16 rounded-full border-4 border-yellow-400 flex items-center justify-center animate-spin slow-spin">
                      <i className="fas fa-search text-yellow-500 text-2xl"></i>
                    </div>
                  </div>
                  <div className="w-48 h-2 bg-gray-100 rounded-full overflow-hidden">
                    <div className="h-full bg-yellow-400 animate-[progress-move_1.4s_linear_infinite]"></div>
                  </div>
                  <div className="flex items-center gap-1 text-sm font-semibold text-gray-600">
                    <span>Checking for HIT</span>
                    <span className="flex gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-gray-500 animate-bounce"></span>
                      <span
                        className="w-1.5 h-1.5 rounded-full bg-gray-500 animate-bounce"
                        style={{ animationDelay: "0.15s" }}
                      ></span>
                      <span
                        className="w-1.5 h-1.5 rounded-full bg-gray-500 animate-bounce"
                        style={{ animationDelay: "0.3s" }}
                      ></span>
                    </span>
                  </div>
                </div>
              )}

              {digitalStatus === "nohit" && (
                <div className="flex flex-col items-center justify-center py-8 space-y-5">
                  <div className="w-16 h-16 rounded-full border-4 border-green-500 flex items-center justify-center">
                    <i className="fas fa-check text-green-500 text-3xl"></i>
                  </div>
                  <p className="text-sm font-semibold text-gray-600">No HIT Found.</p>
                  <Link
                    href="/digital-clearance-info"
                    onClick={closeDigitalId}
                    className="px-6 py-2.5 rounded-md bg-[#0B2C5A] text-white text-sm font-semibold hover:bg-[#0d2f63]"
                  >
                    Continue
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
