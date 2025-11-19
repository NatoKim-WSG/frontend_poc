const mandateItems = [
  {
    title: "Critical Cases",
    icon: "fa-scale-balanced",
    description: "The NBI is mandated to handle high-profile crimes that impact national security.",
    points: [
      "Extrajudicial killings of media practitioners and activists",
      "Murders of justices and judges",
      "Threats to the security of high government officials",
    ],
  },
  {
    title: "Cybercrime & Technology",
    icon: "fa-laptop-code",
    description: "Specialized units track and solve technology-related offenses nationwide.",
    points: [
      "Cybercrime Prevention Act violations",
      "E-Commerce Act violations",
      "Access Devices Regulation Act violations",
    ],
  },
  {
    title: "Transnational Crimes",
    icon: "fa-globe",
    description: "Coordinated investigations with foreign counterparts and international bodies.",
    points: [
      "Human trafficking in airports and seaports",
      "Transnational crimes based on international agreements",
      "Identification of victims of natural disasters",
    ],
  },
];

export default function MandateSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#003B7A] inline-block relative pb-4">
            Our Mandate
            <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-16 h-1 bg-red-600"></span>
          </h2>
          <p className="text-lg text-gray-600 mt-6 max-w-3xl mx-auto">
            The National Bureau of Investigation is mandated to investigate specific cases of national interest and to
            deliver justice through cutting-edge investigative work.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {mandateItems.map((item) => (
            <div
              key={item.title}
              className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100 hover:-translate-y-1 hover:shadow-xl transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-full bg-[#003B7A] text-white flex items-center justify-center mb-6">
                <i className={`fas ${item.icon} text-xl`}></i>
              </div>
              <h3 className="text-2xl font-semibold text-[#003B7A] mb-3">{item.title}</h3>
              <p className="text-gray-600 mb-5 text-sm">{item.description}</p>
              <ul className="space-y-3">
                {item.points.map((point) => (
                  <li key={point} className="flex gap-3 text-gray-700">
                    <i className="fas fa-check text-green-500 mt-1"></i>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
