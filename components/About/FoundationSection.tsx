const bulletPoints = [
  "More than 3,000 applied for the initial 48 Agent positions.",
  "Only 45 candidates accepted appointments as Agents.",
  "The first team included lawyers, doctors, chemists, fingerprint technicians, photographers, and support staff.",
];

export default function FoundationSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 md:px-6 grid lg:grid-cols-[1.1fr_0.9fr] gap-12">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-[#003B7A] mb-6">The Foundation</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            The National Bureau of Investigation (NBI) came into existence on June 19, 1947, when Republic Act No. 157
            was approved. Its history traces back to November 13, 1936, when the DI under the Department of Justice was
            created through Commonwealth Act No. 181 by the First National Assembly.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            The DI was the brainchild of Commonwealth President Manuel L. Quezon and the then Secretary of Justice José
            Yulo. Capt. Thomas Duggan of the New York Police Department and Flaviano Guerrero, the only Filipino member
            of the FBI, were tapped to help set up a Philippine investigative service patterned after the best law
            enforcement agencies in the world.
          </p>

          <blockquote className="bg-white rounded-2xl shadow p-6 border-l-4 border-red-500 text-gray-700 italic">
            &quot;A Division of Investigation under the Department of Justice is hereby created... its duties shall be to
            help in the detection and prosecution of crimes; to acquire, collect, classify and preserve criminal
            identification records; and to obtain information on all matters affecting the public interest.&quot;
            <span className="block text-sm mt-4 not-italic text-gray-500">— Section 1, Commonwealth Act No. 181</span>
          </blockquote>
        </div>

        <div className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden flex flex-col">
          <div className="h-56 bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=60')" }}></div>
          <div className="p-8 flex-1 flex flex-col">
            <h3 className="text-2xl font-semibold text-[#003B7A] mb-4">Formation Period (1937)</h3>
            <p className="text-gray-600 mb-6">
              The Division of Investigation formally organized 45 Agents and over 100 specialists—from chemists to
              stenographers—who formed the backbone of the Bureau.
            </p>
            <ul className="space-y-3 text-gray-700">
              {bulletPoints.map((point) => (
                <li key={point} className="flex gap-3">
                  <i className="fas fa-check-circle text-green-500 mt-1"></i>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
