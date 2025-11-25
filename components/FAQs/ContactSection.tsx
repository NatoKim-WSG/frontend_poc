const cards = [
  {
    icon: "fa-phone",
    title: "Phone Support",
    description: "Call our dedicated hotline for immediate assistance",
    details: ["(02) 8524-1277", "(02) 8523-8231 local 5509"],
  },
  {
    icon: "fa-envelope",
    title: "Email Support",
    description: "Send us an email and we'll respond within 24 hours",
    details: ["info@nbi.gov.ph"],
  },
  {
    icon: "fa-location-dot",
    title: "Visit Us",
    description: "NBI Main Office, Manila",
    details: ["Diosdado Macapagal Blvd., Filinvest Cyberzone Bay City, Pasay"],
  },
];

export default function ContactSection() {
  return (
    <section id="contact" className="py-16 bg-[#F4F7FB] scroll-mt-36">
      <div className="max-w-6xl mx-auto px-4 md:px-6 text-center">
        <h2 className="text-3xl font-bold text-[#003B7A] mb-3">Contact Us</h2>
        <p className="text-gray-600 mb-10">
          Have questions about the NBI Clearance process? Get in touch with our dedicated support team.
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          {cards.map((card) => (
            <div key={card.title} className="bg-white rounded-3xl shadow-lg border border-gray-100 p-8 text-left">
              <div className="w-12 h-12 rounded-full bg-[#0B2C5A] text-white flex items-center justify-center mb-4">
                <i className={`fas ${card.icon}`}></i>
              </div>
              <h3 className="text-xl font-semibold text-[#0B2C5A] mb-2">{card.title}</h3>
              <p className="text-gray-600 mb-4 text-sm">{card.description}</p>
              <ul className="text-gray-900 text-sm space-y-1">
                {card.details.map((line) => (
                  <li key={line}>{line}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
