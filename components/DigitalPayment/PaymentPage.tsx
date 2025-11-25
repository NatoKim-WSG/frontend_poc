import Link from "next/link";

export default function PaymentPage() {
  return (
    <section className="bg-[#F5F7FB] py-10 min-h-screen">
      <div className="max-w-6xl mx-auto px-4 md:px-6 space-y-8">
        <div className="bg-white shadow-lg rounded-2xl border border-gray-100 p-6">
          <h2 className="text-2xl font-bold text-[#0B2C5A] mb-2">Digital Payment</h2>
          <p className="text-gray-600 text-sm md:text-base">Review your details and complete your payment.</p>
        </div>

        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-6">
          <div className="bg-white rounded-2xl border border-gray-100 shadow p-6 space-y-4">
            <h3 className="text-lg font-semibold text-gray-900">Transaction Summary</h3>
            <div className="space-y-3 text-sm text-gray-700">
              <div>
                <p className="text-xs uppercase text-gray-500 font-semibold">Purpose</p>
                <p className="font-semibold text-gray-800">Digital Clearance</p>
                <p className="text-xs text-gray-500">For job application within the Philippines</p>
              </div>
              <div>
                <p className="text-xs uppercase text-gray-500 font-semibold">Applicant</p>
                <p className="font-semibold text-gray-800">CHRISTIAN JOSE</p>
                <p className="text-xs text-gray-500">xtianjose02@gmail.com</p>
              </div>
              <div className="flex items-center gap-2 text-sm text-blue-900 bg-blue-50 border border-blue-100 rounded-lg px-3 py-2">
                <i className="fas fa-info-circle"></i>
                <span>Please verify that all information is correct before proceeding with payment.</span>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl border border-gray-100 shadow p-6 space-y-4">
            <h3 className="text-lg font-semibold text-gray-900">Cost Breakdown</h3>
            <div className="space-y-2 text-sm text-gray-800">
              <div className="flex items-center justify-between">
                <span>NBI Clearance Fee</span>
                <span className="font-semibold">₱140.00</span>
              </div>
              <div className="flex items-center justify-between">
                <span>E-Service Fee</span>
                <span className="font-semibold">₱25.00</span>
              </div>
              <div className="h-px bg-gray-200 my-2"></div>
              <div className="flex items-center justify-between font-semibold text-gray-900">
                <span>Total Amount</span>
                <span>₱165.00</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-blue-900 bg-blue-50 border border-blue-100 rounded-lg px-3 py-2">
                <i className="fas fa-info-circle"></i>
                <span>Total cost may vary based on the selected payment method.</span>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl border border-gray-100 shadow p-6 space-y-4">
          <h3 className="text-lg font-semibold text-gray-900">Payment Method</h3>
          <div className="space-y-3">
            <label className="flex items-start gap-3 border border-blue-200 bg-blue-50 rounded-lg p-3 cursor-pointer">
              <input type="radio" name="payment" defaultChecked className="mt-1" />
              <div className="flex-1">
                <div className="flex items-center gap-2">
                  <span className="font-semibold text-gray-900">eGovPay</span>
                  <span className="text-[10px] font-bold text-green-600 bg-green-100 px-2 py-0.5 rounded-full">
                    Recommended
                  </span>
                </div>
                <p className="text-xs text-gray-600">Fast and convenient payment through the most convenient payment gateway.</p>
                <div className="mt-2">
                  <img src="/egovpay.png" alt="eGovPay" className="h-6" />
                </div>
              </div>
            </label>

            <label className="flex items-start gap-3 border border-gray-200 rounded-lg p-3 cursor-pointer hover:border-gray-300">
              <input type="radio" name="payment" className="mt-1" />
              <div>
                <p className="font-semibold text-gray-900">Mock Payment Channel</p>
                <p className="text-xs text-gray-600">For demo purpose only.</p>
              </div>
            </label>

            <label className="flex items-start gap-3 border border-gray-200 rounded-lg p-3 cursor-pointer hover:border-gray-300">
              <input type="radio" name="payment" className="mt-1" />
              <div className="flex-1 space-y-1">
                <p className="font-semibold text-gray-900">Over-the-Counter Payment</p>
                <p className="text-xs text-gray-600">Pay at the NBI branch on your appointment date.</p>
                <div className="flex items-start gap-2 text-xs text-yellow-900 bg-yellow-50 border border-yellow-200 rounded-lg px-3 py-2">
                  <i className="fas fa-info-circle mt-0.5"></i>
                  <span>
                    You will need to pay at a separate payment counter at the NBI branch during your visit. Payment confirmation
                    will happen on-site.
                  </span>
                </div>
              </div>
            </label>
          </div>

          <div className="flex justify-end pt-2">
            <button
              type="button"
              className="px-6 py-3 rounded-lg bg-[#0B2C5A] text-white font-semibold hover:bg-[#0d2f63] transition-colors"
            >
              Proceed to Payment
            </button>
          </div>

          <p className="text-xs text-gray-500 text-center">
            By proceeding, you agree to our{" "}
            <Link href="/terms" className="text-[#0B2C5A] font-semibold hover:underline">
              Terms & Conditions
            </Link>{" "}
            and{" "}
            <Link href="/privacy" className="text-[#0B2C5A] font-semibold hover:underline">
              Privacy Policy
            </Link>
            .
          </p>
        </div>
      </div>
    </section>
  );
}
