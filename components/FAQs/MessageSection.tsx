const subjects = [
  "Clearance Application",
  "Clearance Renewal",
  "International Services",
  "Delivery Issues",
  "Technical Problems",
  "Other Inquiries",
];

const quickFaqs = [
  {
    question: "What are the office hours?",
    answer: "Monday to Friday: 8:00 AM - 5:00 PM",
  },
  {
    question: "How long does it take to get an NBI Clearance?",
    answer: "If there's no 'hit', it is usually released the same day; otherwise, it may take 1-2 weeks.",
  },
  {
    question: "Can I apply for NBI Clearance online?",
    answer: "Yes, you can register and pay online, but you still need to visit an NBI office for biometrics.",
  },
  {
    question: "How can I track my application?",
    answer: "Use your reference number on the official NBI website to track the status.",
  },
];

export default function MessageSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 md:px-6 grid lg:grid-cols-2 gap-10">
        <div className="bg-white rounded-3xl shadow-xl border border-gray-100 p-8">
          <h3 className="text-2xl font-bold text-[#003B7A] mb-2">Send Us a Message</h3>
          <p className="text-gray-600 mb-6">Fill out the form and our team will get back to you as soon as possible.</p>

          <form className="space-y-5">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Full Name</label>
              <input
                type="text"
                placeholder="Enter your full name"
                className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:border-[#0B2C5A] focus:ring-2 focus:ring-[#0B2C5A]/20 outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Email Address</label>
              <input
                type="email"
                placeholder="Enter your email address"
                className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:border-[#0B2C5A] focus:ring-2 focus:ring-[#0B2C5A]/20 outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Subject</label>
              <select className="w-full border border-gray-200 rounded-xl px-4 py-3 text-gray-600 focus:border-[#0B2C5A] focus:ring-2 focus:ring-[#0B2C5A]/20 outline-none">
                <option value="">Select a topic</option>
                {subjects.map((subject) => (
                  <option key={subject} value={subject}>
                    {subject}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Message</label>
              <textarea
                rows={4}
                placeholder="How can we help you?"
                className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:border-[#0B2C5A] focus:ring-2 focus:ring-[#0B2C5A]/20 outline-none resize-none"
              ></textarea>
            </div>
            <button
              type="button"
              className="w-full bg-[#0B2C5A] text-white py-3 rounded-xl font-semibold hover:bg-[#0d2f63] transition-colors"
            >
              Send Message
            </button>
          </form>
        </div>

        <div className="bg-[#041631] text-white rounded-3xl shadow-xl p-10 flex flex-col justify-between gap-8">
          <div>
            <h4 className="text-2xl font-semibold mb-6">Frequently Asked Questions</h4>
            <div className="space-y-5 text-sm">
              {quickFaqs.map((faq) => (
                <div key={faq.question}>
                  <p className="text-yellow-300 font-semibold mb-1">{faq.question}</p>
                  <p className="text-gray-200">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <p className="text-sm text-gray-400 uppercase tracking-wider mb-3">Connect with us</p>
            <div className="flex gap-3">
              {["facebook-f", "twitter", "instagram", "youtube"].map((icon) => (
                <a
                  key={icon}
                  href="https://nbi.gov.ph"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/10 text-white flex items-center justify-center hover:bg-white/20 transition-colors"
                >
                  <i className={`fab fa-${icon}`}></i>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
